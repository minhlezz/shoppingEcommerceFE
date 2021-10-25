import React from 'react'
import { Wrapper } from './InfiteList.styles'
import HeroCard from '../HeroCard'
import Grid from '../Grid/'

const InfiniteList = ({ data }) => {
    return (
        <Wrapper>
            <Grid col={3} mdCol={2} smCol={1} gap={20}>
                {data.map((item, index) => (
                    <HeroCard
                        key={index}
                        id={item.id}
                        heroName={item.heroName}
                        image={item.image}
                        race={item.race}
                        heroPrice={item.heroPrice}
                    />
                ))}
            </Grid>
        </Wrapper>
    )
}

export default InfiniteList
