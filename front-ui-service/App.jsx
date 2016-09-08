var React = require('react');
var FileBox = require('./FileBox.jsx');

var App = React.createClass({

    render: function() {
        return (
          <div>
            <FileBox  source="http://jsonplaceholder.typicode.com" />
          </div>
        );
    }

});

module.exports = App;
