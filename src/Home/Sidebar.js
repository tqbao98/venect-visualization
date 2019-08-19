import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import FloatingButton from './FloatingButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        background: 'transparent',
        color: 'white',
    },
    
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    
    hideFAB: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
    
    whiteFont: {
        color: 'white',
    },
    
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    mobileDrawerPaper: {
        whiteSpace: 'nowrap',
        width: drawerWidth,
        background: '#2D353C',
        color: 'white',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        background: '#2D353C',
        color: 'white',
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        color: 'white',
        ...theme.mixins.toolbar,
    },
    toolbarClose: {
        justifyContent: 'center',
        transition: theme.transitions.create('justify-content', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        transitionDelay: '0.5s',
    },
    content: {
        flexGrow: 1,
        float: 'right',
        color: 'white',
        overflow: 'auto',
    },
    icon: {
        fontSize: 21,
        color: 'white',
    },
    listItemIcon: {
        margin: '0 0 0 10px'
    }
});

const DrawerContent = props => (
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
            <MenuIcon className={classNames(props.classes.icon,props.classes.listItemIcon)} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" classes={{ primary: props.classes.whiteFont }} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
            <MenuIcon className={classNames(props.classes.icon,props.classes.listItemIcon)} />
        </ListItemIcon>
        <ListItemText primary="Inbox" classes={{ primary: props.classes.whiteFont }} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
            <MenuIcon className={classNames(props.classes.icon,props.classes.listItemIcon)} />
        </ListItemIcon>
        <ListItemText primary="Sign in" classes={{ primary: props.classes.whiteFont }} />
      </ListItem>
    </List>
  );

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
        this.handleDrawer = this.handleDrawer.bind(this);
    }

    handleDrawer = () => {
        this.setState(prevState => ({ open: !prevState.open }));
      };

    render() {
        const {classes, theme} = this.props;

        return (
            <div className="home-new-side-bar">
                {' '}
                <div className={classes.root}>
                <Hidden smDown>
                    <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(
                        classes.drawerPaper,
                        !this.state.open && classes.drawerPaperClose,
                        ),
                    }}
                    open={this.state.open}
                    >
                    <div
                        className={classNames(classes.toolbar, !this.state.open && classes.toolbarClose)}
                    >
                        <IconButton onClick={this.handleDrawer}>
                        {!this.state.open ? (
                            <MenuIcon className={classes.icon} />
                        ) : (
                            <ChevronLeftIcon className={classes.icon} />
                        )}
                        </IconButton>
                    </div>
                    <Divider light />
                    <DrawerContent classes={classes} />
                    </Drawer>
                </Hidden>
                <Hidden mdUp>
                    <Drawer
                    variant="temporary"
                    anchor={'right'}
                    open={this.state.open}
                    onClose={this.handleDrawer}
                    classes={{
                        paper: classes.mobileDrawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    >
                    <DrawerContent classes={classes} />
                    </Drawer>
                </Hidden>
                <div className={classes.hideFAB}>
                    <FloatingButton className={classes.hideFAB} onClick={this.handleDrawer}>
                    <MenuIcon className={classes.icon} />
                    </FloatingButton>
                </div>
                <main className={classes.content}>
                    <div className="child content">{this.props.children}</div>
                </main>
                </div>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Sidebar)