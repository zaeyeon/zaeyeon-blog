import React from 'react';
import styled from 'styled-components';

import profileImage from './images/profile_image.jpeg'

const Container = styled.div`
 display: table;
 width: 15vw;
 height: 15vw;
 background-color: #ffffff;
 border: 2.5px solid #eeeeee;
 border-radius: 30px 30px 30px 30px;
 padding: 20px 10px 10px 10px;
position: sticky;
top: 60px;
left: 0px;
right: 0px;
bottom: 0px;
`;

const ProfileContainer = styled.div`
display: table-cell;
vertical-align: middle;
text-align: center;

`;

const InnerContainer = styled.div`
background-color: #ffffff;
height: 7vw;
text-align: center;
`;

const ProfileImage = styled.img`
width: 7vw;
height: 7vw;
border-radius: 100px 100px 100px 100px;
object-fit: cover;
`;

const NameText = styled.div`
margin-top: 20px;
font-size: 21px;
font-family: Namsan;
font-weight: 600;
`;

const DescripText = styled.div`
margin-top: 3px;
font-size: 15px;
font-family: Namsan;
flex: 1;
text-align: left;
padding-left: 8px;
padding-top: 10px;
`;

const Emoji = styled.span`
font-size: 24px;
`;



const Profile = ({}) => {
    return (
        <Container>
            <ProfileContainer>
            <InnerContainer>
            <ProfileImage
            src={profileImage}
            alt=""/>
            </InnerContainer>
            <NameText>
            이재연<br/>
            <Emoji>{"🧑🏻‍💻"}</Emoji> Front Developer
            </NameText>
            <DescripText>
            </DescripText>
            </ProfileContainer>
        </Container>
    )
}

export default Profile;