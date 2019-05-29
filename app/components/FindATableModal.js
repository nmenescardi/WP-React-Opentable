import React, { Component, Fragment } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class FindATableModal extends Component {
  render() {
    const { modalOpen, closeFindATableModal, restaurant } = this.props;

    return (
      modalOpen && (
        <MuiThemeProvider>
          <Fragment>
            <Dialog
              open={modalOpen}
              onClose={closeFindATableModal}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                {restaurant && `Reservation at ${restaurant}`}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please, confirm information to proceed with the reservation.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          */}

                <RaisedButton
                  label="Close"
                  primary={true}
                  onClick={closeFindATableModal}
                />
              </DialogActions>
            </Dialog>
          </Fragment>
        </MuiThemeProvider>
      )
    );
  }
}
