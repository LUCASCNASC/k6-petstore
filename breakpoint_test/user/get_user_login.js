import http from 'k6/http';

export const options = {
    stages: [
        { duration: '5m', target: 100 }, // Ramp-up to 400 users over 5 minutes
        { duration: '10m', target: 100 },  // Stay at 400 users for 10 minutes
        { duration: '5m', target: 0 }
    ]
}

//Logs user into the system
export default function(){
    http.get('https://petstore.swagger.io/#/user/loginUser');
}