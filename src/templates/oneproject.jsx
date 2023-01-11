import * as React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import * as singleprojectstyle from "../cssmodules/singleproject.module.scss"
import { useEffect } from "react";
import { useRef } from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Footer from '../components/footercomp.jsx'
import Waver from "../components/waver";




const OneProjectPage = ({ data }) => {
    const project = data.contentfulProject;
    // const slide = document.querySelector(".slide");

    //Image carousel
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");
    const isBrowser = typeof window !== "undefined"
    const carouselRef = useRef();
    const slidesContainer = carouselRef.current;

    useEffect(() => {
        const buttons = document.querySelectorAll("[data-carousel-button]")
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const offset = button.dataset.carouselButton === "next" ? 1 : -1
                const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

                const activeSlide = slides.querySelector("[data-active]")
                let newIndex = [...slides.children].indexOf(activeSlide) + offset
                if (newIndex < 0) newIndex = slides.children.length - 1
                if (newIndex >= slides.children.length) newIndex = 0

                slides.children[newIndex].dataset.active = true
                delete activeSlide.dataset.active

            })
        })
    })
    //Image carousel


    return (
        <main >
            <Navbar></Navbar>
            <div className={singleprojectstyle.body}>
                <div className={singleprojectstyle.projectcard}>
                    <h1>{project.title}</h1>

                    <div className={singleprojectstyle.carouselwrapper} data-carousel>
                        <button
                            data-carousel-button="prev"

                            className={singleprojectstyle.arrowsl} id="slide-arrow-prev">&#8656;</button>
                        <button
                            data-carousel-button="next"
                            className={singleprojectstyle.arrowsr} id="slide-arrow-next">&#8658;</button>
                        <ul
                            data-slides
                            ref={carouselRef}
                            className={singleprojectstyle.carousel} id="slides-container">
                            <li className={singleprojectstyle.slide} data-active>
                                <img src={project.image[0].url} alt="" />
                            </li>
                            <li className={singleprojectstyle.slide}>
                                <img src={project.image[1].url} alt="" />
                            </li>
                            <li className={singleprojectstyle.slide}>
                                <img src={project.image[2].url} alt="" />
                            </li>
                        </ul>
                    </div>

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
            </div>
            <Waver></Waver>
            <Footer></Footer>
        </main>

    )

}

export default OneProjectPage

export function Head() {
    return (

        <>
            <meta name="description" content="Female junior frontenddeveloper project" />
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