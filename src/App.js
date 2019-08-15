import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {BUY_FEATURE, REMOVE_FEATURE, removeFeature, buyFeature} from './store/actions';
import {connect} from 'react-redux'


const App = () => {

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures car={state.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store,
    additionalPrice: state.additionalPrice,
    car: state.car,
  };
};

export default connect(
  mapStateToProps,
  { BUY_FEATURE, REMOVE_FEATURE, removeFeature, buyFeature }
)(App);
