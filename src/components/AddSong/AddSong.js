import React, { Component } from 'react'
import ModalPanel from '../../elements/Modal/ModalPanel'
import CrossIcon from '../../assets/images/icons/cross.svg'
import UploadIcon from '../../assets/images/icons/upload-to-cloud.svg'
import './AddSong.scss'

export default class AddSong extends Component {

  componentDidMount() {
    this.props.onGetStatuses()
  }

  handleNameChange(event) {
    this.props.onUpdateSongNameInput(event.target.value)
  }

  handleArtistChange(event) {
    this.props.onUpdateSongArtistInput(event.target.value)
  }

  handleStatusChange(event) {
    this.props.onUpdateSongStatusInput(event.target.value)
  }

  render() {
    const statuses = this.props.newSong.statuses
    return (
      <ModalPanel className="modal modal__add-song">
        <div className="modal__header">
          <h2 className="modal__title">Add song</h2>
        </div>
        <div className="modal__content">
          <form>
            <fieldset>
              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="song-name">Name:</label>
                  <input
                    id="song-name"
                    type="text"
                    value={this.props.newSong.name}
                    onChange={event => this.handleNameChange(event)}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="song-artist">Artist:</label>
                  <input
                    id="song-artist"
                    type="text"
                    value={this.props.newSong.artist}
                    onChange={event => this.handleArtistChange(event)}
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="song-status">Status:</label>
                  <select id="song-status" onChange={event => this.handleStatusChange(event)}>
                    { statuses &&
                      statuses.map((status, index) => {
                          return <option value={status} key={index}>{status}</option>
                        }
                      )}
                    }
                  </select>
                </div>
              </div>
            </fieldset>
            <div className="button-group">
              <button
                type="button"
                className="button button__cancel"
                onClick={() => this.props.onHideAddSongModal()}>
                <img src={CrossIcon} alt="Cancel"/>
                <span>Cancel</span>
              </button>
              <button
                type="button"
                className="button button__save"
                onClick={() => this.props.onAddSong(
                this.props.newSong.name,
                this.props.newSong.artist,
                this.props.newSong.selectedStatus
              )}>
                <img src={UploadIcon} alt="Add song"/>
                <span>Add song</span>
              </button>
            </div>
          </form>
        </div>
      </ModalPanel>
    )
  }
}