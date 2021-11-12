import React from 'react'
import styled from 'styled-components'
import { Container } from '../GlobalStyles'
import Helmet from '../components/Helmet'
// import Banner from '../components/Banner'

const CustomContainer = styled(Container)`
    padding-top: 82px;
`

const Home = () => {
    return (
        <Helmet title="Home">
            <CustomContainer>
                {/* <Banner /> */}
                abc
            </CustomContainer>
        </Helmet>
    )
}

export default Home
