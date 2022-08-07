import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const CITIES_FEATURE_KEY = 'cities';

/*
 * Update these interfaces according to your requirements.
 */
export interface CitiesEntity {
  id: number;
}

export interface CitiesState extends EntityState<CitiesEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const citiesAdapter = createEntityAdapter<CitiesEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchCities())
 * }, [dispatch]);
 * ```
 */
export const fetchCities = createAsyncThunk(
  'cities/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getCitiess()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialCitiesState: CitiesState = citiesAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const citiesSlice = createSlice({
  name: CITIES_FEATURE_KEY,
  initialState: initialCitiesState,
  reducers: {
    add: citiesAdapter.addOne,
    remove: citiesAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state: CitiesState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchCities.fulfilled,
        (state: CitiesState, action: PayloadAction<CitiesEntity[]>) => {
          citiesAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchCities.rejected, (state: CitiesState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const citiesReducer = citiesSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(citiesActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const citiesActions = citiesSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllCities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = citiesAdapter.getSelectors();

export const getCitiesState = (rootState: unknown): CitiesState =>
  rootState[CITIES_FEATURE_KEY];

export const selectAllCities = createSelector(getCitiesState, selectAll);

export const selectCitiesEntities = createSelector(
  getCitiesState,
  selectEntities
);
