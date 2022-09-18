import './styles.scss'
import ProductImg from 'assets/images/product.png'
import ProductPrice from 'components/ProductPrice'

export default function () {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Product" />
      </div>
      <div className="card-bottom-container">
        <h6>Nome do produto</h6>
        <div><ProductPrice /></div >
      </div>
    </div>
  )
}