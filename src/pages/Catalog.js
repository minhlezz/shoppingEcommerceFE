import React, { useState } from 'react'
import InfiniteList from '../components/InfiniteList'
import CatalogFilter from '../components/CatalogFilter'
import productData from '../assets/fake-api/product.data';
import { Button, Flex } from '../GlobalStyles';
import styled from 'styled-components';

const CustomFlex = styled(Flex)`
  flex-direction: column;
  padding-top: 150px;
`

const Catalog = () => {
  const initFilter = {
    category: [],
    size: []
  }
  const productList = productData.getAllProducts();
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(initFilter);


  //Handling Events
  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <CustomFlex>
        <Button onClick={handleToggle}>Filters</Button>
        {toggle && (
          <CatalogFilter />
        )}
        <InfiniteList data={products} />
      </CustomFlex>
    </>
  )
}

export default Catalog
