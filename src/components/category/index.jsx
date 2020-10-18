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
`;

const categoryArray = [
    "react", "react-native", "android", "ios", "javascript", "typescript", "algorithm"
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
            {categoryArray.map((name, index) => {
                return (
                    <CategoryItem
                    name={name}/>
                )
            })}
        </Container>
    )
}

export default Category;