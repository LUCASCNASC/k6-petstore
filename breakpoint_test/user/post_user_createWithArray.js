import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

//Creates list of users with given input array
export default function(){
    http.post('https://petstore.swagger.io/#/user/createUsersWithArrayInput');
    sleep(1);
}