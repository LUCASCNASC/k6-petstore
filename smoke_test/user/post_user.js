import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Create user
export default function(){
    http.post('https://petstore.swagger.io/#/user/createUser');
    sleep(1);
}