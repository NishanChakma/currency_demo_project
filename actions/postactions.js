import {DETAILS_POST} from './type';

export const apiData = (currency, description) => dispatch => {
  console.log('>>>>>>>>>>>>>>', currency, description);
  fetch(`https://quotes.instaforex.com/api/quotesTick?m=json&q=${currency}`)
    .then(response => response.json())
    .then(res => {
      let data = res;
      data.push(description);
      dispatch({
        type: DETAILS_POST,
        payload: data,
      });
    });
};
