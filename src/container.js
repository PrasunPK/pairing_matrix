import {connect} from "react-redux";
import Main from "./Main";
import {dayIncreased} from "./actions";

export const defaultState = () => {
    return {
        count: 0
    }
};

const mapStateToProps = (state = defaultState(), ownProps) => {
    console.log('STATE ===> in container', state);
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleAddClick: (e) => {
            let pairNumber = e.currentTarget.id.replace('_add', '');
            dayIncreased(dispatch, pairNumber, 1);
        }
    }
};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default MainContainer;