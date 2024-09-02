import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default function Search(){
  return (
    <div className="flex flex-col gap-2 w-full ">
      <label id="search" className="text-xl text-white">
        Search Input
      </label>
      <div className="flex rounded-md shadow-sm">
        <input
          id="search"
          type="text"
          placeholder="Type your search query here ..."
          className="flex-1 block w-full
          bg-gray-800 p-4 outline-0
          border border-gray-800 border-r-0 focus:border-purple-500 rounded-l-md
          transition-all ease-in-out duration-200
          peer"
        />
        <span className="inline-flex items-center px-3
        text-gray-500 hover:text-purple-500 bg-gray-800
        border border-l-0 border-gray-800 rounded-r-md
        cursor-pointer
        transition-all ease-in-out duration-200
        peer-focus:border-purple-500">
          <FontAwesomeIcon icon={faSearch} size="2xs" className="w-6 h-6" />
        </span>
      </div>
    </div>
  )
}
