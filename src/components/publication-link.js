import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import {
  title,
  authors,
  date,
  journal,
  paper,
  button,
} from "./layout.module.scss";

String.prototype.debib = function (s) {
  return this.replace("\\'o", "ó")
    .replace("``", "‘")
    .replace("''", "’")
    .replace("'", "’");
};

const PublicationLink = ({ publication }) => {
  const {
    allFile: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              relativePath
              publicURL
            }
          }
        }
      }
    `
  );
  const file = edges.filter(
    (edge) => edge.node.relativePath === `papers/${publication.key}.pdf`
  )[0];
  const poster = edges.filter(
    (edge) => edge.node.relativePath === `posters/${publication.key}.pdf`
  )[0];
  console.log(poster, file);
  return (
    <p className={paper}>
      <Link
        className={title}
        href={file ? file.node.publicURL : publication.url}
      >
        {publication.title.debib()}
      </Link>
      {". "}
      <span className={authors}>
        {publication.authors
          .slice(0, -1)
          .map((a) => a.debib())
          .join(", ")}{" "}
        and {publication.authors.slice(-1)[0].debib()}
      </span>{" "}
      <span className={date}>({publication.date})</span>
      {". "}
      <span className={journal}>
        {publication.booktitle || publication.journal}
      </span>
      {". "}
      {publication.youtube && (
        <a href={publication.youtube} className={button}>
          video
        </a>
      )}
      {poster && (
        <a href={poster.node.publicURL} className={button}>
          poster
        </a>
      )}
    </p>
  );
};

export default PublicationLink;
