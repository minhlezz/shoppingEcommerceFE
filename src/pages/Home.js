import React from 'react'
import Helmet from '../components/Helmet'
import Banner from '../components/Banner'
import ProductSlider from '../components/ProductSlider'
import Section, { SectionBody, SectionTitle } from '../components/Section/index'
import { Container } from '../GlobalStyles'



const Home = () => {
    return (
        <Helmet title="Home">
            <Banner />
            {/* <ProductSlider /> */}
        </Helmet>
    )
}

export default Home
