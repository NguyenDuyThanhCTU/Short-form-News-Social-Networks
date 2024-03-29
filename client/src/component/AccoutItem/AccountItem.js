import {TiTick} from 'react-icons/ti'
import avt from '../../assets/imgs/1.jpg'

function AccountItem({data}) {
  return (
    <div className="p-4 flex items-center">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={data.profile.avatar} />
      </div>

      <div className="ml-3">
        <h2 class="text-lg font-medium text-gray-900">{data.username}</h2>
        <p class="text-gray-600">{data.profile.name}</p>
      </div>
    </div>
  )
}

export default AccountItem
