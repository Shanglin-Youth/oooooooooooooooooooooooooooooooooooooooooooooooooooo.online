globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_C2W50-82.mjs';
import { $ as $$Layout } from './Layout_D50nAadO.mjs';
/* empty css                         */

const $$Content = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-kqty5qjk> <fieldset data-astro-cid-kqty5qjk> <p data-astro-cid-kqty5qjk>
一个域名最多可以注册63个字符（当然，我认为52个0更浪漫），所以我们注册了 <a href="https://oooooooooooooooooooooooooooooooooooooooooooooooooooo.online" title="You Are O*52.online" class="break-all" data-astro-cid-kqty5qjk>O*52.online</a>.
<br data-astro-cid-kqty5qjk>
然后我们创建了一个有趣的URL加长工具(你知道的，<del data-astro-cid-kqty5qjk>挺多人都这么干</del>很少有人会这么无聊......)，这就是你现在看到的页面
<br data-astro-cid-kqty5qjk>
域名的最大长度为 253 个字符，因此 <a target="_blank" href="https://ooooooooooooooooooooooooooooooooooooo.oooooooooooooooooooooooooooooooooooooooooooooooooo.oooooooooooooooooooooooooooooooooooooooooooooooooo.oooooooooooooooooooooooooooooooooooooooooooooooooo.oooooooooooooooooooooooooooooooooooooooooooooooooooo.online" title="Longer than Long" data-astro-cid-kqty5qjk>世界上最长的252个域名中的一个</a> 就此诞生。
<br data-astro-cid-kqty5qjk> </p> </fieldset> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.CONTENT_INJECT)}` })} </section> `;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/components/Content.astro", void 0);

const $$Tool = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-ogwnon7m> <fieldset data-astro-cid-ogwnon7m> <legend data-astro-cid-ogwnon7m>源网址</legend> <input id="origin-url" type="url" placeholder="https://oooooooooooooooooooooooooooooooooooooooooooooooooooo.online" data-astro-cid-ogwnon7m> </fieldset> <fieldset data-astro-cid-ogwnon7m> <legend data-astro-cid-ogwnon7m>加长长长长...版</legend> <textarea id="long-url" rows="6" readonly class="break-all" aria-label="ONLINENOW" data-astro-cid-ogwnon7m></textarea> <button id="open-url" data-astro-cid-ogwnon7m>打如开</button> <button id="copy-url" data-astro-cid-ogwnon7m>复如制</button> </fieldset> </section>  `;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/components/Tool.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Tool", $$Tool, {})} ${renderComponent($$result2, "Content", $$Content, {})} ` })}`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/pages/index.astro", void 0);

const $$file = "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
