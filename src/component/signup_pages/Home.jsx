import React from "react"
import {Link} from "react-router-dom"
const Home=()=>{
    

    return(
        <div>
            this is home page
            <Link to="/add_blog">Add_Blog</Link>
        </div>
    )
}
export default Home