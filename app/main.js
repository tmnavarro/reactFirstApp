/*
 * Main da aplicação
 * Reune todas as chamadas de dependencias do projeto
 * além de configuração básicas.
 * Obs.: Deve ser compilado com 'browserify'
 *
 * Autor: Túlio Navarro
 *
 */

const React = require('react');
const ReactDOM = require('react-dom');

//Dados de teste
let sales = [
	  { name: 'Cerveja Verde', price: 10.00, ammount: 2}
	, { name: 'Cerveja Vermelha', price: 15.50, ammount: 1}
	, { name: 'Cerveja Capim', price: 5.90, ammount: 4}
];

//Class Principal
const DaySales = React.createClass({ 

	getInitialState: () => {
		return {
			count: 0
			};
	},

	render: () => {
		console.log(this.props.sales);
		return(
			<div>
				<h1>Vendas diarias</h1>
				<SalesTable sales={ this.props.sales }/>
				<SalesForm/>
			</div>
		);
	}

});


const SalesTable = React.createClass({
	render: () => {
		return(
			<table>
				<thead>
					<tr>
						<th>Produto</th>
						<th>Valor</th>
						<th>Quantidade</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<Products/>
				</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td></td>
						<td rowspan="3" class="nova">Valor Total:</td>
						<th>R$..,..</th>
					</tr>
				</tfoot>
			</table>
		);
	}
});

//Class formulário de registro
const SalesForm = React.createClass({
	render: () => {
		return(
			<form>	
				<input type="text" placeholder="Nome do Produto" />
				<input type="text" placeholder="Valor" />
				<input type="number" placeholder="Quantidade" />

				<button type="submit"> Registrar </button>
			</form>	
			);
	}
});

//Class de tbody ta tabela de produtos
const Products = React.createClass({
	render: () => {

		let productNodes = this.sales.map(function (product) {
            return (
            	<tr>
					<td>{product.name}</td>
				</tr>
            	);
        });

		return(
			{productNodes}
		);		
	}
});

/*
const Product = React.createClass({
	return(
		<tr>
		<td> </td>
		</tr>
		);
});*/

//Rederização de template na elemento com id #id-content
ReactDOM.render(
	<DaySales  sales={sales} />,
	document.getElementById('g-content')
);
