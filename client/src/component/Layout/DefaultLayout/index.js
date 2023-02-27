import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function DefaultLayout(props) {
  const { route } = props;
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div>{route}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
