import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form
      className="flex"
      noValidate
      autoComplete="off"
      action={"https://formspree.io/yis.art@outlook.com"}
      method="post"
      style={{ background: "white", borderRadius: "20px" }}
    >
      <TextField
        id="filled-dense"
        label="Name"
        className={clsx(classes.textField, classes.dense)}
        margin="Name"
        type="text"
        name="fullname"
        variant="filled"
      />

      <TextField
        id="filled-dense"
        label="Email"
        className={clsx(classes.textField, classes.dense)}
        type="email"
        name="email"
        margin="email"
        variant="filled"
        // onChange={handleChange}
      />

{/* <TextField
        id="filled-dense"
        // label="Email"
        className={clsx(classes.textField, classes.dense)}
        type="file"
        name="Attachments"
        // onChange={handleChange}
      /> */}

      <TextField
        id="filled-dense"
        label="Phone Number (optional)"
        className={clsx(classes.textField, classes.dense)}
        type="telephone"
        name="telephone"
        margin="telephone"
        variant="filled"
        // onChange={handleChange}
      />

      <TextField
        id="filled-dense-multiline"
        label="Message"
        className={clsx(classes.textField, classes.dense)}
        margin="text"
        variant="filled"
        multiline
        rowsMax="4"
        name="message"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type="submit"
        style={{ background: "#282c34" }}
      >
        Send
      </Button>
    </form>
  );
}
