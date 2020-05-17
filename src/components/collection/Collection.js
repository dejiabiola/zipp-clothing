import React from 'react'
import './collection.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../collection-item/CollectionItem'

const CollectionPage = ({ collection: {items} }) => {
  return (
    <div className='collection-page'>
      {
        items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
  collection: selectCollection(ownProps.match.params.collectionId)(state)
}}

export default connect(mapStateToProps)(CollectionPage)
