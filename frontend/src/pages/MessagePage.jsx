import React, { useState } from "react";
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  Smile,
  Paperclip,
  HelpCircle,
  ArrowLeft,
} from "lucide-react";

const MessagePage = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");
  const [showChatList, setShowChatList] = useState(true);

  const chats = [
    {
      id: 1,
      name: "Robert Anderson",
      avatar: "👩🏻‍💼",
      lastMessage:
        "I'm very interested in your AI project. Let's discuss the...",
      online: true,
    },
    {
      id: 2,
      name: "Jennifer Lee",
      avatar: "👨🏾‍💼",
      lastMessage: "Your green energy project looks promising!",
      online: true,
    },
    {
      id: 3,
      name: "David Martinez",
      avatar: "👨🏾‍💼",
      lastMessage: "When can we schedule a call to discuss the healthcar...",
      online: false,
    },
    {
      id: 4,
      name: "Sarah Thompson",
      avatar: "👩🏻‍💼",
      lastMessage: "Thanks for the update! I'll review the documents.",
      online: false,
    },
    {
      id: 5,
      name: "Michael Chen",
      avatar: "👨🏽‍💼",
      lastMessage: "The pitch deck looks great. A few suggestions...",
      online: true,
    },
    {
      id: 6,
      name: "Project Team - Smart Home",
      avatar: "👨🏾‍💼",
      lastMessage: "Emily: Let's finalize the prototype by Friday",
      online: false,
    },
    // Add more dummy data to test scroll
    {
      id: 7,
      name: "New Contact 1",
      avatar: "👨🏻‍💼",
      lastMessage: "Looking forward to our meeting!",
      online: false,
    },
    {
      id: 8,
      name: "New Contact 2",
      avatar: "👩🏾‍💼",
      lastMessage: "Can we move the schedule to Friday?",
      online: true,
    },
    {
      id: 9,
      name: "New Contact 3",
      avatar: "👨🏽‍💻",
      lastMessage: "Sure, I’ll send the updated report.",
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      text: "Hi! I reviewed your AI-powered smart home system project and I'm really impressed with the innovation.",
      time: "10:30 AM",
      sent: false,
    },
    {
      id: 2,
      text: "Thank you so much! I'm glad you found it interesting. We've put a lot of work into making the AI truly adaptive.",
      time: "10:32 AM",
      sent: true,
      read: true,
    },
    {
      id: 3,
      text: "The market analysis in your pitch deck is solid. What's your timeline for the beta release?",
      time: "10:35 AM",
      sent: false,
    },
    {
      id: 4,
      text: "We're planning to launch the beta in Q2 2026. We already have a waiting list of about 500 early adopters.",
      time: "10:37 AM",
      sent: true,
      read: true,
    },
    {
      id: 5,
      text: "That's excellent progress. I'd like to discuss a potential investment. Are you available for a call this week?",
      time: "10:40 AM",
      sent: false,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] bg-white overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          showChatList ? "flex" : "hidden"
        } lg:flex w-full lg:w-[400px] flex-col bg-blue-600 transition-all duration-300`}
      >
       

        {/* Search Bar */}
        <div className="px-4 pb-3 mt-7">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full bg-white rounded-full py-2.5 pl-11 pr-4 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Chat List with Scroll */}
        <div
          className="flex-1 overflow-y-auto bg-gray-100 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#3b82f6 #e5e7eb",
          }}
        >
          {chats.map((chat, index) => (
            <div
              key={chat.id}
              onClick={() => {
                setSelectedChat(index);
                setShowChatList(false);
              }}
              className={`flex items-start gap-3 p-4 cursor-pointer transition-colors border-l-4 ${
                selectedChat === index
                  ? "bg-white border-blue-600"
                  : "bg-gray-100 hover:bg-gray-50 border-transparent"
              }`}
            >
              <div className="relative shrink-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
                  {chat.avatar}
                </div>
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <h3 className="font-semibold text-gray-900 text-[15px] mb-1">
                  {chat.name}
                </h3>
                <p className="text-sm text-gray-600 truncate leading-snug">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50 min-w-0">
        {/* Chat Header */}
        <div className="bg-blue-600 text-white px-4 sm:px-6 py-3 sm:py-4 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Back button (mobile only) */}
              <button
                className="lg:hidden p-2 mr-1 hover:bg-blue-500 rounded-full transition-colors"
                onClick={() => setShowChatList(true)}
              >
                <ArrowLeft size={22} />
              </button>

              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center text-2xl">
                  {chats[selectedChat].avatar}
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-base sm:text-lg">
                  {chats[selectedChat].name}
                </h2>
                <p className="text-xs sm:text-sm text-blue-100">online</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <button className="hover:bg-blue-500 p-2.5 rounded-full transition-colors">
                <Video size={20} />
              </button>
              <button className="hover:bg-blue-500 p-2.5 rounded-full transition-colors">
                <Phone size={20} />
              </button>
              <button className="hover:bg-blue-500 p-2.5 rounded-full transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#e8e4dc]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-[80%] sm:max-w-[65%]">
                <div
                  className={`${
                    msg.sent
                      ? "bg-[#d3e3f5] text-gray-900"
                      : "bg-white text-gray-900"
                  } rounded-lg px-4 sm:px-5 py-3.5 shadow-sm`}
                >
                  <p className="text-sm sm:text-[15px] leading-relaxed">
                    {msg.text}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 px-1">
                  <span className="text-xs text-gray-600">{msg.time}</span>
                  {msg.sent && msg.read && (
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-gray-100 px-3 sm:px-6 py-3 sm:py-2 border-t border-gray-200 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="text-gray-500 hover:text-gray-700 transition-colors p-2">
              <Smile size={22} />
            </button>
            <button className="text-gray-500 hover:text-gray-700 transition-colors p-2">
              <Paperclip size={22} />
            </button>
            <input
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 rounded-full p-2.5 sm:p-3 transition-colors">
              <HelpCircle size={22} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
