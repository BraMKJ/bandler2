import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../../elements/Wrapper/Wrapper'
import EditIcon from '../../assets/images/icons/edit.svg'
import CrossIcon from '../../assets/images/icons/cross.svg'
import UploadIcon from '../../assets/images/icons/upload-to-cloud.svg'
import BackIcon from '../../assets/images/icons/arrow-left.svg'
import './Song.scss'

export default class Song extends Component {

  handleEditModeOn() {
    this.props.onTurnOnEditMode()
  }

  handleEditModeOff() {
    this.props.onTurnOffEditMode()
  }

  handleNameChange(event) {
    this.props.onUpdateSingleName(event.target.value)
  }

  handleArtistChange(event) {
    this.props.onUpdateSingleArtist(event.target.value)
  }

  handleStatusChange(event) {
    this.props.onUpdateSingleStatus(event.target.value)
  }

  handleDurationChange(event) {
    this.props.onUpdateSingleDuration(event.target.value)
  }

  handleNotesChange(event) {
    this.props.onUpdateSingleNotes(event.target.value)
  }

  handleClearSingle() {
    this.props.onClearSingle()
  }

  render() {
    const song = this.props.song
    const statuses = this.props.statuses
    return (
      <Wrapper>
        <div className="song">
          <div className="tile tile__title">
            {
              !song.editMode ?
                <div className="static-content">
                  <h3>{song.name}</h3>
                  <Link
                    className ="button button__back"
                    to="/songs"
                    onClick={() => this.handleClearSingle()}
                  >
                    <div className="button__wrapper">
                      <img src={BackIcon} alt="Back to songs"/>
                    </div>
                  </Link>
                  <button
                    className="button button__edit-song"
                    onClick={() => this.handleEditModeOn()}
                  >
                    <div className="button__wrapper">
                      <img src={EditIcon} alt="Edit song"/>
                    </div>
                  </button>
                </div> :
                <div className="edit-mode">
                  <label htmlFor="songName">Name:</label>
                  <input id="songName" type="text" value={song.name} onChange={event => this.handleNameChange(event)}/>
                </div>
            }
          </div>
          <div className="tile">
            {
              !song.editMode ?
                song.artist :
                <div className="edit-mode">
                  <label htmlFor="songArtist">Artist:</label>
                  <input id="songArtist" type="text" value={song.artist} onChange={event => this.handleArtistChange(event)}/>
                </div>
            }
          </div>
          <div className="tile">
            {
              !song.editMode ?
                song.status :
                <div className="edit-mode">
                  <label htmlFor="songStatus">Status:</label>
                  <select id="songStatus" type="text" value={song.status} onChange={event => this.handleStatusChange(event)}>
                    { statuses &&
                      statuses.map((status, index) => {
                          return <option value={status} key={index}>{status}</option>
                        }
                      )
                    }
                  </select>
                </div>
            }
          </div>
          <div className="tile">
            {
              !song.editMode ?
                song.duration :
                <div className="edit-mode">
                  <label htmlFor="songDuration">Duration:</label>
                  <input
                    id="songDuration"
                    type="text" value={song.duration}
                    onChange={event => this.handleDurationChange(event)}/>
                </div>
            }
          </div>
          <div className="tile">
            {
              !song.editMode ?
                <div dangerouslySetInnerHTML={{ __html: song.notes }}></div> :
                <div className="edit-mode">
                  <label htmlFor="songNotes">Notes:</label>
                  <textarea
                    id="songNotes"
                    name="song-notes"
                    cols="30"
                    rows="10"
                    value={song.notes}
                    onChange={event => this.handleNotesChange(event)}>
                  </textarea>
                </div>
            }
          </div>
          {
            song.editMode &&
            <div className="tile tile__controls">
              <button className="button button__cancel">
                <div
                  className="button__wrapper"
                  onClick={() => this.handleEditModeOff()}>
                  <img src={CrossIcon} alt="Cancel changes"/>
                  <span>Cancel</span>
                </div>
              </button>
              <button
                className="button button__save"
                onClick={() => this.props.onUpdateSong(
                  this.props.song.id,
                  this.props.song.name,
                  this.props.song.artist,
                  this.props.song.status,
                  this.props.song.duration,
                  this.props.song.notes
                )}>
                <div className="button__wrapper">
                  <img src={UploadIcon} alt="Save changes"/>
                  <span>Save changes</span>
                </div>
              </button>
            </div>
          }
        </div>
      </Wrapper>
    )
  }
}
