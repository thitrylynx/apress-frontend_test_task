import React from 'react'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
// import { getPhotos } from '../actions/PageActions'
// import { getLastYears } from '../util/date'

class PageContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { page } = this.props
    return (
      <Page
        products={page.products}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
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
