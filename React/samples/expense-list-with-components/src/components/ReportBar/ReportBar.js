import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ReportBar extends PureComponent {
    render() {
        const {totalItems, totalAmount, flag, handleClick} = this.props;

        return (
            <div>
                <p>There are {totalItems} expenses</p>
                <p>The total amount of the expenses is {totalAmount}</p>
            </div>
        );
    }
}

ReportBar.propTypes = {
    totalItems: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired
}

export default ReportBar;