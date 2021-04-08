import React from 'react'
import { Card, CardBody, CardText, CardImg } from 'reactstrap'
const Row1st = (props) => {
    return (
        <div className='container'>
            <div className="row" style={{ marginBottom: "20px" }}>
                <div className="col-sm-6 order-sm-2  mt-4" expand='sm'>
                    <Card>
                        <CardBody>
                            <CardText>
                                <h4> {props.row.text}</h4>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-6 order-sm-2 mt-4" expand='sm'>
                    <Card >

                        <CardImg src={props.row.image} />

                    </Card>
                </div>
            </div>


        </div>


    )
}

export default Row1st;