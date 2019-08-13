import React from 'react'
import PropTypes from 'prop-types'

export class Button extends React.Component {
  render() {
    const { handleButtonClick, name } = this.props
    return (
      <button className="btn" onClick={() => {}}>
        {name}
      </button>
    )
  }
}

Button.propTypes = {
  // currentYear: PropTypes.number.isRequired,
  // changeYear: PropTypes.func.isRequired,
}
