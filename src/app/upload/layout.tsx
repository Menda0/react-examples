
export default function Layout({children}: any) {
  return (
    <div className="flex flex-col gap-4 p-10 bg-white rounded-md">
      {children}
    </div>
  )
}
