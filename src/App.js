import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {BUY_ITEM, REMOVE_FEATURE, remove, buy} from './store';
import {connect} from 'react-redux'


const App = props => {

  const removeFeature = item => {
    console.log('remove', item);
    props.remove(item);
  };

  const buyItem = item => {
    console.log('buy', item);
    props.buy(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
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
  { BUY_ITEM, REMOVE_FEATURE, remove, buy }
)(App);
