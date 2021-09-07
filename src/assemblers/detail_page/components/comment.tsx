import {
  Avatar,
  Grid,
  IconButton,
  InputBase,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { Send } from "@material-ui/icons";
import { functions } from "../../common";
import { useHistory } from "react-router-dom";

export default function Comment(props: { data: comments[]; id: string }) {
  const [text, setText] = useState<string>(),
  history=useHistory();
  // API call
  function call() {
    text === "" ||
      functions
        .ApiCall({
          method: "POST",
          source: "comment",
          body: JSON.stringify({
            fundId: props.id,
            comment: text,
          }),
          dest: `/detail/${props.id}`,
          history: history,
        })
        .then((info) => {
          info && setText(info);
        });
  }

  return (
    <>
      <Grid
        container
        spacing={3}
        style={{
          width: "100%",
          maxHeight: "50vh",
          overflowY: "auto",
          overflowX: "hidden",
          margin: "0.5rem",
        }}
      >
        {props.data.map((v: comments, i) => {
          return (
            <Grid item xs={12} style={{ margin: "0.5rem", display: "flex" }}>
              <Avatar src={v.profile} />
              <div>
                <Typography variant="subtitle2">
                  <b>{v.name}</b>
                  {`: ${v.comment}`}
                </Typography>
                <span style={{ color: "grey", fontSize: "x-small" }}>
                  {new Date(v.time).toString()}
                </span>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Grid container style={{ margin: "0.5rem" }}>
        <Grid item xs={12}>
          <InputLabel
            shrink
            style={{
              padding: "0.5rem 0",
              fontSize: "120%",
              fontWeight: "bold",
            }}
          >
            Comment section
          </InputLabel>
          <InputBase
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setText(event.target.value);
            }}
            style={{
              borderRadius: "5px",
              border: "1px solid rgba(0, 0, 0, 0.54)",
              width: "100%",
              fontSize: "100%",
            }}
            endAdornment={
              <IconButton onClick={call}>
                <Send />
              </IconButton>
            }
            required
          />
        </Grid>
      </Grid>
    </>
  );
}
