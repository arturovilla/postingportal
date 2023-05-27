
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React,{useState, useEffect} from 'react'



// 
// 
// 
// 
// 
// 
// 

function Form() {
    // form logic  
    const formik = useFormik({
        initialValues: {
            facebook: "",
            instagram: "",
            linkedin: "",
            twitter: "",
            caption: ""
        },
        //Validate form up here with yup if neccesary
    })

    const [images, setImages] = useState([])

    function onImageChange(e){
        setImages([...e.target.files])
    }
    

    const uploadFiles = async (images) => {

        const file = images[0]
        const filename = file.name
        const filetype = file.type

        const res = await fetch(`/api/s3submit?file=${filename}&fileType=${filetype}`)
        console.log("res:" + res)



        const { url, fields } = await res.json()
        console.log('url:' + url)
        console.log("fields:" + fields.toString())

        const formData = new FormData()

        Object.entries(...fields, file).forEach(([key,value]) => {
            formData.append(key, value.toString())
        })
        console.log(formData)

        const upload = await fetch(url, {
            method: 'POST',
            body: formData
        })

        

        if (upload.ok){
            console.log('good shit')
        }else{
            console.log('somethings fucked up')
        }
    }

    return (
        <div className='bg-white w-1/2 flex rounded-lg shadow-lg justify-center'>
            <form onSubmit={formik.handleSubmit} className=''>
                <div>
                    <h1>Please select which accounts you wish to post to:</h1>
                    <div className='bg-red-300 mt-6 p-2'>
                        {/* here are where accounts get selected */}
                        <label className="block text-sm pt-2" htmlFor='facebook'>FACEBOOK</label>
                        <input type='checkbox' name='facebook' value="checked" onChange={formik.handleChange}/>

                        <label className="block text-sm pt-2" htmlFor='instagram'>INSTAGRAM</label>
                        <input type='checkbox' name='instagram' value="checked" onChange={formik.handleChange}/>

                        <label className="block text-sm pt-2" htmlFor='linkedin'>LINKEDIN</label>
                        <input type='checkbox' name='linkedin' value="checked" onChange={formik.handleChange}/>

                        <label className="block text-sm pt-2" htmlFor='twitter'>TWITTER</label>
                        <input type='checkbox' name='twitter' value="checked" onChange={formik.handleChange}/>

                        

                    </div>
                    <div className='bg-purple-300 mt-6 p-2'>
                        {/* here are where photos are uploaded and caption is set*/}
                        <label className="block text-sm pt-2" htmlFor='picstopost' >Select Photos to post</label>
                        <input type='file' name='picstopost' multiple accept="image/*"  onChange={onImageChange}/>

                        <label className="block text-sm pt-2" htmlFor='caption'>Please Type Caption</label>
                        <input type='text' name='caption' value={formik.values.caption} onChange={formik.handleChange}/>

                    </div>
                    <div className='bg-green-300 mt-6 p-2'>
                        {/* here is the submit button*/}
                        <button className='bg-blue-600 text-sm text-white py-3 my-2 rounded-lg px-4' onClick={() => {uploadFiles(images)}} >submit this bitch</button>
                    </div>

                </div>
            </form>
        </div>
  )
}

export default Form