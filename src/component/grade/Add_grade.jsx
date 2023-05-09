import React,{useState} from "react"
import axios from "axios"
import "./add.css"
const Add_grade =()=>{
    const [value,setValue]=useState({
        Name:"",
        grade:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("/add_grade",{
            value
        })
    }
    const onchange=(e)=>{
        setValue({...value ,[e.target.name]: e.target.value,})
        
    }
    return(
        <div className="add_grade">
            <form onSubmit={handleSubmit}>
                <label> Name  </label>
                <input name="Name" onChange={onchange}/>
                <label>grade</label>
                <input name="grade" onChange={onchange}/>
                <button> submit</button>
            </form>
        </div>
    )
}
export default Add_grade