import * as React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/navbar"
import * as allProjectsstyle from "../cssmodules/allProjects.module.scss"
import OneProjectCard from "../components/oneProjectCard"
import { useState } from "react"
import FilterButton from '../images/filter-6535.svg'
import Footer from '../components/footercomp.jsx'
import Waver from "../components/waver";


const ProjectsPage = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState(true)

  return (
    <main >
      <Navbar></Navbar>
      <div className={allProjectsstyle.body}>
        <h1>My projects</h1>
        <section className={allProjectsstyle.categories}>
          <img src={FilterButton} alt=""
            className={toggleBtn ? allProjectsstyle.tiltedcategories : allProjectsstyle.nontiltedcategories}
            onClick={e => setToggleBtn(!toggleBtn)}
            onKeyDown={e => e.key === 13 ? setToggleBtn(!toggleBtn) : ''} />
          {toggleBtn ?
            <span>
              <Link to="/reactprojects">React</Link>
              <Link to="/vueprojects">Vue</Link>
              <Link to="/cssprojects">Css</Link>
              <Link to="/projects">Show all</Link>
            </span>
            : ''}

        </section>

        <div className={allProjectsstyle.projectswrapper}>
          {data.allContentfulProject.edges.map(({ node }) => (
            <OneProjectCard singleProject={node} key={node.id} />
          ))}
        </div>
        
      </div>
      <Waver></Waver>
      <Footer></Footer>
    </main>
  )
}
export default ProjectsPage;
export function Head() {
  return (

    <>
      <meta name="description" content="Female junior frontenddeveloper projects" />
      <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
      <title>Projects-all</title>
    </>
  )

}

//GraphQL Query
export const indexPageQuery = graphql`
query MyQuery {
  allContentfulProject {
    edges {
      node {
        category
        id
        description {
          description
        }
        image {
          url
          
        }
        title
        linkToThePage {
          raw
        }
      }
    }
  }
}
`