import { ReactComponent as Arrow } from 'assets/images/previous.svg'
import { ReactComponent as ArrowFoward } from 'assets/images/foward.svg'

import './styles.scss'
export function Pagination() {
  return (
    <div className='pagination-container'>
      <Arrow className="arrow-previous arrow-inactive" />
      <div className='pagination-item active'>1</div>
      <div className='pagination-item'>2</div>
      <div className='pagination-item'>3</div>
      <div className='pagination-item'>...</div>
      <div className='pagination-item'>10</div>
      <Arrow className="arrow-active arrow-foward" />
    </div>
  )
}