
import { Inter } from 'next/font/google'

import Form from '@/components/Form'
const inter = Inter({ subsets: ['latin'] })





export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">

      <Form/>
    </div>
  )
}
