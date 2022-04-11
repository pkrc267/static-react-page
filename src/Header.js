import React from 'react';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const headerText = "Header";
        const headerContainer = {
            backgroundColor: "#f9edea",
            display: 'flex',
            height: '100px',
            placeContent: 'center',
            placeItems: 'center'
        };
        return (
            <div style={headerContainer}>
                <h1>{headerText}</h1>
            </div>
        );
    }
}

export default Header;