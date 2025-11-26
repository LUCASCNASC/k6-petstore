import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        {
            duration: '5m',
            target: 1000
        },
        {
            duration: '24h',
            target: 1000
        },
        {
            duration: '5m',
            target: 0
        }
    ]
};

export default function () {
    http.get('https://petstore.swagger.io/#/user/getUserByName');
    sleep(1);
}