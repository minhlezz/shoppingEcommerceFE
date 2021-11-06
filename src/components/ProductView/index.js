import React, { useEffect, useState } from 'react'
import {
    Wrapper, Content, Image, ProductInfo,
    Price, Roast, RoastLevel, Taste, BagSize,
    Size, Quantity, QuantityNumber, Icon,
    CartButton, Label, ProductDetail, InforContent, RelatedProduct
} from './ProductView.styles';
import { FaPlus, FaMinus } from 'react-icons/fa';
import wrapperImg from '../../assets/images/product_wrapper.png';
import Grid from '../Grid';
import ProductCard from '../ProductCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

const ProductView = (props) => {
    //Redux
    const dispatch = useDispatch()

    let product = props.product;
    if (product === undefined) product = {
        title: "",
        price: "",
        image01: null,
        slug: "",
        categorySlug: "",
        size: [],
        information: {
            about: "",
            farm: "",
            roast: "",
            tasting: ""
        },
        description: "",

    }

    const relatedProduct = props.relatedProduct;
    //State
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);

    //----------Handling Events---------//
    //UpdateQuantity Event
    const handleQuantityEvents = (type) => {
        type === 'plus' ? setQuantity(quantity + 1) : setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }

    //Check addToCart
    const validator = () => {
        if (size === undefined) {
            alert('Please select da size');
            return false
        }
        return true
    }

    useEffect(() => {
        setQuantity(1)
        setSize(undefined)
    }, [product])

    const addToCard = () => {
        if (validator()) {
            let newItem = {
                slug: product.slug,
                size: size,
                price: product.price,
                quantity: quantity
            }
            console.log(newItem)
            if (dispatch(addItem(newItem))) {
                alert('Success')
            } else {
                alert('Fail')
            }
        }
    }


    return (
        <Wrapper>
            <Content>
                <Image>
                    <img src={wrapperImg} alt="wrapper" className="img_wrapper" />
                    <img src={product.image01} alt="" className="img_product" />
                </Image>
                <ProductInfo>
                    <h1>{product.title}</h1>
                    <Price>
                        <label>From</label>
                        <span>${product.price}</span>
                    </Price>
                    <Roast>
                        <label>Roast</label>
                        <RoastLevel>
                            5
                        </RoastLevel>
                    </Roast>
                    <Taste>
                        <label>Taste</label>
                        <div>{product.description}</div>
                    </Taste>
                    <BagSize>
                        <h1>Bag Size</h1>
                        <Size>
                            {product.size.map((item, index) => {
                                return (
                                    <Label
                                        key={index}
                                        isSize={size === item ? true : false}
                                        onClick={() => setSize(item)}
                                    >
                                        <span>{item}</span>
                                    </Label>
                                )
                            })}
                        </Size>
                    </BagSize>
                    <Quantity>
                        <Icon
                            disabled={quantity === 1 ? true : false}
                            onClick={() => handleQuantityEvents('minus')}
                        >
                            <FaMinus />
                        </Icon>
                        <QuantityNumber>{quantity}</QuantityNumber>
                        <Icon
                            onClick={() => handleQuantityEvents('plus')}
                        ><FaPlus /></Icon>
                    </Quantity>
                    <CartButton onClick={() => addToCard()}>
                        <span>Add to Cart</span>
                    </CartButton>
                </ProductInfo>
                <ProductDetail>
                    <h2>About This</h2>
                    <p>{product.information.about}</p>
                    <h2>Information</h2>
                    <Grid col={2} mdCol={2} smCol={2}>
                        <InforContent>
                            <h3>Farm</h3>
                            <p>{product.information.farm}</p>
                        </InforContent>
                        <InforContent>
                            <h3>Roast</h3>
                            <p>{product.information.roast}</p>
                        </InforContent>
                        <InforContent>
                            <h3>Tasting</h3>
                            <p>{product.information.tasting}</p>
                        </InforContent>
                    </Grid>
                </ProductDetail>
            </Content>
            <RelatedProduct>
                <h1>Related Product</h1>
                <Grid col={3} mdCol={3} smCol={1} gap={30}>
                    {relatedProduct && relatedProduct.map((item, index) => (
                        <ProductCard
                            key={index}
                            image={item.image01}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            slug={item.slug}
                        />
                    ))}
                </Grid>
            </RelatedProduct>
        </Wrapper>
    )
}

export default ProductView
