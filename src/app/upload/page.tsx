import icon from "examples/app/upload/img.svg"
import Image from 'next/image';
import {TrashIcon} from '@heroicons/react/24/outline'


function UploadButton() {
  return (
    <>
      <Image alt="uploadbt" src={icon} width={77} height={77}/>
      <a className="border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-full font-semibold cursor-pointer hover:bg-gray-100 transition-all ease-in-out duration-200">
        Upload Curriculum Vitae
      </a>
    </>
  )
}

function Uploaded() {
  return (
    <div
      className="bg-white w-fit flex flex-row gap-2 items-center  border-2 border-blue-900 text-blue-900 px-6 py-2 rounded-full font-semibold group cursor-pointer hover:bg-blue-900/5 transition-all ease-in-out duration-200">
      <div
        className="bg-red-50 p-2 rounded-full border border-red-500 hidden group-hover:block hover:bg-red-100 transition-all ease-in-out duration-200">
        <TrashIcon className="h-3 w-3 text-red-500"/>
      </div>
      <Image className="group-hover:hidden" alt="uploadbt" src={icon} width={30} height={30}/>
      <div>my-curriculum.pdf</div>
    </div>
  )
}

export default function Download() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <UploadButton/>
      <div className="h-px my-8 bg-blue-900 border-0 w-full"></div>
      <Uploaded/>
    </div>

  )
}
