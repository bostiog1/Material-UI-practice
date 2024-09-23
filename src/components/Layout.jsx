import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240; // Width of the drawer

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: "24px", // Static value for padding
  },
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appbar: {
    zIndex: 1201, // Ensure AppBar is above the Drawer
    width: `calc(100% - ${drawerWidth}px)`, // Subtract drawer width from app bar width
    marginLeft: drawerWidth, // Offset app bar by drawer width
  },
  toolbar: {
    minHeight: 64, // Adjust based on the app bar's height
  },
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: "16px", // Static value for avatar margin
  },
  title: {
    padding: "16px", // Static padding for drawer title
  },
  active: {
    background: "#f4f4f4",
  },
});

export default function Layout({ children }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* App bar */}
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM y")}
          </Typography>
          <Typography>Teo</Typography>
          <Avatar src="" className={classes.avatar} />
        </Toolbar>
      </AppBar>

      {/* Side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h5" className={classes.title}>
          Ninja Notes
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <div className={classes.page}>
        <div className={classes.toolbar} /> {/* Pushes content below appbar */}
        {children}
      </div>
    </div>
  );
}
