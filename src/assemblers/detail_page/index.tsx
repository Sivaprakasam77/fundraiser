import { Grid } from "@material-ui/core";
import useStyles from "../../styles";
import {
  DetailContainer,
  DonateStatus,
  ProcessStatus,
  Supports,
  PageMove,
  Banner,
} from "./components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../navigation";
import { functions } from "../common";

export default function Detail(props: { referal: boolean }) {
  const classes = useStyles(),
    { id } = useParams<{ id: string }>(),
    [data, setData] = useState<objdata>();

  // API call
  function call() {
    props.referal &&
      functions.ApiCall({
        method: "GET",
        source: `referal/${id}`,
      });
    functions
      .ApiCall({
        method: "GET",
        source: `detail/${id}`,
      })
      .then((info) => {
        info && setData({ ...info, call: call });
      });
  }

  useEffect(() => {
    call();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navigation />
      {data && (
        <>
          <PageMove id={id} />
          <Banner
            banner={data.image}
            title={data.title}
            user={data.name}
            location={data.location}
            date={data.date}
            profile={data.profile}
          />
          <Grid className={classes.padding} container>
            {window.innerWidth < 768 && (
              <Grid item xs={12} className={classes.gpadd}>
                <DonateStatus data={data} />
              </Grid>
            )}
            <Grid item className={classes.dcont} xs>
              <DetailContainer
                data={{
                  overview: data.overview,
                  updates: data.updates,
                  comments: data.comments,
                  fundId: data.fundId,
                  title: data.title,
                  call: () => {
                    call();
                  },
                }}
              />
            </Grid>
            <Grid item xs>
              <Grid container>
                {window.innerWidth >= 768 && (
                  <Grid item xs={12} className={classes.gpadd}>
                    <DonateStatus data={data} />
                  </Grid>
                )}
                <Grid item xs={12} className={classes.gpadd}>
                  <ProcessStatus data={data} />
                </Grid>
                <Grid item xs={12} className={classes.gpadd}>
                  <Supports data={data.topSupporters} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
