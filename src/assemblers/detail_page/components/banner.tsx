import useStyles from "../../../styles";
import { Grid, ImageListItemBar, Typography, Avatar } from "@material-ui/core";
import Location from "../../../assets/web/list_page/bxs-map.png";
import Calendar from "../../../assets/web/list_page/calendar.png";

// Detail page head banner
export default function Banner(props: banner) {
  const classes = useStyles();
  return (
    <>
      <img src={props.banner} alt="" className={classes.banner2} />
      <Grid container style={{ marginTop: "-8.5rem" }}>
        <Grid item xs={window.innerWidth >= 768 ? 9 : 12}>
          <p className={classes.imgTitle}>{props.title}</p>
        </Grid>
        <Grid
          item
          xs={window.innerWidth >= 768 ? 3 : 12}
          style={{ display: "inline-flex", position: "relative" }}
        >
          <ImageListItemBar className={classes.subimgBar} />
          <Grid container className={classes.userShow} spacing={2}>
            <Grid
              item
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                src={props.profile}
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5rem",
                }}
              />
              <Typography component={"span"} variant="body2">
                {props.user}
              </Typography>
            </Grid>
            <Grid className={classes.green} item xs={12}>
              <Typography className={classes.flexCenter} variant="body2">
                <img alt="" src={Location} className={classes.sicon} />
                {props.location}
                <div className={classes.seprate}></div>
                <img alt="" src={Calendar} className={classes.sicon} />
                {props.date}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
