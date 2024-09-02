import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="fex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-white">People List</h1>
        <h5 className="text-md text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus mattis ante, vitae aliquet nibh. Etiam aliquet mi purus, in semper erat lobortis luctus. Sed vitae placerat ex</h5>
      </div>
      <div className="flex flex-row gap-4 items-center transition-all ease-in-out duration-200 hover:bg-gray-800 p-3 rounded-md cursor-pointer">
        <div>
          <img
            className='rounded-full w-65 h-65'
            src="https://marcomendao.betacode.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.680c1121.jpg&w=64&q=75"/>
        </div>
        <div className="grow">
          <div className="text-white">Marco Mendao</div>
          <div className="text-gray-400">CTO & Co-Founder at Betacode.tech</div>
        </div>
        <div className="text-purple-600 hover:text-purple-700 transition-all ease-in-out duration-200 ">
          <FontAwesomeIcon icon={faAnglesRight} size="2xs" className="w-6 h-6"/>
        </div>
      </div>
    </div>
  );
}
