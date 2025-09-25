import http from 'k6/http';
import {sleep, check} from 'k6';

export const options = {
    vus: 1,
    duration: '1m'
}

//Creates list of users with given input array
export default function(){
    http.post('https://petstore.swagger.io/#/user/createUsersWithListInput');
    sleep(1);
    check(res, {
        'status code é 200': (r) => r.status === 200
    });
}