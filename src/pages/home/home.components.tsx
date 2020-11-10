import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import ImgBox from '../../components/img-box/img-box.component';
import getData from '../../services/api.service';
import { SEARCHPHOTO, STATEVAR} from '../../models/search-api.model'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Masonry from 'react-masonry-css';
import './home.styles.scss';



class Home extends React.Component< SEARCHPHOTO, STATEVAR> {
    
    state: STATEVAR = {
        images: []
    }
    
    
    handleSubmit = (event: any) => {
        event.preventDefault();
        let query = event.target.querySelector('#search').value;

        getData(query).then(res => {
            
            this.setState({images: res.data.results})
            console.log(this.state.images)
        })
        .catch(err => (console.error(err)));
    }
    render() {
        const breakpointColumnsObj = {
            default: 3,
            1100: 3,
            700: 2,
            500: 1
          };
        return (
            <Container>
                <Paper component="form" onSubmit={this.handleSubmit}>
                    <TextField id="search" label="search Image here" variant="outlined" />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Grid container className="img-list">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {
                                this.state.images.map(({id, ...otherSectionProps}) => (
                                        <ImgBox key={id} {...otherSectionProps} />
                                ))
                        }       
                    </Masonry>
                </Grid>
            </Container>
        )
    }
}

export default Home;