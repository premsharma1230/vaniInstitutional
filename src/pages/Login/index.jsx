import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Classes from "./login.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useForm, Controller } from "react-hook-form";
import axios from "axios"

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
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      institution: "",
    },
  });
  const onSubmit = (data) =>{
    // axios.post()
  }
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
              onSubmit={handleSubmit(onSubmit)}
              className={`${classes.root} ${Classes.formMain}`}
            >
              <div>
                <div className={Classes.maaa}>
                  <Controller
                    name="institution"
                    control={control}
                    rules={{ required: true }}
                    sx={{borderRadius:'30px'}}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        // id="outlined-basic"
                        label="Search for your insitute here"
                        variant="outlined"
                        className={Classes.userField}
                        sx={{borderRadius:'30px'}}
                      />
                    )}
                  />
                </div>
              </div>
              <div className={Classes.SignupButton}>
                <Controller
                  className={Classes.loginField}
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Button
                      variant="contained"
                      style={{ background: "#0298BF", height: '30px',
                      width: '130px',
                      borderRadius: '8px' }}
                      type="submit"
                      color="primary"
                      {...field}
                    >
                      Next
                    </Button>
                  )}
                />
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
