import {
  createReducer,
  on,
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

const initialState: UserState = {
  maskUserName: true,
};

export const UserReducer = createReducer(
  initialState,
  on(createAction('[User] Mask User name'), (state) => {
    console.log({ state });
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  (state) => state.maskUserName
);

export interface UserState {
  maskUserName: boolean;
}
