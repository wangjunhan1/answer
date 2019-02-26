import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';
import { iconfont } from '../../static/iconfont/iconfont.js';

class Header extends Component {

    constructor(props) {
      super(props);
      this.state = {
        focus: false
      }
      this.handleInputFocus = this.handleInputFocus.bind(this);
      this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
        return (
            <HeaderWrapper>
                <iconfont />
                <Logo />
                <Nav>
                  <NavItem className='left active'>首页</NavItem>
                  <NavItem className='left'>下载</NavItem>
                  <NavItem className='right'>登录</NavItem>
                  <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                  </NavItem>
                  <SearchWrapper>
                    <CSSTransition in={this.state.focus} timeout={200} classNames="slide">
                      <NavSearch 
                        className={this.state.focus ? 'focus': ''}
                        onFocus={this.handleInputFocus}
                        onBlur={this.handleInputBlur}
                      ></NavSearch>
                    </CSSTransition>
                    <span className={this.state.focus ? 'focus iconfont': 'iconfont'}>&#xe67c;</span>
                  </SearchWrapper>
                </Nav>
                <Addition>
                  <Button className='reg'>注册</Button>
                  <Button className='writing'>
                    <span className="iconfont">&#xe615;</span>
                    写文章
                  </Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
      this.setState({
        focus: true
      })
    }

    handleInputBlur() {
      this.setState({
        focus: false
      })
    }

}

export default Header;