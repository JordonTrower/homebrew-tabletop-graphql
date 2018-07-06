import styled from 'styled-components';
import commonStyles from '../../Styles/CommonStyles';

export default styled.div `
	width: 100vw;
	height: calc(100vh - 77px);
	align-items: center;

	margin: 0;
	padding: 0;

	${commonStyles.flex('column')}
	${commonStyles.backgroundColor}
`