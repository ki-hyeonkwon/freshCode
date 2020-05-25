import React from "react";
import styled from "styled-components";

const ProductsLists = (props) => {
  const { item, discountedPrice } = props;
  return (
    <PruductList key={item.id}>
      <ImgWrapper src={item.imgUrl} title={item.name}></ImgWrapper>
      <ProductInfoContainer>
        <Name>{item.name}</Name>
        <Summary>{item.summary}</Summary>

        {item.details[0].price === 1 ? (
          ""
        ) : item.details[0].discount === 0 ? (
          <PriceContainer>
            <SalePrice>
              {item.details[0].price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </SalePrice>
            ~
          </PriceContainer>
        ) : (
          <PriceContainer>
            <SalePrice>
              {item.details[0].price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </SalePrice>
            ~
            <Discounted>
              {discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Discounted>
          </PriceContainer>
        )}

        <SummaryDetail>{item.summaryDetail}</SummaryDetail>
        <TagsContainer>
          <TagsBox>
            {item.tags
              .filter((e, i) => i !== 0)
              .map((list, i) => (
                <Tag>{list.name}</Tag>
              ))}
          </TagsBox>
          <KindsOfPersonBox>
            {item.tags[0] !== undefined && (
              <KindsOfPerson>{item.tags[0].name}</KindsOfPerson>
            )}
          </KindsOfPersonBox>
        </TagsContainer>
      </ProductInfoContainer>
    </PruductList>
  );
};

export default ProductsLists;

const PruductList = styled.div`
  width: 25%;
  padding: 12px 8px;
  @media only screen and (max-width: 900px) {
    width: 50%;
  }
`;

const ImgWrapper = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ProductInfoContainer = styled.div`
  margin-top: 10px;
`;

const Name = styled.strong`
  display: block;
  font-size: 13.5px;
  font-weight: 500;
  color: #3d3d3d;
  cursor: pointer;
`;

const Summary = styled.div`
  font-size: 13px;
  line-height: 18px;
  font-weight: 300;
  color: #6f7174;
  margin-top: 7px;
`;

const PriceContainer = styled.div`
  margin-top: 5px;
  color: #ddd;
  font-family: Roboto, sans-serif;
`;

const SalePrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 1px;
  color: #27b06e;
`;

const Discounted = styled.span`
  font-size: 14px;
  text-decoration: line-through;
  font-weight: 200;
  letter-spacing: -0.3px;
  margin-left: 5px;
`;

const SummaryDetail = styled.div`
  font-size: 11.5px;
  font-weight: 300;
  margin-top: 7px;
  letter-spacing: -0.2px;
  color: rgb(151, 151, 151);
`;
const TagsContainer = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  flex-wrap: wrap;
  vertical-align: middle;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;

const TagsBox = styled.div``;

const Tag = styled.div`
  display: inline-block;
  border-radius: 9.5px;
  border: 1px solid rgb(245, 163, 35);
  font-size: 10px;
  letter-spacing: -0.3px;
  font-weight: 500;
  color: rgb(245, 163, 35);
  padding: 2px 5px;
  margin: 3px 3px 0 0;
`;

const KindsOfPersonBox = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 10px;
  color: #f98c4e;
  @media only screen and (max-width: 1200px) {
    margin: 3px 0 0 0;
  }
`;

const KindsOfPerson = styled.div`
  display: inline-block;
  height: 20px;
  width: auto;
  text-align: right;
  padding-right: 5px;
  padding-left: 12px;
  font-size: 10px;
  color: #f98c4e;
  border: 1px solid #f98c4e;
  border-left: transparent;
  position: relative;
  box-sizing: border-box;
  line-height: 18px;
  margin-left: 8px;
  &:before {
    content: "∙";
    width: 15px;
    height: 20px;
    background-image: url("https://www.freshcode.me/images/tag-image/tag_veg.png");
    background-repeat: no-repeat;
    background-size: auto 20px;
    background-position: 0;
    position: absolute;
    left: -8px;
    top: -1px;
  }
  @media only screen and (max-width: 900px) {
    margin-top: 5px;
  }
`;
