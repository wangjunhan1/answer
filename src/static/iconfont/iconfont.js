import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1551079452916'); /* IE9 */
    src: url('./iconfont.eot?t=1551079452916#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPcAAsAAAAAB/QAAAONAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDNIMPATYCJAMQCwoABCAFhG0HRBv9BiMR9nIwEpH98zA2Vj62CRBqWb0RLh8fmioReTyfbIROo9HQaeJ/jqDa+6tnd99nyVGhUrQhWsqjUFGB0GBBOTQKYUBIkPHuhL6f13v/5N0yKQRtTqGsBTAJ/uIqpyts+MwtznkiI6LuhnL25NF3fVoeZDldHE6blsB8oBzXXudRF2A0tgY29gAJuIQS45bhtS6Fg15PoMOMBXFw9ggANgXpFohrmxwLbBmp0pAYqtCqGFsgHjVqqkuveAi+H3+sRQVJk4H0PUlyTACb9xwq+1/m1EOgTaeGPImMBRTivFJ7BijyLsg6zMZMtlBVialqPJrG9KNwK/3LI0uCaAGJ7wIb2Jf5hFMTniCWgBfQHyC+gAox93hGcFPePCnSBLUK9kZwixQGNQmt3WG3t0HX1wE3N4HUnXWjYOAotUbG1d/e6k2Sd3fuR9TNje5E2fW1yz43HsQRgKcToWFNUniHSEjsEkEB4IGv4/WnGBkcTAZ7WgROj0DZKEFtYVhwcLJ2MEniQU0NECCQENii4N1j4FBMKLxNPFk4uH18bkYxcOFGw2zdaGhI359LPssS9d3f97ksBDLUl/zWMkv+paH+0JC9casxHWVboBMcUkuV6xSEBNfOlyvvBetJzhcqDheJXHRtf5tm5R3IsItLtbpj+mOVX7Bjoo0x22plqwalckYS7jZmb6OCC45EBf+IKX5SlIJ/HF05jDXKIAxjYLVewBPRo/lFP7yom3J90p47K1EoLEIITYl9dNUP6/3h3qI1nk6CXo6QAwAA9BraQDYBgc7rCPwkCkXF/7Kdu7I1l2hui29sxLNk3bcuSGAzTeKKbjz4IbTOtD9H65hSLAaRlWIwOdXWFSupbhI6dOB/BRnwMYV+mEQdqkIDSNpMQ1bNIgt2ARqdNqCl2oYO844ndxp0A0gUdmDOHYLQ5wmSHi+Q9XlDFuw7NEb8g5a+yNDhgmfwz7m1D7uxJxSML6j/YGXbKKbgTZh4Rf0OgtKMAP9EGqwDijTPBy7YIE0xYPjoklmBojbCGW2GIbTQUetQcmqYuyrLVNWLUtnG0cYBQQJDL6D2Byyp1VBeZrYpfP4KaW+BQA1JTconRAa2flBI5R2QF27TKelWLhl8aCXGFKCQVgTOSI0C9bZAV93KQRJLmQHuTiXD6VRXbro8P77hIuhAliuRIkeJxuIWBUkzsRW7B2AlcSRKb5vRCAAAAA==') format('woff2'),
    url('./iconfont.woff?t=1551079452916') format('woff'),
    url('./iconfont.ttf?t=1551079452916') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1551079452916#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconsearch:before {
    content: "\e67c";
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconicon-checkin:before {
    content: "\e615";
  }
`;
