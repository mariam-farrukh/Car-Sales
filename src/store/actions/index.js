export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const BUY_ITEM = 'BUY_ITEM';

export const remove = item => {
    return {type: REMOVE_FEATURE, payload: item};
};

export const buy = item => {
    return { type: BUY_ITEM, payload: item};
};