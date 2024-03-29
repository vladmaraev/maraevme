import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { flexbox, aside, article } from "../components/layout.module.scss";

import PublicationLink from "../components/publication-link";

const PublicationsPage = ({
  data: {
    allReference: { edges },
  },
}) => {
  const Articles = edges
    .filter((edge) => edge.node.entry_type === "article") // You can filter your posts based on some criteria
    .map((edge) => (
      <PublicationLink key={edge.node.id} publication={edge.node} />
    ));
  const BookChapters = edges
    .filter((edge) => edge.node.entry_type === "incollection") // You can filter your posts based on some criteria
    .map((edge) => (
      <PublicationLink key={edge.node.id} publication={edge.node} />
    ));

  const Papers = edges
    .filter((edge) => edge.node.entry_type === "inproceedings") // You can filter your posts based on some criteria
    .map((edge) => (
      <PublicationLink key={edge.node.id} publication={edge.node} />
    ));

  return (
    <Layout pageTitle="Publications">
      <div className={flexbox}>
        <aside className={aside}>Journal articles</aside>
        <article className={article}>{Articles}</article>
      </div>
      <div className={flexbox}>
        <aside className={aside}>Book Chapters</aside>
        <article className={article}>{BookChapters}</article>
      </div>
      <div className={flexbox}>
        <aside className={aside}>Conference papers</aside>
        <article className={article}>{Papers}</article>
      </div>
    </Layout>
  );
};

export default PublicationsPage;

export const pageQuery = graphql`
  query {
    allReference {
      edges {
        node {
          id
          title
          authors
          author
          date
          journal
          booktitle
          raw
          url
          youtube
          key
          entry_type
        }
      }
    }
  }
`;
