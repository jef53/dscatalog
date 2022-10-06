import { ReactComponent as ArrowIcon } from 'assets/images/Seta-2.svg'
import product_tv from 'assets/images/product_pc.png'
import ProductPrice from 'components/ProductPrice'
import './styles.scss'

export function ProductDetails() {
  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <div className="goback-container">
          <ArrowIcon />
          <h2>VOLTAR</h2>
        </div>
        <div className="row ">
          <div className="col-xl-6">
            <div className="product-details-img-container">
              <img src={product_tv} alt="product" />
            </div>
            <div className="name-price-container">
              <h1>Nome do Produto</h1>
              <ProductPrice price={2345.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>Seja um mestre em multitarefas com a capacidade
                para exibir quatro aplicativos simultâneos na tela.
                A tela está ficando abarrotada? Crie áreas de trabalho
                virtuais para obter mais espaço e trabalhar com os
                itens que você deseja. Além disso, todas a
                notificações e principais configurações são
                reunidas em uma única tela de fácil acesso.

                Seja um mestre em multitarefas com a capacidade
                para exibir quatro aplicativos simultâneos na tela.
                A tela está ficando abarrotada? Crie áreas de trabalho
                virtuais para obter mais espaço e trabalhar com os
                itens que você deseja. Além disso, todas a
                notificações e principais configurações são
                reunidas em uma única tela de fácil acesso.

                Seja um mestre em multitarefas com a capacidade
                para exibir quatro aplicativos simultâneos na tela.
                A tela está ficando abarrotada? Crie áreas de trabalho
                virtuais para obter mais espaço e trabalhar com os
                itens que você deseja. Além disso, todas a
                notificações e principais configurações são
                reunidas em uma única tela de fácil acesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}