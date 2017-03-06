import React from 'react';
import classnames from 'classnames';

const TextArea = ({ field, value,rows, label, error, type, onChange, checkUserExists}) => {
  return(
  	<div className={classnames("form-group", {'has-error':error})}>
  	  	  <label className="control-label">{label}</label>
  	  	<textarea onBlur={checkUserExists} rows={rows} onChange={onChange} name={field} className="form-control" >{value}</textarea>

  	  	  {error && <span className="help-block">{error}</span>}
        </div>
  );
}

TextArea.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkUserExists: React.PropTypes.func
}

TextArea.defaultProps = {
  type: 'textarea'
}

export default TextArea;