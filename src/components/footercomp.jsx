import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import * as footerstyle from '../cssmodules/footer.module.scss'

const Footercomp = () => {

   
   const footerinf = useStaticQuery(graphql`
    query MyQuery {
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
              <span>
                <p>By {footerinf.contentfulFooter.title}</p>
<p>Favorite quote {footerinf.contentfulFooter.quote}</p>
              </span>
              <p>Copyright {footerinf.contentfulFooter.publishedDate}</p> 
            </footer>
        </div>
    )
}
export default Footercomp

