const InputL = (props) => {
  const { id } = props;
  return (
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">{id}</label>
      <input class="border rounded-lg px-3 py-2 w-full" id={id} name={id} required />
    </div>
  );
};

export default InputL;
