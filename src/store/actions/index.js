export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const BUY_FEATURE = 'BUY_FEATURE';

export const removeFeature = item => {
    return {type: REMOVE_FEATURE, payload: item};
};

export const buyFeature = item => {
    return { type: BUY_FEATURE, payload: item};
};