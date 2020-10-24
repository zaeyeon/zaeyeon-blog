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

    const formatDateToString = (date) => {
       console.log("date", date);
       var tmpDate = new Date(date);
       var year = tmpDate.getFullYear();
       var month = tmpDate.getMonth() + 1;
       var day = tmpDate.getDate();

       console.log("year", year);
       console.log("month", month);
       console.log("day", day);

       return year + "년 " + month + "월 " + day + "일"
    }

    return (
        <Layout>
            <Container>
            <h1>{frontmatter.title}</h1>
            <p>{formatDateToString(frontmatter.date)}</p>
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
             date
             slug
             title
         }
     }
 }
`;