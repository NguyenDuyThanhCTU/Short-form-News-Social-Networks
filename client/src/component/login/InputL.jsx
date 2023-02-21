const InputL = (props) => {
  const { id, getdata, getvalue, name, value } = props;
  return (
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">{name}</label>
      <input
        class="border rounded-lg px-3 py-2 w-full"
        id={id}
        // name={id}
        onChange={getdata}
        value={getvalue}
        placeholder={value}
      />
    </div>
  );
};

export default InputL;
