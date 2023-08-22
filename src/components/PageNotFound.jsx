import { Stack, Typography } from '@mui/material'
import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} mt={5}>
        <Typography variant="h2" color="inherit">Page Not Found</Typography>
        </Stack> 
    </>
  )
}

export default PageNotFound

