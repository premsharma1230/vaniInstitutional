import React, { useEffect } from "react";
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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  let navigate = useNavigate();
  const [showError, setShowError] = React.useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = () => {
    console.log("+++++++++++++++++++++++++++++");
    setState({
      open: true,
      vertical: "top",
      horizontal: "right",
    });
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ ...state, open: false });
  };

  useEffect(() => {
    const token = JSON.parse(sessionStorage?.getItem("studentLogin"))?.token;
    if (token) {
      navigate("/MainHome");
    }
  }, [window.location.pathname]);

  const onSubmit = data => {
    const selectedInstitute = JSON.parse(
      sessionStorage.getItem("selectedInstitution")
    );
    const finalData = Object.assign(data, {
      slug: selectedInstitute?.[0].slug,
    });
    studentLogin(finalData)
      .then(res => {
        if (res?.status == true) {
          sessionStorage.setItem("studentLogin", JSON.stringify(res?.data));
          navigate("/MainHome");
        } else {
          setShowError(res?.data?.non_field_errors[0]);
          handleClick();
        }
      })
      .catch(err => {
        // swal("Your imaginary file is safe!");
      });
  };

  return (
    <section className="LoginWrapper">
      <div className={`${Classes.loginContainer} MainCard_Wrp`}>
        <Card className={`${classes.root} card_Wrapper`}>
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
                className={`${classes.root} ${Classes.formMain} Form_wrp`}
              >
                <div className="LoginUsers">
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
                      background: "#0298BF",
                      height: "30px",
                      width: "130px",
                      borderRadius: "8px",
                    }}
                    type="submit"
                    color="primary"
                  >
                    Login
                  </Button>
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        message={showError}
        key={vertical + horizontal}
        onClose={handleClose}
      >
        <Alert severity="error">{showError}</Alert>
      </Snackbar>
    </section>
  );
}
