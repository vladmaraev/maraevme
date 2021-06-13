import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";
import {
    title,
    authors,
    date,
    journal,
    paper
} from './layout.module.scss'


String.prototype.debib =  function( s ) {
    return this
	.replace("\\'o",'ó')
	.replace('``','‘')
	.replace("''",'’');
}    

const PublicationLink = ({ publication }) => (
    <p className={paper}>
	<span className={title}>{publication.title.debib()}</span>
	{'. '}<span className={authors}>{publication.authors.slice(0,-1).map((a)=>a.debib()).join(", ")} and {publication.authors.slice(-1)[0].debib()}</span>
        {' '}<span className={date}>({publication.date})</span>
        {'. '}<span className={journal}>{publication.booktitle || publication.journal}</span>
	{'.'}
    </p>
)

export default PublicationLink
