import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTechs } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';
const AddTechModal = ({ addTechs }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html: 'Please enter the firstName and lastName',
        classes: 'rounded'
      });
    } else {
      addTechs({
        firstName,
        lastName
      });
      M.toast({
        html: `${firstName} ${lastName} was added as a tech`,
        classes: 'rounded'
      });
      //Clear fields
      setFirstName('');
      setLastname('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lasttname'
              value={lastName}
              onChange={e => setLastname(e.target.value)}
            />
            <label htmlFor='lasttname' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-green btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTechs: PropTypes.func.isRequired
};

export default connect(null, { addTechs })(AddTechModal);
