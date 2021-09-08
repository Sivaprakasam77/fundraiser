import {
  Paper,
  Grid,
  Button,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import useStyles from "../../../styles";
import Heart from "../../../assets/web/detail_page/heart.png";
import Share from "../../../assets/web/detail_page/share-fill.png";
import Timelapse from "../../../assets/web/detail_page/timelapse.png";
import Raised from "../../../assets/web/detail_page/raised.png";
import Goal from "../../../assets/web/detail_page/goal.png";
import { functions, Donate } from "../../common";
import { useState } from "react";

// Fund status view
export default function DonateStatus(props: { data: carddata }) {
  const classes = useStyles(),
    [open, setOpen] = useState(false);
  return (
    <Paper elevation={3} style={{ padding: "1rem" }}>
      <Donate
        open={open}
        title={props.data.title}
        fundId={props.data.fundId}
        close={() => {
          setOpen(false);
        }}
        call={props.data.call}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Available fund percentage */}
          <LinearProgress
            value={props.data.percentage}
            variant="determinate"
            className={classes.linearBar}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid className={classes.flexCenter} item xs={6}>
              <img
                src={Raised}
                alt=""
                style={{ width: "3rem", height: "3rem", marginRight: "0.5rem" }}
              />
              <Typography variant="subtitle1">
                {/* Available fund */}
                Raised:
                <br />₹{props.data.available}
              </Typography>
            </Grid>
            <Grid className={classes.flexCenter} item xs={6}>
              <img
                src={Goal}
                alt=""
                style={{ width: "3rem", height: "3rem", marginRight: "0.5rem" }}
              />
              <Typography variant="subtitle1">
                {/* Needed fund */}
                Goal:
                <br />₹{props.data.goal}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.border}></div>
        </Grid>
        {/* Donate and share buttons */}
        <Grid item xs={12}>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            className={classes.mbutton}
            fullWidth
            variant="outlined"
          >
            Donate Now
            <img alt="" src={Heart} className={classes.icon} />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => {
              functions.Share(props.data.fundId);
            }}
            className={classes.mbutton1}
            variant="outlined"
          >
            Share
            <img alt="" src={Share} className={classes.icon} />
          </Button>
        </Grid>
        {/* Remaining times left for fund collection close */}
        <Grid item xs={12}>
          <Typography
            style={{ color: "red", textAlign: "center" }}
            variant="subtitle2"
          >
            <img alt="" src={Timelapse} className={classes.sicon} />
            {props.data.date} days left
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
