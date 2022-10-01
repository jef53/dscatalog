import './styles.scss'

import ProductPrice from 'components/ProductPrice'
import { Product } from 'types/product'

interface ProductCardProps {
  product: Product,
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="card-bottom-container">
        <h6>{product.name}</h6>
        <div><ProductPrice price={product.price} /></div >
      </div>
    </div>
  )
}