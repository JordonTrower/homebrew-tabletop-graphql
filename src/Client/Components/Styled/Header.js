import styled from 'styled-components';
import commonStyles from '../../Styles/CommonStyles';

export default styled.header `
	position: sticky;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 75px;
	color: white;
	justify-content: space-between;
	> * {
		padding-left: 15px;
		padding-right: 15px;
	}

	${commonStyles.primaryColor};
	${commonStyles.flex()}
	${commonStyles.center}
`