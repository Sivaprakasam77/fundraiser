import { Box, Grid, Typography, Button, Link } from "@material-ui/core";
import BackImg from "../../assets/web/sign_in/img.png";
import BackImgM from "../../assets/mobile/sign_in/Group_104.png";
import Google from "../../assets/web/sign_in/Image_15.png";
import Facebook from "../../assets/web/sign_in/Mask_Group_7.png";
import useStyles from "../../styles";
import { Cbutton, CtextField, Logo, Separate, functions } from "../common";
import { SyntheticEvent } from "react";
import { useHistory } from "react-router";
import OSignIn from "../firebase";

// Sign In page
export default function SignIn() {
  const classes = useStyles(),
    history = useHistory();

  // API call
  async function call(e: SyntheticEvent) {
    e.preventDefault();
    const form = e.target as EventTarget &
      form[] & { email: { value: string }; password: { value: string } };
    functions.Validate(form) &&
      (await functions.ApiCall({
        method: "POST",
        body: JSON.stringify({
          email: form.email.value,
          password: form.password.value,
        }),
        source: "signin",
        message: "Login successful!",
        dest: "/",
        history: history,
      }));
  }

  // Google signin
  function Fgoogle() {
    OSignIn.GoogleSignIn(history as unknown as History);
  }

  // Facebook signin
  function Ffacebook() {
    OSignIn.FacebookSignIn(history as unknown as History);
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
        <Grid item xs className={classes.signin} style={{ top: "75%" }}>
          <Box>
            <Grid container spacing={3}>
              {window.innerWidth >= 768 && (
                <Grid item xs={12}>
                  <Logo />
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                  Sign In
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Cbutton
                  icon={Google}
                  label={
                    window.innerWidth >= 768 ? "Sign in with Google" : "Google"
                  }
                  click={Fgoogle}
                />
              </Grid>
              <Grid item xs={6}>
                <Cbutton
                  icon={Facebook}
                  label={
                    window.innerWidth >= 768
                      ? "Contine with Facebook"
                      : "Facebook"
                  }
                  click={Ffacebook}
                />
              </Grid>
              <Grid item xs={12} color="secondary">
                <Separate />
              </Grid>
              <Grid item xs={12}>
                <CtextField
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                />
              </Grid>
              <Grid item xs={12}>
                <CtextField
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                />
              </Grid>
              <Grid item xs={12}>
                <Link href="/forget">Forget password?</Link>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  className={classes.mbutton}
                  style={{ display: "block" }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                Don't have an account?{" "}
                <Link color="primary" href="/signup">
                  SignUp
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
