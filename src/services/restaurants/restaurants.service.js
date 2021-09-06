import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

// function untuk transform result key menjadi camelcase
// modif datanya juga
// && membuat variabel baru dari data yang di map
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    //mutasi variable foto
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      // me return semua data dari hasil map dengan ...
      ...restaurant,
      // membuat variabel baru dari variabel yang sudah ada
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

// // camelize digunakan untuk mengubah keys object menjadi camelcase
// restaurantRequest()
//   .then(restaurantsTransform)
//   .then((transformedResponse) => {
//     console.log(transformedResponse);
//   })
//   .catch((err) => console.log("ERROR : ", err));
