/*
 * Main da aplicação
 * Reune todas as chamadas de dependencias do projeto
 * além de configuração básicas.
 * Obs.: Deve ser compilado com 'browserify'
 */
let React = require('react');
let ReactDOM = require('react-dom');

//Class Principal
const DaySales = React.createClass({ 
	render: () => {
		return(
			<div>
				<h1>Vendas diarias</h1>
				<SalesTable/>
				<SalesForm/>
			</div>
		);
	}

});

//Class tabela de produtos registrados
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
					<tr>
						<td></td>
					</tr>
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

//Rederização de template na elemento com id #id-content
ReactDOM.render(
	<DaySales/>,
	document.getElementById('g-content')
);
