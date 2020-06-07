import React from 'react'
import MenuItem from '../menu-item/MenuItem'
import './directory.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(({id, ...remainingSectionsProps}) => (
        <MenuItem key={id} {...remainingSectionsProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)