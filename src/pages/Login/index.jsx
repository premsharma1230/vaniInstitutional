import React, {useEffect} from "react";
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
  let navigate = useNavigate();
  const { handleSubmit, control, reset, formState: { errors }, register } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  
  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("studentLogin")).token;
   if(token){
     navigate("/MainHome")
   }
  },[window.location.pathname])

  const onSubmit = (data) => {
    const selectedInstitute = JSON.parse(sessionStorage.getItem("selectedInstitution"));
    const finalData = Object.assign(data, { slug: selectedInstitute?.[0].slug });
    studentLogin(finalData)
      .then(res => {
        sessionStorage.setItem("studentLogin",JSON.stringify(res?.data))
        navigate("/MainHome");
      })
      .catch(err => {
        console.log("err", err)
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
    </section>
  );
}
