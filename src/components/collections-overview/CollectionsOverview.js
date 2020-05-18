import React from 'react'
import './collections-overview.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/CollectionPreview'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({ collections}) => {
  return (
    <div className='collections-overview'>
      {
      collections.map(({ id, ...restOfCollection}) => (
        <CollectionPreview key={id} {...restOfCollection} />
      ))
    }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
