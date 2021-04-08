import React from 'react'
import { Card, CardBody, CardText, CardImg } from 'reactstrap'
const Description = (props) => {
    return (
        <div className='container'>
            <div className="row" style={{ marginBottom: "20px" }}>
                <div className="col-sm-6 order-sm-2 mb-4" expand='sm'>
                    <Card>
                        <CardBody>
                            <CardText>
                                <h4> {props.details.text}</h4>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-6 order-sm-2 " expand='sm'>
                    <Card >
                        {/* <a href="https://www.youtube.com"> </a> */}
                        <CardImg src={props.details.image} />

                    </Card>
                </div>
            </div>


        </div>


    )
}

export default Description;


