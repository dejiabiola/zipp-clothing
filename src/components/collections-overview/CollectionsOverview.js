import React from 'react'
import './collections-overview.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/CollectionPreview'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import PropTypes from 'prop-types'


const CollectionsOverview = ({ collections }) => {
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

CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
