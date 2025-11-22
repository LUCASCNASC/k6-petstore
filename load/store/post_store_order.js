import http from 'k6/http';
import { sleep } from 'k6';

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
    http.post('https://petstore.swagger.io/#/store/placeOrder');
    sleep(1);
}