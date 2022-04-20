import React from 'react';
import './Body.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare porttitor tortor vel auctor. Vivamus eu vehicula ante. Sed enim mauris, porttitor non massa et, varius tristique lacus. Morbi ullamcorper, quam nec elementum condimentum, nisi urna tempus magna, a viverra dolor nulla eu risus. Integer sed aliquam enim, sed lacinia orci. Curabitur orci mi, sodales ut augue id, elementum ultrices metus. Praesent convallis turpis at diam vulputate bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum tortor a diam maximus accumsan.</br></br>Etiam imperdiet nisl ac quam euismod malesuada. Duis vulputate consectetur eleifend. Sed sagittis sapien id sollicitudin fermentum. In leo lectus, porta sit amet nulla in, lobortis convallis mauris. Vestibulum vulputate aliquam eros, eu mattis tortor ullamcorper eget. Nulla malesuada est quis laoreet tempus. In bibendum tellus sed orci auctor vestibulum in vel sem. Vivamus porttitor nisi nunc, et eleifend nunc dictum a. Integer sit amet tristique orci. Nullam ut odio sagittis, commodo eros eget, egestas ex. Nunc tempus risus pulvinar arcu commodo aliquam. Vestibulum euismod orci lacinia, sodales neque non, malesuada purus.</br></br>Suspendisse ac tincidunt ipsum. Suspendisse eu mattis libero, quis facilisis tellus. Vestibulum lectus est, pellentesque id erat pulvinar, aliquam faucibus diam. Duis est risus, scelerisque non mi in, pretium semper lorem. Suspendisse a dolor posuere, eleifend ipsum id, egestas sem. Proin ut urna molestie, viverra enim et, ullamcorper urna. Suspendisse arcu felis, auctor sit amet tincidunt vel, scelerisque ac urna. Praesent dui nulla, dignissim sit amet nulla a, efficitur varius tellus.";
        const bodyContainer = {
            backgroundColor: '',
            display: 'flex',
            placeContent: 'center',
            placeItems: 'center',
            flex: 1,
            padding: '3rem',
            textAlign: 'justify',
            maxWidth: '70ch',
            marginLeft: 'auto',
            marginRight: 'auto'
        };

        return (
            <div style={bodyContainer}>
                <p dangerouslySetInnerHTML={{ __html: bodyText }}></p>
            </div>
        );
    }
}

export default Body;