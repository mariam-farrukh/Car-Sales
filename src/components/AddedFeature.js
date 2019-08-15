import React from 'react';
import {REMOVE_FEATURE, removeFeature} from '../store/actions';
import {connect} from 'react-redux'

const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => 
        props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store,
    car: state.car,
  };
};

export default connect(
  mapStateToProps,
  {REMOVE_FEATURE, removeFeature}
)(AddedFeature);