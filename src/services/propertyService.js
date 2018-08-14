function concatAddress(address) {
  return `${address.unitNumber || ""} ${address.buildingNumber || ""} ${address.street || ""} ${address.suburb || ""} ${address.state || ""} ${address.postcode || ""}`;
}

function filterProperty(property) {
  return property
    .filter(d => d.type === "htv" && d.workflow === "completed")
    .map(d => ({
      concataddress: concatAddress(d.address).trim(),
      type: d.type,
      workflow: d.workflow
    }));
}

module.exports = { filterProperty, concatAddress };
