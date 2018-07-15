import {connect} from "react-redux";
import AppBarComponent from "./app-bar.component";
import {getTeamInformation} from "../team/team.actions";
import {getLastUpdatedTime} from "../matrix/matrix.actions";
import cron from 'cron';
const CronJob = cron.CronJob;

const mapStateToProps = (state) => {
    return {
        ...state,
        team: state.teamReducers.team,
        isLoading: state.teamReducers.isLoading,
        lastUpdatedTime: state.matrixReducers.lastUpdatedTime
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeamInformation: () => {
            getTeamInformation(dispatch);
        },

        fetchLastUpdatedTime: () => {
            getLastUpdatedTime(dispatch);
            new CronJob('00 * * * * *', function () {
                getLastUpdatedTime(dispatch);
                console.log('Fetched latest updated info');
            }, null, true, 'America/Los_Angeles');
        }
    }
};

const AppBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppBarComponent);

export default AppBar;