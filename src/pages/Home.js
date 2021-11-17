import React from 'react'
import Helmet from '../components/Helmet'
import Banner from '../components/Banner'
import ProductSlider from '../components/ProductSlider'
import Section, { SectionBody, SectionTitle } from '../components/Section/index'
import productData from '../assets/fake-api/product.data'
import CardBrew from '../components/CardBrew'
import brewData from '../assets/fake-api/brewguide.data'
import Hiring from '../components/Hiring'

const Home = () => {
    const relatedProduct = productData.getProducts(4)
    const brews = brewData.getAll();

    return (
        <Helmet title="Home">
            <Banner />
            <Section>
                <SectionTitle>Explore the range</SectionTitle>
                <SectionBody>
                    <ProductSlider relatedProduct={relatedProduct} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Check out our most popular brew guides</SectionTitle>
                <SectionBody>
                    <CardBrew brews={brews} />
                </SectionBody>
            </Section>
            <Section>
                <SectionBody>
                    <Hiring />
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Home
