import React,{useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./homepage.css"
const HomePage=()=>{    
    

const [result,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3005/posts").then((data)=>data.json()).then((result)=>{
      setData(result)
    })
},[])

const Navigate=useNavigate();
const handleLogout=()=>{
    localStorage.setItem("authorization","");
    Navigate("/")
}

  return(
  <>
  <div className="body">
        <div className="nav">
            <h2>Blog App</h2> <p>Home <Link to ="/create">Create</Link> </p><h4 className="logout" onClick={handleLogout}>Logout</h4>
        </div>
  
  {
  result.map((user)=>{
      return (
        <div className="mainData">
            
        <div className="title" >{user.title}</div>
        <img className="selfie" src={`http://localhost:3005/${user.path}`} alt="swetha" />
        <div className="disc" >{user.description}</div>
        <div className="autor">{user.author}</div>    
        <div className="date">{user.date}</div>
        
        </div>
      )
    })
  }
  </div>
  </>
  )
}
export default HomePage;