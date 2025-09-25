import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

//Find pet by ID
export default function(){
    http.get('https://petstore.swagger.io/#/pet/getPetById');
    sleep(1);
}