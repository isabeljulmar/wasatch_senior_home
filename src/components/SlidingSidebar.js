import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Divider } from 'semantic-ui-react';
import About from './About';
import Map from './Map';

class SlidingSidebar extends React.Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
        return (
            <div style={styles.page}>
                <Icon name="content" size="large" style={styles.sliding} onClick={this.toggleVisibility} />
                <Button floated='right' size="large" style={styles.button}>
                    Schedule a tour
                  </Button>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
                        <Menu.Item name='home'>
                            Home
                    </Menu.Item>
                        <Menu.Item name='about'>
                            About
                    </Menu.Item>
                        <Menu.Item name='location'>
                            Location
                    </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <About />
                            <Divider />
                            <Map />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

const styles = {
    sliding: {
        margin: 10,
    },
    page: {
        marginLeft: 100,
        marginRight: 100,
        // marginTop: 20,
        marginBottom: 35,
    },
    button: {
        marginTop: 5,
    }
}

export default SlidingSidebar;