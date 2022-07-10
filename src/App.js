import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import Items from "./components/Items";

const BASE_URL = "https://reqres.in/api/users?page=1";

const App = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		const response = await fetch(BASE_URL);
		const result = await response.json();
		setData(result.data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Container>
			<div className="mt-5">
				<Items items={data} />
			</div>
		</Container>
	);
};

export default App;
