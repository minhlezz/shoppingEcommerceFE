import React from 'react'
import { Container } from '../GlobalStyles'
import InfiniteList from '../components/InfiniteList'
import CatalogFilter from '../components/CatalogFilter'
import productData from '../assets/fake-api/product.data';

const extStyles = {
  paddingTop: '150px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}

const Catalog = () => {

  return (
    <Container style={extStyles}>
      {/* <CatalogFilter /> */}
      <InfiniteList data={productData} />
    </Container>
  )
}

export default Catalog
