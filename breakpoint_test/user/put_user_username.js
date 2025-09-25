import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }
    ]
}

//Updated user
export default function(){
    http.put('https://petstore.swagger.io/#/user/updateUser');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}