import { Link } from 'react-router-dom';
const ButtonL = (props) => {
  const { name, type } = props;

  return (
    <div>
      {type === 'signup' ? (
        <Link to="/register">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type={type}
          >
            {name}
          </button>
        </Link>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {name}
        </button>
      )}
    </div>
  );
};
export default ButtonL;
