import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';

// Local Component
import Layout from '../../components/layout.js';
import "./styles.css"

const Container = styled.div`
flex: 1;
`;

export default function PostTemplate({ data }) {
    const {markdownRemark} = data
    const {frontmatter, html} = markdownRemark

    return (
        <Layout>
            <Container>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <div
            dangerouslySetInnerHTML={{__html: html}}/>
            </Container>
        </Layout>
    )
}

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