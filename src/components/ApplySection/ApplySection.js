import React, { Component } from 'react';
import { Container, Grid, TextField, MenuItem, Typography, withStyles, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ArrowButton from '../ArrowButton/ArrowButton';
import { careers } from '../../store';
import { myTheme } from '../../theme';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    gridContainer: {
        width: '70%'
    },
    TextField: {
        width: '100%',
        color: myTheme.tertiaryColor,
        '& label': {
            color: myTheme.tertiaryColor,
        },
        '& label.Mui-focused': {
            color: myTheme.tertiaryColor,
        },
        '& .MuiInputBase-input': {
            color: myTheme.tertiaryColor
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: myTheme.fifthColor,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: myTheme.tertiaryColor,
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: myTheme.fifthColor,
        },
        '& .MuiSelect-icon':{
            fill: '#fff'
        },
        '& .MuiSelect-select:focus':{
            background: 'transparent'
        },
        icon: {
            fill: "white !important",
        },
    },
    checkbox: {
        color: myTheme.tertiaryColor,
        fontSize: '.75rem',
    },
    checkboxText: {
        color: myTheme.tertiaryColor,
        fontSize: '.75rem', 
        fontFamily: myTheme.primaryFont, 
        fontWeight: '300'
    },
    button: {
        color: myTheme.tertiaryColor,
        borderRadius: 0,
        border: `1px solid ${myTheme.fifthColor}`,
        textTransform: 'none',
        marginTop: '2em',
        width: '100%'
    },
    buttonText: {
        fontWeight: 'bold',
    },
    file: {
        display: 'none'
    },
    fileRequirements: {
        color: myTheme.fifthColor,
        fontWeight: 400,
        fontSize: '.75em'
    },
    '@media (max-width: 768px)': {
        gridContainer: {
            width: '90%'
        },
    },
};

class ApplySection extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            position: careers[0].name,
            checked: false
        }
    }

    setPosition = position => {
        this.setState({
            position
        })
    }

    handleCheckbox = () => {
        this.setState(prevState => ({
            checked: !prevState.checked
        }));
    }

    render()    {
        const { classes } = this.props;
        const { position, checked } = this.state;

        return (
            <Container className={classes.container}>
                <Grid className={classes.gridContainer} container justify="center" spacing={4}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField className={classes.TextField} required label="Name" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField className={classes.TextField} required label="Surname" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField className={classes.TextField} required label="E-mail" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            className={classes.TextField}
                            select
                            label="Select your position *"
                            value={position}
                            onChange={e => this.setPosition(e.target.value)}
                            >
                            {careers.map((option) => (
                                <MenuItem key={option.name} value={option.name}>
                                {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            className={`${classes.TextField}  ${classes.message}`}
                            id="standard-textarea"
                            label="Message"
                            multiline
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <Button className={classes.button} variant="outlined" component="label">
                            <AttachFileIcon fontSize='large' />
                            <Typography className={classes.buttonText}>Upload attachments</Typography>
                            <input type="file" className={classes.file} />
                        </Button>
                        <Typography className={classes.fileRequirements} align="center">(max. 10MB, .pdf required)</Typography>
                    </Grid>
                    <Grid item md={12}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                className={classes.checkbox}
                                checked={checked}
                                onChange={this.handleCheckbox}
                                name="checked"
                                color="#fff"
                            />
                            }
                            label={<Typography className={classes.checkboxText}>I hereby consent to my personal data being processed for the purposes of the recruitment process.*</Typography>}
                        />
                    </Grid>
                </Grid>
                <ArrowButton text="Apply" />
            </Container>
        )
    }
}

export default withStyles(styles)(ApplySection);