import SalesTable from './sales-table';
import SalesForm from './sales-form';
import React from 'react';

class DaySales extends React.Component {
	render() {
		return (
			<div>
				<h1>Vendas diarias</h1>
				<SalesTable sales={ this.props.sales }/>
				<SalesForm />
			</div>
			);
	}

}

export default DaySales;

