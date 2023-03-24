import React from 'react'
import { Head, Html, Main, NextScript } from "next/document";
// import loader from "../src/loader";

export default function Document() {
  return (
     /*  eslint-disable @next/next/no-img-element */
    <Html>
                <Head/>
                {/* <head>
                    <style>
                        {loader}
                    </style>
                </head> */}
                <body>
                {/* <div id={'globalLoader'}>
                     <div className="loader">
                        <div/>
                        <div/>
                    </div>
                </div> */}
                <Main/>
                <NextScript/>
                </body>
            </Html>
  );
}
