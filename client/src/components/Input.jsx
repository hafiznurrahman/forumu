/*
TODO: create input text and image file
*/

export const InputMessage = ({ id, name, placeholder }) => {
  return (
    <textarea
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full bg-gray-900 text-gray-50 outline-none rounded-lg p-2 resize-none placeholder:text-gray-500 placeholder:capitalize"
      rows="1"
      translate="no"
    ></textarea>
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
