import React from "react"
import {Link} from "gatsby"
import styled from 'styled-components';

import "./styles.css"

const Container = styled.div`
flex: 1;
height: 9.4rem;
display: flex;
background-color: #ffffff;
padding-left: 6px;
padding-top: 0.65em;
`;


const TitleContainer = styled.div`
font-size: 0.98rem;
font-weight: 500;
color: #000000;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical; 
font-family: Noto Sans;
`;

const DescripContainer = styled.div`
margin-top: 4px;
font-size: 0.8rem;
color: #696969;
font-weight: 500;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical; 
font-family: Noto Sans;
`;

const ThumbnailContainer = styled.div`
width: 8rem;
height: 8rem;
`;

const ThumbnailImage = styled.img`
width: 8rem;
height: 8rem;
object-fit: cover;
`;

const BodyContainer = styled.div`
display: flex;
height: 6rem;
flex: 1;
`;

const LeftContainer = styled.div`
flex: 1;
padding-right: 15px;
`;

const PostLinkItem = ({ post }) => {

   console.log("PostLinkItem post", post);

   return (
    <Link to={post.frontmatter.slug} className="link">
    <Container>
            <BodyContainer>
                <LeftContainer>
                <TitleContainer>
                {post.frontmatter.title}
                </TitleContainer>
                <DescripContainer
                dangerouslySetInnerHTML={{__html: post.frontmatter.preview}}>
                </DescripContainer>
                </LeftContainer>
              <ThumbnailContainer>
                  <ThumbnailImage
                  src={post.frontmatter.thumbnail.childImageSharp.fluid.src} alt=""/>
              </ThumbnailContainer>
              </BodyContainer>
    </Container>
    </Link>
   )
}

export default PostLinkItem;