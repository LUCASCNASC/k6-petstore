import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Add a new pet to the store
export default function(){
    http.post('https://petstore.swagger.io/#/pet/addPet');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}