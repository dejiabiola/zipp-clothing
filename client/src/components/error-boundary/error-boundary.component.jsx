import React, { Component } from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles'


class ErrorBoundary extends Component {

  state = {
    hasErrored: false
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  static getDerivedStateFromError(error) {
    //process the error
    return { hasErrored: true }
  }
  render() {

    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/Q2BAOd2.png' />
          <ErrorImageText>Hmmm, this page doesn't seem to be on the map</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;