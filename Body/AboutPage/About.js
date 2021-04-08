import React, { Component } from 'react'
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap'
import { HscTeam } from '../../data/TeamProfile/HscTeam'
import { MedTeam } from '../../data/TeamProfile/MedxTeam'
import TeamHsc from './HscTeam'
import TeamMedx from './MedxTeam'
import HscDetails from './HscDetails'
import MedxDetails from './MedxDetails'

class About extends Component {

    state = {
        teamH: HscTeam,
        teamM: MedTeam,
        dishSelect: null,
        modalOpen: false
    }

    OnDishSelect = dish => {
        this.setState({
            dishSelect: dish,
            modalOpen: !this.state.modalOpen
        })
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        const menu1 = this.state.teamH.map(item => {
            return <TeamHsc
                hsc={item}
                key={item.id}
                selectedDish={() => this.OnDishSelect(item)} />
        })


        let details = null;
        if (this.state.dishSelect != null) {
            details = <MedxDetails data={this.state.dishSelect} />
        }


        const menu2 = this.state.teamM.map(item => {
            return <TeamMedx
                medx={item}
                key={item.id}
                selectedDish={() => this.OnDishSelect(item)} />
        })

        let moreInfo = null;
        if (this.state.dishSelect != null) {
            moreInfo = <HscDetails data={this.state.dishSelect} />
        }


        return (
            <div style={{ paddingTop: "70px" }} >
                <div style={{ textAlign: 'center' }}><h4>A Few Words About</h4>
                    <h2 className="">Our Team</h2></div>
                <div>
                    <div className="team" style={{ marginTop: "10px ", marginBottom: '10px' }}>
                        <h4>HSC TEAM PROFILE</h4>
                    </div>
                    <hr />
                    <div className="">
                        <CardColumns>
                            {menu1}
                        </CardColumns>

                        <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal} >
                            <ModalBody >
                                {details}
                            </ModalBody>
                            <ModalFooter>
                                <Button className='team m-auto' onClick={this.toggleModal} >
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>

                    </div>
                    <hr />

                    <div className="team" style={{ marginTop: "20px", marginBottom: '10px', }}>
                        <h4 >MEDX TEAM PROFILE</h4>
                    </div>
                    <hr />
                    <div>
                        <div className="mb-2">
                            <CardColumns>
                                {menu2}
                            </CardColumns>

                            <Modal isOpen={this.state.modalOpen} >
                                <ModalBody >
                                    {moreInfo}
                                </ModalBody>
                                <ModalFooter>
                                    <Button className='team m-auto' onClick={this.OnDishSelect} >
                                        Close
                                </Button>
                                </ModalFooter>
                            </Modal>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default About;