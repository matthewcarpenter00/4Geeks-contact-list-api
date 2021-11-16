import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { agenda_slug } from "../store/flux";
import { Context } from "../store/appContext";
import { useContext, useState } from "react";

export const EditContact = props => {
	const { store, actions } = useContext(Context);

	const actualContact = store.contacts.find(contact => contact.id === props.match.params.id);

	const [updatedContact, setUpdatedContact] = useState({
		full_name: actualContact.full_name,
		email: actualContact.email,
		phone: actualContact.phone,
		address: actualContact.address,
		id: actualContact.id
	});

	const saveAction = () => {
		actions.editContact(updatedContact);
	};

	const handleChange = e => setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact with id: {updatedContact.id}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							onChange={handleChange}
							value={updatedContact.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={handleChange}
							value={updatedContact.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChange}
							value={updatedContact.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleChange}
							value={updatedContact.address}
						/>
					</div>

					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							saveAction();
							props.history.push("/");
						}}>
						save
					</button>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	full_name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	history: PropTypes.object,
	match: PropTypes.object
};

EditContact.defaultProps = {
	full_name: "",
	email: "",
	phone: "",
	address: ""
};
