import React, { useState, useEffect, useCallback } from "react";
import Dialog from "@material-ui/core/Dialog";
import {
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import axios from "axios";
import AddAlert from "@material-ui/icons/AddAlert";
import { useShellHeaders } from "@atlas-ui/app-shell";
import { ERROR_MSG_TYPE } from "../../../constant/BridgeConfiguration";
import Snackbar from "../../../Common/SnackBar";
import Check from "@material-ui/icons/Check";

import { makeStyles } from "@material-ui/styles";
import styles from "../../../layout/validationStyle";
import BridgeService from "../BridgeService";

const ErrorChecking = (props) => {
  const BASE_URL =
    process.env.REACT_APP_VALIDATION_SERVICE_API_BASE_URL +
    "/api/errorChecking";
  const headers = useShellHeaders();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { formData, setFormData } = props;
  const getDefaultErrorData = () => {
    return {
      bridgeConfigId: "",
      name: false,
      company: false,
      department: false,
      billRate: false,
      payRate: false,
    };
  };
  const [errorData, setErrorData] = useState(getDefaultErrorData());
  const [isLoading, setIsLoading] = useState(false);
  const [mainScreenAlertMessage, setMainScreenAlertMessage] = useState({
    mainScreenAlertMessage: "",
    mainScreenAlertType: "",
  });
  const [mainScreenAlert, setMainScreenAlert] = useState(false);

  const handleErrorChange = (e) => {
    if (formData.id) {
      setErrorData((prevState) => {
        prevState.bridgeConfigId = formData.id;
        prevState[e.target.name] = e.target.checked;
        return {
          ...prevState,
        };
      });
      saveErrorChange();
    }
  };

  const setAlertMessageOnSave = (alert) => {
    setMainScreenAlertMessage({
      mainScreenAlertMessage: alert,
      mainScreenAlertType: ERROR_MSG_TYPE,
    });
    setMainScreenAlert(true);
  };

  const saveErrorChange = () => {
    if (errorData.bridgeConfigId) {
      BridgeService.errorCheckingSave(
        errorData,
        setAlertMessageOnSave,
        headers
      );
    }
  };

  const getErrorData = useCallback(() => {
    if (formData.id) {
      setIsLoading(true);
      const apiUrl = `${BASE_URL}/${formData.id}`;
      axios
        .get(apiUrl, {
          headers,
        })
        .then((response) => {
          if (response.data.response) {
            setErrorData(response.data.response);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.response?.status !== 404) {
            setMainScreenAlertMessage({
              mainScreenAlertMessage: "Unable to get error checking data",
              mainScreenAlertType: ERROR_MSG_TYPE,
            });
            setMainScreenAlert(true);
          }
          setIsLoading(false);
        });
    } else if (formData.isClone) {
      setFormData((prevState) => {
        return {
          ...prevState,
          errorCheckingDetails: errorData,
        };
      });
    } else {
      setErrorData(getDefaultErrorData());
    }
  }, [formData.id, formData.isClone, headers, BASE_URL]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getErrorData();
  }, [formData.id, getErrorData]);

  return (
    <>
      <Dialog open={mainScreenAlert} BackdropProps={{ invisible: true }}>
        <Snackbar
          place="tc"
          color={mainScreenAlertMessage.mainScreenAlertType}
          icon={AddAlert}
          message={mainScreenAlertMessage.mainScreenAlertMessage}
          open={mainScreenAlert}
          closeNotification={() => setMainScreenAlert(false)}
          id="c53ca33a6036489e8f03927617060114"
        />
      </Dialog>
      {isLoading ? (
        <div className={classes.errorLoadingSpinner}>
          <CircularProgress />
        </div>
      ) : (
        <FormControl className={classes.errorFormControlPadding}>
          <FormGroup>
            <FormControlLabel
              label="Company"
              labelPlacement="start"
              control={
                <Checkbox
                  name="company"
                  id="fe14c016as312312a959eb6a3295c9e2ca8"
                  data-testid="companyCheckBox"
                  onChange={handleErrorChange}
                  checked={errorData.company}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot,
                  }}
                />
              }
              classes={{ label: classes.errorLabelPadding }}
            />
            <FormControlLabel
              label="Name"
              labelPlacement="start"
              control={
                <Checkbox
                  name="name"
                  id="fe14c016as3122354rw3f6a3295c9e2ca8"
                  data-testid="nameCheckBox"
                  onChange={handleErrorChange}
                  checked={errorData.name}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot,
                  }}
                />
              }
              classes={{ label: classes.errorLabelPadding }}
            />
            {props.formData.customMapping && (
              <FormControlLabel
                label="Department"
                labelPlacement="start"
                control={
                  <Checkbox
                    name="department"
                    id="fe14c016as3122dqawd3295c9e2ca8"
                    data-testid="departmentCheckBox"
                    onChange={handleErrorChange}
                    checked={errorData.department}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot,
                    }}
                  />
                }
                classes={{ label: classes.errorLabelPadding }}
              />
            )}
            <FormControlLabel
              label="Pay Rate"
              labelPlacement="start"
              control={
                <Checkbox
                  name="payRate"
                  id="fe14c016as3123tdfqwdASD5c9e2ca8"
                  data-testid="payRateCheckBox"
                  onChange={handleErrorChange}
                  checked={errorData.payRate}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot,
                  }}
                />
              }
              classes={{ label: classes.errorLabelPadding }}
            />
            <FormControlLabel
              label="Bill Rate"
              labelPlacement="start"
              control={
                <Checkbox
                  name="billRate"
                  id="12kasd2e32rdf2c2295c9e2ca8"
                  data-testid="billRateCheckBox"
                  onChange={handleErrorChange}
                  checked={errorData.billRate}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot,
                  }}
                />
              }
              classes={{ label: classes.errorLabelPadding }}
            />
          </FormGroup>
        </FormControl>
      )}
    </>
  );
};

export default ErrorChecking;