import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme) => ({
    center: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
    },
    margin: {
      margin: "auto",
    },
    logo: {
      height: "2rem",
    },
    appbar: {
      zIndex: 100,
      backgroundColor: "snow",
      boxShadow: "none",
      padding: theme.spacing(1),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    nav: {
      "& button": {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        textTransform: "capitalize",
      },
      "& a": {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        textTransform: "capitalize",
      },
    },
    nav1: {
      "& button": {
        textTransform: "capitalize",
        padding: theme.spacing(1),
      },
      borderBottom: "1px solid #b9f6ca",
    },
    title: {
      color: "#1AB37B",
    },
    sicon: {
      height: "0.8rem",
      width: "0.7rem",
      marginRight: "0.2rem",
    },
    icon: {
      height: "0.8rem",
      width: "0.8rem",
      margin: "0.5rem",
    },
    banner: {
      width: "100%",
      height: "35vh",
    },
    banner2: {
      width: "100%",
      height: "60vh",
      "@media (max-width:768px)": {
        height: "40vh",
      },
    },
    padding: {
      padding: theme.spacing(10),
      "@media (max-width:768px)": {
        padding: theme.spacing(0),
        paddingTop: theme.spacing(4),
      },
    },
    micon: {
      width: "1.5rem",
      height: "1.5rem",
      marginRight: "0.5rem",
    },
    card: {
      width: "20rem",
      height: "30rem",
      margin: "auto",
      borderRadius: "10px",
    },
    cardimg: {
      height: "100%",
    },
    button: {
      color: "#1AB37B",
      textTransform: "capitalize",
      border: "1px solid #1AB37B",
      "&:hover": {
        boxShadow: "none",
      },
      "@media (max-width:768px)": {
        display: "none",
      },
      "& span": {
        color: "#1AB37B !important",
      },
    },
    button1: {
      background: "#1AB37B",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#1AB37B",
        boxShadow: "none",
      },
      "& span": {
        color: "snow !important",
      },
      "@media (max-width:768px)": {
        position: "absolute",
        marginTop: "35vh",
        left: "48%",
        transform: "translate(-50%,0%)",
        width: "90%",
      },
    },
    mbutton: {
      backgroundColor: "#1AB37B",
      textTransform: "capitalize",
      "& span": {
        color: "snow !important",
      },
      width: "100%",
      borderRadius: "6px",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#1AB37B",
        boxShadow: "none",
      },
    },
    mbutton1: {
      "& span": {
        color: "#1AB37B !important",
      },
      width: "100%",
      textTransform: "capitalize",
      borderRadius: "6px",
      boxShadow: "none",
      border: "1px solid #1AB37B",
      "&:hover": {
        color: "#1AB37B",
        boxShadow: "none",
      },
    },
    linearBar: {
      backgroundColor: "#b9f6ca",
      height: "15px",
      borderRadius: "5rem",
      "& div": {
        background:
          "repeating-linear-gradient(-70deg,#43a047 7%,#1AB37B,#43a047 10%)", //"#1AB37B",
        borderRadius: "5rem",
      },
    },
    iconbut: {
      boxShadow: "0px 0px 0.5rem -2px black",
      background: "snow",
      left: "85%",
      marginBottom: "-2rem",
      marginTop: "-3rem",
      "&:hover": {
        background: "snow",
      },
      "& img": {
        width: "1rem",
      },
    },
    seprate: {
      padding: "0.2rem",
      borderRadius: "100px",
      maxWidth: "fit-content",
      background: "rgba(0, 0, 0, 0.20)",
      height: "0rem",
      margin: "0.5rem",
    },
    subimgBar: {
      width: "125%",
      backdropFilter: "blur(10px)",
      minHeight: "70%",
      marginBottom: "2rem",
      transform: "matrix(1, 0, -0.5, 1, 30, 0)",
      left: "auto",
      "@media (max-width:768px)": {
        display: "none",
      },
    },
    imgTitle: {
      padding: "1rem",
      marginBottom: "2rem",
      paddingLeft: "1.5rem",
      backdropFilter: "blur(10px)",
      background: "#00000090",
      color: "snow",
      height: "5rem",
      fontSize: "150%",
      textOverflow: "none",
      maxWidth: "100%",
      "@media (max-width:768px)": {
        maxWidth: "100%",
      },
    },
    iconShow: {
      width: "3rem",
      height: "3rem",
      marginRight: "0.5rem",
    },
    gpadd: {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      "@media (max-width:768px)": {
        padding: "0.5rem",
      },
    },
    dcont: {
      minWidth: "65vw",
    },
    border: {
      borderBottom: "1px solid #AFAFAF",
    },
    textBut: {
      "& span": {
        color: "#AFAFAF !important",
      },
      textTransform: "capitalize",
    },
    userShow: {
      position: "absolute",
      padding: "1rem",
      top: "15%",
      "@media (min-width:768px)": {
        "& span": {
          color: "snow !important",
        },
      },
      display: "flex",
      "@media (max-width:768px)": {
        top: "0%",
        position: "relative",
        color: "black",
        left: "0",
      },
    },
    signImg: {
      height: "100%",
      width: "50vw",
      "@media (max-width:768px)": {
        width: "100vw",
        height: "45vh",
      },
    },
    signin: {
      padding: "3rem",
      background: "snow",
      "@media (max-width:768px)": {
        zIndex: 100,
        borderRadius: "15px",
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
        width: "90vw",
        padding: "1rem",
        height: "fit-content",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    },
    signinput: {
      borderRadius: "5px",
      border: "1px solid rgba(0, 0, 0, 0.54)",
      marginTop: "2rem",
      padding: "0.1rem 0.5rem",
      width: "100%",
      fontSize: "80%",
    },
    arrow: {
      width: "99vw",
      position: "absolute",
      top: "30%",
      display: "flex",
      justifyContent: "space-between",
      "@media (max-width:768px)": {
        top: "20%",
      },
      "& path": {
        color: "snow !important",
      },
    },
    green: {
      "& p": { color: "#1AB37B !important" },
    },
    search: {
      width: "5rem",
      padding: "0",
      transition: "0.5s",
      "&:hover": {
        width: "15rem",
      },
    },
    sublist: {
      position: "absolute",
      background: "snow",
      top: "2.5rem",
      maxHeight: "15vh",
      width: "15rem",
      overflowX: "hidden",
      overflowY: "scroll",
      zIndex: 100,
    },
  }),
  { index: 1 }
);

export default useStyles;
