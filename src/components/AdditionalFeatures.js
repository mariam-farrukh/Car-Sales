import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {BUY_FEATURE, buyFeature} from '../store/actions';
import {connect} from 'react-redux'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} 
            buyFeature={props.buyFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
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
)(AdditionalFeatures);
