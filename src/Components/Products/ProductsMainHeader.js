import React, { useState } from "react";
import { connect } from "react-redux";
import { addCategory } from "Redux/Actions";
// import RangeDatePicker from "Components/DatePicker/RangeDatePicker";
// import Calender from "Components/Calender/Calender";
import DatePlaceHolder from "Components/Calender/DatePlaceHolder";
import styled from "styled-components";

const ProductsMainHeader = (props) => {
  const { addCategory } = props;
  const [category, setCategory] = useState([
    "전체보기",
    "비건",
    "해산물",
    "육류",
    "유제품",
  ]);
  const [clickedKey, setClickedKey] = useState();
  const handleClick = (i, li) => {
    setClickedKey(i);
    addCategory(li);
  };

  return (
    <HeaderWrapper>
      <Title>프레시코드</Title>
      <FeatureBox>
        <CategoryBox>
          {category.map((li, i) => {
            return (
              <Category
                key={i}
                id={i}
                onClick={() => handleClick(i, li)}
                clickedKey={clickedKey}
              >
                {li}
              </Category>
            );
          })}
        </CategoryBox>
        <DatePlaceHolder />
        {/* <Calender></Calender> */}
        {/* <RangeDatePicker></RangeDatePicker> */}
      </FeatureBox>
    </HeaderWrapper>
  );
};

export default connect(null, { addCategory })(ProductsMainHeader);

const HeaderWrapper = styled.div`
  width: 85vw;
  margin: 10px;
  @media only screen and (max-width: 1200px) {
    width: 100vw;
  }
`;

const Title = styled.h3`
  display: block;
  margin-bottom: 13px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  color: #3d3d3d;
  @media only screen and (max-width: 720px) {
    text-align: center;
  }
`;

const FeatureBox = styled.div`
  margin: 25px 0 5px 0;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 720px) {
    display: block;
  }
  @media only screen and (max-width: 340px) {
    margin: 10px 0 20px 0;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  @media only screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Category = styled.span`
  font-size: 15px;
  text-align: center;
  padding: ${(props) =>
    props.id === props.clickedKey ? "4px 13px 3px" : "4px 13px"};
  cursor: pointer;
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
