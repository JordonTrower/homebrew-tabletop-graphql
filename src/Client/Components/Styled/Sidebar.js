import styled from 'styled-components';
import commonStyles from '../../Styles/CommonStyles';

export default styled.div `
	position: sticky;
	top: 75px;
	left: 0px;
	width: 150px;
	height: calc(100vh - 77px);
	padding: 0;
	margin: 0;

	${commonStyles.flex('column')}
	${commonStyles.primaryColor}
`