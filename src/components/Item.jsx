import { Button } from "react-bootstrap";

const Item = ({ item: { id, email, first_name, last_name, avatar } }) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{first_name}</td>
			<td>{last_name}</td>
			<td>{email}</td>
			<td>
				<img src={avatar} alt={email} width="30" height="30" />
			</td>
			<td>
				<Button size="sm">Edit</Button> &nbsp;
				<Button size="sm">Delete</Button>
			</td>
		</tr>
	);
};

export default Item;
