import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import {
    flexbox,
    aside,
    article
} from '../components/layout.module.scss'


const ProjectsPage = ({
  data: {
    allOrgContent: { edges },
  },
}) => {
  const Projects = edges
    // .filter(edge => !!edge.node.journal) // You can filter your posts based on some criteria
	.map(edge =>
	    <div className={flexbox}>
		<aside className={aside}>{edge.node.metadata.title}</aside>
		<article className={article} key={edge.node.id} dangerouslySetInnerHTML={{ __html:edge.node.html}}/>
            </div>)
    return (
	<Layout pageTitle="Projects">
	    {Projects}
	</Layout>);
	    
}

export default ProjectsPage

export const pageQuery = graphql`
query {
  allOrgContent {
    edges {
      node {
        html
        metadata {
          title
          category
        }
      }
    }
  }
}
`

