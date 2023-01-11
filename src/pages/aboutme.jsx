import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as React from "react"
import Navbar from "../components/navbar"
import * as aboutmestyle from "../cssmodules/aboutMe.module.scss"
import Footer from '../components/footercomp.jsx'
import Waver from "../components/waver";
import SideImg from "../images/icy.webp"


const AboutMe = ({ data }) => {


  return (
    <main >
      <Navbar></Navbar>
      <div className={aboutmestyle.body}>
        <h1>My name is {data.contentfulAboutMe.title}</h1>

        <div className={aboutmestyle.aboutwrapper}>
          <p className={aboutmestyle.firstp}>{data.contentfulAboutMe.presentation.presentation}</p>
          <img src={SideImg} alt="Icy pattern" />
          <span >
            <h2>My job experiences</h2> {renderRichText(data.contentfulAboutMe.listOfJobs)}
            <h2>My education </h2>{renderRichText(data.contentfulAboutMe.listOfEducation)}

          </span>
        </div>

      </div>
      <Waver></Waver>
      <Footer></Footer>
    </main>
  )
}

export default AboutMe

export function Head() {
  return (

    <>
      <meta name="description" content="Female junior frontenddeveloper contact"/>
      <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
      <title>About me</title>

    </>
  )

}

//GraphQL query

export const query = graphql`
query AboutMeQuery {
  contentfulAboutMe {
    title
    listOfEducation {
      raw
    }
    listOfJobs {
      raw
    }
    presentation {
      presentation
    }
  }
}
`
