import React from "react"
import {Navbar, Nav, Col, Container, Dropdown} from "react-bootstrap"
import '../utils/font-awesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import finstral from '../images/logo-finstral.svg'
import logo from '../images/logo.svg'
import {AnchorLink} from "gatsby-plugin-anchor-links";

const FixedNavbar = ({organization, social}) => {
	return (
		<Navbar bg="primary" expand="lg" fixed="top">
			<Container>
				<Navbar.Text className="p-0">
					<a href={`tel:${organization.phone.number}`} title="Truca'ns">
						<FontAwesomeIcon icon="phone" className="me-1" />
					</a>
					<a href={`mailto:${organization.email}`} title="Escriu-nos">{organization.email}</a> | Distribuidor de <img src={finstral} alt="Finstral" className="logo-finstral" />
				</Navbar.Text>
				<Nav className="flex-row ms-auto p-0 mb-lg-0">
					<Nav.Link className="ps-2 ps-lg-0" href={`https://www.instagram.com/${social.instagram}`} target="_blank" rel="noreferrer" title="Segueix-nos a Instagram">
						<FontAwesomeIcon icon={['fab', 'instagram']} />
					</Nav.Link>
					<Nav.Link className="ps-2 ps-lg-0" href={`https://www.facebook.com/${social.fbAppId}`} target="_blank" rel="noreferrer" title="Segueix-nos a Facebook">
						<FontAwesomeIcon icon={['fab', 'facebook']} />
					</Nav.Link>
					<Nav.Link className="ps-2 ps-lg-0" href={`https://www.pinterest.com/${social.pinterest}`} target="_blank" rel="noreferrer" title="Segueix-nos a Pinterest">
						<FontAwesomeIcon icon={['fab', 'pinterest']} />
					</Nav.Link>
				</Nav>
			</Container >
		</Navbar >
	)
}

const MenuLink = (props) => {

	const {link, name, submenuLinks} = props.link

	if (link !== 'dropdown') {
		return (
			<AnchorLink
				to={link}
				activeClassName="active"
				className="nav-link ms-lg-5 p-lg-0"
				title={name}
				onAnchorLinkClick={props.onClick}
			>
				<span>{name}</span>
			</AnchorLink>
		);
	}

	const isActive = props.pathname !== '/' ? ' active' : ''
	return (
		<Dropdown
			alignRight
			className="nav-item ms-lg-5 p-lg-0">
			<Dropdown.Toggle
				as="a"
				role="button"
				id="navbarDropdown"
				className={`nav-link${isActive}`}><span>{name}</span></Dropdown.Toggle>

			<Dropdown.Menu
				as="ul"
				align="right"
				className="dropdown-menu-dark dropdown-menu-end mt-lg-0">
				{submenuLinks.map((item, index) => <li key={index}><Dropdown.Item href={item.link}>{item.name}</Dropdown.Item></li>)}
			</Dropdown.Menu>
		</Dropdown >
	);
}

const StaticNavbar = class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false,
			navBarActiveClass: '',
		}
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
						navBarActiveClass: 'open',
					})
					: this.setState({
						navBarActiveClass: '',
					})
			}
		)
	}

	render() {
		return (
			<Navbar bg="white" expand="lg" static="top" aria-label="Main navigation">
				<Container>
					<Col className="div-navbar-brand cols-2 cols-md-4 mt-3">
						<Navbar.Brand href="/" title={this.props.defaultTitle}>
							<img
								src={logo}
								alt={this.props.defaultTitle}
								className="img-fluid"
							/>
						</Navbar.Brand>
					</Col>

					<Navbar.Toggle
						className="ms-auto mb-4 p-0 border-0"
						aria-controls="basic-navbar-nav"
						aria-label="Toggle navigation"
						onClick={() => this.toggleHamburger()}
					/>

					<div className="align-self-end">
						<div className={`navbar-collapse offcanvas-collapse px-0 ${this.state.navBarActiveClass}`}>
							<Container className="pt-3 pt-lg-0">
								<Navbar.Toggle
									className="btn-close btn-close-white w-100"
									aria-label="Toggle navigation"
									aria-controls="basic-navbar-nav"
									onClick={() => this.toggleHamburger()}
								/>
								<Nav className="me-lg-auto mb-0 fw-bold float-end" activeKey={this.props.pathname} id="basic-navbar-nav">
									{this.props.menuLinks.map((link, index) =>
										<MenuLink
											key={index}
											pathname={this.props.pathname}
											link={link}
											onClick={() => this.toggleHamburger()} />
									)}
								</Nav>
							</Container>
						</div>
					</div>
				</Container >
			</Navbar >
		)

	}
}

export {FixedNavbar, StaticNavbar}
