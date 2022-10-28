import { ReactComponent as ArrowIcon } from 'assets/images/Seta-2.svg'
import product_tv from 'assets/images/product_pc.png'
import ProductPrice from 'components/ProductPrice'
import './styles.scss'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Product } from 'types/product'
import axios from 'axios'
import { BASE_URL } from 'util/requests'

type UrlParams = {
  productId: string,
}

export function ProductDetails() {

  const { productId } = useParams<UrlParams>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios.get(`${BASE_URL}/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
  }, [productId])

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <Link to='/products' className="goback-container">
          <ArrowIcon /> <h2>VOLTAR</h2>
        </Link>
        <div className="row ">
          <div className="col-xl-6">
            <div className="product-details-img-container">
              <img src={product?.imgUrl} alt="product" />
            </div>
            <div className="name-price-container">
              <h1>{product?.name}</h1>
              {product?.price && <ProductPrice price={product.price} />}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>{product?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}