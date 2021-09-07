import {
  Avatar,
  Box,
  Grid,
  Typography,
  Button,
  Link,
  IconButton,
} from "@material-ui/core";
import BackImg from "../../assets/web/sign_in/Group_75.png";
import BackImgM from "../../assets/mobile/sign_in/signup_img.png";
import Google from "../../assets/web/sign_in/Image_15.png";
import Facebook from "../../assets/web/sign_in/Mask_Group_7.png";
import useStyles from "../../styles";
import { FormEvent, SyntheticEvent, useState } from "react";
import { Cbutton, CtextField, Logo, Separate, functions } from "../common";
import { useHistory } from "react-router";

// Sign Up page
export default function SignUp() {
  const classes = useStyles(),
    [image, setImage] = useState<string | boolean>(false),
    history = useHistory();

  // API call
  async function call(e: SyntheticEvent) {
    e.preventDefault();
    const form = e.target as EventTarget &
      form[] & {
        profile: string;
        firstName: { value: string };
        lastName: { value: string };
        email: { value: string };
        Id: { value: string };
        password: { value: string };
        confirmPassword: { value: string };
      };

    console.log(form);

    functions.Validate(form) &&
      (await functions.ApiCall({
        method: "POST",
        body: JSON.stringify({
          profile: image,
          email: form.email.value,
          upiId: form.Id.value,
          firstName: form.firstName.value,
          lastName: form.lastName.value,
          password: form.password.value,
          confirmPassword: form.confirmPassword.value,
        }),
        source: "signup",
        message: "Registration successful!",
        dest: "/",
        history: history,
      }));
  }

  return (
    <form onSubmit={call}>
      <Grid
        container
        className={classes.flexCenter}
        style={{ maxHeight: "90%", width: "100%" }}
      >
        <Grid item xs>
          <img
            alt=""
            className={classes.signImg}
            src={window.innerWidth <= 768 ? BackImgM : BackImg}
          />
        </Grid>
        <Grid item xs className={classes.signin} style={{ top: "85%" }}>
          <Box>
            <Grid container spacing={2}>
              {window.innerWidth >= 768 && (
                <Grid item xs={12}>
                  <Logo />
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography variant="h6" style={{ fontWeight: "bolder" }}>
                  Sign Up
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Cbutton
                  icon={Google}
                  label={
                    window.innerWidth >= 768 ? "Sign in with Google" : "Google"
                  }
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
                />
              </Grid>
              <Grid item xs={12} color="secondary">
                <Separate />
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
                  <IconButton component="span">
                    {(image && (
                      <Avatar
                        src={image as string}
                        style={{ width: "5rem", height: "5rem" }}
                      />
                    )) || <Avatar style={{ width: "5rem", height: "5rem" }} />}
                  </IconButton>
                </label>
              </Grid>
              <Grid item xs={6}>
                <input
                  name="profile"
                  type="text"
                  value={image as string}
                  style={{ display: "none" }}
                />
                <CtextField
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="John"
                />
              </Grid>
              <Grid item xs={6}>
                <CtextField
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Doe"
                />
              </Grid>
              <Grid item xs={12}>
                <CtextField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                />
              </Grid>
              <Grid item xs={12}>
                <CtextField
                  name="Id"
                  type="text"
                  label="UPI ID"
                  placeholder="0000000000@ybl"
                />
              </Grid>
              <Grid item xs={6}>
                <CtextField
                  name="password"
                  type="password"
                  label="Create password"
                  placeholder="Enter your password"
                />
              </Grid>
              <Grid item xs={6}>
                <CtextField
                  name="confirmPassword"
                  type="password"
                  label="Confirm password"
                  placeholder="Re-enter your password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  className={classes.mbutton}
                  style={{ display: "block" }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                Already have an account?{" "}
                <Link color="primary" href="/signin">
                  Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
