const InputR = (props) => {
  const {id, name, getdata, getvalue, error} = props

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {name}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          onChange={getdata}
          value={getvalue}
          className="border rounded-lg px-3 py-2 w-full"
        />
      </div>
      <p className="text-red-500">{error}</p>
    </div>
  )
}

export default InputR
