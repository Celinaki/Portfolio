import * as React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/navbar"
import * as homestyle from "../cssmodules/home.module.scss"



const IndexPage = ({ data }) => {
  return (
    <main >
      
      {data.allContentfulStartPage.edges.map(({ node }) => (
        <div className={homestyle.homewrapper}
        style={{
          background: `url(${node.heroImage.url}) center`,
          backgroundSize: "cover",
          width: "100vw", height: "100vh",
          backgroundPosition:"50% 50%",
          filter: 'contrast(120%)'
          // backgroundRepeat: "no-repeat",
          // backgroundPositionY: "80%"
        }}>
          <Navbar/>
        <div className={homestyle.hero} style={{
         
          width: "100vw", 
     
        }}>

          <span>
            <h1>{node.title}</h1>
            <h1>{node.title}</h1>
          </span>
          <article>
            <h2>{node.presentation.presentation}</h2>
          </article>
          
        </div>
        </div>
      ))}

    </main>
  )
}

export default IndexPage

export function Head () {
  return(

<link href="https://fonts.googleapis.com/css2?family=Italiana&family=Mukta+Malar:wght@800&family=Titan+One&family=Ultra&display=swap" rel="stylesheet"></link>

  )
   
} 
// GraphQL query
export const indexPageQuery = graphql`
query MyQuery {
  allContentfulStartPage {
    edges {
      node {
        title
        heroImage {
          url
        }
        presentation {
          presentation
        }
      }
    }
  }
}
`
