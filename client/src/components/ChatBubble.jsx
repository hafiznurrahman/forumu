/*
TODO: create chat bubble
      example: Chat GPT form code
*/

export default function ChatBubble({ user, message, time }) {
  return (
    <section className="w-11/12 text-gray-50 bg-gray-900 divide-y divide-gray-500 rounded-xl">
    
      <strong className="block p-2" translate="no">{`@${user}`}</strong>
      <p className="w-full block select-all font-mono p-4">{message}</p>
      <small className="w-full block text-xs text-end italic p-2" translate="no">{time}</small>
    </section>
  );
}
