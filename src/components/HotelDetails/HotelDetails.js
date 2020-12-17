import React from 'react';
import {  useParams } from 'react-router';
import fakedata from '../../fakedata/index.js';
import './HotelDetails.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Col, Container, Row } from 'react-bootstrap';
import MyGoogleMap from '../MyGoogleMap/MyGoogleMap.js';
import Header from '../Header/Header.js';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      marginLeft:'5%',
      padding: theme.spacing(2),
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
        width: '110%',
        height: '110%',
        borderRadius: '5%',
    },
  }));




const HotelDetails = () => {
    const {id} = useParams() 
    const hotels = fakedata.find(pd => pd.id == id);
    const classes = useStyles();
    return (
        <Container>
            <Header></Header>
            <Row>
                <Col><h3 id="hoteltitle">Stay in {hotels.title}</h3>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={hotels.hotel_img} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="body2">
                            <h5>{hotels.hotel_name}</h5>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {hotels.availables}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {hotels.hotel_description}
                        </Typography>
                        <br/>
                        <Typography variant="body2">BDT : {hotels.hotel_price}</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
            </div>
            <br/>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={hotels.hotel_img2} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="body2">
                            <h5>{hotels.hotel_name2}</h5>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {hotels.availables2}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {hotels.hotel_description2}
                        </Typography>
                        <br/>
                        <Typography variant="body2">BDT : {hotels.hotel_price2}</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
            </div>
            <br/>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={hotels.hotel_img3} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="body2">
                            <h5>{hotels.hotel_name3}</h5>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {hotels.availables3}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {hotels.hotel_description3}
                        </Typography>
                        <br/>
                        <Typography variant="body2">BDT : {hotels.hotel_price3}</Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Paper>
            </div>
            </Col>
                <Col>            
                    <div className="main-wrapper">
                        <MyGoogleMap />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HotelDetails;