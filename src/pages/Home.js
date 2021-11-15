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
            <Section>
                <SectionTitle>Explore the range</SectionTitle>
                <SectionBody>
                    <ProductSlider />
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Home
