import React from "react"
import {Link} from "gatsby"
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
height: 9.4rem;
display: flex;
background-color: #ffffff;
border-bottom: 1px solid #eeeeee;
padding-left: 6px;
padding-top: 0.65em;
`;

const LinkContainer = styled.div`
`;

const TitleContainer = styled.div`
font-size: 1.1rem;
font-weight: bold;
color: #000000;
height: 1.1rem;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical; 
`;

const DescripContainer = styled.div`
margin-top: 10px;
font-size: 0.9rem;
color: #000000;

overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 6;
-webkit-box-orient: vertical; 

`;

const ThumbnailContainer = styled.div`
width: 8rem;
height: 8rem;
`;

const ThumbnailImage = styled.img`
width: 8rem;
height: 8rem;
`;

const BodyContainer = styled.div`
display: flex;
justify-content: space-evenly;
height: 6rem;
`;

const LeftContainer = styled.div`
flex: 1;
padding-right: 15px;
`;

const PostLinkItem = ({ post }) => {

   console.log("PostLinkItem post", post);

   return (
    <Container>
        <LinkContainer>
        <Link to={post.frontmatter.slug} className="link">
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
                  src={post.frontmatter.thumbnailImage.childImageSharp.fluid.src} alt=""/>
              </ThumbnailContainer>
              </BodyContainer>
        </Link>
        </LinkContainer>
    </Container>
   )
}

export default PostLinkItem;