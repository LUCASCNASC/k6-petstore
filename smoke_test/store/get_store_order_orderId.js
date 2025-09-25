import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '1m'
}

//Finds purchase order by ID
export default function(){
    http.get('https://petstore.swagger.io/#/store/getOrderById');
}