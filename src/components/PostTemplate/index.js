import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';

// Local Component
import Layout from '../../components/layout.js';
import Utterances from '../Utterances';
import "./styles.css"


const Container = styled.div`
flex: 1;
`;

const TitleContainer = styled.div`
font-family: Do Hyeon;
font-weight: 300;
font-size: 1.8rem;
`;

const DateText = styled.div`
font-family: Noto Sans;
font-size: 0.8rem;
font-weight: 500;
text-align: right;
`;

const BodyContainer = styled.div`
padding-top: 4vh;
font-family: Noto Sans;
font-weight: 500;
font-size: 0.87rem;
`;

const CommentContainer = styled.div`
padding-top: 50px;
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
            <TitleContainer
            dangerouslySetInnerHTML={{__html: frontmatter.mdTitle}}/>
            <DateText>
            {formatDateToString(frontmatter.date)}
            </DateText>
            <BodyContainer
            dangerouslySetInnerHTML={{__html: html}}/>
            <CommentContainer>
            <Utterances repo="zaeyeon/zaeyeon-blog-utterance"/>
            </CommentContainer>
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
             mdTitle
         }
     }
 }
`;