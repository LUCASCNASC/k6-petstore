import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Delete purchase order by ID
export default function(){
    http.delete('https://petstore.swagger.io/#/store/deleteOrder');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}