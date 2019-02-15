import {createSelector} from 'reselect'

const currentSong = state => state.song

export const getSong = createSelector(
  currentSong, song => song
)