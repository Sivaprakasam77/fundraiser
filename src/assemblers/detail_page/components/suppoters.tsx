import { Paper, Grid, Typography, Avatar, Button } from "@material-ui/core";
import useStyles from "../../../styles";

// Detail about top supporters
export default function Supporters(props: { data: userdata[] }) {
  const classes = useStyles();
  return (
    <Paper elevation={3} style={{ padding: "1rem" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.flexCenter}>
          <Typography style={{ width: "80%" }} variant="subtitle1">
            Top Supporters:
          </Typography>
          <Button size="small" className={classes.textBut} variant="text">
            {"See all>"}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.border}></div>
        </Grid>
        {props.data &&
          props.data.map((v, i) => {
            return (
              <Grid key={i} item xs={12} className={classes.flexCenter}>
                <Avatar src={v.profile} className={classes.iconShow} />
                <Typography style={{ width: "70%" }} variant="subtitle1">
                  {v.name}
                </Typography>
                <Typography style={{ color: "#00c853" }} variant="subtitle1">
                  ₹{v.amount}
                </Typography>
              </Grid>
            );
          })}
      </Grid>
    </Paper>
  );
}
