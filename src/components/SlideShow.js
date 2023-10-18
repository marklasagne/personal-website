import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Slideshow = ({ images }) => {
  return (
    <>
      <StyledSwiper navigation={true} modules={[Navigation]}  className="mySwiper">
        {images.map((image, index) => (
          <StyledSwiperSlide key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
}

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-button-next,
  .swiper-button-prev {
    color: black;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.5rem;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 50%;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
    max-width: 100%;
    width: auto;
    max-height: 350px;
`;


export default Slideshow;