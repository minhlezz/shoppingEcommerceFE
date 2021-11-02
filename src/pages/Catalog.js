import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Button, Flex } from '../GlobalStyles';
import InfiniteList from '../components/InfiniteList'
import CatalogFilter from '../components/CatalogFilter'
import productData from '../assets/fake-api/product.data';

const CustomFlex = styled(Flex)`
  flex-direction: column;
  padding-top: 150px;
`

const Catalog = () => {
  const initFilter = {
    category: [],
    size: []
  }

  //State
  const productList = productData.getAllProducts();
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(initFilter);

  //Handling Events
  const handleToggle = () => setToggle(!toggle);

  const handleClearFilter = () => setFilter(initFilter);

  const filterProducts = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug]
          })
          break
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size]
          })
          break
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(e => e !== item.categorySlug)
          setFilter({ ...filter, category: newCategory })
          break
        case "SIZE":
          const newSize = filter.size.filter(e => e !== item.size)
          setFilter({ ...filter, size: newSize })
          break
        default:
      }
    }
  };

  const updateProducts = useCallback(
    () => {
      let temp = productList
      if (filter.category.length > 0) {
        temp = temp.filter(e => filter.category.includes(e.categorySlug))
      }
      if (filter.size.length > 0) {
        temp = temp.filter(e => {
          const check = e.size.find(size => filter.size.includes(size))
          return check !== undefined
        })
      }
      setProducts(temp)
    },
    [filter, productList],
  )

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  return (
    <>
      <CustomFlex>
        <Button onClick={handleToggle}>Filters</Button>
        {toggle && (
          <CatalogFilter
            filterProducts={filterProducts}
            filter={filter}
          />
        )}
        <InfiniteList data={products} />
      </CustomFlex>
    </>
  )
}

export default Catalog
