import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Returns pet inventories by status
export default function(){
    http.get('https://petstore.swagger.io/#/store/getInventory');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}