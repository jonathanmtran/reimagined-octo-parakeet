import React from 'react';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class Woof extends React.Component {

    componentDidMount() {
        this.woof();
    }

    woof() {
        fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(data => this.setState({
                dog: data
            }));
    }

    render() {
        let dogImg;

        if (this.state && this.state.dog) {
            let url = this.state.dog.url;

            if (url.indexOf('mp4') > -1) {
                dogImg = (
                    <video>
                        <source src={url} type="video/mp4"/>
                    </video>
                );
            }
            else if (url.indexOf('webm') > -1) {
                dogImg = (
                    <video>
                        <source src={url} type="video/webm"/>
                    </video>
                );
            }
            else {
                dogImg = (
                    <Image src={url} fluid />
                );
            }
        }

        return (
            <div>
                <h2>random.dog/woof.json</h2>
                {dogImg}<br />
                <br />
                <Button onClick={() => this.woof()}>woof</Button>
            </div>
        );
    }
}

export default Woof;
