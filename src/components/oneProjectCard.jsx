import * as React from "react"
import { Link } from "gatsby"
import * as projectCardStyle from '../cssmodules/oneProjectCard.module.scss'
import { renderRichText } from "gatsby-source-contentful/rich-text"

const oneProjectCard = ({ singleProject }) => {
    return (
        <article className={projectCardStyle.cardholder}>
            <span className={projectCardStyle.imgtitle}>
                <img src={singleProject.image[0].url} alt={singleProject.title} />
                <h1>{singleProject.title}</h1>
            </span>
            <section className={projectCardStyle.descriptionlinks}>
                <p>{singleProject.description.description.substring(0, 350)}.. </p>
                <span>
                    <Link to={'/project/' + singleProject.title} >Show more </Link>
                </span>
            </section>
        </article>
    )
}
export function Head() {
    return (
        <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
    )

}
export default oneProjectCard