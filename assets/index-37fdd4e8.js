import{_ as n}from"./index-083835cb.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-833e22d6.js"),["assets/PolygonDrawer-833e22d6.js","assets/PolygonDrawerBase-66e41abb.js","assets/index-083835cb.js","assets/index-6066a042.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-6ac2318a.js"),["assets/TriangleDrawer-6ac2318a.js","assets/PolygonDrawerBase-66e41abb.js","assets/index-083835cb.js","assets/index-6066a042.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
