import React, { useEffect, useRef, useState } from 'react'
import { Wrapper } from './InfiteList.styles'
import Grid from '../Grid/'
import ProductCard from '../ProductCard'

const InfiniteList = (props) => {
    const perLoad = 6;
    const listRef = useRef(null);

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const [index, setIndex] = useState(0);

    /**
     *  render with  @param {perLoad} items
     */
    useEffect(() => {
        setData(props.data.slice(0, perLoad))
        setIndex(1)
    }, [props.data])

    /**
     * Trigger scrolling to bottom
     */
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (listRef && listRef.current) {
                if (window.scrollY + window.innerHeight === listRef.current.clientHeight + listRef.current.offsetTop ) {
                    console.log("bottom reach")
                    setLoad(true)
                }
            }
        })
    }, [listRef])

    useEffect(() => {
        const getItems = () => {
            //Page number
            const pages = Math.floor(props.data.length / perLoad);
            //Max page Number = listData/itemsPerLoad (if isOdd maxPage + 1)
            const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;
            if (load && index <= maxIndex) {
                const start = perLoad * index
                const end = start + perLoad
                setData(data.concat(props.data.slice(start, end))) //Merge list data
                setIndex(index + 1) //page count
            }
        }
        getItems();
        setLoad(false);
    }, [load, index, data, props.data])


    return (
        <Wrapper ref={listRef}>
            <Grid col={3} mdCol={2} smCol={1} gap={20}>
                {
                    data && data.map((item, index) => (
                        <ProductCard
                            key={index}
                            image={item.image01}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            slug={item.slug}
                        />
                    ))
                }

            </Grid>
        </Wrapper>
    )
}

export default InfiniteList
