import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

//Get user by username
export default function(){
    http.get('https://petstore.swagger.io/#/user/getUserByName');
    sleep(1);
}