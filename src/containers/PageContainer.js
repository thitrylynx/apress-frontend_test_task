import React from 'react'
import { connect } from 'react-redux'
import { Product } from '../components/Product'
// import { getPhotos } from '../actions/PageActions'
// import { getLastYears } from '../util/date'

class PageContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { products } = this.props
    return (
      <div className="pageContainer">
        {products.map(product => {
          return <Product key={product.id} product={product} /> 
          })}
      </div>
    )

  }
  }

const mapStateToProps = store => {
  return {
    products: store.page.products,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getPhotos: year => dispatch(getPhotos(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
