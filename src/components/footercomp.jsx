import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import * as footerstyle from '../cssmodules/footer.module.scss'

const Footercomp = () => {
    const information = useStaticQuery(graphql`
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
                <p>By {information.contentfulFooter.title}</p>
<p>Favorite quote {information.contentfulFooter.quote}
</p>
              </span>
              <p>Copyright {information.contentfulFooter.publishedDate}</p> 
            </footer>
        </div>
    )
}
export default Footercomp

