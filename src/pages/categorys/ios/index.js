import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

// Local Component
import Layout from '../../../components/layout';
import PostLinkItem from '../../../components/PostLinkItem';

const Container = styled.div`
flex: 1;
`;
const IOSPage = ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => {
  console.log("IOSPage", edges);
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date)
  .map(edge => {
    if(edge.node.frontmatter.category==="ios") {
      return (
        <PostLinkItem key={edge.node.id} post={edge.node}/>
        )
    }
  })
  
  return (
    <Layout>
      <Container>
        <h2 style={{fontWeight:"100"}}>IOS</h2>
        <div>{Posts}</div>
        </Container>
    </Layout>
  )
}

export default IOSPage


export const pageQuery = graphql`
 query {
   allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
     edges {
       node {
         id
         excerpt(pruneLength: 600)
         frontmatter {
           date(formatString: "MMMM DD, YYYY")
           slug
           title
           preview
           category
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