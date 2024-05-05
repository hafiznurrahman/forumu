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
  const messageInputRef = useRef(null);
  const sendBtnRef = useRef(null);
  const messageBoxAreaRef = useRef(null);

  const socket = io(import.meta.env.VITE_API_URL || "http://localhost:3000/");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  const handleSendBtn = () => {
    const now = new Date();
    const currentHour = String(now.getHours()).padStart(2, "0");
    const currentMinute = String(now.getMinutes()).padStart(2, "0");
    const currentTime = `${currentHour}:${currentMinute}`;

    const messageInputCurrent = messageInputRef.current;
    const checkInput = /\S/gm;

    if (!checkInput.test(messageInputCurrent.value)) {
      messageInputCurrent.focus();
    } else {
      messageInputCurrent.blur();
      socket.emit("msgData", socket.id, messageInputCurrent.value, currentTime);
      bubbleElement(socket.id, messageInputCurrent.value, currentTime);
      messageInputCurrent.style.height = "auto";
      messageInputCurrent.value = "";
    }
  };

  const bubbleElement = (username, message, time) => {
    const messageBoxAreaCurrent = messageBoxAreaRef.current;

    const listItem = document.createElement("li");
    listItem.className = "w-full h-auto";

    const divWrapper = document.createElement("div");
    divWrapper.className = "w-full grid grid-cols-8 gap-2";
    listItem.appendChild(divWrapper);

    const imgAvatar = document.createElement("img");
    imgAvatar.src = "/favicon.webp";
    imgAvatar.alt = username;
    imgAvatar.className =
      "w-full h-auto aspect-square border rounded-full col-start-8";
    divWrapper.appendChild(imgAvatar);

    const divContent = document.createElement("div");
    divWrapper.appendChild(divContent);
    divContent.className = "row-start-1 col-start-1 col-span-7";

    const divInner = document.createElement("div");
    divInner.className = "w-full flex flex-row-reverse gap-2";
    divContent.appendChild(divInner);

    const strongUsername = document.createElement("strong");
    strongUsername.className =
      "max-w-[50%] text-nowrap overflow-x-auto scrollHidden";
    strongUsername.textContent = username;
    divInner.appendChild(strongUsername);

    const spanTime = document.createElement("span");
    spanTime.className = "text-gray-500";
    spanTime.textContent = time;
    divInner.appendChild(spanTime);

    const divBackground = document.createElement("div");
    divBackground.className = "bg-gray-900 rounded-lg p-3";
    divContent.appendChild(divBackground);

    const paragraph = document.createElement("p");
    paragraph.className =
      "select-all text-white whitespace-pre overflow-x-auto";
    paragraph.textContent = message;
    divBackground.appendChild(paragraph);

    messageBoxAreaCurrent.appendChild(listItem);
    messageBoxAreaCurrent.scrollTop = messageBoxAreaCurrent.scrollHeight;
  };

  socket.on("msgData", (username, message, time) => {
    const messageBoxAreaCurrent = messageBoxAreaRef.current;

    const listItem = document.createElement("li");
    listItem.className = "w-full h-auto";

    const divWrapper = document.createElement("div");
    divWrapper.className = "w-full grid grid-cols-8 gap-2";
    listItem.appendChild(divWrapper);

    const imgAvatar = document.createElement("img");
    imgAvatar.src = "/favicon.webp";
    imgAvatar.alt = username;
    imgAvatar.className =
      "w-full h-auto aspect-square border rounded-full col-start-1";
    divWrapper.appendChild(imgAvatar);

    const divContent = document.createElement("div");
    divWrapper.appendChild(divContent);
    divContent.className = "row-start-1 col-start-2 col-span-7";

    const divInner = document.createElement("div");
    divInner.className = "w-full flex gap-2";
    divContent.appendChild(divInner);

    const strongUsername = document.createElement("strong");
    strongUsername.className =
      "max-w-[50%] text-nowrap overflow-x-auto scrollHidden";
    strongUsername.textContent = username;
    divInner.appendChild(strongUsername);

    const spanTime = document.createElement("span");
    spanTime.className = "text-gray-500";
    spanTime.textContent = time;
    divInner.appendChild(spanTime);

    const divBackground = document.createElement("div");
    divBackground.className = "bg-gray-900 rounded-lg p-3";
    divContent.appendChild(divBackground);

    const paragraph = document.createElement("p");
    paragraph.className =
      "select-all text-white whitespace-pre overflow-x-auto";
    paragraph.textContent = message;
    divBackground.appendChild(paragraph);

    messageBoxAreaCurrent.appendChild(listItem);
    messageBoxAreaCurrent.scrollTop = messageBoxAreaCurrent.scrollHeight;
  });

  return (
    <>
      <h1
        className="w-screen text-3xl font-bold flex gap-3 fixed top-0 left-0 bg-gray-50 border-b border-gray-200 p-3 z-[999]"
        translate="no"
      >
        <MdForum size={35} />
        FORUMU
      </h1>

      <ul
        className="w-full h-full flex flex-col gap-4 overflow-y-auto scroll-smooth p-2 py-20 scrollHidden"
        ref={messageBoxAreaRef}
      ></ul>

      <div className="w-full h-auto flex gap-3 items-end justify-between fixed bottom-0 left-0 bg-gray-50 border-t border-gray-200 p-3">
        <MessageInput
          id="messageInput"
          name="messageInput"
          placeholder="message"
          inputRef={messageInputRef}
        />

        <Button>
          <MdImage size={25} />
        </Button>

        <Button btnRef={sendBtnRef} click={handleSendBtn}>
          <MdSend size={25} />
        </Button>
      </div>
    </>
  );
}
