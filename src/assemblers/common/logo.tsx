import useStyles from "../../styles";
import Logoimg from "../../assets/web/detail_page/logo.png";

// Project Logo
export default function Logo() {
  const classes = useStyles();
  return (
    <img className={classes.logo} alt="" src={Logoimg} />
  );
}
