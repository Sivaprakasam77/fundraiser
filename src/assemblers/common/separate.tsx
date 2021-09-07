import useStyles from "../../styles";

// Separator
export default function Separate() {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          color: "#AFAFAF !important",
          marginBottom: "-0.5rem",
          textAlign: "center",
        }}
      >
        or
      </div>
      <div className={classes.border}></div>
    </>
  );
}
