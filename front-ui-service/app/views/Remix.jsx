import React from 'react';

import Paper from 'material-ui/Paper';
import Button from 'material-ui/RaisedButton';

const style = {
  height: 100,
  width: 100,
  margin: 100,
};

class Remix extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <img style={{ height: 500, width: 1000 }} src={'./assets/images/graph.jpg'} alt="graph"/>
                </div>
                <Button label="Play" />
                <Button label="Download" />
            </div>
        );
    }
}

export default Remix;
