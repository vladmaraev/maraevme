import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import background from "../assets/images/cover.jpg";
import {
    containerDefence,
    flexbox,
    aside,
    article,
    navLinks,
    navLinkItem,
    navLinkText,
    navLinkTextActive,
    portrait
} from '../components/layout.module.scss'


const DefencePage = () => {
    //document.body.style.backgroundImage = `url(${background})`
    return (
	<>
	    <Helmet>
		<link rel="stylesheet" href="https://use.typekit.net/ali3egw.css"/>
            </Helmet>
	    
	    <section style={{backgroundImage: `url(${background})`, width: '100%', height: '100%'}}>
		<main className={containerDefence}>
		    <nav>
			<ul className={navLinks}>
			    <li className={navLinkItem}>
				<Link to="/" className={navLinkText}
				      activeClassName={navLinkTextActive}>
				    ⟵
				</Link>
			    </li>
			</ul>
		    </nav>
		    
		    <h1>Who is laughing now?</h1>
		    <h3>Laughter-infused<br/>dialogue systems</h3>
		    <div className={flexbox}>
			    <p>
				<a href="https://gupea.ub.gu.se/handle/2077/72030">Abstract & PDF</a>
			    </p>
			</div>
			
			<div className={flexbox}>
			    <aside className={aside}>defence</aside>
			    <article className={article}>
				<p>
				    Date: 29/08/2022<br/>
				    Time: 15:00–19:00<br/>
				    Location: Faculty of Humanities, Renströmsgatan 6. Attend in person in room J439&nbsp;<a href="https://gu-se.zoom.us/j/66086973989">or via zoom</a>.
				</p>
			    </article>
			</div>
			<div className={flexbox}>
			    <aside className={aside}>afterparty</aside>
			    <article className={article}>
                            <p>
				from 20:00 onwards<br/>
                                Location: Andra Långgatan 19, 6th floor (Talkamatic AB)<br/>
                                Contribution: 250kr (200kr alcohol free) <br/>
				Swish with a message containing your <i>dietary restrictions</i> to  0725665401 (or scan the QR-code):
				<StaticImage  src="../assets/images/swish.jpeg"
					      alt="Swish" className={portrait}
					      placeholder="tracedSVG"
				/>
                            </p>
                            </article>
			</div>
		    
		    </main>
		</section>
	    </>
	);
	    
}

export default DefencePage
