

function Inputfield() {
  return (
    <div className=" w-72  max-w-xl ">
      <p className="ml-2 mb-1 text-gray-400 text-left">Add your caption here:</p>
      <input type="text"  className="p-2 h-10 w-72 text-slate-200 bg-gray-800 border border-gray-700 rounded-sm"  name="caption"/>
    </div>
  )
}

export default Inputfield