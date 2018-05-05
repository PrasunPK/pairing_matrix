import {connect} from "react-redux";
import LeftNavigation from "./LeftNavigation";
import {saveStateOfPairs} from "./actions";
import cron from "cron";

const startCronJob = () => {
    const CronJob = cron.CronJob;
    new CronJob('0 0,11,14,18 * * *', function () {
        console.log('Persisting temporary state at', new Date());
        saveStateOfPairs();
    }, null, true, 'Asia/Colombo');
};
startCronJob();

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