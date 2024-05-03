/*
TODO: create button
*/

export default function SendButton({ children, btnRef,click }) {
  return (
    <button className="bg-gray-900 text-gray-50 rounded-lg p-2 disabled:bg-gray-500" ref={btnRef} onClick={click}>
      {children}
    </button>
  );
}
