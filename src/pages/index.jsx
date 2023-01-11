import * as React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import * as homestyle from "../cssmodules/home.module.scss"



const IndexPage = ({ data }) => {
  return (
    <main >
      <div className={homestyle.homewrapper}
        style={{
          background: `url(${data.contentfulStartPage.heroImage.url}) center`,
          backgroundSize: "cover",
          width: "100vw", height: "100vh",
          backgroundPosition: "50% 50%",
          filter: 'contrast(120%)'
          // backgroundRepeat: "no-repeat",
          // backgroundPositionY: "80%"
        }}>
        <Navbar />
        <div className={homestyle.hero} style={{
          width: "100vw",
        }}>
          <span>
            <h1>{data.contentfulStartPage.title}</h1>
            <h1>{data.contentfulStartPage.title}</h1>
          </span>
          <article>
            <h2>{data.contentfulStartPage.presentation.presentation}</h2>
          </article>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export function Head() {
  return (

    <>
    <meta  name="description" content="Female junior frontenddeveloper portfolio"/>
      <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
      <title>Home</title>
    </>
  )

}
// GraphQL query
export const indexPageQuery = graphql`
query MyQuery {
  contentfulStartPage {
        title
        heroImage {
          url
        }
        presentation {
          presentation
        }
      }
    }

`

