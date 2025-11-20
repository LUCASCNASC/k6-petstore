import http from 'k6/http'; 
import { sleep, check } from 'k6';

export const options = {
    vus: 1,
    duration: '30s'
}

export default function(){
    group('requisição todos', function(){
        const response1 = http.post('https://petstore.swagger.io/#/user/createUsersWithListInput');
        sleep(0.5);
    });
}