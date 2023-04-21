import React, { useState } from "react";
import { Container, Paper, Box, Grid, TextField, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.grey[300],
        paddingTop: theme.spacing(5),
    },
    inputGroup: {
        marginBottom: theme.spacing(1)
    }
}));

function ClientTable() {
    const classes = useStyles();

    const userTemplate = {
        name: "",
        email: "",
        phone: "",
        age: ""
    }
    const [users, setUsers] = useState([userTemplate])

    const addUser = () => {
        setUsers([...users, userTemplate])
    }
    //changeing state
    const onChange = (e, index) => {
        const updatedUsers = users.map((user, i) => {

            return (
                index === i ? Object.assign(user, { [e.target.name]: e.target.value }) : user
            )
        })
        setUsers(updatedUsers)
    }
    // remove arrow

    const removeUser = (index) => {
        const filteredUsers = [...users];
        filteredUsers.splice(index, 1)
        setUsers(filteredUsers)
    }

    return (
        <Container className={classes.root}>
            <Paper component={Box} width="30%">

                {
                    users?.map((user, index) => {
                        return (
                            <Grid container spacing={3} key={index} className={classes.inputGroup}>
                                <Grid item md={3}>
                                    <TextField
                                        label='Name'
                                        placeholder="Enter Your Full Name"
                                        variant="outlined"
                                        fullWidth
                                        name="name"
                                        onChange={(e) => onChange(e, index)}
                                        value={user.name}

                                    />
                                </Grid>
                                <Grid item md={3}>
                                    <TextField
                                        label='Email'
                                        placeholder="Enter Your Email"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        onChange={(e) => onChange(e, index)}
                                        value={user.email}

                                    />
                                </Grid>
                                <Grid item md={3}>
                                    <TextField
                                        label='Phone'
                                        placeholder="Enter Your Phone Number"
                                        variant="outlined"
                                        fullWidth
                                        name="phone"
                                        onChange={(e) => onChange(e, index)}
                                        value={user.phone}

                                    />
                                </Grid>
                                <Grid item md={2}>
                                    <TextField
                                        label='Age'
                                        placeholder="Enter Your Age"
                                        variant="outlined"
                                        fullWidth
                                        name="age"
                                        onChange={(e) => onChange(e, index)}
                                        value={user.age}

                                    />
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="secondary" onClick={() => removeUser(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        )
                    })
                }
                <Button color="Primary" variant="contained" className={classes.inputGroup} onClick={addUser}>
                    Add
                </Button>
            </Paper>
        </Container>
    );
}

export default ClientTable;