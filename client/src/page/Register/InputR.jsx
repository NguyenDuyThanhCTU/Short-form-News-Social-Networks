const InputR = (props) => {
  const { id, name, getdata, getvalue, error } = props;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{name}</label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          onChange={getdata}
          value={getvalue}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
        />
      </div>
      <p className="text-red-500 text-sm mt-1 ml">{error}</p>
    </div>
  );
};

export default InputR;
