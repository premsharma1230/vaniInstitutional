import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Classes from "./eBookList.module.scss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import { useForm, Controller } from "react-hook-form";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { GetBookListApi } from "../../api/api.js";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

export default function EbookList() {
    const classes = useStyles();
    const [EBookList,setEBookList] = useState([]);
    const handleSubmit = (data) => {
        // axios.post()
    }
    useEffect(()=>{
      getBookList()
    },[])
    const getBookList = () => {
        GetBookListApi().then(res => {
            const response = res;
            setEBookList(response.data);
          });
    }
    return (
        <div className={Classes.container}>
            <div className={classes.root}>
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={3} />
            </div>
        </div>
    );
}
