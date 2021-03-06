import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  container: {
    marginTop: 200,
    //backgroundColor: '#00B1E1'
  },
  button:{
    display: 'flex',
    justifyContent: 'flex-end',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
class OrganizePhoto extends React.Component {
  constructor(){
    super();
    this.state = {

      images: [],
      members: [],

      numOfPic: 0,
      order: 0,
      imageData: []
    }
  }

  componentDidMount(){

    axios.post('/rest/getPhoto', {
      "memoryProjectId": this.props.bookId,
      "order" : 0
    }).then( (res)=> {
      this.setState({imageData: res.data});
    });
  }

  _renderImagePicker(){
    let {imageData} = this.state;

    const { classes } = this.props;

    if(this.state.order === 0 || this.state.order === 1){

      return (
      <div styles = {{
        whiteSpace: 'nowrap'
      }}>

      <div className={classes.root}>

      { (this.state.order === 0) ? 
        <div>
          <Chip
            label="2018/9/21"
          />
          &ensp;
          <Chip
            label="2018/9/22"
          />
          <br/>
          <br/>

        </div> : 
        <div>
          
          <Chip
            label="Vegas"
          />
          &ensp;
          <Chip
            label="LA"
          />
          <br/>
          <br/>
        </div>
      }

      </div>

        <ImagePicker 
          multiple
          onPick={(image) => this.setState({numOfPic: image.length})}
          images={imageData.map(( image, i ) => ({src: "/static/" + image.photoPath, value: i}))}

        />
        <Divider/>
      </div>)
    }else{
      return this.state.images.map(( imagesOfSomeone, i) => {
        return (
          <div styles = {{
            whiteSpace: 'nowrap'
          }}>
            <Avatar alt="members" src={this.state.members[i]}/>
            <ImagePicker 
              multiple
              onPick={(image) => this.setState({numOfPic: image.length})}
                                   
              images={imagesOfSomeone.map((image, i) => ({src: image.replace('uploads', 'static'), value: i}))}

            />
            <Divider/>
          </div>
        )
      })
    }

  }

  handleChange = (event, value) => {

    axios.post('/rest/getPhoto', {
      "memoryProjectId": this.props.bookId,
      "order" : value
    }).then( (res)=> {
      if(this.state.order === 2){
        let images = [];
        let members = [];

        for(let data in res.data){
          images.push( res.data[data]);
          members.push('/' + data.split('[No]')[0])
        }
        this.setState({images, members})
      }else{
        this.setState({imageData: res.data});
      }

    });
    this.setState({order: value})
  };

  render(){
    const { classes } = this.props;
    return  (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-evenly"    
      >
          <Tabs  onChange={this.handleChange}>
            <Tab  label="時間"
             InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
                ></Tab>
            <Tab label="地點" ></Tab>
            <Tab label="人"></Tab>
            <Tab label="成員"></Tab>
          </Tabs>
          {this._renderImagePicker()}
          
      </Grid>
      <div className={classes.button}>
      <Button variant="outlined" color="primary" >
        目前已使用{this.state.numOfPic}張照片</Button>
        </div>
  </React.Fragment>)
  }
}

export default withStyles(styles)(OrganizePhoto);