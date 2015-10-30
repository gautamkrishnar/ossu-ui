import React from 'react';

import { NavButton } from './NavButton.js';
import { Login } from './Login.js';
import Layout, { Header } from 'react-mdl/lib/layout/Layout.js';

export class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log('Loggin from Navbar');
    console.log(this.props);
  }

  render () {
    const {...other} = this.props;
    return (
      <Layout fixedHeader={true} >
        <Header title='OSS' className='mdl-layout__header--waterfall' >
          <NavButton linkTo='Home' />
          <NavButton linkTo='About' />
          <Login {...other} />
        </Header>
      </Layout>
    );
  }
}
