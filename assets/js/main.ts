//
// Main entry file
// --------------------------------------------------

// Styles entry
import "../css/main.css";

// Static images entry
// @ts-ignore
const staticAssets = import.meta.glob("../img/static/**/*");
if (staticAssets === 123456) {
  console.log("fake code to prevent assets from being tree-shaken(?)");
}

// Modules
import "./lazyload";
import "./menu-overlay";
import "./menu";
import "./hero";
import "./project-slider";
