import { Button } from "@material-ui/core";
import useStyles from "../../styles";

// Custom button
export default function Cbutton(props: buttondata) {
  const classes = useStyles();
  return (
    <Button
      style={{
        width: "100%",
        padding: "0.5rem",
        textTransform: "capitalize",
      }}
      variant="outlined"
      onClick={props.click}
    >
      <img alt="" src={props.icon} className={classes.micon} />
      {props.label}
    </Button>
  );
}
