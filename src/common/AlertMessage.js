import { Alert, Snackbar } from '@mui/material'
import React from 'react'

function AlertMessage(props) {
  const { snackbar, setSnackbar } = props

  return (
    <div>
      <Snackbar open={snackbar?.open} autoHideDuration={4000} onClose={() => setSnackbar({
        ...snackbar,
        open: false})}>
        <Alert variant='filled' severity={snackbar?.severity}>
          {snackbar?.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AlertMessage
