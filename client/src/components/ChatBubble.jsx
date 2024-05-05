/*
TODO: create chat bubble
      example: Chat GPT form code
*/

export default function ChatBubble({ user, message, sendingTime }) {
  return (
            <div className="w-full flex gap-2">
              <img
                src="/favicon.webp"
                alt="avatar"
                className="w-8 h-8 border rounded-full"
              />

              <div>
                <div className="w-full flex space-x-2">
                  <strong className="max-w-[50%] text-nowrap overflow-x-auto scrollHidden">
                    username
                  </strong>
                  <span className="text-gray-500">00:00</span>
                </div>
                <div className="bg-gray-900 rounded-lg p-3">
                  <p className="text-white whitespace-pre-wrap break-words"></p>
                </div>
              </div>
            </div>
  );
}
