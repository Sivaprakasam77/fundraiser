import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
  Button,
  IconButton,
  Avatar,
  CardActionArea,
} from "@material-ui/core";
import useStyles from "../../../styles";
import Heart from "../../../assets/web/list_page/heart.png";
import Location from "../../../assets/web/list_page/bxs-map.png";
import Calendar from "../../../assets/web/list_page/calendar.png";
import Timelapse from "../../../assets/web/list_page/timelapse.png";
import Share from "../../../assets/web/list_page/share-fill.png";
import { functions, Donate } from "../../common";
import { useState } from "react";

// Card view for Fund collectors
export default function CardView(props: carddata) {
  const classes = useStyles(),
    [open, setOpen] = useState(false);

  return (
    <>
      <Donate
        open={open}
        title={props.title}
        fundId={props.fundId}
        close={() => {
          setOpen(false);
        }}
      />
      <Grid item xs key={props.fundId}>
        <Card elevation={5} className={classes.card}>
          <CardActionArea
            href={`#/detail/${props.fundId}`}
            style={{ width: "100%", height: "40%" }}
          >
            <CardMedia className={classes.cardimg} image={props.image} />
          </CardActionArea>
          <IconButton
            onClick={() => {
              functions.Share(props.fundId);
            }}
            className={classes.iconbut}
          >
            <img alt="" src={Share} />
          </IconButton>
          <CardContent>
            <Grid container spacing={1} style={{ marginTop: "-1rem" }}>
              <Grid style={{ color: "#00e676" }} item>
                <Typography
                  style={{ display: "flex", alignItems: "center" }}
                  variant="body2"
                >
                  <img alt="" src={Location} className={classes.sicon} />
                  {props.location}
                  <div className={classes.seprate}></div>
                  <img alt="" src={Calendar} className={classes.sicon} />
                  {props.date}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{props.title}</Typography>
              </Grid>
              <Grid item style={{ display: "flex", alignItems: "center" }}>
                <Avatar src={props.profile} className={classes.micon} />
                <Typography component={"span"} variant="body2">
                  {props.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <LinearProgress
                  value={props.percentage}
                  variant="determinate"
                  className={classes.linearBar}
                />
              </Grid>
              <Grid item>
                <Typography component={"span"} variant="body2">
                  Raised: ₹{props.available}
                  <span style={{ color: "red", marginLeft: "2rem" }}>
                    Goal: ₹{props.goal}
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="textSecondary" variant="caption">
                  <img alt="" src={Timelapse} className={classes.sicon} /> days
                  left
                </Typography>
              </Grid>
              <Grid item xs>
                <Button
                  className={classes.mbutton1}
                  onClick={() => {
                    setOpen(true);
                  }}
                  variant="outlined"
                >
                  Donate Now
                  <img alt="" src={Heart} className={classes.icon} />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
