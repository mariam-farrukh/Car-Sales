import React from 'react';
import {BUY_ITEM, REMOVE_FEATURE, remove, buy} from './store';
import {connect} from 'react-redux'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
  };
};

export default connect(
  mapStateToProps,
  { BUY_ITEM, REMOVE_FEATURE, remove, buy }
)(AddedFeature);