import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import './index.css';

const Container = styled.div`
margin-top: 20px;
display: table;
width: 15vw;
border-radius: 30px 30px 30px 30px;
padding: 10px 10px 10px 10px;
position: sticky;
top: 60px;
left: 0px;
right: 0px;
bottom: 0px;
`

const CategoryItemContainer = styled.div`
font-size: 0.8rem;
margin-right: 4px;
border-radius: 20px 20px 20px 20px;
color: #707070;
font-weight: 400;
padding: 3px 5px;

flex-direction: row;
`;

const CategoryIndicator = styled.div`
width: 3px;
height: 15px;
background-color: #707070;
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