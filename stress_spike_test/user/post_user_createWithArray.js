import http from 'k6/http';

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

//Creates list of users with given input array
export default function(){
    http.post('https://petstore.swagger.io/#/user/createUsersWithArrayInput');
}