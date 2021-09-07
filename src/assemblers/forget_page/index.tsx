import {
  Box,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Link,
  Dialog,
  DialogContent,
  IconButton,
} from "@material-ui/core";
import BackImg from "../../assets/web/sign_in/Group_75.png";
import BackImgM from "../../assets/mobile/sign_in/signup_img.png";
import Close from "../../assets/web/sign_in/close.png";
import useStyles from "../../styles";
import { useState } from "react";
import { SyntheticEvent } from "react";
import { CtextField, Logo, functions } from "../common";

// Forget password request page
export default function Forget() {
  const classes = useStyles(),
    [open, setOpen] = useState(false);

  // Api call
  async function call(e: SyntheticEvent) {
    e.preventDefault();
    const form = e.target as EventTarget &
      form[] & {
        email: { value: string };
      };
    functions.Validate(form) &&
      (await functions.apiCall({
        method: "POST",
        body: JSON.stringify({
          email: form.email.value,
        }),
        source: "forget",
      })) &&
      setOpen(true);
  }

  return (
    <form onSubmit={call} id="forget">
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <IconButton
          style={{ left: "88%", width: "2.5rem", height: "2.5rem" }}
          onClick={() => {
            setOpen(false);
          }}
        >
          <img
            alt=""
            src={Close}
            className={classes.icon}
            style={{ borderRadius: "5rem" }}
          />
        </IconButton>
        <DialogContent
          style={{ textAlign: "center", padding: "2rem", paddingTop: "1rem" }}
        >
          <Typography variant="h4">Check your email</Typography>
          <Typography
            variant="subtitle1"
            style={{ maxWidth: "20rem", marginTop: "2rem" }}
          >
            Please check your email, it will contain instructions about how to
            reset your password.
          </Typography>
        </DialogContent>
      </Dialog>
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
        <Grid item xs className={classes.signin} style={{ top: "60%" }}>
          <Box>
            <Grid container spacing={3}>
              {window.innerWidth >= 768 && (
                <Grid item xs={12}>
                  <Logo />
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                  Forget Password
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel
                    shrink
                    style={{
                      padding: "0.5rem 0",
                      fontSize: "120%",
                      fontWeight: "bold",
                    }}
                  >
                    Enter your email address to send resend link
                  </InputLabel>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <CtextField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                Didn't receive link?{" "}
                <Link
                  color="primary"
                  component="button"
                  onClick={() => {
                    document.getElementById("resend")?.click();
                  }}
                >
                  Resend
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Button
                  id="resend"
                  type="submit"
                  className={classes.mbutton}
                  style={{ display: "block" }}
                >
                  Send Reset Link
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
