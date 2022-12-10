/* eslint-disable max-len */
import {createCustomerReviewTemplate} from '../views/templates/template-creator';

const DetailHelper = {
  eachCustomersReview({customerReviews}) {
    let customerReviewsString = '';
    customerReviews.forEach((customerReview) => {
      customerReviewsString += createCustomerReviewTemplate(customerReview);
    });

    return customerReviewsString;
  },
};

export default DetailHelper;
