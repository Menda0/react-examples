export default function Chat() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-row-reverse gap-2 ">
        <img
          className="w-12 h-12 rounded-full mt-4 shadow-lg"
          src="https://randomuser.me/api/portraits/men/73.jpg" alt="User"/>
        <div className="text-right flex-col gap-2 bg-gray-700 px-6 py-4 rounded-xl">
          <div className="text-xl text-purple-400 ">Walter Joe</div>
          <div className="text-md text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit blandit ex, fringilla viverra nulla
            ultrices tincidunt. Duis vitae elit nibh. Morbi a tempus ante. Sed lacinia aliquam malesuada. Nulla
            facilisi. Proin et arcu malesuada nisi egestas rhoncus. Integer sit amet eros volutpat, vestibulum ligula
            ut, mollis tortor. Nullam vitae semper mi.
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <img
          className="w-12 h-12 rounded-full mt-4 shadow-lg"
          src="https://randomuser.me/api/portraits/men/71.jpg" alt="User"/>
        <div className="flex-col gap-2 bg-gray-800 px-6 py-4 rounded-xl">
          <div className="text-xl text-purple-400 ">Jonh Doe</div>
          <div className="text-md text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit blandit ex, fringilla viverra nulla
            ultrices tincidunt. Duis vitae elit nibh. Morbi a tempus ante. Sed lacinia aliquam malesuada. Nulla
            facilisi. Proin et arcu malesuada nisi egestas rhoncus. Integer sit amet eros volutpat, vestibulum ligula
            ut, mollis tortor. Nullam vitae semper mi.
          </div>
        </div>
      </div>
    </div>
  );
}
