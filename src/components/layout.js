/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, {createGlobalStyle}from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Profile from './profile'
import Category from './category';

import "./layout.css"


const Container = styled.div`
display: inline;
`;

const BodyContainer = styled.div`
margin: 3.5rem 17.5vw;
padding: 0 1rem;
display: flex;
`;

const LeftContainer = styled.div`
display: inline-block;
`;

const PostListContainer = styled.div`
flex: 1;
padding-left: 2.7vw;
display: flex;
`;

const CategoryContainer = styled.div`
margin-top: 20px;
display: table;
width: 15vw;
background-color: #ffffff;
border: 2.5px solid #eeeeee;
border-radius: 30px 30px 30px 30px;
padding: 10px 10px 10px 10px;
position: sticky;
top: 330px;
left: 0px;
right: 0px;
bottom: 0px;
box-shadow: none;
`;

const GlobalStyles = createGlobalStyle`
  body {
    font: 300 18px Namsan;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
    <GlobalStyles/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <BodyContainer style={{maxWidth: 1050}}>
        <LeftContainer>
          <Profile/>
          <Category/>
        </LeftContainer>
        <PostListContainer>
          {children}
        </PostListContainer>
      </BodyContainer>
      </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
