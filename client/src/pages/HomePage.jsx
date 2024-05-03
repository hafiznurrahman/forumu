/*
TODO: add components chat bubble
      -------------- text input and image file input
      -------------- send button
*/

import ChatBubble from "../components/ChatBubble.jsx";
import { InputMessage } from "../components/Input.jsx";
import { SendButton, InputFileButton } from "../components/Button.jsx";
import { MdForum, MdSend, MdImage } from "react-icons/md";

export default function HomePage() {
  return (
    <>
      <section className="w-screen h-screen p-3">
        <h1
          className="w-screen text-3xl font-bold flex gap-3 fixed top-0 left-0 bg-gray-50 border-b border-gray-200 p-3"
          translate="no"
        >
          <MdForum size={35} /> FORUMU
        </h1>

        <div className="w-full h-auto flex flex-col gap-4 p-3 py-20">
          <ChatBubble
            user="programmer"
            message="Server Running and UI Completed"
            time="10:35 - 03/05/2024"
          />
        </div>

        <div className="w-full h-auto flex gap-3 items-center justify-between fixed bottom-0 left-0 bg-gray-50 border-t border-gray-200 p-3">
          <InputMessage
            id="messageInput"
            name="messageInput"
            placeholder="message"
          />

          <InputFileButton>
            <MdImage size={25} />
          </InputFileButton>

          <SendButton>
            <MdSend size={25} />
          </SendButton>
        </div>
      </section>
    </>
  );
}
