import React from "react";

const Contact = () => {
	return (
		<form className="ui form">
			<div className="field">
				<label htmlFor="name">Name</label>
				<input type="text" />
			</div>
			<div className="field">
				<label htmlFor="email"></label>
				<input type="email" name="" id="" />
			</div>
			<label htmlFor="message">
				<textarea name="" id="" cols={30} rows={10}></textarea>
			</label>
			<button type="submit">Send</button>
		</form>
	);
};

export default Contact;
