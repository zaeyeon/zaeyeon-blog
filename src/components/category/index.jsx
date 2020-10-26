import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import './index.css';

const Container = styled.div`
margin-top: 20px;
display: table;
width: 15vw;
border-radius: 30px 30px 30px 30px;
padding: 10px 0px 10px 0px;
position: sticky;
top: 20px;
left: 0px;
right: 0px;
bottom: 0px;
`

const TitleContainer = styled.div`
width: 15vw;
height: 1vw;
background-color: #f4f4f480;
background: linear-gradient(72deg, #ffeeee, #ddefbb)
`;

const CategoryItemContainer = styled.div`
font-size: 0.75rem;
color: #000000;
font-weight: 500;
padding: 1px 3px;
display: flex;
flex-direction: row;
align-items: center;
font-family: Noto Sans;
`;

const CategoryIndicator = styled.div`
width: 2px;
height: 2px;
background-color: #000000;
margin-right: 5px;
`;

const categoryArray = [
    {
        name: "react",
        key: 1
    },
    {
        name: "react-native",
        key: 2
    },
    {
        name: "android",
        key: 3,
    },
    {
        name: "ios",
        key: 4,
    },
    {
        name: "javascript",
        key: 5,
    },
    {
        name: "typescript",
        key: 6,
    },
    {
        name: "algorithm",
        key: 7,
    }
]


const CategoryItem = ({name}) => {
    return (
      <Link to={`/categorys/${name}`} className="category">
          <CategoryItemContainer>
              <CategoryIndicator/>
            {" " +name}
            </CategoryItemContainer>
        </Link>
    )
}

const Category = ({}) => {
    return (
        <Container>
            {categoryArray.map((item, index) => {
                return (
                    <CategoryItem
                    key={index}
                    name={item.name}
                    />
                )
            })}
        </Container>
    )
}

export default Category;