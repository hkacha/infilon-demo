import { useEffect, useState, useContext } from "react";

import { Container } from "react-bootstrap";
import Items from "./components/Items";
import { UserProvider } from "./context/UserContext";

const App = () => {
	return (
		<UserProvider>
			<Container>
				<div className="mt-5">
					<Items />
				</div>
			</Container>
		</UserProvider>
	);
};

export default App;
