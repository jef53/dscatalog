import axios from "axios";
import { Pagination } from "components/Pagination";
import ProductCard from "components/ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "types/product";
import { AxiosParams, SpringPage } from "types/vendor/axios";
import { BASE_URL } from "util/requests";
import './styles.scss'

export default function Catalog() {
  const [page, setPage] = useState<SpringPage<Product>>()

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    }

    axios(params)
      .then(
        response => {
          setPage(response.data)
        }
      )
  }, [])



  return (

    <div className="container my-4" >
      <div className="row catalog-row-title">
        <h1>Catálogo de Produtos</h1>
      </div>

      <div className="row">
        {page?.content.map(product => (

          <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3">

            <Link to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>

          </div>

        )

        )}

      </div>

      <div className="row">
        <Pagination />
      </div>
    </div>

  )
}