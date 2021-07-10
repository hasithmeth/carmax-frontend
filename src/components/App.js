import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { Home, Services } from "./pages";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/tips" component={() => <div>Tips</div>} />
					<Route exact path="/gallery" component={() => <div>Gallery</div>} />
					<Route
						exact
						path="/contact"
						component={() => <div>Contact us</div>}
					/>
					<Route exact path="/about" component={() => <div>About us</div>} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}
