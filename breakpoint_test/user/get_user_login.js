import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

//Logs user into the system
export default function(){
    http.get('https://petstore.swagger.io/#/user/loginUser');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}