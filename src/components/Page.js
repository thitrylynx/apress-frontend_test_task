import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'

export class Page extends React.Component {
  // changeYear = currentYear => {
  //   this.props.setYear(currentYear)
  // }

  render() {
    const { products } = this.props
    console.log('products 2', products)

    return (
      <div className="ib page">
        {/* {years.map(currentYear => {
          return (
            <Button
              key={currentYear}
              currentYear={currentYear}
              changeYear={this.changeYear}
            />
          )
        })}
        <h3>{year} год</h3>
        <p>У тебя {photos.length} фото.</p> */}
      </div>
    )
  }
}

Page.propTypes = {
  products: PropTypes.array.isRequired
}
