import React from 'react'
import { Card, CardLink, CardImage, CardContent, Title } from './CardBrew.styles'
import Grid from '../Grid'
import { Container } from '../../GlobalStyles'

const CardBrew = props => {
    const brews = props.brews

    return (
        <Container>
            <Grid col={3} smCol={1}>
                {brews.length > 0 && brews.map((item, index) => (
                    <CardItem
                        key={index}
                        image={item.image}
                        title={item.title}
                    />
                ))}
            </Grid>
        </Container>
    )
}

const CardItem = ({ image, title }) => {

    return (
        <Card>
            <CardLink to="/">
                <CardImage>
                    <img src={image} alt="" />
                </CardImage>
                <CardContent>
                    <Title>{title}</Title>
                </CardContent>
            </CardLink>
        </Card>
    )
}

export default CardBrew
