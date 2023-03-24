
import { Inter } from 'next/font/google'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  return (
    <div className=" bg-gray-900 py-20 flex flex-wrap h-screen">
      
      
      
      <div className="text-center mx-auto px-6">
        <div>
          <h2 className="font-bold text-white text-6xl text-left md:text-center">Posting Portal</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-left md:text-center">
            Select the company below:
          </p>
          <p className='text-xs leading-8 text-gray-200 text-right'>
            Go to Statistics Page 
          </p>
        </div>

        {/*  */}
        <div className="mx-auto mt-10">
          
          <dl className=" mt-16 grid gap-8 sm:mt-2 grid-cols-2">
            <Card title= {{text: "Classic Auto Restyling"}} pic={"/static/images/car.png"}/>
            <Card title= {{text: "Classic Canvas Co."}} pic={"/static/images/ccc.png"}/>
          </dl>
        </div>
        {/*  */}
      </div>
      {/*  */}

    </div>
  )
}
