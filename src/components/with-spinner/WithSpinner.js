import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps}) => {
  return isLoading ? (
    <WrappedComponent {...otherProps} />
  ) : (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
}

export default WithSpinner
