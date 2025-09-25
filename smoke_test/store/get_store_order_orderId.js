import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Finds purchase order by ID
export default function(){
    http.get('https://petstore.swagger.io/#/store/getOrderById');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}