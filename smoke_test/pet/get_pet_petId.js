import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Find pet by ID
export default function(){
    http.get('https://petstore.swagger.io/#/pet/getPetById');
    sleep(1);
}