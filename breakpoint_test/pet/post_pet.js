import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

//Add a new pet to the store
export default function(){
    http.post('https://petstore.swagger.io/#/pet/addPet');
    sleep(1);
}