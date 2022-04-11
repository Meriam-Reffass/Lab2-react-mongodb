import React, {Component, useState} from 'react' ;
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap' ;

function AppNavBAr() {
       
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle =() => {
        // this.setState({
        //     isOpen : !this.state.isOpen
        // });

        setIsOpen(!isOpen)
    }

        return(
            <div>
                <Navbar color="dark" dark expand="md" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={toggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavItem href="/http://www.google.com/">Google</NavItem>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    
}

export default AppNavBAr;