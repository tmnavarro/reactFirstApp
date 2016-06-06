import Products from './products';
import React from 'react';

class SalesTable extends React.Component {
	render(){
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
}

export default SalesTable;