import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'
import VideoCard from './VideoCard/VideoCard'

function DefaultLayout({children}) {
  return (
    <div>
      <Header />
      <div className="flex gap-6 md:gap-20 mt-16">
        <div className="h-[92vh] overflow-hidden x1:hover:overflow-auto">
          <Sidebar />
        </div>

        <div className="flex flex-col gap-10 videos h-full w-2/3">
          {children}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default DefaultLayout
