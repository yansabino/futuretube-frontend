import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto 10px",
  },
}));

export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination 
      count={3} 
      shape="rounded"
      defaultPage={1}
       />
    </div>
  );
}
