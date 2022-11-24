import React from "react";
import Nav from "./nav/nav";
import Footer from "./footer/footer";

export default function Main(props) {
  return (
    <>
      {props.Nav}
      {props.children}
      {props.Footer}
    </>
  );
}
