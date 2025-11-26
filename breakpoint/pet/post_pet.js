import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
        }
    ]
};

export default function () {
    http.post('https://petstore.swagger.io/#/pet/addPet');
    sleep(1);
}