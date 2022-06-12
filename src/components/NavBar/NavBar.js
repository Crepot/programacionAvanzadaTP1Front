import React, { Component } from "react"
import Nav from "react-bootstrap/Nav"

class NavBar extends Component{
    render() {
        return (
            <Nav
                activeKey="/Menu"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="/Menu" >Main menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="Menu/App">New game</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Log Out</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}
export default NavBar;
