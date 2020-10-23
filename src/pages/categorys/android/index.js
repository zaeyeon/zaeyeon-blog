import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

// Local Component
import Layout from '../../../components/layout';
import PostLinkItem from '../../../components/PostLinkItem'

const IndexPage = ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => {
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date)
  .map(edge => <PostLinkItem key={edge.node.id} post={edge.node}/>)

  return (
    <Layout>
      <div>{Posts}</div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
 query {
   allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
     edges {
       node {
         id
         excerpt(pruneLength: 250)
         frontmatter {
           date(formatString: "MMMM DD, YYYY")
           slug
           title
         }
       }
     }
   }
 }
`;
/*
const Container = styled.div`
`;

function AndroidPage({ data }) {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark

    return (
      <Layout>
        <Container>
            <h1>Android</h1>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
            dangerouslySetInnerHTML={{__html: html}}/>
        </Container>
      </Layout>
    )  
}

export default AndroidPage

export const pageQuery = graphql`
 query($slug: String!) {
     markdownRemark(frontmatter: {slug: {eq: $slug}}) {
         html
         frontmatter {
             date(formatString: "MMMM DD, YYYY")
             slug
             title
         }
     }
 }
`;
*/