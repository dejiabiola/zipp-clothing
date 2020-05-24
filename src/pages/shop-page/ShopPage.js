import React, { Component } from 'react'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import { Route } from 'react-router-dom'
import CollectionPage from '../../components/collection/Collection'
import { firestore, convertCollectionToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/WithSpinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  state = {
    isLoading: true
  }
  unSubscribeFromSnapShot = null
  
  componentDidMount() {
    const collectionRef = firestore.collection('collections')

    this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
      const collectionsMap = convertCollectionToMap(snapShot)
      this.props.updateCollections(collectionsMap)
      this.setState({
        isLoading: false
      })
    })
  }
  
  render() {
    const { match } = this.props
    const { isLoading } = this.state
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner {...props} isLoading={isLoading} />} 
        />
        <Route path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
  }
}

export default connect(null, mapDispatchToProps)(ShopPage)

