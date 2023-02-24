import { graphql } from "gatsby"
import * as React from "react"
import Navbar from "../components/navbar"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as contactstyle from "../cssmodules/contact.module.scss"
import Footer from '../components/Footercomponent.jsx'
import Waver from "../components/waver";
import PhoneIcon from '../images/phone.svg'
import LocationIcon from '../images/location.svg'
import MailIcon from '../images/mail.svg'


const ContactPage = ({ data }) => {
  return (
    <main >
      <div className={contactstyle.contactbody}>
        <Navbar></Navbar>
        <div className={contactstyle.contactwrapper}>
          <div className={contactstyle.contentwrapper}>
            <img src={data.contentfulContactPage.profilePicture.url} alt="Person" />
            <div className={contactstyle.contactgrid}>
              <section className={contactstyle.grid1}><h1>My socials</h1>{renderRichText(data.contentfulContactPage.socials)}</section>
              <section className={contactstyle.grid2}>
                <h1>My contact information</h1>
                <ul className={contactstyle.contactinfo}>
                  <li> <img src={PhoneIcon} alt="" /> Phone number: {data.contentfulContactPage.telephoneNumber}</li>
                                    <li> <img src={LocationIcon} alt="" /> You can find me in: {data.contentfulContactPage.adress}</li>

                  <li> <img src={MailIcon} alt="" /> Email: {data.contentfulContactPage.email}</li>


                </ul>
              </section>
            </div>
          </div>
          <Waver></Waver>

        </div>
        <Footer></Footer>
      </div>
    </main>
  )
}

export default ContactPage

export function Head() {
  return (

    <>
      <meta name="description" content="Contact" />
      <meta name="keywords" content="HTML, CSS, JavaScript, React, junior frontenddeveloper" />
      <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
      <title>Contact</title>
    </>
  )

}
// GraphQL query
export const query = graphql`
query MyContact {
   contentfulContactPage {
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
       email
       adress
       telephoneNumber
  }
}
`