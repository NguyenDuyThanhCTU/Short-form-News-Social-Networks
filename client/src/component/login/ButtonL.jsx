import { Link } from 'react-router-dom';
const ButtonL = (props) => {
  const { name, link } = props;

  return (
    <Link to={link}>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        {name}
      </button>
    </Link>
  );
};
export default ButtonL;
