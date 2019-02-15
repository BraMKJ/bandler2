import {createSelector} from 'reselect'

const getVisibilityFilter = state => state.visibilityFilter
const getSongs = state => state.songs.songs

export const getVisibleSongs = createSelector(
  [getVisibilityFilter, getSongs],
  (visibilityFilter, songs) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return songs
      case 'SHOW_ACTIVE':
        return songs.filter(song => song.status === 'active')
      case 'SHOW_INACTIVE':
        return songs.filter(song => song.status === 'inactive')
      case 'SHOW_IN_PROGRESS':
        return songs.filter(song => song.status === 'in progress')
      case 'SHOW_NICE_TO_HAVE':
        return songs.filter(song => song.status === 'nice to have')
      default:
        return songs
    }
  }
)