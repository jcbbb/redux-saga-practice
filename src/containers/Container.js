import React from 'react';
import Calculator from '../components/calculator/Calculator';
import Test from '../components/test/Test';
import Loader from '../components/loader/Loader';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './container.scss';

const mapStateToProps = (state) => ({
    loading: state?.loading,
});

function Container({ loading }) {
    return (
        <div className="container">
            {loading && <Loader />}
            <Switch>
                <Route exact path="/" component={Calculator} />
                <Route path="/test" component={Test} />
            </Switch>
        </div>
    );
}

export default connect(mapStateToProps)(Container);
