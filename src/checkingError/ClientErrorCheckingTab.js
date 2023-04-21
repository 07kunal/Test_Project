import React from 'react'
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Checkbox, FormControlLabel, FormGroup, FormControl } from '@material-ui/core'

const ClientErrorCheckingTab = () => {

    const errorBox= {
        padding: "40px",
        // fontSize: "16px",
        // fontFamily:"your put"
    }
    const errorHeading = {
        paddingBottom: "24px",
 
    }
    const errorCheckbox = {
        paddingBottom: "16px",
        paddingTop: "16px",
        fontSize: "25px",
   
    }
    return (
        <div className='errorBox' style={errorBox}>
            <div className="errorHeading" style={errorHeading}>
                <h3>Error Checking</h3>
            </div>
            <FormControl>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked color='primary' />} label="Company"  style={errorCheckbox}/>
                    <FormControlLabel  control={<Checkbox defaultChecked  color='primary'/>} label="Name" style={errorCheckbox} />
                    <FormControlLabel  control={<Checkbox   color='primary'/>} label="Department" style={errorCheckbox} />
                    <FormControlLabel  control={<Checkbox   color='primary'/>} label="Pay Rate" style={errorCheckbox} />
                    <FormControlLabel  control={<Checkbox defaultChecked  color='primary'/>} label="Default Rate" style={errorCheckbox} />

                </FormGroup>
            </FormControl>
        </div>
    )
}


export default ClientErrorCheckingTab


