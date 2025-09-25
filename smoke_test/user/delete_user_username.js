import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Delete user
export default function(){
    http.delete('https://petstore.swagger.io/#/user/deleteUser');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}