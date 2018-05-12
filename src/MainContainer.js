import {connect} from "react-redux";
import Main from "./Main";
import {dayDecreased, dayIncreased, getLatestSavedState} from "./actions";

export const defaultState = () => {
    return {
        pairs: null,
        count: 0
    }
};

const mapStateToProps = (state = defaultState()) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddClick: (e) => {
            let pairNumber = e.currentTarget.id.replace('_add', '');
            dayIncreased(dispatch, pairNumber);
        },

        handleMinusClick: (e) => {
            let pairNumber = e.currentTarget.id.replace('_minus', '');
            dayDecreased(dispatch, pairNumber);
        },

        fetchLatestState: () => {
            getLatestSavedState(dispatch);
        }
    }
};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default MainContainer;