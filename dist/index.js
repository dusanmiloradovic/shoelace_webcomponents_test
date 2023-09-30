(() => {
  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3Y6SB6QS.js
  var basePath = "";
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath(subpath = "") {
    if (!basePath) {
      const scripts = [...document.getElementsByTagName("script")];
      const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
      if (configScript) {
        setBasePath(configScript.getAttribute("data-shoelace"));
      } else {
        const fallbackScript = scripts.find((s6) => {
          return /shoelace(\.min)?\.js($|\?)/.test(s6.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s6.src);
        });
        let path = "";
        if (fallbackScript) {
          path = fallbackScript.getAttribute("src");
        }
        setBasePath(path.split("/").slice(0, -1).join("/"));
      }
    }
    return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6M63UXML.js
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a4, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a4, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a4, prop, b2[prop]);
      }
    return a4;
  };
  var __spreadProps = (a4, b2) => __defProps(a4, __getOwnPropDescs(b2));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i7 = decorators.length - 1, decorator; i7 >= 0; i7--)
      if (decorator = decorators[i7])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t6, e8, n8) {
      if (this._$cssResult$ = true, n8 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t6, this.t = e8;
    }
    get styleSheet() {
      let t6 = this.o;
      const s6 = this.t;
      if (e && void 0 === t6) {
        const e8 = void 0 !== s6 && 1 === s6.length;
        e8 && (t6 = n.get(s6)), void 0 === t6 && ((this.o = t6 = new CSSStyleSheet()).replaceSync(this.cssText), e8 && n.set(s6, t6));
      }
      return t6;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t6) => new o("string" == typeof t6 ? t6 : t6 + "", void 0, s);
  var i = (t6, ...e8) => {
    const n8 = 1 === t6.length ? t6[0] : e8.reduce((e9, s6, n9) => e9 + ((t7) => {
      if (true === t7._$cssResult$)
        return t7.cssText;
      if ("number" == typeof t7)
        return t7;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t7 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s6) + t6[n9 + 1], t6[0]);
    return new o(n8, t6, s);
  };
  var S = (s6, n8) => {
    e ? s6.adoptedStyleSheets = n8.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet) : n8.forEach((e8) => {
      const n9 = document.createElement("style"), o7 = t.litNonce;
      void 0 !== o7 && n9.setAttribute("nonce", o7), n9.textContent = e8.cssText, s6.appendChild(n9);
    });
  };
  var c = e ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
    let e8 = "";
    for (const s6 of t7.cssRules)
      e8 += s6.cssText;
    return r(e8);
  })(t6) : t6;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t6, i7) {
    switch (i7) {
      case Boolean:
        t6 = t6 ? h : null;
        break;
      case Object:
      case Array:
        t6 = null == t6 ? t6 : JSON.stringify(t6);
    }
    return t6;
  }, fromAttribute(t6, i7) {
    let s6 = t6;
    switch (i7) {
      case Boolean:
        s6 = null !== t6;
        break;
      case Number:
        s6 = null === t6 ? null : Number(t6);
        break;
      case Object:
      case Array:
        try {
          s6 = JSON.parse(t6);
        } catch (t7) {
          s6 = null;
        }
    }
    return s6;
  } };
  var a = (t6, i7) => i7 !== t6 && (i7 == i7 || t6 == t6);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = "finalized";
  var u = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
    }
    static addInitializer(t6) {
      var i7;
      this.finalize(), (null !== (i7 = this.h) && void 0 !== i7 ? i7 : this.h = []).push(t6);
    }
    static get observedAttributes() {
      this.finalize();
      const t6 = [];
      return this.elementProperties.forEach((i7, s6) => {
        const e8 = this._$Ep(s6, i7);
        void 0 !== e8 && (this._$Ev.set(e8, s6), t6.push(e8));
      }), t6;
    }
    static createProperty(t6, i7 = l) {
      if (i7.state && (i7.attribute = false), this.finalize(), this.elementProperties.set(t6, i7), !i7.noAccessor && !this.prototype.hasOwnProperty(t6)) {
        const s6 = "symbol" == typeof t6 ? Symbol() : "__" + t6, e8 = this.getPropertyDescriptor(t6, s6, i7);
        void 0 !== e8 && Object.defineProperty(this.prototype, t6, e8);
      }
    }
    static getPropertyDescriptor(t6, i7, s6) {
      return { get() {
        return this[i7];
      }, set(e8) {
        const r4 = this[t6];
        this[i7] = e8, this.requestUpdate(t6, r4, s6);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t6) {
      return this.elementProperties.get(t6) || l;
    }
    static finalize() {
      if (this.hasOwnProperty(d))
        return false;
      this[d] = true;
      const t6 = Object.getPrototypeOf(this);
      if (t6.finalize(), void 0 !== t6.h && (this.h = [...t6.h]), this.elementProperties = new Map(t6.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t7 = this.properties, i7 = [...Object.getOwnPropertyNames(t7), ...Object.getOwnPropertySymbols(t7)];
        for (const s6 of i7)
          this.createProperty(s6, t7[s6]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i7) {
      const s6 = [];
      if (Array.isArray(i7)) {
        const e8 = new Set(i7.flat(1 / 0).reverse());
        for (const i8 of e8)
          s6.unshift(c(i8));
      } else
        void 0 !== i7 && s6.push(c(i7));
      return s6;
    }
    static _$Ep(t6, i7) {
      const s6 = i7.attribute;
      return false === s6 ? void 0 : "string" == typeof s6 ? s6 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
    }
    _$Eu() {
      var t6;
      this._$E_ = new Promise((t7) => this.enableUpdating = t7), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t6 = this.constructor.h) || void 0 === t6 || t6.forEach((t7) => t7(this));
    }
    addController(t6) {
      var i7, s6;
      (null !== (i7 = this._$ES) && void 0 !== i7 ? i7 : this._$ES = []).push(t6), void 0 !== this.renderRoot && this.isConnected && (null === (s6 = t6.hostConnected) || void 0 === s6 || s6.call(t6));
    }
    removeController(t6) {
      var i7;
      null === (i7 = this._$ES) || void 0 === i7 || i7.splice(this._$ES.indexOf(t6) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t6, i7) => {
        this.hasOwnProperty(i7) && (this._$Ei.set(i7, this[i7]), delete this[i7]);
      });
    }
    createRenderRoot() {
      var t6;
      const s6 = null !== (t6 = this.shadowRoot) && void 0 !== t6 ? t6 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s6, this.constructor.elementStyles), s6;
    }
    connectedCallback() {
      var t6;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t6 = this._$ES) || void 0 === t6 || t6.forEach((t7) => {
        var i7;
        return null === (i7 = t7.hostConnected) || void 0 === i7 ? void 0 : i7.call(t7);
      });
    }
    enableUpdating(t6) {
    }
    disconnectedCallback() {
      var t6;
      null === (t6 = this._$ES) || void 0 === t6 || t6.forEach((t7) => {
        var i7;
        return null === (i7 = t7.hostDisconnected) || void 0 === i7 ? void 0 : i7.call(t7);
      });
    }
    attributeChangedCallback(t6, i7, s6) {
      this._$AK(t6, s6);
    }
    _$EO(t6, i7, s6 = l) {
      var e8;
      const r4 = this.constructor._$Ep(t6, s6);
      if (void 0 !== r4 && true === s6.reflect) {
        const h3 = (void 0 !== (null === (e8 = s6.converter) || void 0 === e8 ? void 0 : e8.toAttribute) ? s6.converter : n2).toAttribute(i7, s6.type);
        this._$El = t6, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
      }
    }
    _$AK(t6, i7) {
      var s6;
      const e8 = this.constructor, r4 = e8._$Ev.get(t6);
      if (void 0 !== r4 && this._$El !== r4) {
        const t7 = e8.getPropertyOptions(r4), h3 = "function" == typeof t7.converter ? { fromAttribute: t7.converter } : void 0 !== (null === (s6 = t7.converter) || void 0 === s6 ? void 0 : s6.fromAttribute) ? t7.converter : n2;
        this._$El = r4, this[r4] = h3.fromAttribute(i7, t7.type), this._$El = null;
      }
    }
    requestUpdate(t6, i7, s6) {
      let e8 = true;
      void 0 !== t6 && (((s6 = s6 || this.constructor.getPropertyOptions(t6)).hasChanged || a)(this[t6], i7) ? (this._$AL.has(t6) || this._$AL.set(t6, i7), true === s6.reflect && this._$El !== t6 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t6, s6))) : e8 = false), !this.isUpdatePending && e8 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t7) {
        Promise.reject(t7);
      }
      const t6 = this.scheduleUpdate();
      return null != t6 && await t6, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t6;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t7, i8) => this[i8] = t7), this._$Ei = void 0);
      let i7 = false;
      const s6 = this._$AL;
      try {
        i7 = this.shouldUpdate(s6), i7 ? (this.willUpdate(s6), null === (t6 = this._$ES) || void 0 === t6 || t6.forEach((t7) => {
          var i8;
          return null === (i8 = t7.hostUpdate) || void 0 === i8 ? void 0 : i8.call(t7);
        }), this.update(s6)) : this._$Ek();
      } catch (t7) {
        throw i7 = false, this._$Ek(), t7;
      }
      i7 && this._$AE(s6);
    }
    willUpdate(t6) {
    }
    _$AE(t6) {
      var i7;
      null === (i7 = this._$ES) || void 0 === i7 || i7.forEach((t7) => {
        var i8;
        return null === (i8 = t7.hostUpdated) || void 0 === i8 ? void 0 : i8.call(t7);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t6) {
      return true;
    }
    update(t6) {
      void 0 !== this._$EC && (this._$EC.forEach((t7, i7) => this._$EO(i7, this[i7], t7)), this._$EC = void 0), this._$Ek();
    }
    updated(t6) {
    }
    firstUpdated(t6) {
    }
  };
  u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.3");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t6) => t6 }) : void 0;
  var o3 = "$lit$";
  var n3 = `lit$${(Math.random() + "").slice(9)}$`;
  var l2 = "?" + n3;
  var h2 = `<${l2}>`;
  var r3 = document;
  var u2 = () => r3.createComment("");
  var d2 = (t6) => null === t6 || "object" != typeof t6 && "function" != typeof t6;
  var c2 = Array.isArray;
  var v = (t6) => c2(t6) || "function" == typeof (null == t6 ? void 0 : t6[Symbol.iterator]);
  var a2 = "[ 	\n\f\r]";
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y = /^(?:script|style|textarea|title)$/i;
  var w = (t6) => (i7, ...s6) => ({ _$litType$: t6, strings: i7, values: s6 });
  var x = w(1);
  var b = w(2);
  var T = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var E = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129, null, false);
  function P(t6, i7) {
    if (!Array.isArray(t6) || !t6.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== e3 ? e3.createHTML(i7) : i7;
  }
  var V = (t6, i7) => {
    const s6 = t6.length - 1, e8 = [];
    let l8, r4 = 2 === i7 ? "<svg>" : "", u4 = f;
    for (let i8 = 0; i8 < s6; i8++) {
      const s7 = t6[i8];
      let d3, c3, v2 = -1, a4 = 0;
      for (; a4 < s7.length && (u4.lastIndex = a4, c3 = u4.exec(s7), null !== c3); )
        a4 = u4.lastIndex, u4 === f ? "!--" === c3[1] ? u4 = _ : void 0 !== c3[1] ? u4 = m : void 0 !== c3[2] ? (y.test(c3[2]) && (l8 = RegExp("</" + c3[2], "g")), u4 = p) : void 0 !== c3[3] && (u4 = p) : u4 === p ? ">" === c3[0] ? (u4 = null != l8 ? l8 : f, v2 = -1) : void 0 === c3[1] ? v2 = -2 : (v2 = u4.lastIndex - c3[2].length, d3 = c3[1], u4 = void 0 === c3[3] ? p : '"' === c3[3] ? $ : g) : u4 === $ || u4 === g ? u4 = p : u4 === _ || u4 === m ? u4 = f : (u4 = p, l8 = void 0);
      const w2 = u4 === p && t6[i8 + 1].startsWith("/>") ? " " : "";
      r4 += u4 === f ? s7 + h2 : v2 >= 0 ? (e8.push(d3), s7.slice(0, v2) + o3 + s7.slice(v2) + n3 + w2) : s7 + n3 + (-2 === v2 ? (e8.push(void 0), i8) : w2);
    }
    return [P(t6, r4 + (t6[s6] || "<?>") + (2 === i7 ? "</svg>" : "")), e8];
  };
  var N = class _N {
    constructor({ strings: t6, _$litType$: i7 }, e8) {
      let h3;
      this.parts = [];
      let r4 = 0, d3 = 0;
      const c3 = t6.length - 1, v2 = this.parts, [a4, f2] = V(t6, i7);
      if (this.el = _N.createElement(a4, e8), C.currentNode = this.el.content, 2 === i7) {
        const t7 = this.el.content, i8 = t7.firstChild;
        i8.remove(), t7.append(...i8.childNodes);
      }
      for (; null !== (h3 = C.nextNode()) && v2.length < c3; ) {
        if (1 === h3.nodeType) {
          if (h3.hasAttributes()) {
            const t7 = [];
            for (const i8 of h3.getAttributeNames())
              if (i8.endsWith(o3) || i8.startsWith(n3)) {
                const s6 = f2[d3++];
                if (t7.push(i8), void 0 !== s6) {
                  const t8 = h3.getAttribute(s6.toLowerCase() + o3).split(n3), i9 = /([.?@])?(.*)/.exec(s6);
                  v2.push({ type: 1, index: r4, name: i9[2], strings: t8, ctor: "." === i9[1] ? H : "?" === i9[1] ? L : "@" === i9[1] ? z : k });
                } else
                  v2.push({ type: 6, index: r4 });
              }
            for (const i8 of t7)
              h3.removeAttribute(i8);
          }
          if (y.test(h3.tagName)) {
            const t7 = h3.textContent.split(n3), i8 = t7.length - 1;
            if (i8 > 0) {
              h3.textContent = s3 ? s3.emptyScript : "";
              for (let s6 = 0; s6 < i8; s6++)
                h3.append(t7[s6], u2()), C.nextNode(), v2.push({ type: 2, index: ++r4 });
              h3.append(t7[i8], u2());
            }
          }
        } else if (8 === h3.nodeType)
          if (h3.data === l2)
            v2.push({ type: 2, index: r4 });
          else {
            let t7 = -1;
            for (; -1 !== (t7 = h3.data.indexOf(n3, t7 + 1)); )
              v2.push({ type: 7, index: r4 }), t7 += n3.length - 1;
          }
        r4++;
      }
    }
    static createElement(t6, i7) {
      const s6 = r3.createElement("template");
      return s6.innerHTML = t6, s6;
    }
  };
  function S2(t6, i7, s6 = t6, e8) {
    var o7, n8, l8, h3;
    if (i7 === T)
      return i7;
    let r4 = void 0 !== e8 ? null === (o7 = s6._$Co) || void 0 === o7 ? void 0 : o7[e8] : s6._$Cl;
    const u4 = d2(i7) ? void 0 : i7._$litDirective$;
    return (null == r4 ? void 0 : r4.constructor) !== u4 && (null === (n8 = null == r4 ? void 0 : r4._$AO) || void 0 === n8 || n8.call(r4, false), void 0 === u4 ? r4 = void 0 : (r4 = new u4(t6), r4._$AT(t6, s6, e8)), void 0 !== e8 ? (null !== (l8 = (h3 = s6)._$Co) && void 0 !== l8 ? l8 : h3._$Co = [])[e8] = r4 : s6._$Cl = r4), void 0 !== r4 && (i7 = S2(t6, r4._$AS(t6, i7.values), r4, e8)), i7;
  }
  var M = class {
    constructor(t6, i7) {
      this._$AV = [], this._$AN = void 0, this._$AD = t6, this._$AM = i7;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t6) {
      var i7;
      const { el: { content: s6 }, parts: e8 } = this._$AD, o7 = (null !== (i7 = null == t6 ? void 0 : t6.creationScope) && void 0 !== i7 ? i7 : r3).importNode(s6, true);
      C.currentNode = o7;
      let n8 = C.nextNode(), l8 = 0, h3 = 0, u4 = e8[0];
      for (; void 0 !== u4; ) {
        if (l8 === u4.index) {
          let i8;
          2 === u4.type ? i8 = new R(n8, n8.nextSibling, this, t6) : 1 === u4.type ? i8 = new u4.ctor(n8, u4.name, u4.strings, this, t6) : 6 === u4.type && (i8 = new Z(n8, this, t6)), this._$AV.push(i8), u4 = e8[++h3];
        }
        l8 !== (null == u4 ? void 0 : u4.index) && (n8 = C.nextNode(), l8++);
      }
      return C.currentNode = r3, o7;
    }
    v(t6) {
      let i7 = 0;
      for (const s6 of this._$AV)
        void 0 !== s6 && (void 0 !== s6.strings ? (s6._$AI(t6, s6, i7), i7 += s6.strings.length - 2) : s6._$AI(t6[i7])), i7++;
    }
  };
  var R = class _R {
    constructor(t6, i7, s6, e8) {
      var o7;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t6, this._$AB = i7, this._$AM = s6, this.options = e8, this._$Cp = null === (o7 = null == e8 ? void 0 : e8.isConnected) || void 0 === o7 || o7;
    }
    get _$AU() {
      var t6, i7;
      return null !== (i7 = null === (t6 = this._$AM) || void 0 === t6 ? void 0 : t6._$AU) && void 0 !== i7 ? i7 : this._$Cp;
    }
    get parentNode() {
      let t6 = this._$AA.parentNode;
      const i7 = this._$AM;
      return void 0 !== i7 && 11 === (null == t6 ? void 0 : t6.nodeType) && (t6 = i7.parentNode), t6;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t6, i7 = this) {
      t6 = S2(this, t6, i7), d2(t6) ? t6 === A || null == t6 || "" === t6 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t6 !== this._$AH && t6 !== T && this._(t6) : void 0 !== t6._$litType$ ? this.g(t6) : void 0 !== t6.nodeType ? this.$(t6) : v(t6) ? this.T(t6) : this._(t6);
    }
    k(t6) {
      return this._$AA.parentNode.insertBefore(t6, this._$AB);
    }
    $(t6) {
      this._$AH !== t6 && (this._$AR(), this._$AH = this.k(t6));
    }
    _(t6) {
      this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t6 : this.$(r3.createTextNode(t6)), this._$AH = t6;
    }
    g(t6) {
      var i7;
      const { values: s6, _$litType$: e8 } = t6, o7 = "number" == typeof e8 ? this._$AC(t6) : (void 0 === e8.el && (e8.el = N.createElement(P(e8.h, e8.h[0]), this.options)), e8);
      if ((null === (i7 = this._$AH) || void 0 === i7 ? void 0 : i7._$AD) === o7)
        this._$AH.v(s6);
      else {
        const t7 = new M(o7, this), i8 = t7.u(this.options);
        t7.v(s6), this.$(i8), this._$AH = t7;
      }
    }
    _$AC(t6) {
      let i7 = E.get(t6.strings);
      return void 0 === i7 && E.set(t6.strings, i7 = new N(t6)), i7;
    }
    T(t6) {
      c2(this._$AH) || (this._$AH = [], this._$AR());
      const i7 = this._$AH;
      let s6, e8 = 0;
      for (const o7 of t6)
        e8 === i7.length ? i7.push(s6 = new _R(this.k(u2()), this.k(u2()), this, this.options)) : s6 = i7[e8], s6._$AI(o7), e8++;
      e8 < i7.length && (this._$AR(s6 && s6._$AB.nextSibling, e8), i7.length = e8);
    }
    _$AR(t6 = this._$AA.nextSibling, i7) {
      var s6;
      for (null === (s6 = this._$AP) || void 0 === s6 || s6.call(this, false, true, i7); t6 && t6 !== this._$AB; ) {
        const i8 = t6.nextSibling;
        t6.remove(), t6 = i8;
      }
    }
    setConnected(t6) {
      var i7;
      void 0 === this._$AM && (this._$Cp = t6, null === (i7 = this._$AP) || void 0 === i7 || i7.call(this, t6));
    }
  };
  var k = class {
    constructor(t6, i7, s6, e8, o7) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t6, this.name = i7, this._$AM = e8, this.options = o7, s6.length > 2 || "" !== s6[0] || "" !== s6[1] ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t6, i7 = this, s6, e8) {
      const o7 = this.strings;
      let n8 = false;
      if (void 0 === o7)
        t6 = S2(this, t6, i7, 0), n8 = !d2(t6) || t6 !== this._$AH && t6 !== T, n8 && (this._$AH = t6);
      else {
        const e9 = t6;
        let l8, h3;
        for (t6 = o7[0], l8 = 0; l8 < o7.length - 1; l8++)
          h3 = S2(this, e9[s6 + l8], i7, l8), h3 === T && (h3 = this._$AH[l8]), n8 || (n8 = !d2(h3) || h3 !== this._$AH[l8]), h3 === A ? t6 = A : t6 !== A && (t6 += (null != h3 ? h3 : "") + o7[l8 + 1]), this._$AH[l8] = h3;
      }
      n8 && !e8 && this.j(t6);
    }
    j(t6) {
      t6 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t6 ? t6 : "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t6) {
      this.element[this.name] = t6 === A ? void 0 : t6;
    }
  };
  var I = s3 ? s3.emptyScript : "";
  var L = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t6) {
      t6 && t6 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
  };
  var z = class extends k {
    constructor(t6, i7, s6, e8, o7) {
      super(t6, i7, s6, e8, o7), this.type = 5;
    }
    _$AI(t6, i7 = this) {
      var s6;
      if ((t6 = null !== (s6 = S2(this, t6, i7, 0)) && void 0 !== s6 ? s6 : A) === T)
        return;
      const e8 = this._$AH, o7 = t6 === A && e8 !== A || t6.capture !== e8.capture || t6.once !== e8.once || t6.passive !== e8.passive, n8 = t6 !== A && (e8 === A || o7);
      o7 && this.element.removeEventListener(this.name, this, e8), n8 && this.element.addEventListener(this.name, this, t6), this._$AH = t6;
    }
    handleEvent(t6) {
      var i7, s6;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s6 = null === (i7 = this.options) || void 0 === i7 ? void 0 : i7.host) && void 0 !== s6 ? s6 : this.element, t6) : this._$AH.handleEvent(t6);
    }
  };
  var Z = class {
    constructor(t6, i7, s6) {
      this.element = t6, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s6;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t6) {
      S2(this, t6);
    }
  };
  var j = { O: o3, P: n3, A: l2, C: 1, M: V, L: M, R: v, D: S2, I: R, V: k, H: L, N: z, U: H, F: Z };
  var B = i2.litHtmlPolyfillSupport;
  null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
  var D = (t6, i7, s6) => {
    var e8, o7;
    const n8 = null !== (e8 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== e8 ? e8 : i7;
    let l8 = n8._$litPart$;
    if (void 0 === l8) {
      const t7 = null !== (o7 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== o7 ? o7 : null;
      n8._$litPart$ = l8 = new R(i7.insertBefore(u2(), t7), t7, void 0, null != s6 ? s6 : {});
    }
    return l8._$AI(t6), l8;
  };

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends u {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t6, e8;
      const i7 = super.createRenderRoot();
      return null !== (t6 = (e8 = this.renderOptions).renderBefore) && void 0 !== t6 || (e8.renderBefore = i7.firstChild), i7;
    }
    update(t6) {
      const i7 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t6), this._$Do = D(i7, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t6;
      super.connectedCallback(), null === (t6 = this._$Do) || void 0 === t6 || t6.setConnected(true);
    }
    disconnectedCallback() {
      var t6;
      super.disconnectedCallback(), null === (t6 = this._$Do) || void 0 === t6 || t6.setConnected(false);
    }
    render() {
      return T;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.3");

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
  var component_styles_default = i`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CAHT2E74.js
  var spinner_styles_default = i`
  ${component_styles_default}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;

  // node_modules/@shoelace-style/localize/dist/index.js
  var connectedElements = /* @__PURE__ */ new Set();
  var documentElementObserver = new MutationObserver(update);
  var translations = /* @__PURE__ */ new Map();
  var documentDirection = document.documentElement.dir || "ltr";
  var documentLanguage = document.documentElement.lang || navigator.language;
  var fallback;
  documentElementObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir", "lang"]
  });
  function registerTranslation(...translation2) {
    translation2.map((t6) => {
      const code = t6.$code.toLowerCase();
      if (translations.has(code)) {
        translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t6));
      } else {
        translations.set(code, t6);
      }
      if (!fallback) {
        fallback = t6;
      }
    });
    update();
  }
  function update() {
    documentDirection = document.documentElement.dir || "ltr";
    documentLanguage = document.documentElement.lang || navigator.language;
    [...connectedElements.keys()].map((el) => {
      if (typeof el.requestUpdate === "function") {
        el.requestUpdate();
      }
    });
  }
  var LocalizeController = class {
    constructor(host) {
      this.host = host;
      this.host.addController(this);
    }
    hostConnected() {
      connectedElements.add(this.host);
    }
    hostDisconnected() {
      connectedElements.delete(this.host);
    }
    dir() {
      return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
      return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
      var _a, _b;
      const locale = new Intl.Locale(lang.replace(/_/g, "-"));
      const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
      const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
      const primary = translations.get(`${language}-${region}`);
      const secondary = translations.get(language);
      return { locale, language, region, primary, secondary };
    }
    exists(key, options) {
      var _a;
      const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
      options = Object.assign({ includeFallback: false }, options);
      if (primary && primary[key] || secondary && secondary[key] || options.includeFallback && fallback && fallback[key]) {
        return true;
      }
      return false;
    }
    term(key, ...args) {
      const { primary, secondary } = this.getTranslationData(this.lang());
      let term;
      if (primary && primary[key]) {
        term = primary[key];
      } else if (secondary && secondary[key]) {
        term = secondary[key];
      } else if (fallback && fallback[key]) {
        term = fallback[key];
      } else {
        console.error(`No translation found for: ${String(key)}`);
        return String(key);
      }
      if (typeof term === "function") {
        return term(...args);
      }
      return term;
    }
    date(dateToFormat, options) {
      dateToFormat = new Date(dateToFormat);
      return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
      numberToFormat = Number(numberToFormat);
      return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
      return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2A3352EO.js
  var LocalizeController2 = class extends LocalizeController {
  };

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i7, e8) => "method" === e8.kind && e8.descriptor && !("value" in e8.descriptor) ? { ...e8, finisher(n8) {
    n8.createProperty(e8.key, i7);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e8.key, initializer() {
    "function" == typeof e8.initializer && (this[e8.key] = e8.initializer.call(this));
  }, finisher(n8) {
    n8.createProperty(e8.key, i7);
  } };
  var e4 = (i7, e8, n8) => {
    e8.constructor.createProperty(n8, i7);
  };
  function n5(n8) {
    return (t6, o7) => void 0 !== o7 ? e4(n8, t6, o7) : i3(n8, t6);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function t3(t6) {
    return n5({ ...t6, state: true });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o5 = ({ finisher: e8, descriptor: t6 }) => (o7, n8) => {
    var r4;
    if (void 0 === n8) {
      const n9 = null !== (r4 = o7.originalKey) && void 0 !== r4 ? r4 : o7.key, i7 = null != t6 ? { kind: "method", placement: "prototype", key: n9, descriptor: t6(o7.key) } : { ...o7, key: n9 };
      return null != e8 && (i7.finisher = function(t7) {
        e8(t7, n9);
      }), i7;
    }
    {
      const r5 = o7.constructor;
      void 0 !== t6 && Object.defineProperty(o7, n8, t6(n8)), null == e8 || e8(r5, n8);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i4(i7, n8) {
    return o5({ descriptor: (o7) => {
      const t6 = { get() {
        var o8, n9;
        return null !== (n9 = null === (o8 = this.renderRoot) || void 0 === o8 ? void 0 : o8.querySelector(i7)) && void 0 !== n9 ? n9 : null;
      }, enumerable: true, configurable: true };
      if (n8) {
        const n9 = "symbol" == typeof o7 ? Symbol() : "__" + o7;
        t6.get = function() {
          var o8, t7;
          return void 0 === this[n9] && (this[n9] = null !== (t7 = null === (o8 = this.renderRoot) || void 0 === o8 ? void 0 : o8.querySelector(i7)) && void 0 !== t7 ? t7 : null), this[n9];
        };
      }
      return t6;
    } });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n6;
  var e5 = null != (null === (n6 = window.HTMLSlotElement) || void 0 === n6 ? void 0 : n6.prototype.assignedElements) ? (o7, n8) => o7.assignedElements(n8) : (o7, n8) => o7.assignedNodes(n8).filter((o8) => o8.nodeType === Node.ELEMENT_NODE);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PZ6RRH2A.js
  var ShoelaceElement = class extends s4 {
    constructor() {
      super();
      Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
        this.constructor.define(name, component);
      });
    }
    emit(name, options) {
      const event = new CustomEvent(name, __spreadValues({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      this.dispatchEvent(event);
      return event;
    }
    /* eslint-enable */
    static define(name, elementConstructor = this, options = {}) {
      const currentlyRegisteredConstructor = customElements.get(name);
      if (!currentlyRegisteredConstructor) {
        customElements.define(name, class extends elementConstructor {
        }, options);
        return;
      }
      let newVersion = " (unknown version)";
      let existingVersion = newVersion;
      if ("version" in elementConstructor && elementConstructor.version) {
        newVersion = " v" + elementConstructor.version;
      }
      if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
        existingVersion = " v" + currentlyRegisteredConstructor.version;
      }
      if (newVersion && existingVersion && newVersion === existingVersion) {
        return;
      }
      console.warn(
        `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
      );
    }
  };
  ShoelaceElement.version = "2.9.0";
  ShoelaceElement.dependencies = {};
  __decorateClass([
    n5()
  ], ShoelaceElement.prototype, "dir", 2);
  __decorateClass([
    n5()
  ], ShoelaceElement.prototype, "lang", 2);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7QVF7SCV.js
  var SlSpinner = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
    }
    render() {
      return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
  };
  SlSpinner.styles = spinner_styles_default;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GZKNJ77J.js
  var formCollections = /* @__PURE__ */ new WeakMap();
  var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
  var userInteractedControls = /* @__PURE__ */ new WeakSet();
  var interactions = /* @__PURE__ */ new WeakMap();
  var FormControlController = class {
    constructor(host, options) {
      this.handleFormData = (event) => {
        const disabled = this.options.disabled(this.host);
        const name = this.options.name(this.host);
        const value = this.options.value(this.host);
        const isButton = this.host.tagName.toLowerCase() === "sl-button";
        if (!disabled && !isButton && typeof name === "string" && name.length > 0 && typeof value !== "undefined") {
          if (Array.isArray(value)) {
            value.forEach((val) => {
              event.formData.append(name, val.toString());
            });
          } else {
            event.formData.append(name, value.toString());
          }
        }
      };
      this.handleFormSubmit = (event) => {
        var _a;
        const disabled = this.options.disabled(this.host);
        const reportValidity = this.options.reportValidity;
        if (this.form && !this.form.noValidate) {
          (_a = formCollections.get(this.form)) == null ? void 0 : _a.forEach((control) => {
            this.setUserInteracted(control, true);
          });
        }
        if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      this.handleFormReset = () => {
        this.options.setValue(this.host, this.options.defaultValue(this.host));
        this.setUserInteracted(this.host, false);
        interactions.set(this.host, []);
      };
      this.handleInteraction = (event) => {
        const emittedEvents = interactions.get(this.host);
        if (!emittedEvents.includes(event.type)) {
          emittedEvents.push(event.type);
        }
        if (emittedEvents.length === this.options.assumeInteractionOn.length) {
          this.setUserInteracted(this.host, true);
        }
      };
      this.reportFormValidity = () => {
        if (this.form && !this.form.noValidate) {
          const elements = this.form.querySelectorAll("*");
          for (const element2 of elements) {
            if (typeof element2.reportValidity === "function") {
              if (!element2.reportValidity()) {
                return false;
              }
            }
          }
        }
        return true;
      };
      (this.host = host).addController(this);
      this.options = __spreadValues({
        form: (input) => {
          if (input.hasAttribute("form") && input.getAttribute("form") !== "") {
            const root = input.getRootNode();
            const formId = input.getAttribute("form");
            if (formId) {
              return root.getElementById(formId);
            }
          }
          return input.closest("form");
        },
        name: (input) => input.name,
        value: (input) => input.value,
        defaultValue: (input) => input.defaultValue,
        disabled: (input) => {
          var _a;
          return (_a = input.disabled) != null ? _a : false;
        },
        reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
        setValue: (input, value) => input.value = value,
        assumeInteractionOn: ["sl-input"]
      }, options);
    }
    hostConnected() {
      const form = this.options.form(this.host);
      if (form) {
        this.attachForm(form);
      }
      interactions.set(this.host, []);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.addEventListener(event, this.handleInteraction);
      });
    }
    hostDisconnected() {
      this.detachForm();
      interactions.delete(this.host);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.removeEventListener(event, this.handleInteraction);
      });
    }
    hostUpdated() {
      const form = this.options.form(this.host);
      if (!form) {
        this.detachForm();
      }
      if (form && this.form !== form) {
        this.detachForm();
        this.attachForm(form);
      }
      if (this.host.hasUpdated) {
        this.setValidity(this.host.validity.valid);
      }
    }
    attachForm(form) {
      if (form) {
        this.form = form;
        if (formCollections.has(this.form)) {
          formCollections.get(this.form).add(this.host);
        } else {
          formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
        }
        this.form.addEventListener("formdata", this.handleFormData);
        this.form.addEventListener("submit", this.handleFormSubmit);
        this.form.addEventListener("reset", this.handleFormReset);
        if (!reportValidityOverloads.has(this.form)) {
          reportValidityOverloads.set(this.form, this.form.reportValidity);
          this.form.reportValidity = () => this.reportFormValidity();
        }
      } else {
        this.form = void 0;
      }
    }
    detachForm() {
      var _a;
      if (this.form) {
        (_a = formCollections.get(this.form)) == null ? void 0 : _a.delete(this.host);
        this.form.removeEventListener("formdata", this.handleFormData);
        this.form.removeEventListener("submit", this.handleFormSubmit);
        this.form.removeEventListener("reset", this.handleFormReset);
        if (reportValidityOverloads.has(this.form)) {
          this.form.reportValidity = reportValidityOverloads.get(this.form);
          reportValidityOverloads.delete(this.form);
        }
      }
      this.form = void 0;
    }
    setUserInteracted(el, hasInteracted) {
      if (hasInteracted) {
        userInteractedControls.add(el);
      } else {
        userInteractedControls.delete(el);
      }
      el.requestUpdate();
    }
    doAction(type, submitter) {
      if (this.form) {
        const button = document.createElement("button");
        button.type = type;
        button.style.position = "absolute";
        button.style.width = "0";
        button.style.height = "0";
        button.style.clipPath = "inset(50%)";
        button.style.overflow = "hidden";
        button.style.whiteSpace = "nowrap";
        if (submitter) {
          button.name = submitter.name;
          button.value = submitter.value;
          ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
            if (submitter.hasAttribute(attr)) {
              button.setAttribute(attr, submitter.getAttribute(attr));
            }
          });
        }
        this.form.append(button);
        button.click();
        button.remove();
      }
    }
    /** Returns the associated `<form>` element, if one exists. */
    getForm() {
      var _a;
      return (_a = this.form) != null ? _a : null;
    }
    /** Resets the form, restoring all the control to their default value */
    reset(submitter) {
      this.doAction("reset", submitter);
    }
    /** Submits the form, triggering validation and form data injection. */
    submit(submitter) {
      this.doAction("submit", submitter);
    }
    /**
     * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
     * the host element immediately, i.e. before Lit updates the component in the next update.
     */
    setValidity(isValid) {
      const host = this.host;
      const hasInteracted = Boolean(userInteractedControls.has(host));
      const required = Boolean(host.required);
      host.toggleAttribute("data-required", required);
      host.toggleAttribute("data-optional", !required);
      host.toggleAttribute("data-invalid", !isValid);
      host.toggleAttribute("data-valid", isValid);
      host.toggleAttribute("data-user-invalid", !isValid && hasInteracted);
      host.toggleAttribute("data-user-valid", isValid && hasInteracted);
    }
    /**
     * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
     * that affects constraint validation changes so the component receives the correct validity states.
     */
    updateValidity() {
      const host = this.host;
      this.setValidity(host.validity.valid);
    }
    /**
     * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
     * If the `sl-invalid` event will be cancelled then the original `invalid`
     * event (which may have been passed as argument) will also be cancelled.
     * If no original `invalid` event has been passed then the `sl-invalid`
     * event will be cancelled before being dispatched.
     */
    emitInvalidEvent(originalInvalidEvent) {
      const slInvalidEvent = new CustomEvent("sl-invalid", {
        bubbles: false,
        composed: false,
        cancelable: true,
        detail: {}
      });
      if (!originalInvalidEvent) {
        slInvalidEvent.preventDefault();
      }
      if (!this.host.dispatchEvent(slInvalidEvent)) {
        originalInvalidEvent == null ? void 0 : originalInvalidEvent.preventDefault();
      }
    }
  };
  var validValidityState = Object.freeze({
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false
  });
  var valueMissingValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    valueMissing: true
  }));
  var customErrorValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    customError: true
  }));

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VXRBGRCD.js
  var button_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      this.handleSlotChange = (event) => {
        const slot = event.target;
        if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
          this.host.requestUpdate();
        }
      };
      (this.host = host).addController(this);
      this.slotNames = slotNames;
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === "sl-visually-hidden") {
            return false;
          }
          if (!el.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
      return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js
  var library = {
    name: "default",
    resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
  };
  var library_default_default = library;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VRTJZYIC.js
  var icons = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
  };
  var systemLibrary = {
    name: "system",
    resolver: (name) => {
      if (name in icons) {
        return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
      }
      return "";
    }
  };
  var library_system_default = systemLibrary;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3WAW4E2K.js
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el) => el !== icon);
  }
  function getIconLibrary(name) {
    return registry.find((lib) => lib.name === name);
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LMJPQPQT.js
  var icon_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.C7FWPEOY.js
  function watch(propertyName, options) {
    const resolvedOptions = __spreadValues({
      waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName) => {
      const { update: update2 } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update2.call(this, changedProps);
      };
    };
  }

  // node_modules/lit-html/directive-helpers.js
  var { I: l5 } = j;
  var t4 = (o7, l8) => void 0 === l8 ? void 0 !== (null == o7 ? void 0 : o7._$litType$) : (null == o7 ? void 0 : o7._$litType$) === l8;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NDWJOB5Q.js
  var CACHEABLE_ERROR = Symbol();
  var RETRYABLE_ERROR = Symbol();
  var parser;
  var iconCache = /* @__PURE__ */ new Map();
  var SlIcon = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.initialRender = false;
      this.svg = null;
      this.label = "";
      this.library = "default";
    }
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    async resolveIcon(url, library2) {
      var _a;
      let fileData;
      if (library2 == null ? void 0 : library2.spriteSheet) {
        return x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
      }
      try {
        fileData = await fetch(url, { mode: "cors" });
        if (!fileData.ok)
          return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
      } catch (e8) {
        return RETRYABLE_ERROR;
      }
      try {
        const div = document.createElement("div");
        div.innerHTML = await fileData.text();
        const svg = div.firstElementChild;
        if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg")
          return CACHEABLE_ERROR;
        if (!parser)
          parser = new DOMParser();
        const doc = parser.parseFromString(svg.outerHTML, "text/html");
        const svgEl = doc.body.querySelector("svg");
        if (!svgEl)
          return CACHEABLE_ERROR;
        svgEl.part.add("svg");
        return document.adoptNode(svgEl);
      } catch (e8) {
        return CACHEABLE_ERROR;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated() {
      this.initialRender = true;
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getIconSource() {
      const library2 = getIconLibrary(this.library);
      if (this.name && library2) {
        return {
          url: library2.resolver(this.name),
          fromLibrary: true
        };
      }
      return {
        url: this.src,
        fromLibrary: false
      };
    }
    handleLabelChange() {
      const hasLabel = typeof this.label === "string" && this.label.length > 0;
      if (hasLabel) {
        this.setAttribute("role", "img");
        this.setAttribute("aria-label", this.label);
        this.removeAttribute("aria-hidden");
      } else {
        this.removeAttribute("role");
        this.removeAttribute("aria-label");
        this.setAttribute("aria-hidden", "true");
      }
    }
    async setIcon() {
      var _a;
      const { url, fromLibrary } = this.getIconSource();
      const library2 = fromLibrary ? getIconLibrary(this.library) : void 0;
      if (!url) {
        this.svg = null;
        return;
      }
      let iconResolver = iconCache.get(url);
      if (!iconResolver) {
        iconResolver = this.resolveIcon(url, library2);
        iconCache.set(url, iconResolver);
      }
      if (!this.initialRender) {
        return;
      }
      const svg = await iconResolver;
      if (svg === RETRYABLE_ERROR) {
        iconCache.delete(url);
      }
      if (url !== this.getIconSource().url) {
        return;
      }
      if (t4(svg)) {
        this.svg = svg;
        return;
      }
      switch (svg) {
        case RETRYABLE_ERROR:
        case CACHEABLE_ERROR:
          this.svg = null;
          this.emit("sl-error");
          break;
        default:
          this.svg = svg.cloneNode(true);
          (_a = library2 == null ? void 0 : library2.mutator) == null ? void 0 : _a.call(library2, this.svg);
          this.emit("sl-load");
      }
    }
    render() {
      return this.svg;
    }
  };
  SlIcon.styles = icon_styles_default;
  __decorateClass([
    t3()
  ], SlIcon.prototype, "svg", 2);
  __decorateClass([
    n5({ reflect: true })
  ], SlIcon.prototype, "name", 2);
  __decorateClass([
    n5()
  ], SlIcon.prototype, "src", 2);
  __decorateClass([
    n5()
  ], SlIcon.prototype, "label", 2);
  __decorateClass([
    n5({ reflect: true })
  ], SlIcon.prototype, "library", 2);
  __decorateClass([
    watch("label")
  ], SlIcon.prototype, "handleLabelChange", 1);
  __decorateClass([
    watch(["name", "src", "library"])
  ], SlIcon.prototype, "setIcon", 1);

  // node_modules/lit-html/directive.js
  var t5 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e6 = (t6) => (...e8) => ({ _$litDirective$: t6, values: e8 });
  var i5 = class {
    constructor(t6) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t6, e8, i7) {
      this._$Ct = t6, this._$AM = e8, this._$Ci = i7;
    }
    _$AS(t6, e8) {
      return this.update(t6, e8);
    }
    update(t6, e8) {
      return this.render(...e8);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var o6 = e6(class extends i5 {
    constructor(t6) {
      var i7;
      if (super(t6), t6.type !== t5.ATTRIBUTE || "class" !== t6.name || (null === (i7 = t6.strings) || void 0 === i7 ? void 0 : i7.length) > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t6) {
      return " " + Object.keys(t6).filter((i7) => t6[i7]).join(" ") + " ";
    }
    update(i7, [s6]) {
      var r4, o7;
      if (void 0 === this.it) {
        this.it = /* @__PURE__ */ new Set(), void 0 !== i7.strings && (this.nt = new Set(i7.strings.join(" ").split(/\s/).filter((t6) => "" !== t6)));
        for (const t6 in s6)
          s6[t6] && !(null === (r4 = this.nt) || void 0 === r4 ? void 0 : r4.has(t6)) && this.it.add(t6);
        return this.render(s6);
      }
      const e8 = i7.element.classList;
      this.it.forEach((t6) => {
        t6 in s6 || (e8.remove(t6), this.it.delete(t6));
      });
      for (const t6 in s6) {
        const i8 = !!s6[t6];
        i8 === this.it.has(t6) || (null === (o7 = this.nt) || void 0 === o7 ? void 0 : o7.has(t6)) || (i8 ? (e8.add(t6), this.it.add(t6)) : (e8.remove(t6), this.it.delete(t6)));
      }
      return T;
    }
  });

  // node_modules/lit-html/static.js
  var e7 = Symbol.for("");
  var l6 = (t6) => {
    if ((null == t6 ? void 0 : t6.r) === e7)
      return null == t6 ? void 0 : t6._$litStatic$;
  };
  var i6 = (t6, ...r4) => ({ _$litStatic$: r4.reduce((r5, e8, l8) => r5 + ((t7) => {
    if (void 0 !== t7._$litStatic$)
      return t7._$litStatic$;
    throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t7}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  })(e8) + t6[l8 + 1], t6[0]), r: e7 });
  var s5 = /* @__PURE__ */ new Map();
  var a3 = (t6) => (r4, ...e8) => {
    const o7 = e8.length;
    let i7, a4;
    const n8 = [], u4 = [];
    let c3, $2 = 0, f2 = false;
    for (; $2 < o7; ) {
      for (c3 = r4[$2]; $2 < o7 && void 0 !== (a4 = e8[$2], i7 = l6(a4)); )
        c3 += i7 + r4[++$2], f2 = true;
      $2 !== o7 && u4.push(a4), n8.push(c3), $2++;
    }
    if ($2 === o7 && n8.push(r4[o7]), f2) {
      const t7 = n8.join("$$lit$$");
      void 0 === (r4 = s5.get(t7)) && (n8.raw = n8, s5.set(t7, r4 = n8)), e8 = u4;
    }
    return t6(r4, ...e8);
  };
  var n7 = a3(x);
  var u3 = a3(b);

  // node_modules/lit-html/directives/if-defined.js
  var l7 = (l8) => null != l8 ? l8 : A;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OWUFMFWX.js
  var SlButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        form: (input) => {
          if (input.hasAttribute("form")) {
            const doc = input.getRootNode();
            const formId = input.getAttribute("form");
            return doc.getElementById(formId);
          }
          return input.closest("form");
        },
        assumeInteractionOn: ["click"]
      });
      this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
      this.localize = new LocalizeController2(this);
      this.hasFocus = false;
      this.invalid = false;
      this.title = "";
      this.variant = "default";
      this.size = "medium";
      this.caret = false;
      this.disabled = false;
      this.loading = false;
      this.outline = false;
      this.pill = false;
      this.circle = false;
      this.type = "button";
      this.name = "";
      this.value = "";
      this.href = "";
      this.rel = "noreferrer noopener";
    }
    /** Gets the validity state object */
    get validity() {
      if (this.isButton()) {
        return this.button.validity;
      }
      return validValidityState;
    }
    /** Gets the validation message */
    get validationMessage() {
      if (this.isButton()) {
        return this.button.validationMessage;
      }
      return "";
    }
    firstUpdated() {
      if (this.isButton()) {
        this.formControlController.updateValidity();
      }
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick() {
      if (this.type === "submit") {
        this.formControlController.submit(this);
      }
      if (this.type === "reset") {
        this.formControlController.reset(this);
      }
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    isButton() {
      return this.href ? false : true;
    }
    isLink() {
      return this.href ? true : false;
    }
    handleDisabledChange() {
      if (this.isButton()) {
        this.formControlController.setValidity(this.disabled);
      }
    }
    /** Simulates a click on the button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the button. */
    blur() {
      this.button.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      if (this.isButton()) {
        return this.button.checkValidity();
      }
      return true;
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      if (this.isButton()) {
        return this.button.reportValidity();
      }
      return true;
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      if (this.isButton()) {
        this.button.setCustomValidity(message);
        this.formControlController.updateValidity();
      }
    }
    render() {
      const isLink = this.isLink();
      const tag = isLink ? i6`a` : i6`button`;
      return n7`
      <${tag}
        part="base"
        class=${o6({
        button: true,
        "button--default": this.variant === "default",
        "button--primary": this.variant === "primary",
        "button--success": this.variant === "success",
        "button--neutral": this.variant === "neutral",
        "button--warning": this.variant === "warning",
        "button--danger": this.variant === "danger",
        "button--text": this.variant === "text",
        "button--small": this.size === "small",
        "button--medium": this.size === "medium",
        "button--large": this.size === "large",
        "button--caret": this.caret,
        "button--circle": this.circle,
        "button--disabled": this.disabled,
        "button--focused": this.hasFocus,
        "button--loading": this.loading,
        "button--standard": !this.outline,
        "button--outline": this.outline,
        "button--pill": this.pill,
        "button--rtl": this.localize.dir() === "rtl",
        "button--has-label": this.hasSlotController.test("[default]"),
        "button--has-prefix": this.hasSlotController.test("prefix"),
        "button--has-suffix": this.hasSlotController.test("suffix")
      })}
        ?disabled=${l7(isLink ? void 0 : this.disabled)}
        type=${l7(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${l7(isLink ? void 0 : this.name)}
        value=${l7(isLink ? void 0 : this.value)}
        href=${l7(isLink ? this.href : void 0)}
        target=${l7(isLink ? this.target : void 0)}
        download=${l7(isLink ? this.download : void 0)}
        rel=${l7(isLink ? this.rel : void 0)}
        role=${l7(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? n7` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? n7`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${tag}>
    `;
    }
  };
  SlButton.styles = button_styles_default;
  SlButton.dependencies = {
    "sl-icon": SlIcon,
    "sl-spinner": SlSpinner
  };
  __decorateClass([
    i4(".button")
  ], SlButton.prototype, "button", 2);
  __decorateClass([
    t3()
  ], SlButton.prototype, "hasFocus", 2);
  __decorateClass([
    t3()
  ], SlButton.prototype, "invalid", 2);
  __decorateClass([
    n5()
  ], SlButton.prototype, "title", 2);
  __decorateClass([
    n5({ reflect: true })
  ], SlButton.prototype, "variant", 2);
  __decorateClass([
    n5({ reflect: true })
  ], SlButton.prototype, "size", 2);
  __decorateClass([
    n5({ type: Boolean, reflect: true })
  ], SlButton.prototype, "caret", 2);
  __decorateClass([
    n5({ type: Boolean, reflect: true })
  ], SlButton.prototype, "disabled", 2);
  __decorateClass([
    n5({ type: Boolean, reflect: true })
  ], SlButton.prototype, "loading", 2);
  __decorateClass([
    n5({ type: Boolean, reflect: true })
  ], SlButton.prototype, "outline", 2);
  __decorateClass([
    n5({ type: Boolean, reflect: true })
  ], SlButton.prototype, "pill", 2);
  __decorateClass([
    n5({ type: Boolean, reflect: true })
  ], SlButton.prototype, "circle", 2);
  __decorateClass([
    n5()
  ], SlButton.prototype, "type", 2);
  __decorateClass([
    n5()
  ], SlButton.prototype, "name", 2);
  __decorateClass([
    n5()
  ], SlButton.prototype, "value", 2);
  __decorateClass([
    n5()
  ], SlButton.prototype, "href", 2);
  __decorateClass([
    n5()
  ], SlButton.prototype, "target", 2);
  __decorateClass([
    n5()
  ], SlButton.prototype, "rel", 2);
  __decorateClass([
    n5()
  ], SlButton.prototype, "download", 2);
  __decorateClass([
    n5()
  ], SlButton.prototype, "form", 2);
  __decorateClass([
    n5({ attribute: "formaction" })
  ], SlButton.prototype, "formAction", 2);
  __decorateClass([
    n5({ attribute: "formenctype" })
  ], SlButton.prototype, "formEnctype", 2);
  __decorateClass([
    n5({ attribute: "formmethod" })
  ], SlButton.prototype, "formMethod", 2);
  __decorateClass([
    n5({ attribute: "formnovalidate", type: Boolean })
  ], SlButton.prototype, "formNoValidate", 2);
  __decorateClass([
    n5({ attribute: "formtarget" })
  ], SlButton.prototype, "formTarget", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlButton.prototype, "handleDisabledChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CCLMT6ZK.js
  SlButton.define("sl-button");

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAS2SHYD.js
  var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num) => {
      if (num === 0)
        return "No options selected";
      if (num === 1)
        return "1 option selected";
      return `${num} options selected`;
    },
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide) => `Slide ${slide}`,
    toggleColorFormat: "Toggle color format"
  };
  registerTranslation(translation);

  // content-script.js
  var basePath2 = chrome.runtime.getURL("./dist");
  setBasePath(basePath2);
  var element = document.createElement("div");
  element.innerHTML = `<sl-button>Test</sl-button>`;
  document.body.appendChild(element);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
