import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends PureComponent {
    render() {
        const {filterInput, handleFilter} = this.props;

        return (
            <input type="text" value={filterInput} onChange={handleFilter} placeholder="Filter data by text" />
        );
    }
}

SearchBar.propTypes = {
    filterInput: PropTypes.string,
    handleFilter: PropTypes.func
}

export default SearchBar;