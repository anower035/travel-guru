import React from 'react';
import { useHistory, useParams } from 'react-router';
import fakedatas from '../../fakedata/index.js';
import './Booking.css'
import { Form, FormControl } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import Header from '../Header/Header';


const Booking = () => {
    const {place} = useParams() 
    const placedetails = fakedatas.find(pd => pd.id == place);
    const history = useHistory();
    const handleClick = () => {
        history.push(`/HotelDetails/${placedetails.id}`)
    }
    return (
        <div>
            <div>
                <Header></Header>
            </div>
        <div>
            <div class="content">
                <div class="header-content-wrapper mt-5">
                    <div class="w-100">
                    <div class="row w-100">
                        <div class="col-lg-6 text-center">
                            <img id="bookingimg" src={placedetails.img_link}></img>
                            <h1 class="display-4">{placedetails.title}</h1>
                        <p>
                            {placedetails.details}
                        </p>
                        </div>
                        <div class="col-lg-6">
                            <div class="booking_form" >
                                <Form onSubmit={handleClick} className="form">
                                        <label>Origin</label>
                                            <FormControl required name="origin" type="text" placeholder="Write your Origin" className="my-3 bg-light" required />
                                        <label>Destination</label>
                                            <FormControl  name="destination" type="text" value={placedetails.title}  className="my-3 bg-light" required />
                                        <div class="form-calender d-flex">
                                            <div className='from'>
                                                <label class="text-right" required>To :</label>
                                                <FormControl  type="date" required/>
                                            </div>
                                            <div id="from">
                                                <label class="text-left " required>Form :</label>
                                                <FormControl  type="date" required/>
                                            </div>
                                        </div>
                                        <Button class="d-block btn btn-warning mt-4" type="submit">Booking</Button> 
                                </Form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default Booking;
