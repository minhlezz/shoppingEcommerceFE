import React from 'react'
import {
    Wrapper, Card, CardImage, CardContent, Title,
    Price, Info, SubBackground
} from './ProductSlider.styles'
import SliderData from '../../assets/fake-api/slider.data';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const ProductSlider = () => {

    SwiperCore.use([Navigation, Pagination, Scrollbar])

    return (
        <Wrapper>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                navigation={true}
            >
                {SliderData.length > 0 && SliderData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ProductItem item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    )
}

const ProductItem = (props) => {

    return (
        <Card to={props.item.slug}>
            <CardImage>
                <SubBackground />
                <img src={props.item.image01} alt="" />
            </CardImage>
            <CardContent>
                <Price>${props.item.price}</Price>
                <Title>{props.item.title}</Title>
                <Info>{props.item.description}</Info>
            </CardContent>
        </Card>
    )
}

export default ProductSlider
