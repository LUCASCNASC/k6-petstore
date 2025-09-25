import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Deletes a pet by ID
export default function(){
    http.delete('https://petstore.swagger.io/#/pet/deletePet');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}