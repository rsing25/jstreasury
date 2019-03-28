import React, { Component } from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

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
