import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@bae/spa-navbar",
  () => System.import("@bae/spa-navbar"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@bae/spa-tutorials",
  () => System.import("@bae/spa-tutorials"),
  isActive.tutorials,
  { domElement: document.getElementById("tutorials-container") }
);

registerApplication(
  "@bae/spa-add-tutorials",
  () => System.import("@bae/spa-add-tutorials"),
  isActive.addTutorials,
  { domElement: document.getElementById("add-tutorials-container") }
);

start();