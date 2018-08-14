var Validator = require("jsonschema").Validator;
var v = new Validator();

var payloadSchema = {
  id: "/payloadSchemaId",
  type: "object",
  required: true,
  properties: {
    payload: {
      type: "array",
      required: true,
      minItems: 1,
      items: { $ref: "/propertySchemaId" }
    }
  },
  additionalProperties: true
};

var propertySchema = {
  id: "/propertySchemaId",
  type: "object",
  required: true,
  properties: {
    type: {
      type: "string",
      required: true
    },
    workflow: {
      type: "string",
      required: true
    },
    address: {
      type: "object",
      required: true,
      $ref: "/addressSchemaId"
    }
  },
  additionalProperties: true
};

var addressSchema = {
  id: "/addressSchemaId",
  type: "object",
  properties: {
    street: {
      type: "string",
      required: true
    },
    suburb: {
      type: "string",
      required: true
    },
    state: {
      type: "string",
      required: true
    }
  },
  additionalProperties: true
};

async function validateSchema(p) {
  await v.addSchema(payloadSchema, "/propertySchemaId");
  await v.addSchema(payloadSchema, "/addressSchemaId");
  await v.addSchema(propertySchema, "/addressSchemaId");
  await v.addSchema(addressSchema, "/addressSchemaId");
  return "" + v.validate(p, "/payloadSchemaId");
}

module.exports = { validateSchema };
