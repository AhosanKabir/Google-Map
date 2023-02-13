// ********** without any Div ************************************

// import { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// class MapContainer extends Component {
//     render() {
//         return (
//             <Map
//               google={this.props.google}
//               zoom={8}
//               style={{width:"100%" , height: "auto"}}
//               initialCenter={{ lat: 23.994387906719123, lng: 90.3216486245878}}
//             />
//         );
//     }
// }

// const WrappedMapContainer = GoogleApiWrapper({
//     apiKey: 'AIzaSyD0zHuUXhClZspBduwBcm6mYaErVMzf6ps'
// })(MapContainer);

// export default WrappedMapContainer;

// ********** with Div ************************************


import { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return (
            <div style={{width: "100%", height: "310px", position: "relative"}}>
                <Map
                  google={this.props.google}
                  zoom={8}
                  style={{width: "100%", height: "100%", position: "absolute"}}
                  initialCenter={{ lat: 23.994387906719123, lng: 90.3216486245878}}
                />
            </div>
        );
    }
}

const WrappedMapContainer = GoogleApiWrapper({
    apiKey: 'AIzaSyD0zHuUXhClZspBduwBcm6mYaErVMzf6ps'
})(MapContainer);

export default WrappedMapContainer;

