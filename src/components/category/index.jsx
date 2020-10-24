import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import './index.css';

const Container = styled.div`
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
`

const CategoryItemContainer = styled.div`
font-size: 0.7rem;
display: inline-block;
padding: 3px 9px;
margin-bottom: 4px;
margin-right: 4px;
border: 1px solid #000000;
border-radius: 20px 20px 20px 20px;
color: #000000;
font-weight: bold;
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
            {name}
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