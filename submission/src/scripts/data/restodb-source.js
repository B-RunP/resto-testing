/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async restoList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    // console.log(responseJson);
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestoDbSource;
