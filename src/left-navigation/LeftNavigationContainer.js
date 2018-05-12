import {connect} from "react-redux";
import LeftNavigation from "./LeftNavigation";

const mapStateToProps = (state = {}) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

const LeftNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftNavigation);

export default LeftNavigationContainer;