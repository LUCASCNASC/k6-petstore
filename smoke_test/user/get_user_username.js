import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Get user by username
export default function(){
    http.get('https://petstore.swagger.io/#/user/getUserByName');
    sleep(1);
}