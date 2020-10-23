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
 padding: 10px 10px 10px 10px;
position: sticky;
top: 60px;
left: 0px;
right: 0px;
bottom: 0px;
`;

const ProfileContainer = styled.div`
display: table-cell;
vertical-align: middle;
`;

const InnerContainer = styled.div`
background-color: #ffffff;
width: 7vw;
height: 7vw;
`;

const ProfileImage = styled.img`
width: 7vw;
height: 7vw;
border-radius: 100px 100px 100px 100px;
`;

const NameText = styled.div`
margin-top: 12px;
font-size: 23px;
font-family: Namsan;
font-weight: 600;
`;

const DescripText = styled.div`
margin-top: 3px;
font-size: 15px;
font-family: Namsan;
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
                이재연
            </NameText>
            <DescripText>
                안녕하세요.
                <br/>프론트엔드 개발자 이재연입니다.
            </DescripText>
            </ProfileContainer>
        </Container>
    )
}

export default Profile;