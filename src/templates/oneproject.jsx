import * as React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import * as singleprojectstyle from "../cssmodules/singleproject.module.scss"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Footer from '../components/Footercomponent.jsx'
import Waver from "../components/waver";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const OneProjectPage = ({ data }) => {
    const project = data.contentfulProject;

const img1=project.image[0].url
const img2=project.image[1].url
const img3=project.image[2].url

    return (
        <main >
            
            <div className={singleprojectstyle.body}>
                <Navbar></Navbar>
                <div className={singleprojectstyle.projectcard}>
                    <h1>{project.title}</h1>
                    <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>              
                    <section className={singleprojectstyle.sidebyside}>
                        <p>{project.description.description}</p>
                        <span>
                            <h2>Link to the project</h2>
                            <button className={singleprojectstyle.buttonlink}>
                                {renderRichText(project.linkToThePage)}
                            </button>
                        </span>
                    </section>
                </div>
                            <Waver></Waver>

            </div>
            <Footer></Footer>
        </main>

    )

}

export default OneProjectPage

export function Head() {
    return (

        <>
            <meta name="description" content="Portfolio projects" />
            <meta name="keywords" content="HTML, CSS, JavaScript, React, junior frontenddeveloper" />
            <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
            <title>Project</title>
        </>
    )

}
export const query = graphql`
query SingleProjectQuery($title: String) {
    contentfulProject(title: {eq: $title}) {
    category
    id
    image {
      url
    }
    title
    linkToThePage {
      raw
    }
    description {
      description
    }
  }
}
`