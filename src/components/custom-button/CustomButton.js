import React from 'react'
import { CustomButtonContainer } from './customButton.styles'




const CustomButton = ({ children, ...props }) => {
  return (
      <CustomButtonContainer {...props} className='custom-button'>
        {children}
      </CustomButtonContainer>
  )
}

export default CustomButton
