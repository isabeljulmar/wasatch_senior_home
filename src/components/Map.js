import React from 'react';
import GoogleMapReact from 'google-map-react';
// import { setFlash } from '../actions/flash';
// import { connect } from 'react-redux';
import { Button, Segment, Header, Form, Input, Divider } from 'semantic-ui-react'
// import axios from 'axios';

class Map extends React.Component {
    static defaultProps = {
        center: { lat: 40.392358, lng: -111.746043 },
        zoom: 16
    }

    state = {
        center: this.props.center,
        zoom: this.props.zoom,
        address: 'Devpoint Labs',
    }

    createMapOptions() {
        return {
            panControl: true,
            mapTypeControl: true,
            scrollWheel: true
        }
    }

    findAddress = (e) => {
        e.preventDefault();
        let { dispatch } = this.props;
        let address = this.state.address;

        // axios.get(`/api/location?address=${address}`)
        //     .then(res => {
        //         let { data } = res;
        //         this.setState({ address, center: { lat: data[0], lng: data[1] } });
        //         dispatch(setFlash('Address Found!', 'success'));
        //     })
        //     .catch(response => {
        //         dispatch(setFlash('Error finding address. Try again!', 'error'));
        //     });
    }

    handleChange = (e) => {
        this.setState({ address: e.target.value });
    }

    render() {
        let { center, zoom, address } = this.state;

        return (
            <Segment basic style={{ height: '500px', width: '500px', margin: '0 auto' }}>
                <GoogleMapReact
                    options={this.createMapOptions}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    center={center}
                />
            </Segment>
        )
    }
}


export default Map;