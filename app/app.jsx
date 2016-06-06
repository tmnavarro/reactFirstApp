/*
 * Main da aplicação
 * Reune todas as chamadas de dependencias do projeto
 * além de configuração básicas.
 * Obs.: Deve ser compilado com 'browserify'
 *
 * Autor: Túlio Navarro
 *
 */
import DaySales from './sales/day-sales';
import React from 'react';
import ReactDOM from 'react-dom';


//Dados de teste
let sales = [
	  { name: 'Cerveja Verde', price: 10.00, ammount: 2}
	, { name: 'Cerveja Vermelha', price: 15.50, ammount: 1}
	, { name: 'Cerveja Capim', price: 5.90, ammount: 4}
];

//Rederização de template na elemento com id #id-content
ReactDOM.render(
    <DaySales sales={sales}/>,
    document.querySelector('.g-content')
);