import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { server } from "../../server";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";
import styles from "../../styles/styles";
import { TfiGallery } from "react-icons/tfi";
import socketIO from "socket.io-client";
import { format } from "timeago.js";
const ENDPOINT = "http://localhost:4000/";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

const ShopInbox = () => {
  const { seller } = useSelector((state) => state.seller);
  const [conversation, setConversation] = useState();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const [userData, setUserData] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [activeStatus, setActiveStatus] = useState(false);



  useEffect(() => {
    if (seller) {
      const sellerId = seller?._id;
      socketId.emit("addUser", sellerId);
      socketId.on("getUsers", (data) => {
        setOnlineUsers(data);
      });
    }
  }, [seller]);

  const onlineCheck = (chat) => {
    const chatMembers = chat.members.find((member) => member !== seller?._id);
    const online = onlineUsers.find((user) => user.userId === chatMembers);
    

    return online ? true : false;
  };

  // get messages
  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await axios.get(
          `${server}/message/get-all-messages/${currentChat?._id}`
        );

        setMessages(response.data.messages);
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [currentChat]);

  useEffect(() => {
    socketId.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    axios
      .get(`${server}/conversation/get-all-seller-conversation/${seller._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setConversation(res.data.conversation);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, [seller]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    const message = {
      sender: seller._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const receiverId = currentChat.members.find(
      (member) => member.id !== seller._id
    );
    socketId.emit("sendMessage", {
      senderId: seller._id,
      receiverId,
      text: newMessage,
    });

    try {
      if (newMessage !== "") {
        await axios
          .post(`${server}/message/create-new-message`, message)
          .then((res) => {
            setMessages([...messages, res.data.message]);
            updateLastMessage();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateLastMessage = async () => {
    socketId.emit("updateLastMessage", {
      lastMessage: newMessage,
      lastMessageId: seller._id,
    });

    await axios
      .put(`${server}/conversation/update-last-message/${currentChat._id}`, {
        lastMessage: newMessage,
        lastMessageId: seller._id,
      })
      .then((res) => {
        console.log(res.data);
        setNewMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-[90%] bg-white m-5 h-[85vh] overflow-y-scroll rounded">
      {!open && (
        <>
          <h1 className="text-center text-[30px] py-3 font-Poppins">
            All Messages
          </h1>
          {/* All message list */}
          {conversation &&
            conversation.map((item, index) => (
              <MessageList
                data={item}
                key={index}
                index={index}
                open={open}
                setOpen={setOpen}
                setCurrentChat={setCurrentChat}
                me={seller._id}
                userData={userData}
                setUserData={setUserData}
                online={onlineCheck(item)}
                setActiveStatus={setActiveStatus}
              />
            ))}
        </>
      )}
      {open && (
        <>
          <Inbox
            setOpen={setOpen}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            sendMessageHandler={sendMessageHandler}
            messages={messages}
            sellerId={seller._id}
            userData={userData}
            activeStatus={activeStatus}
          />
        </>
      )}
    </div>
  );
};

const MessageList = ({ data, index, open, setOpen, setCurrentChat,me,userData,setUserData,online,setActiveStatus }) => {
  
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const handlecLick = (id) => {
    navigate(`?${id}`);
    setOpen(true);
  };

  useEffect(() => {
    setActiveStatus(online)
    const userId = data.members.find((user) => user !== me);
    console.log(userId);

    const getUser = async () => {
      try {
        const res = await axios.get(`${server}/user/user-info/${userId}`);
        setUserData(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [me, data]);
  console.log(userData)

  return (
    <div
      className={`w-full flex px-3 my-3 p-3 ${
        active === index ? "bg-[#00000010]" : "bg-transparent"
      }`}
      onClick={() =>
        setActive(index) || handlecLick(data._id) || setCurrentChat(data)
      }
    >
      <div className="relative">
        <img
          src={userData?.avatar?.url}
          alt=""
          className="w-[60px] h-[60px] rounded-full"
        />
        {online ? (
          <div className="w-[12px] h-[12px] bg-green-400 rounded-full absolute top-[2px] right-[2px]" />
        ) : (
          <div className="w-[12px] h-[12px] bg-[#c7b9b9] rounded-full absolute top-[2px] right-[2px]" />
        )}
      </div>
      <div className="pl-3">
        <h1 className="text-[18px]">{userData?.name}</h1>
        <p className="text-[16px] text-[#000c]">{ data?.lastMessageId !== userData?._id
            ? "You:"
            : userData?.name.split(" ")[0] + ": "}{" "} {data?.lastMessage}</p>
      </div>
    </div>
  );
};

const Inbox = ({
  setOpen,
  newMessage,
  setNewMessage,
  sendMessageHandler,
  messages,
  sellerId,
  userData,
  activeStatus
}) => {
  return (
    <>
      <div className="w-full min-h-full flex flex-col justify-between">
        {/* message header */}
        <div className="w-full flex p-3 items-center justify-between bg-slate-200">
          <div className="flex">
            <img
              src={userData?.avatar?.url}
              alt=""
              className="w-[60px] h-[60px] rounded-full"
            />
            <div className="pl-3">
              <h1 className="text-[18px] font-[600]"> {userData?.name} </h1>
              <h1> {activeStatus ? "Active Now" : " "}</h1>
            </div>
          </div>
          <AiOutlineArrowRight
            size={20}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* messages */}
      <div className="px-3 h-[65vh] py-3 overflow-y-scroll">
        {messages &&
          messages.map((item, index) => {
            return (
              <div
                className={`flex w-full my-2 ${
                  item.sender === sellerId ? "justify-end" : "justify-start"
                }`}
                
              >
                {/* {item.sender !== sellerId && (
                  <img
                    src={`${userData?.avatar?.url}`}
                    className="w-[40px] h-[40px] rounded-full mr-3"
                    alt=""
                  />
                )} */}
                {item.images && (
                  <img
                    src={`${item.images?.url}`}
                    className="w-[300px] h-[300px] object-cover rounded-[10px] mr-2"
                  />
                )}
                {item.text !== "" && (
                  <div>
                    <div
                      className={`w-max p-2 rounded ${
                        item.sender === sellerId ? "bg-[#000]" : "bg-[#38c776]"
                      } text-[#fff] h-min`}
                    >
                      <p>{item.text}</p>
                    </div>

                    <p className="text-[12px] text-[#000000d3] pt-1">
                      {format(item.createdAt)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
      </div>

        {/* send message input */}
        <form
          aria-required={true}
          className="p-3 relative w-full flex justify-between items-center"
          onSubmit={sendMessageHandler}
        >
          <div className="w-[30px]">
            <input
              type="file"
              name=""
              id="image"
              className="hidden"
              // onChange={handleImageUpload}
            />
            <label htmlFor="image">
              <TfiGallery className="cursor-pointer" size={20} />
            </label>
          </div>
          <div className="w-full">
            <input
              type="text"
              required
              placeholder="Enter your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className={`${styles.input}`}
            />
            <input type="submit" value="Send" className="hidden" id="send" />
            <label htmlFor="send">
              <AiOutlineSend
                size={20}
                className="absolute right-4 top-5 cursor-pointer"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default ShopInbox;
