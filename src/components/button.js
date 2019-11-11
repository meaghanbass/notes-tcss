import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import styled from "styled-components"
import { IoMdArrowBack } from 'react-icons/io';

const Styles = styled.div`
    // .btn-round {
    //     width: 48px;
    //     height: 48px;
    //     border-radius: 50%;
    //     background: linear-gradient(15deg,var(--purple-dark),var(--purple-medium));
    //     display: block;
    //     // top: 90px;
    //     // left: 90px;
    //     // position: absolute;
    //     margin-top: 90px;
    //     z-index: 2;
    //     box-shadow: 0 6px 8px rgba(102,119,136,.03),0 1px 2px rgba(102,119,136,.3);
    // }
    // .btn-round a {
    //     border: 0;
    //     margin-right: 20px;
    //     display: inline-block;
    //     width: 48px;
    //     height: 48px;
    //     line-height: 48px;
    //     font-size: 32px;
    //     text-align: center;
    // }
    // .btn-round svg {
    //     line-height: 32px;
    //     color: white;
    //     vertical-align: middle;
    //     position: relative;
    //     top: -4px;
    // }
    // .btn-round i {
    //     fill: white;
    //     color: white;
    //     transition: transform 250ms ease, color 250ms linear;
    // }
    // @media screen and (max-width: 768px) {
    //     .btn-round {
    //         margin-top: 30px;
    //     }
    // }
`

export default () => (
    <React.Fragment>
        <Styles>
            <div className="btn-round bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center ">
                <Link to="/" className="text-white">
                    {/* <i className="material-icons">arrow_back</i> */}
                    <IoMdArrowBack />
                </Link>
            </div>
        </Styles>
    </React.Fragment>
)