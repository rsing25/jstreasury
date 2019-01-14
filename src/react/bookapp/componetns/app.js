import React, { Component } from "react";
import BookList from "./book_list";
import BookDetail from "./book_detail";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
};

export default class App extends Component {
render() {
return (
	<div style={styles}>
		<BookList />
		<BookDetail />
	</div>
);
}
}
