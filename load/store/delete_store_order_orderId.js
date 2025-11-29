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
    ],
    thresholds: {
    http_req_duration:['p(95)<100'],
    http_req_duration:['max<200'],
    http_req_failed: ['rate<0.1'], //tava de falha, nes caso tem que ser inferior a 0.01 das solicitações
    http_reqs: ['count>20'], //quantas solicitações quero, neste caso não pode ser menos de 20
    http_reqs: ['rate>4'], //quantas solicitações por segundo, neste caso não pode ser menos de 4 por segundo
    vus: ['value>9'], //o mínimo de usuários usados ao mesmo tempo
    checks: ['rate>=0.98']
  }
};

export default function () {
    const res = http.del('https://petstore.swagger.io/#/store/deleteOrder');
    sleep(1);
    check(res, {
        'status is 200': (r) => r.status === 200
    });
}