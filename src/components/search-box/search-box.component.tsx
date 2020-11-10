import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField/TextField';
import SearchIcon from '@material-ui/icons/Search';


const SearchBox = () => (
    <Paper component="form">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
)

export default SearchBox;