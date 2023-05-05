import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import * as footerstyle from '../cssmodules/footer.module.scss'

export default function Footercomp() {

  const data = useStaticQuery(graphql`
    query {
      contentfulFooter {
        quote
        title
        publishedDate(formatString: "YYYY")
      }
    }
    `)

  return (
    <div>
      <footer >
    
        <p style={{color:"gray"}}>Copyright {data.contentfulFooter.title} {data.contentfulFooter.publishedDate}</p>
      </footer>
    </div>
  )
}


