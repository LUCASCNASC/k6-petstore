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
    const res = http.del('https://petstore.swagger.io/#/user/deleteUser');
    sleep(1);
    check(res, {
        'status is 200': (r) => r.status === 200
    });
}