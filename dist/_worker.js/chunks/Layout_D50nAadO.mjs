globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderTemplate, g as addAttribute, h as createAstro, s as spreadAttributes, u as unescapeHTML, a as renderComponent, m as maybeRenderHead, i as renderHead, j as renderSlot, F as Fragment } from './astro/server_C2W50-82.mjs';
/* empty css                         */

const $$Astro$7 = createAstro();
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$6 = createAstro();
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$5 = createAstro();
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$4 = createAstro();
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$3 = createAstro();
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$2 = createAstro();
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$1 = createAstro();
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.5.2/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte> <a target="_blank" href="https://ooooooooooooooooooooooooooooooooooooo.oooooooooooooooooooooooooooooooooooooooooooooooooo.oooooooooooooooooooooooooooooooooooooooooooooooooo.oooooooooooooooooooooooooooooooooooooooooooooooooo.oooooooooooooooooooooooooooooooooooooooooooooooooooo.online" title="超级长" data-astro-cid-sz7xmlte>超级长</a> </p> <p data-astro-cid-sz7xmlte>
Made by <a href="www.shanglin.cloud" target="_blank" title="shanglin.cloud" data-astro-cid-sz7xmlte>shanglin.cloud</a> </p> </footer> `;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/components/Footer.astro", void 0);

const config = {
	title: "(O*52).online!",
	description: "You Are OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO.ONLINE!",
	url: `https://oooooooooooooooooooooooooooooooooooooooooooooooooooo.online`,
  image: 'https://oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/favicon.png',
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <a href="/"${addAttribute(config.title, "title")} data-astro-cid-3ef6ksr2><h1 data-astro-cid-3ef6ksr2>${config.title}</h1></a> <p class="break-all" data-astro-cid-3ef6ksr2>
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO.ONLINE
    NOW!
</p> <nav data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a target="_blank" href="https://github.com/Shanglin-Youth/OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO.ONLINE" title="点击跳转" data-astro-cid-3ef6ksr2>查看该项目的Github储存库</a> </li> </ul> </nav> </header> `;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/components/Header.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="zh-cn" data-astro-cid-dmqsi53g> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.png"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Averia+Libre:wght@700&family=Averia+Serif+Libre:wght@300&family=Caveat&display=swap" rel="stylesheet">${renderComponent($$result, "SEO", $$SEO, { "title": config.title + " - " + config.description, "description": config.description, "canonical": config.url, "openGraph": {
    basic: {
      type: "website",
      title: config.title,
      url: config.url,
      image: config.image
    },
    optional: {
      description: config.description
    }
  }, "twitter": {
    card: "summary_large_image",
    site: "@上林青年办",
    title: config.title,
    description: config.description
  }, "data-astro-cid-dmqsi53g": true })}${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.HEADER_INJECT)}` })}${renderHead()}</head> <body data-astro-cid-dmqsi53g> <main data-astro-cid-dmqsi53g> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-dmqsi53g": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-dmqsi53g": true })} </main>  ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.FOOTER_INJECT)}` })} </body></html>`;
}, "H:/oooooooooooooooooooooooooooooooooooooooooooooooooooo.online/src/components/Layout.astro", void 0);

export { $$Layout as $ };
