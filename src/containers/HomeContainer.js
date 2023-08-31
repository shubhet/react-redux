//container data fetching here
//connect components and redux here
import { connect } from "react-redux";
import { addToCart } from "../Services/Actions/action";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  cardData: state.cardItems
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
