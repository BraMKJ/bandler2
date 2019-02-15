import { connect } from 'react-redux'
import {
  getSongs,
  removeSongRemovedEvent,
  removeSongAddedEvent,
  watchSongAddedEvxent,
  watchSongRemovedEvent } from '../actions/getSongs'
import { removeSong } from '../actions/removeSong'
import { clearSongList } from '../actions/clearSongList'
import { clearAddSong } from '../actions/clearAddSong'
import { getSingle } from '../actions/getSingle'
import { showModal, hideModal } from '../actions/toggleModal'
import { getVisibleSongs} from '../selectors/getVisibleSongs'
import SongList from '../components/SongList/SongList'

const mapStateToProps = state => {
  return {
    songs: getVisibleSongs(state),
    addSongModal: Boolean(state.modal.addSong)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWatchSongAddedEvent: () => dispatch(watchSongAddedEvent()),
    onRemoveSongAddedEvent: () => dispatch(removeSongAddedEvent()),
    onWatchSongRemovedEvent: () => dispatch(watchSongRemovedEvent()),
    onRemoveSongRemovedEvent: () => dispatch(removeSongRemovedEvent()),
    onGetSongs: () => dispatch(getSongs()),
    onShowAddSongModal: () => dispatch(showModal('addSong')),
    onHideAddSongModal: () => dispatch(hideModal('addSong')),
    onRemoveSong: (songKey) => dispatch(removeSong(songKey)),
    onClearSongList: () => dispatch(clearSongList()),
    onClearAddSong: () => dispatch(clearAddSong()),
    onGetSingle: (songKey) => dispatch(getSingle(songKey)),
  }
}

const SongsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList)

export default SongsContainer
