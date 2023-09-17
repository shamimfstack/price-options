// import React from 'react';
import propTypes from 'prop-types';

const Link = ({route}) => {
    const {name, path} = route;
    return (
        <div>
            <li className="mr-6 px-6 hover:bg-yellow-500">
            <a href={route.path}>{name}</a>
            </li>
        </div>
    );
};

Link.propTypes = {
    route: propTypes.object.isRequired
}

export default Link;