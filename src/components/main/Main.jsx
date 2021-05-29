import React, {useContext} from "react";
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from "@material-ui/core";

import useStales from "./styles";
import {ExpenseTrackerContext} from "../../context/context";
import Form from "./form/Form";
import List from "./list/List";
import InfoCard from "../InfoCard";
import {PushToTalkButton} from "@speechly/react-ui";

const Main = () => {
    const classes = useStales();
    const {balance} = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.card}>

            <Grid container>
                <Grid  item xs={12}>
                    <CardHeader className={classes.title} title="Expense Tracker"/>
                </Grid>
                <Grid item xs={5}/>
                <Grid item xs={1}>
                    <PushToTalkButton size={'3rem'}/>
                </Grid>
            </Grid>


            <CardContent>
                <Typography align="center" variant="h5">Total Balance:
                    <p className={ balance > 0 ? classes.positive : classes.negative } >{balance} $</p>
                </Typography>
                <Typography variant="subtitle1" style={{ lineHeight: "1.8em", marginTop: "10px" }}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>

            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    );
};

export default Main;