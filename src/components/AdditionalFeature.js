import React from 'react';
import {BUY_FEATURE, buyFeature} from '../store/actions';
import {connect} from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => 
        props.buyFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
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
  { BUY_FEATURE, buyFeature }
)(AdditionalFeature);