import React from 'react';
import { ReactComponent as LoaderIcon } from '../../assets/loader.svg';

import './loader.scss';

const Loader = () => (
    <div className="loader">
        <LoaderIcon />
    </div>
);

export default Loader;
