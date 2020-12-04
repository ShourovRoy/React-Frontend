import React, {useState, useEffect} from 'react'
import { getProducts } from './helper/coreapicalls'

const Home = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    console.log(products)

    const loadAllProducts = () => {
        getProducts()
            .then(data => {
                if(data.error)  {
                    setError(data.error)
                } else {
                    setProducts(data)
                }
                
            })
    }

    useEffect(() => {
        loadAllProducts()
    }, [])

    return (
        <div>
            <h3>Home component</h3>
            <div className='row'>
                {products.map((product, index) => (
                    <div key={index}>
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
