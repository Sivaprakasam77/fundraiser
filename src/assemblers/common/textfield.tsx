import { FormControl, InputLabel, InputBase } from "@material-ui/core";
import useStyles from "../../styles";

// Custom textfield
export default function CtextField(props: textdata) {
  const classes = useStyles();
  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel
        shrink
        style={{
          padding: "0.5rem 0",
          fontSize: "120%",
          fontWeight: "bold",
        }}
      >
        {props.label}
      </InputLabel>
      <InputBase
        name={props.name}
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={classes.signinput}
        required
        multiline={props.multiline || false}
        rows={4}
        defaultValue={props.value}
      />
    </FormControl>
  );
}
