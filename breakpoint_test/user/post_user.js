import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

//Create user
export default function(){
    http.post('https://petstore.swagger.io/#/user/createUser');
    sleep(1);
}