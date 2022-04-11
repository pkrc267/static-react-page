import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


class AppBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const appBodyContainer = {
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column"
        };
        return (
            <div style={appBodyContainer}>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

export default AppBody;