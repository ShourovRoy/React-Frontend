import React, {useState, useEffect} from 'react'
import Base from './Base'
import { getProducts } from './helper/coreapicalls'

import '../style.css'
import Card from './Card'



const Home = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    console.log(products)

    const loadAllProducts = async () => {
        await getProducts()
            .then(data => {
                if(data.error)  {
                    setError(data.error)
                    console.log(error)
                } else {
                    setProducts(data)
                }
                
            })
    }

    useEffect(() => {
        loadAllProducts()
    }, [])

    return (
        <Base
            title='My Home page'
            description='Ame kesu jani na'
        >
            <h3>Home component</h3>
            <div className='row'>
                {products.map((product, index) => (
                    <div key={index} className='col-4 mb-4'>
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </Base>
    )
}

export default Home
