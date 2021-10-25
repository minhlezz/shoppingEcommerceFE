import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Name, Image, Races, Price } from './HeroCard.styles'

const HeroCard = ({ id, heroName, image, race, heroPrice }) => {
    return (
        <Wrapper to={`hero/${id}`}>
            <Name>{heroName}</Name>
            <Image>
                <img src={image} alt="" />
            </Image>
            <Races>{race}</Races>
            <Price>{`$${heroPrice}`}</Price>
        </Wrapper>
    )
}

HeroCard.propTypes = {
    id: PropTypes.number.isRequired,
    heroName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    heroPrice: PropTypes.number.isRequired,
}

export default HeroCard
