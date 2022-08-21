import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import {
    portrait,
    flexbox,
    aside,
    article,
    navLinks,
    navLinkItem,
    navLinkText,
    navLinkTextActive
} from '../components/layout.module.scss'
const IndexPage = () => {
  return (
      <Layout>
		  <p>	
My research aims at improving dialogue between humans and
machines. That&rsquo;s what people sometimes mean when they say “AI”, but
the news is that to participate in dialogue is much harder than to
play an Atari game. That is because dialogue is a form of joint action
and it requires a great deal of coordination on all levels: from
timing to meaning. I position my research in a field of computational
linguistics in a broad sense: I build models that reproduce human
behaviour, therefore trying to understand how our cognition works. And
one of the by-products of this is, I believe, a better AI.
		  </p>
		  <StaticImage  src="../assets/images/vlad.jpg"
				alt="Vlad" className={portrait}
		       placeholder="tracedSVG"
		       />	  
	    <div className={flexbox}>
		<aside className={aside}>News</aside>
		<article className={article}>
		    <p>29.08.2022:&nbsp;<Link to="/defence" className={navLinkText}
						      activeClassName={navLinkTextActive}>
						    PhD defence
			    </Link>

		    </p>
                </article>
	    </div>

	  <div className={flexbox}>
		<aside className={aside}>Affiliation</aside>
		<article className={article}>
		    <p><i>(2017&ndash;Present)</i> <a href="https://www.gu.se/en/about/find-staff/vladislavmaraev">PhD student</a> at <a href="https://gu-clasp.github.io">Centre for Linguistic Theory and Studies in Probability (CLASP)</a>, Department of Philosophy, Linguistics and Theory of Science, University of Gothenburg, Sweden</p>
		    <p><i>(2016&ndash;2017)</i> Research Assistant at <a href="http://nlx.di.fc.ul.pt">NLX Group</a>, University of Lisbon, Portugal</p>
                </article>
	    </div>
	    <div className={flexbox}>
		<aside className={aside}>Contact</aside>
		<article className={article}>
		    <p>[name].[surname]@gu.se<br/>
		    Twitter: <a href="https://twitter.com/xmarvl">@xmarvl</a></p>

                </article>
	    </div>

    </Layout>
  )
}
export default IndexPage
