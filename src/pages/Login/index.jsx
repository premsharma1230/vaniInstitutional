import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Classes from "./_login.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useForm, Controller } from "react-hook-form";
import { studentLogin } from "../../api/api";
// import swal from "sweetalert";
import { useNavigate, useLocation, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    borderRadius: "26px",
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
  let navigate = useNavigate();
  const slug = state?.selectedInstitutionalData?.[0];
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = data => {
    const finalData = Object.assign(data, { slug: slug });
    studentLogin(finalData)
      .then(res => {
        console.log("login successful....", res);
        navigate("/MainHome", {
          state: { UserLogin: res },
        });
      })
      .catch(err => {
        console.log("login error....", err);
        // swal("Your imaginary file is safe!");
      });
  };

  return (
    <section className="LoginWrapper">
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
                    <Controller
                      name="username"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          // id="outlined-basic"
                          label="username"
                          variant="outlined"
                          className={Classes.userField}
                        />
                      )}
                    />
                  </div>
                  <div className={Classes.passwordFieldMargin}>
                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          // id="outlined-basic"
                          label="password"
                          variant="outlined"
                          className={Classes.passwordField}
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
                        style={{
                          background: "#0298BF",
                          height: "30px",
                          width: "130px",
                          borderRadius: "8px",
                        }}
                        type="submit"
                        color="primary"
                        {...field}
                      >
                        Login
                      </Button>
                    )}
                  />
                </div>
              </form>
              <div className={Classes.backForgotPassword}>
                <div>
                  <Link to="/" className={Classes.back}>
                    Back
                  </Link>
                </div>
                <div className={Classes.forgotPassword}>Forgot Password</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
