import { createMuiTheme } from "@material-ui/core";

const carmaxOrange = "#FF6600";
const carmaxRed = "#FF2000";
const carmaxBlack = "#000";

export default createMuiTheme({
	palette: {
		common: {
			red: `${carmaxRed}`,
			orange: `${carmaxOrange}`,
			black: `${carmaxBlack}`,
		},
		primary: {
			main: `${carmaxBlack}`,
		},
		secondary: {
			main: `${carmaxOrange}`,
		},
	},
	typography: {
		button: {
			color: "#fff",
		},
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: 700,
			fontSize: "1rem",
		},
		estimate: {
			fontFamily: "Pacifico",
			fontSize: "1rem",
			textTransform: "none",
			color: "white",
		},
	},
});
