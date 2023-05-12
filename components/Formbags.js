import { useFormik } from 'formik'

function Formbags() {

   // form logic 
   const formik = useFormik({
    initialValues: {
        name: " "
    },
    //Validate form up here with yup if neccesary
    
    //submit form
    onSubmit: (values) => {
        console.log(values)
    }
})
console.log(formik.values)

    return (
    <div className='bg-white w-1/2 flex rounded-lg shadow-lg justify-center'>
        <form onSubmit={formik.handleSubmit} className=''>
            <div>
                <h1>Please select which accounts you wish to post to:</h1>
                <div className='bg-red-300 mt-6 p-2'>
                    {/* here are where accounts get selected */}
                    <label className="block text-sm pt-2" htmlFor='facebook'>FACEBOOK</label>
                    <input type='checkbox' name='facebook' />

                    <label className="block text-sm pt-2" htmlFor='instagram'>INSTAGRAM</label>
                    <input type='checkbox' name='instagram' />

                    <label className="block text-sm pt-2" htmlFor='linkedin'>LINKEDIN</label>
                    <input type='checkbox' name='linkedin' />

                    <label className="block text-sm pt-2" htmlFor='twitter'>TWITTER</label>
                    <input type='checkbox' name='twitter' />

                    

                </div>
                <div className='bg-purple-300 mt-6 p-2'>
                    {/* here are where photos are uploaded and caption is set*/}
                    <label className="block text-sm pt-2" htmlFor='picstopost' >Select Photos to post</label>
                    <input type='file' name='picstopost' multiple/>

                    <label className="block text-sm pt-2" htmlFor='caption'>Please Type Caption</label>
                    <input type='text' name='caption' />

                </div>
                <div className='bg-green-300 mt-6 p-2'>
                    {/* here is the submit button*/}
                    <button type='submit' className='bg-blue-600 text-sm text-white py-3 my-2 rounded-lg px-4'>submit this bitch</button>
                </div>

            </div>
        </form>
    </div>
  )
}

export default Formbags