import {connect} from "react-redux";
import Main from "./Main";
import {dayIncreased} from "./actions";
import members from "./data/members";

export const defaultState = () => {
    let pairs = {};
    members.forEach((pMember, pIndex) => {
        members.forEach((cMember, cIndex) => {
            if (cIndex <= pIndex)
                pairs[`${pMember.id}_${cMember.id}`] = 0
        });
    });
    return {
        pairs,
        count: 0
    }
};

const mapStateToProps = (state = defaultState(), ownProps) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleAddClick: (e) => {
            let pairNumber = e.currentTarget.id.replace('_add', '');
            dayIncreased(dispatch, pairNumber);
        }
    }
};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default MainContainer;