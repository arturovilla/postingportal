import Link from "next/link"


function Navbar() {
  return (
    <div className="text-2xl text-center mt-8 mb-3 flex justify-center ">
        <div className="flex justify-between w-1/3">
            <div className=" bg-blue-200 p-2 rounded-xl ">
                <Link href='/'>
                    Classic Auto 
                </Link>
            </div>

            <div className="bg-blue-200 p-2 rounded-xl">
                <Link href='/bags'>
                    CCC Bags  
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar