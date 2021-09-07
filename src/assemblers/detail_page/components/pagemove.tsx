import useStyles from "../../../styles";
import { IconButton } from "@material-ui/core";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import assets from "../../../assets";
import { useEffect, useState } from "react";

// Page moving controller
export default function PageMove(props: countid) {
  const classes = useStyles(),
    dlen: number = Object.keys(assets).length - 1,
    [nval, setNval] = useState(parseInt(props.id) - 1),
    [pval, setPval] = useState(parseInt(props.id) + 1);
  useEffect(() => {
    nval <= 0 ? setNval(dlen) : setNval(parseInt(props.id) - 1);
    pval >= dlen ? setPval(0) : setPval(parseInt(props.id) + 1);
    // eslint-disable-next-line
  }, [props.id]);
  return (
    <div className={classes.arrow}>
      <IconButton href={"/detail/" + nval}>
        <ArrowBackIosRounded style={{ height: "3rem", width: "3rem" }} />
      </IconButton>
      <IconButton href={"/detail/" + pval}>
        <ArrowForwardIosRounded style={{ height: "3rem", width: "3rem" }} />
      </IconButton>
    </div>
  );
}
