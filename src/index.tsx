import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer } from "miragejs"

// createServer mirageJS
createServer({
  routes() {
    this.namespace = "api"
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: 'Transction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          date: new Date()
        },
      ]
    })
  }
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
