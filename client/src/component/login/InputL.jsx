const InputL = (props) => {
  const { id, getdata, getvalue, name, value } = props;
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{name}</label>
      <input
        className="border rounded-lg px-3 py-2 w-full"
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
