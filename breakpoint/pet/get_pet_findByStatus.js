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
    http.get('https://petstore.swagger.io/#/pet/findPetsByStatus');
    sleep(1);
}