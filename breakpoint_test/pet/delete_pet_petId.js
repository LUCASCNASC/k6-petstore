import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

//Deletes a pet by ID
export default function(){
    http.delete('https://petstore.swagger.io/#/pet/deletePet');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}