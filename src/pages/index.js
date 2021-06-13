import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import {
portrait
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
	  <StaticImage className={portrait} src="../assets/images/vlad.jpg"
		       alt="Vlad"
		       placeholder="tracedSVG"
		       />	  
    </Layout>
  )
}
export default IndexPage
