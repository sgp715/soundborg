var React = require('react');
var min = require('minified');

var FileBox = React.createClass({

    getInitialState: function() {
        return {
            test: 'test',
        };
    },

    componentDidMount: function() {

        var url = this.props.source + "/posts/1";

        this.request = min.$.request('get', url ).then(function(result) {
            var test_result = JSON.parse(result).title;
            console.log(test_result);
        });
    },

    render: function() {
        return (
            <div> Hello, {this.state.test}!</div>
        );
    }


});

module.exports = FileBox;
