import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addData } from "Redux/Actions";
import axios from "axios";
import { URL } from "config";
import ProductsLists from "Components/Products/ProductsLists";
import ProductsMainHeader from "Components/Products/ProductsMainHeader";
import styled from "styled-components";

const ProductsMain = (props) => {
  const { infos, cate, addData } = props;

  //상품 카탈로그 데이터를 받아온다.
  const getProductsData = async () => {
    try {
      const url = `${URL}/salads`;
      const res = await axios.get(url, {
        withCredentials: true,
      });
      addData(res.data.menus);
    } catch (error) {
      console.log(error);
      alert("다시 시도하기시 바랍니다");
    }
  };

  useEffect(() => {
    getProductsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductWrapper>
      <ProductsMainHeader></ProductsMainHeader>
      {infos && cate === "전체보기"
        ? infos.map((item) => {
            //할인된 가격
            const fullPrice = item.details[0].price - item.details[0].discount;
            return (
              <ProductsLists key={item.id} fullPrice={fullPrice} item={item} />
            );
          })
        : infos
            .filter((item) => item.category === `["${cate}"]`)
            .map((item) => {
              //할인된 가격
              const fullPrice =
                item.details[0].price - item.details[0].discount;
              return (
                <ProductsLists
                  key={item.id}
                  fullPrice={fullPrice}
                  item={item}
                />
              );
            })}
    </ProductWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    infos: state.getData.items,
    cate: state.getCategory.pickedCategory,
  };
};

export default connect(mapStateToProps, { addData })(ProductsMain);

const ProductWrapper = styled.div`
  width: 85vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  font-family: Roboto, sans-serif;

  @media only screen and (max-width: 1200px) {
    width: 98vw;
  }
`;
