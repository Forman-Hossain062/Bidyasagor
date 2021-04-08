import React from 'react'
import { Card, CardBody, CardText, CardImg } from 'reactstrap'
const FirstRow = (props) => {
    return (
        <div className='container' style={{ marginTop: "20px" }}>
            <div className="row" style={{ marginBottom: "20px" }}>
                <div className="col-sm-6 mt-4" expand='sm'>
                    <Card>
                        <CardBody>
                            <CardText>
                                <h4> {props.row.text}</h4>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-sm-6 mt-4" expand='sm'>
                    <Card >

                        <CardImg src={props.row.image} />

                    </Card>
                </div>
            </div>


        </div>


    )
}

export default FirstRow;