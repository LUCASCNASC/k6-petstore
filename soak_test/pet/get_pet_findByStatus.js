import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 400 }, // Ramp-up to 400 users over 2 minutes
        { duration: '3h56m', target: 400 },  // Stay at 50 users for 1 minute
        { duration: '2m', target: 0 }
    ]
}

//Finds Pets by status
export default function(){
    http.get('https://petstore.swagger.io/#/pet/findPetsByStatus');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}