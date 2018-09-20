import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import  SimpleModalWrapped from './SimpleModalWrapped';
<<<<<<< HEAD
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


import { Redirect } from 'react-router-dom';

=======
>>>>>>> 4ea69ab0408ab35033e6961373c44f0c8c1450da

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = ['全部', '個人', '團體'];
const images = ["https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/583399/pexels-photo-583399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/1330808/pexels-photo-1330808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]

<<<<<<< HEAD
class Album extends React.Component {
  state = {

    redirect: false
  };
  
 setRedirect = () => {
  this.setState({
    redirect: true
  })
}

renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/setting' />
  }
}
render(){
  const { classes } = this.props;
=======
function Album(props) {
  const { classes } = props;

>>>>>>> 4ea69ab0408ab35033e6961373c44f0c8c1450da
  return (
    <React.Fragment>
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map( (card ,index) => (
              <Grid item key={card} sm={4} md={4} lg={4}>
<<<<<<< HEAD
                <ExpansionPanel>
                  <ExpansionPanelSummary>
                    <Typography className={classes.heading}>{card}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Card>
                    <CardMedia
                      className={classes.cardMedia}
                      image={images[index]}
                      title="Image title"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                        畢業五組
                      </Typography>

                    </CardContent>
                    <CardActions>
                    {this.renderRedirect()}
                  <Button 
                  onClick={this.setRedirect}
                  size="small" color="primary">
                  更改基本設定</Button>
                      <Button size="small" color="primary">
                        檢視作品集
                      </Button>
                    </CardActions>
                  </Card>
                </ExpansionPanelDetails>
                </ExpansionPanel>
=======
                <Card>
                  <CardActions style={{ flex: 1 }}>
                    <Button size="small">
                      {card}
                    </Button>
                  </CardActions>
                  <CardMedia
                    className={classes.cardMedia}
                    image={images[index]}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      畢業五組
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      更改基本設定
                    </Button>
                    <Button size="small" color="primary">
                      檢視作品集
                    </Button>
                  </CardActions>
                </Card>
>>>>>>> 4ea69ab0408ab35033e6961373c44f0c8c1450da
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}
<<<<<<< HEAD
}
Album.propTypes = {
  classes: PropTypes.object.isRequired,
}
=======

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};
>>>>>>> 4ea69ab0408ab35033e6961373c44f0c8c1450da

export default withStyles(styles)(Album);