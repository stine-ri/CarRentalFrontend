import React from 'react';
import PaymentForm from './PaymentForm';
import PaymentHistory from './PaymentHistory';
import styles from './PaymentPage.module.css';
var PaymentPage = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.container },
            React.createElement("div", { className: styles.gridContainer },
                React.createElement("div", { className: styles.gridItem },
                    React.createElement(PaymentForm, null)),
                React.createElement("div", { className: styles.gridItem },
                    React.createElement(PaymentHistory, null))))));
};
export default PaymentPage;
