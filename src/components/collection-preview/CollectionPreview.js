import React from 'react'
import './collection-preview.scss'
import CollectionItem from '../collection-item/CollectionItem'
import { withRouter } from 'react-router-dom'

function CollectionPreview({title, items, history, match, routeName}) {
  return (
    <div className='collection-preview'>
      <h1 className='title' onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items.filter((item, idx) => idx < 4).map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview)
