import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Delete user
export default function(){
    http.delete('https://petstore.swagger.io/#/user/deleteUser');
    sleep(1);
}