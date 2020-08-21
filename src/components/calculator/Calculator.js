import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { fetchRates } from '../../actions/index';

import './calculator.scss';

const mapStateToProps = (state) => ({
    rates: state?.rates,
    loading: state?.loading,
});

const mapDispatchToProps = {
    fetchRates,
};

const required = (value) => (value ? undefined : 'Это поле обязательное');
const calulateConversion = (val, rate) => {
    return Number(+val / rate).toFixed(2);
};

function Calculator({ rates, fetchRates, loading }) {
    const [inputVal, setInputVal] = useState('');
    const onSubmit = (values) => {
        fetchRates();
        setInputVal(values.sum);
    };

    return (
        <div className={`calculator ${loading ? 'disabled' : null}`}>
            <h2 className="calculator__heading">Калькулятор</h2>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <Field name="sum" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input
                                        {...input}
                                        type="text"
                                        placeholder="Сумма, грн"
                                        className={`form__input ${meta.error && meta.touched ? 'err' : null}`}
                                    />
                                    {meta.error && meta.touched && (
                                        <small className="form__input-err">{meta.error}</small>
                                    )}
                                </div>
                            )}
                        </Field>
                        {rates && inputVal && (
                            <p className="form__result">
                                <span className="form__input-val">{inputVal} грн </span>
                                по курсу
                                <span className="form__rate"> {Number(rates[0].buy).toFixed(1)}$ </span>
                                это
                                <span className="form__conversion">
                                    {' '}
                                    {calulateConversion(inputVal, Number(rates[0].buy))}$
                                </span>
                            </p>
                        )}
                        <button className="form__btn">Посчитать</button>
                    </form>
                )}
            ></Form>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
