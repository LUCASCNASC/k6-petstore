import http from 'k6/http'; 
import { sleep, check } from 'k6';

export const options = {
    vus: 1,
    duration: '30s'
}

export default function(){
    group('requisição todos', function(){
        const res = http.get('https://petstore.swagger.io/#/user/getUserByName');
        sleep(0.5);
    });
}