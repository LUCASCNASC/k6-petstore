import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        {
            duration: '5m',
            target: 100
        },
        {
            duration: '30m',
            target: 100
        },
        {
            duration: '5m',
            target: 0
        }
    ]
};

export default function () {
    http.get('https://petstore.swagger.io/#/user/logoutUser');
    sleep(1);
}