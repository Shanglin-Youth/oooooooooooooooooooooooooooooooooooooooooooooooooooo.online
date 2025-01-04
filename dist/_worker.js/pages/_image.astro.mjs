globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../renderers.mjs';

const page = () => Promise.resolve().then(() => imageEndpoint);

// NOTE: this file is empty on purpose
// it allows use to offer `imageService: 'compile'`

const imageEndpoint = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

export { page };
