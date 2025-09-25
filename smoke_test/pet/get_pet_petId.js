import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Find pet by ID
export default function(){
    http.get('https://petstore.swagger.io/#/pet/getPetById');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}