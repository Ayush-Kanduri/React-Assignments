import { Component } from "react";
import Error from "@/components/Error";

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, info: null };
	}
	static getDerivedStateFromError(error, info) {
		return { hasError: true, error, info };
	}
	componentDidCatch(error, info) {
		console.error(error);
	}
	render() {
		if (this.state.hasError) return <Error error={this.state.error} />;
		return this.props.children;
	}
}
