import React from "react"
// import { Link } from "gatsby"
import "../components/layout.css"
import styled from "styled-components"

const Styles = styled.div`
    .button-container {
        width: 100%;
        // border: 1px solid lightgray;
        display: flex;
        flex-wrap: wrap;
    }

    button {
        border: none;
        margin: 1%;
        flex: 0 0 23%;
        height: 60px;
        border-radius: 3px;
        box-shadow: 0 1px 1px rgba(102,119,136,.55);
        // padding: 16px;
    }

    .purple {
        background: linear-gradient(15deg,#745fb5,#9a6dbb);
    }

    .green {
        background: linear-gradient(15deg,#14af83,#15b89a);
    }

    .gray {
        background: linear-gradient(15deg,#678,#6f8793);
    }

    button a {
        display: inline-block;
        width: 100%;
        text-align: left;
        color: white;
        font-size: 15px;
        text-transform: lowercase;
        padding: 16px;
    }

    @media screen and (max-width: 768px) {
        button {
            flex: 0 0 100%;
            margin: 1% 0;
        }
    }
`

export default () => (
    <React.Fragment>
        <Styles>
            <div className="button-container">
                <button className="bg-gray-700">
                    <a href="/alorithms/javascript/">JavaScript<span className="marker-green-md ml-2 bg-green-300"></span></a>
                </button>
                <button className="bg-gray-700">
                    <a href="/development/flexbox/">CSS Flexbox<span className="marker-green-md ml-2 bg-green-300"></span></a>
                </button>
                <button className="bg-gray-700">
                    <a href="/development/cdns/">CDNs<span className="marker-green-md ml-2 bg-green-300"></span></a>
                </button>
                <button className="bg-gray-700">
                    <a href="/russian-history/resources/">Russian Res.<span className="marker-green-md ml-2 bg-green-300"></span></a>
                </button>
                <button className="bg-gray-700">
                    <a href="/development/keyboard-shortcuts/">shortcuts<span className="marker-green-md ml-2 bg-green-300"></span></a>
                </button>
                <button className="bg-gray-700">
                    <a href="/development/github/">GitHub<span className="marker-green-md ml-2 bg-green-300"></span></a>
                </button>
            </div>
        </Styles>
    </React.Fragment>
)