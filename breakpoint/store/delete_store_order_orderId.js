import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
        }
    ]
};

export default function () {
    http.del('https://petstore.swagger.io/#/store/deleteOrder');
    sleep(1);
}