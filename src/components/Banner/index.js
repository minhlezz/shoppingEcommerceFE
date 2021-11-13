import React from 'react'
import {
    Wrapper, Content, Title,
    CustomButton, Image, StyledLink
} from './Banner.styles'
import cfimg from '../../assets/images/coffe_bean_bg.png'

const Banner = () => {
    return (
        <Wrapper>
            <Content>
                <Title><h1>Roasting our coffee and  our neightbor's coffee</h1></Title>
                <StyledLink to="/catalog">
                    <CustomButton>
                        Shop Now
                    </CustomButton>
                </StyledLink>
            </Content>
            <Image>
                <img src={cfimg}
                    alt="" />
            </Image>
        </Wrapper>
    )
}

export default Banner
