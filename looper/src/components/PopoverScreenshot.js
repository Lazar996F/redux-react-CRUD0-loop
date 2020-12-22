import React from 'react'
import { Popover, OverlayTrigger} from 'react-bootstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import screenshotImage from '../images/screensOne.png'
import {BsViewStacked} from 'react-icons/bs'
import {GrDocumentDownload} from 'react-icons/gr'


 const Image = styled.img`
  background-image: url(${props => props.src});
  z-index: 99;
  margin-bottom: 7px;
  max-width: 250px;
`;

const Styles = styled.div`

.popover-body {
    padding: 8px 11px;
    color: #212529;
}

.popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 301px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    line-height: 2.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 300px;
}
.bs-popover-auto[x-placement^=left]>.arrow::before, .bs-popover-left>.arrow::before {
    right: 0;
    border-width: .5rem 0 .5rem .5rem;
    border-left-color: rgba(0,0,0,.25);
    top: -77px;
}

.bs-popover-auto[x-placement^=left]>.arrow::after, .bs-popover-left>.arrow::after {
    right: 1px;
    border-width: 0.5rem 0 .5rem .5rem;
    border-left-color: white;
    top: -77px;
}
`;



function PopoverScreenshot() {
    return (
      <Styles>
        <OverlayTrigger
          trigger="click"
          key='left'
          placement='left'
          overlay={
            <Popover id={`popover-positioned-left`}>
              <Popover.Content>
                <Image  src={screenshotImage} />
                <a href={screenshotImage} download>
                  <GrDocumentDownload/>
                  CLICK TO DOWNLOAD
                </a>
              </Popover.Content>
            </Popover>
          }
        >
          <BsViewStacked/>
        </OverlayTrigger>
      </Styles>
    )
}
export default PopoverScreenshot
