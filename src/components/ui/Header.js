import React, { useState, useEffect } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	makeStyles,
	Tabs,
	Tab,
	useMediaQuery,
	useTheme,
	Drawer,
	List,
	ListItem,
	IconButton,
	Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/primary_logo.png";
import { Link } from "react-router-dom";
import { Call, CloseOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em",
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em",
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: "1.25em",
		},
	},
	logo: {
		height: "6em",
		marginLeft: "1.5em",
		[theme.breakpoints.down("md")]: {
			height: "5em",
			marginLeft: "1em",
		},
		[theme.breakpoints.down("xs")]: {
			height: "4em",
			marginLeft: "0.6rem",
		},
	},
	logoContainer: {
		padding: 0,
		marginBottom: -3.6,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	navButtons: {
		...theme.typography.button,
	},
	tabContainer: {
		marginLeft: "auto",
		marginRight: "2em",
	},
	tab: {
		fontSize: "1rem",
		minWidth: 10,
		marginLeft: "25px",
	},
	iconContainer: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	iconButton: {
		color: theme.palette.common.orange,
		height: 35,
		width: 35,
	},
	drawerStyle: {
		width: "16.6rem",
		backgroundColor: theme.palette.primary.main,
		alignItems: "center",
		justify: "center",
	},
	drawerContainer: {},
	drawerText: {
		...theme.typography.button,
		flex: 1,
		textDecoration: "none",
		fontSize: "1rem",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	selectedDrawerItemContainer: {
		backgroundColor: theme.palette.common.orange,
		"&:hover": {
			backgroundColor: theme.palette.common.orange,
		},
	},
	idleDrawerItemContainer: {
		"&:hover": {
			backgroundColor: theme.palette.common.orange,
		},
	},
	callNow: {
		marginTop: 20,
		height: 50,
		borderRadius: 50,
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	callNowText: {
		textDecoration: "none",
	},
	telIcon: {
		color: theme.palette.common.white,
		height: 25,
		width: 25,
	},
	drawerLink: {
		flex: 1,
		textDecoration: "none",
	},
}));

export default function Header() {
	const theme = useTheme();
	const classes = useStyles();
	const mediumSize = useMediaQuery(theme.breakpoints.down("md"));
	const smallSize = useMediaQuery(theme.breakpoints.down("xs"));
	const [value, setValue] = useState(0);
	const [drawerOpen, setDrawerOpen] = useState(false);

	useEffect(() => {
		switch (window.location.pathname) {
			case "/":
				if (value !== 0) setValue(0);
				break;
			case "/services":
				if (value !== 1) setValue(1);
				break;
			case "/tips":
				if (value !== 2) setValue(2);
				break;
			case "/gallery":
				if (value !== 3) setValue(3);
				break;
			case "/contact":
				if (value !== 4) setValue(4);
				break;
			case "/about":
				if (value !== 5) setValue(5);
				break;
			default:
				break;
		}
	}, [value]);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	const fullTabs = (
		<React.Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabContainer}
			>
				<Tab
					className={classes.tab}
					disableRipple
					label="Home"
					to="/"
					component={Link}
				/>
				<Tab
					className={classes.tab}
					disableRipple
					label="Services"
					to="/services"
					component={Link}
				/>
				<Tab
					className={classes.tab}
					disableRipple
					label="Tips"
					to="/tips"
					component={Link}
				/>
				<Tab
					className={classes.tab}
					disableRipple
					label="Gallery"
					to="/gallery"
					component={Link}
				/>
				<Tab
					className={classes.tab}
					disableRipple
					label="Contact"
					to="/contact"
					component={Link}
				/>
				<Tab
					className={classes.tab}
					disableRipple
					label="About Us"
					to="/about"
					component={Link}
				/>
			</Tabs>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				className={classes.drawerContainer}
				PaperProps={{ className: classes.drawerStyle }}
			>
				<List>
					<ListItem style={smallSize ? { top: -12 } : { top: -5 }}>
						<IconButton
							aria-label="close-menu"
							onClick={() => setDrawerOpen(false)}
						>
							<CloseOutlined className={classes.iconButton} />
						</IconButton>
					</ListItem>
					<ListItem
						className={
							value === 0
								? classes.selectedDrawerItemContainer
								: classes.idleDrawerItemContainer
						}
						style={smallSize ? { marginTop: -18 } : { marginTop: -2.7 }}
					>
						<Link
							onClick={() => {
								setValue(0);
								setDrawerOpen(false);
							}}
							to="/"
							className={classes.drawerText}
						>
							Home
						</Link>
					</ListItem>
					<ListItem
						className={
							value === 1
								? classes.selectedDrawerItemContainer
								: classes.idleDrawerItemContainer
						}
						style={{ marginTop: 10 }}
					>
						<Link
							onClick={() => {
								setValue(1);
								setDrawerOpen(false);
							}}
							to="/services"
							className={classes.drawerText}
						>
							Services
						</Link>
					</ListItem>
					<ListItem
						className={
							value === 2
								? classes.selectedDrawerItemContainer
								: classes.idleDrawerItemContainer
						}
						style={{ marginTop: 10 }}
					>
						<Link
							onClick={() => {
								setValue(2);
								setDrawerOpen(false);
							}}
							to="/tips"
							className={classes.drawerText}
						>
							Car Tips
						</Link>
					</ListItem>
					<ListItem
						className={
							value === 3
								? classes.selectedDrawerItemContainer
								: classes.idleDrawerItemContainer
						}
						style={{ marginTop: 10 }}
					>
						<Link
							onClick={() => {
								setValue(3);
								setDrawerOpen(false);
							}}
							to="/gallery"
							className={classes.drawerText}
						>
							Gallery
						</Link>
					</ListItem>
					<ListItem
						className={
							value === 4
								? classes.selectedDrawerItemContainer
								: classes.idleDrawerItemContainer
						}
						style={{ marginTop: 10 }}
					>
						<Link
							onClick={() => {
								setValue(4);
								setDrawerOpen(false);
							}}
							to="/contact"
							className={classes.drawerText}
						>
							Contact
						</Link>
					</ListItem>
					<ListItem
						className={
							value === 5
								? classes.selectedDrawerItemContainer
								: classes.idleDrawerItemContainer
						}
						style={{ marginTop: 10 }}
					>
						<Link
							onClick={() => {
								setValue(5);
								setDrawerOpen(false);
							}}
							to="/about"
							className={classes.drawerText}
						>
							About Us
						</Link>
					</ListItem>
					<ListItem>
						<a href="tel:+94773888816" className={classes.callNowText}>
							<Button
								disableRipple
								variant="contained"
								color="secondary"
								className={classes.callNow}
								startIcon={<Call className={classes.telIcon} />}
							>
								<Typography className={classes.drawerText}>
									Book a service now
								</Typography>
							</Button>
						</a>
					</ListItem>
				</List>
			</Drawer>
			<IconButton
				className={classes.iconContainer}
				onClick={() => setDrawerOpen(!drawerOpen)}
			>
				<MenuIcon className={classes.iconButton} />
			</IconButton>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<AppBar position="fixed">
				<Toolbar disableGutters>
					<Link
						onClick={() => {
							setValue(0);
							setDrawerOpen(false);
						}}
						to="/"
						className={classes.logoContainer}
					>
						<img
							draggable="false"
							alt="company logo"
							src={logo}
							className={classes.logo}
						/>
					</Link>
					{mediumSize ? drawer : fullTabs}
				</Toolbar>
			</AppBar>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}
