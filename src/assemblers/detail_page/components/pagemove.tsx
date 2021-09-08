import useStyles from "../../../styles";
import { IconButton } from "@material-ui/core";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import { useEffect, useState } from "react";

// Page moving controller
export default function PageMove(props: countid) {
  const classes = useStyles(),
    data = JSON.parse(sessionStorage.getItem("cards") as string),
    dlen: number = data.length - 1,
    [nval, setNval] = useState(0),
    [pval, setPval] = useState(0);
  useEffect(() => {
    data.forEach((c: any, i: number) => {
      if (JSON.stringify(c).includes(props.id)) {
        setNval(i - 1 < 0 ? dlen : i - 1);
        setPval(i + 1 > dlen ? 0 : i + 1);
      }
    });
    // eslint-disable-next-line
  }, [nval,pval]);
  return (
    <div className={classes.arrow}>
      <IconButton href={"/detail/" + data[nval].fundId}>
        <ArrowBackIosRounded style={{ height: "3rem", width: "3rem" }} />
      </IconButton>
      <IconButton href={"/detail/" + data[pval].fundId}>
        <ArrowForwardIosRounded style={{ height: "3rem", width: "3rem" }} />
      </IconButton>
    </div>
  );
}
