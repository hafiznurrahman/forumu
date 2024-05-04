/*
TODO: create chat bubble
      example: Chat GPT form code
*/

export default function ChatBubble({ user, message, sendingTime }) {
  return (
    <section className="w-11/12 select-none text-gray-50 bg-gray-900 divide-y divide-gray-500 rounded-xl">
    
      <strong className="block  p-2" translate="no">{`@${user}`}</strong>
      <p className="w-full block select-all break-all p-4">{message}</p>
      <small className="w-full block text-xs text-end italic p-2" translate="no">{sendingTime}</small>
    </section>
  );
}
