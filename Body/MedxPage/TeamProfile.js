import React from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const ProTeam = props => {
    return (
        <div className="container">
            <Card>
                <CardBody>
                    <h3>{props.member.Name}</h3>
                    <hr />
                    <h4>{props.member.Instructor}</h4>
                    <h5>{props.member.Instituation}</h5>
                </CardBody>
            </Card>
        </div >
    )
}

export default ProTeam;
