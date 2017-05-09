import React from 'react';
import PropTypes from 'prop-types';
import DialogForm from './DialogForm'

const AddDialog = (props) => {
  return (
    <div>
      <DialogForm {...props}/>
    </div>
  );
}

AddDialog.propTypes = {
  newEmployee: PropTypes.object
}

export default AddDialog;
