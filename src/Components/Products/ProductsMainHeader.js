import React, { useState } from "react";
import styled from "styled-components";

const ProductsMainHeader = () => {
  const [category, setCategory] = useState([
    "전체보기",
    "비건",
    "해산물",
    "육류",
    "유제품",
  ]);
  const [clickedKey, setClickedKey] = useState();

  const handleClick = (i) => {
    setClickedKey(i);
    console.log(i);
  };

  return (
    <HeaderWrapper>
      <Title>프레시코드</Title>
      <CategoryBox>
        {category.map((li, i) => {
          return (
            <Category
              key={i}
              id={i}
              onClick={() => handleClick(i)}
              clickedKey={clickedKey}
            >
              {li}
            </Category>
          );
        })}
      </CategoryBox>
    </HeaderWrapper>
  );
};
export default ProductsMainHeader;

const HeaderWrapper = styled.div`
  width: 85vw;
  margin: 10px;
`;

const Title = styled.h3`
  display: block;
  margin-bottom: 13px;
  text-align: left;
  font-size: 30px;
  font-weight: 500;
  color: #3d3d3d;
`;

const CategoryBox = styled.div`
  margin: 20px 0 30px 0;
  @media only screen and (max-width: 340px) {
    margin: 10px 0 20px 0;
  }
`;

const Category = styled.span`
  font-size: 15px;
  text-align: center;
  padding: 4px 13px;
  cursor: pointer;
  border-bottom: 0.5px solid #e8e8e8;
  font-weight: ${(props) => (props.id === props.clickedKey ? "500" : "400")};
  border-bottom: ${(props) =>
    props.id === props.clickedKey
      ? "2px solid #1fb66d "
      : "0.5px solid #e8e8e8"};
  color: ${(props) => (props.id === props.clickedKey ? "#1fb66d" : "#656565")};
  &:hover {
    font-weight: 500;
    color: #1fb66d;
    border-bottom: 0.5px solid #1fb66d;
  }
  @media only screen and (max-width: 340px) {
    font-size: 10px;
    padding: 2px 10px;
  }
`;
