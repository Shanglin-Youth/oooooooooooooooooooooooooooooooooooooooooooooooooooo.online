globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_C2W50-82.mjs';
import { $ as $$Layout } from './Layout_D50nAadO.mjs';
/* empty css                       */

const $$Display = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-rm5o474i> <fieldset style="display: none;" id="display-url" data-astro-cid-rm5o474i> <legend data-astro-cid-rm5o474i>GO NOW!</legend> <p data-astro-cid-rm5o474i>
此链接指向 <span id="real-url-text" data-astro-cid-rm5o474i></span> .
<br data-astro-cid-rm5o474i>
我们无法确认此链接的安全性。请谨慎点击。
</p> <a id="real-url" href="#" title="Open URL" rel="noopener noreferrer" data-astro-cid-rm5o474i> <button data-astro-cid-rm5o474i>打如开</button> </a> <a href="/" title="Go Home" data-astro-cid-rm5o474i> <button data-astro-cid-rm5o474i>首页</button> </a> </fieldset> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.CONTENT_INJECT)}` })} </section>  `;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/components/Display.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Display", $$Display, {})} ` })}`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/pages/404.astro", void 0);

const $$file = "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
