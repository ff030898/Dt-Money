import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions : [
        {
          id: 1,
          title: 'Freelance Web Site',
          type: 'deposit',
          category: 'Dev',
          amount: 6800,
          createdAt: new Date('2022-04-25 23:18:00'),
        },
        {
          id: 2,
          title: 'Parcela',
          type: 'withdraw',
          category: 'Casa',
          amount: 1130,
          createdAt: new Date('2022-04-25 23:20:00'),
        }
      ],
    })
  },

  routes() {
    this.namespace = "api";
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
