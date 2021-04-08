import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Logo from '../../assets/logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,

    NavbarText
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{ position: 'fixed', width: '100%', zIndex: "5", margin: "auto" }}>

            <Navbar className="m-auto sticky" color="dark" dark expand="md" style={{ zIndex: "10" }}>
                <div className="" >
                    <NavbarBrand className="mr-5 navv" href="/">
                        <img src={Logo} alt="Logo" width="50px" height="30px" />
                        {/* <span className='ml-3'>Bidyasagor</span> */}
                    </NavbarBrand>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="">
                            <Link to="/" className="nav-link navv mr-5"  >Home</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/hsc" className="nav-link navv mr-5"  >Hsc</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/medx" className="nav-link navv mr-5"  >Medx</Link>
                        </NavItem>

                        <NavItem>
                            <Link to='/about' className="nav-link navv mr-5" >About us</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link navv mr-5"  >Contact</Link>
                        </NavItem>

                    </Nav>
                    <NavbarText>
                        <a href='/' className="mr-5 navv"> Hsc App Link</a>
                    </NavbarText>
                    <NavbarText >
                        <a href='/' className="mr-5 navv">Medx App Link</a>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Navigation;