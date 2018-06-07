import {connect} from "react-redux";
import {dayDecreased, dayIncreased, getLatestSavedState} from "./matrix.actions";
import {getTeamMembers} from "../team/team.actions";
import MatrixComponent from "./matrix.component";

const mapStateToProps = (state) => {
    return {
        ...state,
        members: state.teamReducers.members,
        pairs: state.matrixReducers.pairs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddClick: (e) => {
            let pair = e.currentTarget.id.replace('_add', '').split('_');
            dayIncreased(dispatch, {'pair1': pair[0], 'pair2': pair[1], 'days': 1});
        },

        handleMinusClick: (e) => {
            let pair = e.currentTarget.id.replace('_minus', '').split('_');
            dayDecreased(dispatch, {'pair1': pair[0], 'pair2': pair[1], 'days': -1});
        },

        fetchAllTeamMembers: () => {
            getTeamMembers(dispatch)
        },

        fetchLatestState: () => {
            getLatestSavedState(dispatch);
        }
    }
};

const MatrixContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MatrixComponent);

export default MatrixContainer;