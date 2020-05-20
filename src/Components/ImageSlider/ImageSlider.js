import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = (props) => {
  const { bannerImg } = props;
  console.log(bannerImg[0]);
  return (
    <ImageSliderWrapper>
      <Carousel
        infiniteLoop
        interval={5000}
        autoPlay
        showThumbs={false}
        showArrows={true}
        labels={false}
      >
        {bannerImg.length > 0 &&
          bannerImg.map((img, i) => {
            return <img src={img.imgUrl} key={i} alt={i} />;
          })}
      </Carousel>
    </ImageSliderWrapper>
  );
};

export default ImageSlider;

const ImageSliderWrapper = styled.div`
  width: 100%;
  p {
    display: none;
  }
`;
