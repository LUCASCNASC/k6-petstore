import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 100 }, // Ramp-up to 100 users over 10 seconds
        { duration: '1m', target: 100 },  // Stay at 50 users for 1 minute
        { duration: '10s', target: 1400 },   // Ramp-down to 0 users over 30 seconds   
        { duration: '3m', target: 1400 }, // Ramp-up to 50 users over 30 seconds
        { duration: '10s', target: 100 },  // Stay at 50 users for 1 minute
        { duration: '3m', target: 100 },   // Ramp-down to 0 users over 30 seconds   
        { duration: '10s', target: 0 }   // Ramp-down to 0 users over 30 seconds
    ]
}

//Logs out currente logged in user session
export default function(){
    http.get('https://petstore.swagger.io/#/user/logoutUser');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}