import React from 'react'
import { Card, CardBody, CardText, CardImg } from 'reactstrap'
const SecondRow = (props) => {
    return (
        <div className='container'>
            <div className="row ">
                <div className="col-sm-6 mb-4">
                    <Card>

                        <CardImg src={props.row.image} />

                    </Card>
                </div>
                <div className="col-sm-6  mb-4 ">
                    <Card >
                        <CardBody>
                            <CardText>
                                <h4> {props.row.text}</h4>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>


    )
}

export default SecondRow;