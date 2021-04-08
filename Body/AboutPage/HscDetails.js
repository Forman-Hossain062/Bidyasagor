import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import './About.css'
const HscDetails = props => {
    return (
        <div className='container' style={{ margin: '0', padding: "0", boxSizing: 'border-box' }}>
            <Card>
                <CardImg top src={props.data.image} alt={props.data.Name} />
                <CardBody>
                    <CardTitle><h4>Name: {props.data.Name}</h4></CardTitle>
                    <CardSubtitle> <h5>Instructor: {props.data.instructor}</h5></CardSubtitle>

                    <h5>Instituation: {props.data.instituation}</h5>
                    <h5>Email:{props.data.email}</h5>
                    <CardText>
                        "{props.data.description}"
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default HscDetails;
