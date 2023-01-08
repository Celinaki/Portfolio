import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as React from "react"
import Navbar from "../components/navbar"
import * as aboutmestyle from "../cssmodules/aboutMe.module.scss"
import Footer from '../components/footercomp.jsx'
import Waver from "../components/waver";
import SideImg from "../images/eugene-golovesov-VJ6aRAcrj-Y-unsplash.jpg"


const aboutMe = ({ data }) => {
  return (
    <main >
      <Navbar></Navbar>
      {data.allContentfulAboutMe.edges.map(({ node }) => (
        <div className={aboutmestyle.body}>
                      <h1>My name is {node.title}</h1>

          <div className={aboutmestyle.aboutwrapper}>
            <p className={aboutmestyle.firstp}>{node.presentation.presentation}</p>
            <div className={aboutmestyle.imageholder} alt="Image with leafs"></div>
            {/* <img src={SideImg} alt="" /> */}
            <span className={aboutmestyle.lists}>
              <p>My job experiences {renderRichText(node.listOfJobs)}</p>
              <p>My education {renderRichText(node.listOfEducation)}</p>

            </span>
          </div>

        </div>
      ))}
      <Waver></Waver>
      <Footer></Footer>
    </main>
  )
}

export default aboutMe

export function Head() {
  return (

    <>
      <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
      <title>About me</title>
    </>
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