import {
	css
} from 'styled-components';

export default {

	flexStyle: css `
		display: flex;
		flex-wrap: wrap;
	`,

	flexColumn: css `
		flex-direction: column;
	`,


	flex(col = null) {
		let style = this.flexStyle;

		if (col) {
			style += this.flexColumn;
		}

		return style;
	},

	center: css `
		align-content: center;
		align-items: center;
		text-align: center;
	`,

	primaryColor: css `
		border: 1px solid #09538D;
		background-color: #09538D;
	`,

	backgroundColor: css `
		background-color: #D9D9D1;
	`,

	navColor: css `
		border: 1px solid #2D94A7;
		background-color: #2D94A7;
	`,

	dangerColor: css `
		border: 1px solid #DA5957;
		background-color: #DA5957;
	`,

	unknownColor: css `
		border: 1px solid #D9D9D1;
		background-color: #D9D9D1;
	`
}