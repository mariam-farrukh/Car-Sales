import React from 'react';
import {BUY_ITEM, REMOVE_FEATURE, remove, buy} from './store';
import {connect} from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { BUY_ITEM, REMOVE_FEATURE, remove, buy }
)(AdditionalFeature);
