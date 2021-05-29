import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
    income: {
        borderBottom: "15px solid rgba(76, 175, 80, .5)"
    },
    expense: {
        borderBottom: "15px solid rgba(244, 67, 54, .5)"
    },
    cardHeader: {
        textAlign: "center",
        padding: "5px"
    },
    total: {
        textAlign: "center"
    },
    content: {
        padding: "5px !important"
    },
    d: {
        padding: "10px !important",
    }
}));