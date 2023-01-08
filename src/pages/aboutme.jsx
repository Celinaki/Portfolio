import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as React from "react"
import Navbar from "../components/navbar"
import * as aboutmestyle from "../cssmodules/aboutMe.module.scss"
import Footer from '../components/footercomp.jsx'


const aboutMe = ({ data }) => {
    return (
        <main >
            <Navbar></Navbar>
            {data.allContentfulAboutMe.edges.map(({ node }) => (
                <div className={aboutmestyle.body}>
                    <div className={aboutmestyle.aboutwrapper}>
            <h1>My name is {node.title}</h1>
                    <p>{node.presentation.presentation}</p>
                    <img src=".../images/eugene-golovesov-VJ6aRAcrj-Y-unsplash.jpg" alt="" />
                    <p>My job experiences {renderRichText(node.listOfJobs)}</p>
                    <p>My education {renderRichText(node.listOfEducation)}</p>
                    </div>
        
                </div>
            ))}
<Footer></Footer>
        </main>
    )
}

export default aboutMe

export function Head () {
    return(

     <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>

    )
     
} 
// GraphQL query
export const aboutQuery = graphql`
query AboutMeQuery {
  allContentfulAboutMe {
    edges {
      node {
        listOfJobs {
          raw
        }
        listOfEducation {
          raw
        }
        presentation {
          presentation
        }
        title
      }
    }
  }
}
`