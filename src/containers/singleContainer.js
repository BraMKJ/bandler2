import { connect } from 'react-redux'
import {
  updateSong,
  updateSingleNameInput,
  updateSingleArtistInput,
  updateSingleDurationInput,
  updateSingleNotesInput,
  updateSingleStatusInput
} from '../actions/updateSong'
import { turnOnEditMode, turnOffEditMode } from '../actions/editMode'
import { clearSingle } from '../actions/getSingle'
import { getSong } from '../selectors/getSong'
import Song from '../components/Song/Song'

const mapStateToProps = state => {
  return {
    song: getSong(state),
    statuses: state.addSong.statuses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateSong: (songKey,
                   name,
                   artist,
                   status,
                   duration,
                   notes) => {
      dispatch(updateSong(songKey, name, artist, status, duration, notes))
      dispatch(turnOffEditMode())
    },
    onUpdateSingleName: (newValue) => dispatch(updateSingleNameInput(newValue)),
    onUpdateSingleArtist: (newValue) => dispatch(updateSingleArtistInput(newValue)),
    onUpdateSingleStatus: (newValue) => dispatch(updateSingleStatusInput(newValue)),
    onUpdateSingleDuration: (newValue) => dispatch(updateSingleDurationInput(newValue)),
    onUpdateSingleNotes: (newValue) => dispatch(updateSingleNotesInput(newValue)),
    onTurnOnEditMode: () => dispatch(turnOnEditMode()),
    onTurnOffEditMode: () => dispatch(turnOffEditMode()),
    onClearSingle: () => dispatch(clearSingle())
  }
}

const SingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Song)

export default SingleContainer