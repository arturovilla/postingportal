import styles from '@/styles/Home.module.css'
import Image from 'next/image'

function Card({title,pic}) {
  return (
    <a href="#" className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title.text}</h5>
        <div style={{display: "flex",justifyContent: "center",}}>
            <Image src={pic} width="100" height="1000" />
        </div>
    </a>
  )
}

export default Card