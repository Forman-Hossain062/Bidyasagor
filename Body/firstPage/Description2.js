import React from 'react'
import './btn.css'
import { Card, CardBody, CardText, CardImg } from 'reactstrap'
const Description2 = (props) => {
    return (
        <div className='container'>
            <div className="row ">

                <div className="col-sm-6  mb-4">
                    <Card className="card">

                        <CardImg src={props.detail.image} />

                    </Card>
                </div>
                <div className="col-sm-6   ">
                    <Card className="card">
                        <CardBody>
                            <CardText>
                                <h4> {props.detail.text}</h4>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Description2
