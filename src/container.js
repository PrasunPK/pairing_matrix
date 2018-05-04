import {connect} from "react-redux";
import Main from "./Main";
import {dayIncreased} from "./actions";

const defaultState = () => {
    return {
        count: 0
    }
};

const mapStateToProps = (state = defaultState(), ownProps) => {
    console.log('STATE ===> ', state );
    return {
        ...state,
        count: state.count || 0
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleAddClick: () => {
            console.log("On Add click");
            dayIncreased(dispatch);
        }
    }
};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default MainContainer;