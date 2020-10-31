import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, graphql, useStaticQuery} from 'gatsby';

import algorithmObj from '../../posts/algorithm/index';
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
        key: 1,
        amount: 1,
    },
    {
        name: "react-native",
        key: 2,
        amount: 0,
    },
    {
        name: "android",
        key: 3,
        amount: 2,
    },
    {
        name: "ios",
        key: 4,
        amount: 0,
    },
    {
        name: "javascript",
        key: 5,
        amount: 0,
    },
    {
        name: "typescript",
        key: 6,
        amount: 0,
    },
    {
        name: "algorithm",
        key: 7,
        amount: 1,
    },
    {
        name: "project",
        key: 8,
        amount: 1,
    }
]

const CategoryItem = ({name, amount}) => {


    return (
      <Link to={`/categorys/${name}`} className="category">
          <CategoryItemContainer>
              <CategoryIndicator/>
            {" " + name + " (" + amount + ")"}
            </CategoryItemContainer>
        </Link>
    )
}

const Category = ({}) => {
      console.log("Category posts", algorithmObj);

    return (
        <Container>
            {categoryArray.map((item, index) => {
                return (
                    <CategoryItem
                    key={index}
                    name={item.name}
                    amount={item.amount}
                    />
                )
            })}
        </Container>
    )
}

export default Category;


 