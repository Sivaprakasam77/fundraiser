import { Grid } from "@material-ui/core";
import Banner from "../../assets/web/list_page/banner_image_list.png";
import Bannerm from "../../assets/mobile/list/img.png";
import useStyles from "../../styles";
import Navigation from "../navigation";
import { CardView } from "./components";
import { useEffect, useState } from "react";
import { functions } from "../common";

// List of card view
export default function Home() {
  const classes = useStyles(),
    [data, setData] = useState<[]>([]);

  // API call
  function initcall() {
    functions
      .ApiCall({
        method: "GET",
        source: "dashboard",
      })
      .then((info) => {
        sessionStorage.setItem("cards", JSON.stringify(info));
        setData(info);
      });
  }
  useEffect(() => {
    initcall();
  }, []);

  // Search call
  async function call(text: string) {
    const info = await functions.ApiCall({
      method: "POST",
      source: "search",
      body: JSON.stringify({
        title: text,
      }),
    });
    sessionStorage.setItem("cards", JSON.stringify(info));
    setData(info);
  }

  return (
    <>
      <Navigation search={call} />
      <img
        className={classes.banner}
        src={window.innerWidth <= 768 ? Bannerm : Banner}
        alt=""
      />
      <div className={classes.padding}>
        <Grid spacing={3} container>
          {data &&
            data.map((v: carddata, i) => {
              return (
                <CardView
                  key={i}
                  fundId={v.fundId}
                  image={v.image}
                  location={v.location}
                  date={v.date}
                  title={v.title}
                  profile={v.profile}
                  name={v.name}
                  available={v.available}
                  goal={v.goal}
                  percentage={v.percentage}
                  call={initcall}
                />
              );
            })}
        </Grid>
      </div>
    </>
  );
}
