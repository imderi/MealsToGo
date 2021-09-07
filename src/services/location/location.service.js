import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];

    // Jika tidak ada mock value
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  // destructuring object
  // jangan lupa objectnya di camelize
  const formattedResponse = camelize(result);
  // make geometry as object by asigning empty object
  const { geometry = {} } = formattedResponse.results[0];
  // destructuring
  const { lat, lng } = geometry.location;
  // return object
  return { lat, lng, viewport: geometry.viewport };
};
