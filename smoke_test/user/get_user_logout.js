import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Logs out currente logged in user session
export default function(){
    http.get('https://petstore.swagger.io/#/user/logoutUser');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}