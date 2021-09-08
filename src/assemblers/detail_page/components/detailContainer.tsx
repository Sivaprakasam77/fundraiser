import { Box, Button, Grid, Tabs, Tab } from "@material-ui/core";
import { useState } from "react";
import useStyles from "../../../styles";
import Tabpanels from "./TabPanel";
import Heart from "../../../assets/web/detail_page/heart.png";
import Share from "../../../assets/web/detail_page/share-fill.png";
import Comment from "./comment";
import { functions, Donate } from "../../common";

// Detail container about fund collector with navigation
export default function DetailContainer(props: { data: contentdata }) {
  const [value, setValue] = useState(0),
    [open, setOpen] = useState(false),
    classes = useStyles();
  return (
    <Box
      borderRadius="borderRadius"
      boxShadow={3}
      style={{ padding: "1rem", margin: "0.5rem" }}
    >
      <Donate
        open={open}
        title={props.data.title}
        fundId={props.data.fundId}
        close={() => {
          setOpen(false);
        }}
        call={props.data.call}
      />
      {/* Navogation */}
      <Tabs
        className={classes.nav1}
        value={value}
        TabIndicatorProps={{
          style: {
            background: "#00c853",
            height: "0.2rem",
            borderRadius: "15%",
          },
        }}
        onChange={(e, val) => {
          setValue(val);
        }}
      >
        <Tab label="Overview" />
        <Tab label="Updates" />
        <Tab label="Comments" />
      </Tabs>
      {/* Navigation panels */}
      {value === 0 && <Tabpanels data={props.data.overview} />}
      {value === 1 && <Tabpanels data={props.data.updates} />}
      {value === 2 && (
        <Comment id={props.data.fundId} data={props.data.comments} call={props.data.call} />
      )}
      {/* Bottom buttons */}
      <Grid container spacing={5}>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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
      </Grid>
    </Box>
  );
}
