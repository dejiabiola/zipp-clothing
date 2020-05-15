import React, { Component } from 'react'
import { SHOP_DATA } from '../../utils/shop.data'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  }

  render() {
    return (
      <div className='shop-page'>
        {
          this.state.collections.map(({ id, ...restOfCollection}) => (
            <CollectionPreview key={id} {...restOfCollection} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage

