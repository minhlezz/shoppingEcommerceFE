import React from 'react'
import { Container } from '../GlobalStyles'
import InfiniteList from '../components/InfiniteList'
import CatalogFilter from '../components/CatalogFilter'
import heroes from '../assets/fake-api/heroes.data';

const extStyles = {
  paddingTop: '150px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}

const Catalog = () => {

  return (
    <Container style={extStyles}>
      <CatalogFilter />
      <InfiniteList data={heroes} />
    </Container>
  )
}

export default Catalog
