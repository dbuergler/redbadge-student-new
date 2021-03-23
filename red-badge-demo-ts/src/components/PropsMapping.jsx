import React, { Component } from 'react'

class PropsMapping extends Component {
    render() {
        const visitedPlaces = () => this.props.visited.map((place) => <li>{place}</li>);
        return (    
            <div>
                <h2>Places I have been:
                    <ul>{visitedPlaces()}</ul>
                </h2>
            </div>

        )
        
    }
}

export default PropsMapping;
