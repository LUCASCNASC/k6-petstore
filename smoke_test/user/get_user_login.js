import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Logs user into the system
export default function(){
    http.get('https://petstore.swagger.io/#/user/loginUser');
    sleep(1);
}