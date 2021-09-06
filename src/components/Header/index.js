import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { createRipples } from "react-ripples"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import "./style.scss"

import ROUTERS from "constants/Routers"

const Ripples = createRipples({
  during: 1500,
})

const Header = () => {
  const [collapsed, setCollapsed] = useState(false)

  const history = useHistory()

  const handleClickLogo = () => {
    history.push(ROUTERS.HOME)
  }

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="header flex">
      <div className='header-logo'>
        <div onClick={handleClickLogo}>
          <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '13px'}}>
            <path d="M18.6453 5.5522L16.6134 21.0862C16.4927 22.0135 15.2508 22.0197 14.3774 21.0944L0.573177 6.46511C-0.300149 5.54187 -0.148743 4.38111 0.845269 4.37698L17.4736 4.31089C18.1823 4.30882 18.7309 4.89127 18.6453 5.5522Z" fill="#522C6C"/>
            <path opacity="0.7" d="M24.0227 1.73976L21.9908 17.2737C21.8701 18.2011 20.6282 18.2073 19.7549 17.282L5.9506 2.65267C5.07728 1.72943 5.22868 0.568673 6.22269 0.564542L22.851 0.498449C23.5597 0.496384 24.1083 1.07883 24.0227 1.73976Z" fill="#96299F"/>
          </svg>
          <svg width="111" height="20" viewBox="0 0 111 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0272903 4.0697C0.0272903 3.2357 0.268089 2.57625 0.749692 2.09137C1.23129 1.60649 1.88627 1.36405 2.71462 1.36405H12.2503C12.3852 1.57739 12.5008 1.85863 12.5971 2.20774C12.7127 2.55686 12.7704 2.92537 12.7704 3.31328C12.7704 4.0503 12.6067 4.57398 12.2792 4.8843C11.971 5.19463 11.5568 5.34979 11.0367 5.34979H4.93962V8.05544H11.4412C11.5761 8.26877 11.6917 8.55002 11.788 8.89914C11.9036 9.22884 11.9614 9.58769 11.9614 9.97558C11.9614 10.7126 11.8073 11.2363 11.499 11.5466C11.1908 11.8569 10.7766 12.0121 10.2565 12.0121H4.93962V15.0669H12.3659C12.5008 15.2802 12.6164 15.5614 12.7127 15.9106C12.8282 16.2597 12.886 16.6282 12.886 17.0161C12.886 17.7531 12.7223 18.2865 12.3948 18.6162C12.0866 18.9266 11.6724 19.0817 11.1523 19.0817H2.71462C1.88627 19.0817 1.23129 18.8393 0.749692 18.3544C0.268089 17.8695 0.0272903 17.2101 0.0272903 16.376V4.0697ZM19.9525 1.88772C20.28 1.69377 20.7712 1.50951 21.4262 1.33495C22.1004 1.1604 22.7746 1.07312 23.4489 1.07312C24.4121 1.07312 25.2597 1.21858 25.9918 1.50951C26.7431 1.78105 27.2246 2.21744 27.4366 2.8187C27.7833 3.82726 28.159 5.00067 28.5635 6.33895C28.9681 7.67723 29.3726 9.06402 29.7771 10.4993C30.1817 11.9151 30.5766 13.3213 30.9619 14.7177C31.3471 16.0948 31.6843 17.3167 31.9732 18.3835C31.7421 18.655 31.3953 18.8684 30.933 19.0235C30.4706 19.1981 29.9216 19.2854 29.2859 19.2854C28.8236 19.2854 28.4286 19.2466 28.1012 19.169C27.7929 19.0914 27.5329 18.975 27.321 18.8199C27.1283 18.6647 26.9646 18.4611 26.8297 18.2089C26.7142 17.9568 26.6082 17.6658 26.5119 17.3361L25.9918 15.3287H20.7616C20.6074 15.9106 20.4533 16.5118 20.2992 17.1325C20.1451 17.7531 19.991 18.3544 19.8369 18.9362C19.5672 19.0332 19.2782 19.1108 18.97 19.169C18.6811 19.2466 18.3246 19.2854 17.9009 19.2854C16.9184 19.2854 16.1863 19.1205 15.7048 18.7908C15.2424 18.4417 15.0113 17.9665 15.0113 17.3652C15.0113 17.0937 15.0498 16.8221 15.1268 16.5506C15.2039 16.2791 15.2906 15.9591 15.3869 15.5905C15.5217 15.0669 15.7048 14.4171 15.9359 13.6413C16.1863 12.8655 16.4561 12.0315 16.745 11.1393C17.034 10.2277 17.3422 9.29676 17.6697 8.34637C17.9972 7.39598 18.3054 6.50383 18.5944 5.66981C18.8833 4.81642 19.1434 4.06 19.3746 3.40056C19.625 2.74111 19.8176 2.23684 19.9525 1.88772ZM23.42 5.64072C23.1503 6.45533 22.8421 7.36689 22.4953 8.37547C22.1678 9.36463 21.8692 10.3732 21.5996 11.4011H25.1827C24.9129 10.3538 24.6336 9.33554 24.3447 8.34637C24.075 7.3378 23.8246 6.43591 23.5934 5.64072H23.42ZM39.3693 13.2922V18.878C39.1574 18.9362 38.8202 18.9944 38.3579 19.0526C37.9148 19.1108 37.4717 19.1399 37.0287 19.1399C36.5856 19.1399 36.1907 19.1011 35.8439 19.0235C35.5165 18.9653 35.2371 18.849 35.006 18.6744C34.7941 18.4998 34.6303 18.2574 34.5147 17.9471C34.3991 17.6367 34.3414 17.2294 34.3414 16.7252V3.02235C34.3414 2.61505 34.4473 2.30472 34.6592 2.09137C34.8904 1.85863 35.1986 1.67437 35.5839 1.5386C36.2389 1.30586 36.9998 1.141 37.8667 1.04402C38.7336 0.92765 39.6582 0.869465 40.6407 0.869465C43.2991 0.869465 45.3026 1.43193 46.6511 2.55686C47.9996 3.68179 48.6738 5.20433 48.6738 7.12447C48.6738 8.32696 48.3656 9.35495 47.7491 10.2083C47.1327 11.0617 46.4006 11.7212 45.553 12.1867C46.2465 13.137 46.9304 14.0292 47.6046 14.8632C48.2789 15.6972 48.8087 16.4536 49.1939 17.1325C49.0013 17.8113 48.6449 18.335 48.1248 18.7035C47.6239 19.0526 47.0556 19.2272 46.4199 19.2272C45.9961 19.2272 45.6301 19.1787 45.3219 19.0817C45.0136 18.9847 44.7439 18.849 44.5128 18.6744C44.2816 18.4998 44.0697 18.2865 43.877 18.0344C43.6844 17.7822 43.5014 17.5107 43.328 17.2197L40.9008 13.2922H39.3693ZM41.1897 9.42282C41.9217 9.42282 42.4997 9.23858 42.9235 8.87005C43.3473 8.48216 43.5592 7.91966 43.5592 7.18265C43.5592 6.44565 43.3184 5.89288 42.8368 5.52435C42.3745 5.13644 41.6328 4.94249 40.6118 4.94249C40.3228 4.94249 40.0917 4.95218 39.9183 4.97158C39.7449 4.99097 39.5523 5.02007 39.3404 5.05886V9.42282H41.1897ZM57.0355 12.4485V18.878C56.8238 18.9362 56.4865 18.9944 56.0242 19.0526C55.5618 19.1108 55.1089 19.1399 54.666 19.1399C54.2231 19.1399 53.8281 19.1011 53.4813 19.0235C53.154 18.9653 52.8745 18.849 52.6433 18.6744C52.4122 18.4998 52.2388 18.2574 52.1232 17.9471C52.0077 17.6367 51.9499 17.2294 51.9499 16.7252V1.36405C52.1618 1.32526 52.4988 1.27677 52.9612 1.21858C53.4235 1.141 53.8664 1.10221 54.2904 1.10221C54.7333 1.10221 55.1189 1.141 55.4462 1.21858C55.793 1.27677 56.082 1.39314 56.3131 1.5677C56.5443 1.74226 56.7177 1.9847 56.8333 2.29502C56.9488 2.60535 57.0066 3.01265 57.0066 3.51693V8.14272L63.017 1.18949C64.3268 1.18949 65.2614 1.44162 65.8199 1.94591C66.3978 2.43079 66.6868 3.01265 66.6868 3.69149C66.6868 4.19577 66.5618 4.67096 66.3112 5.11705C66.0605 5.56314 65.656 6.06744 65.0975 6.62988L61.4855 10.2665C61.9673 10.8096 62.468 11.372 62.9881 11.9539C63.5277 12.5358 64.0478 13.1079 64.5485 13.6704C65.0686 14.2135 65.5599 14.7372 66.0222 15.2414C66.504 15.7457 66.918 16.1821 67.2647 16.5506C67.2647 16.9773 67.1875 17.3555 67.0336 17.6852C66.8796 18.0149 66.6674 18.2962 66.3978 18.5289C66.1472 18.7617 65.8583 18.9362 65.531 19.0526C65.2037 19.169 64.8569 19.2272 64.4907 19.2272C63.7011 19.2272 63.0554 19.0332 62.5547 18.6453C62.054 18.238 61.5722 17.7628 61.1099 17.2197L57.0355 12.4485ZM74.7845 18.878C74.5728 18.9362 74.2355 18.9944 73.7732 19.0526C73.3303 19.1108 72.8868 19.1399 72.4439 19.1399C72.0011 19.1399 71.606 19.1011 71.2592 19.0235C70.9319 18.9653 70.6524 18.849 70.4212 18.6744C70.1901 18.4998 70.0167 18.2574 69.9011 17.9471C69.7855 17.6367 69.7277 17.2294 69.7277 16.7252V1.36405C69.9394 1.32526 70.2767 1.27677 70.7391 1.21858C71.2014 1.141 71.6443 1.10221 72.0683 1.10221C72.5112 1.10221 72.8968 1.141 73.2241 1.21858C73.5709 1.27677 73.8599 1.39314 74.091 1.5677C74.3222 1.74226 74.4956 1.9847 74.6112 2.29502C74.7267 2.60535 74.7845 3.01265 74.7845 3.51693V18.878ZM87.461 4.9134C85.9773 4.9134 84.8409 5.36919 84.0512 6.28077C83.2611 7.19233 82.8665 8.48216 82.8665 10.1501C82.8665 11.8375 83.2999 13.137 84.1668 14.0486C85.0526 14.9602 86.2374 15.416 87.721 15.416C88.5107 15.416 89.1753 15.3093 89.7149 15.096C90.2733 14.8826 90.8029 14.6401 91.3041 14.3686C91.6315 14.6401 91.8821 14.9699 92.0554 15.3578C92.2477 15.7263 92.3444 16.1627 92.3444 16.667C92.3444 17.4622 91.901 18.141 91.0152 18.7035C90.1483 19.2466 88.8191 19.5181 87.0275 19.5181C85.7367 19.5181 84.523 19.3339 83.3866 18.9653C82.2497 18.5968 81.2578 18.0343 80.4103 17.2779C79.5624 16.5021 78.8883 15.5323 78.3876 14.3686C77.9058 13.1855 77.6652 11.7794 77.6652 10.1501C77.6652 8.6373 77.8964 7.3087 78.3587 6.1644C78.84 5.00067 79.4857 4.02121 80.2947 3.226C81.1227 2.43079 82.0863 1.82954 83.1843 1.42223C84.2824 1.01493 85.4572 0.811279 86.7097 0.811279C88.4818 0.811279 89.8493 1.10221 90.8129 1.68407C91.7954 2.26593 92.2866 3.01265 92.2866 3.92423C92.2866 4.42851 92.161 4.86491 91.911 5.23342C91.6604 5.60193 91.3714 5.89288 91.0441 6.10621C90.5429 5.77651 90.0038 5.49526 89.4259 5.26251C88.8669 5.02977 88.2123 4.9134 87.461 4.9134ZM100.126 12.4485V18.878C99.9136 18.9362 99.5768 18.9944 99.1145 19.0526C98.6521 19.1108 98.1993 19.1399 97.7564 19.1399C97.3129 19.1399 96.9184 19.1011 96.5716 19.0235C96.2438 18.9653 95.9648 18.849 95.7336 18.6744C95.5025 18.4998 95.3291 18.2574 95.2135 17.9471C95.0979 17.6367 95.0401 17.2294 95.0401 16.7252V1.36405C95.2519 1.32526 95.5892 1.27677 96.0515 1.21858C96.5138 1.141 96.9567 1.10221 97.3807 1.10221C97.8236 1.10221 98.2087 1.141 98.5366 1.21858C98.8833 1.27677 99.1723 1.39314 99.4034 1.5677C99.6346 1.74226 99.808 1.9847 99.9236 2.29502C100.039 2.60535 100.097 3.01265 100.097 3.51693V8.14272L106.107 1.18949C107.417 1.18949 108.351 1.44162 108.91 1.94591C109.488 2.43079 109.777 3.01265 109.777 3.69149C109.777 4.19577 109.652 4.67096 109.401 5.11705C109.151 5.56314 108.746 6.06744 108.188 6.62988L104.576 10.2665C105.057 10.8096 105.558 11.372 106.078 11.9539C106.617 12.5358 107.138 13.1079 107.639 13.6704C108.159 14.2135 108.65 14.7372 109.113 15.2414C109.594 15.7457 110.008 16.1821 110.355 16.5506C110.355 16.9773 110.278 17.3555 110.124 17.6852C109.969 18.0149 109.758 18.2962 109.488 18.5289C109.238 18.7617 108.949 18.9362 108.621 19.0526C108.293 19.169 107.947 19.2272 107.581 19.2272C106.791 19.2272 106.146 19.0332 105.645 18.6453C105.144 18.238 104.663 17.7628 104.2 17.2197L100.126 12.4485Z" fill="#354170"/>
          </svg>
        </div>

      </div>

      <div className="header-nav  flex">
        <div className={`header-menus flex`}>
          {/*<Ripples>*/}
          {/*  <Link to={ROUTERS.HOME}>HOME</Link>*/}
          {/*</Ripples>*/}
          <Ripples>
            <Link to={ROUTERS.ABOUT}>About</Link>
          </Ripples>
          <Ripples>
            <a href={"https://recruitee.com/"}>Jobs</a>
          </Ripples>
          <Ripples>
            <a href={'https://blog.earkick.com/'}>Blog</a>
          </Ripples>
        </div>
        {/*<div className="header-order-now" onClick={handleOrder}>*/}
        {/*  ORDER NOW*/}
        {/*</div>*/}
        <div className="header-order-collapse">
          <FontAwesomeIcon icon={faBars} onClick={handleCollapse} />
          {collapsed && (
            <div className="header-order-collapse-menu flex flex-column">
              <div className="header-order-collapse-menu-close flex">
                <div>
                  <FontAwesomeIcon icon={faTimes} onClick={handleCollapse} />
                </div>
              </div>
              {/*<Ripples>*/}
              {/*  <Link to={ROUTERS.HOME}>HOME</Link>*/}
              {/*</Ripples>*/}
              <Ripples>
                <Link to={ROUTERS.ABOUT}>About</Link>
              </Ripples>
              <Ripples>
                <a href={"https://recruitee.com/"}>Jobs</a>
              </Ripples>
              <Ripples>
                <a href={"https://blog.earkick.com/"}>Blog</a>
              </Ripples>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
