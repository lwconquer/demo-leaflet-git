import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer, LayersControl, ZoomControl, ScaleControl, LayerGroup, Circle } from 'react-leaflet';

const { BaseLayer, Overlay } = LayersControl;

class MapControl extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Map center={this.props.position} zoom={this.props.zoom} zoomControl={false} >
                <ZoomControl position="topleft" /> */}
                <LayersControl position="bottomleft">
                    <BaseLayer checked name="OpenStreetMap.Mapnik">
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        />
                    </BaseLayer>
                    <BaseLayer name="OpenStreetMap.BlackAndWhite">
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                        />
                    </BaseLayer>
                   
                    <Overlay checked name={this.props.layers[0].layerName}>
                        <LayerGroup>
                            <Marker position={this.props.layers[0].features[0].position}>
                                <Popup>
                                    <span><b>City Name:</b> {this.props.layers[0].features[0].attribute.Name} <br /> <b>Language:</b> {this.props.layers[0].features[0].attribute.Language} <br /> <b>Inspector:</b> {this.props.layers[0].features[0].attribute.Inspector} </span>
                                </Popup>
                            </Marker>
                            <Marker position={this.props.layers[0].features[1].position}>
                                <Popup>
                                    <span><b>City Name:</b> {this.props.layers[0].features[1].attribute.Name} <br /> <b>Language:</b> {this.props.layers[0].features[1].attribute.Language} <br /> <b>Inspector:</b> {this.props.layers[0].features[1].attribute.Inspector} </span>
                                </Popup>
                            </Marker>
                            <Marker position={this.props.layers[0].features[2].position}>
                                <Popup>
                                    <span><b>City Name:</b> {this.props.layers[0].features[2].attribute.Name} <br /> <b>Language:</b> {this.props.layers[0].features[2].attribute.Language} <br /> <b> Inspector:</b> {this.props.layers[0].features[2].attribute.Inspector} </span>
                                </Popup>
                            </Marker>
                        </LayerGroup>
                    </Overlay>
                    <Overlay checked name={this.props.layers[1].layerName}>
                        <LayerGroup>
                            <Circle
                                center={this.props.layers[1].features[0].position}
                                color="green"
                                fillColor="green"
                                radius={34400}
                                stroke={true}
                            />
                            <Circle
                                center={this.props.layers[1].features[1].position}
                                color="green"
                                fillColor="green"
                                radius={34400}
                                stroke={true}
                            />
                            <Circle
                                center={this.props.layers[1].features[2].position}
                                color="green"
                                fillColor="green"
                                radius={34500}
                                stroke={true}
                            />

                        </LayerGroup>
                    </Overlay>
                </LayersControl>
                <ScaleControl position="bottomright" />

            </Map>
        );
    }
}
export default MapControl;