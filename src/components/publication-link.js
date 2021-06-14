import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";
import {
    title,
    authors,
    date,
    journal,
    paper,
    button
} from './layout.module.scss'


String.prototype.debib =  function( s ) {
    return this
	.replace("\\'o",'ó')
	.replace('``','‘')
	.replace("''",'’')
        .replace("'",'’');
}    

const PublicationLink = ({ publication }) => (
    <p className={paper}>
	<Link className={title} to={publication.url}>{publication.title.debib()}</Link>
	{'. '}<span className={authors}>{publication.authors.slice(0,-1).map((a)=>a.debib()).join(", ")} and {publication.authors.slice(-1)[0].debib()}</span>
        {' '}<span className={date}>({publication.date})</span>
        {'. '}<span className={journal}>{publication.booktitle || publication.journal}</span>
	{'. '}
	{publication.poster &&
         <a href={publication.poster.publicURL} className={button}>(poster)</a>
        
        }
    </p>
)

export default PublicationLink
