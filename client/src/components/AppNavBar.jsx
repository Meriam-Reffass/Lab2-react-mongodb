import { Component } from 'react'
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

class AppNavBar extends Component {

    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div>
                <Navbar
                    color="dark"
                    dark
                    expand="md"
                >
                        
                    <NavbarBrand href="/">
                        ShoppingList
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav
                            className="ml-auto"
                            navbar
                            >

                            <NavItem>
                                <NavLink href="https://google.com">
                                    Google
                                </NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default AppNavBar;