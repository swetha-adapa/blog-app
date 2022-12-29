import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./create.css"
const Create=()=>{
    const navigate=useNavigate()
    const [data, setData] = useState({
        file:null,
        title:"",
        desc:"",
        author:""   
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData =new FormData()
        formData.append("title",data.title)
        formData.append("desc",data.desc)
        formData.append("author",data.author)
        formData.append("file",data.file)
        axios.post(
            "http://localhost:3005/upload",
            formData,
            {"content-type":"multipart/form-data"}
        )
        navigate("/homepage")
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData(prevData=>({...prevData,[name]:value}))
    }
    const handleUpload=(e)=>{
        const uploadedfile=e.target.files[0]
        setData(prevData=>({...prevData,file:uploadedfile}))
    }
    return (
        <>
            <div className="main">
                <form id="form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="forma">
                    <div>
                            <input className="input1" type="text" placeholder="Title" id="discription" onChange={handleChange} />
                        </div>
                        <div>
                            <input className="input3" id="filetype" type="file" placeholder="Pick Image" onChange={handleUpload} />
                        </div>
                        <div>
                            <input className="input2" type="text" placeholder="Description" name="desc" id="discription" onChange={handleChange} />
                        </div>
                        <input className="input1" type="text" placeholder="Author" name="author" id="author" onChange={handleChange} />
                     <br/>  
                   <button className="btn"type="submit">Save Post</button>
                    </div>
                </form>
            </div>
        </>
    )

}
export default Create;