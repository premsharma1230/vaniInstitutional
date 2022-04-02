import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Classes from "./login.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import { useForm, Controller } from "react-hook-form";
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios"
import Stack from '@mui/material/Stack';


const useStyles = makeStyles({
  root: {
    minWidth: 500,
    borderRadius: '26px',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function InstitutionalLogin() {
  const classes = useStyles();

  const handleSubmit = (data) => {
    // axios.post()
  }
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
  ]
  return (
    <div className={Classes.loginContainer}>
      <Card className={classes.root}>
        <CardContent>
          <div className={Classes.loginHeader}>
            <div className={Classes.loginMainHeader}>Vani Prakashan Group</div>
            <div className={Classes.loginSubheader}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, faucibus tempor mauris massa.
            </div>
            <div className={Classes.instututionalloginSubheader}>
              Institutional Login
            </div>
          </div>
          <div className={Classes.formContainer}>
            <form
              onSubmit={handleSubmit}
              className={`${classes.root} ${Classes.formMain}`}
            >
              <div>
                <div className={Classes.maaa}>
                <Stack spacing={2} sx={{ width: 300 }}>
                      <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={top100Films.map((option) => option.title)}
                        renderInput={(params) => <TextField {...params} label="Search for your insitute here" variant="outlined" />}
                      />

                  </Stack>
                </div>
              </div>
              <div className={Classes.SignupButton}>
                    <Button
                      variant="contained"
                      style={{
                        background: "#0298BF", height: '30px',
                        width: '130px',
                        borderRadius: '8px'
                      }}
                      type="submit"
                      color="primary"
                    >
                      Next
                    </Button>

              </div>
            </form>
            <div className={Classes.backForgotPassword}>
              <div className={Classes.back}>Back</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
