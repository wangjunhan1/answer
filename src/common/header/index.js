import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';
import { Iconfont } from '../../static/iconfont/iconfont.js';

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Iconfont />
            <Logo />
            <Nav>
              <NavItem className='left active'>首页</NavItem>
              <NavItem className='left'>下载</NavItem>
              <NavItem className='right'>登录</NavItem>
              <NavItem className='right'>
                <span className="iconfont">&#xe636;</span>
              </NavItem>
              <SearchWrapper>
                <CSSTransition in={props.focus} timeout={200} classNames="slide">
                  <NavSearch 
                    className={props.focus ? 'focus': ''}
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                  ></NavSearch>
                </CSSTransition>
                <span className={props.focus ? 'focus iconfont': 'iconfont'}>&#xe67c;</span>
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

const mapStateToProps = (state) => {
  return {
    focus: state.header.focus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);