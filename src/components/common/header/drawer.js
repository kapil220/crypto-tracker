import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListIcon from "@mui/icons-material/List";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleDrawerOpen}>
        <ListIcon />
      </Button>
      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <div
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>
            <Link to="/">
              <ListItem button>
                <ListItemText primary="Home" className="link" />
              </ListItem>
            </Link>
            <Link to="/compare">
              <ListItem button>
                <ListItemText primary="Compare" className="links" />
              </ListItem>
            </Link>
            <Link to="/watchlist">
              <ListItem button>
                <ListItemText primary="Watchlist" className="link" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
