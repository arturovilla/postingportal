

function Radiobutton({platform, name}) {
  return (
    <label className="cursor-pointer">
        <input type="radio" className="peer sr-only"  name={platform.text}/>
        <div className="mt-8 w-72 max-w-xl border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700  ring-1 transition-all peer-checked:text-slate-50 peer-checked:ring-offset-1 w-50">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="ml-2 text-slate-100 text-sm font-semibold uppercase " >{platform.text}</p>
              
            </div>
            <div className="ml-2 mt-2 text-xs text-slate-400 flex items-end justify-between peer-checked:text-slate-50">
              <p>{name.text}</p>
            </div>
          </div>
        </div>
      </label>
  )
}

export default Radiobutton