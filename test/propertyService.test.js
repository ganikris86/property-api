const propertyService = require("../src/services/propertyService");

describe("propertyService - Test Suite", () => {
  test("filterProperty - return data as expected", () => {
    const request = [
      {
        address: {
          buildingNumber: "Level 6",
          postcode: "2060",
          state: "NSW",
          street: "146 Arthur Street",
          suburb: "North Sydney"
        },
        propertyTypeId: 3,
        type: "htv",
        workflow: "completed"
      }
    ];
    const response = [
      {
        concataddress: "Level 6 146 Arthur Street North Sydney NSW 2060",
        type: "htv",
        workflow: "completed"
      }
    ];
    expect(propertyService.filterProperty(request)).toEqual(response);
  });

  test("filterProperty - return empty data when workflow does not match", () => {
    const request = [
      {
        address: {
          buildingNumber: "Level 6",
          postcode: "2060",
          state: "NSW",
          street: "146 Arthur Street",
          suburb: "North Sydney"
        },
        propertyTypeId: 3,
        type: "htv",
        workflow: "pending"
      }
    ];
    const response = [];
    expect(propertyService.filterProperty(request)).toEqual(response);
  });

  test("filterProperty - return empty data when type does not match", () => {
    const request = [
      {
        address: {
          buildingNumber: "Level 6",
          postcode: "2060",
          state: "NSW",
          street: "146 Arthur Street",
          suburb: "North Sydney"
        },
        propertyTypeId: 3,
        type: "dtv",
        workflow: "completed"
      }
    ];
    const response = [];
    expect(propertyService.filterProperty(request)).toEqual(response);
  });

  test("filterProperty - return empty address", () => {
    const request = [
      {
        address: {},
        propertyTypeId: 3,
        type: "htv",
        workflow: "completed"
      }
    ];
    const response = [
      {
        concataddress: "",
        type: "htv",
        workflow: "completed"
      }
    ];
    expect(propertyService.filterProperty(request)).toEqual(response);
  });

  test("concatAddress - return concatenated address", () => {
    const request = {
      unitNumber: "101",
      buildingNumber: "Level 6",
      postcode: "2060",
      state: "NSW",
      street: "146 Arthur Street",
      suburb: "North Sydney"
    };
    const response = "101 Level 6 146 Arthur Street North Sydney NSW 2060";
    expect(propertyService.concatAddress(request)).toEqual(response);
  });

  test("concatAddress - return concatenated address when there is no buildingNumber", () => {
    const request = {
      unitNumber: "101",
      postcode: "2060",
      state: "NSW",
      street: "146 Arthur Street",
      suburb: "North Sydney"
    };
    const response = "101  146 Arthur Street North Sydney NSW 2060";
    expect(propertyService.concatAddress(request)).toEqual(response);
  });

  test("concatAddress - return empty result", () => {
    const request = {};
    const response = propertyService.concatAddress(request);
    expect(response.trim()).toEqual("");
  });

});
