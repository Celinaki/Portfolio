import * as React from "react"
import Navbar from "../components/navbar"

const NotFoundPage = () => {
  return (
    <main >
      <Navbar></Navbar>
      <div style={{textAlign:"center",
       width:"80%", 
       margin:"auto",
       wordWrap:"break-word",
       padding:"4rem 0rem"
       }}>
<h1>The page you are looking for seems to not exist or might be broken, try again later!</h1>

      </div>
    </main>
  )
}

export default NotFoundPage


export function Head () {
  return(
<>
   <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
<title>404 Not found</title>
</>

  )
   
} 

