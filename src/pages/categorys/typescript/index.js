import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';

// Local Component
import Layout from '../../../components/layout';
import PostLinkItem from '../../../components/PostLinkItem';

const Container = styled.div`
flex: 1;
`;
const TypescriptPage = ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => {
  console.log("TypescriptPage", edges);
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date)
  .map(edge => {
    if(edge.node.frontmatter.category==="typescript") {
      return (
        <PostLinkItem key={edge.node.id} post={edge.node}/>
        )
    }
  })
  
  return (
    <Layout>
      <Container>
        <h2 style={{fontWeight:"700", color: "#000000", fontSize: 27, fontWeight: 700}}>Typescript</h2>
        <div>{Posts}</div>
        </Container>
    </Layout>
  )
}

export default TypescriptPage


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
           thumbnail {
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