import React from 'react'
import { Card, CardBody, CardText, CardImg, Container } from 'reactstrap'
const ThreeD = props => {
    return (
        <div className='container '>
            <div className="row" style={{ marginBottom: "" }}>

                <div className=" col-sm-12 mb-4 " expand='sm'>
                    <Card>
                        <CardBody>
                            <CardImg src={props.three.image} />
                        </CardBody>
                    </Card>
                </div>
                <div className=" col-sm-12 mb-4 " expand='sm'>
                    <Card>
                        <CardBody>
                            <CardText>
                                <h4> {props.three.text}</h4>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>

            </div>


        </div>


    )
}

export default ThreeD;