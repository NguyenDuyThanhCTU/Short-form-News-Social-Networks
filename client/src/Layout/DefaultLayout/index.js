import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'
function DefaultLayout({children}) {
  return (
    <div>
      <Header />
      <div className="flex gap-6 md:gap-20 mt-16">
        <div className="h-[92vh] overflow-hidden x1:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className></div>
      </div>
    </div>
  )
}

export default DefaultLayout
