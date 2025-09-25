import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Places an order for a pet
export default function(){
    http.post('https://petstore.swagger.io/#/store/placeOrder');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}