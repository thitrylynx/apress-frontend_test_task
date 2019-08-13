import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'
import test from '../assets/images/8.jpg'


export class Product extends React.Component {
  // changeYear = currentYear => {
  //   this.props.setYear(currentYear)
  // }

  render() {
    const { product } = this.props
    const productImage = require(`../${product.img}`);
    
    return (
      <div className="item">
       <img src={productImage} className="productImage" alt='product image' />
       <div>
         <h1>{product.title}</h1>
         <p>{product.price}</p>
       </div>
       <div>
         <Button name='Заказать' handleButtonClick={'this.changeYear'}/>
         <Button name='В корзину' handleButtonClick={'this.changeYear'}/>
       </div>
      </div>
    ) 
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}
