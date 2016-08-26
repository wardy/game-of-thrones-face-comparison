const defaultRequest = require('request');

class CognitiveServices {
    constructor(request) {
        this.request = request;
    }

    makeRequest (url) {
        let body1;
        this.request('http://localhost:8000/face-checker', (err, response, body) => {
            body1 = body;
        });
        return body1;
    }
}

module.exports = class Face extends CognitiveServices {
    constructor(apiKey, request = defaultRequest) {
        super(request);
        this.apiKey = apiKey;
    }

    detect() {
        
    }
}