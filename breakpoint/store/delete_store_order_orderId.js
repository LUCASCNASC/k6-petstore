import http from 'k6/http';
import { sleep } from 'k6';
import { Counter, Trend } from 'k6/metrics'; //custom metric

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
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

let myCounter = new Counter('my_counter');  //custom metric
let newsPageResponseTrend = new Trend('response_time_news_page');  //custom metric

export default function () {
    let res = http.del('https://petstore.swagger.io/#/store/deleteOrder');
    sleep(1);
    check(res, {
        'status is 200': (r) => r.status === 200
    });

    res = http.get('https://test.k6.io/news.php');
    newsPageResponseTrend.add(res.timings.duration);
}