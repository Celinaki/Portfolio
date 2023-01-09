import { graphql } from "gatsby"
import * as React from "react"
import Navbar from "../components/navbar"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as contactstyle from "../cssmodules/contact.module.scss"
import Footer from '../components/footercomp.jsx'
import Waver from "../components/waver";


const contactPage = ({ data }) => {
  return (
    <main >
      <Navbar></Navbar>
      <div className={contactstyle.contactwrapper}>
        {data.allContentfulContactPage.edges.map(({ node }) => (
          <div className={contactstyle.contentwrapper}>
            <img src={node.profilePicture.url} alt="Person" />
            <div className={contactstyle.contactgrid}>
              <section className={contactstyle.grid1}><h1>My socials</h1>{renderRichText(node.socials)}</section>
              <section className={contactstyle.grid2}><h1>My contactinformation</h1>{renderRichText(node.contactInformation)}</section>
            </div>
          </div>
        ))}

      </div>
      <Waver></Waver>
      <Footer></Footer>
    </main>
  )
}

export default contactPage

export function Head() {
  return (

    <>
      <meta name="description" content="Female junior frontenddeveloper about me" />
      <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
      <title>Contact</title>
    </>
  )

}
// GraphQL query
export const query = graphql`
query MyContact {
    allContentfulContactPage {
      edges {
        node {
          contactInformation {
            raw
          }
          socials{
          raw
        }
          profilePicture {
          url
          publicUrl
        }
        }
      }
    }
  }
`
//  query MyQuery {
//    contentfulContactPage {
//      profilePicture {
//        url
//      }
//      links {
//        links
//      }
//      contactInformation {
//        contactInformation
//     }
//   }
//  }


