import React, { useState } from 'react'
import { Wrapper, Content, ContentTitle } from './CatalogFilter.styles'
import Button from '../Button'
import Widget from '../Widget'
import Checkbox from '../Checkbox'
import Grid from '../Grid'
import Races from '../../assets/fake-api/races.data'

const CatalogFilter = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = event => {
        setChecked(event.target.checked)
    }

    return (
        <Wrapper>
            <Content>
                <ContentTitle>
                    <p>Filters</p>
                    <Button  >Clear Filter</Button>
                </ContentTitle>
                <Widget>
                    <Grid col={2} smCol={1} gap={20}>
                        {Races.map((race, index) => (
                            <Checkbox
                                key={index}
                                checked={checked}
                                onChange={handleCheckboxChange}
                                label={race.name}
                            />
                        ))}
                    </Grid>
                </Widget>
            </Content>
        </Wrapper>
    )
}

export default CatalogFilter
