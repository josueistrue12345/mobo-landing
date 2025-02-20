import React from 'react';

const Heading = ({ level = 'h2', children, className }) => {
    const Tag = level;
    return <Tag className={className}>{children}</Tag>;
};

export default Heading;
