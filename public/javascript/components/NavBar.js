import React from 'react';
import { NavButton } from './NavButton.js';
import { Login } from './Login.js';
<<<<<<< HEAD
import Layout, { Header } from 'react-mdl/lib/layout/Layout.js';
=======
import { BodyContent } from './BodyContent.js';
>>>>>>> 189e6e033eb532d645c6b13284d0404570006ff9
import { NavLogo } from './NavLogo.js';
import Layout, { Header, HeaderRow, HeaderTabs, Drawer, Content } from 'react-mdl/lib/layout/Layout.js';

export class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }

<<<<<<< HEAD
  handleClick () {
  }
=======
>>>>>>> 189e6e033eb532d645c6b13284d0404570006ff9
  componentDidMount () {
    console.log('Login from Navbar');
    console.log(this.props);
  }

  render () {
    const {...other} = this.props;
    return (
      <Layout fixedHeader={true} >
        <Header title= <NavLogo /> className='mdl-layout__header--waterfall' >
          <NavButton linkTo='Home' />
          <NavButton linkTo='About' />
          <Login {...other} />
        </Header>
      </Layout>
    );
  }
}
