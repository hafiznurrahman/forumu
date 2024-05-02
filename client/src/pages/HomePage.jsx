/*
TODO: add components chat bubble
      -------------- text input and image file input
      -------------- send button
*/

import { MdForum } from "react-icons/md";

export default function HomePage() {
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold flex gap-3 fixed top-0 left-0 backdrop-blur-md p-3">
          <MdForum size={35} /> FORUMU
        </h1>
        <div className="w-screen h-screen p-3 pt-20 "></div>
      </section>
    </>
  );
}
