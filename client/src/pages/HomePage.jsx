/*
TODO: add components chat bubble
      -------------- text input and image file input
      -------------- send button
*/

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

  useEffect(() => {
    const sendBtnCurrent = sendBtnRef.current;
    sendBtnCurrent.disabled = btnDisabled;
  }, [btnDisabled]);

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

  const handleSendBtn = () => {
    setBtnDisabled(true);
    const messageInputCurrent = messageInputRef.current;
    messageInputCurrent.blur();
    setTimeout(() => {
      bubbleElement("testing", msgVal, "00:00 - 00/00/0000");
    }, 0);
    messageInputCurrent.value = "";
    messageInputCurrent.style.height = "auto";
  };

  const bubbleElement = (user, message, sendingTime) => {
    const messageBoxAreaCurrent = messageBoxAreaRef.current;

    const section = document.createElement("section");
    section.className =
      "w-11/12 select-none text-gray-50 bg-gray-900 divide-y divide-gray-500 rounded-xl ml-auto";

    const strong = document.createElement("strong");
    strong.className = "block p-2";
    strong.textContent = `@${user}`;
    strong.setAttribute("translate", "no");

    const paragraph = document.createElement("p");
    paragraph.className = "w-full block select-all p-4";
    paragraph.textContent = message;

    const small = document.createElement("small");
    small.className = "w-full block text-xs text-end italic p-2";
    small.textContent = sendingTime;
    small.setAttribute("translate", "no");

    section.appendChild(strong);
    section.appendChild(paragraph);
    section.appendChild(small);
    messageBoxAreaCurrent.appendChild(section);

    messageBoxAreaCurrent.scrollTop = messageBoxAreaCurrent.scrollHeight;
  };

  return (
    <>
      <section className="w-screen h-dvh p-3">
        <h1
          className="w-screen text-3xl font-bold flex gap-3 fixed top-0 left-0 bg-gray-50 border-b border-gray-200 p-3"
          translate="no"
        >
          <MdForum size={35} /> FORUMU
        </h1>

        <div
          className="w-full h-full flex flex-col gap-4 overflow-y-auto scroll-smooth p-2 py-20 scrollHidden"
          ref={messageBoxAreaRef}
        >
          

        </div>

        <div className="w-full h-auto flex gap-3 items-end justify-between fixed bottom-0 left-0 bg-gray-50 border-t border-gray-200 p-3">
          <MessageInput
            id="messageInput"
            name="messageInput"
            placeholder="message"
            inputChange={handleInputChange}
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
