import React from 'react';
import { useLocation } from 'react-router-dom';

import './test.scss';

function Test() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    return (
        <div className="test">
            <h2 className="test__heading">Параметры:</h2>
            <p>id: {params.get('id')}</p>
            <p>date: {params.get('date')}</p>
        </div>
    );
}

export default Test;
