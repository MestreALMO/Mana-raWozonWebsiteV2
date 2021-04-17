import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    // boxShadow: "none",
    boxSizing: "content-box",
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 16,
    paddingLeft: 16,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Homepage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <header>
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography color="secondary" variant="h5">
                Manaíra Wozon
              </Typography>
              <div>
                <Button color="secondary">Home</Button>
                <Button color="secondary">About</Button>
                <Button color="secondary">Projects</Button>
                <Button color="secondary">Contacts</Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </header>
    </>
  );
};

export default Homepage;
