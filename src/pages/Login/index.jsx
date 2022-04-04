import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Classes from "./login.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { studentLogin } from '../../api/api';

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
export default function Login() {
  const classes = useStyles();
  const { state } = useLocation();
  const slug = state?.selectedInstitutionalData?.[0];
  const { handleSubmit, control, reset, formState: { errors }, register } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const finalData = Object.assign(data, { slug: slug });
    studentLogin(finalData).then((res) => {
    }).catch((err) => {
      console.log("err", err);
    });
  };
  return (
    <div className={Classes.loginContainer}>
      <Card className={classes.root}>
        <CardContent>
          <div className={Classes.loginHeader}>
            <div className={Classes.loginMainHeader}>Login</div>
            <div className={Classes.loginSubheader}>
              Logging in into Vani Prakashan Group eBook Library
            </div>
          </div>
          <div className={Classes.formContainer}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${classes.root} ${Classes.formMain}`}
            >
              <div>
                <div>
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    className={classes.userField}
                    name="username"
                    {...register("username", {
                      required: "username is required",
                    })}
                    error={Boolean(errors?.username)}
                    helperText={errors.username?.message}
                  />
                </div>
                <div className={Classes.passwordFieldMargin}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    className={Classes.passwordField}
                    {...register("password", {
                      required: "password is required",
                    })}
                    error={Boolean(errors?.password)}
                    helperText={errors.password?.message}
                  />

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
                  Login
                </Button>
              </div>
            </form>
            <div className={Classes.backForgotPassword}>
              <div className={Classes.back}>Back</div>
              <div className={Classes.forgotPassword}>Forgot Password</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
