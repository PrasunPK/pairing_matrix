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
            let pair = e.currentTarget.id.replace('_add', '').split('_');
            dayIncreased(dispatch, {'pair1': pair[0], 'pair2': pair[1], 'days': 1});
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