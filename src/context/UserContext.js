import { createContext, useState } from "react";

const BASE_URL = "https://reqres.in/api/users?page=1";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [editId, setEditId] = useState(null);
	const [selectedItem, setSelectedItem] = useState({
		first_name: "",
		last_name: "",
		email: "",
		avatar: "",
	});

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const selectedRow = (e, item) => {
		e.preventDefault();
		setEditId(item.id);
		const newValue = {
			first_name: item.first_name,
			last_name: item.last_name,
			email: item.email,
			avatar: item.avatar,
		};

		setSelectedItem(newValue);
	};

	const handleDataEdit = (e) => {
		e.preventDefault();

		const fName = e.target.getAttribute("name");
		const fValue = e.target.value;

		const newData = { ...selectedItem };
		newData[fName] = fValue;

		setSelectedItem(newData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const editedUser = {
			id: editId,
			first_name: selectedItem.first_name,
			last_name: selectedItem.last_name,
			email: selectedItem.email,
		};

		const localItems = (() => {
			const localValue = localStorage.getItem("users");
			return localValue === null ? [] : JSON.parse(localValue);
		})();
		localItems.push(editedUser);
		localStorage.setItem("users", JSON.stringify(localItems));

		const users = [...data];

		const index = data.findIndex((item) => item.id === editId);

		users[index] = editedUser;

		setData(users);
		setEditId(null);
	};

	const getData = async () => {
		const response = await fetch(BASE_URL);
		const result = await response.json();
		setData(result.data);
	};

	return (
		<UserContext.Provider
			value={{
				data,
				selectedItem,
				editId,
				getData,
				handleDelete,
				selectedRow,
				handleDataEdit,
				handleSubmit,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
