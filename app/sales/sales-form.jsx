import React from 'react';

class SalesForm extends React.Component {
	render() {

		return (
			<form>	
				<input type="text" placeholder="Nome do Produto" />
				<input type="text" placeholder="Valor" />
				<input type="number" placeholder="Quantidade" />

				<button type="submit"> Registrar </button>
			</form>
			);
	}
}

export default SalesForm;