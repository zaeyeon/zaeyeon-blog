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
         html
         excerpt(pruneLength: 600)
         frontmatter {
           date(formatString: "MMMM DD, YYYY")
           slug
           title
           preview
           thumbnailImage {
            childImageSharp { 
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
           }
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