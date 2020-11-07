import React from 'react';
import styled from 'styled-components';

import profileImage from './images/profile_image.jpeg'
import instagramIcon from './images/instagram_logo1.png'
import githubIcon from './images/github_logo2.png'
// box-shadow: 0px 0px 10px 2px #f4f4f4;
 
const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 16vw;
 height: 7.5vw;
 background-color: #ffffff;
 border-left: 12px solid #FFF59C;
 padding: 0px 10px 0px 25px;
left: 0px;
right: 0px;
bottom: 0px;

`;

const ProfileContainer = styled.div`
display: flex;
height: 5.5vw;
`;

const InnerContainer = styled.div`
height: 7vw;
text-align: center;
`;

const ProfileImage = styled.img`
width: 4.5vw;
height: 4.5vw;
border-radius: 100px 100px 100px 100px;
object-fit: cover;
`;

const InfoContainer = styled.div`
padding-left: 18px;
height: 4vw;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #ffffff;

`;

const NameText = styled.div`
font-size: 25px;
color: #000000;
font-weight: 700;
font-family: Catamaran;
margin-bottom: 0px;
`;

const DescripText = styled.div`
margin-top: 0px;
font-size: 16px;
font-family: Catamaran;
background-color: #ffffff;
`;

const BottomContainer = styled.div`
padding-top: 5px;
`;

const Emoji = styled.span`
font-size: 15px;
`;

const SocialContainer = styled.div`
margin-top: 0px;
display: flex;
flex-direction: row;

`;

const InstagramLogo = styled.img`
width: 2vw;
height: 2vw;
filter: grayscale(1);  
opacity: 0.5;
`;

const GithubLogo = styled.img`
margin-left: 20px;
width: 1.9vw;
height: 1.9vw;
filter: grayscale(1);  
opacity: 0.1;
`;



const Profile = ({}) => {
    return (
        <Container>
            <ProfileContainer>
            <ProfileImage
            src={profileImage}
            alt=""/>
            <InfoContainer>
            <NameText>
            Jaeyeon
            </NameText>
            <DescripText>
            Software Developer
            </DescripText>
            </InfoContainer>
            </ProfileContainer>
            <SocialContainer>
                <a href="https://www.instagram.com/jaeyeon.e/?hl=ko" target="_blank">
                <InstagramLogo
                src={instagramIcon}/>
                </a>
                <a href="https://github.com/zaeyeon" target="_blank">
                <GithubLogo
                src={githubIcon}/>
                </a>
            </SocialContainer>
        </Container>
    )
}

export default Profile;