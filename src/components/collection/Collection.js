import React from 'react'
import './collection.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../collection-item/CollectionItem'

const CollectionPage = ({ collection }) => {
  const { items, title } = collection
  console.log(collection)
  return (
    <div className='collection-page'>
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
  collection: selectCollection(ownProps.match.params.collectionId)(state)
}}

export default connect(mapStateToProps)(CollectionPage)
