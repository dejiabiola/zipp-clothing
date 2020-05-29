import React from 'react'
import './collection.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../collection-item/CollectionItem'
import PropTypes from 'prop-types'


const Collection = ({ collection }) => {
  const { items, title } = collection
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

Collection.propTypes = {
  collection: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
  collection: selectCollection(ownProps.match.params.collectionId)(state)
}}

export default connect(mapStateToProps)(Collection)
