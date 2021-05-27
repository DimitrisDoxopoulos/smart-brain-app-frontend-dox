import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className="fs-3 text-white">
                { `${name}, your current entry count is... ` }
            </div>
            <div className="fs-1 text-white">
                { entries }
            </div>
        </div>
    )
}

export default Rank;