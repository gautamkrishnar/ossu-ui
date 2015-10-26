import React from 'react';
import { NavLogo } from './NavLogo.js';
import { NavButton } from './NavButton.js';
import { Login } from './Login.js';
import { BodyContent } from './BodyContent.js';
import Layout, { Header, HeaderRow, HeaderTabs, Drawer, Content } from 'react-mdl/lib/layout/Layout.js';


export class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClick () {
    
    }
  

  render () {
    const {...other} = this.props;
    return (
      <Layout fixedHeader={true} >
        <Header title=<NavLogo /> className='mdl-layout__header--waterfall' >
          <NavButton 
          {...other}
          />
          
          <Login 
            {...other}
          />
        </Header>
      </Layout>


    );
  }
}
