import React from 'react';

import min from 'minified';

class Request extends React.Component {

    get(endpoint) {
        min.$.request('get', endpoint)
        .then(function(res) {
            var json = min.$.parseJSON(res);
            console.log(json);
        });
    }

    /*
    put(endnpoint, file) {

        var name = file.name;
        min.$.request('put', endpoint, file)
        .then(funciton(res) {
            var
        });
    }
    */

}

export default Request;
