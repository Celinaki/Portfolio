import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Navbar from "../components/navbar"
import * as allProjectsstyle from "../cssmodules/allProjects.module.scss"
import OneProjectCard from "../components/oneProjectCard"
import { useState } from "react"
import { useEffect } from "react"
import FilterButton from '../images/filter-6535.svg'
import Footer from "../components/footercomp.jsx"
import Waver from "../components/waver";



const ReactProjectsPage = ({ data }) => {
    const [categoryQuery, setCategoryQuery] = useState('');
    const [toggleBtn, setToggleBtn] = useState(true)

    return (
        <main >
            <Navbar></Navbar>
            <div className={allProjectsstyle.body}>
                <h1>My projects</h1>
                <section className={allProjectsstyle.categories}>
                  <img src={FilterButton} alt=""
                  className={toggleBtn ? allProjectsstyle.tiltedcategories : allProjectsstyle.nontiltedcategories}
                   onClick={e=> setToggleBtn(!toggleBtn)} />
                  {toggleBtn ? <span><Link to="/reactprojects">React</Link>
                    <Link to="/vueprojects">Vue</Link>
                    <Link to="/cssprojects">Css</Link>

                    <Link to="/projects">Show all</Link> </span>: '' }
                    
                </section>
                <div className={allProjectsstyle.projectswrapper}>
                    {data.allContentfulProject.edges.map(({ node }) => (
                        <OneProjectCard singleProject={node} />
                    ))}
                </div>
            </div>
            <Waver></Waver>
            <Footer></Footer>
        </main>
    )
}
export default ReactProjectsPage;
export function Head () {
    return(

<>
   <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"></link>
<title>Projects-react</title>
</>
    )
     
} 

export const reactPageQuery = graphql`
query MyVueQuery {
allContentfulProject(filter: {category: {eq: "React" }}) {
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