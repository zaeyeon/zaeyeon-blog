import React from 'react';
import {graphql} from 'gatsby';

// Local Component
import Layout from '../../components/layout.js';

export default function PostTemplate({ data }) {
    const {markdownRemark} = data
    const {frontmatter, html} = markdownRemark

    return (
        <Layout>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
            dangerouslySetInnerHTML={{__html: html}}/>
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