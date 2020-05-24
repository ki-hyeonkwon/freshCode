import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "config";
import ImageSlider from "Components/ImageSlider/ImageSlider";
import Header from "Components/Header/Header";
import ProductsMain from "Components/Products/ProductsMain";
import Calender from "Components/Calender/Calender";

const Main = ({ modalStatus }) => {
  const [bannerImg, setbannerImg] = useState([]);
  const getBannerImg = async () => {
    try {
      const url = `${URL}/banners`;
      // => proxy서버 사용시 아래 코드 이용.
      const res = await axios.get(url, {
        withCredentials: true,
      });
      // => 나만의 크롬 만들기 시 사용.
      //   const res = await axios.get(url, {});
      const getImageInfo = res.data.banners;
      setbannerImg(getImageInfo);
    } catch (error) {
      console.log(error);
      alert("다시 시도하시기 바랍니다.");
    }
  };

  useEffect(() => {
    getBannerImg();
  }, []);

  return (
    <MainWrapper modalStatus={modalStatus}>
      <Header />
      {bannerImg.length > 0 && <ImageSlider bannerImg={bannerImg} />}
      <ProductsMain />
      <Calender></Calender>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100vw;
  height: ${(props) => props.modalStatus && "100vh"};
  overflow: ${(props) => props.modalStatus && "hidden"};
`;
