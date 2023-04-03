
import Image from 'next/image'

function Card({title,pic}) {
  return (
    <label className="cursor-pointer">
        <input type="radio" className="peer sr-only"  name="business"/>
        <div className=" w-60 max-w-xl border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700  ring-1 transition-all peer-checked:text-slate-50 peer-checked:ring-offset-1 w-50">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="ml-2 text-lg text-slate-100 font-semibold uppercase " >{title.text}</p>
            </div>
            <div className="flex items-end justify-center mb-3">
              <Image src={pic} width="100" height="20" />
            </div>
          </div>
        </div>
      </label>

  )
}

export default Card