import React from 'react';
import './Footer.css';

function Impressum() {
    return (
        <footer className='css1wvnygz'>
            <section className='cssywfdku'><p className='css12megap'>Impressum</p><div className='css1mvdr8b'><p>Hi folks.</p>
                <p>I like to write about helpful dev tips and informative articles on web development, software engineering, open source and my experiences of the software realm.</p>
                <p>I hope to educate, inform &amp; most importantly save someone's time with these write ups.</p>
                <p>I hope these articles were worth your time.</p>
                <p>If you so desire some conversation, send me your words at: <strong><em><a href="mailto:codewithp.dev@gmail.com">codewithp.dev@gmail.com</a></em></strong></p>
            </div></section>
        </footer>
    )
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Impressum />
            </div>
        );
    }
}

export default Footer;