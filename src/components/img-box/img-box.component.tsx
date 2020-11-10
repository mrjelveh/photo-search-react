
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { SEARCHPHOTO } from "../../models/search-api.model";

import './img-box.styles.scss'
import Avatar from "@material-ui/core/Avatar";


const ImgBox = (item: SEARCHPHOTO) => {
  return (
    <Card key={item.id} className="card"
    style={{boxShadow: `0 6px 6px ${item.color}`}}
    >
        <img className="card-img" src={item.urls?.thumb} alt={item.description}/>
      <CardActions className="card-actions">
        <IconButton 
                    className="card-actions--download" 
                    size='small' 
                    aria-label="download" 
                    onClick={() => window.open(`${item.links?.download}`)}>
          <GetAppIcon />
        </IconButton>
        <Avatar alt={item.user?.name} src={item.user?.profile_image.medium} onClick={() => window.open(`${item.user?.links.html}`)} className="card-actions--avatar" />
      </CardActions>
    </Card>
  );
};

export default ImgBox;
