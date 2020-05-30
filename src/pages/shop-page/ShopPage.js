import React, { Component } from 'react'
 import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer'
import CollectionContainer from '../../components/collection/CollectionContainer'


class ShopPage extends Component {
  
  componentDidMount() {
    this.props.fetchCollectionsStart()
  }
  
  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
      </div>
    )
  }
}

ShopPage.propTypes = {
  match: PropTypes.object,
  fetchCollectionsStart: PropTypes.func.isRequired
}



const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)

