/*
TODO: add components chat bubble
      -------------- text input and image file input
      -------------- send button
*/

import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import ChatBubble from "../components/ChatBubble.jsx";
import Button from "../components/Button.jsx";
import { MessageInput } from "../components/Input.jsx";
import { MdForum, MdSend, MdImage, MdInfo } from "react-icons/md";

export default function HomePage() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msgVal, setMsgVal] = useState("");

  const messageInputRef = useRef(null);
  const sendBtnRef = useRef(null);
  const messageBoxAreaRef = useRef(null);
  const socket = io(import.meta.env.VITE_API_URL || "http://localhost:3000/");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  /* 
  const handleInputChange = e => {
    const messageInputCurrent = messageInputRef.current;
    const messageInputValue = messageInputCurrent.value.trim();
    setMsgVal(e.target.value);
    setBtnDisabled(!messageInputValue);
  };

  useEffect(() => {
    const messageInputCurrent = messageInputRef.current;
    messageInputCurrent.style.height = "auto";
    messageInputCurrent.style.height = messageInputCurrent.scrollHeight + "px";
  }, [msgVal]);

  useEffect(() => {
    const sendBtnCurrent = sendBtnRef.current;
    sendBtnCurrent.disabled = btnDisabled;
  }, [btnDisabled]);*/

  const handleSendBtn = () => {
    setBtnDisabled(true);
    const messageInputCurrent = messageInputRef.current;
    messageInputCurrent.blur();
    socket.emit("message", messageInputCurrent.value);
    bubbleElement("HUMAN", messageInputCurrent.value, "00:00 - 00/00/0000");
    messageInputCurrent.value = "";
    messageInputCurrent.style.height = "auto";
  };

  const bubbleElement = (user, message) => {
    const messageBoxAreaCurrent = messageBoxAreaRef.current;

    const li = document.createElement("li");
    li.className =
      "w-[80%] h-auto border-l border-gray-900 border-dashed p-2 block relative ml-auto";

    const div1 = document.createElement("div");
    div1.className = "w-2 h-2 bg-gray-900 rounded-full absolute -top-1 -left-1";

    const strong = document.createElement("strong");
    strong.className =
      "w-1/2 block text-xs text-center bg-gray-900 rounded-lg p-1 ml-auto mb-0.5 relative";

    const span = document.createElement("span");
    span.className = "block truncate text-red-600";
    span.textContent = user;

    const messageSpan = document.createElement("span");
    messageSpan.className =
      "block bg-gray-900 text-gray-50 rounded-lg hyphens-auto p-2";
    messageSpan.textContent = message;

    strong.appendChild(span);

    li.appendChild(div1);
    li.appendChild(strong);
    li.appendChild(messageSpan);
    messageBoxAreaCurrent.appendChild(li);

    messageBoxAreaCurrent.scrollTop = messageBoxAreaCurrent.scrollHeight;
  };

  socket.on("message", data => {
    const messageBoxAreaCurrent = messageBoxAreaRef.current;

    const li = document.createElement("li");
    li.className =
      "w-[80%] h-auto border-r border-gray-900 border-dashed p-2 block relative";

    const div1 = document.createElement("div");
    div1.className =
      "w-2 h-2 bg-gray-900 rounded-full absolute -top-1 -right-1";

    const strong = document.createElement("strong");
    strong.className =
      "w-1/2 block text-xs text-center bg-gray-900 rounded-lg p-1 mb-0.5 relative";

    const span = document.createElement("span");
    span.className = "block truncate text-blue-600";
    span.textContent = "WHOAMI";

    const messageSpan = document.createElement("span");
    messageSpan.className =
      "block bg-gray-900 text-gray-50 rounded-lg hyphens-auto p-2";
    messageSpan.textContent = data;

    strong.appendChild(span);

    li.appendChild(div1);
    li.appendChild(strong);
    li.appendChild(messageSpan);
    messageBoxAreaCurrent.appendChild(li);

    messageBoxAreaCurrent.scrollTop = messageBoxAreaCurrent.scrollHeight;
  });

  return (
    <>
      <section className="w-screen h-dvh p-3">
        <h1
          className="w-screen text-3xl font-bold flex gap-3 fixed top-0 left-0 bg-gray-50 border-b border-gray-200 p-3 z-[999]"
          translate="no"
        >
          <MdForum size={35} />
          FORUMU
        </h1>

        <ul
          className="w-full h-full overflow-y-auto scroll-smooth p-2 py-20 scrollHidden"
          ref={messageBoxAreaRef}
        ></ul>

        <div className="w-full h-auto flex gap-3 items-end justify-between fixed bottom-0 left-0 bg-gray-50 border-t border-gray-200 p-3">
          <MessageInput
            id="messageInput"
            name="messageInput"
            placeholder="message"
            /* inputChange={handleInputChange}*/
            inputRef={messageInputRef}
          />

          <Button>
            <MdImage size={25} />
          </Button>

          <Button btnRef={sendBtnRef} click={handleSendBtn}>
            <MdSend size={25} />
          </Button>
        </div>
      </section>
    </>
  );
}
