import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from 'reselect'
import { compose } from "redux";
import CollectionsOverview from "./CollectionsOverview";
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/WithSpinner";




const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoaded
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview)

export default CollectionsOverviewContainer