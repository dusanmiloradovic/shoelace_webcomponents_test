import {setBasePath} from "@shoelace-style/shoelace/dist/utilities/base-path.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
const basePath = chrome.runtime.getURL("./dist");
setBasePath(basePath);

const element = document.createElement("div");
element.innerHTML=`<sl-button>Test</sl-button>`;
document.body.appendChild(element);

