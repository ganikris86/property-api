# property-api

API to filter the input request and return the response based on conditions
- It is based on [Express](https://expressjs.com).
- This app listens on port 8000.
- Unit testing is carried out through [Jest](https://jestjs.io/).

## Endpoints

/property (HTTP - POST)

## Setting up the app

This app requires node (v8.11.1 is recommended)
```
npm install
```

## Starting the App

```
npm start
```

## Testing the App

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