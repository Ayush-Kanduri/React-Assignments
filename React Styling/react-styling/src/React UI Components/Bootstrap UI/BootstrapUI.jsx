import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const BootstrapUI = () => {
	return (
		<div className="componentsScreen">
			<AccordionComponent />
			<ButtonComponents />
			<NavbarComponent />
		</div>
	);
};

export default BootstrapUI;

function AccordionComponent() {
	return (
		<Accordion defaultActiveKey="0" className="container-fluid">
			<Accordion.Item eventKey="0">
				<Accordion.Header>Accordion Item #1</Accordion.Header>
				<Accordion.Body>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Accordion Item #2</Accordion.Header>
				<Accordion.Body>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

function ButtonComponents() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "2rem",
				border: "2px solid rgba(0,0,0,0.2)",
				padding: "2rem",
				borderRadius: "1rem",
			}}
		>
			<Button variant="primary">Primary</Button>{" "}
			<Button variant="secondary">Secondary</Button>{" "}
			<Button variant="success">Success</Button>{" "}
			<Button variant="warning">Warning</Button>{" "}
			<Button variant="danger">Danger</Button>{" "}
			<Button variant="info">Info</Button>{" "}
			<Button variant="light">Light</Button>{" "}
			<Button variant="dark">Dark</Button>
			<Button as="a">Link</Button>
		</div>
	);
}

function NavbarComponent() {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark" className="container-fluid">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}
