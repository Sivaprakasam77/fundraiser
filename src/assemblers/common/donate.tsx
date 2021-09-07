import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  InputBase,
} from "@material-ui/core";
import React, { useState } from "react";
import functions from "./commonfun";

interface donate {
  title: string;
  fundId: string;
  open: boolean;
  close: any;
}

export default function Donate(props: donate) {
  const [amount, setAmount] = useState<string>("100"),
    [message, setMessage] = useState<string>();
  // API call
  async function call() {
    (await functions.apiCall({
      method: "POST",
      source: "raise",
      body: JSON.stringify({
        fundId: props.fundId,
        amount: amount,
        message: message,
      }),
      dest: "/",
    })) && props.close();
  }

  return (
    <Dialog open={props.open} onClose={props.close}>
      <DialogTitle>Donation</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.title}</DialogContentText>
        <InputBase
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
          placeholder="message"
          style={{
            borderRadius: "5px",
            border: "1px solid rgba(0, 0, 0, 0.54)",
            width: "100%",
            fontSize: "100%",
            marginBottom: "0.5rem",
          }}
          required
        />
        <InputBase
          type="number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setAmount(event.target.value);
          }}
          style={{
            borderRadius: "5px",
            border: "1px solid rgba(0, 0, 0, 0.54)",
            width: "100%",
            fontSize: "100%",
          }}
          required
          defaultValue={amount}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={call} color="secondary">
          Donate
        </Button>
        <Button onClick={props.close} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
