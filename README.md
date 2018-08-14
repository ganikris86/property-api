# property-api

API to filter the input request and return the response based on conditions
- It is based on [Express](https://expressjs.com).
- This app listens on port 8000 (when used locally).
- Unit testing is carried out through [Jest](https://jestjs.io/).

## Heroku URL

This app is deployed in heroku.
- https://boiling-scrubland-23077.herokuapp.com  (HTTP - POST)
- https://boiling-scrubland-23077.herokuapp.com/property  (HTTP - POST)
- Endpoints /property using HTTP GET and POST (though POST is the fully implemented service)
- Error 400 will be thrown when the JSON does not match the schema validation
- Sample request is present [here](test/sample/sampleRequest.json) 
- Sample response is present [here](test/sample/sampleResponse.json)
- A JSON schema validator is implemented which expects the input to follow a described structure.
- Both ../ and ../property routes to the same service

## Endpoints

/ (HTTP - POST)
/ (HTTP - GET)
/property (HTTP - POST)
/property (HTTP - GET)

## Setting up the app

This app requires node to be pre-installed(v8.11.1 is recommended)
```
npm install
```

## Starting the App

```
npm start
```

## Unit testing

```
npm test
```

Sample output of the unit tests:
```
> property-api@1.0.0 test /Users/gani/my_work/Umano/projects/work/property-api
> jest

 PASS  test/propertyService.test.js
  propertyService - Test Suite
    ✓ filterProperty - return data as expected (4ms)
    ✓ filterProperty - return empty data when workflow does not match
    ✓ filterProperty - return empty data when type does not match (1ms)
    ✓ filterProperty - return empty address
    ✓ concatAddress - return concatenated address
    ✓ concatAddress - return concatenated address when there is no buildingNumber
    ✓ concatAddress - return empty result (1ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        0.898s, estimated 1s
Ran all test suites.
```

## Things to improve

This app is can be considered an MVP on building a node.js api using express with tests using jest and hosting it in heroku.
Many improvements are required.
- Introduce a logger
- Structure the app in a better way (can use kraken.js)
- Use forever or pm2 npm
- Better error handling to be followed
- Introduce authentication
- Include CORS
- Improve test coverage. Write integration tests
- and the list goes on ...