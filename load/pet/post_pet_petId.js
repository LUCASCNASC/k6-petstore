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
    const res = http.post('https://petstore.swagger.io/#/pet/updatePetWithForm');
    sleep(1);
    check(res, {
        'status is 200': (r) => r.status === 200
    });
}