import React from 'react';
import logo from './blog_logo.png';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const headerText = "Header";
        const headerContainer = {
            backgroundColor: "#FBEFEB",
            display: 'flex',
            height: '10rem',
            placeContent: 'center',
            placeItems: 'center'
        };
        const image = {
            height: '100%',
            width: '100%',
            maxHeight: '10rem'
        };
        const imageContainer = {
            height: 'fit-content',
            width: 'auto',
            margin: 'auto'
        };
        return (
            <div style={headerContainer}>
                {
                    <h1 style={imageContainer}>
                        <img src={logo} style={image}/>
                    </h1>
                }
            </div>
        );
    }
}

export default Header;