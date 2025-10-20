# 🐾 k6-petstore

Este repositório contém testes de performance para APIs do tipo **Petstore** utilizando o [k6](https://k6.io/), uma poderosa ferramenta de código aberto para testes de carga e performance.

---

## 🚀 Sobre o projeto

O objetivo deste projeto é simular cenários de uso real para validar a performance, escalabilidade e estabilidade da API Petstore. 

Os testes são escritos em **JavaScript** e visam:
- Avaliar o tempo de resposta das principais rotas;
- Identificar gargalos e limites de throughput;
- Garantir que a API se mantém estável sob diferentes cargas de usuários.

---

## 📦 Estrutura do projeto

```
k6-petstore/
├── scripts/
│   └── petstore.js   # Script principal de teste
├── data/
│   └── users.json    # Dados de entrada (opcional)
├── results/
│   └── ...           # Relatórios gerados
├── README.md
└── package.json      # Dependências (se necessário)
```

---

## ⚙️ Como executar os testes

1. **Pré-requisitos:**
   - [k6 instalado](https://k6.io/docs/getting-started/installation/)
   - Node.js (opcional, para utilitários ou pré-processamento)

2. **Clone o repositório:**
   ```bash
   git clone https://github.com/LUCASCNASC/k6-petstore.git
   cd k6-petstore
   ```

3. **Execute um teste básico:**
   ```bash
   k6 run scripts/petstore.js
   ```

4. **Parâmetros adicionais:**
   - Para rodar testes com diferentes quantidades de usuários virtuais (VU) e duração:
     ```bash
     k6 run --vus 50 --duration 2m scripts/petstore.js
     ```

---

## 📊 Relatórios

- Os resultados do teste são exibidos no terminal.
- Para gerar relatórios em HTML, utilize:
  ```bash
  k6 run scripts/petstore.js --out json=results/result.json
  # Depois, use ferramentas como k6-reporter para transformar em HTML.
  ```

---

## 🛠️ Principais rotas testadas

- `GET /pet`
- `POST /pet`
- `GET /pet/{petId}`
- `PUT /pet`
- `DELETE /pet/{petId}`

*(Adapte conforme as rotas presentes no seu script!)*

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests com melhorias, sugestões de cenários de teste ou correções!
---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
---

## ✉️ Contato

[![Linkedin](https://img.shields.io/badge/-LinkedIn-0A66C2?logo=linkedin&logoColor=white&style=flat-square)](https://www.linkedin.com/in/lucascamargo-qa/)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/LUCASCNASC)

---

*Feito por [Lucas Camargo](https://github.com/LUCASCNASC)*