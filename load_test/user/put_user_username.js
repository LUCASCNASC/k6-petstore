import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    stages: [
        { duration: '5m', target: 100 }, // Ramp-up to 400 users over 5 minutes
        { duration: '10m', target: 100 },  // Stay at 400 users for 10 minutes
        { duration: '5m', target: 0 }
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