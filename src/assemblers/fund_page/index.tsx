import { Box, Grid, Typography, Button, IconButton } from "@material-ui/core";
import BackImg from "../../assets/web/sign_in/Group_75.png";
import BackImgM from "../../assets/mobile/sign_in/signup_img.png";
import useStyles from "../../styles";
import { FormEvent, SyntheticEvent, useState } from "react";
import { CtextField, Logo, functions } from "../common";

// Sign Up page
export default function Fund() {
  const classes = useStyles(),
    [image, setImage] = useState<string | boolean>(false);

  // API call
  async function call(e: SyntheticEvent) {
    e.preventDefault();
    const form = e.target as EventTarget &
      form[] & {
        image: string;
        title: { value: string };
        location: { value: string };
        date: { value: string };
        goal: { value: number };
        overview: { value: string };
        updates: { value: string };
      };
    functions.Validate(form) &&
      (await functions.apiCall({
        method: "POST",
        body: JSON.stringify({
          image: image,
          title: form.title.value,
          location: form.location.value,
          date: form.date.value,
          goal: form.goal.value,
          overview: form.overview.value.split("\n"),
          updates: form.updates.value.split("\n"),
        }),
        source: "create",
        message: "successful!",
        dest: "/",
      }));
  }

  return (
    <form onSubmit={call}>
      <Grid
        container
        className={classes.flexCenter}
        style={{ height: "100%", width: "100%" }}
      >
        <Grid item xs>
          <img
            alt=""
            className={classes.signImg}
            src={window.innerWidth <= 768 ? BackImgM : BackImg}
          />
        </Grid>
        <Grid item xs className={classes.signin} style={{ top: "80%" }}>
          <Box>
            <Grid container spacing={3}>
              {window.innerWidth >= 768 && (
                <Grid item xs={12}>
                  <Logo />
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                  Create Fund Request
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  marginBottom: "-2rem",
                  marginTop: "-1rem",
                }}
              >
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="browseProfile"
                  onChange={(e: FormEvent) => {
                    const files = (e.target as HTMLInputElement).files;
                    var reader = new FileReader();
                    reader.onloadend = () => {
                      files && setImage(reader.result as string);
                    };
                    files && reader.readAsDataURL(files[0]);
                  }}
                />
                <label
                  htmlFor="browseProfile"
                  style={{ alignSelf: "center", margin: "auto" }}
                >
                  <IconButton component="span" style={{ borderRadius: "1rem" }}>
                    {(image && (
                      <img
                        alt=""
                        src={image as string}
                        style={{
                          width: "10rem",
                          height: "5rem",
                          borderRadius: "1rem",
                        }}
                      />
                    )) || (
                      <span
                        style={{
                          border: "1px solid rgba(0, 0, 0, 0.20)",
                          width: "15rem",
                          height: "7rem",
                          borderRadius: "1rem",
                        }}
                      />
                    )}
                  </IconButton>
                </label>
              </Grid>
              <Grid item xs={6}>
                <CtextField
                  name="title"
                  type="text"
                  label="Title"
                  placeholder="fund title"
                />
              </Grid>
              <Grid item xs={6}>
                <CtextField
                  name="location"
                  type="text"
                  label="Location"
                  placeholder="Chennai"
                />
              </Grid>
              <Grid item xs={6}>
                <CtextField
                  name="date"
                  type="date"
                  label="End date"
                  placeholder="dd/mm/yyyy"
                />
              </Grid>
              <Grid item xs={6}>
                <CtextField
                  name="goal"
                  type="number"
                  label="Amount need"
                  placeholder="1000"
                />
              </Grid>
              <Grid item xs={12}>
                <CtextField
                  name="overview"
                  type="text"
                  label="About fund"
                  placeholder="Overview about fund"
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <CtextField
                  name="updates"
                  type="text"
                  label="Updates"
                  placeholder="Updtes about fund"
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  className={classes.mbutton}
                  style={{ display: "block" }}
                >
                  Create requests
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
