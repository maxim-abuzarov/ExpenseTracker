import React from "react";
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core";
import useTransactions from "../../useTransactions";
import {Doughnut} from "react-chartjs-2";

import useStyles from "./styles";

const Details = ({title}) => {
    const classes = useStyles();
    const {total, chartData} = useTransactions(title);

    return (
        <Card className={title === "Income" ? classes.income : classes.expense}>

            <CardHeader className={classes.cardHeader} title={title} />

            <CardContent className={classes.content}>
                <Typography className={classes.total} variant="h5">$ {total}</Typography>
                <Doughnut className={classes.d} type="doughnut" data={chartData}/>
            </CardContent>

        </Card>
    );
};

export default Details;