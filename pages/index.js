
import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import Radiobutton from '@/components/Radiobutton'
import Inputfield from '@/components/Inputfield'
import Submit from '@/components/Submit'
const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  return (
    <div className="flex bg-gray-900 py-20 flex-wrap h-screen">
      
      
      
      <div className="text-center mx-auto px-6">
        <div>
          <h2 className="font-bold text-white text-6xl text-left md:text-center">Posting Portal</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-left md:text-center">
            Select the company below:
          </p>
          <a href="#" className='text-xs leading-8 text-gray-400 text-left fixed top-0 left-0 ml-5 mt-5 hover:text-slate-100'>
            Go to Statistics Page &#8594;
          </a>
        </div>


        <div className="mx-auto mt-0 flex items-center justify-center">
          
          <dl className=" mt-16 grid gap-8 sm:mt-2 grid-cols-2">
            <Card title= {{text: "Classic Auto"}} pic={"/static/images/car.png"}/>
            <Card title= {{text: "Classic Canvas Co."}} pic={"/static/images/ccc.png"}/>
          </dl>
        </div>

        <div className="mx-auto mt-10 flex items-center justify-center ">
          <dl className="">
            <Radiobutton platform= {{text: "Facebook"}} name={{text: "classiccanvasco"}}/>
            <Radiobutton platform= {{text: "Instagram"}} name={{text: "classiccanvas.co"}}/>
            <Radiobutton platform= {{text: "LinkedIn"}} name={{text: "classic-canvas-company"}}/>
            <Radiobutton platform= {{text: "Twitter"}} name={{text: "classiccanvasco"}}/>
            <Radiobutton platform= {{text: "Youtube"}} name={{text: "classiccanvasco."}}/>
          </dl>
        </div>

        <div className="mx-auto mt-10 flex items-center justify-center ">
          <Inputfield/>
        </div>

        <div className="mx-auto mt-10 flex items-center justify-center ">
          <Submit/>
        </div>

      </div>


    </div>
  )
}
