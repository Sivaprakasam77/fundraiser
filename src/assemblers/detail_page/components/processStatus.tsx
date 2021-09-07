import { Paper, Grid, Typography } from "@material-ui/core";
import useStyles from "../../../styles";
import Supports from "../../../assets/web/detail_page/supporters.png";
import Shares from "../../../assets/web/detail_page/shares.png";

// Fund procoess status about supporters, shares
export default function ProcessStatus(props: { data: sharedata }) {
  const classes = useStyles();
  return (
    <Paper elevation={3} style={{ padding: "1rem" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.flexCenter}>
          <img src={Supports} alt="" className={classes.iconShow} />
          <Typography variant="subtitle1">
            {props.data.supporters || 0} Suppoters
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.border}></div>
        </Grid>
        <Grid item xs={12} className={classes.flexCenter}>
          <img src={Shares} alt="" className={classes.iconShow} />
          <Typography variant="subtitle1">
            {props.data.shares || 0} Shares
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.border}></div>
        </Grid>
        <Grid item xs={12} className={classes.flexCenter}>
          <img src={Shares} alt="" className={classes.iconShow} />
          <Typography variant="subtitle1">
            ₹{props.data.raisedByShares || 0} Raised by sharing
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
