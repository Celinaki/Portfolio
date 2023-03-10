import * as React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/navbar"
import * as allProjectsstyle from "../cssmodules/allProjects.module.scss"
import OneProjectCard from "../components/oneProjectCard"
import { useState } from "react"
import FilterButton from '../images/filter-6535.svg'
import Footer from "../components/Footercomponent.jsx"
import Waver from "../components/waver";


const VueProjectsPage = ({ data }) => {
  const [toggleBtn, setToggleBtn] = useState(true)

  return (
    <main >
       <div className={allProjectsstyle.body}>
<Navbar></Navbar>
      
      <div className={allProjectsstyle.wrapper}>
        <h1>My projects</h1>
        <section className={allProjectsstyle.categories}>
          <img src={FilterButton} alt=""
            className={toggleBtn ? allProjectsstyle.tiltedcategories : allProjectsstyle.nontiltedcategories}
            onClick={e => setToggleBtn(!toggleBtn)}
          //Keybinding as "onclick", making it accessible. Toggle cat btn
            onKeyDown={e => e.key === 13 ? setToggleBtn(!toggleBtn) : ''} />
          {toggleBtn ?
           //If btn is true, show categories
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
        <Waver></Waver>
        </div>
        </div>
      <Footer></Footer>
    </main>
  )
}
export default VueProjectsPage;
export function Head() {
  return (

    <>
      <meta name="description" content="Portfolio projects" />
      <meta name="keywords" content="HTML, CSS, JavaScript, React, junior frontenddeveloper" />
      <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
      <title>Projects-vue</title>
    </>
  )

}

export const vuePageQuery = graphql`
query MyVueQuery {
allContentfulProject(filter: {category: {eq: "Vue" }}) {
 edges {
   node {
     id
     image {
       url
     }
     linkToThePage {
       raw
     }
     title
     description {
       description
     }
     category
   }
 }
}
}
`