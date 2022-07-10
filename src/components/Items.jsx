import Item from "./Item";
import { Table } from "react-bootstrap";

const Items = ({ items }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Id</th>
					<th>FirstName</th>
					<th>LastName</th>
					<th>Email</th>
					<th>Avatar</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{items &&
					items.map((item, index) => {
						return <Item key={index} item={item} />;
					})}
			</tbody>
		</Table>
	);
};

export default Items;
