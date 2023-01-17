import { Link } from "gatsby"
import * as React from "react"
import { useState, useEffect } from "react"
import * as navstyle from '../cssmodules/navbar.module.scss'

const Navbar = () => {
    //Checking if current page is home, if so use a different class
    const [home, setHome] = useState(false)
    useEffect(() => {
        if (window.location.pathname === "/") {
            setHome(true)
        }
        else { setHome(false) }
    }, [])

    const [menuOpen, setMenuOpen] = useState(false)



    return (
        <div >
            <nav className={navstyle.mobilenav}  >
                <button className={menuOpen ? `${navstyle.iconholder} ${navstyle.active}` : navstyle.iconholder}>
                    <div className={menuOpen ? `${navstyle.hamburgerMenu} ${navstyle.active}` : navstyle.hamburgerMenu}
                        onClick={() => setMenuOpen(!menuOpen)}
                        onKeyDown={e => e.key === 13 ? setMenuOpen(!menuOpen) : ''}>
                        <div className={`${navstyle.line} ${navstyle.barTop}`} ></div>
                        <div className={`${navstyle.line} ${navstyle.barMid}`}></div>
                        <div className={`${navstyle.line} ${navstyle.barBottom}`}></div>
                    </div>
                </button>
                {menuOpen ?
                    <div className={`${navstyle.menucontent} ${navstyle.active}`}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/aboutme">About me</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    : ''}
            </nav>


            <nav className={home === true ? navstyle.navhome : navstyle.nav}  >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">About me</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Navbar
