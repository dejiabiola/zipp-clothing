import React from 'react'
import Loader from '../loader/Loader'


const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps}) => {
  return isLoading ? (
    <WrappedComponent {...otherProps} />
  ) : (
    <Loader />
  )
}

export default WithSpinner
