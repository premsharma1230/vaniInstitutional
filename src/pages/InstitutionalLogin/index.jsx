import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Classes from "./_login.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import { useForm, Controller } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import Stack from "@mui/material/Stack";
import { GetCollegeLists } from "../../api/api";
import { useHistory, useNavigate, useLocation } from "react-router-dom";

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
export default function InstitutionalLogin() {
  const [institutionsLists, setInstitutionsLists] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [value, setValue] = useState([]);
  let navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    const loadData = () => {
      GetCollegeLists().then(res => {
        const response = res;
        sessionStorage.setItem("institutionLists", JSON.stringify(res))
        setInstitutionsLists(response)
      }).catch((err) => {
      });
    };

    loadData();
  }, []);
  useEffect(() => {
    const token = JSON.parse(sessionStorage?.getItem("studentLogin"))?.token;
    if (token) {
      navigate("/MainHome")
    }
  }, [window.location.pathname])

  const handleSubmit = e => {
    e.preventDefault();
    const selectedInstitutionalData = institutionsLists.filter(
      item => item.name === value
    );
    sessionStorage.setItem("selectedInstitution",JSON.stringify(selectedInstitutionalData))
    navigate("/login");
  };
  const handleSelect = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={Classes.institutionalWrapper}>
      <div className={Classes.loginContainer}>
        <Card className={classes.root}>
          <CardContent>
            <div className={Classes.loginHeader}>
              <div className={Classes.loginMainHeader}>
                Vani Prakashan Group
              </div>
              <div className={Classes.loginSubheader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                faucibus tempor mauris massa.
              </div>
              <div className={Classes.instututionalloginSubheader}>
                Institutional Login
              </div>
            </div>
            <div className={Classes.formContainer}>
              <div className={Classes.enterCollege}>
                Enter by selecting your college
              </div>
              <form
                onSubmit={handleSubmit}
                className={`${classes.root} ${Classes.formMain}`}
              >
                <div>
                  <div className={Classes.maaa}>
                    <Stack spacing={2} sx={{ width: 350 }}>
                      <Autocomplete
                        value={value}
                        onChange={handleSelect}
                        inputValue={selectedInstitute}
                        onInputChange={(event, selectedInstitute) => {
                          setSelectedInstitute(selectedInstitute);
                        }}
                        id="controllable-states-demo"
                        options={institutionsLists?.map(option => option.name)}
                        renderInput={(params) =>
                           <TextField {...params} 
                        label="Search for your insitute here"
                        variant="outlined"
                         />}
                      />
                    </Stack>
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
                    disabled={selectedInstitute ? false : true}
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
    </section>
  );
}
