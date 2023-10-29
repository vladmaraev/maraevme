import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import {
    container,
    heading,
    subheading,
    navLinks,
    navLinkItem,
    navLinkText,
    navLinkTextActive
} from './layout.module.scss'
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ pageTitle, children }) => {
    return (
	<>
            <Helmet>
		<link rel="stylesheet" href="https://use.typekit.net/ali3egw.css"/>
            </Helmet>
	    <main className={container}>
		<title>Vladislav Maraev {pageTitle}</title>
		<nav>
		    <ul className={navLinks}>
			<li className={navLinkItem}>
			    <Link to="/" className={navLinkText}
				  activeClassName={navLinkTextActive}>
				Vladislav<br/> Maraev
			    </Link>
			</li>
			<li className={navLinkItem}>
				projects
			</li>
			<li className={navLinkItem}>
			    <Link to="/publications" className={navLinkText}
				  activeClassName={navLinkTextActive}>
				publications
			    </Link>
			</li>
		    </ul>
		</nav>
	{children}
    </main>
    </>
  )
}

export default Layout
