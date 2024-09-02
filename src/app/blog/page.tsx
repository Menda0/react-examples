export default function Blog() {
  return (
    <div className="flex flex-col gap-4" >
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="leading-2 text-4xl font-semibold text-purple-700">My Blog</h1>
        <p className="text-md">Blog sport with image, tags and author</p>
      </div>
      <div className="flex flex-col gap-4" >
        <div className="flex flex-row gap-4" >
          <img className="w-44 h-44 rounded-lg"  src="https://picsum.photos/300" alt="placeholder"/>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <div className="text-gray-400 text-xs" >02 September 2024</div>
              <span className="bg-gray-800 px-3 py-2 rounded-full text-xs">News</span>
              <span className="bg-gray-800 px-3 py-2 rounded-full text-xs">Tech</span>
              <span className="bg-gray-800 px-3 py-2 rounded-full text-xs">React</span>
            </div>
            <div className="flex flex-col gap-2" >
              <h2 className="text-xl" >My article title</h2>
              <div className="text-md text-gray-400 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec
                suscipit nisl a dolor egestas, vel
                porttitor diam efficitur. Donec suscipit nisl a dolor egestas, vel porttitor diam efficitur.
                Donec suscipit nisl a dolor egestas, vel
                porttitor diam efficitur. Donec suscipit nisl a dolor egestas, vel porttitor diam efficitur.
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img
              className="w-8 h-8 rounded-full shawdow-lg"
                src="https://randomuser.me/api/portraits/men/64.jpg" alt="User"/>
              <div className="flex flex-col" >
                <h5>Jonh Doe</h5>
                <div className="text-xs text-gray-400">Fullstack Developer - BigCorp</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4" >
          <img className="w-44 h-44 rounded-lg"  src="https://picsum.photos/300" alt="placeholder"/>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <div className="text-gray-400 text-xs" >02 September 2024</div>
              <span className="bg-gray-800 px-3 py-2 rounded-full text-xs">News</span>
              <span className="bg-gray-800 px-3 py-2 rounded-full text-xs">Tech</span>
              <span className="bg-gray-800 px-3 py-2 rounded-full text-xs">React</span>
            </div>
            <div className="flex flex-col gap-2" >
              <h2 className="text-xl" >My article title</h2>
              <div className="text-md text-gray-400 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec
                suscipit nisl a dolor egestas, vel
                porttitor diam efficitur. Donec suscipit nisl a dolor egestas, vel porttitor diam efficitur.
                Donec suscipit nisl a dolor egestas, vel
                porttitor diam efficitur. Donec suscipit nisl a dolor egestas, vel porttitor diam efficitur.
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img
              className="w-8 h-8 rounded-full shawdow-lg"
                src="https://randomuser.me/api/portraits/men/64.jpg" alt="User"/>
              <div className="flex flex-col" >
                <h5>Jonh Doe</h5>
                <div className="text-xs text-gray-400">Fullstack Developer - BigCorp</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4" >
          <img className="w-44 h-44 rounded-lg"  src="https://picsum.photos/300" alt="placeholder"/>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <div className="text-gray-400 text-xs" >02 September 2024</div>
              <span className="bg-gray-800 px-3 py-2 rounded-full text-xs">News</span>
              <span className="bg-gray-800 px-3 py-2 rounded-full text-xs">Tech</span>
              <span className="bg-gray-800 px-3 py-2 rounded-full text-xs">React</span>
            </div>
            <div className="flex flex-col gap-2" >
              <h2 className="text-xl" >My article title</h2>
              <div className="text-md text-gray-400 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec
                suscipit nisl a dolor egestas, vel
                porttitor diam efficitur. Donec suscipit nisl a dolor egestas, vel porttitor diam efficitur.
                Donec suscipit nisl a dolor egestas, vel
                porttitor diam efficitur. Donec suscipit nisl a dolor egestas, vel porttitor diam efficitur.
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img
              className="w-8 h-8 rounded-full shawdow-lg"
                src="https://randomuser.me/api/portraits/men/64.jpg" alt="User"/>
              <div className="flex flex-col" >
                <h5>Jonh Doe</h5>
                <div className="text-xs text-gray-400">Fullstack Developer - BigCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
