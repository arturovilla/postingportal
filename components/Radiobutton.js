

function Radiobutton({platform, name}) {
  return (
    <label className="cursor-pointer">
        <input type="radio" className="peer sr-only"  name={platform.text}/>
        <div className="mt-10 w-72 max-w-xl bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  ring-1 transition-all peer-checked:text-slate-50 peer-checked:ring-offset-1 w-50">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="ml-2 text-slate-100 text-sm font-semibold uppercase " >{platform.text}</p>
              
            </div>
            <div className="ml-2 text-slate-100 flex items-end justify-between">
              <p>{name.text}</p>

            </div>
          </div>
        </div>
      </label>
  )
}

export default Radiobutton