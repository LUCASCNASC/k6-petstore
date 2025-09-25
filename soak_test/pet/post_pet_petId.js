import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 400 }, // Ramp-up to 400 users over 2 minutes
        { duration: '3h56m', target: 400 },  // Stay at 50 users for 1 minute
        { duration: '2m', target: 0 }
    ]
}

//Updates a pet in the store with form data
export default function(){
    http.post('https://petstore.swagger.io/#/pet/updatePetWithForm');
    sleep(1);
}