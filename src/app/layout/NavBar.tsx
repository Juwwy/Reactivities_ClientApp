import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface Props{
  openForm: () => void;
}


function NavBar({openForm}:Props) {
  return (
    <Menu inverted fixed='top'>
        <Container>
            <Menu.Item header>
                <img src="assets/like-logo.jpg" style={{marginRight:10, borderRadius:50}} alt="logo"/>
                Reactivities
            </Menu.Item>
            <Menu.Item name='Activities'/>
            <Menu.Item>
                <Button onClick={openForm} positive content='Create Activity'/>
            </Menu.Item>
        </Container>
    </Menu>
  )
}

export default NavBar
