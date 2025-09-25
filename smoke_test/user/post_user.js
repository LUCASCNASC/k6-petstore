import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Create user
export default function(){
    http.post('https://petstore.swagger.io/#/user/createUser');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}