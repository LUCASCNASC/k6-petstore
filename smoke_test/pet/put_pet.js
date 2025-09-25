import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Update an existing pet
export default function(){
    http.put('https://petstore.swagger.io/#/pet/updatePet');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}