/*
TODO: create input text and image file
*/

export const MessageInput = ({
  id,
  name,
  placeholder,
  inputChange,
  inputRef
}) => {
  return (
    <div className="w-full h-auto bg-gray-900 rounded-lg p-2">
      <textarea
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="flex w-full h-auto max-h-36 bg-transparent text-gray-50 outline-none resize-none placeholder:text-gray-500 placeholder:capitalize scrollHidden"
        rows="1"
        onChange={inputChange}
        ref={inputRef}
      />
    </div>
  );
};
export const InputTxt = ({ id, name, placeholder }) => {
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full bg-gray-900 text-gray-50 outline-none rounded-lg p-2 placeholder:text-gray-500 placeholder:capitalize"
      translate="no"
    />
  );
};
