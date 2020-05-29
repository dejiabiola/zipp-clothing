import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from 'reselect'
import { compose } from "redux";
import Collection from "./Collection";
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/WithSpinner";




const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoaded
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)

export default CollectionContainer