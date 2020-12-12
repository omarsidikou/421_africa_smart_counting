import {
    // Button,
    // Avatar,
    AppBar,
    Container,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar,
    Fab,
} from "@material-ui/core";
import { AcUnit, KeyboardArrowUp } from "@material-ui/icons";
import HideOnScroll from "./NavbarComponent/HideOnScroll";
import SideDrawer from "./NavbarComponent/SideDrawer";
import BackToTop from "./NavbarComponent/BackToTop";
// import { NavMenu } from "./NavMenu";
import React from 'react';
import { MenuItems } from './MenuItem';
import './Navbar.css';


const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navListDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
});

function Navbar() {

    // const [clicked, setClicked] = useState(false);
    const classes = useStyles();

    // const handleClick = () => {
    //     setClicked(!clicked);
    // }

    // const liVariant = {
    //     // visible: {
    //     //     fontSize: "10px",
    //     // },
    //     hover: {
    //         scale: 1.2,
    //         color: "orange"
    //     }
    // }
    return (
        <>
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar component="nav">
                        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                            <IconButton edge="start" aria-label="home">
                                <AcUnit fontSize="large" />
                            </IconButton>

                            <Hidden smDown>
                                <List
                                    component="nav"
                                    aria-labelledby="main navigation"
                                    className={classes.navListDisplayFlex}
                                >
                                    {MenuItems.map(({ cName, title, url }) => (
                                        <ListItem button>
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Hidden>
                            <Hidden mdUp>
                                <SideDrawer navLinks={MenuItems} />
                            </Hidden>
                            {/* <IconButton onClick={logout} edge="start" aria-label="home">
                                <LocalDiningOutlined fontSize="large" />
                            </IconButton> */}
                        </Container>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar id="back-to-top-anchor" />

            <BackToTop>
                <Fab color="secondary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </BackToTop>
        </>
    )
}

export default Navbar
