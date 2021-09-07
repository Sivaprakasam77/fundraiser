import {
  Avatar,
  Button,
  Paper,
  InputBase,
  List,
  ListItem,
} from "@material-ui/core";
import useStyles from "../../styles";
import Search from "../../assets/web/detail_page/search.png";
import Logo from "../../assets/web/detail_page/logo.png";
import { useEffect, useState } from "react";
import { functions } from "../common";

// Header bar
export default function Navigation(props: {
  search?: (text: string) => Promise<void>;
}) {
  const classes = useStyles(),
    [val, setValue] = useState<string>(window.location.pathname),
    [open, setOpen] = useState<boolean>(false),
    [text, setText] = useState<string>(""),
    [title, setTitle] = useState([]),
    [user, setUser] = useState<{
      profile: string;
      name: string;
      status: boolean;
    }>({
      profile: "",
      name: "",
      status: false,
    }),
    [logout, setLogout] = useState(false);

  useEffect(() => {
    setValue(val);
  }, [val]);

  // API call
  function initcall() {
    setOpen(true);
    functions
      .ApiCall({
        method: "GET",
        source: "init_search",
      })
      .then((info) => {
        info && setTitle(info);
      });
  }

  function signout() {
    functions
      .ApiCall({
        method: "GET",
        source: "signout",
      })
      .then(() => {
        setUser({ profile: "", name: "", status: false });
      })
      .catch(() => {
        setUser({ profile: "", name: "", status: false });
      });
  }

  useEffect(() => {
    functions
      .ApiCall({
        method: "GET",
        source: "user",
      })
      .then((info) => {
        info.profile
          ? setUser({ ...info, status: true })
          : setUser({ profile: "", name: "", status: false });
      })
      .catch(() => {
        setUser({ profile: "", name: "", status: false });
      });
  }, []);

  return (
    <Paper
      className={classes.appbar}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <img className={classes.logo} alt="" src={Logo} />
      <div className={classes.nav}>
        {props.search && (
          <Button className={classes.search}>
            <img className={classes.icon} alt="" src={Search} />
            <InputBase
              id="title"
              onClick={() => {
                initcall();
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  setOpen(false);
                  props.search && props.search(text);
                }
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setText(event.target.value);
              }}
              placeholder="search"
              value={text}
              autoComplete="off"
            />
            {open && (
              <List component="nav" className={classes.sublist}>
                {title.map((v: string, i: number) => {
                  return (
                    <ListItem
                      key={i}
                      button
                      onClick={() => {
                        setOpen(false);
                        setText(v);
                        props.search && props.search(v);
                      }}
                    >
                      {v}
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Button>
        )}
        <Button
          className={val === "/" ? classes.button1 : classes.button}
          variant={val === "/" ? "contained" : "outlined"}
          href={user.status ? "/fund" : "/signin"}
        >
          Start a Fundraiser
        </Button>
        {(user.status && (
          <Button
            onMouseOver={() => {
              setLogout(true);
            }}
            onMouseLeave={() => {
              setLogout(false);
            }}
          >
            <Avatar
              alt={user.name}
              src={user.profile}
              style={{
                width: "2rem",
                height: "2rem",
              }}
            />
            {logout && (
              <List
                component="nav"
                style={{
                  position: "absolute",
                  top: "2.5rem",
                  background: "snow",
                }}
              >
                <ListItem button onClick={signout}>
                  Logout
                </ListItem>
              </List>
            )}
          </Button>
        )) || <Button href="/signin">Sign In</Button>}
      </div>
    </Paper>
  );
}
