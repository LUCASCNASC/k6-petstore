import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Places an order for a pet
export default function(){
    http.post('https://petstore.swagger.io/#/store/placeOrder');
}