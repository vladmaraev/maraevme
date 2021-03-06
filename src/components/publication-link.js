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
	.replace("\\'o",'รณ')
	.replace('``','โ')
	.replace("''",'โ')
        .replace("'",'โ');
}    

const PublicationLink = ({ publication }) => (
    <p className={paper}>
	<Link className={title} href={publication.file ? publication.file.publicURL : publication.url}>
	    {publication.title.debib()}
	</Link>
	{'. '}<span className={authors}>{publication.authors.slice(0,-1).map((a)=>a.debib()).join(", ")} and {publication.authors.slice(-1)[0].debib()}</span>
        {' '}<span className={date}>({publication.date})</span>
        {'. '}<span className={journal}>{publication.booktitle || publication.journal}</span>
	{'. '}
	{publication.youtube &&
         <a href={publication.youtube} className={button}>video</a>
        
        }
	{publication.poster &&
         <a href={publication.poster.publicURL} className={button}>poster</a>
        
        }
    </p>
)

export default PublicationLink
