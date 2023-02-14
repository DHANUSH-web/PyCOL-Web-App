import React, { Component } from "react";
import { toast } from "react-hot-toast";
import tippy from "tippy.js";
import "tippy.js/animations/scale.css";
import "./AppToolBar.css";

export class MacAppToolBar extends Component {
  render() {
    return (
      <div className="macAppToolBar" id="appToolBar">
        <i
          className="fa fa-circle"
          id="close"
          onMouseOver={() =>
            tippy("#close", {
              content: "Close <kbd>Ctrl+W</kbd>",
              placement: "top",
              animation: "scale",
              arrow: false,
              allowHTML: true
            })
          }
          onClick={() => window.close("/")}
        ></i>
        <i
          className="fa fa-circle"
          id="min"
          onClick={() =>
            toast("Feature under development", {
              icon: "😅",
              duration: 1500,
              className: 'ltm'
            })
          }
        ></i>
        <i
          className="fa fa-circle"
          id="max"
          onClick={() =>
            toast("Feature under development", {
              icon: "😅",
              duration: 1500,
              className: 'ltm'
            })
          }
        ></i>
      </div>
    );
  }
}

export default MacAppToolBar;
