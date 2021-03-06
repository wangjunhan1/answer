import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #e4e4e4;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 8px;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 58px;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 240px
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focus {
      background: #777;
      color: white;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 240px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0; 
  top: 0;
  height:56px;
`

export const Button = styled.div`
  float: right;
  line-height:38px;
  border-radius: 19px;
  padding: 0 20px;
  margin-right: 20px;
  margin-top: 16px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;