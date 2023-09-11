import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CarouselCenter from '../../components/carousel/CarouselCenter'
import ShoesCard from '../../components/shoes-card/ShoesCard'

const Product = () => {
    const [limit, setLimit] = useState(5)

    const [products, setProducts] = useState([])



    const API_URL = `https://fakestoreapi.com/products?limit=${limit}`

    //function to get product from API

    const fetchProduct = async() => {
        try {
            const response = await axios.get(API_URL)
            const {data} = response
            console.log(
                data, "response from fetchProduct"
            )
            setProducts(data)

        } catch (error) {
                console.log(error, 'error from fetchProduct')
        }
    }

    console.log(products)

    useEffect(
        () => {
            fetchProduct()
        }, [limit]
    )
  return (
    <div>
        <CarouselCenter>
            {
                products.map(
                    (item,index) => {
                        return(
                            <ShoesCard 
                            imgSrc={item.image}
                            name ={item.title}
                            des ={item.description}
                            buttonText ={item.price}
                            className ="carousel-item"
                            />
                        )
                    }
                )
            }
        </CarouselCenter>

        <button className='' onClick={
            () => setLimit(prev => prev + 5)
        }>
            Load 5 more products
        </button>
    </div>
  )
}

export default Product