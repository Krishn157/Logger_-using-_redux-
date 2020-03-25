import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { serachLogs } from '../../actions/logActions';

const SearchBar = ({ serachLogs }) => {
  const text = useRef('');
  const onChange = e => {
    serachLogs(text.current.value);
  };
  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Logs..'
              ref={text}
              required
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
SearchBar.propTypes = {
  serachLogs: PropTypes.func.isRequired
};

export default connect(null, { serachLogs })(SearchBar);
