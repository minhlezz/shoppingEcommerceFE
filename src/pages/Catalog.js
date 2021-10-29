import React, { useState } from 'react'
import InfiniteList from '../components/InfiniteList'
import CatalogFilter from '../components/CatalogFilter'
import productData from '../assets/fake-api/product.data';



const Catalog = () => {

  const productList = productData.getAllProducts()
  const [products, setProducts] = useState(productList);

  return (
    <>
      {/* <CatalogFilter /> */}
      <InfiniteList data={products} />
    </>
  )
}

export default Catalog
