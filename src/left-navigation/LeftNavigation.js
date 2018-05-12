import Card from "material-ui/es/Card/Card";
import CardContent from "material-ui/es/Card/CardContent";
import React from "react";
import Typography from "material-ui/es/Typography/Typography";
import CardActions from "material-ui/es/Card/CardActions";
import Avatar from "material-ui/es/Avatar/Avatar";
import Button from "material-ui/es/Button/Button";

const LeftNavigation = ({}) => {
    return (
        <Card className="left-menu-section">
            <CardContent>
                <Avatar className="large-avatar">
                    Magneto
                </Avatar>
                <div className="menu-heading">
                    <Typography variant="headline" component="h1">
                        Pairing Matrix
                    </Typography>
                    <hr/>
                </div>
            </CardContent>
            <CardActions>
                {/*no Action*/}
            </CardActions>
        </Card>
    );
};

export default LeftNavigation;