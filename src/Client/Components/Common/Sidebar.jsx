import React from 'react';
import slug from 'slugify';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import StyledSidebar from '../Styled/Sidebar';

const Sidebar = ({ urls }) => (
	<StyledSidebar>
		{urls.map(site => <Link to={slug(site)}>{site}</Link>)}
	</StyledSidebar>
);

Sidebar.propTypes = {
	urls: propTypes.arrayOf(propTypes.string)
};

Sidebar.defaultProps = {
	urls: []
};

export default Sidebar;
