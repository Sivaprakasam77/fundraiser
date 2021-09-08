import { Alert, AlertProps } from "@material-ui/lab";
import { Snackbar, LinearProgress } from "@material-ui/core";
import { render } from "react-dom";

const Clear = () => {
  render(<p></p>, document.getElementById("status"));
};

const Status = (type: AlertProps["severity"], cont: string) => {
  return render(
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      style={{ zIndex: 200 }}
      open
      autoHideDuration={5000}
      onClose={Clear}
    >
      <Alert onClose={Clear} severity={type}>
        {cont}
      </Alert>
    </Snackbar>,
    document.getElementById("status")
  );
};

const Validate = (form: form[]) => {
  const validate: valid = {
    profile: /data:image\/[a-zA-Z]*;base64,[^"]*/g,
    image: /data:image\/[a-zA-Z]*;base64,[^"]*/g,
    firstName: /[a-zA-Z0-9-_]+/g,
    lastName: /[a-zA-Z0-9-_]+/g,
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/g,
    Id: /^\w+([.-]?\w+)*@(\w{2,3})+$/g,
    password: /[a-zA-Z0-9~`!@#$%^&*()_+-={}|[\]\\:";'<>?,./]{8,}/g,
    confirmPassword: /[a-zA-Z0-9~`!@#$%^&*()_+-={}|[\]\\:";'<>?,./]{8,}/g,
  };
  for (var i of form) {
    if (
      validate[i.name as keyof valid] &&
      !validate[i.name as keyof valid].test(i.value)
    ) {
      i.focus();
      Status("error", `Invalid input at ${i.name}`);
      return false;
    }
  }
  return true;
};

const ApiCall = async (req: apicall) => {
  render(<LinearProgress />, document.getElementById("status"));
  const info = await fetch(
    `${process.env.REACT_APP_BURL}/api/v1/${req.source}`,
    {
      method: req.method,
      headers: {
        Authorization: `Bearer ${document.cookie.replace(
          /(?:(?:^|.*;\s*)FSR\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        )}`,
        "Content-Type": "application/json",
      },
      body: req.body,
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
    
  if (!info.err && info.message !== "Failed to fetch") {
    req.message ? Status("success", req.message) : Clear();
    if (req.source === "signin" || req.source === "signup")
      document.cookie = `FSR=${info.message}; path=/`;
    if (req.source === "signout") document.cookie = "FSR=; path=/";
    if (req.dest) req.history.push(req.dest);
    return (info.message === "Success" && true) || info.message;
  } else {
    if (req.message) {
      if (info.message === "Token not found") {
        req.history.push("/signin");
        Status("error", "Please signin first");
      } else Status("error", info.message);
    } else Clear();
    return false;
  }
};

const Share = (id: string) => {
  const url = process.env.REACT_APP_URL + "/referal/" + id;
  window.open(`whatsapp://send?text=Form the Fundraiser ${url}`);
};

const functions = { Validate, ApiCall, Share };

export default functions;
