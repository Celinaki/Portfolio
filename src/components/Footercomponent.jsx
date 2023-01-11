import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import * as footerstyle from '../cssmodules/footer.module.scss'

export default function Footercomp(){
  
  //  const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     contentfulFooter {
  //       quote
  //       title
  //       publishedDate(formatString: "YYYY")
  //     }
  //   }
  //   `)

    return (
        <div>
            {/* <footer >
              <span>
                <p>By {data.contentfulFooter.title}</p>
<p>Favorite quote {data.contentfulFooter.quote}</p>
              </span>
              <p>Copyright {data.contentfulFooter.publishedDate}</p> 
            </footer> */}
        </div>
    )
}


