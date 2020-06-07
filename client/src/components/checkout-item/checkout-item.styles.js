import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`

export const CheckoutItemNameSpan = styled.span`
  width: 23%;
` 

export const QuantitySpan = styled(CheckoutItemNameSpan)`
  
`