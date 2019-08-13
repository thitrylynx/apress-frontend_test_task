import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { setYear } from '../actions/PageActions'

class App extends Component {
  render() {
    const { page } = this.props
    return (
      <div className="app">
        <Page
          products={page.products}
        />
      </div>
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
    // setYearAction: year => dispatch(setYear(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
