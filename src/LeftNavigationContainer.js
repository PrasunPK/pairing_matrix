import {connect} from "react-redux";
import LeftNavigation from "./LeftNavigation";
import {saveStateOfPairs} from "./actions";

const mapStateToProps = (state = {}) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSaveClick: () => {
            saveStateOfPairs();
        }
    }
};

const LeftNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftNavigation);

export default LeftNavigationContainer;