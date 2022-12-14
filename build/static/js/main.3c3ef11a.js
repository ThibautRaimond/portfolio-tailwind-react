/*! For license information please see main.3c3ef11a.js.LICENSE.txt */
!(function () {
	var e = {
			463: function (e, t, n) {
				var r = n(791),
					a = n(296);
				function o(e) {
					for (
						var t =
								"https://reactjs.org/docs/error-decoder.html?invariant=" + e,
							n = 1;
						n < arguments.length;
						n++
					)
						t += "&args[]=" + encodeURIComponent(arguments[n]);
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				var i = new Set(),
					l = {};
				function u(e, t) {
					s(e, t), s(e + "Capture", t);
				}
				function s(e, t) {
					for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
				}
				var c = !(
						"undefined" === typeof window ||
						"undefined" === typeof window.document ||
						"undefined" === typeof window.document.createElement
					),
					f = Object.prototype.hasOwnProperty,
					d =
						/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					p = {},
					h = {};
				function v(e, t, n, r, a, o, i) {
					(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
						(this.attributeName = r),
						(this.attributeNamespace = a),
						(this.mustUseProperty = n),
						(this.propertyName = e),
						(this.type = t),
						(this.sanitizeURL = o),
						(this.removeEmptyString = i);
				}
				var m = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
					.split(" ")
					.forEach(function (e) {
						m[e] = new v(e, 0, !1, e, null, !1, !1);
					}),
					[
						["acceptCharset", "accept-charset"],
						["className", "class"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"],
					].forEach(function (e) {
						var t = e[0];
						m[t] = new v(t, 1, !1, e[1], null, !1, !1);
					}),
					["contentEditable", "draggable", "spellCheck", "value"].forEach(
						function (e) {
							m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
						}
					),
					[
						"autoReverse",
						"externalResourcesRequired",
						"focusable",
						"preserveAlpha",
					].forEach(function (e) {
						m[e] = new v(e, 2, !1, e, null, !1, !1);
					}),
					"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
						.split(" ")
						.forEach(function (e) {
							m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
						}),
					["checked", "multiple", "muted", "selected"].forEach(function (e) {
						m[e] = new v(e, 3, !0, e, null, !1, !1);
					}),
					["capture", "download"].forEach(function (e) {
						m[e] = new v(e, 4, !1, e, null, !1, !1);
					}),
					["cols", "rows", "size", "span"].forEach(function (e) {
						m[e] = new v(e, 6, !1, e, null, !1, !1);
					}),
					["rowSpan", "start"].forEach(function (e) {
						m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
					});
				var y = /[\-:]([a-z])/g;
				function g(e) {
					return e[1].toUpperCase();
				}
				function b(e, t, n, r) {
					var a = m.hasOwnProperty(t) ? m[t] : null;
					(null !== a
						? 0 !== a.type
						: r ||
						  !(2 < t.length) ||
						  ("o" !== t[0] && "O" !== t[0]) ||
						  ("n" !== t[1] && "N" !== t[1])) &&
						((function (e, t, n, r) {
							if (
								null === t ||
								"undefined" === typeof t ||
								(function (e, t, n, r) {
									if (null !== n && 0 === n.type) return !1;
									switch (typeof t) {
										case "function":
										case "symbol":
											return !0;
										case "boolean":
											return (
												!r &&
												(null !== n
													? !n.acceptsBooleans
													: "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
													  "aria-" !== e)
											);
										default:
											return !1;
									}
								})(e, t, n, r)
							)
								return !0;
							if (r) return !1;
							if (null !== n)
								switch (n.type) {
									case 3:
										return !t;
									case 4:
										return !1 === t;
									case 5:
										return isNaN(t);
									case 6:
										return isNaN(t) || 1 > t;
								}
							return !1;
						})(t, n, a, r) && (n = null),
						r || null === a
							? (function (e) {
									return (
										!!f.call(h, e) ||
										(!f.call(p, e) &&
											(d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
									);
							  })(t) &&
							  (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
							: a.mustUseProperty
							? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
							: ((t = a.attributeName),
							  (r = a.attributeNamespace),
							  null === n
									? e.removeAttribute(t)
									: ((n =
											3 === (a = a.type) || (4 === a && !0 === n)
												? ""
												: "" + n),
									  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
					.split(" ")
					.forEach(function (e) {
						var t = e.replace(y, g);
						m[t] = new v(t, 1, !1, e, null, !1, !1);
					}),
					"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
						.split(" ")
						.forEach(function (e) {
							var t = e.replace(y, g);
							m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
						}),
					["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
						var t = e.replace(y, g);
						m[t] = new v(
							t,
							1,
							!1,
							e,
							"http://www.w3.org/XML/1998/namespace",
							!1,
							!1
						);
					}),
					["tabIndex", "crossOrigin"].forEach(function (e) {
						m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
					}),
					(m.xlinkHref = new v(
						"xlinkHref",
						1,
						!1,
						"xlink:href",
						"http://www.w3.org/1999/xlink",
						!0,
						!1
					)),
					["src", "href", "action", "formAction"].forEach(function (e) {
						m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
					});
				var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					w = Symbol.for("react.element"),
					k = Symbol.for("react.portal"),
					S = Symbol.for("react.fragment"),
					E = Symbol.for("react.strict_mode"),
					C = Symbol.for("react.profiler"),
					j = Symbol.for("react.provider"),
					P = Symbol.for("react.context"),
					T = Symbol.for("react.forward_ref"),
					_ = Symbol.for("react.suspense"),
					N = Symbol.for("react.suspense_list"),
					O = Symbol.for("react.memo"),
					R = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var L = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"),
					Symbol.for("react.cache"),
					Symbol.for("react.tracing_marker");
				var A = Symbol.iterator;
				function M(e) {
					return null === e || "object" !== typeof e
						? null
						: "function" === typeof (e = (A && e[A]) || e["@@iterator"])
						? e
						: null;
				}
				var z,
					D = Object.assign;
				function V(e) {
					if (void 0 === z)
						try {
							throw Error();
						} catch (n) {
							var t = n.stack.trim().match(/\n( *(at )?)/);
							z = (t && t[1]) || "";
						}
					return "\n" + z + e;
				}
				var F = !1;
				function I(e, t) {
					if (!e || F) return "";
					F = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (
								((t = function () {
									throw Error();
								}),
								Object.defineProperty(t.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								"object" === typeof Reflect && Reflect.construct)
							) {
								try {
									Reflect.construct(t, []);
								} catch (s) {
									var r = s;
								}
								Reflect.construct(e, [], t);
							} else {
								try {
									t.call();
								} catch (s) {
									r = s;
								}
								e.call(t.prototype);
							}
						else {
							try {
								throw Error();
							} catch (s) {
								r = s;
							}
							e();
						}
					} catch (s) {
						if (s && r && "string" === typeof s.stack) {
							for (
								var a = s.stack.split("\n"),
									o = r.stack.split("\n"),
									i = a.length - 1,
									l = o.length - 1;
								1 <= i && 0 <= l && a[i] !== o[l];

							)
								l--;
							for (; 1 <= i && 0 <= l; i--, l--)
								if (a[i] !== o[l]) {
									if (1 !== i || 1 !== l)
										do {
											if ((i--, 0 > --l || a[i] !== o[l])) {
												var u = "\n" + a[i].replace(" at new ", " at ");
												return (
													e.displayName &&
														u.includes("<anonymous>") &&
														(u = u.replace("<anonymous>", e.displayName)),
													u
												);
											}
										} while (1 <= i && 0 <= l);
									break;
								}
						}
					} finally {
						(F = !1), (Error.prepareStackTrace = n);
					}
					return (e = e ? e.displayName || e.name : "") ? V(e) : "";
				}
				function U(e) {
					switch (e.tag) {
						case 5:
							return V(e.type);
						case 16:
							return V("Lazy");
						case 13:
							return V("Suspense");
						case 19:
							return V("SuspenseList");
						case 0:
						case 2:
						case 15:
							return (e = I(e.type, !1));
						case 11:
							return (e = I(e.type.render, !1));
						case 1:
							return (e = I(e.type, !0));
						default:
							return "";
					}
				}
				function B(e) {
					if (null == e) return null;
					if ("function" === typeof e) return e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case S:
							return "Fragment";
						case k:
							return "Portal";
						case C:
							return "Profiler";
						case E:
							return "StrictMode";
						case _:
							return "Suspense";
						case N:
							return "SuspenseList";
					}
					if ("object" === typeof e)
						switch (e.$$typeof) {
							case P:
								return (e.displayName || "Context") + ".Consumer";
							case j:
								return (e._context.displayName || "Context") + ".Provider";
							case T:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e =
											"" !== (e = t.displayName || t.name || "")
												? "ForwardRef(" + e + ")"
												: "ForwardRef"),
									e
								);
							case O:
								return null !== (t = e.displayName || null)
									? t
									: B(e.type) || "Memo";
							case R:
								(t = e._payload), (e = e._init);
								try {
									return B(e(t));
								} catch (n) {}
						}
					return null;
				}
				function H(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return "Cache";
						case 9:
							return (t.displayName || "Context") + ".Consumer";
						case 10:
							return (t._context.displayName || "Context") + ".Provider";
						case 18:
							return "DehydratedFragment";
						case 11:
							return (
								(e = (e = t.render).displayName || e.name || ""),
								t.displayName ||
									("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
							);
						case 7:
							return "Fragment";
						case 5:
							return t;
						case 4:
							return "Portal";
						case 3:
							return "Root";
						case 6:
							return "Text";
						case 16:
							return B(t);
						case 8:
							return t === E ? "StrictMode" : "Mode";
						case 22:
							return "Offscreen";
						case 12:
							return "Profiler";
						case 21:
							return "Scope";
						case 13:
							return "Suspense";
						case 19:
							return "SuspenseList";
						case 25:
							return "TracingMarker";
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ("function" === typeof t)
								return t.displayName || t.name || null;
							if ("string" === typeof t) return t;
					}
					return null;
				}
				function W(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return "";
					}
				}
				function $(e) {
					var t = e.type;
					return (
						(e = e.nodeName) &&
						"input" === e.toLowerCase() &&
						("checkbox" === t || "radio" === t)
					);
				}
				function Q(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = $(e) ? "checked" : "value",
								n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
								r = "" + e[t];
							if (
								!e.hasOwnProperty(t) &&
								"undefined" !== typeof n &&
								"function" === typeof n.get &&
								"function" === typeof n.set
							) {
								var a = n.get,
									o = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return a.call(this);
										},
										set: function (e) {
											(r = "" + e), o.call(this, e);
										},
									}),
									Object.defineProperty(e, t, { enumerable: n.enumerable }),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = "" + e;
										},
										stopTracking: function () {
											(e._valueTracker = null), delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function X(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return (
						e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
						(e = r) !== n && (t.setValue(e), !0)
					);
				}
				function q(e) {
					if (
						"undefined" ===
						typeof (e =
							e || ("undefined" !== typeof document ? document : void 0))
					)
						return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				function Y(e, t) {
					var n = t.checked;
					return D({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked,
					});
				}
				function G(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					(n = W(null != t.value ? t.value : n)),
						(e._wrapperState = {
							initialChecked: r,
							initialValue: n,
							controlled:
								"checkbox" === t.type || "radio" === t.type
									? null != t.checked
									: null != t.value,
						});
				}
				function K(e, t) {
					null != (t = t.checked) && b(e, "checked", t, !1);
				}
				function Z(e, t) {
					K(e, t);
					var n = W(t.value),
						r = t.type;
					if (null != n)
						"number" === r
							? ((0 === n && "" === e.value) || e.value != n) &&
							  (e.value = "" + n)
							: e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === r || "reset" === r)
						return void e.removeAttribute("value");
					t.hasOwnProperty("value")
						? ee(e, t.type, n)
						: t.hasOwnProperty("defaultValue") &&
						  ee(e, t.type, W(t.defaultValue)),
						null == t.checked &&
							null != t.defaultChecked &&
							(e.defaultChecked = !!t.defaultChecked);
				}
				function J(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var r = t.type;
						if (
							!(
								("submit" !== r && "reset" !== r) ||
								(void 0 !== t.value && null !== t.value)
							)
						)
							return;
						(t = "" + e._wrapperState.initialValue),
							n || t === e.value || (e.value = t),
							(e.defaultValue = t);
					}
					"" !== (n = e.name) && (e.name = ""),
						(e.defaultChecked = !!e._wrapperState.initialChecked),
						"" !== n && (e.name = n);
				}
				function ee(e, t, n) {
					("number" === t && q(e.ownerDocument) === e) ||
						(null == n
							? (e.defaultValue = "" + e._wrapperState.initialValue)
							: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
				}
				var te = Array.isArray;
				function ne(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
						for (n = 0; n < e.length; n++)
							(a = t.hasOwnProperty("$" + e[n].value)),
								e[n].selected !== a && (e[n].selected = a),
								a && r && (e[n].defaultSelected = !0);
					} else {
						for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
							if (e[a].value === n)
								return (
									(e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
								);
							null !== t || e[a].disabled || (t = e[a]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
					return D({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue,
					});
				}
				function ae(e, t) {
					var n = t.value;
					if (null == n) {
						if (((n = t.children), (t = t.defaultValue), null != n)) {
							if (null != t) throw Error(o(92));
							if (te(n)) {
								if (1 < n.length) throw Error(o(93));
								n = n[0];
							}
							t = n;
						}
						null == t && (t = ""), (n = t);
					}
					e._wrapperState = { initialValue: W(n) };
				}
				function oe(e, t) {
					var n = W(t.value),
						r = W(t.defaultValue);
					null != n &&
						((n = "" + n) !== e.value && (e.value = n),
						null == t.defaultValue &&
							e.defaultValue !== n &&
							(e.defaultValue = n)),
						null != r && (e.defaultValue = "" + r);
				}
				function ie(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue &&
						"" !== t &&
						null !== t &&
						(e.value = t);
				}
				function le(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml";
					}
				}
				function ue(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e
						? le(t)
						: "http://www.w3.org/2000/svg" === e && "foreignObject" === t
						? "http://www.w3.org/1999/xhtml"
						: e;
				}
				var se,
					ce,
					fe =
						((ce = function (e, t) {
							if (
								"http://www.w3.org/2000/svg" !== e.namespaceURI ||
								"innerHTML" in e
							)
								e.innerHTML = t;
							else {
								for (
									(se = se || document.createElement("div")).innerHTML =
										"<svg>" + t.valueOf().toString() + "</svg>",
										t = se.firstChild;
									e.firstChild;

								)
									e.removeChild(e.firstChild);
								for (; t.firstChild; ) e.appendChild(t.firstChild);
							}
						}),
						"undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
							? function (e, t, n, r) {
									MSApp.execUnsafeLocalFunction(function () {
										return ce(e, t);
									});
							  }
							: ce);
				function de(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType)
							return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var pe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0,
					},
					he = ["Webkit", "ms", "Moz", "O"];
				function ve(e, t, n) {
					return null == t || "boolean" === typeof t || "" === t
						? ""
						: n ||
						  "number" !== typeof t ||
						  0 === t ||
						  (pe.hasOwnProperty(e) && pe[e])
						? ("" + t).trim()
						: t + "px";
				}
				function me(e, t) {
					for (var n in ((e = e.style), t))
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf("--"),
								a = ve(n, t[n], r);
							"float" === n && (n = "cssFloat"),
								r ? e.setProperty(n, a) : (e[n] = a);
						}
				}
				Object.keys(pe).forEach(function (e) {
					he.forEach(function (t) {
						(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
							(pe[t] = pe[e]);
					});
				});
				var ye = D(
					{ menuitem: !0 },
					{
						area: !0,
						base: !0,
						br: !0,
						col: !0,
						embed: !0,
						hr: !0,
						img: !0,
						input: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0,
					}
				);
				function ge(e, t) {
					if (t) {
						if (
							ye[e] &&
							(null != t.children || null != t.dangerouslySetInnerHTML)
						)
							throw Error(o(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(o(60));
							if (
								"object" !== typeof t.dangerouslySetInnerHTML ||
								!("__html" in t.dangerouslySetInnerHTML)
							)
								throw Error(o(61));
						}
						if (null != t.style && "object" !== typeof t.style)
							throw Error(o(62));
					}
				}
				function be(e, t) {
					if (-1 === e.indexOf("-")) return "string" === typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0;
					}
				}
				var xe = null;
				function we(e) {
					return (
						(e = e.target || e.srcElement || window).correspondingUseElement &&
							(e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var ke = null,
					Se = null,
					Ee = null;
				function Ce(e) {
					if ((e = ba(e))) {
						if ("function" !== typeof ke) throw Error(o(280));
						var t = e.stateNode;
						t && ((t = wa(t)), ke(e.stateNode, e.type, t));
					}
				}
				function je(e) {
					Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
				}
				function Pe() {
					if (Se) {
						var e = Se,
							t = Ee;
						if (((Ee = Se = null), Ce(e), t))
							for (e = 0; e < t.length; e++) Ce(t[e]);
					}
				}
				function Te(e, t) {
					return e(t);
				}
				function _e() {}
				var Ne = !1;
				function Oe(e, t, n) {
					if (Ne) return e(t, n);
					Ne = !0;
					try {
						return Te(e, t, n);
					} finally {
						(Ne = !1), (null !== Se || null !== Ee) && (_e(), Pe());
					}
				}
				function Re(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = wa(n);
					if (null === r) return null;
					n = r[t];
					switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) ||
								(r = !(
									"button" === (e = e.type) ||
									"input" === e ||
									"select" === e ||
									"textarea" === e
								)),
								(e = !r);
							break;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
					return n;
				}
				var Le = !1;
				if (c)
					try {
						var Ae = {};
						Object.defineProperty(Ae, "passive", {
							get: function () {
								Le = !0;
							},
						}),
							window.addEventListener("test", Ae, Ae),
							window.removeEventListener("test", Ae, Ae);
					} catch (ce) {
						Le = !1;
					}
				function Me(e, t, n, r, a, o, i, l, u) {
					var s = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, s);
					} catch (c) {
						this.onError(c);
					}
				}
				var ze = !1,
					De = null,
					Ve = !1,
					Fe = null,
					Ie = {
						onError: function (e) {
							(ze = !0), (De = e);
						},
					};
				function Ue(e, t, n, r, a, o, i, l, u) {
					(ze = !1), (De = null), Me.apply(Ie, arguments);
				}
				function Be(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function He(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (
							(null === t &&
								null !== (e = e.alternate) &&
								(t = e.memoizedState),
							null !== t)
						)
							return t.dehydrated;
					}
					return null;
				}
				function We(e) {
					if (Be(e) !== e) throw Error(o(188));
				}
				function $e(e) {
					return null !==
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = Be(e))) throw Error(o(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var a = n.return;
								if (null === a) break;
								var i = a.alternate;
								if (null === i) {
									if (null !== (r = a.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (a.child === i.child) {
									for (i = a.child; i; ) {
										if (i === n) return We(a), e;
										if (i === r) return We(a), t;
										i = i.sibling;
									}
									throw Error(o(188));
								}
								if (n.return !== r.return) (n = a), (r = i);
								else {
									for (var l = !1, u = a.child; u; ) {
										if (u === n) {
											(l = !0), (n = a), (r = i);
											break;
										}
										if (u === r) {
											(l = !0), (r = a), (n = i);
											break;
										}
										u = u.sibling;
									}
									if (!l) {
										for (u = i.child; u; ) {
											if (u === n) {
												(l = !0), (n = i), (r = a);
												break;
											}
											if (u === r) {
												(l = !0), (r = i), (n = a);
												break;
											}
											u = u.sibling;
										}
										if (!l) throw Error(o(189));
									}
								}
								if (n.alternate !== r) throw Error(o(190));
							}
							if (3 !== n.tag) throw Error(o(188));
							return n.stateNode.current === n ? e : t;
						})(e))
						? Qe(e)
						: null;
				}
				function Qe(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e; ) {
						var t = Qe(e);
						if (null !== t) return t;
						e = e.sibling;
					}
					return null;
				}
				var Xe = a.unstable_scheduleCallback,
					qe = a.unstable_cancelCallback,
					Ye = a.unstable_shouldYield,
					Ge = a.unstable_requestPaint,
					Ke = a.unstable_now,
					Ze = a.unstable_getCurrentPriorityLevel,
					Je = a.unstable_ImmediatePriority,
					et = a.unstable_UserBlockingPriority,
					tt = a.unstable_NormalPriority,
					nt = a.unstable_LowPriority,
					rt = a.unstable_IdlePriority,
					at = null,
					ot = null;
				var it = Math.clz32
						? Math.clz32
						: function (e) {
								return 0 === (e >>>= 0) ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
						  },
					lt = Math.log,
					ut = Math.LN2;
				var st = 64,
					ct = 4194304;
				function ft(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e;
					}
				}
				function dt(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						a = e.suspendedLanes,
						o = e.pingedLanes,
						i = 268435455 & n;
					if (0 !== i) {
						var l = i & ~a;
						0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
					} else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
					if (0 === r) return 0;
					if (
						0 !== t &&
						t !== r &&
						0 === (t & a) &&
						((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
					)
						return t;
					if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
						for (e = e.entanglements, t &= r; 0 < t; )
							(a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
					return r;
				}
				function pt(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function ht(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes)
						? e
						: 1073741824 & e
						? 1073741824
						: 0;
				}
				function vt() {
					var e = st;
					return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
				}
				function mt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function yt(e, t, n) {
					(e.pendingLanes |= t),
						536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
						((e = e.eventTimes)[(t = 31 - it(t))] = n);
				}
				function gt(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - it(n),
							a = 1 << r;
						(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
					}
				}
				var bt = 0;
				function xt(e) {
					return 1 < (e &= -e)
						? 4 < e
							? 0 !== (268435455 & e)
								? 16
								: 536870912
							: 4
						: 1;
				}
				var wt,
					kt,
					St,
					Et,
					Ct,
					jt = !1,
					Pt = [],
					Tt = null,
					_t = null,
					Nt = null,
					Ot = new Map(),
					Rt = new Map(),
					Lt = [],
					At =
						"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
							" "
						);
				function Mt(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							Tt = null;
							break;
						case "dragenter":
						case "dragleave":
							_t = null;
							break;
						case "mouseover":
						case "mouseout":
							Nt = null;
							break;
						case "pointerover":
						case "pointerout":
							Ot.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							Rt.delete(t.pointerId);
					}
				}
				function zt(e, t, n, r, a, o) {
					return null === e || e.nativeEvent !== o
						? ((e = {
								blockedOn: t,
								domEventName: n,
								eventSystemFlags: r,
								nativeEvent: o,
								targetContainers: [a],
						  }),
						  null !== t && null !== (t = ba(t)) && kt(t),
						  e)
						: ((e.eventSystemFlags |= r),
						  (t = e.targetContainers),
						  null !== a && -1 === t.indexOf(a) && t.push(a),
						  e);
				}
				function Dt(e) {
					var t = ga(e.target);
					if (null !== t) {
						var n = Be(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = He(n)))
									return (
										(e.blockedOn = t),
										void Ct(e.priority, function () {
											St(n);
										})
									);
							} else if (
								3 === t &&
								n.stateNode.current.memoizedState.isDehydrated
							)
								return void (e.blockedOn =
									3 === n.tag ? n.stateNode.containerInfo : null);
					}
					e.blockedOn = null;
				}
				function Vt(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n)
							return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
					}
					return !0;
				}
				function Ft(e, t, n) {
					Vt(e) && n.delete(t);
				}
				function It() {
					(jt = !1),
						null !== Tt && Vt(Tt) && (Tt = null),
						null !== _t && Vt(_t) && (_t = null),
						null !== Nt && Vt(Nt) && (Nt = null),
						Ot.forEach(Ft),
						Rt.forEach(Ft);
				}
				function Ut(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null),
						jt ||
							((jt = !0),
							a.unstable_scheduleCallback(a.unstable_NormalPriority, It)));
				}
				function Bt(e) {
					function t(t) {
						return Ut(t, e);
					}
					if (0 < Pt.length) {
						Ut(Pt[0], e);
						for (var n = 1; n < Pt.length; n++) {
							var r = Pt[n];
							r.blockedOn === e && (r.blockedOn = null);
						}
					}
					for (
						null !== Tt && Ut(Tt, e),
							null !== _t && Ut(_t, e),
							null !== Nt && Ut(Nt, e),
							Ot.forEach(t),
							Rt.forEach(t),
							n = 0;
						n < Lt.length;
						n++
					)
						(r = Lt[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
						Dt(n), null === n.blockedOn && Lt.shift();
				}
				var Ht = x.ReactCurrentBatchConfig,
					Wt = !0;
				function $t(e, t, n, r) {
					var a = bt,
						o = Ht.transition;
					Ht.transition = null;
					try {
						(bt = 1), Xt(e, t, n, r);
					} finally {
						(bt = a), (Ht.transition = o);
					}
				}
				function Qt(e, t, n, r) {
					var a = bt,
						o = Ht.transition;
					Ht.transition = null;
					try {
						(bt = 4), Xt(e, t, n, r);
					} finally {
						(bt = a), (Ht.transition = o);
					}
				}
				function Xt(e, t, n, r) {
					if (Wt) {
						var a = Yt(e, t, n, r);
						if (null === a) Wr(e, t, r, qt, n), Mt(e, r);
						else if (
							(function (e, t, n, r, a) {
								switch (t) {
									case "focusin":
										return (Tt = zt(Tt, e, t, n, r, a)), !0;
									case "dragenter":
										return (_t = zt(_t, e, t, n, r, a)), !0;
									case "mouseover":
										return (Nt = zt(Nt, e, t, n, r, a)), !0;
									case "pointerover":
										var o = a.pointerId;
										return Ot.set(o, zt(Ot.get(o) || null, e, t, n, r, a)), !0;
									case "gotpointercapture":
										return (
											(o = a.pointerId),
											Rt.set(o, zt(Rt.get(o) || null, e, t, n, r, a)),
											!0
										);
								}
								return !1;
							})(a, e, t, n, r)
						)
							r.stopPropagation();
						else if ((Mt(e, r), 4 & t && -1 < At.indexOf(e))) {
							for (; null !== a; ) {
								var o = ba(a);
								if (
									(null !== o && wt(o),
									null === (o = Yt(e, t, n, r)) && Wr(e, t, r, qt, n),
									o === a)
								)
									break;
								a = o;
							}
							null !== a && r.stopPropagation();
						} else Wr(e, t, r, null, n);
					}
				}
				var qt = null;
				function Yt(e, t, n, r) {
					if (((qt = null), null !== (e = ga((e = we(r))))))
						if (null === (t = Be(e))) e = null;
						else if (13 === (n = t.tag)) {
							if (null !== (e = He(t))) return e;
							e = null;
						} else if (3 === n) {
							if (t.stateNode.current.memoizedState.isDehydrated)
								return 3 === t.tag ? t.stateNode.containerInfo : null;
							e = null;
						} else t !== e && (e = null);
					return (qt = e), null;
				}
				function Gt(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (Ze()) {
								case Je:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16;
							}
						default:
							return 16;
					}
				}
				var Kt = null,
					Zt = null,
					Jt = null;
				function en() {
					if (Jt) return Jt;
					var e,
						t,
						n = Zt,
						r = n.length,
						a = "value" in Kt ? Kt.value : Kt.textContent,
						o = a.length;
					for (e = 0; e < r && n[e] === a[e]; e++);
					var i = r - e;
					for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
					return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
				}
				function tn(e) {
					var t = e.keyCode;
					return (
						"charCode" in e
							? 0 === (e = e.charCode) && 13 === t && (e = 13)
							: (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function nn() {
					return !0;
				}
				function rn() {
					return !1;
				}
				function an(e) {
					function t(t, n, r, a, o) {
						for (var i in ((this._reactName = t),
						(this._targetInst = r),
						(this.type = n),
						(this.nativeEvent = a),
						(this.target = o),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
						return (
							(this.isDefaultPrevented = (
								null != a.defaultPrevented
									? a.defaultPrevented
									: !1 === a.returnValue
							)
								? nn
								: rn),
							(this.isPropagationStopped = rn),
							this
						);
					}
					return (
						D(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault
										? e.preventDefault()
										: "unknown" !== typeof e.returnValue &&
										  (e.returnValue = !1),
									(this.isDefaultPrevented = nn));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: "unknown" !== typeof e.cancelBubble &&
										  (e.cancelBubble = !0),
									(this.isPropagationStopped = nn));
							},
							persist: function () {},
							isPersistent: nn,
						}),
						t
					);
				}
				var on,
					ln,
					un,
					sn = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					cn = an(sn),
					fn = D({}, sn, { view: 0, detail: 0 }),
					dn = an(fn),
					pn = D({}, fn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: Cn,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return "movementX" in e
								? e.movementX
								: (e !== un &&
										(un && "mousemove" === e.type
											? ((on = e.screenX - un.screenX),
											  (ln = e.screenY - un.screenY))
											: (ln = on = 0),
										(un = e)),
								  on);
						},
						movementY: function (e) {
							return "movementY" in e ? e.movementY : ln;
						},
					}),
					hn = an(pn),
					vn = an(D({}, pn, { dataTransfer: 0 })),
					mn = an(D({}, fn, { relatedTarget: 0 })),
					yn = an(
						D({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					gn = D({}, sn, {
						clipboardData: function (e) {
							return "clipboardData" in e
								? e.clipboardData
								: window.clipboardData;
						},
					}),
					bn = an(gn),
					xn = an(D({}, sn, { data: 0 })),
					wn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified",
					},
					kn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta",
					},
					Sn = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey",
					};
				function En(e) {
					var t = this.nativeEvent;
					return t.getModifierState
						? t.getModifierState(e)
						: !!(e = Sn[e]) && !!t[e];
				}
				function Cn() {
					return En;
				}
				var jn = D({}, fn, {
						key: function (e) {
							if (e.key) {
								var t = wn[e.key] || e.key;
								if ("Unidentified" !== t) return t;
							}
							return "keypress" === e.type
								? 13 === (e = tn(e))
									? "Enter"
									: String.fromCharCode(e)
								: "keydown" === e.type || "keyup" === e.type
								? kn[e.keyCode] || "Unidentified"
								: "";
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: Cn,
						charCode: function (e) {
							return "keypress" === e.type ? tn(e) : 0;
						},
						keyCode: function (e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
						},
						which: function (e) {
							return "keypress" === e.type
								? tn(e)
								: "keydown" === e.type || "keyup" === e.type
								? e.keyCode
								: 0;
						},
					}),
					Pn = an(jn),
					Tn = an(
						D({}, pn, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						})
					),
					_n = an(
						D({}, fn, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: Cn,
						})
					),
					Nn = an(
						D({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					On = D({}, pn, {
						deltaX: function (e) {
							return "deltaX" in e
								? e.deltaX
								: "wheelDeltaX" in e
								? -e.wheelDeltaX
								: 0;
						},
						deltaY: function (e) {
							return "deltaY" in e
								? e.deltaY
								: "wheelDeltaY" in e
								? -e.wheelDeltaY
								: "wheelDelta" in e
								? -e.wheelDelta
								: 0;
						},
						deltaZ: 0,
						deltaMode: 0,
					}),
					Rn = an(On),
					Ln = [9, 13, 27, 32],
					An = c && "CompositionEvent" in window,
					Mn = null;
				c && "documentMode" in document && (Mn = document.documentMode);
				var zn = c && "TextEvent" in window && !Mn,
					Dn = c && (!An || (Mn && 8 < Mn && 11 >= Mn)),
					Vn = String.fromCharCode(32),
					Fn = !1;
				function In(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== Ln.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1;
					}
				}
				function Un(e) {
					return "object" === typeof (e = e.detail) && "data" in e
						? e.data
						: null;
				}
				var Bn = !1;
				var Hn = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0,
				};
				function Wn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!Hn[e.type] : "textarea" === t;
				}
				function $n(e, t, n, r) {
					je(r),
						0 < (t = Qr(t, "onChange")).length &&
							((n = new cn("onChange", "change", null, n, r)),
							e.push({ event: n, listeners: t }));
				}
				var Qn = null,
					Xn = null;
				function qn(e) {
					Vr(e, 0);
				}
				function Yn(e) {
					if (X(xa(e))) return e;
				}
				function Gn(e, t) {
					if ("change" === e) return t;
				}
				var Kn = !1;
				if (c) {
					var Zn;
					if (c) {
						var Jn = "oninput" in document;
						if (!Jn) {
							var er = document.createElement("div");
							er.setAttribute("oninput", "return;"),
								(Jn = "function" === typeof er.oninput);
						}
						Zn = Jn;
					} else Zn = !1;
					Kn = Zn && (!document.documentMode || 9 < document.documentMode);
				}
				function tr() {
					Qn && (Qn.detachEvent("onpropertychange", nr), (Xn = Qn = null));
				}
				function nr(e) {
					if ("value" === e.propertyName && Yn(Xn)) {
						var t = [];
						$n(t, Xn, e, we(e)), Oe(qn, t);
					}
				}
				function rr(e, t, n) {
					"focusin" === e
						? (tr(), (Xn = n), (Qn = t).attachEvent("onpropertychange", nr))
						: "focusout" === e && tr();
				}
				function ar(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e)
						return Yn(Xn);
				}
				function or(e, t) {
					if ("click" === e) return Yn(t);
				}
				function ir(e, t) {
					if ("input" === e || "change" === e) return Yn(t);
				}
				var lr =
					"function" === typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e === 1 / t)) ||
									(e !== e && t !== t)
								);
						  };
				function ur(e, t) {
					if (lr(e, t)) return !0;
					if (
						"object" !== typeof e ||
						null === e ||
						"object" !== typeof t ||
						null === t
					)
						return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var a = n[r];
						if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
					}
					return !0;
				}
				function sr(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function cr(e, t) {
					var n,
						r = sr(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (((n = e + r.textContent.length), e <= t && n >= t))
								return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = sr(r);
					}
				}
				function fr(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? fr(e, t.parentNode)
									: "contains" in e
									? e.contains(t)
									: !!e.compareDocumentPosition &&
									  !!(16 & e.compareDocumentPosition(t)))))
					);
				}
				function dr() {
					for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
						try {
							var n = "string" === typeof t.contentWindow.location.href;
						} catch (r) {
							n = !1;
						}
						if (!n) break;
						t = q((e = t.contentWindow).document);
					}
					return t;
				}
				function pr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(("input" === t &&
							("text" === e.type ||
								"search" === e.type ||
								"tel" === e.type ||
								"url" === e.type ||
								"password" === e.type)) ||
							"textarea" === t ||
							"true" === e.contentEditable)
					);
				}
				function hr(e) {
					var t = dr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (
						t !== n &&
						n &&
						n.ownerDocument &&
						fr(n.ownerDocument.documentElement, n)
					) {
						if (null !== r && pr(n))
							if (
								((t = r.start),
								void 0 === (e = r.end) && (e = t),
								"selectionStart" in n)
							)
								(n.selectionStart = t),
									(n.selectionEnd = Math.min(e, n.value.length));
							else if (
								(e =
									((t = n.ownerDocument || document) && t.defaultView) ||
									window).getSelection
							) {
								e = e.getSelection();
								var a = n.textContent.length,
									o = Math.min(r.start, a);
								(r = void 0 === r.end ? o : Math.min(r.end, a)),
									!e.extend && o > r && ((a = r), (r = o), (o = a)),
									(a = cr(n, o));
								var i = cr(n, r);
								a &&
									i &&
									(1 !== e.rangeCount ||
										e.anchorNode !== a.node ||
										e.anchorOffset !== a.offset ||
										e.focusNode !== i.node ||
										e.focusOffset !== i.offset) &&
									((t = t.createRange()).setStart(a.node, a.offset),
									e.removeAllRanges(),
									o > r
										? (e.addRange(t), e.extend(i.node, i.offset))
										: (t.setEnd(i.node, i.offset), e.addRange(t)));
							}
						for (t = [], e = n; (e = e.parentNode); )
							1 === e.nodeType &&
								t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
						for (
							"function" === typeof n.focus && n.focus(), n = 0;
							n < t.length;
							n++
						)
							((e = t[n]).element.scrollLeft = e.left),
								(e.element.scrollTop = e.top);
					}
				}
				var vr = c && "documentMode" in document && 11 >= document.documentMode,
					mr = null,
					yr = null,
					gr = null,
					br = !1;
				function xr(e, t, n) {
					var r =
						n.window === n
							? n.document
							: 9 === n.nodeType
							? n
							: n.ownerDocument;
					br ||
						null == mr ||
						mr !== q(r) ||
						("selectionStart" in (r = mr) && pr(r)
							? (r = { start: r.selectionStart, end: r.selectionEnd })
							: (r = {
									anchorNode: (r = (
										(r.ownerDocument && r.ownerDocument.defaultView) ||
										window
									).getSelection()).anchorNode,
									anchorOffset: r.anchorOffset,
									focusNode: r.focusNode,
									focusOffset: r.focusOffset,
							  }),
						(gr && ur(gr, r)) ||
							((gr = r),
							0 < (r = Qr(yr, "onSelect")).length &&
								((t = new cn("onSelect", "select", null, t, n)),
								e.push({ event: t, listeners: r }),
								(t.target = mr))));
				}
				function wr(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()),
						(n["Webkit" + e] = "webkit" + t),
						(n["Moz" + e] = "moz" + t),
						n
					);
				}
				var kr = {
						animationend: wr("Animation", "AnimationEnd"),
						animationiteration: wr("Animation", "AnimationIteration"),
						animationstart: wr("Animation", "AnimationStart"),
						transitionend: wr("Transition", "TransitionEnd"),
					},
					Sr = {},
					Er = {};
				function Cr(e) {
					if (Sr[e]) return Sr[e];
					if (!kr[e]) return e;
					var t,
						n = kr[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
					return e;
				}
				c &&
					((Er = document.createElement("div").style),
					"AnimationEvent" in window ||
						(delete kr.animationend.animation,
						delete kr.animationiteration.animation,
						delete kr.animationstart.animation),
					"TransitionEvent" in window || delete kr.transitionend.transition);
				var jr = Cr("animationend"),
					Pr = Cr("animationiteration"),
					Tr = Cr("animationstart"),
					_r = Cr("transitionend"),
					Nr = new Map(),
					Or =
						"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
							" "
						);
				function Rr(e, t) {
					Nr.set(e, t), u(t, [e]);
				}
				for (var Lr = 0; Lr < Or.length; Lr++) {
					var Ar = Or[Lr];
					Rr(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)));
				}
				Rr(jr, "onAnimationEnd"),
					Rr(Pr, "onAnimationIteration"),
					Rr(Tr, "onAnimationStart"),
					Rr("dblclick", "onDoubleClick"),
					Rr("focusin", "onFocus"),
					Rr("focusout", "onBlur"),
					Rr(_r, "onTransitionEnd"),
					s("onMouseEnter", ["mouseout", "mouseover"]),
					s("onMouseLeave", ["mouseout", "mouseover"]),
					s("onPointerEnter", ["pointerout", "pointerover"]),
					s("onPointerLeave", ["pointerout", "pointerover"]),
					u(
						"onChange",
						"change click focusin focusout input keydown keyup selectionchange".split(
							" "
						)
					),
					u(
						"onSelect",
						"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
							" "
						)
					),
					u("onBeforeInput", [
						"compositionend",
						"keypress",
						"textInput",
						"paste",
					]),
					u(
						"onCompositionEnd",
						"compositionend focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					u(
						"onCompositionStart",
						"compositionstart focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					u(
						"onCompositionUpdate",
						"compositionupdate focusout keydown keypress keyup mousedown".split(
							" "
						)
					);
				var Mr =
						"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
							" "
						),
					zr = new Set(
						"cancel close invalid load scroll toggle".split(" ").concat(Mr)
					);
				function Dr(e, t, n) {
					var r = e.type || "unknown-event";
					(e.currentTarget = n),
						(function (e, t, n, r, a, i, l, u, s) {
							if ((Ue.apply(this, arguments), ze)) {
								if (!ze) throw Error(o(198));
								var c = De;
								(ze = !1), (De = null), Ve || ((Ve = !0), (Fe = c));
							}
						})(r, t, void 0, e),
						(e.currentTarget = null);
				}
				function Vr(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							a = r.event;
						r = r.listeners;
						e: {
							var o = void 0;
							if (t)
								for (var i = r.length - 1; 0 <= i; i--) {
									var l = r[i],
										u = l.instance,
										s = l.currentTarget;
									if (((l = l.listener), u !== o && a.isPropagationStopped()))
										break e;
									Dr(a, l, s), (o = u);
								}
							else
								for (i = 0; i < r.length; i++) {
									if (
										((u = (l = r[i]).instance),
										(s = l.currentTarget),
										(l = l.listener),
										u !== o && a.isPropagationStopped())
									)
										break e;
									Dr(a, l, s), (o = u);
								}
						}
					}
					if (Ve) throw ((e = Fe), (Ve = !1), (Fe = null), e);
				}
				function Fr(e, t) {
					var n = t[va];
					void 0 === n && (n = t[va] = new Set());
					var r = e + "__bubble";
					n.has(r) || (Hr(t, e, 2, !1), n.add(r));
				}
				function Ir(e, t, n) {
					var r = 0;
					t && (r |= 4), Hr(n, e, r, t);
				}
				var Ur = "_reactListening" + Math.random().toString(36).slice(2);
				function Br(e) {
					if (!e[Ur]) {
						(e[Ur] = !0),
							i.forEach(function (t) {
								"selectionchange" !== t &&
									(zr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Ur] || ((t[Ur] = !0), Ir("selectionchange", !1, t));
					}
				}
				function Hr(e, t, n, r) {
					switch (Gt(t)) {
						case 1:
							var a = $t;
							break;
						case 4:
							a = Qt;
							break;
						default:
							a = Xt;
					}
					(n = a.bind(null, t, n, e)),
						(a = void 0),
						!Le ||
							("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
							(a = !0),
						r
							? void 0 !== a
								? e.addEventListener(t, n, { capture: !0, passive: a })
								: e.addEventListener(t, n, !0)
							: void 0 !== a
							? e.addEventListener(t, n, { passive: a })
							: e.addEventListener(t, n, !1);
				}
				function Wr(e, t, n, r, a) {
					var o = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var i = r.tag;
							if (3 === i || 4 === i) {
								var l = r.stateNode.containerInfo;
								if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
								if (4 === i)
									for (i = r.return; null !== i; ) {
										var u = i.tag;
										if (
											(3 === u || 4 === u) &&
											((u = i.stateNode.containerInfo) === a ||
												(8 === u.nodeType && u.parentNode === a))
										)
											return;
										i = i.return;
									}
								for (; null !== l; ) {
									if (null === (i = ga(l))) return;
									if (5 === (u = i.tag) || 6 === u) {
										r = o = i;
										continue e;
									}
									l = l.parentNode;
								}
							}
							r = r.return;
						}
					Oe(function () {
						var r = o,
							a = we(n),
							i = [];
						e: {
							var l = Nr.get(e);
							if (void 0 !== l) {
								var u = cn,
									s = e;
								switch (e) {
									case "keypress":
										if (0 === tn(n)) break e;
									case "keydown":
									case "keyup":
										u = Pn;
										break;
									case "focusin":
										(s = "focus"), (u = mn);
										break;
									case "focusout":
										(s = "blur"), (u = mn);
										break;
									case "beforeblur":
									case "afterblur":
										u = mn;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										u = hn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										u = vn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										u = _n;
										break;
									case jr:
									case Pr:
									case Tr:
										u = yn;
										break;
									case _r:
										u = Nn;
										break;
									case "scroll":
										u = dn;
										break;
									case "wheel":
										u = Rn;
										break;
									case "copy":
									case "cut":
									case "paste":
										u = bn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										u = Tn;
								}
								var c = 0 !== (4 & t),
									f = !c && "scroll" === e,
									d = c ? (null !== l ? l + "Capture" : null) : l;
								c = [];
								for (var p, h = r; null !== h; ) {
									var v = (p = h).stateNode;
									if (
										(5 === p.tag &&
											null !== v &&
											((p = v),
											null !== d &&
												null != (v = Re(h, d)) &&
												c.push($r(h, v, p))),
										f)
									)
										break;
									h = h.return;
								}
								0 < c.length &&
									((l = new u(l, s, null, n, a)),
									i.push({ event: l, listeners: c }));
							}
						}
						if (0 === (7 & t)) {
							if (
								((u = "mouseout" === e || "pointerout" === e),
								(!(l = "mouseover" === e || "pointerover" === e) ||
									n === xe ||
									!(s = n.relatedTarget || n.fromElement) ||
									(!ga(s) && !s[ha])) &&
									(u || l) &&
									((l =
										a.window === a
											? a
											: (l = a.ownerDocument)
											? l.defaultView || l.parentWindow
											: window),
									u
										? ((u = r),
										  null !==
												(s = (s = n.relatedTarget || n.toElement)
													? ga(s)
													: null) &&
												(s !== (f = Be(s)) || (5 !== s.tag && 6 !== s.tag)) &&
												(s = null))
										: ((u = null), (s = r)),
									u !== s))
							) {
								if (
									((c = hn),
									(v = "onMouseLeave"),
									(d = "onMouseEnter"),
									(h = "mouse"),
									("pointerout" !== e && "pointerover" !== e) ||
										((c = Tn),
										(v = "onPointerLeave"),
										(d = "onPointerEnter"),
										(h = "pointer")),
									(f = null == u ? l : xa(u)),
									(p = null == s ? l : xa(s)),
									((l = new c(v, h + "leave", u, n, a)).target = f),
									(l.relatedTarget = p),
									(v = null),
									ga(a) === r &&
										(((c = new c(d, h + "enter", s, n, a)).target = p),
										(c.relatedTarget = f),
										(v = c)),
									(f = v),
									u && s)
								)
									e: {
										for (d = s, h = 0, p = c = u; p; p = Xr(p)) h++;
										for (p = 0, v = d; v; v = Xr(v)) p++;
										for (; 0 < h - p; ) (c = Xr(c)), h--;
										for (; 0 < p - h; ) (d = Xr(d)), p--;
										for (; h--; ) {
											if (c === d || (null !== d && c === d.alternate)) break e;
											(c = Xr(c)), (d = Xr(d));
										}
										c = null;
									}
								else c = null;
								null !== u && qr(i, l, u, c, !1),
									null !== s && null !== f && qr(i, f, s, c, !0);
							}
							if (
								"select" ===
									(u =
										(l = r ? xa(r) : window).nodeName &&
										l.nodeName.toLowerCase()) ||
								("input" === u && "file" === l.type)
							)
								var m = Gn;
							else if (Wn(l))
								if (Kn) m = ir;
								else {
									m = ar;
									var y = rr;
								}
							else
								(u = l.nodeName) &&
									"input" === u.toLowerCase() &&
									("checkbox" === l.type || "radio" === l.type) &&
									(m = or);
							switch (
								(m && (m = m(e, r))
									? $n(i, m, n, a)
									: (y && y(e, l, r),
									  "focusout" === e &&
											(y = l._wrapperState) &&
											y.controlled &&
											"number" === l.type &&
											ee(l, "number", l.value)),
								(y = r ? xa(r) : window),
								e)
							) {
								case "focusin":
									(Wn(y) || "true" === y.contentEditable) &&
										((mr = y), (yr = r), (gr = null));
									break;
								case "focusout":
									gr = yr = mr = null;
									break;
								case "mousedown":
									br = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									(br = !1), xr(i, n, a);
									break;
								case "selectionchange":
									if (vr) break;
								case "keydown":
								case "keyup":
									xr(i, n, a);
							}
							var g;
							if (An)
								e: {
									switch (e) {
										case "compositionstart":
											var b = "onCompositionStart";
											break e;
										case "compositionend":
											b = "onCompositionEnd";
											break e;
										case "compositionupdate":
											b = "onCompositionUpdate";
											break e;
									}
									b = void 0;
								}
							else
								Bn
									? In(e, n) && (b = "onCompositionEnd")
									: "keydown" === e &&
									  229 === n.keyCode &&
									  (b = "onCompositionStart");
							b &&
								(Dn &&
									"ko" !== n.locale &&
									(Bn || "onCompositionStart" !== b
										? "onCompositionEnd" === b && Bn && (g = en())
										: ((Zt = "value" in (Kt = a) ? Kt.value : Kt.textContent),
										  (Bn = !0))),
								0 < (y = Qr(r, b)).length &&
									((b = new xn(b, e, null, n, a)),
									i.push({ event: b, listeners: y }),
									g ? (b.data = g) : null !== (g = Un(n)) && (b.data = g))),
								(g = zn
									? (function (e, t) {
											switch (e) {
												case "compositionend":
													return Un(t);
												case "keypress":
													return 32 !== t.which ? null : ((Fn = !0), Vn);
												case "textInput":
													return (e = t.data) === Vn && Fn ? null : e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (Bn)
												return "compositionend" === e || (!An && In(e, t))
													? ((e = en()), (Jt = Zt = Kt = null), (Bn = !1), e)
													: null;
											switch (e) {
												case "paste":
												default:
													return null;
												case "keypress":
													if (
														!(t.ctrlKey || t.altKey || t.metaKey) ||
														(t.ctrlKey && t.altKey)
													) {
														if (t.char && 1 < t.char.length) return t.char;
														if (t.which) return String.fromCharCode(t.which);
													}
													return null;
												case "compositionend":
													return Dn && "ko" !== t.locale ? null : t.data;
											}
									  })(e, n)) &&
									0 < (r = Qr(r, "onBeforeInput")).length &&
									((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
									i.push({ event: a, listeners: r }),
									(a.data = g));
						}
						Vr(i, t);
					});
				}
				function $r(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function Qr(e, t) {
					for (var n = t + "Capture", r = []; null !== e; ) {
						var a = e,
							o = a.stateNode;
						5 === a.tag &&
							null !== o &&
							((a = o),
							null != (o = Re(e, n)) && r.unshift($r(e, o, a)),
							null != (o = Re(e, t)) && r.push($r(e, o, a))),
							(e = e.return);
					}
					return r;
				}
				function Xr(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag);
					return e || null;
				}
				function qr(e, t, n, r, a) {
					for (var o = t._reactName, i = []; null !== n && n !== r; ) {
						var l = n,
							u = l.alternate,
							s = l.stateNode;
						if (null !== u && u === r) break;
						5 === l.tag &&
							null !== s &&
							((l = s),
							a
								? null != (u = Re(n, o)) && i.unshift($r(n, u, l))
								: a || (null != (u = Re(n, o)) && i.push($r(n, u, l)))),
							(n = n.return);
					}
					0 !== i.length && e.push({ event: t, listeners: i });
				}
				var Yr = /\r\n?/g,
					Gr = /\u0000|\uFFFD/g;
				function Kr(e) {
					return ("string" === typeof e ? e : "" + e)
						.replace(Yr, "\n")
						.replace(Gr, "");
				}
				function Zr(e, t, n) {
					if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(o(425));
				}
				function Jr() {}
				var ea = null,
					ta = null;
				function na(e, t) {
					return (
						"textarea" === e ||
						"noscript" === e ||
						"string" === typeof t.children ||
						"number" === typeof t.children ||
						("object" === typeof t.dangerouslySetInnerHTML &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var ra = "function" === typeof setTimeout ? setTimeout : void 0,
					aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
					oa = "function" === typeof Promise ? Promise : void 0,
					ia =
						"function" === typeof queueMicrotask
							? queueMicrotask
							: "undefined" !== typeof oa
							? function (e) {
									return oa.resolve(null).then(e).catch(la);
							  }
							: ra;
				function la(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function ua(e, t) {
					var n = t,
						r = 0;
					do {
						var a = n.nextSibling;
						if ((e.removeChild(n), a && 8 === a.nodeType))
							if ("/$" === (n = a.data)) {
								if (0 === r) return e.removeChild(a), void Bt(t);
								r--;
							} else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
						n = a;
					} while (n);
					Bt(t);
				}
				function sa(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null;
						}
					}
					return e;
				}
				function ca(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--;
							} else "/$" === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				var fa = Math.random().toString(36).slice(2),
					da = "__reactFiber$" + fa,
					pa = "__reactProps$" + fa,
					ha = "__reactContainer$" + fa,
					va = "__reactEvents$" + fa,
					ma = "__reactListeners$" + fa,
					ya = "__reactHandles$" + fa;
				function ga(e) {
					var t = e[da];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[ha] || n[da])) {
							if (
								((n = t.alternate),
								null !== t.child || (null !== n && null !== n.child))
							)
								for (e = ca(e); null !== e; ) {
									if ((n = e[da])) return n;
									e = ca(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function ba(e) {
					return !(e = e[da] || e[ha]) ||
						(5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
						? null
						: e;
				}
				function xa(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(o(33));
				}
				function wa(e) {
					return e[pa] || null;
				}
				var ka = [],
					Sa = -1;
				function Ea(e) {
					return { current: e };
				}
				function Ca(e) {
					0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
				}
				function ja(e, t) {
					Sa++, (ka[Sa] = e.current), (e.current = t);
				}
				var Pa = {},
					Ta = Ea(Pa),
					_a = Ea(!1),
					Na = Pa;
				function Oa(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Pa;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
						return r.__reactInternalMemoizedMaskedChildContext;
					var a,
						o = {};
					for (a in n) o[a] = t[a];
					return (
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								t),
							(e.__reactInternalMemoizedMaskedChildContext = o)),
						o
					);
				}
				function Ra(e) {
					return null !== (e = e.childContextTypes) && void 0 !== e;
				}
				function La() {
					Ca(_a), Ca(Ta);
				}
				function Aa(e, t, n) {
					if (Ta.current !== Pa) throw Error(o(168));
					ja(Ta, t), ja(_a, n);
				}
				function Ma(e, t, n) {
					var r = e.stateNode;
					if (
						((t = t.childContextTypes), "function" !== typeof r.getChildContext)
					)
						return n;
					for (var a in (r = r.getChildContext()))
						if (!(a in t)) throw Error(o(108, H(e) || "Unknown", a));
					return D({}, n, r);
				}
				function za(e) {
					return (
						(e =
							((e = e.stateNode) &&
								e.__reactInternalMemoizedMergedChildContext) ||
							Pa),
						(Na = Ta.current),
						ja(Ta, e),
						ja(_a, _a.current),
						!0
					);
				}
				function Da(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(o(169));
					n
						? ((e = Ma(e, t, Na)),
						  (r.__reactInternalMemoizedMergedChildContext = e),
						  Ca(_a),
						  Ca(Ta),
						  ja(Ta, e))
						: Ca(_a),
						ja(_a, n);
				}
				var Va = null,
					Fa = !1,
					Ia = !1;
				function Ua(e) {
					null === Va ? (Va = [e]) : Va.push(e);
				}
				function Ba() {
					if (!Ia && null !== Va) {
						Ia = !0;
						var e = 0,
							t = bt;
						try {
							var n = Va;
							for (bt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0);
								} while (null !== r);
							}
							(Va = null), (Fa = !1);
						} catch (a) {
							throw (null !== Va && (Va = Va.slice(e + 1)), Xe(Je, Ba), a);
						} finally {
							(bt = t), (Ia = !1);
						}
					}
					return null;
				}
				var Ha = [],
					Wa = 0,
					$a = null,
					Qa = 0,
					Xa = [],
					qa = 0,
					Ya = null,
					Ga = 1,
					Ka = "";
				function Za(e, t) {
					(Ha[Wa++] = Qa), (Ha[Wa++] = $a), ($a = e), (Qa = t);
				}
				function Ja(e, t, n) {
					(Xa[qa++] = Ga), (Xa[qa++] = Ka), (Xa[qa++] = Ya), (Ya = e);
					var r = Ga;
					e = Ka;
					var a = 32 - it(r) - 1;
					(r &= ~(1 << a)), (n += 1);
					var o = 32 - it(t) + a;
					if (30 < o) {
						var i = a - (a % 5);
						(o = (r & ((1 << i) - 1)).toString(32)),
							(r >>= i),
							(a -= i),
							(Ga = (1 << (32 - it(t) + a)) | (n << a) | r),
							(Ka = o + e);
					} else (Ga = (1 << o) | (n << a) | r), (Ka = e);
				}
				function eo(e) {
					null !== e.return && (Za(e, 1), Ja(e, 1, 0));
				}
				function to(e) {
					for (; e === $a; )
						($a = Ha[--Wa]), (Ha[Wa] = null), (Qa = Ha[--Wa]), (Ha[Wa] = null);
					for (; e === Ya; )
						(Ya = Xa[--qa]),
							(Xa[qa] = null),
							(Ka = Xa[--qa]),
							(Xa[qa] = null),
							(Ga = Xa[--qa]),
							(Xa[qa] = null);
				}
				var no = null,
					ro = null,
					ao = !1,
					oo = null;
				function io(e, t) {
					var n = Os(5, null, null, 0);
					(n.elementType = "DELETED"),
						(n.stateNode = t),
						(n.return = e),
						null === (t = e.deletions)
							? ((e.deletions = [n]), (e.flags |= 16))
							: t.push(n);
				}
				function lo(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return (
								null !==
									(t =
										1 !== t.nodeType ||
										n.toLowerCase() !== t.nodeName.toLowerCase()
											? null
											: t) &&
								((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
							);
						case 6:
							return (
								null !==
									(t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
								((e.stateNode = t), (no = e), (ro = null), !0)
							);
						case 13:
							return (
								null !== (t = 8 !== t.nodeType ? null : t) &&
								((n = null !== Ya ? { id: Ga, overflow: Ka } : null),
								(e.memoizedState = {
									dehydrated: t,
									treeContext: n,
									retryLane: 1073741824,
								}),
								((n = Os(18, null, null, 0)).stateNode = t),
								(n.return = e),
								(e.child = n),
								(no = e),
								(ro = null),
								!0)
							);
						default:
							return !1;
					}
				}
				function uo(e) {
					return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
				}
				function so(e) {
					if (ao) {
						var t = ro;
						if (t) {
							var n = t;
							if (!lo(e, t)) {
								if (uo(e)) throw Error(o(418));
								t = sa(n.nextSibling);
								var r = no;
								t && lo(e, t)
									? io(r, n)
									: ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
							}
						} else {
							if (uo(e)) throw Error(o(418));
							(e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
						}
					}
				}
				function co(e) {
					for (
						e = e.return;
						null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

					)
						e = e.return;
					no = e;
				}
				function fo(e) {
					if (e !== no) return !1;
					if (!ao) return co(e), (ao = !0), !1;
					var t;
					if (
						((t = 3 !== e.tag) &&
							!(t = 5 !== e.tag) &&
							(t =
								"head" !== (t = e.type) &&
								"body" !== t &&
								!na(e.type, e.memoizedProps)),
						t && (t = ro))
					) {
						if (uo(e)) throw (po(), Error(o(418)));
						for (; t; ) io(e, t), (t = sa(t.nextSibling));
					}
					if ((co(e), 13 === e.tag)) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
							throw Error(o(317));
						e: {
							for (e = e.nextSibling, t = 0; e; ) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											ro = sa(e.nextSibling);
											break e;
										}
										t--;
									} else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
								}
								e = e.nextSibling;
							}
							ro = null;
						}
					} else ro = no ? sa(e.stateNode.nextSibling) : null;
					return !0;
				}
				function po() {
					for (var e = ro; e; ) e = sa(e.nextSibling);
				}
				function ho() {
					(ro = no = null), (ao = !1);
				}
				function vo(e) {
					null === oo ? (oo = [e]) : oo.push(e);
				}
				var mo = x.ReactCurrentBatchConfig;
				function yo(e, t) {
					if (e && e.defaultProps) {
						for (var n in ((t = D({}, t)), (e = e.defaultProps)))
							void 0 === t[n] && (t[n] = e[n]);
						return t;
					}
					return t;
				}
				var go = Ea(null),
					bo = null,
					xo = null,
					wo = null;
				function ko() {
					wo = xo = bo = null;
				}
				function So(e) {
					var t = go.current;
					Ca(go), (e._currentValue = t);
				}
				function Eo(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
								: null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function Co(e, t) {
					(bo = e),
						(wo = xo = null),
						null !== (e = e.dependencies) &&
							null !== e.firstContext &&
							(0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
				}
				function jo(e) {
					var t = e._currentValue;
					if (wo !== e)
						if (
							((e = { context: e, memoizedValue: t, next: null }), null === xo)
						) {
							if (null === bo) throw Error(o(308));
							(xo = e), (bo.dependencies = { lanes: 0, firstContext: e });
						} else xo = xo.next = e;
					return t;
				}
				var Po = null;
				function To(e) {
					null === Po ? (Po = [e]) : Po.push(e);
				}
				function _o(e, t, n, r) {
					var a = t.interleaved;
					return (
						null === a
							? ((n.next = n), To(t))
							: ((n.next = a.next), (a.next = n)),
						(t.interleaved = n),
						No(e, r)
					);
				}
				function No(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
						(e.childLanes |= t),
							null !== (n = e.alternate) && (n.childLanes |= t),
							(n = e),
							(e = e.return);
					return 3 === n.tag ? n.stateNode : null;
				}
				var Oo = !1;
				function Ro(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: { pending: null, interleaved: null, lanes: 0 },
						effects: null,
					};
				}
				function Lo(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								effects: e.effects,
							});
				}
				function Ao(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null,
					};
				}
				function Mo(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 !== (2 & Tu))) {
						var a = r.pending;
						return (
							null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
							(r.pending = t),
							No(e, n)
						);
					}
					return (
						null === (a = r.interleaved)
							? ((t.next = t), To(r))
							: ((t.next = a.next), (a.next = t)),
						(r.interleaved = t),
						No(e, n)
					);
				}
				function zo(e, t, n) {
					if (
						null !== (t = t.updateQueue) &&
						((t = t.shared), 0 !== (4194240 & n))
					) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
					}
				}
				function Do(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var a = null,
							o = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var i = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null,
								};
								null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
							} while (null !== n);
							null === o ? (a = o = t) : (o = o.next = t);
						} else a = o = t;
						return (
							(n = {
								baseState: r.baseState,
								firstBaseUpdate: a,
								lastBaseUpdate: o,
								shared: r.shared,
								effects: r.effects,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate)
						? (n.firstBaseUpdate = t)
						: (e.next = t),
						(n.lastBaseUpdate = t);
				}
				function Vo(e, t, n, r) {
					var a = e.updateQueue;
					Oo = !1;
					var o = a.firstBaseUpdate,
						i = a.lastBaseUpdate,
						l = a.shared.pending;
					if (null !== l) {
						a.shared.pending = null;
						var u = l,
							s = u.next;
						(u.next = null), null === i ? (o = s) : (i.next = s), (i = u);
						var c = e.alternate;
						null !== c &&
							(l = (c = c.updateQueue).lastBaseUpdate) !== i &&
							(null === l ? (c.firstBaseUpdate = s) : (l.next = s),
							(c.lastBaseUpdate = u));
					}
					if (null !== o) {
						var f = a.baseState;
						for (i = 0, c = s = u = null, l = o; ; ) {
							var d = l.lane,
								p = l.eventTime;
							if ((r & d) === d) {
								null !== c &&
									(c = c.next =
										{
											eventTime: p,
											lane: 0,
											tag: l.tag,
											payload: l.payload,
											callback: l.callback,
											next: null,
										});
								e: {
									var h = e,
										v = l;
									switch (((d = t), (p = n), v.tag)) {
										case 1:
											if ("function" === typeof (h = v.payload)) {
												f = h.call(p, f, d);
												break e;
											}
											f = h;
											break e;
										case 3:
											h.flags = (-65537 & h.flags) | 128;
										case 0:
											if (
												null ===
													(d =
														"function" === typeof (h = v.payload)
															? h.call(p, f, d)
															: h) ||
												void 0 === d
											)
												break e;
											f = D({}, f, d);
											break e;
										case 2:
											Oo = !0;
									}
								}
								null !== l.callback &&
									0 !== l.lane &&
									((e.flags |= 64),
									null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
							} else
								(p = {
									eventTime: p,
									lane: d,
									tag: l.tag,
									payload: l.payload,
									callback: l.callback,
									next: null,
								}),
									null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
									(i |= d);
							if (null === (l = l.next)) {
								if (null === (l = a.shared.pending)) break;
								(l = (d = l).next),
									(d.next = null),
									(a.lastBaseUpdate = d),
									(a.shared.pending = null);
							}
						}
						if (
							(null === c && (u = f),
							(a.baseState = u),
							(a.firstBaseUpdate = s),
							(a.lastBaseUpdate = c),
							null !== (t = a.shared.interleaved))
						) {
							a = t;
							do {
								(i |= a.lane), (a = a.next);
							} while (a !== t);
						} else null === o && (a.shared.lanes = 0);
						(zu |= i), (e.lanes = i), (e.memoizedState = f);
					}
				}
				function Fo(e, t, n) {
					if (((e = t.effects), (t.effects = null), null !== e))
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								a = r.callback;
							if (null !== a) {
								if (((r.callback = null), (r = n), "function" !== typeof a))
									throw Error(o(191, a));
								a.call(r);
							}
						}
				}
				var Io = new r.Component().refs;
				function Uo(e, t, n, r) {
					(n =
						null === (n = n(r, (t = e.memoizedState))) || void 0 === n
							? t
							: D({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var Bo = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && Be(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = es(),
							a = ts(e),
							o = Ao(r, a);
						(o.payload = t),
							void 0 !== n && null !== n && (o.callback = n),
							null !== (t = Mo(e, o, a)) && (ns(t, e, a, r), zo(t, e, a));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = es(),
							a = ts(e),
							o = Ao(r, a);
						(o.tag = 1),
							(o.payload = t),
							void 0 !== n && null !== n && (o.callback = n),
							null !== (t = Mo(e, o, a)) && (ns(t, e, a, r), zo(t, e, a));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = es(),
							r = ts(e),
							a = Ao(n, r);
						(a.tag = 2),
							void 0 !== t && null !== t && (a.callback = t),
							null !== (t = Mo(e, a, r)) && (ns(t, e, r, n), zo(t, e, r));
					},
				};
				function Ho(e, t, n, r, a, o, i) {
					return "function" === typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(r, o, i)
						: !t.prototype ||
								!t.prototype.isPureReactComponent ||
								!ur(n, r) ||
								!ur(a, o);
				}
				function Wo(e, t, n) {
					var r = !1,
						a = Pa,
						o = t.contextType;
					return (
						"object" === typeof o && null !== o
							? (o = jo(o))
							: ((a = Ra(t) ? Na : Ta.current),
							  (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
									? Oa(e, a)
									: Pa)),
						(t = new t(n, o)),
						(e.memoizedState =
							null !== t.state && void 0 !== t.state ? t.state : null),
						(t.updater = Bo),
						(e.stateNode = t),
						(t._reactInternals = e),
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								a),
							(e.__reactInternalMemoizedMaskedChildContext = o)),
						t
					);
				}
				function $o(e, t, n, r) {
					(e = t.state),
						"function" === typeof t.componentWillReceiveProps &&
							t.componentWillReceiveProps(n, r),
						"function" === typeof t.UNSAFE_componentWillReceiveProps &&
							t.UNSAFE_componentWillReceiveProps(n, r),
						t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
				}
				function Qo(e, t, n, r) {
					var a = e.stateNode;
					(a.props = n), (a.state = e.memoizedState), (a.refs = Io), Ro(e);
					var o = t.contextType;
					"object" === typeof o && null !== o
						? (a.context = jo(o))
						: ((o = Ra(t) ? Na : Ta.current), (a.context = Oa(e, o))),
						(a.state = e.memoizedState),
						"function" === typeof (o = t.getDerivedStateFromProps) &&
							(Uo(e, t, o, n), (a.state = e.memoizedState)),
						"function" === typeof t.getDerivedStateFromProps ||
							"function" === typeof a.getSnapshotBeforeUpdate ||
							("function" !== typeof a.UNSAFE_componentWillMount &&
								"function" !== typeof a.componentWillMount) ||
							((t = a.state),
							"function" === typeof a.componentWillMount &&
								a.componentWillMount(),
							"function" === typeof a.UNSAFE_componentWillMount &&
								a.UNSAFE_componentWillMount(),
							t !== a.state && Bo.enqueueReplaceState(a, a.state, null),
							Vo(e, n, a, r),
							(a.state = e.memoizedState)),
						"function" === typeof a.componentDidMount && (e.flags |= 4194308);
				}
				function Xo(e, t, n) {
					if (
						null !== (e = n.ref) &&
						"function" !== typeof e &&
						"object" !== typeof e
					) {
						if (n._owner) {
							if ((n = n._owner)) {
								if (1 !== n.tag) throw Error(o(309));
								var r = n.stateNode;
							}
							if (!r) throw Error(o(147, e));
							var a = r,
								i = "" + e;
							return null !== t &&
								null !== t.ref &&
								"function" === typeof t.ref &&
								t.ref._stringRef === i
								? t.ref
								: ((t = function (e) {
										var t = a.refs;
										t === Io && (t = a.refs = {}),
											null === e ? delete t[i] : (t[i] = e);
								  }),
								  (t._stringRef = i),
								  t);
						}
						if ("string" !== typeof e) throw Error(o(284));
						if (!n._owner) throw Error(o(290, e));
					}
					return e;
				}
				function qo(e, t) {
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(
							o(
								31,
								"[object Object]" === e
									? "object with keys {" + Object.keys(t).join(", ") + "}"
									: e
							)
						))
					);
				}
				function Yo(e) {
					return (0, e._init)(e._payload);
				}
				function Go(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e, t) {
						for (e = new Map(); null !== t; )
							null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
								(t = t.sibling);
						return e;
					}
					function a(e, t) {
						return ((e = Ls(e, t)).index = 0), (e.sibling = null), e;
					}
					function i(t, n, r) {
						return (
							(t.index = r),
							e
								? null !== (r = t.alternate)
									? (r = r.index) < n
										? ((t.flags |= 2), n)
										: r
									: ((t.flags |= 2), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function l(t) {
						return e && null === t.alternate && (t.flags |= 2), t;
					}
					function u(e, t, n, r) {
						return null === t || 6 !== t.tag
							? (((t = Ds(n, e.mode, r)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function s(e, t, n, r) {
						var o = n.type;
						return o === S
							? f(e, t, n.props.children, r, n.key)
							: null !== t &&
							  (t.elementType === o ||
									("object" === typeof o &&
										null !== o &&
										o.$$typeof === R &&
										Yo(o) === t.type))
							? (((r = a(t, n.props)).ref = Xo(e, t, n)), (r.return = e), r)
							: (((r = As(n.type, n.key, n.props, null, e.mode, r)).ref = Xo(
									e,
									t,
									n
							  )),
							  (r.return = e),
							  r);
					}
					function c(e, t, n, r) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = Vs(n, e.mode, r)).return = e), t)
							: (((t = a(t, n.children || [])).return = e), t);
					}
					function f(e, t, n, r, o) {
						return null === t || 7 !== t.tag
							? (((t = Ms(n, e.mode, r, o)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function d(e, t, n) {
						if (("string" === typeof t && "" !== t) || "number" === typeof t)
							return ((t = Ds("" + t, e.mode, n)).return = e), t;
						if ("object" === typeof t && null !== t) {
							switch (t.$$typeof) {
								case w:
									return (
										((n = As(t.type, t.key, t.props, null, e.mode, n)).ref = Xo(
											e,
											null,
											t
										)),
										(n.return = e),
										n
									);
								case k:
									return ((t = Vs(t, e.mode, n)).return = e), t;
								case R:
									return d(e, (0, t._init)(t._payload), n);
							}
							if (te(t) || M(t))
								return ((t = Ms(t, e.mode, n, null)).return = e), t;
							qo(e, t);
						}
						return null;
					}
					function p(e, t, n, r) {
						var a = null !== t ? t.key : null;
						if (("string" === typeof n && "" !== n) || "number" === typeof n)
							return null !== a ? null : u(e, t, "" + n, r);
						if ("object" === typeof n && null !== n) {
							switch (n.$$typeof) {
								case w:
									return n.key === a ? s(e, t, n, r) : null;
								case k:
									return n.key === a ? c(e, t, n, r) : null;
								case R:
									return p(e, t, (a = n._init)(n._payload), r);
							}
							if (te(n) || M(n)) return null !== a ? null : f(e, t, n, r, null);
							qo(e, n);
						}
						return null;
					}
					function h(e, t, n, r, a) {
						if (("string" === typeof r && "" !== r) || "number" === typeof r)
							return u(t, (e = e.get(n) || null), "" + r, a);
						if ("object" === typeof r && null !== r) {
							switch (r.$$typeof) {
								case w:
									return s(
										t,
										(e = e.get(null === r.key ? n : r.key) || null),
										r,
										a
									);
								case k:
									return c(
										t,
										(e = e.get(null === r.key ? n : r.key) || null),
										r,
										a
									);
								case R:
									return h(e, t, n, (0, r._init)(r._payload), a);
							}
							if (te(r) || M(r))
								return f(t, (e = e.get(n) || null), r, a, null);
							qo(t, r);
						}
						return null;
					}
					function v(a, o, l, u) {
						for (
							var s = null, c = null, f = o, v = (o = 0), m = null;
							null !== f && v < l.length;
							v++
						) {
							f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
							var y = p(a, f, l[v], u);
							if (null === y) {
								null === f && (f = m);
								break;
							}
							e && f && null === y.alternate && t(a, f),
								(o = i(y, o, v)),
								null === c ? (s = y) : (c.sibling = y),
								(c = y),
								(f = m);
						}
						if (v === l.length) return n(a, f), ao && Za(a, v), s;
						if (null === f) {
							for (; v < l.length; v++)
								null !== (f = d(a, l[v], u)) &&
									((o = i(f, o, v)),
									null === c ? (s = f) : (c.sibling = f),
									(c = f));
							return ao && Za(a, v), s;
						}
						for (f = r(a, f); v < l.length; v++)
							null !== (m = h(f, a, v, l[v], u)) &&
								(e &&
									null !== m.alternate &&
									f.delete(null === m.key ? v : m.key),
								(o = i(m, o, v)),
								null === c ? (s = m) : (c.sibling = m),
								(c = m));
						return (
							e &&
								f.forEach(function (e) {
									return t(a, e);
								}),
							ao && Za(a, v),
							s
						);
					}
					function m(a, l, u, s) {
						var c = M(u);
						if ("function" !== typeof c) throw Error(o(150));
						if (null == (u = c.call(u))) throw Error(o(151));
						for (
							var f = (c = null), v = l, m = (l = 0), y = null, g = u.next();
							null !== v && !g.done;
							m++, g = u.next()
						) {
							v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
							var b = p(a, v, g.value, s);
							if (null === b) {
								null === v && (v = y);
								break;
							}
							e && v && null === b.alternate && t(a, v),
								(l = i(b, l, m)),
								null === f ? (c = b) : (f.sibling = b),
								(f = b),
								(v = y);
						}
						if (g.done) return n(a, v), ao && Za(a, m), c;
						if (null === v) {
							for (; !g.done; m++, g = u.next())
								null !== (g = d(a, g.value, s)) &&
									((l = i(g, l, m)),
									null === f ? (c = g) : (f.sibling = g),
									(f = g));
							return ao && Za(a, m), c;
						}
						for (v = r(a, v); !g.done; m++, g = u.next())
							null !== (g = h(v, a, m, g.value, s)) &&
								(e &&
									null !== g.alternate &&
									v.delete(null === g.key ? m : g.key),
								(l = i(g, l, m)),
								null === f ? (c = g) : (f.sibling = g),
								(f = g));
						return (
							e &&
								v.forEach(function (e) {
									return t(a, e);
								}),
							ao && Za(a, m),
							c
						);
					}
					return function e(r, o, i, u) {
						if (
							("object" === typeof i &&
								null !== i &&
								i.type === S &&
								null === i.key &&
								(i = i.props.children),
							"object" === typeof i && null !== i)
						) {
							switch (i.$$typeof) {
								case w:
									e: {
										for (var s = i.key, c = o; null !== c; ) {
											if (c.key === s) {
												if ((s = i.type) === S) {
													if (7 === c.tag) {
														n(r, c.sibling),
															((o = a(c, i.props.children)).return = r),
															(r = o);
														break e;
													}
												} else if (
													c.elementType === s ||
													("object" === typeof s &&
														null !== s &&
														s.$$typeof === R &&
														Yo(s) === c.type)
												) {
													n(r, c.sibling),
														((o = a(c, i.props)).ref = Xo(r, c, i)),
														(o.return = r),
														(r = o);
													break e;
												}
												n(r, c);
												break;
											}
											t(r, c), (c = c.sibling);
										}
										i.type === S
											? (((o = Ms(i.props.children, r.mode, u, i.key)).return =
													r),
											  (r = o))
											: (((u = As(
													i.type,
													i.key,
													i.props,
													null,
													r.mode,
													u
											  )).ref = Xo(r, o, i)),
											  (u.return = r),
											  (r = u));
									}
									return l(r);
								case k:
									e: {
										for (c = i.key; null !== o; ) {
											if (o.key === c) {
												if (
													4 === o.tag &&
													o.stateNode.containerInfo === i.containerInfo &&
													o.stateNode.implementation === i.implementation
												) {
													n(r, o.sibling),
														((o = a(o, i.children || [])).return = r),
														(r = o);
													break e;
												}
												n(r, o);
												break;
											}
											t(r, o), (o = o.sibling);
										}
										((o = Vs(i, r.mode, u)).return = r), (r = o);
									}
									return l(r);
								case R:
									return e(r, o, (c = i._init)(i._payload), u);
							}
							if (te(i)) return v(r, o, i, u);
							if (M(i)) return m(r, o, i, u);
							qo(r, i);
						}
						return ("string" === typeof i && "" !== i) || "number" === typeof i
							? ((i = "" + i),
							  null !== o && 6 === o.tag
									? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
									: (n(r, o), ((o = Ds(i, r.mode, u)).return = r), (r = o)),
							  l(r))
							: n(r, o);
					};
				}
				var Ko = Go(!0),
					Zo = Go(!1),
					Jo = {},
					ei = Ea(Jo),
					ti = Ea(Jo),
					ni = Ea(Jo);
				function ri(e) {
					if (e === Jo) throw Error(o(174));
					return e;
				}
				function ai(e, t) {
					switch ((ja(ni, t), ja(ti, e), ja(ei, Jo), (e = t.nodeType))) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
							break;
						default:
							t = ue(
								(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
								(e = e.tagName)
							);
					}
					Ca(ei), ja(ei, t);
				}
				function oi() {
					Ca(ei), Ca(ti), Ca(ni);
				}
				function ii(e) {
					ri(ni.current);
					var t = ri(ei.current),
						n = ue(t, e.type);
					t !== n && (ja(ti, e), ja(ei, n));
				}
				function li(e) {
					ti.current === e && (Ca(ei), Ca(ti));
				}
				var ui = Ea(0);
				function si(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (
								null !== n &&
								(null === (n = n.dehydrated) ||
									"$?" === n.data ||
									"$!" === n.data)
							)
								return t;
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 !== (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var ci = [];
				function fi() {
					for (var e = 0; e < ci.length; e++)
						ci[e]._workInProgressVersionPrimary = null;
					ci.length = 0;
				}
				var di = x.ReactCurrentDispatcher,
					pi = x.ReactCurrentBatchConfig,
					hi = 0,
					vi = null,
					mi = null,
					yi = null,
					gi = !1,
					bi = !1,
					xi = 0,
					wi = 0;
				function ki() {
					throw Error(o(321));
				}
				function Si(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!lr(e[n], t[n])) return !1;
					return !0;
				}
				function Ei(e, t, n, r, a, i) {
					if (
						((hi = i),
						(vi = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(di.current = null === e || null === e.memoizedState ? ll : ul),
						(e = n(r, a)),
						bi)
					) {
						i = 0;
						do {
							if (((bi = !1), (xi = 0), 25 <= i)) throw Error(o(301));
							(i += 1),
								(yi = mi = null),
								(t.updateQueue = null),
								(di.current = sl),
								(e = n(r, a));
						} while (bi);
					}
					if (
						((di.current = il),
						(t = null !== mi && null !== mi.next),
						(hi = 0),
						(yi = mi = vi = null),
						(gi = !1),
						t)
					)
						throw Error(o(300));
					return e;
				}
				function Ci() {
					var e = 0 !== xi;
					return (xi = 0), e;
				}
				function ji() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null,
					};
					return (
						null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e), yi
					);
				}
				function Pi() {
					if (null === mi) {
						var e = vi.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = mi.next;
					var t = null === yi ? vi.memoizedState : yi.next;
					if (null !== t) (yi = t), (mi = e);
					else {
						if (null === e) throw Error(o(310));
						(e = {
							memoizedState: (mi = e).memoizedState,
							baseState: mi.baseState,
							baseQueue: mi.baseQueue,
							queue: mi.queue,
							next: null,
						}),
							null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e);
					}
					return yi;
				}
				function Ti(e, t) {
					return "function" === typeof t ? t(e) : t;
				}
				function _i(e) {
					var t = Pi(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = mi,
						a = r.baseQueue,
						i = n.pending;
					if (null !== i) {
						if (null !== a) {
							var l = a.next;
							(a.next = i.next), (i.next = l);
						}
						(r.baseQueue = a = i), (n.pending = null);
					}
					if (null !== a) {
						(i = a.next), (r = r.baseState);
						var u = (l = null),
							s = null,
							c = i;
						do {
							var f = c.lane;
							if ((hi & f) === f)
								null !== s &&
									(s = s.next =
										{
											lane: 0,
											action: c.action,
											hasEagerState: c.hasEagerState,
											eagerState: c.eagerState,
											next: null,
										}),
									(r = c.hasEagerState ? c.eagerState : e(r, c.action));
							else {
								var d = {
									lane: f,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null,
								};
								null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
									(vi.lanes |= f),
									(zu |= f);
							}
							c = c.next;
						} while (null !== c && c !== i);
						null === s ? (l = r) : (s.next = u),
							lr(r, t.memoizedState) || (xl = !0),
							(t.memoizedState = r),
							(t.baseState = l),
							(t.baseQueue = s),
							(n.lastRenderedState = r);
					}
					if (null !== (e = n.interleaved)) {
						a = e;
						do {
							(i = a.lane), (vi.lanes |= i), (zu |= i), (a = a.next);
						} while (a !== e);
					} else null === a && (n.lanes = 0);
					return [t.memoizedState, n.dispatch];
				}
				function Ni(e) {
					var t = Pi(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						a = n.pending,
						i = t.memoizedState;
					if (null !== a) {
						n.pending = null;
						var l = (a = a.next);
						do {
							(i = e(i, l.action)), (l = l.next);
						} while (l !== a);
						lr(i, t.memoizedState) || (xl = !0),
							(t.memoizedState = i),
							null === t.baseQueue && (t.baseState = i),
							(n.lastRenderedState = i);
					}
					return [i, r];
				}
				function Oi() {}
				function Ri(e, t) {
					var n = vi,
						r = Pi(),
						a = t(),
						i = !lr(r.memoizedState, a);
					if (
						(i && ((r.memoizedState = a), (xl = !0)),
						(r = r.queue),
						Wi(Mi.bind(null, n, r, e), [e]),
						r.getSnapshot !== t ||
							i ||
							(null !== yi && 1 & yi.memoizedState.tag))
					) {
						if (
							((n.flags |= 2048),
							Fi(9, Ai.bind(null, n, r, a, t), void 0, null),
							null === _u)
						)
							throw Error(o(349));
						0 !== (30 & hi) || Li(n, t, a);
					}
					return a;
				}
				function Li(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = vi.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
							  (vi.updateQueue = t),
							  (t.stores = [e]))
							: null === (n = t.stores)
							? (t.stores = [e])
							: n.push(e);
				}
				function Ai(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), zi(t) && Di(e);
				}
				function Mi(e, t, n) {
					return n(function () {
						zi(t) && Di(e);
					});
				}
				function zi(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !lr(e, n);
					} catch (r) {
						return !0;
					}
				}
				function Di(e) {
					var t = No(e, 1);
					null !== t && ns(t, e, 1, -1);
				}
				function Vi(e) {
					var t = ji();
					return (
						"function" === typeof e && (e = e()),
						(t.memoizedState = t.baseState = e),
						(e = {
							pending: null,
							interleaved: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Ti,
							lastRenderedState: e,
						}),
						(t.queue = e),
						(e = e.dispatch = nl.bind(null, vi, e)),
						[t.memoizedState, e]
					);
				}
				function Fi(e, t, n, r) {
					return (
						(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
						null === (t = vi.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
							  (vi.updateQueue = t),
							  (t.lastEffect = e.next = e))
							: null === (n = t.lastEffect)
							? (t.lastEffect = e.next = e)
							: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
						e
					);
				}
				function Ii() {
					return Pi().memoizedState;
				}
				function Ui(e, t, n, r) {
					var a = ji();
					(vi.flags |= e),
						(a.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r));
				}
				function Bi(e, t, n, r) {
					var a = Pi();
					r = void 0 === r ? null : r;
					var o = void 0;
					if (null !== mi) {
						var i = mi.memoizedState;
						if (((o = i.destroy), null !== r && Si(r, i.deps)))
							return void (a.memoizedState = Fi(t, n, o, r));
					}
					(vi.flags |= e), (a.memoizedState = Fi(1 | t, n, o, r));
				}
				function Hi(e, t) {
					return Ui(8390656, 8, e, t);
				}
				function Wi(e, t) {
					return Bi(2048, 8, e, t);
				}
				function $i(e, t) {
					return Bi(4, 2, e, t);
				}
				function Qi(e, t) {
					return Bi(4, 4, e, t);
				}
				function Xi(e, t) {
					return "function" === typeof t
						? ((e = e()),
						  t(e),
						  function () {
								t(null);
						  })
						: null !== t && void 0 !== t
						? ((e = e()),
						  (t.current = e),
						  function () {
								t.current = null;
						  })
						: void 0;
				}
				function qi(e, t, n) {
					return (
						(n = null !== n && void 0 !== n ? n.concat([e]) : null),
						Bi(4, 4, Xi.bind(null, t, e), n)
					);
				}
				function Yi() {}
				function Gi(e, t) {
					var n = Pi();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && Si(t, r[1])
						? r[0]
						: ((n.memoizedState = [e, t]), e);
				}
				function Ki(e, t) {
					var n = Pi();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && Si(t, r[1])
						? r[0]
						: ((e = e()), (n.memoizedState = [e, t]), e);
				}
				function Zi(e, t, n) {
					return 0 === (21 & hi)
						? (e.baseState && ((e.baseState = !1), (xl = !0)),
						  (e.memoizedState = n))
						: (lr(n, t) ||
								((n = vt()), (vi.lanes |= n), (zu |= n), (e.baseState = !0)),
						  t);
				}
				function Ji(e, t) {
					var n = bt;
					(bt = 0 !== n && 4 > n ? n : 4), e(!0);
					var r = pi.transition;
					pi.transition = {};
					try {
						e(!1), t();
					} finally {
						(bt = n), (pi.transition = r);
					}
				}
				function el() {
					return Pi().memoizedState;
				}
				function tl(e, t, n) {
					var r = ts(e);
					if (
						((n = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						}),
						rl(e))
					)
						al(t, n);
					else if (null !== (n = _o(e, t, n, r))) {
						ns(n, e, r, es()), ol(n, t, r);
					}
				}
				function nl(e, t, n) {
					var r = ts(e),
						a = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						};
					if (rl(e)) al(t, a);
					else {
						var o = e.alternate;
						if (
							0 === e.lanes &&
							(null === o || 0 === o.lanes) &&
							null !== (o = t.lastRenderedReducer)
						)
							try {
								var i = t.lastRenderedState,
									l = o(i, n);
								if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
									var u = t.interleaved;
									return (
										null === u
											? ((a.next = a), To(t))
											: ((a.next = u.next), (u.next = a)),
										void (t.interleaved = a)
									);
								}
							} catch (s) {}
						null !== (n = _o(e, t, a, r)) &&
							(ns(n, e, r, (a = es())), ol(n, t, r));
					}
				}
				function rl(e) {
					var t = e.alternate;
					return e === vi || (null !== t && t === vi);
				}
				function al(e, t) {
					bi = gi = !0;
					var n = e.pending;
					null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
				function ol(e, t, n) {
					if (0 !== (4194240 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
					}
				}
				var il = {
						readContext: jo,
						useCallback: ki,
						useContext: ki,
						useEffect: ki,
						useImperativeHandle: ki,
						useInsertionEffect: ki,
						useLayoutEffect: ki,
						useMemo: ki,
						useReducer: ki,
						useRef: ki,
						useState: ki,
						useDebugValue: ki,
						useDeferredValue: ki,
						useTransition: ki,
						useMutableSource: ki,
						useSyncExternalStore: ki,
						useId: ki,
						unstable_isNewReconciler: !1,
					},
					ll = {
						readContext: jo,
						useCallback: function (e, t) {
							return (ji().memoizedState = [e, void 0 === t ? null : t]), e;
						},
						useContext: jo,
						useEffect: Hi,
						useImperativeHandle: function (e, t, n) {
							return (
								(n = null !== n && void 0 !== n ? n.concat([e]) : null),
								Ui(4194308, 4, Xi.bind(null, t, e), n)
							);
						},
						useLayoutEffect: function (e, t) {
							return Ui(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							return Ui(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = ji();
							return (
								(t = void 0 === t ? null : t),
								(e = e()),
								(n.memoizedState = [e, t]),
								e
							);
						},
						useReducer: function (e, t, n) {
							var r = ji();
							return (
								(t = void 0 !== n ? n(t) : t),
								(r.memoizedState = r.baseState = t),
								(e = {
									pending: null,
									interleaved: null,
									lanes: 0,
									dispatch: null,
									lastRenderedReducer: e,
									lastRenderedState: t,
								}),
								(r.queue = e),
								(e = e.dispatch = tl.bind(null, vi, e)),
								[r.memoizedState, e]
							);
						},
						useRef: function (e) {
							return (e = { current: e }), (ji().memoizedState = e);
						},
						useState: Vi,
						useDebugValue: Yi,
						useDeferredValue: function (e) {
							return (ji().memoizedState = e);
						},
						useTransition: function () {
							var e = Vi(!1),
								t = e[0];
							return (
								(e = Ji.bind(null, e[1])), (ji().memoizedState = e), [t, e]
							);
						},
						useMutableSource: function () {},
						useSyncExternalStore: function (e, t, n) {
							var r = vi,
								a = ji();
							if (ao) {
								if (void 0 === n) throw Error(o(407));
								n = n();
							} else {
								if (((n = t()), null === _u)) throw Error(o(349));
								0 !== (30 & hi) || Li(r, t, n);
							}
							a.memoizedState = n;
							var i = { value: n, getSnapshot: t };
							return (
								(a.queue = i),
								Hi(Mi.bind(null, r, i, e), [e]),
								(r.flags |= 2048),
								Fi(9, Ai.bind(null, r, i, n, t), void 0, null),
								n
							);
						},
						useId: function () {
							var e = ji(),
								t = _u.identifierPrefix;
							if (ao) {
								var n = Ka;
								(t =
									":" +
									t +
									"R" +
									(n = (Ga & ~(1 << (32 - it(Ga) - 1))).toString(32) + n)),
									0 < (n = xi++) && (t += "H" + n.toString(32)),
									(t += ":");
							} else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
							return (e.memoizedState = t);
						},
						unstable_isNewReconciler: !1,
					},
					ul = {
						readContext: jo,
						useCallback: Gi,
						useContext: jo,
						useEffect: Wi,
						useImperativeHandle: qi,
						useInsertionEffect: $i,
						useLayoutEffect: Qi,
						useMemo: Ki,
						useReducer: _i,
						useRef: Ii,
						useState: function () {
							return _i(Ti);
						},
						useDebugValue: Yi,
						useDeferredValue: function (e) {
							return Zi(Pi(), mi.memoizedState, e);
						},
						useTransition: function () {
							return [_i(Ti)[0], Pi().memoizedState];
						},
						useMutableSource: Oi,
						useSyncExternalStore: Ri,
						useId: el,
						unstable_isNewReconciler: !1,
					},
					sl = {
						readContext: jo,
						useCallback: Gi,
						useContext: jo,
						useEffect: Wi,
						useImperativeHandle: qi,
						useInsertionEffect: $i,
						useLayoutEffect: Qi,
						useMemo: Ki,
						useReducer: Ni,
						useRef: Ii,
						useState: function () {
							return Ni(Ti);
						},
						useDebugValue: Yi,
						useDeferredValue: function (e) {
							var t = Pi();
							return null === mi
								? (t.memoizedState = e)
								: Zi(t, mi.memoizedState, e);
						},
						useTransition: function () {
							return [Ni(Ti)[0], Pi().memoizedState];
						},
						useMutableSource: Oi,
						useSyncExternalStore: Ri,
						useId: el,
						unstable_isNewReconciler: !1,
					};
				function cl(e, t) {
					try {
						var n = "",
							r = t;
						do {
							(n += U(r)), (r = r.return);
						} while (r);
						var a = n;
					} catch (o) {
						a = "\nError generating stack: " + o.message + "\n" + o.stack;
					}
					return { value: e, source: t, stack: a, digest: null };
				}
				function fl(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null,
					};
				}
				function dl(e, t) {
					try {
						console.error(t.value);
					} catch (n) {
						setTimeout(function () {
							throw n;
						});
					}
				}
				var pl = "function" === typeof WeakMap ? WeakMap : Map;
				function hl(e, t, n) {
					((n = Ao(-1, n)).tag = 3), (n.payload = { element: null });
					var r = t.value;
					return (
						(n.callback = function () {
							Wu || ((Wu = !0), ($u = r)), dl(0, t);
						}),
						n
					);
				}
				function vl(e, t, n) {
					(n = Ao(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ("function" === typeof r) {
						var a = t.value;
						(n.payload = function () {
							return r(a);
						}),
							(n.callback = function () {
								dl(0, t);
							});
					}
					var o = e.stateNode;
					return (
						null !== o &&
							"function" === typeof o.componentDidCatch &&
							(n.callback = function () {
								dl(0, t),
									"function" !== typeof r &&
										(null === Qu ? (Qu = new Set([this])) : Qu.add(this));
								var e = t.stack;
								this.componentDidCatch(t.value, {
									componentStack: null !== e ? e : "",
								});
							}),
						n
					);
				}
				function ml(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new pl();
						var a = new Set();
						r.set(t, a);
					} else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
					a.has(n) || (a.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
				}
				function yl(e) {
					do {
						var t;
						if (
							((t = 13 === e.tag) &&
								(t = null === (t = e.memoizedState) || null !== t.dehydrated),
							t)
						)
							return e;
						e = e.return;
					} while (null !== e);
					return null;
				}
				function gl(e, t, n, r, a) {
					return 0 === (1 & e.mode)
						? (e === t
								? (e.flags |= 65536)
								: ((e.flags |= 128),
								  (n.flags |= 131072),
								  (n.flags &= -52805),
								  1 === n.tag &&
										(null === n.alternate
											? (n.tag = 17)
											: (((t = Ao(-1, 1)).tag = 2), Mo(n, t, 1))),
								  (n.lanes |= 1)),
						  e)
						: ((e.flags |= 65536), (e.lanes = a), e);
				}
				var bl = x.ReactCurrentOwner,
					xl = !1;
				function wl(e, t, n, r) {
					t.child = null === e ? Zo(t, null, n, r) : Ko(t, e.child, n, r);
				}
				function kl(e, t, n, r, a) {
					n = n.render;
					var o = t.ref;
					return (
						Co(t, a),
						(r = Ei(e, t, n, r, o, a)),
						(n = Ci()),
						null === e || xl
							? (ao && n && eo(t), (t.flags |= 1), wl(e, t, r, a), t.child)
							: ((t.updateQueue = e.updateQueue),
							  (t.flags &= -2053),
							  (e.lanes &= ~a),
							  Wl(e, t, a))
					);
				}
				function Sl(e, t, n, r, a) {
					if (null === e) {
						var o = n.type;
						return "function" !== typeof o ||
							Rs(o) ||
							void 0 !== o.defaultProps ||
							null !== n.compare ||
							void 0 !== n.defaultProps
							? (((e = As(n.type, null, r, t, t.mode, a)).ref = t.ref),
							  (e.return = t),
							  (t.child = e))
							: ((t.tag = 15), (t.type = o), El(e, t, o, r, a));
					}
					if (((o = e.child), 0 === (e.lanes & a))) {
						var i = o.memoizedProps;
						if (
							(n = null !== (n = n.compare) ? n : ur)(i, r) &&
							e.ref === t.ref
						)
							return Wl(e, t, a);
					}
					return (
						(t.flags |= 1),
						((e = Ls(o, r)).ref = t.ref),
						(e.return = t),
						(t.child = e)
					);
				}
				function El(e, t, n, r, a) {
					if (null !== e) {
						var o = e.memoizedProps;
						if (ur(o, r) && e.ref === t.ref) {
							if (((xl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
								return (t.lanes = e.lanes), Wl(e, t, a);
							0 !== (131072 & e.flags) && (xl = !0);
						}
					}
					return Pl(e, t, n, r, a);
				}
				function Cl(e, t, n) {
					var r = t.pendingProps,
						a = r.children,
						o = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode)
						if (0 === (1 & t.mode))
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								ja(Lu, Ru),
								(Ru |= n);
						else {
							if (0 === (1073741824 & n))
								return (
									(e = null !== o ? o.baseLanes | n : n),
									(t.lanes = t.childLanes = 1073741824),
									(t.memoizedState = {
										baseLanes: e,
										cachePool: null,
										transitions: null,
									}),
									(t.updateQueue = null),
									ja(Lu, Ru),
									(Ru |= e),
									null
								);
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								(r = null !== o ? o.baseLanes : n),
								ja(Lu, Ru),
								(Ru |= r);
						}
					else
						null !== o
							? ((r = o.baseLanes | n), (t.memoizedState = null))
							: (r = n),
							ja(Lu, Ru),
							(Ru |= r);
					return wl(e, t, a, n), t.child;
				}
				function jl(e, t) {
					var n = t.ref;
					((null === e && null !== n) || (null !== e && e.ref !== n)) &&
						((t.flags |= 512), (t.flags |= 2097152));
				}
				function Pl(e, t, n, r, a) {
					var o = Ra(n) ? Na : Ta.current;
					return (
						(o = Oa(t, o)),
						Co(t, a),
						(n = Ei(e, t, n, r, o, a)),
						(r = Ci()),
						null === e || xl
							? (ao && r && eo(t), (t.flags |= 1), wl(e, t, n, a), t.child)
							: ((t.updateQueue = e.updateQueue),
							  (t.flags &= -2053),
							  (e.lanes &= ~a),
							  Wl(e, t, a))
					);
				}
				function Tl(e, t, n, r, a) {
					if (Ra(n)) {
						var o = !0;
						za(t);
					} else o = !1;
					if ((Co(t, a), null === t.stateNode))
						Hl(e, t), Wo(t, n, r), Qo(t, n, r, a), (r = !0);
					else if (null === e) {
						var i = t.stateNode,
							l = t.memoizedProps;
						i.props = l;
						var u = i.context,
							s = n.contextType;
						"object" === typeof s && null !== s
							? (s = jo(s))
							: (s = Oa(t, (s = Ra(n) ? Na : Ta.current)));
						var c = n.getDerivedStateFromProps,
							f =
								"function" === typeof c ||
								"function" === typeof i.getSnapshotBeforeUpdate;
						f ||
							("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
								"function" !== typeof i.componentWillReceiveProps) ||
							((l !== r || u !== s) && $o(t, i, r, s)),
							(Oo = !1);
						var d = t.memoizedState;
						(i.state = d),
							Vo(t, r, i, a),
							(u = t.memoizedState),
							l !== r || d !== u || _a.current || Oo
								? ("function" === typeof c &&
										(Uo(t, n, c, r), (u = t.memoizedState)),
								  (l = Oo || Ho(t, n, l, r, d, u, s))
										? (f ||
												("function" !== typeof i.UNSAFE_componentWillMount &&
													"function" !== typeof i.componentWillMount) ||
												("function" === typeof i.componentWillMount &&
													i.componentWillMount(),
												"function" === typeof i.UNSAFE_componentWillMount &&
													i.UNSAFE_componentWillMount()),
										  "function" === typeof i.componentDidMount &&
												(t.flags |= 4194308))
										: ("function" === typeof i.componentDidMount &&
												(t.flags |= 4194308),
										  (t.memoizedProps = r),
										  (t.memoizedState = u)),
								  (i.props = r),
								  (i.state = u),
								  (i.context = s),
								  (r = l))
								: ("function" === typeof i.componentDidMount &&
										(t.flags |= 4194308),
								  (r = !1));
					} else {
						(i = t.stateNode),
							Lo(e, t),
							(l = t.memoizedProps),
							(s = t.type === t.elementType ? l : yo(t.type, l)),
							(i.props = s),
							(f = t.pendingProps),
							(d = i.context),
							"object" === typeof (u = n.contextType) && null !== u
								? (u = jo(u))
								: (u = Oa(t, (u = Ra(n) ? Na : Ta.current)));
						var p = n.getDerivedStateFromProps;
						(c =
							"function" === typeof p ||
							"function" === typeof i.getSnapshotBeforeUpdate) ||
							("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
								"function" !== typeof i.componentWillReceiveProps) ||
							((l !== f || d !== u) && $o(t, i, r, u)),
							(Oo = !1),
							(d = t.memoizedState),
							(i.state = d),
							Vo(t, r, i, a);
						var h = t.memoizedState;
						l !== f || d !== h || _a.current || Oo
							? ("function" === typeof p &&
									(Uo(t, n, p, r), (h = t.memoizedState)),
							  (s = Oo || Ho(t, n, s, r, d, h, u) || !1)
									? (c ||
											("function" !== typeof i.UNSAFE_componentWillUpdate &&
												"function" !== typeof i.componentWillUpdate) ||
											("function" === typeof i.componentWillUpdate &&
												i.componentWillUpdate(r, h, u),
											"function" === typeof i.UNSAFE_componentWillUpdate &&
												i.UNSAFE_componentWillUpdate(r, h, u)),
									  "function" === typeof i.componentDidUpdate &&
											(t.flags |= 4),
									  "function" === typeof i.getSnapshotBeforeUpdate &&
											(t.flags |= 1024))
									: ("function" !== typeof i.componentDidUpdate ||
											(l === e.memoizedProps && d === e.memoizedState) ||
											(t.flags |= 4),
									  "function" !== typeof i.getSnapshotBeforeUpdate ||
											(l === e.memoizedProps && d === e.memoizedState) ||
											(t.flags |= 1024),
									  (t.memoizedProps = r),
									  (t.memoizedState = h)),
							  (i.props = r),
							  (i.state = h),
							  (i.context = u),
							  (r = s))
							: ("function" !== typeof i.componentDidUpdate ||
									(l === e.memoizedProps && d === e.memoizedState) ||
									(t.flags |= 4),
							  "function" !== typeof i.getSnapshotBeforeUpdate ||
									(l === e.memoizedProps && d === e.memoizedState) ||
									(t.flags |= 1024),
							  (r = !1));
					}
					return _l(e, t, n, r, o, a);
				}
				function _l(e, t, n, r, a, o) {
					jl(e, t);
					var i = 0 !== (128 & t.flags);
					if (!r && !i) return a && Da(t, n, !1), Wl(e, t, o);
					(r = t.stateNode), (bl.current = t);
					var l =
						i && "function" !== typeof n.getDerivedStateFromError
							? null
							: r.render();
					return (
						(t.flags |= 1),
						null !== e && i
							? ((t.child = Ko(t, e.child, null, o)),
							  (t.child = Ko(t, null, l, o)))
							: wl(e, t, l, o),
						(t.memoizedState = r.state),
						a && Da(t, n, !0),
						t.child
					);
				}
				function Nl(e) {
					var t = e.stateNode;
					t.pendingContext
						? Aa(0, t.pendingContext, t.pendingContext !== t.context)
						: t.context && Aa(0, t.context, !1),
						ai(e, t.containerInfo);
				}
				function Ol(e, t, n, r, a) {
					return ho(), vo(a), (t.flags |= 256), wl(e, t, n, r), t.child;
				}
				var Rl,
					Ll,
					Al,
					Ml = { dehydrated: null, treeContext: null, retryLane: 0 };
				function zl(e) {
					return { baseLanes: e, cachePool: null, transitions: null };
				}
				function Dl(e, t, n) {
					var r,
						a = t.pendingProps,
						i = ui.current,
						l = !1,
						u = 0 !== (128 & t.flags);
					if (
						((r = u) ||
							(r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
						r
							? ((l = !0), (t.flags &= -129))
							: (null !== e && null === e.memoizedState) || (i |= 1),
						ja(ui, 1 & i),
						null === e)
					)
						return (
							so(t),
							null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
								? (0 === (1 & t.mode)
										? (t.lanes = 1)
										: "$!" === e.data
										? (t.lanes = 8)
										: (t.lanes = 1073741824),
								  null)
								: ((u = a.children),
								  (e = a.fallback),
								  l
										? ((a = t.mode),
										  (l = t.child),
										  (u = { mode: "hidden", children: u }),
										  0 === (1 & a) && null !== l
												? ((l.childLanes = 0), (l.pendingProps = u))
												: (l = zs(u, a, 0, null)),
										  (e = Ms(e, a, n, null)),
										  (l.return = t),
										  (e.return = t),
										  (l.sibling = e),
										  (t.child = l),
										  (t.child.memoizedState = zl(n)),
										  (t.memoizedState = Ml),
										  e)
										: Vl(t, u))
						);
					if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
						return (function (e, t, n, r, a, i, l) {
							if (n)
								return 256 & t.flags
									? ((t.flags &= -257), Fl(e, t, l, (r = fl(Error(o(422))))))
									: null !== t.memoizedState
									? ((t.child = e.child), (t.flags |= 128), null)
									: ((i = r.fallback),
									  (a = t.mode),
									  (r = zs(
											{ mode: "visible", children: r.children },
											a,
											0,
											null
									  )),
									  ((i = Ms(i, a, l, null)).flags |= 2),
									  (r.return = t),
									  (i.return = t),
									  (r.sibling = i),
									  (t.child = r),
									  0 !== (1 & t.mode) && Ko(t, e.child, null, l),
									  (t.child.memoizedState = zl(l)),
									  (t.memoizedState = Ml),
									  i);
							if (0 === (1 & t.mode)) return Fl(e, t, l, null);
							if ("$!" === a.data) {
								if ((r = a.nextSibling && a.nextSibling.dataset))
									var u = r.dgst;
								return (
									(r = u), Fl(e, t, l, (r = fl((i = Error(o(419))), r, void 0)))
								);
							}
							if (((u = 0 !== (l & e.childLanes)), xl || u)) {
								if (null !== (r = _u)) {
									switch (l & -l) {
										case 4:
											a = 2;
											break;
										case 16:
											a = 8;
											break;
										case 64:
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
										case 67108864:
											a = 32;
											break;
										case 536870912:
											a = 268435456;
											break;
										default:
											a = 0;
									}
									0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
										a !== i.retryLane &&
										((i.retryLane = a), No(e, a), ns(r, e, a, -1));
								}
								return vs(), Fl(e, t, l, (r = fl(Error(o(421)))));
							}
							return "$?" === a.data
								? ((t.flags |= 128),
								  (t.child = e.child),
								  (t = Ps.bind(null, e)),
								  (a._reactRetry = t),
								  null)
								: ((e = i.treeContext),
								  (ro = sa(a.nextSibling)),
								  (no = t),
								  (ao = !0),
								  (oo = null),
								  null !== e &&
										((Xa[qa++] = Ga),
										(Xa[qa++] = Ka),
										(Xa[qa++] = Ya),
										(Ga = e.id),
										(Ka = e.overflow),
										(Ya = t)),
								  ((t = Vl(t, r.children)).flags |= 4096),
								  t);
						})(e, t, u, a, r, i, n);
					if (l) {
						(l = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
						var s = { mode: "hidden", children: a.children };
						return (
							0 === (1 & u) && t.child !== i
								? (((a = t.child).childLanes = 0),
								  (a.pendingProps = s),
								  (t.deletions = null))
								: ((a = Ls(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
							null !== r
								? (l = Ls(r, l))
								: ((l = Ms(l, u, n, null)).flags |= 2),
							(l.return = t),
							(a.return = t),
							(a.sibling = l),
							(t.child = a),
							(a = l),
							(l = t.child),
							(u =
								null === (u = e.child.memoizedState)
									? zl(n)
									: {
											baseLanes: u.baseLanes | n,
											cachePool: null,
											transitions: u.transitions,
									  }),
							(l.memoizedState = u),
							(l.childLanes = e.childLanes & ~n),
							(t.memoizedState = Ml),
							a
						);
					}
					return (
						(e = (l = e.child).sibling),
						(a = Ls(l, { mode: "visible", children: a.children })),
						0 === (1 & t.mode) && (a.lanes = n),
						(a.return = t),
						(a.sibling = null),
						null !== e &&
							(null === (n = t.deletions)
								? ((t.deletions = [e]), (t.flags |= 16))
								: n.push(e)),
						(t.child = a),
						(t.memoizedState = null),
						a
					);
				}
				function Vl(e, t) {
					return (
						((t = zs(
							{ mode: "visible", children: t },
							e.mode,
							0,
							null
						)).return = e),
						(e.child = t)
					);
				}
				function Fl(e, t, n, r) {
					return (
						null !== r && vo(r),
						Ko(t, e.child, null, n),
						((e = Vl(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function Il(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), Eo(e.return, t, n);
				}
				function Ul(e, t, n, r, a) {
					var o = e.memoizedState;
					null === o
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: r,
								tail: n,
								tailMode: a,
						  })
						: ((o.isBackwards = t),
						  (o.rendering = null),
						  (o.renderingStartTime = 0),
						  (o.last = r),
						  (o.tail = n),
						  (o.tailMode = a));
				}
				function Bl(e, t, n) {
					var r = t.pendingProps,
						a = r.revealOrder,
						o = r.tail;
					if ((wl(e, t, r.children, n), 0 !== (2 & (r = ui.current))))
						(r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 !== (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag) null !== e.memoizedState && Il(e, n, t);
								else if (19 === e.tag) Il(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t) break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					if ((ja(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
					else
						switch (a) {
							case "forwards":
								for (n = t.child, a = null; null !== n; )
									null !== (e = n.alternate) && null === si(e) && (a = n),
										(n = n.sibling);
								null === (n = a)
									? ((a = t.child), (t.child = null))
									: ((a = n.sibling), (n.sibling = null)),
									Ul(t, !1, a, n, o);
								break;
							case "backwards":
								for (n = null, a = t.child, t.child = null; null !== a; ) {
									if (null !== (e = a.alternate) && null === si(e)) {
										t.child = a;
										break;
									}
									(e = a.sibling), (a.sibling = n), (n = a), (a = e);
								}
								Ul(t, !0, n, null, o);
								break;
							case "together":
								Ul(t, !1, null, null, void 0);
								break;
							default:
								t.memoizedState = null;
						}
					return t.child;
				}
				function Hl(e, t) {
					0 === (1 & t.mode) &&
						null !== e &&
						((e.alternate = null), (t.alternate = null), (t.flags |= 2));
				}
				function Wl(e, t, n) {
					if (
						(null !== e && (t.dependencies = e.dependencies),
						(zu |= t.lanes),
						0 === (n & t.childLanes))
					)
						return null;
					if (null !== e && t.child !== e.child) throw Error(o(153));
					if (null !== t.child) {
						for (
							n = Ls((e = t.child), e.pendingProps), t.child = n, n.return = t;
							null !== e.sibling;

						)
							(e = e.sibling),
								((n = n.sibling = Ls(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function $l(e, t) {
					if (!ao)
						switch (e.tailMode) {
							case "hidden":
								t = e.tail;
								for (var n = null; null !== t; )
									null !== t.alternate && (n = t), (t = t.sibling);
								null === n ? (e.tail = null) : (n.sibling = null);
								break;
							case "collapsed":
								n = e.tail;
								for (var r = null; null !== n; )
									null !== n.alternate && (r = n), (n = n.sibling);
								null === r
									? t || null === e.tail
										? (e.tail = null)
										: (e.tail.sibling = null)
									: (r.sibling = null);
						}
				}
				function Ql(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= 14680064 & a.subtreeFlags),
								(r |= 14680064 & a.flags),
								(a.return = e),
								(a = a.sibling);
					else
						for (a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= a.subtreeFlags),
								(r |= a.flags),
								(a.return = e),
								(a = a.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function Xl(e, t, n) {
					var r = t.pendingProps;
					switch ((to(t), t.tag)) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return Ql(t), null;
						case 1:
						case 17:
							return Ra(t.type) && La(), Ql(t), null;
						case 3:
							return (
								(r = t.stateNode),
								oi(),
								Ca(_a),
								Ca(Ta),
								fi(),
								r.pendingContext &&
									((r.context = r.pendingContext), (r.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(fo(t)
										? (t.flags |= 4)
										: null === e ||
										  (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
										  ((t.flags |= 1024),
										  null !== oo && (is(oo), (oo = null)))),
								Ql(t),
								null
							);
						case 5:
							li(t);
							var a = ri(ni.current);
							if (((n = t.type), null !== e && null != t.stateNode))
								Ll(e, t, n, r),
									e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(o(166));
									return Ql(t), null;
								}
								if (((e = ri(ei.current)), fo(t))) {
									(r = t.stateNode), (n = t.type);
									var i = t.memoizedProps;
									switch (
										((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
									) {
										case "dialog":
											Fr("cancel", r), Fr("close", r);
											break;
										case "iframe":
										case "object":
										case "embed":
											Fr("load", r);
											break;
										case "video":
										case "audio":
											for (a = 0; a < Mr.length; a++) Fr(Mr[a], r);
											break;
										case "source":
											Fr("error", r);
											break;
										case "img":
										case "image":
										case "link":
											Fr("error", r), Fr("load", r);
											break;
										case "details":
											Fr("toggle", r);
											break;
										case "input":
											G(r, i), Fr("invalid", r);
											break;
										case "select":
											(r._wrapperState = { wasMultiple: !!i.multiple }),
												Fr("invalid", r);
											break;
										case "textarea":
											ae(r, i), Fr("invalid", r);
									}
									for (var u in (ge(n, i), (a = null), i))
										if (i.hasOwnProperty(u)) {
											var s = i[u];
											"children" === u
												? "string" === typeof s
													? r.textContent !== s &&
													  (!0 !== i.suppressHydrationWarning &&
															Zr(r.textContent, s, e),
													  (a = ["children", s]))
													: "number" === typeof s &&
													  r.textContent !== "" + s &&
													  (!0 !== i.suppressHydrationWarning &&
															Zr(r.textContent, s, e),
													  (a = ["children", "" + s]))
												: l.hasOwnProperty(u) &&
												  null != s &&
												  "onScroll" === u &&
												  Fr("scroll", r);
										}
									switch (n) {
										case "input":
											Q(r), J(r, i, !0);
											break;
										case "textarea":
											Q(r), ie(r);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" === typeof i.onClick && (r.onclick = Jr);
									}
									(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
								} else {
									(u = 9 === a.nodeType ? a : a.ownerDocument),
										"http://www.w3.org/1999/xhtml" === e && (e = le(n)),
										"http://www.w3.org/1999/xhtml" === e
											? "script" === n
												? (((e = u.createElement("div")).innerHTML =
														"<script></script>"),
												  (e = e.removeChild(e.firstChild)))
												: "string" === typeof r.is
												? (e = u.createElement(n, { is: r.is }))
												: ((e = u.createElement(n)),
												  "select" === n &&
														((u = e),
														r.multiple
															? (u.multiple = !0)
															: r.size && (u.size = r.size)))
											: (e = u.createElementNS(e, n)),
										(e[da] = t),
										(e[pa] = r),
										Rl(e, t),
										(t.stateNode = e);
									e: {
										switch (((u = be(n, r)), n)) {
											case "dialog":
												Fr("cancel", e), Fr("close", e), (a = r);
												break;
											case "iframe":
											case "object":
											case "embed":
												Fr("load", e), (a = r);
												break;
											case "video":
											case "audio":
												for (a = 0; a < Mr.length; a++) Fr(Mr[a], e);
												a = r;
												break;
											case "source":
												Fr("error", e), (a = r);
												break;
											case "img":
											case "image":
											case "link":
												Fr("error", e), Fr("load", e), (a = r);
												break;
											case "details":
												Fr("toggle", e), (a = r);
												break;
											case "input":
												G(e, r), (a = Y(e, r)), Fr("invalid", e);
												break;
											case "option":
											default:
												a = r;
												break;
											case "select":
												(e._wrapperState = { wasMultiple: !!r.multiple }),
													(a = D({}, r, { value: void 0 })),
													Fr("invalid", e);
												break;
											case "textarea":
												ae(e, r), (a = re(e, r)), Fr("invalid", e);
										}
										for (i in (ge(n, a), (s = a)))
											if (s.hasOwnProperty(i)) {
												var c = s[i];
												"style" === i
													? me(e, c)
													: "dangerouslySetInnerHTML" === i
													? null != (c = c ? c.__html : void 0) && fe(e, c)
													: "children" === i
													? "string" === typeof c
														? ("textarea" !== n || "" !== c) && de(e, c)
														: "number" === typeof c && de(e, "" + c)
													: "suppressContentEditableWarning" !== i &&
													  "suppressHydrationWarning" !== i &&
													  "autoFocus" !== i &&
													  (l.hasOwnProperty(i)
															? null != c && "onScroll" === i && Fr("scroll", e)
															: null != c && b(e, i, c, u));
											}
										switch (n) {
											case "input":
												Q(e), J(e, r, !1);
												break;
											case "textarea":
												Q(e), ie(e);
												break;
											case "option":
												null != r.value &&
													e.setAttribute("value", "" + W(r.value));
												break;
											case "select":
												(e.multiple = !!r.multiple),
													null != (i = r.value)
														? ne(e, !!r.multiple, i, !1)
														: null != r.defaultValue &&
														  ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												"function" === typeof a.onClick && (e.onclick = Jr);
										}
										switch (n) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												r = !!r.autoFocus;
												break e;
											case "img":
												r = !0;
												break e;
											default:
												r = !1;
										}
									}
									r && (t.flags |= 4);
								}
								null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							}
							return Ql(t), null;
						case 6:
							if (e && null != t.stateNode) Al(0, t, e.memoizedProps, r);
							else {
								if ("string" !== typeof r && null === t.stateNode)
									throw Error(o(166));
								if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
									if (
										((r = t.stateNode),
										(n = t.memoizedProps),
										(r[da] = t),
										(i = r.nodeValue !== n) && null !== (e = no))
									)
										switch (e.tag) {
											case 3:
												Zr(r.nodeValue, n, 0 !== (1 & e.mode));
												break;
											case 5:
												!0 !== e.memoizedProps.suppressHydrationWarning &&
													Zr(r.nodeValue, n, 0 !== (1 & e.mode));
										}
									i && (t.flags |= 4);
								} else
									((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
										r
									))[da] = t),
										(t.stateNode = r);
							}
							return Ql(t), null;
						case 13:
							if (
								(Ca(ui),
								(r = t.memoizedState),
								null === e ||
									(null !== e.memoizedState &&
										null !== e.memoizedState.dehydrated))
							) {
								if (
									ao &&
									null !== ro &&
									0 !== (1 & t.mode) &&
									0 === (128 & t.flags)
								)
									po(), ho(), (t.flags |= 98560), (i = !1);
								else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
									if (null === e) {
										if (!i) throw Error(o(318));
										if (
											!(i =
												null !== (i = t.memoizedState) ? i.dehydrated : null)
										)
											throw Error(o(317));
										i[da] = t;
									} else
										ho(),
											0 === (128 & t.flags) && (t.memoizedState = null),
											(t.flags |= 4);
									Ql(t), (i = !1);
								} else null !== oo && (is(oo), (oo = null)), (i = !0);
								if (!i) return 65536 & t.flags ? t : null;
							}
							return 0 !== (128 & t.flags)
								? ((t.lanes = n), t)
								: ((r = null !== r) !==
										(null !== e && null !== e.memoizedState) &&
										r &&
										((t.child.flags |= 8192),
										0 !== (1 & t.mode) &&
											(null === e || 0 !== (1 & ui.current)
												? 0 === Au && (Au = 3)
												: vs())),
								  null !== t.updateQueue && (t.flags |= 4),
								  Ql(t),
								  null);
						case 4:
							return (
								oi(), null === e && Br(t.stateNode.containerInfo), Ql(t), null
							);
						case 10:
							return So(t.type._context), Ql(t), null;
						case 19:
							if ((Ca(ui), null === (i = t.memoizedState))) return Ql(t), null;
							if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
								if (r) $l(i, !1);
								else {
									if (0 !== Au || (null !== e && 0 !== (128 & e.flags)))
										for (e = t.child; null !== e; ) {
											if (null !== (u = si(e))) {
												for (
													t.flags |= 128,
														$l(i, !1),
														null !== (r = u.updateQueue) &&
															((t.updateQueue = r), (t.flags |= 4)),
														t.subtreeFlags = 0,
														r = n,
														n = t.child;
													null !== n;

												)
													(e = r),
														((i = n).flags &= 14680066),
														null === (u = i.alternate)
															? ((i.childLanes = 0),
															  (i.lanes = e),
															  (i.child = null),
															  (i.subtreeFlags = 0),
															  (i.memoizedProps = null),
															  (i.memoizedState = null),
															  (i.updateQueue = null),
															  (i.dependencies = null),
															  (i.stateNode = null))
															: ((i.childLanes = u.childLanes),
															  (i.lanes = u.lanes),
															  (i.child = u.child),
															  (i.subtreeFlags = 0),
															  (i.deletions = null),
															  (i.memoizedProps = u.memoizedProps),
															  (i.memoizedState = u.memoizedState),
															  (i.updateQueue = u.updateQueue),
															  (i.type = u.type),
															  (e = u.dependencies),
															  (i.dependencies =
																	null === e
																		? null
																		: {
																				lanes: e.lanes,
																				firstContext: e.firstContext,
																		  })),
														(n = n.sibling);
												return ja(ui, (1 & ui.current) | 2), t.child;
											}
											e = e.sibling;
										}
									null !== i.tail &&
										Ke() > Bu &&
										((t.flags |= 128),
										(r = !0),
										$l(i, !1),
										(t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = si(u))) {
										if (
											((t.flags |= 128),
											(r = !0),
											null !== (n = e.updateQueue) &&
												((t.updateQueue = n), (t.flags |= 4)),
											$l(i, !0),
											null === i.tail &&
												"hidden" === i.tailMode &&
												!u.alternate &&
												!ao)
										)
											return Ql(t), null;
									} else
										2 * Ke() - i.renderingStartTime > Bu &&
											1073741824 !== n &&
											((t.flags |= 128),
											(r = !0),
											$l(i, !1),
											(t.lanes = 4194304));
								i.isBackwards
									? ((u.sibling = t.child), (t.child = u))
									: (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
									  (i.last = u));
							}
							return null !== i.tail
								? ((t = i.tail),
								  (i.rendering = t),
								  (i.tail = t.sibling),
								  (i.renderingStartTime = Ke()),
								  (t.sibling = null),
								  (n = ui.current),
								  ja(ui, r ? (1 & n) | 2 : 1 & n),
								  t)
								: (Ql(t), null);
						case 22:
						case 23:
							return (
								fs(),
								(r = null !== t.memoizedState),
								null !== e &&
									(null !== e.memoizedState) !== r &&
									(t.flags |= 8192),
								r && 0 !== (1 & t.mode)
									? 0 !== (1073741824 & Ru) &&
									  (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
									: Ql(t),
								null
							);
						case 24:
						case 25:
							return null;
					}
					throw Error(o(156, t.tag));
				}
				function ql(e, t) {
					switch ((to(t), t.tag)) {
						case 1:
							return (
								Ra(t.type) && La(),
								65536 & (e = t.flags)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 3:
							return (
								oi(),
								Ca(_a),
								Ca(Ta),
								fi(),
								0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 5:
							return li(t), null;
						case 13:
							if (
								(Ca(ui),
								null !== (e = t.memoizedState) && null !== e.dehydrated)
							) {
								if (null === t.alternate) throw Error(o(340));
								ho();
							}
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 19:
							return Ca(ui), null;
						case 4:
							return oi(), null;
						case 10:
							return So(t.type._context), null;
						case 22:
						case 23:
							return fs(), null;
						default:
							return null;
					}
				}
				(Rl = function (e, t) {
					for (var n = t.child; null !== n; ) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							(n.child.return = n), (n = n.child);
							continue;
						}
						if (n === t) break;
						for (; null === n.sibling; ) {
							if (null === n.return || n.return === t) return;
							n = n.return;
						}
						(n.sibling.return = n.return), (n = n.sibling);
					}
				}),
					(Ll = function (e, t, n, r) {
						var a = e.memoizedProps;
						if (a !== r) {
							(e = t.stateNode), ri(ei.current);
							var o,
								i = null;
							switch (n) {
								case "input":
									(a = Y(e, a)), (r = Y(e, r)), (i = []);
									break;
								case "select":
									(a = D({}, a, { value: void 0 })),
										(r = D({}, r, { value: void 0 })),
										(i = []);
									break;
								case "textarea":
									(a = re(e, a)), (r = re(e, r)), (i = []);
									break;
								default:
									"function" !== typeof a.onClick &&
										"function" === typeof r.onClick &&
										(e.onclick = Jr);
							}
							for (c in (ge(n, r), (n = null), a))
								if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
									if ("style" === c) {
										var u = a[c];
										for (o in u)
											u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
									} else
										"dangerouslySetInnerHTML" !== c &&
											"children" !== c &&
											"suppressContentEditableWarning" !== c &&
											"suppressHydrationWarning" !== c &&
											"autoFocus" !== c &&
											(l.hasOwnProperty(c)
												? i || (i = [])
												: (i = i || []).push(c, null));
							for (c in r) {
								var s = r[c];
								if (
									((u = null != a ? a[c] : void 0),
									r.hasOwnProperty(c) && s !== u && (null != s || null != u))
								)
									if ("style" === c)
										if (u) {
											for (o in u)
												!u.hasOwnProperty(o) ||
													(s && s.hasOwnProperty(o)) ||
													(n || (n = {}), (n[o] = ""));
											for (o in s)
												s.hasOwnProperty(o) &&
													u[o] !== s[o] &&
													(n || (n = {}), (n[o] = s[o]));
										} else n || (i || (i = []), i.push(c, n)), (n = s);
									else
										"dangerouslySetInnerHTML" === c
											? ((s = s ? s.__html : void 0),
											  (u = u ? u.__html : void 0),
											  null != s && u !== s && (i = i || []).push(c, s))
											: "children" === c
											? ("string" !== typeof s && "number" !== typeof s) ||
											  (i = i || []).push(c, "" + s)
											: "suppressContentEditableWarning" !== c &&
											  "suppressHydrationWarning" !== c &&
											  (l.hasOwnProperty(c)
													? (null != s && "onScroll" === c && Fr("scroll", e),
													  i || u === s || (i = []))
													: (i = i || []).push(c, s));
							}
							n && (i = i || []).push("style", n);
							var c = i;
							(t.updateQueue = c) && (t.flags |= 4);
						}
					}),
					(Al = function (e, t, n, r) {
						n !== r && (t.flags |= 4);
					});
				var Yl = !1,
					Gl = !1,
					Kl = "function" === typeof WeakSet ? WeakSet : Set,
					Zl = null;
				function Jl(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" === typeof n)
							try {
								n(null);
							} catch (r) {
								Es(e, t, r);
							}
						else n.current = null;
				}
				function eu(e, t, n) {
					try {
						n();
					} catch (r) {
						Es(e, t, r);
					}
				}
				var tu = !1;
				function nu(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var a = (r = r.next);
						do {
							if ((a.tag & e) === e) {
								var o = a.destroy;
								(a.destroy = void 0), void 0 !== o && eu(t, n, o);
							}
							a = a.next;
						} while (a !== r);
					}
				}
				function ru(e, t) {
					if (
						null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
					) {
						var n = (t = t.next);
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r();
							}
							n = n.next;
						} while (n !== t);
					}
				}
				function au(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
					}
				}
				function ou(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), ou(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag &&
							null !== (t = e.stateNode) &&
							(delete t[da],
							delete t[pa],
							delete t[va],
							delete t[ma],
							delete t[ya]),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				function iu(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag;
				}
				function lu(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || iu(e.return)) return null;
							e = e.return;
						}
						for (
							e.sibling.return = e.return, e = e.sibling;
							5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

						) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function uu(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t
								? 8 === n.nodeType
									? n.parentNode.insertBefore(e, t)
									: n.insertBefore(e, t)
								: (8 === n.nodeType
										? (t = n.parentNode).insertBefore(e, n)
										: (t = n).appendChild(e),
								  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
										null !== t.onclick ||
										(t.onclick = Jr));
					else if (4 !== r && null !== (e = e.child))
						for (uu(e, t, n), e = e.sibling; null !== e; )
							uu(e, t, n), (e = e.sibling);
				}
				function su(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (su(e, t, n), e = e.sibling; null !== e; )
							su(e, t, n), (e = e.sibling);
				}
				var cu = null,
					fu = !1;
				function du(e, t, n) {
					for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
				}
				function pu(e, t, n) {
					if (ot && "function" === typeof ot.onCommitFiberUnmount)
						try {
							ot.onCommitFiberUnmount(at, n);
						} catch (l) {}
					switch (n.tag) {
						case 5:
							Gl || Jl(n, t);
						case 6:
							var r = cu,
								a = fu;
							(cu = null),
								du(e, t, n),
								(fu = a),
								null !== (cu = r) &&
									(fu
										? ((e = cu),
										  (n = n.stateNode),
										  8 === e.nodeType
												? e.parentNode.removeChild(n)
												: e.removeChild(n))
										: cu.removeChild(n.stateNode));
							break;
						case 18:
							null !== cu &&
								(fu
									? ((e = cu),
									  (n = n.stateNode),
									  8 === e.nodeType
											? ua(e.parentNode, n)
											: 1 === e.nodeType && ua(e, n),
									  Bt(e))
									: ua(cu, n.stateNode));
							break;
						case 4:
							(r = cu),
								(a = fu),
								(cu = n.stateNode.containerInfo),
								(fu = !0),
								du(e, t, n),
								(cu = r),
								(fu = a);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (
								!Gl &&
								null !== (r = n.updateQueue) &&
								null !== (r = r.lastEffect)
							) {
								a = r = r.next;
								do {
									var o = a,
										i = o.destroy;
									(o = o.tag),
										void 0 !== i &&
											(0 !== (2 & o) || 0 !== (4 & o)) &&
											eu(n, t, i),
										(a = a.next);
								} while (a !== r);
							}
							du(e, t, n);
							break;
						case 1:
							if (
								!Gl &&
								(Jl(n, t),
								"function" === typeof (r = n.stateNode).componentWillUnmount)
							)
								try {
									(r.props = n.memoizedProps),
										(r.state = n.memoizedState),
										r.componentWillUnmount();
								} catch (l) {
									Es(n, t, l);
								}
							du(e, t, n);
							break;
						case 21:
							du(e, t, n);
							break;
						case 22:
							1 & n.mode
								? ((Gl = (r = Gl) || null !== n.memoizedState),
								  du(e, t, n),
								  (Gl = r))
								: du(e, t, n);
							break;
						default:
							du(e, t, n);
					}
				}
				function hu(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Kl()),
							t.forEach(function (t) {
								var r = Ts.bind(null, e, t);
								n.has(t) || (n.add(t), t.then(r, r));
							});
					}
				}
				function vu(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var a = n[r];
							try {
								var i = e,
									l = t,
									u = l;
								e: for (; null !== u; ) {
									switch (u.tag) {
										case 5:
											(cu = u.stateNode), (fu = !1);
											break e;
										case 3:
										case 4:
											(cu = u.stateNode.containerInfo), (fu = !0);
											break e;
									}
									u = u.return;
								}
								if (null === cu) throw Error(o(160));
								pu(i, l, a), (cu = null), (fu = !1);
								var s = a.alternate;
								null !== s && (s.return = null), (a.return = null);
							} catch (c) {
								Es(a, t, c);
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
				}
				function mu(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if ((vu(t, e), yu(e), 4 & r)) {
								try {
									nu(3, e, e.return), ru(3, e);
								} catch (m) {
									Es(e, e.return, m);
								}
								try {
									nu(5, e, e.return);
								} catch (m) {
									Es(e, e.return, m);
								}
							}
							break;
						case 1:
							vu(t, e), yu(e), 512 & r && null !== n && Jl(n, n.return);
							break;
						case 5:
							if (
								(vu(t, e),
								yu(e),
								512 & r && null !== n && Jl(n, n.return),
								32 & e.flags)
							) {
								var a = e.stateNode;
								try {
									de(a, "");
								} catch (m) {
									Es(e, e.return, m);
								}
							}
							if (4 & r && null != (a = e.stateNode)) {
								var i = e.memoizedProps,
									l = null !== n ? n.memoizedProps : i,
									u = e.type,
									s = e.updateQueue;
								if (((e.updateQueue = null), null !== s))
									try {
										"input" === u &&
											"radio" === i.type &&
											null != i.name &&
											K(a, i),
											be(u, l);
										var c = be(u, i);
										for (l = 0; l < s.length; l += 2) {
											var f = s[l],
												d = s[l + 1];
											"style" === f
												? me(a, d)
												: "dangerouslySetInnerHTML" === f
												? fe(a, d)
												: "children" === f
												? de(a, d)
												: b(a, f, d, c);
										}
										switch (u) {
											case "input":
												Z(a, i);
												break;
											case "textarea":
												oe(a, i);
												break;
											case "select":
												var p = a._wrapperState.wasMultiple;
												a._wrapperState.wasMultiple = !!i.multiple;
												var h = i.value;
												null != h
													? ne(a, !!i.multiple, h, !1)
													: p !== !!i.multiple &&
													  (null != i.defaultValue
															? ne(a, !!i.multiple, i.defaultValue, !0)
															: ne(a, !!i.multiple, i.multiple ? [] : "", !1));
										}
										a[pa] = i;
									} catch (m) {
										Es(e, e.return, m);
									}
							}
							break;
						case 6:
							if ((vu(t, e), yu(e), 4 & r)) {
								if (null === e.stateNode) throw Error(o(162));
								(a = e.stateNode), (i = e.memoizedProps);
								try {
									a.nodeValue = i;
								} catch (m) {
									Es(e, e.return, m);
								}
							}
							break;
						case 3:
							if (
								(vu(t, e),
								yu(e),
								4 & r && null !== n && n.memoizedState.isDehydrated)
							)
								try {
									Bt(t.containerInfo);
								} catch (m) {
									Es(e, e.return, m);
								}
							break;
						case 4:
						default:
							vu(t, e), yu(e);
							break;
						case 13:
							vu(t, e),
								yu(e),
								8192 & (a = e.child).flags &&
									((i = null !== a.memoizedState),
									(a.stateNode.isHidden = i),
									!i ||
										(null !== a.alternate &&
											null !== a.alternate.memoizedState) ||
										(Uu = Ke())),
								4 & r && hu(e);
							break;
						case 22:
							if (
								((f = null !== n && null !== n.memoizedState),
								1 & e.mode
									? ((Gl = (c = Gl) || f), vu(t, e), (Gl = c))
									: vu(t, e),
								yu(e),
								8192 & r)
							) {
								if (
									((c = null !== e.memoizedState),
									(e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
								)
									for (Zl = e, f = e.child; null !== f; ) {
										for (d = Zl = f; null !== Zl; ) {
											switch (((h = (p = Zl).child), p.tag)) {
												case 0:
												case 11:
												case 14:
												case 15:
													nu(4, p, p.return);
													break;
												case 1:
													Jl(p, p.return);
													var v = p.stateNode;
													if ("function" === typeof v.componentWillUnmount) {
														(r = p), (n = p.return);
														try {
															(t = r),
																(v.props = t.memoizedProps),
																(v.state = t.memoizedState),
																v.componentWillUnmount();
														} catch (m) {
															Es(r, n, m);
														}
													}
													break;
												case 5:
													Jl(p, p.return);
													break;
												case 22:
													if (null !== p.memoizedState) {
														wu(d);
														continue;
													}
											}
											null !== h ? ((h.return = p), (Zl = h)) : wu(d);
										}
										f = f.sibling;
									}
								e: for (f = null, d = e; ; ) {
									if (5 === d.tag) {
										if (null === f) {
											f = d;
											try {
												(a = d.stateNode),
													c
														? "function" === typeof (i = a.style).setProperty
															? i.setProperty("display", "none", "important")
															: (i.display = "none")
														: ((u = d.stateNode),
														  (l =
																void 0 !== (s = d.memoizedProps.style) &&
																null !== s &&
																s.hasOwnProperty("display")
																	? s.display
																	: null),
														  (u.style.display = ve("display", l)));
											} catch (m) {
												Es(e, e.return, m);
											}
										}
									} else if (6 === d.tag) {
										if (null === f)
											try {
												d.stateNode.nodeValue = c ? "" : d.memoizedProps;
											} catch (m) {
												Es(e, e.return, m);
											}
									} else if (
										((22 !== d.tag && 23 !== d.tag) ||
											null === d.memoizedState ||
											d === e) &&
										null !== d.child
									) {
										(d.child.return = d), (d = d.child);
										continue;
									}
									if (d === e) break;
									for (; null === d.sibling; ) {
										if (null === d.return || d.return === e) break e;
										f === d && (f = null), (d = d.return);
									}
									f === d && (f = null),
										(d.sibling.return = d.return),
										(d = d.sibling);
								}
							}
							break;
						case 19:
							vu(t, e), yu(e), 4 & r && hu(e);
						case 21:
					}
				}
				function yu(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n; ) {
									if (iu(n)) {
										var r = n;
										break e;
									}
									n = n.return;
								}
								throw Error(o(160));
							}
							switch (r.tag) {
								case 5:
									var a = r.stateNode;
									32 & r.flags && (de(a, ""), (r.flags &= -33)),
										su(e, lu(e), a);
									break;
								case 3:
								case 4:
									var i = r.stateNode.containerInfo;
									uu(e, lu(e), i);
									break;
								default:
									throw Error(o(161));
							}
						} catch (l) {
							Es(e, e.return, l);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function gu(e, t, n) {
					(Zl = e), bu(e, t, n);
				}
				function bu(e, t, n) {
					for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
						var a = Zl,
							o = a.child;
						if (22 === a.tag && r) {
							var i = null !== a.memoizedState || Yl;
							if (!i) {
								var l = a.alternate,
									u = (null !== l && null !== l.memoizedState) || Gl;
								l = Yl;
								var s = Gl;
								if (((Yl = i), (Gl = u) && !s))
									for (Zl = a; null !== Zl; )
										(u = (i = Zl).child),
											22 === i.tag && null !== i.memoizedState
												? ku(a)
												: null !== u
												? ((u.return = i), (Zl = u))
												: ku(a);
								for (; null !== o; ) (Zl = o), bu(o, t, n), (o = o.sibling);
								(Zl = a), (Yl = l), (Gl = s);
							}
							xu(e);
						} else
							0 !== (8772 & a.subtreeFlags) && null !== o
								? ((o.return = a), (Zl = o))
								: xu(e);
					}
				}
				function xu(e) {
					for (; null !== Zl; ) {
						var t = Zl;
						if (0 !== (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 !== (8772 & t.flags))
									switch (t.tag) {
										case 0:
										case 11:
										case 15:
											Gl || ru(5, t);
											break;
										case 1:
											var r = t.stateNode;
											if (4 & t.flags && !Gl)
												if (null === n) r.componentDidMount();
												else {
													var a =
														t.elementType === t.type
															? n.memoizedProps
															: yo(t.type, n.memoizedProps);
													r.componentDidUpdate(
														a,
														n.memoizedState,
														r.__reactInternalSnapshotBeforeUpdate
													);
												}
											var i = t.updateQueue;
											null !== i && Fo(t, i, r);
											break;
										case 3:
											var l = t.updateQueue;
											if (null !== l) {
												if (((n = null), null !== t.child))
													switch (t.child.tag) {
														case 5:
														case 1:
															n = t.child.stateNode;
													}
												Fo(t, l, n);
											}
											break;
										case 5:
											var u = t.stateNode;
											if (null === n && 4 & t.flags) {
												n = u;
												var s = t.memoizedProps;
												switch (t.type) {
													case "button":
													case "input":
													case "select":
													case "textarea":
														s.autoFocus && n.focus();
														break;
													case "img":
														s.src && (n.src = s.src);
												}
											}
											break;
										case 6:
										case 4:
										case 12:
										case 19:
										case 17:
										case 21:
										case 22:
										case 23:
										case 25:
											break;
										case 13:
											if (null === t.memoizedState) {
												var c = t.alternate;
												if (null !== c) {
													var f = c.memoizedState;
													if (null !== f) {
														var d = f.dehydrated;
														null !== d && Bt(d);
													}
												}
											}
											break;
										default:
											throw Error(o(163));
									}
								Gl || (512 & t.flags && au(t));
							} catch (p) {
								Es(t, t.return, p);
							}
						}
						if (t === e) {
							Zl = null;
							break;
						}
						if (null !== (n = t.sibling)) {
							(n.return = t.return), (Zl = n);
							break;
						}
						Zl = t.return;
					}
				}
				function wu(e) {
					for (; null !== Zl; ) {
						var t = Zl;
						if (t === e) {
							Zl = null;
							break;
						}
						var n = t.sibling;
						if (null !== n) {
							(n.return = t.return), (Zl = n);
							break;
						}
						Zl = t.return;
					}
				}
				function ku(e) {
					for (; null !== Zl; ) {
						var t = Zl;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										ru(4, t);
									} catch (u) {
										Es(t, n, u);
									}
									break;
								case 1:
									var r = t.stateNode;
									if ("function" === typeof r.componentDidMount) {
										var a = t.return;
										try {
											r.componentDidMount();
										} catch (u) {
											Es(t, a, u);
										}
									}
									var o = t.return;
									try {
										au(t);
									} catch (u) {
										Es(t, o, u);
									}
									break;
								case 5:
									var i = t.return;
									try {
										au(t);
									} catch (u) {
										Es(t, i, u);
									}
							}
						} catch (u) {
							Es(t, t.return, u);
						}
						if (t === e) {
							Zl = null;
							break;
						}
						var l = t.sibling;
						if (null !== l) {
							(l.return = t.return), (Zl = l);
							break;
						}
						Zl = t.return;
					}
				}
				var Su,
					Eu = Math.ceil,
					Cu = x.ReactCurrentDispatcher,
					ju = x.ReactCurrentOwner,
					Pu = x.ReactCurrentBatchConfig,
					Tu = 0,
					_u = null,
					Nu = null,
					Ou = 0,
					Ru = 0,
					Lu = Ea(0),
					Au = 0,
					Mu = null,
					zu = 0,
					Du = 0,
					Vu = 0,
					Fu = null,
					Iu = null,
					Uu = 0,
					Bu = 1 / 0,
					Hu = null,
					Wu = !1,
					$u = null,
					Qu = null,
					Xu = !1,
					qu = null,
					Yu = 0,
					Gu = 0,
					Ku = null,
					Zu = -1,
					Ju = 0;
				function es() {
					return 0 !== (6 & Tu) ? Ke() : -1 !== Zu ? Zu : (Zu = Ke());
				}
				function ts(e) {
					return 0 === (1 & e.mode)
						? 1
						: 0 !== (2 & Tu) && 0 !== Ou
						? Ou & -Ou
						: null !== mo.transition
						? (0 === Ju && (Ju = vt()), Ju)
						: 0 !== (e = bt)
						? e
						: (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
				}
				function ns(e, t, n, r) {
					if (50 < Gu) throw ((Gu = 0), (Ku = null), Error(o(185)));
					yt(e, n, r),
						(0 !== (2 & Tu) && e === _u) ||
							(e === _u && (0 === (2 & Tu) && (Du |= n), 4 === Au && ls(e, Ou)),
							rs(e, r),
							1 === n &&
								0 === Tu &&
								0 === (1 & t.mode) &&
								((Bu = Ke() + 500), Fa && Ba()));
				}
				function rs(e, t) {
					var n = e.callbackNode;
					!(function (e, t) {
						for (
							var n = e.suspendedLanes,
								r = e.pingedLanes,
								a = e.expirationTimes,
								o = e.pendingLanes;
							0 < o;

						) {
							var i = 31 - it(o),
								l = 1 << i,
								u = a[i];
							-1 === u
								? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
								: u <= t && (e.expiredLanes |= l),
								(o &= ~l);
						}
					})(e, t);
					var r = dt(e, e === _u ? Ou : 0);
					if (0 === r)
						null !== n && qe(n),
							(e.callbackNode = null),
							(e.callbackPriority = 0);
					else if (((t = r & -r), e.callbackPriority !== t)) {
						if ((null != n && qe(n), 1 === t))
							0 === e.tag
								? (function (e) {
										(Fa = !0), Ua(e);
								  })(us.bind(null, e))
								: Ua(us.bind(null, e)),
								ia(function () {
									0 === (6 & Tu) && Ba();
								}),
								(n = null);
						else {
							switch (xt(r)) {
								case 1:
									n = Je;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt;
							}
							n = _s(n, as.bind(null, e));
						}
						(e.callbackPriority = t), (e.callbackNode = n);
					}
				}
				function as(e, t) {
					if (((Zu = -1), (Ju = 0), 0 !== (6 & Tu))) throw Error(o(327));
					var n = e.callbackNode;
					if (ks() && e.callbackNode !== n) return null;
					var r = dt(e, e === _u ? Ou : 0);
					if (0 === r) return null;
					if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ms(e, r);
					else {
						t = r;
						var a = Tu;
						Tu |= 2;
						var i = hs();
						for (
							(_u === e && Ou === t) ||
							((Hu = null), (Bu = Ke() + 500), ds(e, t));
							;

						)
							try {
								gs();
								break;
							} catch (u) {
								ps(e, u);
							}
						ko(),
							(Cu.current = i),
							(Tu = a),
							null !== Nu ? (t = 0) : ((_u = null), (Ou = 0), (t = Au));
					}
					if (0 !== t) {
						if (
							(2 === t && 0 !== (a = ht(e)) && ((r = a), (t = os(e, a))),
							1 === t)
						)
							throw ((n = Mu), ds(e, 0), ls(e, r), rs(e, Ke()), n);
						if (6 === t) ls(e, r);
						else {
							if (
								((a = e.current.alternate),
								0 === (30 & r) &&
									!(function (e) {
										for (var t = e; ; ) {
											if (16384 & t.flags) {
												var n = t.updateQueue;
												if (null !== n && null !== (n = n.stores))
													for (var r = 0; r < n.length; r++) {
														var a = n[r],
															o = a.getSnapshot;
														a = a.value;
														try {
															if (!lr(o(), a)) return !1;
														} catch (l) {
															return !1;
														}
													}
											}
											if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
												(n.return = t), (t = n);
											else {
												if (t === e) break;
												for (; null === t.sibling; ) {
													if (null === t.return || t.return === e) return !0;
													t = t.return;
												}
												(t.sibling.return = t.return), (t = t.sibling);
											}
										}
										return !0;
									})(a) &&
									(2 === (t = ms(e, r)) &&
										0 !== (i = ht(e)) &&
										((r = i), (t = os(e, i))),
									1 === t))
							)
								throw ((n = Mu), ds(e, 0), ls(e, r), rs(e, Ke()), n);
							switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
								case 0:
								case 1:
									throw Error(o(345));
								case 2:
								case 5:
									ws(e, Iu, Hu);
									break;
								case 3:
									if (
										(ls(e, r),
										(130023424 & r) === r && 10 < (t = Uu + 500 - Ke()))
									) {
										if (0 !== dt(e, 0)) break;
										if (((a = e.suspendedLanes) & r) !== r) {
											es(), (e.pingedLanes |= e.suspendedLanes & a);
											break;
										}
										e.timeoutHandle = ra(ws.bind(null, e, Iu, Hu), t);
										break;
									}
									ws(e, Iu, Hu);
									break;
								case 4:
									if ((ls(e, r), (4194240 & r) === r)) break;
									for (t = e.eventTimes, a = -1; 0 < r; ) {
										var l = 31 - it(r);
										(i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
									}
									if (
										((r = a),
										10 <
											(r =
												(120 > (r = Ke() - r)
													? 120
													: 480 > r
													? 480
													: 1080 > r
													? 1080
													: 1920 > r
													? 1920
													: 3e3 > r
													? 3e3
													: 4320 > r
													? 4320
													: 1960 * Eu(r / 1960)) - r))
									) {
										e.timeoutHandle = ra(ws.bind(null, e, Iu, Hu), r);
										break;
									}
									ws(e, Iu, Hu);
									break;
								default:
									throw Error(o(329));
							}
						}
					}
					return rs(e, Ke()), e.callbackNode === n ? as.bind(null, e) : null;
				}
				function os(e, t) {
					var n = Fu;
					return (
						e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256),
						2 !== (e = ms(e, t)) && ((t = Iu), (Iu = n), null !== t && is(t)),
						e
					);
				}
				function is(e) {
					null === Iu ? (Iu = e) : Iu.push.apply(Iu, e);
				}
				function ls(e, t) {
					for (
						t &= ~Vu,
							t &= ~Du,
							e.suspendedLanes |= t,
							e.pingedLanes &= ~t,
							e = e.expirationTimes;
						0 < t;

					) {
						var n = 31 - it(t),
							r = 1 << n;
						(e[n] = -1), (t &= ~r);
					}
				}
				function us(e) {
					if (0 !== (6 & Tu)) throw Error(o(327));
					ks();
					var t = dt(e, 0);
					if (0 === (1 & t)) return rs(e, Ke()), null;
					var n = ms(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = ht(e);
						0 !== r && ((t = r), (n = os(e, r)));
					}
					if (1 === n) throw ((n = Mu), ds(e, 0), ls(e, t), rs(e, Ke()), n);
					if (6 === n) throw Error(o(345));
					return (
						(e.finishedWork = e.current.alternate),
						(e.finishedLanes = t),
						ws(e, Iu, Hu),
						rs(e, Ke()),
						null
					);
				}
				function ss(e, t) {
					var n = Tu;
					Tu |= 1;
					try {
						return e(t);
					} finally {
						0 === (Tu = n) && ((Bu = Ke() + 500), Fa && Ba());
					}
				}
				function cs(e) {
					null !== qu && 0 === qu.tag && 0 === (6 & Tu) && ks();
					var t = Tu;
					Tu |= 1;
					var n = Pu.transition,
						r = bt;
					try {
						if (((Pu.transition = null), (bt = 1), e)) return e();
					} finally {
						(bt = r), (Pu.transition = n), 0 === (6 & (Tu = t)) && Ba();
					}
				}
				function fs() {
					(Ru = Lu.current), Ca(Lu);
				}
				function ds(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Nu))
						for (n = Nu.return; null !== n; ) {
							var r = n;
							switch ((to(r), r.tag)) {
								case 1:
									null !== (r = r.type.childContextTypes) &&
										void 0 !== r &&
										La();
									break;
								case 3:
									oi(), Ca(_a), Ca(Ta), fi();
									break;
								case 5:
									li(r);
									break;
								case 4:
									oi();
									break;
								case 13:
								case 19:
									Ca(ui);
									break;
								case 10:
									So(r.type._context);
									break;
								case 22:
								case 23:
									fs();
							}
							n = n.return;
						}
					if (
						((_u = e),
						(Nu = e = Ls(e.current, null)),
						(Ou = Ru = t),
						(Au = 0),
						(Mu = null),
						(Vu = Du = zu = 0),
						(Iu = Fu = null),
						null !== Po)
					) {
						for (t = 0; t < Po.length; t++)
							if (null !== (r = (n = Po[t]).interleaved)) {
								n.interleaved = null;
								var a = r.next,
									o = n.pending;
								if (null !== o) {
									var i = o.next;
									(o.next = a), (r.next = i);
								}
								n.pending = r;
							}
						Po = null;
					}
					return e;
				}
				function ps(e, t) {
					for (;;) {
						var n = Nu;
						try {
							if ((ko(), (di.current = il), gi)) {
								for (var r = vi.memoizedState; null !== r; ) {
									var a = r.queue;
									null !== a && (a.pending = null), (r = r.next);
								}
								gi = !1;
							}
							if (
								((hi = 0),
								(yi = mi = vi = null),
								(bi = !1),
								(xi = 0),
								(ju.current = null),
								null === n || null === n.return)
							) {
								(Au = 1), (Mu = t), (Nu = null);
								break;
							}
							e: {
								var i = e,
									l = n.return,
									u = n,
									s = t;
								if (
									((t = Ou),
									(u.flags |= 32768),
									null !== s &&
										"object" === typeof s &&
										"function" === typeof s.then)
								) {
									var c = s,
										f = u,
										d = f.tag;
									if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
										var p = f.alternate;
										p
											? ((f.updateQueue = p.updateQueue),
											  (f.memoizedState = p.memoizedState),
											  (f.lanes = p.lanes))
											: ((f.updateQueue = null), (f.memoizedState = null));
									}
									var h = yl(l);
									if (null !== h) {
										(h.flags &= -257),
											gl(h, l, u, 0, t),
											1 & h.mode && ml(i, c, t),
											(s = c);
										var v = (t = h).updateQueue;
										if (null === v) {
											var m = new Set();
											m.add(s), (t.updateQueue = m);
										} else v.add(s);
										break e;
									}
									if (0 === (1 & t)) {
										ml(i, c, t), vs();
										break e;
									}
									s = Error(o(426));
								} else if (ao && 1 & u.mode) {
									var y = yl(l);
									if (null !== y) {
										0 === (65536 & y.flags) && (y.flags |= 256),
											gl(y, l, u, 0, t),
											vo(cl(s, u));
										break e;
									}
								}
								(i = s = cl(s, u)),
									4 !== Au && (Au = 2),
									null === Fu ? (Fu = [i]) : Fu.push(i),
									(i = l);
								do {
									switch (i.tag) {
										case 3:
											(i.flags |= 65536),
												(t &= -t),
												(i.lanes |= t),
												Do(i, hl(0, s, t));
											break e;
										case 1:
											u = s;
											var g = i.type,
												b = i.stateNode;
											if (
												0 === (128 & i.flags) &&
												("function" === typeof g.getDerivedStateFromError ||
													(null !== b &&
														"function" === typeof b.componentDidCatch &&
														(null === Qu || !Qu.has(b))))
											) {
												(i.flags |= 65536),
													(t &= -t),
													(i.lanes |= t),
													Do(i, vl(i, u, t));
												break e;
											}
									}
									i = i.return;
								} while (null !== i);
							}
							xs(n);
						} catch (x) {
							(t = x), Nu === n && null !== n && (Nu = n = n.return);
							continue;
						}
						break;
					}
				}
				function hs() {
					var e = Cu.current;
					return (Cu.current = il), null === e ? il : e;
				}
				function vs() {
					(0 !== Au && 3 !== Au && 2 !== Au) || (Au = 4),
						null === _u ||
							(0 === (268435455 & zu) && 0 === (268435455 & Du)) ||
							ls(_u, Ou);
				}
				function ms(e, t) {
					var n = Tu;
					Tu |= 2;
					var r = hs();
					for ((_u === e && Ou === t) || ((Hu = null), ds(e, t)); ; )
						try {
							ys();
							break;
						} catch (a) {
							ps(e, a);
						}
					if ((ko(), (Tu = n), (Cu.current = r), null !== Nu))
						throw Error(o(261));
					return (_u = null), (Ou = 0), Au;
				}
				function ys() {
					for (; null !== Nu; ) bs(Nu);
				}
				function gs() {
					for (; null !== Nu && !Ye(); ) bs(Nu);
				}
				function bs(e) {
					var t = Su(e.alternate, e, Ru);
					(e.memoizedProps = e.pendingProps),
						null === t ? xs(e) : (Nu = t),
						(ju.current = null);
				}
				function xs(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (((e = t.return), 0 === (32768 & t.flags))) {
							if (null !== (n = Xl(n, t, Ru))) return void (Nu = n);
						} else {
							if (null !== (n = ql(n, t)))
								return (n.flags &= 32767), void (Nu = n);
							if (null === e) return (Au = 6), void (Nu = null);
							(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
						}
						if (null !== (t = t.sibling)) return void (Nu = t);
						Nu = t = e;
					} while (null !== t);
					0 === Au && (Au = 5);
				}
				function ws(e, t, n) {
					var r = bt,
						a = Pu.transition;
					try {
						(Pu.transition = null),
							(bt = 1),
							(function (e, t, n, r) {
								do {
									ks();
								} while (null !== qu);
								if (0 !== (6 & Tu)) throw Error(o(327));
								n = e.finishedWork;
								var a = e.finishedLanes;
								if (null === n) return null;
								if (
									((e.finishedWork = null),
									(e.finishedLanes = 0),
									n === e.current)
								)
									throw Error(o(177));
								(e.callbackNode = null), (e.callbackPriority = 0);
								var i = n.lanes | n.childLanes;
								if (
									((function (e, t) {
										var n = e.pendingLanes & ~t;
										(e.pendingLanes = t),
											(e.suspendedLanes = 0),
											(e.pingedLanes = 0),
											(e.expiredLanes &= t),
											(e.mutableReadLanes &= t),
											(e.entangledLanes &= t),
											(t = e.entanglements);
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n; ) {
											var a = 31 - it(n),
												o = 1 << a;
											(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
										}
									})(e, i),
									e === _u && ((Nu = _u = null), (Ou = 0)),
									(0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
										Xu ||
										((Xu = !0),
										_s(tt, function () {
											return ks(), null;
										})),
									(i = 0 !== (15990 & n.flags)),
									0 !== (15990 & n.subtreeFlags) || i)
								) {
									(i = Pu.transition), (Pu.transition = null);
									var l = bt;
									bt = 1;
									var u = Tu;
									(Tu |= 4),
										(ju.current = null),
										(function (e, t) {
											if (((ea = Wt), pr((e = dr())))) {
												if ("selectionStart" in e)
													var n = {
														start: e.selectionStart,
														end: e.selectionEnd,
													};
												else
													e: {
														var r =
															(n =
																((n = e.ownerDocument) && n.defaultView) ||
																window).getSelection && n.getSelection();
														if (r && 0 !== r.rangeCount) {
															n = r.anchorNode;
															var a = r.anchorOffset,
																i = r.focusNode;
															r = r.focusOffset;
															try {
																n.nodeType, i.nodeType;
															} catch (w) {
																n = null;
																break e;
															}
															var l = 0,
																u = -1,
																s = -1,
																c = 0,
																f = 0,
																d = e,
																p = null;
															t: for (;;) {
																for (
																	var h;
																	d !== n ||
																		(0 !== a && 3 !== d.nodeType) ||
																		(u = l + a),
																		d !== i ||
																			(0 !== r && 3 !== d.nodeType) ||
																			(s = l + r),
																		3 === d.nodeType &&
																			(l += d.nodeValue.length),
																		null !== (h = d.firstChild);

																)
																	(p = d), (d = h);
																for (;;) {
																	if (d === e) break t;
																	if (
																		(p === n && ++c === a && (u = l),
																		p === i && ++f === r && (s = l),
																		null !== (h = d.nextSibling))
																	)
																		break;
																	p = (d = p).parentNode;
																}
																d = h;
															}
															n =
																-1 === u || -1 === s
																	? null
																	: { start: u, end: s };
														} else n = null;
													}
												n = n || { start: 0, end: 0 };
											} else n = null;
											for (
												ta = { focusedElem: e, selectionRange: n },
													Wt = !1,
													Zl = t;
												null !== Zl;

											)
												if (
													((e = (t = Zl).child),
													0 !== (1028 & t.subtreeFlags) && null !== e)
												)
													(e.return = t), (Zl = e);
												else
													for (; null !== Zl; ) {
														t = Zl;
														try {
															var v = t.alternate;
															if (0 !== (1024 & t.flags))
																switch (t.tag) {
																	case 0:
																	case 11:
																	case 15:
																	case 5:
																	case 6:
																	case 4:
																	case 17:
																		break;
																	case 1:
																		if (null !== v) {
																			var m = v.memoizedProps,
																				y = v.memoizedState,
																				g = t.stateNode,
																				b = g.getSnapshotBeforeUpdate(
																					t.elementType === t.type
																						? m
																						: yo(t.type, m),
																					y
																				);
																			g.__reactInternalSnapshotBeforeUpdate = b;
																		}
																		break;
																	case 3:
																		var x = t.stateNode.containerInfo;
																		1 === x.nodeType
																			? (x.textContent = "")
																			: 9 === x.nodeType &&
																			  x.documentElement &&
																			  x.removeChild(x.documentElement);
																		break;
																	default:
																		throw Error(o(163));
																}
														} catch (w) {
															Es(t, t.return, w);
														}
														if (null !== (e = t.sibling)) {
															(e.return = t.return), (Zl = e);
															break;
														}
														Zl = t.return;
													}
											(v = tu), (tu = !1);
										})(e, n),
										mu(n, e),
										hr(ta),
										(Wt = !!ea),
										(ta = ea = null),
										(e.current = n),
										gu(n, e, a),
										Ge(),
										(Tu = u),
										(bt = l),
										(Pu.transition = i);
								} else e.current = n;
								if (
									(Xu && ((Xu = !1), (qu = e), (Yu = a)),
									0 === (i = e.pendingLanes) && (Qu = null),
									(function (e) {
										if (ot && "function" === typeof ot.onCommitFiberRoot)
											try {
												ot.onCommitFiberRoot(
													at,
													e,
													void 0,
													128 === (128 & e.current.flags)
												);
											} catch (t) {}
									})(n.stateNode),
									rs(e, Ke()),
									null !== t)
								)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++)
										r((a = t[n]).value, {
											componentStack: a.stack,
											digest: a.digest,
										});
								if (Wu) throw ((Wu = !1), (e = $u), ($u = null), e);
								0 !== (1 & Yu) && 0 !== e.tag && ks(),
									0 !== (1 & (i = e.pendingLanes))
										? e === Ku
											? Gu++
											: ((Gu = 0), (Ku = e))
										: (Gu = 0),
									Ba();
							})(e, t, n, r);
					} finally {
						(Pu.transition = a), (bt = r);
					}
					return null;
				}
				function ks() {
					if (null !== qu) {
						var e = xt(Yu),
							t = Pu.transition,
							n = bt;
						try {
							if (((Pu.transition = null), (bt = 16 > e ? 16 : e), null === qu))
								var r = !1;
							else {
								if (((e = qu), (qu = null), (Yu = 0), 0 !== (6 & Tu)))
									throw Error(o(331));
								var a = Tu;
								for (Tu |= 4, Zl = e.current; null !== Zl; ) {
									var i = Zl,
										l = i.child;
									if (0 !== (16 & Zl.flags)) {
										var u = i.deletions;
										if (null !== u) {
											for (var s = 0; s < u.length; s++) {
												var c = u[s];
												for (Zl = c; null !== Zl; ) {
													var f = Zl;
													switch (f.tag) {
														case 0:
														case 11:
														case 15:
															nu(8, f, i);
													}
													var d = f.child;
													if (null !== d) (d.return = f), (Zl = d);
													else
														for (; null !== Zl; ) {
															var p = (f = Zl).sibling,
																h = f.return;
															if ((ou(f), f === c)) {
																Zl = null;
																break;
															}
															if (null !== p) {
																(p.return = h), (Zl = p);
																break;
															}
															Zl = h;
														}
												}
											}
											var v = i.alternate;
											if (null !== v) {
												var m = v.child;
												if (null !== m) {
													v.child = null;
													do {
														var y = m.sibling;
														(m.sibling = null), (m = y);
													} while (null !== m);
												}
											}
											Zl = i;
										}
									}
									if (0 !== (2064 & i.subtreeFlags) && null !== l)
										(l.return = i), (Zl = l);
									else
										for (; null !== Zl; ) {
											if (0 !== (2048 & (i = Zl).flags))
												switch (i.tag) {
													case 0:
													case 11:
													case 15:
														nu(9, i, i.return);
												}
											var g = i.sibling;
											if (null !== g) {
												(g.return = i.return), (Zl = g);
												break;
											}
											Zl = i.return;
										}
								}
								var b = e.current;
								for (Zl = b; null !== Zl; ) {
									var x = (l = Zl).child;
									if (0 !== (2064 & l.subtreeFlags) && null !== x)
										(x.return = l), (Zl = x);
									else
										for (l = b; null !== Zl; ) {
											if (0 !== (2048 & (u = Zl).flags))
												try {
													switch (u.tag) {
														case 0:
														case 11:
														case 15:
															ru(9, u);
													}
												} catch (k) {
													Es(u, u.return, k);
												}
											if (u === l) {
												Zl = null;
												break;
											}
											var w = u.sibling;
											if (null !== w) {
												(w.return = u.return), (Zl = w);
												break;
											}
											Zl = u.return;
										}
								}
								if (
									((Tu = a),
									Ba(),
									ot && "function" === typeof ot.onPostCommitFiberRoot)
								)
									try {
										ot.onPostCommitFiberRoot(at, e);
									} catch (k) {}
								r = !0;
							}
							return r;
						} finally {
							(bt = n), (Pu.transition = t);
						}
					}
					return !1;
				}
				function Ss(e, t, n) {
					(e = Mo(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
						(t = es()),
						null !== e && (yt(e, 1, t), rs(e, t));
				}
				function Es(e, t, n) {
					if (3 === e.tag) Ss(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								Ss(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if (
									"function" === typeof t.type.getDerivedStateFromError ||
									("function" === typeof r.componentDidCatch &&
										(null === Qu || !Qu.has(r)))
								) {
									(t = Mo(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
										(e = es()),
										null !== t && (yt(t, 1, e), rs(t, e));
									break;
								}
							}
							t = t.return;
						}
				}
				function Cs(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t),
						(t = es()),
						(e.pingedLanes |= e.suspendedLanes & n),
						_u === e &&
							(Ou & n) === n &&
							(4 === Au ||
							(3 === Au && (130023424 & Ou) === Ou && 500 > Ke() - Uu)
								? ds(e, 0)
								: (Vu |= n)),
						rs(e, t);
				}
				function js(e, t) {
					0 === t &&
						(0 === (1 & e.mode)
							? (t = 1)
							: ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
					var n = es();
					null !== (e = No(e, t)) && (yt(e, t, n), rs(e, n));
				}
				function Ps(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), js(e, n);
				}
				function Ts(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								a = e.memoizedState;
							null !== a && (n = a.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(o(314));
					}
					null !== r && r.delete(t), js(e, n);
				}
				function _s(e, t) {
					return Xe(e, t);
				}
				function Ns(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling =
							this.child =
							this.return =
							this.stateNode =
							this.type =
							this.elementType =
								null),
						(this.index = 0),
						(this.ref = null),
						(this.pendingProps = t),
						(this.dependencies =
							this.memoizedState =
							this.updateQueue =
							this.memoizedProps =
								null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function Os(e, t, n, r) {
					return new Ns(e, t, n, r);
				}
				function Rs(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Ls(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = Os(e.tag, t, e.key, e.mode)).elementType =
									e.elementType),
							  (n.type = e.type),
							  (n.stateNode = e.stateNode),
							  (n.alternate = e),
							  (e.alternate = n))
							: ((n.pendingProps = t),
							  (n.type = e.type),
							  (n.flags = 0),
							  (n.subtreeFlags = 0),
							  (n.deletions = null)),
						(n.flags = 14680064 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies =
							null === t
								? null
								: { lanes: t.lanes, firstContext: t.firstContext }),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						n
					);
				}
				function As(e, t, n, r, a, i) {
					var l = 2;
					if (((r = e), "function" === typeof e)) Rs(e) && (l = 1);
					else if ("string" === typeof e) l = 5;
					else
						e: switch (e) {
							case S:
								return Ms(n.children, a, i, t);
							case E:
								(l = 8), (a |= 8);
								break;
							case C:
								return (
									((e = Os(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
								);
							case _:
								return (
									((e = Os(13, n, t, a)).elementType = _), (e.lanes = i), e
								);
							case N:
								return (
									((e = Os(19, n, t, a)).elementType = N), (e.lanes = i), e
								);
							case L:
								return zs(n, a, i, t);
							default:
								if ("object" === typeof e && null !== e)
									switch (e.$$typeof) {
										case j:
											l = 10;
											break e;
										case P:
											l = 9;
											break e;
										case T:
											l = 11;
											break e;
										case O:
											l = 14;
											break e;
										case R:
											(l = 16), (r = null);
											break e;
									}
								throw Error(o(130, null == e ? e : typeof e, ""));
						}
					return (
						((t = Os(l, n, t, a)).elementType = e),
						(t.type = r),
						(t.lanes = i),
						t
					);
				}
				function Ms(e, t, n, r) {
					return ((e = Os(7, e, r, t)).lanes = n), e;
				}
				function zs(e, t, n, r) {
					return (
						((e = Os(22, e, r, t)).elementType = L),
						(e.lanes = n),
						(e.stateNode = { isHidden: !1 }),
						e
					);
				}
				function Ds(e, t, n) {
					return ((e = Os(6, e, null, t)).lanes = n), e;
				}
				function Vs(e, t, n) {
					return (
						((t = Os(
							4,
							null !== e.children ? e.children : [],
							e.key,
							t
						)).lanes = n),
						(t.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation,
						}),
						t
					);
				}
				function Fs(e, t, n, r, a) {
					(this.tag = t),
						(this.containerInfo = e),
						(this.finishedWork =
							this.pingCache =
							this.current =
							this.pendingChildren =
								null),
						(this.timeoutHandle = -1),
						(this.callbackNode = this.pendingContext = this.context = null),
						(this.callbackPriority = 0),
						(this.eventTimes = mt(0)),
						(this.expirationTimes = mt(-1)),
						(this.entangledLanes =
							this.finishedLanes =
							this.mutableReadLanes =
							this.expiredLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = mt(0)),
						(this.identifierPrefix = r),
						(this.onRecoverableError = a),
						(this.mutableSourceEagerHydrationData = null);
				}
				function Is(e, t, n, r, a, o, i, l, u) {
					return (
						(e = new Fs(e, t, n, l, u)),
						1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
						(o = Os(3, null, null, t)),
						(e.current = o),
						(o.stateNode = e),
						(o.memoizedState = {
							element: r,
							isDehydrated: n,
							cache: null,
							transitions: null,
							pendingSuspenseBoundaries: null,
						}),
						Ro(o),
						e
					);
				}
				function Us(e, t, n) {
					var r =
						3 < arguments.length && void 0 !== arguments[3]
							? arguments[3]
							: null;
					return {
						$$typeof: k,
						key: null == r ? null : "" + r,
						children: e,
						containerInfo: t,
						implementation: n,
					};
				}
				function Bs(e) {
					if (!e) return Pa;
					e: {
						if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
							throw Error(o(170));
						var t = e;
						do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (Ra(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e;
									}
							}
							t = t.return;
						} while (null !== t);
						throw Error(o(171));
					}
					if (1 === e.tag) {
						var n = e.type;
						if (Ra(n)) return Ma(e, n, t);
					}
					return t;
				}
				function Hs(e, t, n, r, a, o, i, l, u) {
					return (
						((e = Is(n, r, !0, e, 0, o, 0, l, u)).context = Bs(null)),
						(n = e.current),
						((o = Ao((r = es()), (a = ts(n)))).callback =
							void 0 !== t && null !== t ? t : null),
						Mo(n, o, a),
						(e.current.lanes = a),
						yt(e, a, r),
						rs(e, r),
						e
					);
				}
				function Ws(e, t, n, r) {
					var a = t.current,
						o = es(),
						i = ts(a);
					return (
						(n = Bs(n)),
						null === t.context ? (t.context = n) : (t.pendingContext = n),
						((t = Ao(o, i)).payload = { element: e }),
						null !== (r = void 0 === r ? null : r) && (t.callback = r),
						null !== (e = Mo(a, t, i)) && (ns(e, a, i, o), zo(e, a, i)),
						i
					);
				}
				function $s(e) {
					return (e = e.current).child
						? (e.child.tag, e.child.stateNode)
						: null;
				}
				function Qs(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function Xs(e, t) {
					Qs(e, t), (e = e.alternate) && Qs(e, t);
				}
				Su = function (e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || _a.current) xl = !0;
						else {
							if (0 === (e.lanes & n) && 0 === (128 & t.flags))
								return (
									(xl = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												Nl(t), ho();
												break;
											case 5:
												ii(t);
												break;
											case 1:
												Ra(t.type) && za(t);
												break;
											case 4:
												ai(t, t.stateNode.containerInfo);
												break;
											case 10:
												var r = t.type._context,
													a = t.memoizedProps.value;
												ja(go, r._currentValue), (r._currentValue = a);
												break;
											case 13:
												if (null !== (r = t.memoizedState))
													return null !== r.dehydrated
														? (ja(ui, 1 & ui.current), (t.flags |= 128), null)
														: 0 !== (n & t.child.childLanes)
														? Dl(e, t, n)
														: (ja(ui, 1 & ui.current),
														  null !== (e = Wl(e, t, n)) ? e.sibling : null);
												ja(ui, 1 & ui.current);
												break;
											case 19:
												if (
													((r = 0 !== (n & t.childLanes)),
													0 !== (128 & e.flags))
												) {
													if (r) return Bl(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !== (a = t.memoizedState) &&
														((a.rendering = null),
														(a.tail = null),
														(a.lastEffect = null)),
													ja(ui, ui.current),
													r)
												)
													break;
												return null;
											case 22:
											case 23:
												return (t.lanes = 0), Cl(e, t, n);
										}
										return Wl(e, t, n);
									})(e, t, n)
								);
							xl = 0 !== (131072 & e.flags);
						}
					else (xl = !1), ao && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 2:
							var r = t.type;
							Hl(e, t), (e = t.pendingProps);
							var a = Oa(t, Ta.current);
							Co(t, n), (a = Ei(null, t, r, e, a, n));
							var i = Ci();
							return (
								(t.flags |= 1),
								"object" === typeof a &&
								null !== a &&
								"function" === typeof a.render &&
								void 0 === a.$$typeof
									? ((t.tag = 1),
									  (t.memoizedState = null),
									  (t.updateQueue = null),
									  Ra(r) ? ((i = !0), za(t)) : (i = !1),
									  (t.memoizedState =
											null !== a.state && void 0 !== a.state ? a.state : null),
									  Ro(t),
									  (a.updater = Bo),
									  (t.stateNode = a),
									  (a._reactInternals = t),
									  Qo(t, r, e, n),
									  (t = _l(null, t, r, !0, i, n)))
									: ((t.tag = 0),
									  ao && i && eo(t),
									  wl(null, t, a, n),
									  (t = t.child)),
								t
							);
						case 16:
							r = t.elementType;
							e: {
								switch (
									(Hl(e, t),
									(e = t.pendingProps),
									(r = (a = r._init)(r._payload)),
									(t.type = r),
									(a = t.tag =
										(function (e) {
											if ("function" === typeof e) return Rs(e) ? 1 : 0;
											if (void 0 !== e && null !== e) {
												if ((e = e.$$typeof) === T) return 11;
												if (e === O) return 14;
											}
											return 2;
										})(r)),
									(e = yo(r, e)),
									a)
								) {
									case 0:
										t = Pl(null, t, r, e, n);
										break e;
									case 1:
										t = Tl(null, t, r, e, n);
										break e;
									case 11:
										t = kl(null, t, r, e, n);
										break e;
									case 14:
										t = Sl(null, t, r, yo(r.type, e), n);
										break e;
								}
								throw Error(o(306, r, ""));
							}
							return t;
						case 0:
							return (
								(r = t.type),
								(a = t.pendingProps),
								Pl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
							);
						case 1:
							return (
								(r = t.type),
								(a = t.pendingProps),
								Tl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
							);
						case 3:
							e: {
								if ((Nl(t), null === e)) throw Error(o(387));
								(r = t.pendingProps),
									(a = (i = t.memoizedState).element),
									Lo(e, t),
									Vo(t, r, null, n);
								var l = t.memoizedState;
								if (((r = l.element), i.isDehydrated)) {
									if (
										((i = {
											element: r,
											isDehydrated: !1,
											cache: l.cache,
											pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
											transitions: l.transitions,
										}),
										(t.updateQueue.baseState = i),
										(t.memoizedState = i),
										256 & t.flags)
									) {
										t = Ol(e, t, r, n, (a = cl(Error(o(423)), t)));
										break e;
									}
									if (r !== a) {
										t = Ol(e, t, r, n, (a = cl(Error(o(424)), t)));
										break e;
									}
									for (
										ro = sa(t.stateNode.containerInfo.firstChild),
											no = t,
											ao = !0,
											oo = null,
											n = Zo(t, null, r, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
								} else {
									if ((ho(), r === a)) {
										t = Wl(e, t, n);
										break e;
									}
									wl(e, t, r, n);
								}
								t = t.child;
							}
							return t;
						case 5:
							return (
								ii(t),
								null === e && so(t),
								(r = t.type),
								(a = t.pendingProps),
								(i = null !== e ? e.memoizedProps : null),
								(l = a.children),
								na(r, a)
									? (l = null)
									: null !== i && na(r, i) && (t.flags |= 32),
								jl(e, t),
								wl(e, t, l, n),
								t.child
							);
						case 6:
							return null === e && so(t), null;
						case 13:
							return Dl(e, t, n);
						case 4:
							return (
								ai(t, t.stateNode.containerInfo),
								(r = t.pendingProps),
								null === e ? (t.child = Ko(t, null, r, n)) : wl(e, t, r, n),
								t.child
							);
						case 11:
							return (
								(r = t.type),
								(a = t.pendingProps),
								kl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
							);
						case 7:
							return wl(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return wl(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (
									((r = t.type._context),
									(a = t.pendingProps),
									(i = t.memoizedProps),
									(l = a.value),
									ja(go, r._currentValue),
									(r._currentValue = l),
									null !== i)
								)
									if (lr(i.value, l)) {
										if (i.children === a.children && !_a.current) {
											t = Wl(e, t, n);
											break e;
										}
									} else
										for (
											null !== (i = t.child) && (i.return = t);
											null !== i;

										) {
											var u = i.dependencies;
											if (null !== u) {
												l = i.child;
												for (var s = u.firstContext; null !== s; ) {
													if (s.context === r) {
														if (1 === i.tag) {
															(s = Ao(-1, n & -n)).tag = 2;
															var c = i.updateQueue;
															if (null !== c) {
																var f = (c = c.shared).pending;
																null === f
																	? (s.next = s)
																	: ((s.next = f.next), (f.next = s)),
																	(c.pending = s);
															}
														}
														(i.lanes |= n),
															null !== (s = i.alternate) && (s.lanes |= n),
															Eo(i.return, n, t),
															(u.lanes |= n);
														break;
													}
													s = s.next;
												}
											} else if (10 === i.tag)
												l = i.type === t.type ? null : i.child;
											else if (18 === i.tag) {
												if (null === (l = i.return)) throw Error(o(341));
												(l.lanes |= n),
													null !== (u = l.alternate) && (u.lanes |= n),
													Eo(l, n, t),
													(l = i.sibling);
											} else l = i.child;
											if (null !== l) l.return = i;
											else
												for (l = i; null !== l; ) {
													if (l === t) {
														l = null;
														break;
													}
													if (null !== (i = l.sibling)) {
														(i.return = l.return), (l = i);
														break;
													}
													l = l.return;
												}
											i = l;
										}
								wl(e, t, a.children, n), (t = t.child);
							}
							return t;
						case 9:
							return (
								(a = t.type),
								(r = t.pendingProps.children),
								Co(t, n),
								(r = r((a = jo(a)))),
								(t.flags |= 1),
								wl(e, t, r, n),
								t.child
							);
						case 14:
							return (
								(a = yo((r = t.type), t.pendingProps)),
								Sl(e, t, r, (a = yo(r.type, a)), n)
							);
						case 15:
							return El(e, t, t.type, t.pendingProps, n);
						case 17:
							return (
								(r = t.type),
								(a = t.pendingProps),
								(a = t.elementType === r ? a : yo(r, a)),
								Hl(e, t),
								(t.tag = 1),
								Ra(r) ? ((e = !0), za(t)) : (e = !1),
								Co(t, n),
								Wo(t, r, a),
								Qo(t, r, a, n),
								_l(null, t, r, !0, e, n)
							);
						case 19:
							return Bl(e, t, n);
						case 22:
							return Cl(e, t, n);
					}
					throw Error(o(156, t.tag));
				};
				var qs =
					"function" === typeof reportError
						? reportError
						: function (e) {
								console.error(e);
						  };
				function Ys(e) {
					this._internalRoot = e;
				}
				function Gs(e) {
					this._internalRoot = e;
				}
				function Ks(e) {
					return !(
						!e ||
						(1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
					);
				}
				function Zs(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType &&
							(8 !== e.nodeType ||
								" react-mount-point-unstable " !== e.nodeValue))
					);
				}
				function Js() {}
				function ec(e, t, n, r, a) {
					var o = n._reactRootContainer;
					if (o) {
						var i = o;
						if ("function" === typeof a) {
							var l = a;
							a = function () {
								var e = $s(i);
								l.call(e);
							};
						}
						Ws(t, i, e, a);
					} else
						i = (function (e, t, n, r, a) {
							if (a) {
								if ("function" === typeof r) {
									var o = r;
									r = function () {
										var e = $s(i);
										o.call(e);
									};
								}
								var i = Hs(t, r, e, 0, null, !1, 0, "", Js);
								return (
									(e._reactRootContainer = i),
									(e[ha] = i.current),
									Br(8 === e.nodeType ? e.parentNode : e),
									cs(),
									i
								);
							}
							for (; (a = e.lastChild); ) e.removeChild(a);
							if ("function" === typeof r) {
								var l = r;
								r = function () {
									var e = $s(u);
									l.call(e);
								};
							}
							var u = Is(e, 0, !1, null, 0, !1, 0, "", Js);
							return (
								(e._reactRootContainer = u),
								(e[ha] = u.current),
								Br(8 === e.nodeType ? e.parentNode : e),
								cs(function () {
									Ws(t, u, n, r);
								}),
								u
							);
						})(n, t, e, a, r);
					return $s(i);
				}
				(Gs.prototype.render = Ys.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(o(409));
						Ws(e, t, null, null);
					}),
					(Gs.prototype.unmount = Ys.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								cs(function () {
									Ws(null, e, null, null);
								}),
									(t[ha] = null);
							}
						}),
					(Gs.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Et();
							e = { blockedOn: null, target: e, priority: t };
							for (
								var n = 0;
								n < Lt.length && 0 !== t && t < Lt[n].priority;
								n++
							);
							Lt.splice(n, 0, e), 0 === n && Dt(e);
						}
					}),
					(wt = function (e) {
						switch (e.tag) {
							case 3:
								var t = e.stateNode;
								if (t.current.memoizedState.isDehydrated) {
									var n = ft(t.pendingLanes);
									0 !== n &&
										(gt(t, 1 | n),
										rs(t, Ke()),
										0 === (6 & Tu) && ((Bu = Ke() + 500), Ba()));
								}
								break;
							case 13:
								cs(function () {
									var t = No(e, 1);
									if (null !== t) {
										var n = es();
										ns(t, e, 1, n);
									}
								}),
									Xs(e, 1);
						}
					}),
					(kt = function (e) {
						if (13 === e.tag) {
							var t = No(e, 134217728);
							if (null !== t) ns(t, e, 134217728, es());
							Xs(e, 134217728);
						}
					}),
					(St = function (e) {
						if (13 === e.tag) {
							var t = ts(e),
								n = No(e, t);
							if (null !== n) ns(n, e, t, es());
							Xs(e, t);
						}
					}),
					(Et = function () {
						return bt;
					}),
					(Ct = function (e, t) {
						var n = bt;
						try {
							return (bt = e), t();
						} finally {
							bt = n;
						}
					}),
					(ke = function (e, t, n) {
						switch (t) {
							case "input":
								if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
									for (n = e; n.parentNode; ) n = n.parentNode;
									for (
										n = n.querySelectorAll(
											"input[name=" + JSON.stringify("" + t) + '][type="radio"]'
										),
											t = 0;
										t < n.length;
										t++
									) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var a = wa(r);
											if (!a) throw Error(o(90));
											X(r), Z(r, a);
										}
									}
								}
								break;
							case "textarea":
								oe(e, n);
								break;
							case "select":
								null != (t = n.value) && ne(e, !!n.multiple, t, !1);
						}
					}),
					(Te = ss),
					(_e = cs);
				var tc = {
						usingClientEntryPoint: !1,
						Events: [ba, xa, wa, je, Pe, ss],
					},
					nc = {
						findFiberByHostInstance: ga,
						bundleType: 0,
						version: "18.2.0",
						rendererPackageName: "react-dom",
					},
					rc = {
						bundleType: nc.bundleType,
						version: nc.version,
						rendererPackageName: nc.rendererPackageName,
						rendererConfig: nc.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: x.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = $e(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance:
							nc.findFiberByHostInstance ||
							function () {
								return null;
							},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
					};
				if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!ac.isDisabled && ac.supportsFiber)
						try {
							(at = ac.inject(rc)), (ot = ac);
						} catch (ce) {}
				}
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
					(t.createPortal = function (e, t) {
						var n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: null;
						if (!Ks(t)) throw Error(o(200));
						return Us(e, t, null, n);
					}),
					(t.createRoot = function (e, t) {
						if (!Ks(e)) throw Error(o(299));
						var n = !1,
							r = "",
							a = qs;
						return (
							null !== t &&
								void 0 !== t &&
								(!0 === t.unstable_strictMode && (n = !0),
								void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
								void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
							(t = Is(e, 1, !1, null, 0, n, 0, r, a)),
							(e[ha] = t.current),
							Br(8 === e.nodeType ? e.parentNode : e),
							new Ys(t)
						);
					}),
					(t.findDOMNode = function (e) {
						if (null == e) return null;
						if (1 === e.nodeType) return e;
						var t = e._reactInternals;
						if (void 0 === t) {
							if ("function" === typeof e.render) throw Error(o(188));
							throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
						}
						return (e = null === (e = $e(t)) ? null : e.stateNode);
					}),
					(t.flushSync = function (e) {
						return cs(e);
					}),
					(t.hydrate = function (e, t, n) {
						if (!Zs(t)) throw Error(o(200));
						return ec(null, e, t, !0, n);
					}),
					(t.hydrateRoot = function (e, t, n) {
						if (!Ks(e)) throw Error(o(405));
						var r = (null != n && n.hydratedSources) || null,
							a = !1,
							i = "",
							l = qs;
						if (
							(null !== n &&
								void 0 !== n &&
								(!0 === n.unstable_strictMode && (a = !0),
								void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
								void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
							(t = Hs(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
							(e[ha] = t.current),
							Br(e),
							r)
						)
							for (e = 0; e < r.length; e++)
								(a = (a = (n = r[e])._getVersion)(n._source)),
									null == t.mutableSourceEagerHydrationData
										? (t.mutableSourceEagerHydrationData = [n, a])
										: t.mutableSourceEagerHydrationData.push(n, a);
						return new Gs(t);
					}),
					(t.render = function (e, t, n) {
						if (!Zs(t)) throw Error(o(200));
						return ec(null, e, t, !1, n);
					}),
					(t.unmountComponentAtNode = function (e) {
						if (!Zs(e)) throw Error(o(40));
						return (
							!!e._reactRootContainer &&
							(cs(function () {
								ec(null, null, e, !1, function () {
									(e._reactRootContainer = null), (e[ha] = null);
								});
							}),
							!0)
						);
					}),
					(t.unstable_batchedUpdates = ss),
					(t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
						if (!Zs(n)) throw Error(o(200));
						if (null == e || void 0 === e._reactInternals) throw Error(o(38));
						return ec(e, t, n, !1, r);
					}),
					(t.version = "18.2.0-next-9e3b772b8-20220608");
			},
			250: function (e, t, n) {
				var r = n(164);
				(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
			},
			164: function (e, t, n) {
				!(function e() {
					if (
						"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						"function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(463));
			},
			374: function (e, t, n) {
				var r = n(791),
					a = Symbol.for("react.element"),
					o = Symbol.for("react.fragment"),
					i = Object.prototype.hasOwnProperty,
					l =
						r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
							.ReactCurrentOwner,
					u = { key: !0, ref: !0, __self: !0, __source: !0 };
				function s(e, t, n) {
					var r,
						o = {},
						s = null,
						c = null;
					for (r in (void 0 !== n && (s = "" + n),
					void 0 !== t.key && (s = "" + t.key),
					void 0 !== t.ref && (c = t.ref),
					t))
						i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
					if (e && e.defaultProps)
						for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
					return {
						$$typeof: a,
						type: e,
						key: s,
						ref: c,
						props: o,
						_owner: l.current,
					};
				}
				(t.Fragment = o), (t.jsx = s), (t.jsxs = s);
			},
			117: function (e, t) {
				var n = Symbol.for("react.element"),
					r = Symbol.for("react.portal"),
					a = Symbol.for("react.fragment"),
					o = Symbol.for("react.strict_mode"),
					i = Symbol.for("react.profiler"),
					l = Symbol.for("react.provider"),
					u = Symbol.for("react.context"),
					s = Symbol.for("react.forward_ref"),
					c = Symbol.for("react.suspense"),
					f = Symbol.for("react.memo"),
					d = Symbol.for("react.lazy"),
					p = Symbol.iterator;
				var h = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					v = Object.assign,
					m = {};
				function y(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = m),
						(this.updater = n || h);
				}
				function g() {}
				function b(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = m),
						(this.updater = n || h);
				}
				(y.prototype.isReactComponent = {}),
					(y.prototype.setState = function (e, t) {
						if ("object" !== typeof e && "function" !== typeof e && null != e)
							throw Error(
								"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
							);
						this.updater.enqueueSetState(this, e, t, "setState");
					}),
					(y.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, "forceUpdate");
					}),
					(g.prototype = y.prototype);
				var x = (b.prototype = new g());
				(x.constructor = b), v(x, y.prototype), (x.isPureReactComponent = !0);
				var w = Array.isArray,
					k = Object.prototype.hasOwnProperty,
					S = { current: null },
					E = { key: !0, ref: !0, __self: !0, __source: !0 };
				function C(e, t, r) {
					var a,
						o = {},
						i = null,
						l = null;
					if (null != t)
						for (a in (void 0 !== t.ref && (l = t.ref),
						void 0 !== t.key && (i = "" + t.key),
						t))
							k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
					var u = arguments.length - 2;
					if (1 === u) o.children = r;
					else if (1 < u) {
						for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
						o.children = s;
					}
					if (e && e.defaultProps)
						for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
					return {
						$$typeof: n,
						type: e,
						key: i,
						ref: l,
						props: o,
						_owner: S.current,
					};
				}
				function j(e) {
					return "object" === typeof e && null !== e && e.$$typeof === n;
				}
				var P = /\/+/g;
				function T(e, t) {
					return "object" === typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { "=": "=0", ":": "=2" };
								return (
									"$" +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
						  })("" + e.key)
						: t.toString(36);
				}
				function _(e, t, a, o, i) {
					var l = typeof e;
					("undefined" !== l && "boolean" !== l) || (e = null);
					var u = !1;
					if (null === e) u = !0;
					else
						switch (l) {
							case "string":
							case "number":
								u = !0;
								break;
							case "object":
								switch (e.$$typeof) {
									case n:
									case r:
										u = !0;
								}
						}
					if (u)
						return (
							(i = i((u = e))),
							(e = "" === o ? "." + T(u, 0) : o),
							w(i)
								? ((a = ""),
								  null != e && (a = e.replace(P, "$&/") + "/"),
								  _(i, t, a, "", function (e) {
										return e;
								  }))
								: null != i &&
								  (j(i) &&
										(i = (function (e, t) {
											return {
												$$typeof: n,
												type: e.type,
												key: t,
												ref: e.ref,
												props: e.props,
												_owner: e._owner,
											};
										})(
											i,
											a +
												(!i.key || (u && u.key === i.key)
													? ""
													: ("" + i.key).replace(P, "$&/") + "/") +
												e
										)),
								  t.push(i)),
							1
						);
					if (((u = 0), (o = "" === o ? "." : o + ":"), w(e)))
						for (var s = 0; s < e.length; s++) {
							var c = o + T((l = e[s]), s);
							u += _(l, t, a, c, i);
						}
					else if (
						((c = (function (e) {
							return null === e || "object" !== typeof e
								? null
								: "function" === typeof (e = (p && e[p]) || e["@@iterator"])
								? e
								: null;
						})(e)),
						"function" === typeof c)
					)
						for (e = c.call(e), s = 0; !(l = e.next()).done; )
							u += _((l = l.value), t, a, (c = o + T(l, s++)), i);
					else if ("object" === l)
						throw (
							((t = String(e)),
							Error(
								"Objects are not valid as a React child (found: " +
									("[object Object]" === t
										? "object with keys {" + Object.keys(e).join(", ") + "}"
										: t) +
									"). If you meant to render a collection of children, use an array instead."
							))
						);
					return u;
				}
				function N(e, t, n) {
					if (null == e) return e;
					var r = [],
						a = 0;
					return (
						_(e, r, "", "", function (e) {
							return t.call(n, e, a++);
						}),
						r
					);
				}
				function O(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 2), (e._result = t));
							}
						),
							-1 === e._status && ((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var R = { current: null },
					L = { transition: null },
					A = {
						ReactCurrentDispatcher: R,
						ReactCurrentBatchConfig: L,
						ReactCurrentOwner: S,
					};
				(t.Children = {
					map: N,
					forEach: function (e, t, n) {
						N(
							e,
							function () {
								t.apply(this, arguments);
							},
							n
						);
					},
					count: function (e) {
						var t = 0;
						return (
							N(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							N(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!j(e))
							throw Error(
								"React.Children.only expected to receive a single React element child."
							);
						return e;
					},
				}),
					(t.Component = y),
					(t.Fragment = a),
					(t.Profiler = i),
					(t.PureComponent = b),
					(t.StrictMode = o),
					(t.Suspense = c),
					(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
					(t.cloneElement = function (e, t, r) {
						if (null === e || void 0 === e)
							throw Error(
								"React.cloneElement(...): The argument must be a React element, but you passed " +
									e +
									"."
							);
						var a = v({}, e.props),
							o = e.key,
							i = e.ref,
							l = e._owner;
						if (null != t) {
							if (
								(void 0 !== t.ref && ((i = t.ref), (l = S.current)),
								void 0 !== t.key && (o = "" + t.key),
								e.type && e.type.defaultProps)
							)
								var u = e.type.defaultProps;
							for (s in t)
								k.call(t, s) &&
									!E.hasOwnProperty(s) &&
									(a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
						}
						var s = arguments.length - 2;
						if (1 === s) a.children = r;
						else if (1 < s) {
							u = Array(s);
							for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
							a.children = u;
						}
						return {
							$$typeof: n,
							type: e.type,
							key: o,
							ref: i,
							props: a,
							_owner: l,
						};
					}),
					(t.createContext = function (e) {
						return (
							((e = {
								$$typeof: u,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
								_defaultValue: null,
								_globalName: null,
							}).Provider = { $$typeof: l, _context: e }),
							(e.Consumer = e)
						);
					}),
					(t.createElement = C),
					(t.createFactory = function (e) {
						var t = C.bind(null, e);
						return (t.type = e), t;
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: s, render: e };
					}),
					(t.isValidElement = j),
					(t.lazy = function (e) {
						return {
							$$typeof: d,
							_payload: { _status: -1, _result: e },
							_init: O,
						};
					}),
					(t.memo = function (e, t) {
						return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
					}),
					(t.startTransition = function (e) {
						var t = L.transition;
						L.transition = {};
						try {
							e();
						} finally {
							L.transition = t;
						}
					}),
					(t.unstable_act = function () {
						throw Error(
							"act(...) is not supported in production builds of React."
						);
					}),
					(t.useCallback = function (e, t) {
						return R.current.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return R.current.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e) {
						return R.current.useDeferredValue(e);
					}),
					(t.useEffect = function (e, t) {
						return R.current.useEffect(e, t);
					}),
					(t.useId = function () {
						return R.current.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return R.current.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return R.current.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return R.current.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return R.current.useMemo(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return R.current.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return R.current.useRef(e);
					}),
					(t.useState = function (e) {
						return R.current.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return R.current.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return R.current.useTransition();
					}),
					(t.version = "18.2.0");
			},
			791: function (e, t, n) {
				e.exports = n(117);
			},
			184: function (e, t, n) {
				e.exports = n(374);
			},
			813: function (e, t) {
				function n(e, t) {
					var n = e.length;
					e.push(t);
					for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							a = e[r];
						if (!(0 < o(a, t))) break;
						(e[r] = t), (e[n] = a), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function a(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
							var l = 2 * (r + 1) - 1,
								u = e[l],
								s = l + 1,
								c = e[s];
							if (0 > o(u, n))
								s < a && 0 > o(c, u)
									? ((e[r] = c), (e[s] = n), (r = s))
									: ((e[r] = u), (e[l] = n), (r = l));
							else {
								if (!(s < a && 0 > o(c, n))) break;
								(e[r] = c), (e[s] = n), (r = s);
							}
						}
					}
					return t;
				}
				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if (
					"object" === typeof performance &&
					"function" === typeof performance.now
				) {
					var i = performance;
					t.unstable_now = function () {
						return i.now();
					};
				} else {
					var l = Date,
						u = l.now();
					t.unstable_now = function () {
						return l.now() - u;
					};
				}
				var s = [],
					c = [],
					f = 1,
					d = null,
					p = 3,
					h = !1,
					v = !1,
					m = !1,
					y = "function" === typeof setTimeout ? setTimeout : null,
					g = "function" === typeof clearTimeout ? clearTimeout : null,
					b = "undefined" !== typeof setImmediate ? setImmediate : null;
				function x(e) {
					for (var t = r(c); null !== t; ) {
						if (null === t.callback) a(c);
						else {
							if (!(t.startTime <= e)) break;
							a(c), (t.sortIndex = t.expirationTime), n(s, t);
						}
						t = r(c);
					}
				}
				function w(e) {
					if (((m = !1), x(e), !v))
						if (null !== r(s)) (v = !0), L(k);
						else {
							var t = r(c);
							null !== t && A(w, t.startTime - e);
						}
				}
				function k(e, n) {
					(v = !1), m && ((m = !1), g(j), (j = -1)), (h = !0);
					var o = p;
					try {
						for (
							x(n), d = r(s);
							null !== d && (!(d.expirationTime > n) || (e && !_()));

						) {
							var i = d.callback;
							if ("function" === typeof i) {
								(d.callback = null), (p = d.priorityLevel);
								var l = i(d.expirationTime <= n);
								(n = t.unstable_now()),
									"function" === typeof l
										? (d.callback = l)
										: d === r(s) && a(s),
									x(n);
							} else a(s);
							d = r(s);
						}
						if (null !== d) var u = !0;
						else {
							var f = r(c);
							null !== f && A(w, f.startTime - n), (u = !1);
						}
						return u;
					} finally {
						(d = null), (p = o), (h = !1);
					}
				}
				"undefined" !== typeof navigator &&
					void 0 !== navigator.scheduling &&
					void 0 !== navigator.scheduling.isInputPending &&
					navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var S,
					E = !1,
					C = null,
					j = -1,
					P = 5,
					T = -1;
				function _() {
					return !(t.unstable_now() - T < P);
				}
				function N() {
					if (null !== C) {
						var e = t.unstable_now();
						T = e;
						var n = !0;
						try {
							n = C(!0, e);
						} finally {
							n ? S() : ((E = !1), (C = null));
						}
					} else E = !1;
				}
				if ("function" === typeof b)
					S = function () {
						b(N);
					};
				else if ("undefined" !== typeof MessageChannel) {
					var O = new MessageChannel(),
						R = O.port2;
					(O.port1.onmessage = N),
						(S = function () {
							R.postMessage(null);
						});
				} else
					S = function () {
						y(N, 0);
					};
				function L(e) {
					(C = e), E || ((E = !0), S());
				}
				function A(e, n) {
					j = y(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						v || h || ((v = !0), L(k));
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (P = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return p;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return r(s);
					}),
					(t.unstable_next = function (e) {
						switch (p) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = p;
						}
						var n = p;
						p = t;
						try {
							return e();
						} finally {
							p = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = p;
						p = e;
						try {
							return t();
						} finally {
							p = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, a, o) {
						var i = t.unstable_now();
						switch (
							("object" === typeof o && null !== o
								? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
								: (o = i),
							e)
						) {
							case 1:
								var l = -1;
								break;
							case 2:
								l = 250;
								break;
							case 5:
								l = 1073741823;
								break;
							case 4:
								l = 1e4;
								break;
							default:
								l = 5e3;
						}
						return (
							(e = {
								id: f++,
								callback: a,
								priorityLevel: e,
								startTime: o,
								expirationTime: (l = o + l),
								sortIndex: -1,
							}),
							o > i
								? ((e.sortIndex = o),
								  n(c, e),
								  null === r(s) &&
										e === r(c) &&
										(m ? (g(j), (j = -1)) : (m = !0), A(w, o - i)))
								: ((e.sortIndex = l), n(s, e), v || h || ((v = !0), L(k))),
							e
						);
					}),
					(t.unstable_shouldYield = _),
					(t.unstable_wrapCallback = function (e) {
						var t = p;
						return function () {
							var n = p;
							p = t;
							try {
								return e.apply(this, arguments);
							} finally {
								p = n;
							}
						};
					});
			},
			296: function (e, t, n) {
				e.exports = n(813);
			},
			165: function (e, t, n) {
				var r;
				"undefined" != typeof self && self,
					(e.exports =
						((r = n(791)),
						(function () {
							var e = {
									7403: function (e, t, n) {
										n.d(t, {
											default: function () {
												return j;
											},
										});
										var r = n(4087),
											a = n.n(r),
											o = function (e) {
												return new RegExp(/<[a-z][\s\S]*>/i).test(e);
											},
											i = function (e) {
												var t = document.createElement("div");
												return (t.innerHTML = e), t.childNodes;
											},
											l = function (e, t) {
												return Math.floor(Math.random() * (t - e + 1)) + e;
											},
											u = "TYPE_CHARACTER",
											s = "REMOVE_CHARACTER",
											c = "REMOVE_ALL",
											f = "REMOVE_LAST_VISIBLE_NODE",
											d = "PAUSE_FOR",
											p = "CALL_FUNCTION",
											h = "ADD_HTML_TAG_ELEMENT",
											v = "CHANGE_DELETE_SPEED",
											m = "CHANGE_DELAY",
											y = "CHANGE_CURSOR",
											g = "PASTE_STRING",
											b = "HTML_TAG";
										function x(e, t) {
											var n = Object.keys(e);
											if (Object.getOwnPropertySymbols) {
												var r = Object.getOwnPropertySymbols(e);
												t &&
													(r = r.filter(function (t) {
														return Object.getOwnPropertyDescriptor(
															e,
															t
														).enumerable;
													})),
													n.push.apply(n, r);
											}
											return n;
										}
										function w(e) {
											for (var t = 1; t < arguments.length; t++) {
												var n = null != arguments[t] ? arguments[t] : {};
												t % 2
													? x(Object(n), !0).forEach(function (t) {
															C(e, t, n[t]);
													  })
													: Object.getOwnPropertyDescriptors
													? Object.defineProperties(
															e,
															Object.getOwnPropertyDescriptors(n)
													  )
													: x(Object(n)).forEach(function (t) {
															Object.defineProperty(
																e,
																t,
																Object.getOwnPropertyDescriptor(n, t)
															);
													  });
											}
											return e;
										}
										function k(e) {
											return (
												(function (e) {
													if (Array.isArray(e)) return S(e);
												})(e) ||
												(function (e) {
													if (
														("undefined" != typeof Symbol &&
															null != e[Symbol.iterator]) ||
														null != e["@@iterator"]
													)
														return Array.from(e);
												})(e) ||
												(function (e, t) {
													if (e) {
														if ("string" == typeof e) return S(e, t);
														var n = Object.prototype.toString
															.call(e)
															.slice(8, -1);
														return (
															"Object" === n &&
																e.constructor &&
																(n = e.constructor.name),
															"Map" === n || "Set" === n
																? Array.from(e)
																: "Arguments" === n ||
																  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																		n
																  )
																? S(e, t)
																: void 0
														);
													}
												})(e) ||
												(function () {
													throw new TypeError(
														"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
													);
												})()
											);
										}
										function S(e, t) {
											(null == t || t > e.length) && (t = e.length);
											for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
											return r;
										}
										function E(e, t) {
											for (var n = 0; n < t.length; n++) {
												var r = t[n];
												(r.enumerable = r.enumerable || !1),
													(r.configurable = !0),
													"value" in r && (r.writable = !0),
													Object.defineProperty(e, r.key, r);
											}
										}
										function C(e, t, n) {
											return (
												t in e
													? Object.defineProperty(e, t, {
															value: n,
															enumerable: !0,
															configurable: !0,
															writable: !0,
													  })
													: (e[t] = n),
												e
											);
										}
										var j = (function () {
											function e(t, n) {
												var x = this;
												if (
													((function (e, t) {
														if (!(e instanceof t))
															throw new TypeError(
																"Cannot call a class as a function"
															);
													})(this, e),
													C(this, "state", {
														cursorAnimation: null,
														lastFrameTime: null,
														pauseUntil: null,
														eventQueue: [],
														eventLoop: null,
														eventLoopPaused: !1,
														reverseCalledEvents: [],
														calledEvents: [],
														visibleNodes: [],
														initialOptions: null,
														elements: {
															container: null,
															wrapper: document.createElement("span"),
															cursor: document.createElement("span"),
														},
													}),
													C(this, "options", {
														strings: null,
														cursor: "|",
														delay: "natural",
														pauseFor: 1500,
														deleteSpeed: "natural",
														loop: !1,
														autoStart: !1,
														devMode: !1,
														skipAddStyles: !1,
														wrapperClassName: "Typewriter__wrapper",
														cursorClassName: "Typewriter__cursor",
														stringSplitter: null,
														onCreateTextNode: null,
														onRemoveNode: null,
													}),
													C(this, "setupWrapperElement", function () {
														x.state.elements.container &&
															((x.state.elements.wrapper.className =
																x.options.wrapperClassName),
															(x.state.elements.cursor.className =
																x.options.cursorClassName),
															(x.state.elements.cursor.innerHTML =
																x.options.cursor),
															(x.state.elements.container.innerHTML = ""),
															x.state.elements.container.appendChild(
																x.state.elements.wrapper
															),
															x.state.elements.container.appendChild(
																x.state.elements.cursor
															));
													}),
													C(this, "start", function () {
														return (
															(x.state.eventLoopPaused = !1),
															x.runEventLoop(),
															x
														);
													}),
													C(this, "pause", function () {
														return (x.state.eventLoopPaused = !0), x;
													}),
													C(this, "stop", function () {
														return (
															x.state.eventLoop &&
																((0, r.cancel)(x.state.eventLoop),
																(x.state.eventLoop = null)),
															x
														);
													}),
													C(this, "pauseFor", function (e) {
														return x.addEventToQueue(d, { ms: e }), x;
													}),
													C(this, "typeOutAllStrings", function () {
														return "string" == typeof x.options.strings
															? (x
																	.typeString(x.options.strings)
																	.pauseFor(x.options.pauseFor),
															  x)
															: (x.options.strings.forEach(function (e) {
																	x.typeString(e)
																		.pauseFor(x.options.pauseFor)
																		.deleteAll(x.options.deleteSpeed);
															  }),
															  x);
													}),
													C(this, "typeString", function (e) {
														var t =
															arguments.length > 1 && void 0 !== arguments[1]
																? arguments[1]
																: null;
														if (o(e)) return x.typeOutHTMLString(e, t);
														if (e) {
															var n = (x.options || {}).stringSplitter,
																r = "function" == typeof n ? n(e) : e.split("");
															x.typeCharacters(r, t);
														}
														return x;
													}),
													C(this, "pasteString", function (e) {
														var t =
															arguments.length > 1 && void 0 !== arguments[1]
																? arguments[1]
																: null;
														return o(e)
															? x.typeOutHTMLString(e, t, !0)
															: (e &&
																	x.addEventToQueue(g, {
																		character: e,
																		node: t,
																	}),
															  x);
													}),
													C(this, "typeOutHTMLString", function (e) {
														var t =
																arguments.length > 1 && void 0 !== arguments[1]
																	? arguments[1]
																	: null,
															n = arguments.length > 2 ? arguments[2] : void 0,
															r = i(e);
														if (r.length > 0)
															for (var a = 0; a < r.length; a++) {
																var o = r[a],
																	l = o.innerHTML;
																o && 3 !== o.nodeType
																	? ((o.innerHTML = ""),
																	  x.addEventToQueue(h, {
																			node: o,
																			parentNode: t,
																	  }),
																	  n
																			? x.pasteString(l, o)
																			: x.typeString(l, o))
																	: o.textContent &&
																	  (n
																			? x.pasteString(o.textContent, t)
																			: x.typeString(o.textContent, t));
															}
														return x;
													}),
													C(this, "deleteAll", function () {
														var e =
															arguments.length > 0 && void 0 !== arguments[0]
																? arguments[0]
																: "natural";
														return x.addEventToQueue(c, { speed: e }), x;
													}),
													C(this, "changeDeleteSpeed", function (e) {
														if (!e)
															throw new Error("Must provide new delete speed");
														return x.addEventToQueue(v, { speed: e }), x;
													}),
													C(this, "changeDelay", function (e) {
														if (!e) throw new Error("Must provide new delay");
														return x.addEventToQueue(m, { delay: e }), x;
													}),
													C(this, "changeCursor", function (e) {
														if (!e) throw new Error("Must provide new cursor");
														return x.addEventToQueue(y, { cursor: e }), x;
													}),
													C(this, "deleteChars", function (e) {
														if (!e)
															throw new Error(
																"Must provide amount of characters to delete"
															);
														for (var t = 0; t < e; t++) x.addEventToQueue(s);
														return x;
													}),
													C(this, "callFunction", function (e, t) {
														if (!e || "function" != typeof e)
															throw new Error("Callbak must be a function");
														return (
															x.addEventToQueue(p, { cb: e, thisArg: t }), x
														);
													}),
													C(this, "typeCharacters", function (e) {
														var t =
															arguments.length > 1 && void 0 !== arguments[1]
																? arguments[1]
																: null;
														if (!e || !Array.isArray(e))
															throw new Error("Characters must be an array");
														return (
															e.forEach(function (e) {
																x.addEventToQueue(u, { character: e, node: t });
															}),
															x
														);
													}),
													C(this, "removeCharacters", function (e) {
														if (!e || !Array.isArray(e))
															throw new Error("Characters must be an array");
														return (
															e.forEach(function () {
																x.addEventToQueue(s);
															}),
															x
														);
													}),
													C(this, "addEventToQueue", function (e, t) {
														var n =
															arguments.length > 2 &&
															void 0 !== arguments[2] &&
															arguments[2];
														return x.addEventToStateProperty(
															e,
															t,
															n,
															"eventQueue"
														);
													}),
													C(this, "addReverseCalledEvent", function (e, t) {
														var n =
															arguments.length > 2 &&
															void 0 !== arguments[2] &&
															arguments[2];
														return x.options.loop
															? x.addEventToStateProperty(
																	e,
																	t,
																	n,
																	"reverseCalledEvents"
															  )
															: x;
													}),
													C(this, "addEventToStateProperty", function (e, t) {
														var n =
																arguments.length > 2 &&
																void 0 !== arguments[2] &&
																arguments[2],
															r = arguments.length > 3 ? arguments[3] : void 0,
															a = { eventName: e, eventArgs: t || {} };
														return (
															(x.state[r] = n
																? [a].concat(k(x.state[r]))
																: [].concat(k(x.state[r]), [a])),
															x
														);
													}),
													C(this, "runEventLoop", function () {
														x.state.lastFrameTime ||
															(x.state.lastFrameTime = Date.now());
														var e = Date.now(),
															t = e - x.state.lastFrameTime;
														if (!x.state.eventQueue.length) {
															if (!x.options.loop) return;
															(x.state.eventQueue = k(x.state.calledEvents)),
																(x.state.calledEvents = []),
																(x.options = w({}, x.state.initialOptions));
														}
														if (
															((x.state.eventLoop = a()(x.runEventLoop)),
															!x.state.eventLoopPaused)
														) {
															if (x.state.pauseUntil) {
																if (e < x.state.pauseUntil) return;
																x.state.pauseUntil = null;
															}
															var n,
																r = k(x.state.eventQueue),
																o = r.shift();
															if (
																!(
																	t <=
																	(n =
																		o.eventName === f || o.eventName === s
																			? "natural" === x.options.deleteSpeed
																				? l(40, 80)
																				: x.options.deleteSpeed
																			: "natural" === x.options.delay
																			? l(120, 160)
																			: x.options.delay)
																)
															) {
																var i = o.eventName,
																	S = o.eventArgs;
																switch (
																	(x.logInDevMode({
																		currentEvent: o,
																		state: x.state,
																		delay: n,
																	}),
																	i)
																) {
																	case g:
																	case u:
																		var E = S.character,
																			C = S.node,
																			j = document.createTextNode(E),
																			P = j;
																		x.options.onCreateTextNode &&
																			"function" ==
																				typeof x.options.onCreateTextNode &&
																			(P = x.options.onCreateTextNode(E, j)),
																			P &&
																				(C
																					? C.appendChild(P)
																					: x.state.elements.wrapper.appendChild(
																							P
																					  )),
																			(x.state.visibleNodes = [].concat(
																				k(x.state.visibleNodes),
																				[
																					{
																						type: "TEXT_NODE",
																						character: E,
																						node: P,
																					},
																				]
																			));
																		break;
																	case s:
																		r.unshift({
																			eventName: f,
																			eventArgs: { removingCharacterNode: !0 },
																		});
																		break;
																	case d:
																		var T = o.eventArgs.ms;
																		x.state.pauseUntil =
																			Date.now() + parseInt(T);
																		break;
																	case p:
																		var _ = o.eventArgs,
																			N = _.cb,
																			O = _.thisArg;
																		N.call(O, { elements: x.state.elements });
																		break;
																	case h:
																		var R = o.eventArgs,
																			L = R.node,
																			A = R.parentNode;
																		A
																			? A.appendChild(L)
																			: x.state.elements.wrapper.appendChild(L),
																			(x.state.visibleNodes = [].concat(
																				k(x.state.visibleNodes),
																				[
																					{
																						type: b,
																						node: L,
																						parentNode:
																							A || x.state.elements.wrapper,
																					},
																				]
																			));
																		break;
																	case c:
																		var M = x.state.visibleNodes,
																			z = S.speed,
																			D = [];
																		z &&
																			D.push({
																				eventName: v,
																				eventArgs: { speed: z, temp: !0 },
																			});
																		for (var V = 0, F = M.length; V < F; V++)
																			D.push({
																				eventName: f,
																				eventArgs: {
																					removingCharacterNode: !1,
																				},
																			});
																		z &&
																			D.push({
																				eventName: v,
																				eventArgs: {
																					speed: x.options.deleteSpeed,
																					temp: !0,
																				},
																			}),
																			r.unshift.apply(r, D);
																		break;
																	case f:
																		var I = o.eventArgs.removingCharacterNode;
																		if (x.state.visibleNodes.length) {
																			var U = x.state.visibleNodes.pop(),
																				B = U.type,
																				H = U.node,
																				W = U.character;
																			x.options.onRemoveNode &&
																				"function" ==
																					typeof x.options.onRemoveNode &&
																				x.options.onRemoveNode({
																					node: H,
																					character: W,
																				}),
																				H && H.parentNode.removeChild(H),
																				B === b &&
																					I &&
																					r.unshift({
																						eventName: f,
																						eventArgs: {},
																					});
																		}
																		break;
																	case v:
																		x.options.deleteSpeed = o.eventArgs.speed;
																		break;
																	case m:
																		x.options.delay = o.eventArgs.delay;
																		break;
																	case y:
																		(x.options.cursor = o.eventArgs.cursor),
																			(x.state.elements.cursor.innerHTML =
																				o.eventArgs.cursor);
																}
																x.options.loop &&
																	(o.eventName === f ||
																		(o.eventArgs && o.eventArgs.temp) ||
																		(x.state.calledEvents = [].concat(
																			k(x.state.calledEvents),
																			[o]
																		))),
																	(x.state.eventQueue = r),
																	(x.state.lastFrameTime = e);
															}
														}
													}),
													t)
												)
													if ("string" == typeof t) {
														var S = document.querySelector(t);
														if (!S)
															throw new Error(
																"Could not find container element"
															);
														this.state.elements.container = S;
													} else this.state.elements.container = t;
												n && (this.options = w(w({}, this.options), n)),
													(this.state.initialOptions = w({}, this.options)),
													this.init();
											}
											var t, n;
											return (
												(t = e),
												(n = [
													{
														key: "init",
														value: function () {
															var e, t;
															this.setupWrapperElement(),
																this.addEventToQueue(
																	y,
																	{ cursor: this.options.cursor },
																	!0
																),
																this.addEventToQueue(c, null, !0),
																!window ||
																	window.___TYPEWRITER_JS_STYLES_ADDED___ ||
																	this.options.skipAddStyles ||
																	((e =
																		".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
																	(t =
																		document.createElement(
																			"style"
																		)).appendChild(document.createTextNode(e)),
																	document.head.appendChild(t),
																	(window.___TYPEWRITER_JS_STYLES_ADDED___ =
																		!0)),
																!0 === this.options.autoStart &&
																	this.options.strings &&
																	this.typeOutAllStrings().start();
														},
													},
													{
														key: "logInDevMode",
														value: function (e) {
															this.options.devMode && console.log(e);
														},
													},
												]) && E(t.prototype, n),
												Object.defineProperty(t, "prototype", { writable: !1 }),
												e
											);
										})();
									},
									8552: function (e, t, n) {
										var r = n(852)(n(5639), "DataView");
										e.exports = r;
									},
									1989: function (e, t, n) {
										var r = n(1789),
											a = n(401),
											o = n(7667),
											i = n(1327),
											l = n(1866);
										function u(e) {
											var t = -1,
												n = null == e ? 0 : e.length;
											for (this.clear(); ++t < n; ) {
												var r = e[t];
												this.set(r[0], r[1]);
											}
										}
										(u.prototype.clear = r),
											(u.prototype.delete = a),
											(u.prototype.get = o),
											(u.prototype.has = i),
											(u.prototype.set = l),
											(e.exports = u);
									},
									8407: function (e, t, n) {
										var r = n(7040),
											a = n(4125),
											o = n(2117),
											i = n(7518),
											l = n(4705);
										function u(e) {
											var t = -1,
												n = null == e ? 0 : e.length;
											for (this.clear(); ++t < n; ) {
												var r = e[t];
												this.set(r[0], r[1]);
											}
										}
										(u.prototype.clear = r),
											(u.prototype.delete = a),
											(u.prototype.get = o),
											(u.prototype.has = i),
											(u.prototype.set = l),
											(e.exports = u);
									},
									7071: function (e, t, n) {
										var r = n(852)(n(5639), "Map");
										e.exports = r;
									},
									3369: function (e, t, n) {
										var r = n(4785),
											a = n(1285),
											o = n(6e3),
											i = n(9916),
											l = n(5265);
										function u(e) {
											var t = -1,
												n = null == e ? 0 : e.length;
											for (this.clear(); ++t < n; ) {
												var r = e[t];
												this.set(r[0], r[1]);
											}
										}
										(u.prototype.clear = r),
											(u.prototype.delete = a),
											(u.prototype.get = o),
											(u.prototype.has = i),
											(u.prototype.set = l),
											(e.exports = u);
									},
									3818: function (e, t, n) {
										var r = n(852)(n(5639), "Promise");
										e.exports = r;
									},
									8525: function (e, t, n) {
										var r = n(852)(n(5639), "Set");
										e.exports = r;
									},
									8668: function (e, t, n) {
										var r = n(3369),
											a = n(619),
											o = n(2385);
										function i(e) {
											var t = -1,
												n = null == e ? 0 : e.length;
											for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
										}
										(i.prototype.add = i.prototype.push = a),
											(i.prototype.has = o),
											(e.exports = i);
									},
									6384: function (e, t, n) {
										var r = n(8407),
											a = n(7465),
											o = n(3779),
											i = n(7599),
											l = n(4758),
											u = n(4309);
										function s(e) {
											var t = (this.__data__ = new r(e));
											this.size = t.size;
										}
										(s.prototype.clear = a),
											(s.prototype.delete = o),
											(s.prototype.get = i),
											(s.prototype.has = l),
											(s.prototype.set = u),
											(e.exports = s);
									},
									2705: function (e, t, n) {
										var r = n(5639).Symbol;
										e.exports = r;
									},
									1149: function (e, t, n) {
										var r = n(5639).Uint8Array;
										e.exports = r;
									},
									577: function (e, t, n) {
										var r = n(852)(n(5639), "WeakMap");
										e.exports = r;
									},
									4963: function (e) {
										e.exports = function (e, t) {
											for (
												var n = -1, r = null == e ? 0 : e.length, a = 0, o = [];
												++n < r;

											) {
												var i = e[n];
												t(i, n, e) && (o[a++] = i);
											}
											return o;
										};
									},
									4636: function (e, t, n) {
										var r = n(2545),
											a = n(5694),
											o = n(1469),
											i = n(4144),
											l = n(5776),
											u = n(6719),
											s = Object.prototype.hasOwnProperty;
										e.exports = function (e, t) {
											var n = o(e),
												c = !n && a(e),
												f = !n && !c && i(e),
												d = !n && !c && !f && u(e),
												p = n || c || f || d,
												h = p ? r(e.length, String) : [],
												v = h.length;
											for (var m in e)
												(!t && !s.call(e, m)) ||
													(p &&
														("length" == m ||
															(f && ("offset" == m || "parent" == m)) ||
															(d &&
																("buffer" == m ||
																	"byteLength" == m ||
																	"byteOffset" == m)) ||
															l(m, v))) ||
													h.push(m);
											return h;
										};
									},
									2488: function (e) {
										e.exports = function (e, t) {
											for (var n = -1, r = t.length, a = e.length; ++n < r; )
												e[a + n] = t[n];
											return e;
										};
									},
									2908: function (e) {
										e.exports = function (e, t) {
											for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
												if (t(e[n], n, e)) return !0;
											return !1;
										};
									},
									8470: function (e, t, n) {
										var r = n(7813);
										e.exports = function (e, t) {
											for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
											return -1;
										};
									},
									8866: function (e, t, n) {
										var r = n(2488),
											a = n(1469);
										e.exports = function (e, t, n) {
											var o = t(e);
											return a(e) ? o : r(o, n(e));
										};
									},
									4239: function (e, t, n) {
										var r = n(2705),
											a = n(9607),
											o = n(2333),
											i = r ? r.toStringTag : void 0;
										e.exports = function (e) {
											return null == e
												? void 0 === e
													? "[object Undefined]"
													: "[object Null]"
												: i && i in Object(e)
												? a(e)
												: o(e);
										};
									},
									9454: function (e, t, n) {
										var r = n(4239),
											a = n(7005);
										e.exports = function (e) {
											return a(e) && "[object Arguments]" == r(e);
										};
									},
									939: function (e, t, n) {
										var r = n(2492),
											a = n(7005);
										e.exports = function e(t, n, o, i, l) {
											return (
												t === n ||
												(null == t || null == n || (!a(t) && !a(n))
													? t != t && n != n
													: r(t, n, o, i, e, l))
											);
										};
									},
									2492: function (e, t, n) {
										var r = n(6384),
											a = n(7114),
											o = n(8351),
											i = n(6096),
											l = n(4160),
											u = n(1469),
											s = n(4144),
											c = n(6719),
											f = "[object Arguments]",
											d = "[object Array]",
											p = "[object Object]",
											h = Object.prototype.hasOwnProperty;
										e.exports = function (e, t, n, v, m, y) {
											var g = u(e),
												b = u(t),
												x = g ? d : l(e),
												w = b ? d : l(t),
												k = (x = x == f ? p : x) == p,
												S = (w = w == f ? p : w) == p,
												E = x == w;
											if (E && s(e)) {
												if (!s(t)) return !1;
												(g = !0), (k = !1);
											}
											if (E && !k)
												return (
													y || (y = new r()),
													g || c(e)
														? a(e, t, n, v, m, y)
														: o(e, t, x, n, v, m, y)
												);
											if (!(1 & n)) {
												var C = k && h.call(e, "__wrapped__"),
													j = S && h.call(t, "__wrapped__");
												if (C || j) {
													var P = C ? e.value() : e,
														T = j ? t.value() : t;
													return y || (y = new r()), m(P, T, n, v, y);
												}
											}
											return !!E && (y || (y = new r()), i(e, t, n, v, m, y));
										};
									},
									8458: function (e, t, n) {
										var r = n(3560),
											a = n(5346),
											o = n(3218),
											i = n(346),
											l = /^\[object .+?Constructor\]$/,
											u = Function.prototype,
											s = Object.prototype,
											c = u.toString,
											f = s.hasOwnProperty,
											d = RegExp(
												"^" +
													c
														.call(f)
														.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
														.replace(
															/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
															"$1.*?"
														) +
													"$"
											);
										e.exports = function (e) {
											return !(!o(e) || a(e)) && (r(e) ? d : l).test(i(e));
										};
									},
									8749: function (e, t, n) {
										var r = n(4239),
											a = n(1780),
											o = n(7005),
											i = {};
										(i["[object Float32Array]"] =
											i["[object Float64Array]"] =
											i["[object Int8Array]"] =
											i["[object Int16Array]"] =
											i["[object Int32Array]"] =
											i["[object Uint8Array]"] =
											i["[object Uint8ClampedArray]"] =
											i["[object Uint16Array]"] =
											i["[object Uint32Array]"] =
												!0),
											(i["[object Arguments]"] =
												i["[object Array]"] =
												i["[object ArrayBuffer]"] =
												i["[object Boolean]"] =
												i["[object DataView]"] =
												i["[object Date]"] =
												i["[object Error]"] =
												i["[object Function]"] =
												i["[object Map]"] =
												i["[object Number]"] =
												i["[object Object]"] =
												i["[object RegExp]"] =
												i["[object Set]"] =
												i["[object String]"] =
												i["[object WeakMap]"] =
													!1),
											(e.exports = function (e) {
												return o(e) && a(e.length) && !!i[r(e)];
											});
									},
									280: function (e, t, n) {
										var r = n(5726),
											a = n(6916),
											o = Object.prototype.hasOwnProperty;
										e.exports = function (e) {
											if (!r(e)) return a(e);
											var t = [];
											for (var n in Object(e))
												o.call(e, n) && "constructor" != n && t.push(n);
											return t;
										};
									},
									2545: function (e) {
										e.exports = function (e, t) {
											for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
											return r;
										};
									},
									1717: function (e) {
										e.exports = function (e) {
											return function (t) {
												return e(t);
											};
										};
									},
									4757: function (e) {
										e.exports = function (e, t) {
											return e.has(t);
										};
									},
									4429: function (e, t, n) {
										var r = n(5639)["__core-js_shared__"];
										e.exports = r;
									},
									7114: function (e, t, n) {
										var r = n(8668),
											a = n(2908),
											o = n(4757);
										e.exports = function (e, t, n, i, l, u) {
											var s = 1 & n,
												c = e.length,
												f = t.length;
											if (c != f && !(s && f > c)) return !1;
											var d = u.get(e),
												p = u.get(t);
											if (d && p) return d == t && p == e;
											var h = -1,
												v = !0,
												m = 2 & n ? new r() : void 0;
											for (u.set(e, t), u.set(t, e); ++h < c; ) {
												var y = e[h],
													g = t[h];
												if (i)
													var b = s ? i(g, y, h, t, e, u) : i(y, g, h, e, t, u);
												if (void 0 !== b) {
													if (b) continue;
													v = !1;
													break;
												}
												if (m) {
													if (
														!a(t, function (e, t) {
															if (!o(m, t) && (y === e || l(y, e, n, i, u)))
																return m.push(t);
														})
													) {
														v = !1;
														break;
													}
												} else if (y !== g && !l(y, g, n, i, u)) {
													v = !1;
													break;
												}
											}
											return u.delete(e), u.delete(t), v;
										};
									},
									8351: function (e, t, n) {
										var r = n(2705),
											a = n(1149),
											o = n(7813),
											i = n(7114),
											l = n(8776),
											u = n(1814),
											s = r ? r.prototype : void 0,
											c = s ? s.valueOf : void 0;
										e.exports = function (e, t, n, r, s, f, d) {
											switch (n) {
												case "[object DataView]":
													if (
														e.byteLength != t.byteLength ||
														e.byteOffset != t.byteOffset
													)
														return !1;
													(e = e.buffer), (t = t.buffer);
												case "[object ArrayBuffer]":
													return !(
														e.byteLength != t.byteLength ||
														!f(new a(e), new a(t))
													);
												case "[object Boolean]":
												case "[object Date]":
												case "[object Number]":
													return o(+e, +t);
												case "[object Error]":
													return e.name == t.name && e.message == t.message;
												case "[object RegExp]":
												case "[object String]":
													return e == t + "";
												case "[object Map]":
													var p = l;
												case "[object Set]":
													var h = 1 & r;
													if ((p || (p = u), e.size != t.size && !h)) return !1;
													var v = d.get(e);
													if (v) return v == t;
													(r |= 2), d.set(e, t);
													var m = i(p(e), p(t), r, s, f, d);
													return d.delete(e), m;
												case "[object Symbol]":
													if (c) return c.call(e) == c.call(t);
											}
											return !1;
										};
									},
									6096: function (e, t, n) {
										var r = n(8234),
											a = Object.prototype.hasOwnProperty;
										e.exports = function (e, t, n, o, i, l) {
											var u = 1 & n,
												s = r(e),
												c = s.length;
											if (c != r(t).length && !u) return !1;
											for (var f = c; f--; ) {
												var d = s[f];
												if (!(u ? d in t : a.call(t, d))) return !1;
											}
											var p = l.get(e),
												h = l.get(t);
											if (p && h) return p == t && h == e;
											var v = !0;
											l.set(e, t), l.set(t, e);
											for (var m = u; ++f < c; ) {
												var y = e[(d = s[f])],
													g = t[d];
												if (o)
													var b = u ? o(g, y, d, t, e, l) : o(y, g, d, e, t, l);
												if (!(void 0 === b ? y === g || i(y, g, n, o, l) : b)) {
													v = !1;
													break;
												}
												m || (m = "constructor" == d);
											}
											if (v && !m) {
												var x = e.constructor,
													w = t.constructor;
												x == w ||
													!("constructor" in e) ||
													!("constructor" in t) ||
													("function" == typeof x &&
														x instanceof x &&
														"function" == typeof w &&
														w instanceof w) ||
													(v = !1);
											}
											return l.delete(e), l.delete(t), v;
										};
									},
									1957: function (e, t, n) {
										var r =
											"object" == typeof n.g &&
											n.g &&
											n.g.Object === Object &&
											n.g;
										e.exports = r;
									},
									8234: function (e, t, n) {
										var r = n(8866),
											a = n(9551),
											o = n(3674);
										e.exports = function (e) {
											return r(e, o, a);
										};
									},
									5050: function (e, t, n) {
										var r = n(7019);
										e.exports = function (e, t) {
											var n = e.__data__;
											return r(t)
												? n["string" == typeof t ? "string" : "hash"]
												: n.map;
										};
									},
									852: function (e, t, n) {
										var r = n(8458),
											a = n(7801);
										e.exports = function (e, t) {
											var n = a(e, t);
											return r(n) ? n : void 0;
										};
									},
									9607: function (e, t, n) {
										var r = n(2705),
											a = Object.prototype,
											o = a.hasOwnProperty,
											i = a.toString,
											l = r ? r.toStringTag : void 0;
										e.exports = function (e) {
											var t = o.call(e, l),
												n = e[l];
											try {
												e[l] = void 0;
												var r = !0;
											} catch (e) {}
											var a = i.call(e);
											return r && (t ? (e[l] = n) : delete e[l]), a;
										};
									},
									9551: function (e, t, n) {
										var r = n(4963),
											a = n(479),
											o = Object.prototype.propertyIsEnumerable,
											i = Object.getOwnPropertySymbols,
											l = i
												? function (e) {
														return null == e
															? []
															: ((e = Object(e)),
															  r(i(e), function (t) {
																	return o.call(e, t);
															  }));
												  }
												: a;
										e.exports = l;
									},
									4160: function (e, t, n) {
										var r = n(8552),
											a = n(7071),
											o = n(3818),
											i = n(8525),
											l = n(577),
											u = n(4239),
											s = n(346),
											c = "[object Map]",
											f = "[object Promise]",
											d = "[object Set]",
											p = "[object WeakMap]",
											h = "[object DataView]",
											v = s(r),
											m = s(a),
											y = s(o),
											g = s(i),
											b = s(l),
											x = u;
										((r && x(new r(new ArrayBuffer(1))) != h) ||
											(a && x(new a()) != c) ||
											(o && x(o.resolve()) != f) ||
											(i && x(new i()) != d) ||
											(l && x(new l()) != p)) &&
											(x = function (e) {
												var t = u(e),
													n = "[object Object]" == t ? e.constructor : void 0,
													r = n ? s(n) : "";
												if (r)
													switch (r) {
														case v:
															return h;
														case m:
															return c;
														case y:
															return f;
														case g:
															return d;
														case b:
															return p;
													}
												return t;
											}),
											(e.exports = x);
									},
									7801: function (e) {
										e.exports = function (e, t) {
											return null == e ? void 0 : e[t];
										};
									},
									1789: function (e, t, n) {
										var r = n(4536);
										e.exports = function () {
											(this.__data__ = r ? r(null) : {}), (this.size = 0);
										};
									},
									401: function (e) {
										e.exports = function (e) {
											var t = this.has(e) && delete this.__data__[e];
											return (this.size -= t ? 1 : 0), t;
										};
									},
									7667: function (e, t, n) {
										var r = n(4536),
											a = Object.prototype.hasOwnProperty;
										e.exports = function (e) {
											var t = this.__data__;
											if (r) {
												var n = t[e];
												return "__lodash_hash_undefined__" === n ? void 0 : n;
											}
											return a.call(t, e) ? t[e] : void 0;
										};
									},
									1327: function (e, t, n) {
										var r = n(4536),
											a = Object.prototype.hasOwnProperty;
										e.exports = function (e) {
											var t = this.__data__;
											return r ? void 0 !== t[e] : a.call(t, e);
										};
									},
									1866: function (e, t, n) {
										var r = n(4536);
										e.exports = function (e, t) {
											var n = this.__data__;
											return (
												(this.size += this.has(e) ? 0 : 1),
												(n[e] =
													r && void 0 === t ? "__lodash_hash_undefined__" : t),
												this
											);
										};
									},
									5776: function (e) {
										var t = /^(?:0|[1-9]\d*)$/;
										e.exports = function (e, n) {
											var r = typeof e;
											return (
												!!(n = null == n ? 9007199254740991 : n) &&
												("number" == r || ("symbol" != r && t.test(e))) &&
												e > -1 &&
												e % 1 == 0 &&
												e < n
											);
										};
									},
									7019: function (e) {
										e.exports = function (e) {
											var t = typeof e;
											return "string" == t ||
												"number" == t ||
												"symbol" == t ||
												"boolean" == t
												? "__proto__" !== e
												: null === e;
										};
									},
									5346: function (e, t, n) {
										var r,
											a = n(4429),
											o = (r = /[^.]+$/.exec(
												(a && a.keys && a.keys.IE_PROTO) || ""
											))
												? "Symbol(src)_1." + r
												: "";
										e.exports = function (e) {
											return !!o && o in e;
										};
									},
									5726: function (e) {
										var t = Object.prototype;
										e.exports = function (e) {
											var n = e && e.constructor;
											return (
												e === (("function" == typeof n && n.prototype) || t)
											);
										};
									},
									7040: function (e) {
										e.exports = function () {
											(this.__data__ = []), (this.size = 0);
										};
									},
									4125: function (e, t, n) {
										var r = n(8470),
											a = Array.prototype.splice;
										e.exports = function (e) {
											var t = this.__data__,
												n = r(t, e);
											return !(
												n < 0 ||
												(n == t.length - 1 ? t.pop() : a.call(t, n, 1),
												--this.size,
												0)
											);
										};
									},
									2117: function (e, t, n) {
										var r = n(8470);
										e.exports = function (e) {
											var t = this.__data__,
												n = r(t, e);
											return n < 0 ? void 0 : t[n][1];
										};
									},
									7518: function (e, t, n) {
										var r = n(8470);
										e.exports = function (e) {
											return r(this.__data__, e) > -1;
										};
									},
									4705: function (e, t, n) {
										var r = n(8470);
										e.exports = function (e, t) {
											var n = this.__data__,
												a = r(n, e);
											return (
												a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t),
												this
											);
										};
									},
									4785: function (e, t, n) {
										var r = n(1989),
											a = n(8407),
											o = n(7071);
										e.exports = function () {
											(this.size = 0),
												(this.__data__ = {
													hash: new r(),
													map: new (o || a)(),
													string: new r(),
												});
										};
									},
									1285: function (e, t, n) {
										var r = n(5050);
										e.exports = function (e) {
											var t = r(this, e).delete(e);
											return (this.size -= t ? 1 : 0), t;
										};
									},
									6e3: function (e, t, n) {
										var r = n(5050);
										e.exports = function (e) {
											return r(this, e).get(e);
										};
									},
									9916: function (e, t, n) {
										var r = n(5050);
										e.exports = function (e) {
											return r(this, e).has(e);
										};
									},
									5265: function (e, t, n) {
										var r = n(5050);
										e.exports = function (e, t) {
											var n = r(this, e),
												a = n.size;
											return (
												n.set(e, t), (this.size += n.size == a ? 0 : 1), this
											);
										};
									},
									8776: function (e) {
										e.exports = function (e) {
											var t = -1,
												n = Array(e.size);
											return (
												e.forEach(function (e, r) {
													n[++t] = [r, e];
												}),
												n
											);
										};
									},
									4536: function (e, t, n) {
										var r = n(852)(Object, "create");
										e.exports = r;
									},
									6916: function (e, t, n) {
										var r = n(5569)(Object.keys, Object);
										e.exports = r;
									},
									1167: function (e, t, n) {
										e = n.nmd(e);
										var r = n(1957),
											a = t && !t.nodeType && t,
											o = a && e && !e.nodeType && e,
											i = o && o.exports === a && r.process,
											l = (function () {
												try {
													return (
														(o && o.require && o.require("util").types) ||
														(i && i.binding && i.binding("util"))
													);
												} catch (e) {}
											})();
										e.exports = l;
									},
									2333: function (e) {
										var t = Object.prototype.toString;
										e.exports = function (e) {
											return t.call(e);
										};
									},
									5569: function (e) {
										e.exports = function (e, t) {
											return function (n) {
												return e(t(n));
											};
										};
									},
									5639: function (e, t, n) {
										var r = n(1957),
											a =
												"object" == typeof self &&
												self &&
												self.Object === Object &&
												self,
											o = r || a || Function("return this")();
										e.exports = o;
									},
									619: function (e) {
										e.exports = function (e) {
											return (
												this.__data__.set(e, "__lodash_hash_undefined__"), this
											);
										};
									},
									2385: function (e) {
										e.exports = function (e) {
											return this.__data__.has(e);
										};
									},
									1814: function (e) {
										e.exports = function (e) {
											var t = -1,
												n = Array(e.size);
											return (
												e.forEach(function (e) {
													n[++t] = e;
												}),
												n
											);
										};
									},
									7465: function (e, t, n) {
										var r = n(8407);
										e.exports = function () {
											(this.__data__ = new r()), (this.size = 0);
										};
									},
									3779: function (e) {
										e.exports = function (e) {
											var t = this.__data__,
												n = t.delete(e);
											return (this.size = t.size), n;
										};
									},
									7599: function (e) {
										e.exports = function (e) {
											return this.__data__.get(e);
										};
									},
									4758: function (e) {
										e.exports = function (e) {
											return this.__data__.has(e);
										};
									},
									4309: function (e, t, n) {
										var r = n(8407),
											a = n(7071),
											o = n(3369);
										e.exports = function (e, t) {
											var n = this.__data__;
											if (n instanceof r) {
												var i = n.__data__;
												if (!a || i.length < 199)
													return i.push([e, t]), (this.size = ++n.size), this;
												n = this.__data__ = new o(i);
											}
											return n.set(e, t), (this.size = n.size), this;
										};
									},
									346: function (e) {
										var t = Function.prototype.toString;
										e.exports = function (e) {
											if (null != e) {
												try {
													return t.call(e);
												} catch (e) {}
												try {
													return e + "";
												} catch (e) {}
											}
											return "";
										};
									},
									7813: function (e) {
										e.exports = function (e, t) {
											return e === t || (e != e && t != t);
										};
									},
									5694: function (e, t, n) {
										var r = n(9454),
											a = n(7005),
											o = Object.prototype,
											i = o.hasOwnProperty,
											l = o.propertyIsEnumerable,
											u = r(
												(function () {
													return arguments;
												})()
											)
												? r
												: function (e) {
														return (
															a(e) &&
															i.call(e, "callee") &&
															!l.call(e, "callee")
														);
												  };
										e.exports = u;
									},
									1469: function (e) {
										var t = Array.isArray;
										e.exports = t;
									},
									8612: function (e, t, n) {
										var r = n(3560),
											a = n(1780);
										e.exports = function (e) {
											return null != e && a(e.length) && !r(e);
										};
									},
									4144: function (e, t, n) {
										e = n.nmd(e);
										var r = n(5639),
											a = n(5062),
											o = t && !t.nodeType && t,
											i = o && e && !e.nodeType && e,
											l = i && i.exports === o ? r.Buffer : void 0,
											u = (l ? l.isBuffer : void 0) || a;
										e.exports = u;
									},
									8446: function (e, t, n) {
										var r = n(939);
										e.exports = function (e, t) {
											return r(e, t);
										};
									},
									3560: function (e, t, n) {
										var r = n(4239),
											a = n(3218);
										e.exports = function (e) {
											if (!a(e)) return !1;
											var t = r(e);
											return (
												"[object Function]" == t ||
												"[object GeneratorFunction]" == t ||
												"[object AsyncFunction]" == t ||
												"[object Proxy]" == t
											);
										};
									},
									1780: function (e) {
										e.exports = function (e) {
											return (
												"number" == typeof e &&
												e > -1 &&
												e % 1 == 0 &&
												e <= 9007199254740991
											);
										};
									},
									3218: function (e) {
										e.exports = function (e) {
											var t = typeof e;
											return null != e && ("object" == t || "function" == t);
										};
									},
									7005: function (e) {
										e.exports = function (e) {
											return null != e && "object" == typeof e;
										};
									},
									6719: function (e, t, n) {
										var r = n(8749),
											a = n(1717),
											o = n(1167),
											i = o && o.isTypedArray,
											l = i ? a(i) : r;
										e.exports = l;
									},
									3674: function (e, t, n) {
										var r = n(4636),
											a = n(280),
											o = n(8612);
										e.exports = function (e) {
											return o(e) ? r(e) : a(e);
										};
									},
									479: function (e) {
										e.exports = function () {
											return [];
										};
									},
									5062: function (e) {
										e.exports = function () {
											return !1;
										};
									},
									75: function (e) {
										(function () {
											var t, n, r, a, o, i;
											"undefined" != typeof performance &&
											null !== performance &&
											performance.now
												? (e.exports = function () {
														return performance.now();
												  })
												: "undefined" != typeof process &&
												  null !== process &&
												  process.hrtime
												? ((e.exports = function () {
														return (t() - o) / 1e6;
												  }),
												  (n = process.hrtime),
												  (a = (t = function () {
														var e;
														return 1e9 * (e = n())[0] + e[1];
												  })()),
												  (i = 1e9 * process.uptime()),
												  (o = a - i))
												: Date.now
												? ((e.exports = function () {
														return Date.now() - r;
												  }),
												  (r = Date.now()))
												: ((e.exports = function () {
														return new Date().getTime() - r;
												  }),
												  (r = new Date().getTime()));
										}.call(this));
									},
									4087: function (e, t, n) {
										for (
											var r = n(75),
												a = "undefined" == typeof window ? n.g : window,
												o = ["moz", "webkit"],
												i = "AnimationFrame",
												l = a["request" + i],
												u = a["cancel" + i] || a["cancelRequest" + i],
												s = 0;
											!l && s < o.length;
											s++
										)
											(l = a[o[s] + "Request" + i]),
												(u =
													a[o[s] + "Cancel" + i] ||
													a[o[s] + "CancelRequest" + i]);
										if (!l || !u) {
											var c = 0,
												f = 0,
												d = [];
											(l = function (e) {
												if (0 === d.length) {
													var t = r(),
														n = Math.max(0, 16.666666666666668 - (t - c));
													(c = n + t),
														setTimeout(function () {
															var e = d.slice(0);
															d.length = 0;
															for (var t = 0; t < e.length; t++)
																if (!e[t].cancelled)
																	try {
																		e[t].callback(c);
																	} catch (e) {
																		setTimeout(function () {
																			throw e;
																		}, 0);
																	}
														}, Math.round(n));
												}
												return (
													d.push({ handle: ++f, callback: e, cancelled: !1 }), f
												);
											}),
												(u = function (e) {
													for (var t = 0; t < d.length; t++)
														d[t].handle === e && (d[t].cancelled = !0);
												});
										}
										(e.exports = function (e) {
											return l.call(a, e);
										}),
											(e.exports.cancel = function () {
												u.apply(a, arguments);
											}),
											(e.exports.polyfill = function (e) {
												e || (e = a),
													(e.requestAnimationFrame = l),
													(e.cancelAnimationFrame = u);
											});
									},
									8156: function (e) {
										e.exports = r;
									},
								},
								t = {};
							function n(r) {
								var a = t[r];
								if (void 0 !== a) return a.exports;
								var o = (t[r] = { id: r, loaded: !1, exports: {} });
								return (
									e[r].call(o.exports, o, o.exports, n),
									(o.loaded = !0),
									o.exports
								);
							}
							(n.n = function (e) {
								var t =
									e && e.__esModule
										? function () {
												return e.default;
										  }
										: function () {
												return e;
										  };
								return n.d(t, { a: t }), t;
							}),
								(n.d = function (e, t) {
									for (var r in t)
										n.o(t, r) &&
											!n.o(e, r) &&
											Object.defineProperty(e, r, {
												enumerable: !0,
												get: t[r],
											});
								}),
								(n.g = (function () {
									if ("object" == typeof globalThis) return globalThis;
									try {
										return this || new Function("return this")();
									} catch (r) {
										if ("object" == typeof window) return window;
									}
								})()),
								(n.o = function (e, t) {
									return Object.prototype.hasOwnProperty.call(e, t);
								}),
								(n.nmd = function (e) {
									return (e.paths = []), e.children || (e.children = []), e;
								});
							var a = {};
							return (
								(function () {
									n.d(a, {
										default: function () {
											return m;
										},
									});
									var e = n(8156),
										t = n.n(e),
										r = n(7403),
										o = n(8446),
										i = n.n(o);
									function l(e) {
										return (
											(l =
												"function" == typeof Symbol &&
												"symbol" == typeof Symbol.iterator
													? function (e) {
															return typeof e;
													  }
													: function (e) {
															return e &&
																"function" == typeof Symbol &&
																e.constructor === Symbol &&
																e !== Symbol.prototype
																? "symbol"
																: typeof e;
													  }),
											l(e)
										);
									}
									function u(e, t) {
										if (!(e instanceof t))
											throw new TypeError("Cannot call a class as a function");
									}
									function s(e, t) {
										for (var n = 0; n < t.length; n++) {
											var r = t[n];
											(r.enumerable = r.enumerable || !1),
												(r.configurable = !0),
												"value" in r && (r.writable = !0),
												Object.defineProperty(e, r.key, r);
										}
									}
									function c(e, t) {
										return (
											(c = Object.setPrototypeOf
												? Object.setPrototypeOf.bind()
												: function (e, t) {
														return (e.__proto__ = t), e;
												  }),
											c(e, t)
										);
									}
									function f(e, t) {
										if (t && ("object" === l(t) || "function" == typeof t))
											return t;
										if (void 0 !== t)
											throw new TypeError(
												"Derived constructors may only return object or undefined"
											);
										return d(e);
									}
									function d(e) {
										if (void 0 === e)
											throw new ReferenceError(
												"this hasn't been initialised - super() hasn't been called"
											);
										return e;
									}
									function p(e) {
										return (
											(p = Object.setPrototypeOf
												? Object.getPrototypeOf.bind()
												: function (e) {
														return e.__proto__ || Object.getPrototypeOf(e);
												  }),
											p(e)
										);
									}
									function h(e, t, n) {
										return (
											t in e
												? Object.defineProperty(e, t, {
														value: n,
														enumerable: !0,
														configurable: !0,
														writable: !0,
												  })
												: (e[t] = n),
											e
										);
									}
									var v = (function (e) {
										!(function (e, t) {
											if ("function" != typeof t && null !== t)
												throw new TypeError(
													"Super expression must either be null or a function"
												);
											(e.prototype = Object.create(t && t.prototype, {
												constructor: {
													value: e,
													writable: !0,
													configurable: !0,
												},
											})),
												Object.defineProperty(e, "prototype", { writable: !1 }),
												t && c(e, t);
										})(m, e);
										var n,
											a,
											o,
											l,
											v =
												((o = m),
												(l = (function () {
													if (
														"undefined" == typeof Reflect ||
														!Reflect.construct
													)
														return !1;
													if (Reflect.construct.sham) return !1;
													if ("function" == typeof Proxy) return !0;
													try {
														return (
															Boolean.prototype.valueOf.call(
																Reflect.construct(Boolean, [], function () {})
															),
															!0
														);
													} catch (e) {
														return !1;
													}
												})()),
												function () {
													var e,
														t = p(o);
													if (l) {
														var n = p(this).constructor;
														e = Reflect.construct(t, arguments, n);
													} else e = t.apply(this, arguments);
													return f(this, e);
												});
										function m() {
											var e;
											u(this, m);
											for (
												var t = arguments.length, n = new Array(t), r = 0;
												r < t;
												r++
											)
												n[r] = arguments[r];
											return (
												h(d((e = v.call.apply(v, [this].concat(n)))), "state", {
													instance: null,
												}),
												e
											);
										}
										return (
											(n = m),
											(a = [
												{
													key: "componentDidMount",
													value: function () {
														var e = this,
															t = new r.default(
																this.typewriter,
																this.props.options
															);
														this.setState({ instance: t }, function () {
															var n = e.props.onInit;
															n && n(t);
														});
													},
												},
												{
													key: "componentDidUpdate",
													value: function (e) {
														i()(this.props.options, e.options) ||
															this.setState({
																instance: new r.default(
																	this.typewriter,
																	this.props.options
																),
															});
													},
												},
												{
													key: "componentWillUnmount",
													value: function () {
														this.state.instance && this.state.instance.stop();
													},
												},
												{
													key: "render",
													value: function () {
														var e = this,
															n = this.props.component;
														return t().createElement(n, {
															ref: function (t) {
																return (e.typewriter = t);
															},
															className: "Typewriter",
															"data-testid": "typewriter-wrapper",
														});
													},
												},
											]) && s(n.prototype, a),
											Object.defineProperty(n, "prototype", { writable: !1 }),
											m
										);
									})(e.Component);
									v.defaultProps = { component: "div" };
									var m = v;
								})(),
								a.default
							);
						})()));
			},
		},
		t = {};
	function n(r) {
		var a = t[r];
		if (void 0 !== a) return a.exports;
		var o = (t[r] = { exports: {} });
		return e[r].call(o.exports, o, o.exports, n), o.exports;
	}
	(n.n = function (e) {
		var t =
			e && e.__esModule
				? function () {
						return e.default;
				  }
				: function () {
						return e;
				  };
		return n.d(t, { a: t }), t;
	}),
		(function () {
			var e,
				t = Object.getPrototypeOf
					? function (e) {
							return Object.getPrototypeOf(e);
					  }
					: function (e) {
							return e.__proto__;
					  };
			n.t = function (r, a) {
				if ((1 & a && (r = this(r)), 8 & a)) return r;
				if ("object" === typeof r && r) {
					if (4 & a && r.__esModule) return r;
					if (16 & a && "function" === typeof r.then) return r;
				}
				var o = Object.create(null);
				n.r(o);
				var i = {};
				e = e || [null, t({}), t([]), t(t)];
				for (
					var l = 2 & a && r;
					"object" == typeof l && !~e.indexOf(l);
					l = t(l)
				)
					Object.getOwnPropertyNames(l).forEach(function (e) {
						i[e] = function () {
							return r[e];
						};
					});
				return (
					(i.default = function () {
						return r;
					}),
					n.d(o, i),
					o
				);
			};
		})(),
		(n.d = function (e, t) {
			for (var r in t)
				n.o(t, r) &&
					!n.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(n.r = function (e) {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(n.p = "/portfolio/"),
		(function () {
			var e,
				t = n(791),
				r = n.t(t, 2),
				a = n(250);
			function o(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r;
			}
			function i(e, t) {
				if (e) {
					if ("string" === typeof e) return o(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return (
						"Object" === n && e.constructor && (n = e.constructor.name),
						"Map" === n || "Set" === n
							? Array.from(e)
							: "Arguments" === n ||
							  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
							? o(e, t)
							: void 0
					);
				}
			}
			function l(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return o(e);
					})(e) ||
					(function (e) {
						if (
							("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
							null != e["@@iterator"]
						)
							return Array.from(e);
					})(e) ||
					i(e) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function u(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function");
			}
			function s(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						"value" in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function c(e, t, n) {
				return (
					t && s(e.prototype, t),
					n && s(e, n),
					Object.defineProperty(e, "prototype", { writable: !1 }),
					e
				);
			}
			function f(e, t) {
				return (
					(f = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (e, t) {
								return (e.__proto__ = t), e;
						  }),
					f(e, t)
				);
			}
			function d(e, t) {
				if ("function" !== typeof t && null !== t)
					throw new TypeError(
						"Super expression must either be null or a function"
					);
				(e.prototype = Object.create(t && t.prototype, {
					constructor: { value: e, writable: !0, configurable: !0 },
				})),
					Object.defineProperty(e, "prototype", { writable: !1 }),
					t && f(e, t);
			}
			function p(e) {
				return (
					(p = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (e) {
								return e.__proto__ || Object.getPrototypeOf(e);
						  }),
					p(e)
				);
			}
			function h() {
				if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" === typeof Proxy) return !0;
				try {
					return (
						Boolean.prototype.valueOf.call(
							Reflect.construct(Boolean, [], function () {})
						),
						!0
					);
				} catch (e) {
					return !1;
				}
			}
			function v(e) {
				return (
					(v =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										"function" == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? "symbol"
										: typeof e;
							  }),
					v(e)
				);
			}
			function m(e, t) {
				if (t && ("object" === v(t) || "function" === typeof t)) return t;
				if (void 0 !== t)
					throw new TypeError(
						"Derived constructors may only return object or undefined"
					);
				return (function (e) {
					if (void 0 === e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					return e;
				})(e);
			}
			function y(e) {
				var t = h();
				return function () {
					var n,
						r = p(e);
					if (t) {
						var a = p(this).constructor;
						n = Reflect.construct(r, arguments, a);
					} else n = r.apply(this, arguments);
					return m(this, n);
				};
			}
			function g(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
								  e["@@iterator"];
						if (null != n) {
							var r,
								a,
								o = [],
								i = !0,
								l = !1;
							try {
								for (
									n = n.call(e);
									!(i = (r = n.next()).done) &&
									(o.push(r.value), !t || o.length !== t);
									i = !0
								);
							} catch (u) {
								(l = !0), (a = u);
							} finally {
								try {
									i || null == n.return || n.return();
								} finally {
									if (l) throw a;
								}
							}
							return o;
						}
					})(e, t) ||
					i(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function b(e, t, n) {
				return (
					(b = h()
						? Reflect.construct.bind()
						: function (e, t, n) {
								var r = [null];
								r.push.apply(r, t);
								var a = new (Function.bind.apply(e, r))();
								return n && f(a, n.prototype), a;
						  }),
					b.apply(null, arguments)
				);
			}
			function x(e) {
				var t = "function" === typeof Map ? new Map() : void 0;
				return (
					(x = function (e) {
						if (
							null === e ||
							((n = e),
							-1 === Function.toString.call(n).indexOf("[native code]"))
						)
							return e;
						var n;
						if ("function" !== typeof e)
							throw new TypeError(
								"Super expression must either be null or a function"
							);
						if ("undefined" !== typeof t) {
							if (t.has(e)) return t.get(e);
							t.set(e, r);
						}
						function r() {
							return b(e, arguments, p(this).constructor);
						}
						return (
							(r.prototype = Object.create(e.prototype, {
								constructor: {
									value: r,
									enumerable: !1,
									writable: !0,
									configurable: !0,
								},
							})),
							f(r, e)
						);
					}),
					x(e)
				);
			}
			function w() {
				return (
					(w = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
						  }),
					w.apply(this, arguments)
				);
			}
			!(function (e) {
				(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
			})(e || (e = {}));
			var k,
				S = "popstate";
			function E(e) {
				return { usr: e.state, key: e.key };
			}
			function C(e, t, n, r) {
				return (
					void 0 === n && (n = null),
					w(
						{
							pathname: "string" === typeof e ? e : e.pathname,
							search: "",
							hash: "",
						},
						"string" === typeof t ? P(t) : t,
						{
							state: n,
							key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
						}
					)
				);
			}
			function j(e) {
				var t = e.pathname,
					n = void 0 === t ? "/" : t,
					r = e.search,
					a = void 0 === r ? "" : r,
					o = e.hash,
					i = void 0 === o ? "" : o;
				return (
					a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
					i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
					n
				);
			}
			function P(e) {
				var t = {};
				if (e) {
					var n = e.indexOf("#");
					n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
					var r = e.indexOf("?");
					r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
						e && (t.pathname = e);
				}
				return t;
			}
			function T(e) {
				var t =
						"undefined" !== typeof window &&
						"undefined" !== typeof window.location &&
						"null" !== window.location.origin
							? window.location.origin
							: "unknown://unknown",
					n = "string" === typeof e ? e : j(e);
				return new URL(n, t);
			}
			function _(t, n, r, a) {
				void 0 === a && (a = {});
				var o = a,
					i = o.window,
					l = void 0 === i ? document.defaultView : i,
					u = o.v5Compat,
					s = void 0 !== u && u,
					c = l.history,
					f = e.Pop,
					d = null;
				function p() {
					(f = e.Pop), d && d({ action: f, location: h.location });
				}
				var h = {
					get action() {
						return f;
					},
					get location() {
						return t(l, c);
					},
					listen: function (e) {
						if (d)
							throw new Error("A history only accepts one active listener");
						return (
							l.addEventListener(S, p),
							(d = e),
							function () {
								l.removeEventListener(S, p), (d = null);
							}
						);
					},
					createHref: function (e) {
						return n(l, e);
					},
					encodeLocation: function (e) {
						var t = T(j(e));
						return w({}, e, {
							pathname: t.pathname,
							search: t.search,
							hash: t.hash,
						});
					},
					push: function (t, n) {
						f = e.Push;
						var a = C(h.location, t, n);
						r && r(a, t);
						var o = E(a),
							i = h.createHref(a);
						try {
							c.pushState(o, "", i);
						} catch (u) {
							l.location.assign(i);
						}
						s && d && d({ action: f, location: h.location });
					},
					replace: function (t, n) {
						f = e.Replace;
						var a = C(h.location, t, n);
						r && r(a, t);
						var o = E(a),
							i = h.createHref(a);
						c.replaceState(o, "", i),
							s && d && d({ action: f, location: h.location });
					},
					go: function (e) {
						return c.go(e);
					},
				};
				return h;
			}
			function N(e, t, n) {
				void 0 === n && (n = "/");
				var r = V(("string" === typeof t ? P(t) : t).pathname || "/", n);
				if (null == r) return null;
				var a = O(e);
				!(function (e) {
					e.sort(function (e, t) {
						return e.score !== t.score
							? t.score - e.score
							: (function (e, t) {
									var n =
										e.length === t.length &&
										e.slice(0, -1).every(function (e, n) {
											return e === t[n];
										});
									return n ? e[e.length - 1] - t[t.length - 1] : 0;
							  })(
									e.routesMeta.map(function (e) {
										return e.childrenIndex;
									}),
									t.routesMeta.map(function (e) {
										return e.childrenIndex;
									})
							  );
					});
				})(a);
				for (var o = null, i = 0; null == o && i < a.length; ++i)
					o = M(a[i], D(r));
				return o;
			}
			function O(e, t, n, r) {
				return (
					void 0 === t && (t = []),
					void 0 === n && (n = []),
					void 0 === r && (r = ""),
					e.forEach(function (e, a) {
						var o = {
							relativePath: e.path || "",
							caseSensitive: !0 === e.caseSensitive,
							childrenIndex: a,
							route: e,
						};
						o.relativePath.startsWith("/") &&
							(F(
								o.relativePath.startsWith(r),
								'Absolute route path "' +
									o.relativePath +
									'" nested under path "' +
									r +
									'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
							),
							(o.relativePath = o.relativePath.slice(r.length)));
						var i = W([r, o.relativePath]),
							l = n.concat(o);
						e.children &&
							e.children.length > 0 &&
							(F(
								!0 !== e.index,
								'Index routes must not have child routes. Please remove all child routes from route path "' +
									i +
									'".'
							),
							O(e.children, t, l, i)),
							(null != e.path || e.index) &&
								t.push({ path: i, score: A(i, e.index), routesMeta: l });
					}),
					t
				);
			}
			!(function (e) {
				(e.data = "data"),
					(e.deferred = "deferred"),
					(e.redirect = "redirect"),
					(e.error = "error");
			})(k || (k = {}));
			var R = /^:\w+$/,
				L = function (e) {
					return "*" === e;
				};
			function A(e, t) {
				var n = e.split("/"),
					r = n.length;
				return (
					n.some(L) && (r += -2),
					t && (r += 2),
					n
						.filter(function (e) {
							return !L(e);
						})
						.reduce(function (e, t) {
							return e + (R.test(t) ? 3 : "" === t ? 1 : 10);
						}, r)
				);
			}
			function M(e, t) {
				for (
					var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
					i < n.length;
					++i
				) {
					var l = n[i],
						u = i === n.length - 1,
						s = "/" === a ? t : t.slice(a.length) || "/",
						c = z(
							{ path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
							s
						);
					if (!c) return null;
					Object.assign(r, c.params);
					var f = l.route;
					o.push({
						params: r,
						pathname: W([a, c.pathname]),
						pathnameBase: $(W([a, c.pathnameBase])),
						route: f,
					}),
						"/" !== c.pathnameBase && (a = W([a, c.pathnameBase]));
				}
				return o;
			}
			function z(e, t) {
				"string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
				var n = (function (e, t, n) {
						void 0 === t && (t = !1);
						void 0 === n && (n = !0);
						I(
							"*" === e || !e.endsWith("*") || e.endsWith("/*"),
							'Route path "' +
								e +
								'" will be treated as if it were "' +
								e.replace(/\*$/, "/*") +
								'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
								e.replace(/\*$/, "/*") +
								'".'
						);
						var r = [],
							a =
								"^" +
								e
									.replace(/\/*\*?$/, "")
									.replace(/^\/*/, "/")
									.replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
									.replace(/:(\w+)/g, function (e, t) {
										return r.push(t), "([^\\/]+)";
									});
						e.endsWith("*")
							? (r.push("*"),
							  (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
							: n
							? (a += "\\/*$")
							: "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
						return [new RegExp(a, t ? void 0 : "i"), r];
					})(e.path, e.caseSensitive, e.end),
					r = g(n, 2),
					a = r[0],
					o = r[1],
					i = t.match(a);
				if (!i) return null;
				var l = i[0],
					u = l.replace(/(.)\/+$/, "$1"),
					s = i.slice(1);
				return {
					params: o.reduce(function (e, t, n) {
						if ("*" === t) {
							var r = s[n] || "";
							u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
						}
						return (
							(e[t] = (function (e, t) {
								try {
									return decodeURIComponent(e);
								} catch (n) {
									return (
										I(
											!1,
											'The value for the URL param "' +
												t +
												'" will not be decoded because the string "' +
												e +
												'" is a malformed URL segment. This is probably due to a bad percent encoding (' +
												n +
												")."
										),
										e
									);
								}
							})(s[n] || "", t)),
							e
						);
					}, {}),
					pathname: l,
					pathnameBase: u,
					pattern: e,
				};
			}
			function D(e) {
				try {
					return decodeURI(e);
				} catch (t) {
					return (
						I(
							!1,
							'The URL path "' +
								e +
								'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
								t +
								")."
						),
						e
					);
				}
			}
			function V(e, t) {
				if ("/" === t) return e;
				if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
				var n = t.endsWith("/") ? t.length - 1 : t.length,
					r = e.charAt(n);
				return r && "/" !== r ? null : e.slice(n) || "/";
			}
			function F(e, t) {
				if (!1 === e || null === e || "undefined" === typeof e)
					throw new Error(t);
			}
			function I(e, t) {
				if (!e) {
					"undefined" !== typeof console && console.warn(t);
					try {
						throw new Error(t);
					} catch (n) {}
				}
			}
			function U(e, t, n, r) {
				return (
					"Cannot include a '" +
					e +
					"' character in a manually specified `to." +
					t +
					"` field [" +
					JSON.stringify(r) +
					"].  Please separate it out to the `to." +
					n +
					'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
				);
			}
			function B(e) {
				return e.filter(function (e, t) {
					return 0 === t || (e.route.path && e.route.path.length > 0);
				});
			}
			function H(e, t, n, r) {
				var a;
				void 0 === r && (r = !1),
					"string" === typeof e
						? (a = P(e))
						: (F(
								!(a = w({}, e)).pathname || !a.pathname.includes("?"),
								U("?", "pathname", "search", a)
						  ),
						  F(
								!a.pathname || !a.pathname.includes("#"),
								U("#", "pathname", "hash", a)
						  ),
						  F(
								!a.search || !a.search.includes("#"),
								U("#", "search", "hash", a)
						  ));
				var o,
					i = "" === e || "" === a.pathname,
					l = i ? "/" : a.pathname;
				if (r || null == l) o = n;
				else {
					var u = t.length - 1;
					if (l.startsWith("..")) {
						for (var s = l.split("/"); ".." === s[0]; ) s.shift(), (u -= 1);
						a.pathname = s.join("/");
					}
					o = u >= 0 ? t[u] : "/";
				}
				var c = (function (e, t) {
						void 0 === t && (t = "/");
						var n = "string" === typeof e ? P(e) : e,
							r = n.pathname,
							a = n.search,
							o = void 0 === a ? "" : a,
							i = n.hash,
							l = void 0 === i ? "" : i,
							u = r
								? r.startsWith("/")
									? r
									: (function (e, t) {
											var n = t.replace(/\/+$/, "").split("/");
											return (
												e.split("/").forEach(function (e) {
													".." === e
														? n.length > 1 && n.pop()
														: "." !== e && n.push(e);
												}),
												n.length > 1 ? n.join("/") : "/"
											);
									  })(r, t)
								: t;
						return { pathname: u, search: Q(o), hash: X(l) };
					})(a, o),
					f = l && "/" !== l && l.endsWith("/"),
					d = (i || "." === l) && n.endsWith("/");
				return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
			}
			var W = function (e) {
					return e.join("/").replace(/\/\/+/g, "/");
				},
				$ = function (e) {
					return e.replace(/\/+$/, "").replace(/^\/*/, "/");
				},
				Q = function (e) {
					return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
				},
				X = function (e) {
					return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
				},
				q = (function (e) {
					d(n, e);
					var t = y(n);
					function n() {
						return u(this, n), t.apply(this, arguments);
					}
					return c(n);
				})(x(Error));
			var Y = c(function e(t, n, r) {
				u(this, e),
					(this.status = t),
					(this.statusText = n || ""),
					(this.data = r);
			});
			function G(e) {
				return e instanceof Y;
			}
			"undefined" !== typeof window &&
				"undefined" !== typeof window.document &&
				window.document.createElement;
			var K = new Set(["POST", "PUT", "PATCH", "DELETE"]);
			new Set(["GET", "HEAD"].concat(l(K)));
			function Z() {
				return (
					(Z = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
						  }),
					Z.apply(this, arguments)
				);
			}
			var J =
					"function" === typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e === 1 / t)) ||
									(e !== e && t !== t)
								);
						  },
				ee = t.useState,
				te = t.useEffect,
				ne = t.useLayoutEffect,
				re = t.useDebugValue;
			function ae(e) {
				var t = e.getSnapshot,
					n = e.value;
				try {
					var r = t();
					return !J(n, r);
				} catch (a) {
					return !0;
				}
			}
			"undefined" === typeof window ||
				"undefined" === typeof window.document ||
				window.document.createElement,
				r.useSyncExternalStore;
			var oe = t.createContext(null);
			var ie = t.createContext(null);
			var le = t.createContext(null);
			var ue = t.createContext(null);
			var se = t.createContext(null);
			var ce = t.createContext(null);
			var fe = t.createContext({ outlet: null, matches: [] });
			var de = t.createContext(null);
			function pe() {
				return null != t.useContext(ce);
			}
			function he() {
				return pe() || F(!1), t.useContext(ce).location;
			}
			function ve() {
				pe() || F(!1);
				var e = t.useContext(se),
					n = e.basename,
					r = e.navigator,
					a = t.useContext(fe).matches,
					o = he().pathname,
					i = JSON.stringify(
						B(a).map(function (e) {
							return e.pathnameBase;
						})
					),
					l = t.useRef(!1);
				return (
					t.useEffect(function () {
						l.current = !0;
					}),
					t.useCallback(
						function (e, t) {
							if ((void 0 === t && (t = {}), l.current))
								if ("number" !== typeof e) {
									var a = H(e, JSON.parse(i), o, "path" === t.relative);
									"/" !== n &&
										(a.pathname = "/" === a.pathname ? n : W([n, a.pathname])),
										(t.replace ? r.replace : r.push)(a, t.state, t);
								} else r.go(e);
						},
						[n, r, i, o]
					)
				);
			}
			function me(e, n) {
				var r = (void 0 === n ? {} : n).relative,
					a = t.useContext(fe).matches,
					o = he().pathname,
					i = JSON.stringify(
						B(a).map(function (e) {
							return e.pathnameBase;
						})
					);
				return t.useMemo(
					function () {
						return H(e, JSON.parse(i), o, "path" === r);
					},
					[e, i, o, r]
				);
			}
			function ye() {
				var e = (function () {
						var e,
							n = t.useContext(de),
							r = Se(be.UseRouteError),
							a = t.useContext(fe),
							o = a.matches[a.matches.length - 1];
						if (n) return n;
						return (
							a || F(!1),
							!o.route.id && F(!1),
							null == (e = r.errors) ? void 0 : e[o.route.id]
						);
					})(),
					n = G(e)
						? e.status + " " + e.statusText
						: e instanceof Error
						? e.message
						: JSON.stringify(e),
					r = e instanceof Error ? e.stack : null,
					a = "rgba(200,200,200, 0.5)",
					o = { padding: "0.5rem", backgroundColor: a },
					i = { padding: "2px 4px", backgroundColor: a };
				return t.createElement(
					t.Fragment,
					null,
					t.createElement("h2", null, "Unhandled Thrown Error!"),
					t.createElement("h3", { style: { fontStyle: "italic" } }, n),
					r ? t.createElement("pre", { style: o }, r) : null,
					t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
					t.createElement(
						"p",
						null,
						"You can provide a way better UX than this when your app throws errors by providing your own\xa0",
						t.createElement("code", { style: i }, "errorElement"),
						" props on\xa0",
						t.createElement("code", { style: i }, "<Route>")
					)
				);
			}
			var ge,
				be,
				xe = (function (e) {
					d(r, e);
					var n = y(r);
					function r(e) {
						var t;
						return (
							u(this, r),
							((t = n.call(this, e)).state = {
								location: e.location,
								error: e.error,
							}),
							t
						);
					}
					return (
						c(
							r,
							[
								{
									key: "componentDidCatch",
									value: function (e, t) {
										console.error(
											"React Router caught the following error during render",
											e,
											t
										);
									},
								},
								{
									key: "render",
									value: function () {
										return this.state.error
											? t.createElement(de.Provider, {
													value: this.state.error,
													children: this.props.component,
											  })
											: this.props.children;
									},
								},
							],
							[
								{
									key: "getDerivedStateFromError",
									value: function (e) {
										return { error: e };
									},
								},
								{
									key: "getDerivedStateFromProps",
									value: function (e, t) {
										return t.location !== e.location
											? { error: e.error, location: e.location }
											: { error: e.error || t.error, location: t.location };
									},
								},
							]
						),
						r
					);
				})(t.Component);
			function we(e) {
				var n = e.routeContext,
					r = e.match,
					a = e.children,
					o = t.useContext(oe);
				return (
					o &&
						r.route.errorElement &&
						(o._deepestRenderedBoundaryId = r.route.id),
					t.createElement(fe.Provider, { value: n }, a)
				);
			}
			function ke(e, n, r) {
				if ((void 0 === n && (n = []), null == e)) {
					if (null == r || !r.errors) return null;
					e = r.matches;
				}
				var a = e,
					o = null == r ? void 0 : r.errors;
				if (null != o) {
					var i = a.findIndex(function (e) {
						return e.route.id && (null == o ? void 0 : o[e.route.id]);
					});
					i >= 0 || F(!1), (a = a.slice(0, Math.min(a.length, i + 1)));
				}
				return a.reduceRight(function (e, i, l) {
					var u = i.route.id ? (null == o ? void 0 : o[i.route.id]) : null,
						s = r ? i.route.errorElement || t.createElement(ye, null) : null,
						c = function () {
							return t.createElement(
								we,
								{
									match: i,
									routeContext: {
										outlet: e,
										matches: n.concat(a.slice(0, l + 1)),
									},
								},
								u ? s : void 0 !== i.route.element ? i.route.element : e
							);
						};
					return r && (i.route.errorElement || 0 === l)
						? t.createElement(xe, {
								location: r.location,
								component: s,
								error: u,
								children: c(),
						  })
						: c();
				}, null);
			}
			function Se(e) {
				var n = t.useContext(le);
				return n || F(!1), n;
			}
			!(function (e) {
				e.UseRevalidator = "useRevalidator";
			})(ge || (ge = {})),
				(function (e) {
					(e.UseLoaderData = "useLoaderData"),
						(e.UseActionData = "useActionData"),
						(e.UseRouteError = "useRouteError"),
						(e.UseNavigation = "useNavigation"),
						(e.UseRouteLoaderData = "useRouteLoaderData"),
						(e.UseMatches = "useMatches"),
						(e.UseRevalidator = "useRevalidator");
				})(be || (be = {}));
			var Ee;
			function Ce(e) {
				F(!1);
			}
			function je(n) {
				var r = n.basename,
					a = void 0 === r ? "/" : r,
					o = n.children,
					i = void 0 === o ? null : o,
					l = n.location,
					u = n.navigationType,
					s = void 0 === u ? e.Pop : u,
					c = n.navigator,
					f = n.static,
					d = void 0 !== f && f;
				pe() && F(!1);
				var p = a.replace(/^\/*/, "/"),
					h = t.useMemo(
						function () {
							return { basename: p, navigator: c, static: d };
						},
						[p, c, d]
					);
				"string" === typeof l && (l = P(l));
				var v = l,
					m = v.pathname,
					y = void 0 === m ? "/" : m,
					g = v.search,
					b = void 0 === g ? "" : g,
					x = v.hash,
					w = void 0 === x ? "" : x,
					k = v.state,
					S = void 0 === k ? null : k,
					E = v.key,
					C = void 0 === E ? "default" : E,
					j = t.useMemo(
						function () {
							var e = V(y, p);
							return null == e
								? null
								: { pathname: e, search: b, hash: w, state: S, key: C };
						},
						[p, y, b, w, S, C]
					);
				return null == j
					? null
					: t.createElement(
							se.Provider,
							{ value: h },
							t.createElement(ce.Provider, {
								children: i,
								value: { location: j, navigationType: s },
							})
					  );
			}
			function Pe(n) {
				var r = n.children,
					a = n.location,
					o = t.useContext(ie);
				return (function (n, r) {
					pe() || F(!1);
					var a,
						o = t.useContext(le),
						i = t.useContext(fe).matches,
						l = i[i.length - 1],
						u = l ? l.params : {},
						s = (l && l.pathname, l ? l.pathnameBase : "/"),
						c = (l && l.route, he());
					if (r) {
						var f,
							d = "string" === typeof r ? P(r) : r;
						"/" === s ||
							(null == (f = d.pathname) ? void 0 : f.startsWith(s)) ||
							F(!1),
							(a = d);
					} else a = c;
					var p = a.pathname || "/",
						h = N(n, { pathname: "/" === s ? p : p.slice(s.length) || "/" }),
						v = ke(
							h &&
								h.map(function (e) {
									return Object.assign({}, e, {
										params: Object.assign({}, u, e.params),
										pathname: W([s, e.pathname]),
										pathnameBase:
											"/" === e.pathnameBase ? s : W([s, e.pathnameBase]),
									});
								}),
							i,
							o || void 0
						);
					return r && v
						? t.createElement(
								ce.Provider,
								{
									value: {
										location: Z(
											{
												pathname: "/",
												search: "",
												hash: "",
												state: null,
												key: "default",
											},
											a
										),
										navigationType: e.Pop,
									},
								},
								v
						  )
						: v;
				})(o && !r ? o.router.routes : _e(r), a);
			}
			!(function (e) {
				(e[(e.pending = 0)] = "pending"),
					(e[(e.success = 1)] = "success"),
					(e[(e.error = 2)] = "error");
			})(Ee || (Ee = {}));
			var Te = new Promise(function () {});
			t.Component;
			function _e(e, n) {
				void 0 === n && (n = []);
				var r = [];
				return (
					t.Children.forEach(e, function (e, a) {
						if (t.isValidElement(e))
							if (e.type !== t.Fragment) {
								e.type !== Ce && F(!1),
									e.props.index && e.props.children && F(!1);
								var o = [].concat(l(n), [a]),
									i = {
										id: e.props.id || o.join("-"),
										caseSensitive: e.props.caseSensitive,
										element: e.props.element,
										index: e.props.index,
										path: e.props.path,
										loader: e.props.loader,
										action: e.props.action,
										errorElement: e.props.errorElement,
										hasErrorBoundary: null != e.props.errorElement,
										shouldRevalidate: e.props.shouldRevalidate,
										handle: e.props.handle,
									};
								e.props.children && (i.children = _e(e.props.children, o)),
									r.push(i);
							} else r.push.apply(r, _e(e.props.children, n));
					}),
					r
				);
			}
			var Ne = function () {
					var e = he().pathname;
					return (
						(0, t.useEffect)(
							function () {
								window.scrollTo(0, 0);
							},
							[e]
						),
						null
					);
				},
				Oe = n.p + "static/media/logo.54834559af14d9e5b087.png",
				Re = {
					color: void 0,
					size: void 0,
					className: void 0,
					style: void 0,
					attr: void 0,
				},
				Le = t.createContext && t.createContext(Re),
				Ae = function () {
					return (
						(Ae =
							Object.assign ||
							function (e) {
								for (var t, n = 1, r = arguments.length; n < r; n++)
									for (var a in (t = arguments[n]))
										Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
								return e;
							}),
						Ae.apply(this, arguments)
					);
				},
				Me = function (e, t) {
					var n = {};
					for (var r in e)
						Object.prototype.hasOwnProperty.call(e, r) &&
							t.indexOf(r) < 0 &&
							(n[r] = e[r]);
					if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
							t.indexOf(r[a]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
								(n[r[a]] = e[r[a]]);
					}
					return n;
				};
			function ze(e) {
				return (
					e &&
					e.map(function (e, n) {
						return t.createElement(e.tag, Ae({ key: n }, e.attr), ze(e.child));
					})
				);
			}
			function De(e) {
				return function (n) {
					return t.createElement(
						Ve,
						Ae({ attr: Ae({}, e.attr) }, n),
						ze(e.child)
					);
				};
			}
			function Ve(e) {
				var n = function (n) {
					var r,
						a = e.attr,
						o = e.size,
						i = e.title,
						l = Me(e, ["attr", "size", "title"]),
						u = o || n.size || "1em";
					return (
						n.className && (r = n.className),
						e.className && (r = (r ? r + " " : "") + e.className),
						t.createElement(
							"svg",
							Ae(
								{
									stroke: "currentColor",
									fill: "currentColor",
									strokeWidth: "0",
								},
								n.attr,
								a,
								l,
								{
									className: r,
									style: Ae(
										Ae({ color: e.color || n.color }, n.style),
										e.style
									),
									height: u,
									width: u,
									xmlns: "http://www.w3.org/2000/svg",
								}
							),
							i && t.createElement("title", null, i),
							e.children
						)
					);
				};
				return void 0 !== Le
					? t.createElement(Le.Consumer, null, function (e) {
							return n(e);
					  })
					: n(Re);
			}
			function Fe(e) {
				return De({
					tag: "svg",
					attr: { viewBox: "0 0 496 512" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
							},
						},
					],
				})(e);
			}
			function Ie(e) {
				return De({
					tag: "svg",
					attr: { viewBox: "0 0 448 512" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
							},
						},
					],
				})(e);
			}
			function Ue(e) {
				return De({
					tag: "svg",
					attr: { viewBox: "0 0 448 512" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
							},
						},
					],
				})(e);
			}
			function Be() {
				return (
					(Be = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
						  }),
					Be.apply(this, arguments)
				);
			}
			function He(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = {},
					o = Object.keys(e);
				for (r = 0; r < o.length; r++)
					(n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
				return a;
			}
			var We = [
				"onClick",
				"relative",
				"reloadDocument",
				"replace",
				"state",
				"target",
				"to",
				"preventScrollReset",
			];
			function $e(e) {
				var n,
					r = e.basename,
					a = e.children,
					o = e.window,
					i = t.useRef();
				null == i.current &&
					(i.current =
						(void 0 === (n = { window: o, v5Compat: !0 }) && (n = {}),
						_(
							function (e, t) {
								var n = e.location;
								return C(
									"",
									{ pathname: n.pathname, search: n.search, hash: n.hash },
									(t.state && t.state.usr) || null,
									(t.state && t.state.key) || "default"
								);
							},
							function (e, t) {
								return "string" === typeof t ? t : j(t);
							},
							null,
							n
						)));
				var l = i.current,
					u = g(t.useState({ action: l.action, location: l.location }), 2),
					s = u[0],
					c = u[1];
				return (
					t.useLayoutEffect(
						function () {
							return l.listen(c);
						},
						[l]
					),
					t.createElement(je, {
						basename: r,
						children: a,
						location: s.location,
						navigationType: s.action,
						navigator: l,
					})
				);
			}
			var Qe = t.forwardRef(function (e, n) {
				var r = e.onClick,
					a = e.relative,
					o = e.reloadDocument,
					i = e.replace,
					l = e.state,
					u = e.target,
					s = e.to,
					c = e.preventScrollReset,
					f = He(e, We),
					d = (function (e, n) {
						var r = (void 0 === n ? {} : n).relative;
						pe() || F(!1);
						var a = t.useContext(se),
							o = a.basename,
							i = a.navigator,
							l = me(e, { relative: r }),
							u = l.hash,
							s = l.pathname,
							c = l.search,
							f = s;
						return (
							"/" !== o && (f = "/" === s ? o : W([o, s])),
							i.createHref({ pathname: f, search: c, hash: u })
						);
					})(s, { relative: a }),
					p = (function (e, n) {
						var r = void 0 === n ? {} : n,
							a = r.target,
							o = r.replace,
							i = r.state,
							l = r.preventScrollReset,
							u = r.relative,
							s = ve(),
							c = he(),
							f = me(e, { relative: u });
						return t.useCallback(
							function (t) {
								if (
									(function (e, t) {
										return (
											0 === e.button &&
											(!t || "_self" === t) &&
											!(function (e) {
												return !!(
													e.metaKey ||
													e.altKey ||
													e.ctrlKey ||
													e.shiftKey
												);
											})(e)
										);
									})(t, a)
								) {
									t.preventDefault();
									var n = void 0 !== o ? o : j(c) === j(f);
									s(e, {
										replace: n,
										state: i,
										preventScrollReset: l,
										relative: u,
									});
								}
							},
							[c, s, f, o, i, a, e, l, u]
						);
					})(s, {
						replace: i,
						state: l,
						target: u,
						preventScrollReset: c,
						relative: a,
					});
				return t.createElement(
					"a",
					Be({}, f, {
						href: d,
						onClick: o
							? r
							: function (e) {
									r && r(e), e.defaultPrevented || p(e);
							  },
						ref: n,
						target: u,
					})
				);
			});
			var Xe, qe;
			(function (e) {
				(e.UseScrollRestoration = "useScrollRestoration"),
					(e.UseSubmitImpl = "useSubmitImpl"),
					(e.UseFetcher = "useFetcher");
			})(Xe || (Xe = {})),
				(function (e) {
					(e.UseFetchers = "useFetchers"),
						(e.UseScrollRestoration = "useScrollRestoration");
				})(qe || (qe = {}));
			var Ye = n(184),
				Ge = function () {
					var e = g((0, t.useState)(!1), 2),
						n = e[0],
						r = e[1];
					return (0, Ye.jsxs)("div", {
						className:
							"w-full h-[85px] flex justify-between items-center pr-4 pl-3 bg-[#0e1111d3] text-gray-300 shadow-md shadow-[#040c16]",
						children: [
							(0, Ye.jsx)("div", {
								className:
									"h-[70px] w-[70px] p-[5px] rounded-md flex justify-center hover:shadow-md hover:shadow-[#040c16]",
								children: (0, Ye.jsx)(Qe, {
									to: "/portfolio",
									children: (0, Ye.jsx)("img", {
										src: Oe,
										className: "cursor-pointer",
										alt: "Logo Image",
										style: { width: "65px" },
									}),
								}),
							}),
							(0, Ye.jsx)("div", {
								children: (0, Ye.jsxs)("ul", {
									className: "hidden md:flex",
									children: [
										(0, Ye.jsx)(Qe, {
											to: "/portfolio",
											mooth: !0,
											duration: 500,
											children: (0, Ye.jsx)("li", {
												className: "hover:font-bold",
												children: " Accueil ",
											}),
										}),
										(0, Ye.jsx)(Qe, {
											to: "/portfolio/profil",
											mooth: !0,
											duration: 500,
											children: (0, Ye.jsx)("li", {
												className: "hover:font-bold",
												children: " Profil ",
											}),
										}),
										(0, Ye.jsx)(Qe, {
											to: "/portfolio/skills",
											mooth: !0,
											duration: 500,
											children: (0, Ye.jsx)("li", {
												className: "hover:font-bold",
												children: " Comp\xe9tences ",
											}),
										}),
										(0, Ye.jsx)(Qe, {
											to: "/portfolio/work",
											mooth: !0,
											duration: 500,
											children: (0, Ye.jsx)("li", {
												className: "hover:font-bold",
												children: " Projets ",
											}),
										}),
										(0, Ye.jsx)(Qe, {
											to: "/portfolio/contact",
											mooth: !0,
											duration: 500,
											children: (0, Ye.jsx)("li", {
												className: "hover:font-bold",
												children: " Contact ",
											}),
										}),
									],
								}),
							}),
							(0, Ye.jsx)("div", {
								onClick: function () {
									return r(!n);
								},
								className: "md:hidden z-10",
								children: (0, Ye.jsx)(Qe, {
									to: "/portfolio/menu",
									mooth: !0,
									duration: 500,
									className:
										"text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white",
									children: (0, Ye.jsx)(Ue, {}),
								}),
							}),
						],
					});
				};
			function Ke(e) {
				return De({
					tag: "svg",
					attr: { viewBox: "0 0 20 20", fill: "currentColor" },
					child: [
						{
							tag: "path",
							attr: {
								fillRule: "evenodd",
								d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
								clipRule: "evenodd",
							},
						},
					],
				})(e);
			}
			function Ze(e) {
				return De({
					tag: "svg",
					attr: { viewBox: "0 0 20 20", fill: "currentColor" },
					child: [
						{
							tag: "path",
							attr: {
								fillRule: "evenodd",
								d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
								clipRule: "evenodd",
							},
						},
					],
				})(e);
			}
			function Je(e) {
				return De({
					tag: "svg",
					attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
					child: [
						{
							tag: "path",
							attr: {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: "2",
								d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
							},
						},
					],
				})(e);
			}
			function et(e) {
				return De({
					tag: "svg",
					attr: { viewBox: "0 0 1024 1024" },
					child: [
						{
							tag: "path",
							attr: {
								d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0z",
							},
						},
					],
				})(e);
			}
			var tt = function () {
					return (0, Ye.jsx)("div", {
						className: "hidden lg:flex fixed flex-col top-[35%] left-0",
						children: (0, Ye.jsxs)("ul", {
							children: [
								(0, Ye.jsx)("li", {
									className:
										"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] ",
									children: (0, Ye.jsxs)("a", {
										className:
											"flex justify-between items-center w-full text-gray-300",
										href: "https://www.linkedin.com/in/thibaut-raimond-0a46791ab/",
										target: "_blank",
										rel: "noreferrer",
										children: ["Linkedin ", (0, Ye.jsx)(Ie, { size: 30 })],
									}),
								}),
								(0, Ye.jsx)("li", {
									className:
										"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d333b] ",
									children: (0, Ye.jsxs)("a", {
										className:
											"flex justify-between items-center w-full text-gray-300",
										href: "https://github.com/ThibautRaimond",
										target: "_blank",
										rel: "noreferrer",
										children: ["Github ", (0, Ye.jsx)(Fe, { size: 30 })],
									}),
								}),
								(0, Ye.jsx)("li", {
									className:
										"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#347d39] ",
									children: (0, Ye.jsxs)("a", {
										className:
											"flex justify-between items-center w-full text-gray-300",
										href: "https://cvthibautraimond.netlify.app/",
										target: "_blank",
										rel: "noreferrer",
										children: ["CV ", (0, Ye.jsx)(et, { size: 30 })],
									}),
								}),
								(0, Ye.jsxs)("li", {
									className:
										"w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ea4335]",
									children: [
										(0, Ye.jsxs)(Qe, {
											className:
												"flex justify-between items-center w-full text-gray-300",
											to: "/portfolio/contact",
											mooth: !0,
											duration: 500,
											children: [
												" ",
												"Email",
												" ",
												(0, Ye.jsx)(Je, { size: 30 }),
											],
										}),
										" ",
									],
								}),
							],
						}),
					});
				},
				nt = function (e) {
					var t = e.children;
					return (0, Ye.jsxs)(Ye.Fragment, {
						children: [
							(0, Ye.jsx)(Ge, {}),
							(0, Ye.jsx)(tt, {}),
							(0, Ye.jsx)("main", { children: t }),
						],
					});
				};
			function rt(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (e[t] = n),
					e
				);
			}
			function at(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function ot(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? at(Object(n), !0).forEach(function (t) {
								rt(e, t, n[t]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
						: at(Object(n)).forEach(function (t) {
								Object.defineProperty(
									e,
									t,
									Object.getOwnPropertyDescriptor(n, t)
								);
						  });
				}
				return e;
			}
			var it = (0, t.createContext)({
					transformPagePoint: function (e) {
						return e;
					},
					isStatic: !1,
					reducedMotion: "never",
				}),
				lt = (0, t.createContext)({});
			var ut = (0, t.createContext)(null),
				st = "undefined" !== typeof document,
				ct = st ? t.useLayoutEffect : t.useEffect,
				ft = (0, t.createContext)({ strict: !1 });
			function dt(e, n, r, a) {
				var o = (0, t.useContext)(lt).visualElement,
					i = (0, t.useContext)(ft),
					l = (0, t.useContext)(ut),
					u = (0, t.useContext)(it).reducedMotion,
					s = (0, t.useRef)();
				(a = a || i.renderer),
					!s.current &&
						a &&
						(s.current = a(e, {
							visualState: n,
							parent: o,
							props: r,
							presenceId: l ? l.id : void 0,
							blockInitialAnimation: !!l && !1 === l.initial,
							reducedMotionConfig: u,
						}));
				var c = s.current;
				return (
					ct(function () {
						c && c.render();
					}),
					(0, t.useEffect)(function () {
						c && c.animationState && c.animationState.animateChanges();
					}),
					ct(function () {
						return function () {
							return c && c.notify("Unmount");
						};
					}, []),
					c
				);
			}
			function pt(e) {
				return (
					"object" === typeof e &&
					Object.prototype.hasOwnProperty.call(e, "current")
				);
			}
			function ht(e) {
				return "string" === typeof e || Array.isArray(e);
			}
			function vt(e) {
				return "object" === typeof e && "function" === typeof e.start;
			}
			var mt = [
				"initial",
				"animate",
				"exit",
				"whileHover",
				"whileDrag",
				"whileTap",
				"whileFocus",
				"whileInView",
			];
			function yt(e) {
				return (
					vt(e.animate) ||
					mt.some(function (t) {
						return ht(e[t]);
					})
				);
			}
			function gt(e) {
				return Boolean(yt(e) || e.variants);
			}
			function bt(e) {
				var n = (function (e, t) {
						if (yt(e)) {
							var n = e.initial,
								r = e.animate;
							return {
								initial: !1 === n || ht(n) ? n : void 0,
								animate: ht(r) ? r : void 0,
							};
						}
						return !1 !== e.inherit ? t : {};
					})(e, (0, t.useContext)(lt)),
					r = n.initial,
					a = n.animate;
				return (0, t.useMemo)(
					function () {
						return { initial: r, animate: a };
					},
					[xt(r), xt(a)]
				);
			}
			function xt(e) {
				return Array.isArray(e) ? e.join(" ") : e;
			}
			var wt = function (e) {
					return {
						isEnabled: function (t) {
							return e.some(function (e) {
								return !!t[e];
							});
						},
					};
				},
				kt = {
					measureLayout: wt(["layout", "layoutId", "drag"]),
					animation: wt([
						"animate",
						"exit",
						"variants",
						"whileHover",
						"whileTap",
						"whileFocus",
						"whileDrag",
						"whileInView",
					]),
					exit: wt(["exit"]),
					drag: wt(["drag", "dragControls"]),
					focus: wt(["whileFocus"]),
					hover: wt(["whileHover", "onHoverStart", "onHoverEnd"]),
					tap: wt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
					pan: wt(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
					inView: wt(["whileInView", "onViewportEnter", "onViewportLeave"]),
				};
			function St(e) {
				var n = (0, t.useRef)(null);
				return null === n.current && (n.current = e()), n.current;
			}
			var Et = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
				Ct = 1;
			var jt = (0, t.createContext)({}),
				Pt = (function (e) {
					d(n, e);
					var t = y(n);
					function n() {
						return u(this, n), t.apply(this, arguments);
					}
					return (
						c(n, [
							{
								key: "getSnapshotBeforeUpdate",
								value: function () {
									var e = this.props,
										t = e.visualElement,
										n = e.props;
									return t && t.setProps(n), null;
								},
							},
							{ key: "componentDidUpdate", value: function () {} },
							{
								key: "render",
								value: function () {
									return this.props.children;
								},
							},
						]),
						n
					);
				})(t.Component),
				Tt = (0, t.createContext)({}),
				_t = Symbol.for("motionComponentSymbol");
			function Nt(e) {
				var n = e.preloadedFeatures,
					r = e.createVisualElement,
					a = e.projectionNodeConstructor,
					o = e.useRender,
					i = e.useVisualState,
					l = e.Component;
				n &&
					(function (e) {
						for (var t in e)
							"projectionNodeConstructor" === t
								? (kt.projectionNodeConstructor = e[t])
								: (kt[t].Component = e[t]);
					})(n);
				var u = (0, t.forwardRef)(function (e, u) {
					var s = ot(
							ot(ot({}, (0, t.useContext)(it)), e),
							{},
							{ layoutId: Ot(e) }
						),
						c = s.isStatic,
						f = null,
						d = bt(e),
						p = c
							? void 0
							: St(function () {
									if (Et.hasEverUpdated) return Ct++;
							  }),
						h = i(e, c);
					if (!c && st) {
						d.visualElement = dt(l, h, s, r);
						var v = (0, t.useContext)(ft).strict,
							m = (0, t.useContext)(Tt);
						d.visualElement &&
							(f = d.visualElement.loadFeatures(
								s,
								v,
								n,
								p,
								a || kt.projectionNodeConstructor,
								m
							));
					}
					return t.createElement(
						Pt,
						{ visualElement: d.visualElement, props: s },
						f,
						t.createElement(
							lt.Provider,
							{ value: d },
							o(
								l,
								e,
								p,
								(function (e, n, r) {
									return (0, t.useCallback)(
										function (t) {
											t && e.mount && e.mount(t),
												n && (t ? n.mount(t) : n.unmount()),
												r &&
													("function" === typeof r
														? r(t)
														: pt(r) && (r.current = t));
										},
										[n]
									);
								})(h, d.visualElement, u),
								h,
								c,
								d.visualElement
							)
						)
					);
				});
				return (u[_t] = l), u;
			}
			function Ot(e) {
				var n = e.layoutId,
					r = (0, t.useContext)(jt).id;
				return r && void 0 !== n ? r + "-" + n : n;
			}
			function Rt(e) {
				function t(t) {
					var n =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return Nt(e(t, n));
				}
				if ("undefined" === typeof Proxy) return t;
				var n = new Map();
				return new Proxy(t, {
					get: function (e, r) {
						return n.has(r) || n.set(r, t(r)), n.get(r);
					},
				});
			}
			var Lt = [
				"animate",
				"circle",
				"defs",
				"desc",
				"ellipse",
				"g",
				"image",
				"line",
				"filter",
				"marker",
				"mask",
				"metadata",
				"path",
				"pattern",
				"polygon",
				"polyline",
				"rect",
				"stop",
				"svg",
				"switch",
				"symbol",
				"text",
				"tspan",
				"use",
				"view",
			];
			function At(e) {
				return (
					"string" === typeof e &&
					!e.includes("-") &&
					!!(Lt.indexOf(e) > -1 || /[A-Z]/.test(e))
				);
			}
			var Mt = {};
			var zt = [
					"transformPerspective",
					"x",
					"y",
					"z",
					"translateX",
					"translateY",
					"translateZ",
					"scale",
					"scaleX",
					"scaleY",
					"rotate",
					"rotateX",
					"rotateY",
					"rotateZ",
					"skew",
					"skewX",
					"skewY",
				],
				Dt = new Set(zt);
			function Vt(e, t) {
				var n = t.layout,
					r = t.layoutId;
				return (
					Dt.has(e) ||
					e.startsWith("origin") ||
					((n || void 0 !== r) && (!!Mt[e] || "opacity" === e))
				);
			}
			var Ft = function (e) {
				return !!(null === e || void 0 === e ? void 0 : e.getVelocity);
			};
			function It(e, t) {
				var n =
					("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
					e["@@iterator"];
				if (!n) {
					if (
						Array.isArray(e) ||
						(n = i(e)) ||
						(t && e && "number" === typeof e.length)
					) {
						n && (e = n);
						var r = 0,
							a = function () {};
						return {
							s: a,
							n: function () {
								return r >= e.length
									? { done: !0 }
									: { done: !1, value: e[r++] };
							},
							e: function (e) {
								throw e;
							},
							f: a,
						};
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}
				var o,
					l = !0,
					u = !1;
				return {
					s: function () {
						n = n.call(e);
					},
					n: function () {
						var e = n.next();
						return (l = e.done), e;
					},
					e: function (e) {
						(u = !0), (o = e);
					},
					f: function () {
						try {
							l || null == n.return || n.return();
						} finally {
							if (u) throw o;
						}
					},
				};
			}
			var Ut = {
					x: "translateX",
					y: "translateY",
					z: "translateZ",
					transformPerspective: "perspective",
				},
				Bt = function (e, t) {
					return zt.indexOf(e) - zt.indexOf(t);
				};
			function Ht(e) {
				return e.startsWith("--");
			}
			var Wt = function (e, t) {
					return t && "number" === typeof e ? t.transform(e) : e;
				},
				$t = function (e, t) {
					return function (n) {
						return Math.max(Math.min(n, t), e);
					};
				},
				Qt = function (e) {
					return e % 1 ? Number(e.toFixed(5)) : e;
				},
				Xt = /(-)?([\d]*\.?[\d])+/g,
				qt =
					/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
				Yt =
					/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
			function Gt(e) {
				return "string" === typeof e;
			}
			var Kt = function (e) {
					return {
						test: function (t) {
							return Gt(t) && t.endsWith(e) && 1 === t.split(" ").length;
						},
						parse: parseFloat,
						transform: function (t) {
							return "".concat(t).concat(e);
						},
					};
				},
				Zt = Kt("deg"),
				Jt = Kt("%"),
				en = Kt("px"),
				tn = Kt("vh"),
				nn = Kt("vw"),
				rn = Object.assign(Object.assign({}, Jt), {
					parse: function (e) {
						return Jt.parse(e) / 100;
					},
					transform: function (e) {
						return Jt.transform(100 * e);
					},
				}),
				an = {
					test: function (e) {
						return "number" === typeof e;
					},
					parse: parseFloat,
					transform: function (e) {
						return e;
					},
				},
				on = Object.assign(Object.assign({}, an), { transform: $t(0, 1) }),
				ln = Object.assign(Object.assign({}, an), { default: 1 }),
				un = ot(ot({}, an), {}, { transform: Math.round }),
				sn = {
					borderWidth: en,
					borderTopWidth: en,
					borderRightWidth: en,
					borderBottomWidth: en,
					borderLeftWidth: en,
					borderRadius: en,
					radius: en,
					borderTopLeftRadius: en,
					borderTopRightRadius: en,
					borderBottomRightRadius: en,
					borderBottomLeftRadius: en,
					width: en,
					maxWidth: en,
					height: en,
					maxHeight: en,
					size: en,
					top: en,
					right: en,
					bottom: en,
					left: en,
					padding: en,
					paddingTop: en,
					paddingRight: en,
					paddingBottom: en,
					paddingLeft: en,
					margin: en,
					marginTop: en,
					marginRight: en,
					marginBottom: en,
					marginLeft: en,
					rotate: Zt,
					rotateX: Zt,
					rotateY: Zt,
					rotateZ: Zt,
					scale: ln,
					scaleX: ln,
					scaleY: ln,
					scaleZ: ln,
					skew: Zt,
					skewX: Zt,
					skewY: Zt,
					distance: en,
					translateX: en,
					translateY: en,
					translateZ: en,
					x: en,
					y: en,
					z: en,
					perspective: en,
					transformPerspective: en,
					opacity: on,
					originX: rn,
					originY: rn,
					originZ: en,
					zIndex: un,
					fillOpacity: on,
					strokeOpacity: on,
					numOctaves: un,
				};
			function cn(e, t, n, r) {
				var a = e.style,
					o = e.vars,
					i = e.transform,
					l = e.transformKeys,
					u = e.transformOrigin;
				l.length = 0;
				var s = !1,
					c = !1,
					f = !0;
				for (var d in t) {
					var p = t[d];
					if (Ht(d)) o[d] = p;
					else {
						var h = sn[d],
							v = Wt(p, h);
						if (Dt.has(d)) {
							if (((s = !0), (i[d] = v), l.push(d), !f)) continue;
							p !== (h.default || 0) && (f = !1);
						} else d.startsWith("origin") ? ((c = !0), (u[d] = v)) : (a[d] = v);
					}
				}
				if (
					(t.transform ||
						(s || r
							? (a.transform = (function (e, t, n, r) {
									var a = e.transform,
										o = e.transformKeys,
										i = t.enableHardwareAcceleration,
										l = void 0 === i || i,
										u = t.allowTransformNone,
										s = void 0 === u || u,
										c = "";
									o.sort(Bt);
									var f,
										d = It(o);
									try {
										for (d.s(); !(f = d.n()).done; ) {
											var p = f.value;
											c += "".concat(Ut[p] || p, "(").concat(a[p], ") ");
										}
									} catch (h) {
										d.e(h);
									} finally {
										d.f();
									}
									return (
										l && !a.z && (c += "translateZ(0)"),
										(c = c.trim()),
										r ? (c = r(a, n ? "" : c)) : s && n && (c = "none"),
										c
									);
							  })(e, n, f, r))
							: a.transform && (a.transform = "none")),
					c)
				) {
					var m = u.originX,
						y = void 0 === m ? "50%" : m,
						g = u.originY,
						b = void 0 === g ? "50%" : g,
						x = u.originZ,
						w = void 0 === x ? 0 : x;
					a.transformOrigin = "".concat(y, " ").concat(b, " ").concat(w);
				}
			}
			var fn = function () {
				return {
					style: {},
					transform: {},
					transformKeys: [],
					transformOrigin: {},
					vars: {},
				};
			};
			function dn(e, t, n) {
				for (var r in t) Ft(t[r]) || Vt(r, n) || (e[r] = t[r]);
			}
			function pn(e, n, r) {
				var a = {};
				return (
					dn(a, e.style || {}, e),
					Object.assign(
						a,
						(function (e, n, r) {
							var a = e.transformTemplate;
							return (0, t.useMemo)(
								function () {
									var e = {
										style: {},
										transform: {},
										transformKeys: [],
										transformOrigin: {},
										vars: {},
									};
									return (
										cn(e, n, { enableHardwareAcceleration: !r }, a),
										Object.assign({}, e.vars, e.style)
									);
								},
								[n]
							);
						})(e, n, r)
					),
					e.transformValues ? e.transformValues(a) : a
				);
			}
			function hn(e, t, n) {
				var r = {},
					a = pn(e, t, n);
				return (
					e.drag &&
						!1 !== e.dragListener &&
						((r.draggable = !1),
						(a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
						(a.touchAction =
							!0 === e.drag
								? "none"
								: "pan-".concat("x" === e.drag ? "y" : "x"))),
					(r.style = a),
					r
				);
			}
			var vn = new Set(
				[
					"initial",
					"style",
					"values",
					"variants",
					"transition",
					"transformTemplate",
					"transformValues",
					"custom",
					"inherit",
					"layout",
					"layoutId",
					"layoutDependency",
					"onLayoutAnimationStart",
					"onLayoutAnimationComplete",
					"onLayoutMeasure",
					"onBeforeLayoutMeasure",
					"onAnimationStart",
					"onAnimationComplete",
					"onUpdate",
					"onDragStart",
					"onDrag",
					"onDragEnd",
					"onMeasureDragConstraints",
					"onDirectionLock",
					"onDragTransitionEnd",
					"drag",
					"dragControls",
					"dragListener",
					"dragConstraints",
					"dragDirectionLock",
					"dragSnapToOrigin",
					"_dragX",
					"_dragY",
					"dragElastic",
					"dragMomentum",
					"dragPropagation",
					"dragTransition",
					"onHoverStart",
					"onHoverEnd",
					"layoutScroll",
				].concat(
					["whileInView", "onViewportEnter", "onViewportLeave", "viewport"],
					["whileTap", "onTap", "onTapStart", "onTapCancel"],
					[
						"animate",
						"exit",
						"variants",
						"whileHover",
						"whileTap",
						"whileFocus",
						"whileDrag",
						"whileInView",
					],
					["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]
				)
			);
			function mn(e) {
				return vn.has(e);
			}
			var yn,
				gn = function (e) {
					return !mn(e);
				};
			try {
				(yn = require("@emotion/is-prop-valid").default) &&
					(gn = function (e) {
						return e.startsWith("on") ? !mn(e) : yn(e);
					});
			} catch (Es) {}
			function bn(e, t, n) {
				var r = {};
				for (var a in e)
					(gn(a) ||
						(!0 === n && mn(a)) ||
						(!t && !mn(a)) ||
						(e.draggable && a.startsWith("onDrag"))) &&
						(r[a] = e[a]);
				return r;
			}
			function xn(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(e, n) &&
									(a[n] = e[n]));
				}
				return a;
			}
			function wn(e, t, n) {
				return "string" === typeof e ? e : en.transform(t + n * e);
			}
			var kn = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
				Sn = { offset: "strokeDashoffset", array: "strokeDasharray" };
			var En = [
				"attrX",
				"attrY",
				"originX",
				"originY",
				"pathLength",
				"pathSpacing",
				"pathOffset",
			];
			function Cn(e, t, n, r) {
				var a = t.attrX,
					o = t.attrY,
					i = t.originX,
					l = t.originY,
					u = t.pathLength,
					s = t.pathSpacing,
					c = void 0 === s ? 1 : s,
					f = t.pathOffset,
					d = void 0 === f ? 0 : f;
				cn(e, xn(t, En), n, r), (e.attrs = e.style), (e.style = {});
				var p = e.attrs,
					h = e.style,
					v = e.dimensions;
				p.transform && (v && (h.transform = p.transform), delete p.transform),
					v &&
						(void 0 !== i || void 0 !== l || h.transform) &&
						(h.transformOrigin = (function (e, t, n) {
							var r = wn(t, e.x, e.width),
								a = wn(n, e.y, e.height);
							return "".concat(r, " ").concat(a);
						})(v, void 0 !== i ? i : 0.5, void 0 !== l ? l : 0.5)),
					void 0 !== a && (p.x = a),
					void 0 !== o && (p.y = o),
					void 0 !== u &&
						(function (e, t) {
							var n =
									arguments.length > 2 && void 0 !== arguments[2]
										? arguments[2]
										: 1,
								r =
									arguments.length > 3 && void 0 !== arguments[3]
										? arguments[3]
										: 0,
								a =
									!(arguments.length > 4 && void 0 !== arguments[4]) ||
									arguments[4];
							e.pathLength = 1;
							var o = a ? kn : Sn;
							e[o.offset] = en.transform(-r);
							var i = en.transform(t),
								l = en.transform(n);
							e[o.array] = "".concat(i, " ").concat(l);
						})(p, u, c, d, !1);
			}
			var jn = function () {
				return ot(
					ot(
						{},
						{
							style: {},
							transform: {},
							transformKeys: [],
							transformOrigin: {},
							vars: {},
						}
					),
					{},
					{ attrs: {} }
				);
			};
			function Pn(e, n) {
				var r = (0, t.useMemo)(
					function () {
						var t = jn();
						return (
							Cn(t, n, { enableHardwareAcceleration: !1 }, e.transformTemplate),
							ot(ot({}, t.attrs), {}, { style: ot({}, t.style) })
						);
					},
					[n]
				);
				if (e.style) {
					var a = {};
					dn(a, e.style, e), (r.style = ot(ot({}, a), r.style));
				}
				return r;
			}
			function Tn() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					n = function (n, r, a, o, i, l) {
						var u = i.latestValues,
							s = (At(n) ? Pn : hn)(r, u, l),
							c = ot(
								ot(ot({}, bn(r, "string" === typeof n, e)), s),
								{},
								{ ref: o }
							);
						return (
							a && (c["data-projection-id"] = a), (0, t.createElement)(n, c)
						);
					};
				return n;
			}
			var _n = function (e) {
				return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
			};
			function Nn(e, t, n, r) {
				var a = t.style,
					o = t.vars;
				for (var i in (Object.assign(e.style, a, r && r.getProjectionStyles(n)),
				o))
					e.style.setProperty(i, o[i]);
			}
			var On = new Set([
				"baseFrequency",
				"diffuseConstant",
				"kernelMatrix",
				"kernelUnitLength",
				"keySplines",
				"keyTimes",
				"limitingConeAngle",
				"markerHeight",
				"markerWidth",
				"numOctaves",
				"targetX",
				"targetY",
				"surfaceScale",
				"specularConstant",
				"specularExponent",
				"stdDeviation",
				"tableValues",
				"viewBox",
				"gradientTransform",
				"pathLength",
			]);
			function Rn(e, t, n, r) {
				for (var a in (Nn(e, t, void 0, r), t.attrs))
					e.setAttribute(On.has(a) ? a : _n(a), t.attrs[a]);
			}
			function Ln(e) {
				var t = e.style,
					n = {};
				for (var r in t) (Ft(t[r]) || Vt(r, e)) && (n[r] = t[r]);
				return n;
			}
			function An(e) {
				var t = Ln(e);
				for (var n in e) {
					if (Ft(e[n]))
						t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n];
				}
				return t;
			}
			function Mn(e, t, n) {
				var r =
						arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					a =
						arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
				return (
					"function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
					"string" === typeof t && (t = e.variants && e.variants[t]),
					"function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
					t
				);
			}
			var zn = function (e) {
					return Array.isArray(e);
				},
				Dn = function (e) {
					return zn(e) ? e[e.length - 1] || 0 : e;
				};
			function Vn(e) {
				var t,
					n = Ft(e) ? e.get() : e;
				return (
					(t = n),
					Boolean(t && "object" === typeof t && t.mix && t.toValue)
						? n.toValue()
						: n
				);
			}
			var Fn = ["transitionEnd", "transition"];
			var In = function (e) {
				return function (n, r) {
					var a = (0, t.useContext)(lt),
						o = (0, t.useContext)(ut),
						i = function () {
							return (function (e, t, n, r) {
								var a = e.scrapeMotionValuesFromProps,
									o = e.createRenderState,
									i = e.onMount,
									l = { latestValues: Un(t, n, r, a), renderState: o() };
								return (
									i &&
										(l.mount = function (e) {
											return i(t, e, l);
										}),
									l
								);
							})(e, n, a, o);
						};
					return r ? i() : St(i);
				};
			};
			function Un(e, t, n, r) {
				var a = {},
					o = r(e);
				for (var i in o) a[i] = Vn(o[i]);
				var l = e.initial,
					u = e.animate,
					s = yt(e),
					c = gt(e);
				t &&
					c &&
					!s &&
					!1 !== e.inherit &&
					(void 0 === l && (l = t.initial), void 0 === u && (u = t.animate));
				var f = !!n && !1 === n.initial,
					d = (f = f || !1 === l) ? u : l;
				d &&
					"boolean" !== typeof d &&
					!vt(d) &&
					(Array.isArray(d) ? d : [d]).forEach(function (t) {
						var n = Mn(e, t);
						if (n) {
							var r = n.transitionEnd,
								o = (n.transition, xn(n, Fn));
							for (var i in o) {
								var l = o[i];
								if (Array.isArray(l)) l = l[f ? l.length - 1 : 0];
								null !== l && (a[i] = l);
							}
							for (var u in r) a[u] = r[u];
						}
					});
				return a;
			}
			var Bn,
				Hn = {
					useVisualState: In({
						scrapeMotionValuesFromProps: An,
						createRenderState: jn,
						onMount: function (e, t, n) {
							var r = n.renderState,
								a = n.latestValues;
							try {
								r.dimensions =
									"function" === typeof t.getBBox
										? t.getBBox()
										: t.getBoundingClientRect();
							} catch (o) {
								r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
							}
							Cn(r, a, { enableHardwareAcceleration: !1 }, e.transformTemplate),
								Rn(t, r);
						},
					}),
				},
				Wn = {
					useVisualState: In({
						scrapeMotionValuesFromProps: Ln,
						createRenderState: fn,
					}),
				};
			function $n(e, t, n) {
				var r =
					arguments.length > 3 && void 0 !== arguments[3]
						? arguments[3]
						: { passive: !0 };
				return (
					e.addEventListener(t, n, r),
					function () {
						return e.removeEventListener(t, n);
					}
				);
			}
			function Qn(e, n, r, a) {
				(0, t.useEffect)(
					function () {
						var t = e.current;
						if (r && t) return $n(t, n, r, a);
					},
					[e, n, r, a]
				);
			}
			function Xn(e) {
				return "undefined" !== typeof PointerEvent && e instanceof PointerEvent
					? !("mouse" !== e.pointerType)
					: e instanceof MouseEvent;
			}
			function qn(e) {
				return !!e.touches;
			}
			function Yn(e) {
				return function (t) {
					var n = t instanceof MouseEvent;
					(!n || (n && 0 === t.button)) && e(t);
				};
			}
			!(function (e) {
				(e.Animate = "animate"),
					(e.Hover = "whileHover"),
					(e.Tap = "whileTap"),
					(e.Drag = "whileDrag"),
					(e.Focus = "whileFocus"),
					(e.InView = "whileInView"),
					(e.Exit = "exit");
			})(Bn || (Bn = {}));
			var Gn = { pageX: 0, pageY: 0 };
			function Kn(e) {
				var t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: "page",
					n = e.touches[0] || e.changedTouches[0],
					r = n || Gn;
				return { x: r[t + "X"], y: r[t + "Y"] };
			}
			function Zn(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: "page";
				return { x: e[t + "X"], y: e[t + "Y"] };
			}
			function Jn(e) {
				var t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: "page";
				return { point: qn(e) ? Kn(e, t) : Zn(e, t) };
			}
			var er = function (e) {
					var t =
							arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = function (t) {
							return e(t, Jn(t));
						};
					return t ? Yn(n) : n;
				},
				tr = {
					pointerdown: "mousedown",
					pointermove: "mousemove",
					pointerup: "mouseup",
					pointercancel: "mousecancel",
					pointerover: "mouseover",
					pointerout: "mouseout",
					pointerenter: "mouseenter",
					pointerleave: "mouseleave",
				},
				nr = {
					pointerdown: "touchstart",
					pointermove: "touchmove",
					pointerup: "touchend",
					pointercancel: "touchcancel",
				};
			function rr(e) {
				return st && null === window.onpointerdown
					? e
					: st && null === window.ontouchstart
					? nr[e]
					: st && null === window.onmousedown
					? tr[e]
					: e;
			}
			function ar(e, t, n, r) {
				return $n(e, rr(t), er(n, "pointerdown" === t), r);
			}
			function or(e, t, n, r) {
				return Qn(e, rr(t), n && er(n, "pointerdown" === t), r);
			}
			function ir(e) {
				var t = null;
				return function () {
					return (
						null === t &&
						((t = e),
						function () {
							t = null;
						})
					);
				};
			}
			var lr = ir("dragHorizontal"),
				ur = ir("dragVertical");
			function sr(e) {
				var t = !1;
				if ("y" === e) t = ur();
				else if ("x" === e) t = lr();
				else {
					var n = lr(),
						r = ur();
					n && r
						? (t = function () {
								n(), r();
						  })
						: (n && n(), r && r());
				}
				return t;
			}
			function cr() {
				var e = sr(!0);
				return !e || (e(), !1);
			}
			function fr(e, t, n) {
				return function (r, a) {
					Xn(r) &&
						!cr() &&
						(e.animationState && e.animationState.setActive(Bn.Hover, t),
						n && n(r, a));
				};
			}
			var dr = function e(t, n) {
				return !!n && (t === n || e(t, n.parentElement));
			};
			function pr(e) {
				return (0, t.useEffect)(function () {
					return function () {
						return e();
					};
				}, []);
			}
			var hr = function (e, t) {
					return function (n) {
						return t(e(n));
					};
				},
				vr = function () {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
						t[n] = arguments[n];
					return t.reduce(hr);
				};
			var mr = new Set();
			function yr(e, t, n) {
				e || mr.has(t) || (console.warn(t), n && console.warn(n), mr.add(t));
			}
			var gr = ["root"],
				br = new WeakMap(),
				xr = new WeakMap(),
				wr = function (e) {
					var t = br.get(e.target);
					t && t(e);
				},
				kr = function (e) {
					e.forEach(wr);
				};
			function Sr(e, t, n) {
				var r = (function (e) {
					var t = e.root,
						n = xn(e, gr),
						r = t || document;
					xr.has(r) || xr.set(r, {});
					var a = xr.get(r),
						o = JSON.stringify(n);
					return (
						a[o] || (a[o] = new IntersectionObserver(kr, ot({ root: t }, n))),
						a[o]
					);
				})(t);
				return (
					br.set(e, n),
					r.observe(e),
					function () {
						br.delete(e), r.unobserve(e);
					}
				);
			}
			var Er = { some: 0, all: 1 };
			function Cr(e, n, r, a) {
				var o = a.root,
					i = a.margin,
					l = a.amount,
					u = void 0 === l ? "some" : l,
					s = a.once;
				(0, t.useEffect)(
					function () {
						if (e && r.current) {
							var t = {
								root: null === o || void 0 === o ? void 0 : o.current,
								rootMargin: i,
								threshold: "number" === typeof u ? u : Er[u],
							};
							return Sr(r.current, t, function (e) {
								var t = e.isIntersecting;
								if (
									n.isInView !== t &&
									((n.isInView = t), !s || t || !n.hasEnteredView)
								) {
									t && (n.hasEnteredView = !0),
										r.animationState &&
											r.animationState.setActive(Bn.InView, t);
									var a = r.getProps(),
										o = t ? a.onViewportEnter : a.onViewportLeave;
									o && o(e);
								}
							});
						}
					},
					[e, o, i, u]
				);
			}
			function jr(e, n, r, a) {
				var o = a.fallback,
					i = void 0 === o || o;
				(0, t.useEffect)(
					function () {
						e &&
							i &&
							requestAnimationFrame(function () {
								n.hasEnteredView = !0;
								var e = r.getProps().onViewportEnter;
								e && e(null),
									r.animationState && r.animationState.setActive(Bn.InView, !0);
							});
					},
					[e]
				);
			}
			var Pr = function (e) {
					return function (t) {
						return e(t), null;
					};
				},
				Tr = {
					inView: Pr(function (e) {
						var n = e.visualElement,
							r = e.whileInView,
							a = e.onViewportEnter,
							o = e.onViewportLeave,
							i = e.viewport,
							l = void 0 === i ? {} : i,
							u = (0, t.useRef)({ hasEnteredView: !1, isInView: !1 }),
							s = Boolean(r || a || o);
						l.once && u.current.hasEnteredView && (s = !1),
							("undefined" === typeof IntersectionObserver ? jr : Cr)(
								s,
								u.current,
								n,
								l
							);
					}),
					tap: Pr(function (e) {
						var n = e.onTap,
							r = e.onTapStart,
							a = e.onTapCancel,
							o = e.whileTap,
							i = e.visualElement,
							l = n || r || a || o,
							u = (0, t.useRef)(!1),
							s = (0, t.useRef)(null),
							c = { passive: !(r || n || a || v) };
						function f() {
							s.current && s.current(), (s.current = null);
						}
						function d() {
							return (
								f(),
								(u.current = !1),
								i.animationState && i.animationState.setActive(Bn.Tap, !1),
								!cr()
							);
						}
						function p(e, t) {
							d() && (dr(i.current, e.target) ? n && n(e, t) : a && a(e, t));
						}
						function h(e, t) {
							d() && a && a(e, t);
						}
						function v(e, t) {
							f(),
								u.current ||
									((u.current = !0),
									(s.current = vr(
										ar(window, "pointerup", p, c),
										ar(window, "pointercancel", h, c)
									)),
									i.animationState && i.animationState.setActive(Bn.Tap, !0),
									r && r(e, t));
						}
						or(i, "pointerdown", l ? v : void 0, c), pr(f);
					}),
					focus: Pr(function (e) {
						var t = e.whileFocus,
							n = e.visualElement,
							r = n.animationState;
						Qn(
							n,
							"focus",
							t
								? function () {
										r && r.setActive(Bn.Focus, !0);
								  }
								: void 0
						),
							Qn(
								n,
								"blur",
								t
									? function () {
											r && r.setActive(Bn.Focus, !1);
									  }
									: void 0
							);
					}),
					hover: Pr(function (e) {
						var t = e.onHoverStart,
							n = e.onHoverEnd,
							r = e.whileHover,
							a = e.visualElement;
						or(a, "pointerenter", t || r ? fr(a, !0, t) : void 0, {
							passive: !t,
						}),
							or(a, "pointerleave", n || r ? fr(a, !1, n) : void 0, {
								passive: !n,
							});
					}),
				};
			function _r() {
				var e = (0, t.useContext)(ut);
				if (null === e) return [!0, null];
				var n = e.isPresent,
					r = e.onExitComplete,
					a = e.register,
					o = (0, t.useId)();
				(0, t.useEffect)(function () {
					return a(o);
				}, []);
				return !n && r
					? [
							!1,
							function () {
								return r && r(o);
							},
					  ]
					: [!0];
			}
			function Nr(e, t) {
				if (!Array.isArray(t)) return !1;
				var n = t.length;
				if (n !== e.length) return !1;
				for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
				return !0;
			}
			function Or(e, t) {
				var n = {};
				for (var r in e)
					Object.prototype.hasOwnProperty.call(e, r) &&
						t.indexOf(r) < 0 &&
						(n[r] = e[r]);
				if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
						t.indexOf(r[a]) < 0 &&
							Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
							(n[r[a]] = e[r[a]]);
				}
				return n;
			}
			Object.create;
			Object.create;
			var Rr = function (e, t, n) {
					return Math.min(Math.max(n, e), t);
				},
				Lr = 0.001;
			function Ar(e) {
				var t,
					n,
					r = e.duration,
					a = void 0 === r ? 800 : r,
					o = e.bounce,
					i = void 0 === o ? 0.25 : o,
					l = e.velocity,
					u = void 0 === l ? 0 : l,
					s = e.mass,
					c = void 0 === s ? 1 : s,
					f = 1 - i;
				(f = Rr(0.05, 1, f)),
					(a = Rr(0.01, 10, a / 1e3)),
					f < 1
						? ((t = function (e) {
								var t = e * f,
									n = t * a,
									r = t - u,
									o = Mr(e, f),
									i = Math.exp(-n);
								return Lr - (r / o) * i;
						  }),
						  (n = function (e) {
								var n = e * f * a,
									r = n * u + u,
									o = Math.pow(f, 2) * Math.pow(e, 2) * a,
									i = Math.exp(-n),
									l = Mr(Math.pow(e, 2), f);
								return ((-t(e) + Lr > 0 ? -1 : 1) * ((r - o) * i)) / l;
						  }))
						: ((t = function (e) {
								return Math.exp(-e * a) * ((e - u) * a + 1) - 0.001;
						  }),
						  (n = function (e) {
								return Math.exp(-e * a) * (a * a * (u - e));
						  }));
				var d = (function (e, t, n) {
					for (var r = n, a = 1; a < 12; a++) r -= e(r) / t(r);
					return r;
				})(t, n, 5 / a);
				if (((a *= 1e3), isNaN(d)))
					return { stiffness: 100, damping: 10, duration: a };
				var p = Math.pow(d, 2) * c;
				return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: a };
			}
			function Mr(e, t) {
				return e * Math.sqrt(1 - t * t);
			}
			var zr = ["duration", "bounce"],
				Dr = ["stiffness", "damping", "mass"];
			function Vr(e, t) {
				return t.some(function (t) {
					return void 0 !== e[t];
				});
			}
			function Fr(e) {
				var t = e.from,
					n = void 0 === t ? 0 : t,
					r = e.to,
					a = void 0 === r ? 1 : r,
					o = e.restSpeed,
					i = void 0 === o ? 2 : o,
					l = e.restDelta,
					u = Or(e, ["from", "to", "restSpeed", "restDelta"]),
					s = { done: !1, value: n },
					c = (function (e) {
						var t = Object.assign(
							{
								velocity: 0,
								stiffness: 100,
								damping: 10,
								mass: 1,
								isResolvedFromDuration: !1,
							},
							e
						);
						if (!Vr(e, Dr) && Vr(e, zr)) {
							var n = Ar(e);
							(t = Object.assign(Object.assign(Object.assign({}, t), n), {
								velocity: 0,
								mass: 1,
							})).isResolvedFromDuration = !0;
						}
						return t;
					})(u),
					f = c.stiffness,
					d = c.damping,
					p = c.mass,
					h = c.velocity,
					v = c.duration,
					m = c.isResolvedFromDuration,
					y = Ir,
					g = Ir;
				function b() {
					var e = h ? -h / 1e3 : 0,
						t = a - n,
						r = d / (2 * Math.sqrt(f * p)),
						o = Math.sqrt(f / p) / 1e3;
					if (
						(void 0 === l && (l = Math.min(Math.abs(a - n) / 100, 0.4)), r < 1)
					) {
						var i = Mr(o, r);
						(y = function (n) {
							var l = Math.exp(-r * o * n);
							return (
								a -
								l *
									(((e + r * o * t) / i) * Math.sin(i * n) +
										t * Math.cos(i * n))
							);
						}),
							(g = function (n) {
								var a = Math.exp(-r * o * n);
								return (
									r *
										o *
										a *
										((Math.sin(i * n) * (e + r * o * t)) / i +
											t * Math.cos(i * n)) -
									a *
										(Math.cos(i * n) * (e + r * o * t) -
											i * t * Math.sin(i * n))
								);
							});
					} else if (1 === r)
						y = function (n) {
							return a - Math.exp(-o * n) * (t + (e + o * t) * n);
						};
					else {
						var u = o * Math.sqrt(r * r - 1);
						y = function (n) {
							var i = Math.exp(-r * o * n),
								l = Math.min(u * n, 300);
							return (
								a -
								(i * ((e + r * o * t) * Math.sinh(l) + u * t * Math.cosh(l))) /
									u
							);
						};
					}
				}
				return (
					b(),
					{
						next: function (e) {
							var t = y(e);
							if (m) s.done = e >= v;
							else {
								var n = 1e3 * g(e),
									r = Math.abs(n) <= i,
									o = Math.abs(a - t) <= l;
								s.done = r && o;
							}
							return (s.value = s.done ? a : t), s;
						},
						flipTarget: function () {
							h = -h;
							var e = [a, n];
							(n = e[0]), (a = e[1]), b();
						},
					}
				);
			}
			Fr.needsInterpolation = function (e, t) {
				return "string" === typeof e || "string" === typeof t;
			};
			var Ir = function (e) {
					return 0;
				},
				Ur = function (e, t, n) {
					var r = t - e;
					return 0 === r ? 1 : (n - e) / r;
				},
				Br = function (e, t, n) {
					return -n * e + n * t + e;
				},
				Hr = function (e, t) {
					return function (n) {
						return Boolean(
							(Gt(n) && Yt.test(n) && n.startsWith(e)) ||
								(t && Object.prototype.hasOwnProperty.call(n, t))
						);
					};
				},
				Wr = function (e, t, n) {
					return function (r) {
						var a;
						if (!Gt(r)) return r;
						var o = g(r.match(Xt), 4),
							i = o[0],
							l = o[1],
							u = o[2],
							s = o[3];
						return (
							rt((a = {}), e, parseFloat(i)),
							rt(a, t, parseFloat(l)),
							rt(a, n, parseFloat(u)),
							rt(a, "alpha", void 0 !== s ? parseFloat(s) : 1),
							a
						);
					};
				},
				$r = $t(0, 255),
				Qr = Object.assign(Object.assign({}, an), {
					transform: function (e) {
						return Math.round($r(e));
					},
				}),
				Xr = {
					test: Hr("rgb", "red"),
					parse: Wr("red", "green", "blue"),
					transform: function (e) {
						var t = e.red,
							n = e.green,
							r = e.blue,
							a = e.alpha,
							o = void 0 === a ? 1 : a;
						return (
							"rgba(" +
							Qr.transform(t) +
							", " +
							Qr.transform(n) +
							", " +
							Qr.transform(r) +
							", " +
							Qt(on.transform(o)) +
							")"
						);
					},
				};
			var qr = {
					test: Hr("#"),
					parse: function (e) {
						var t = "",
							n = "",
							r = "",
							a = "";
						return (
							e.length > 5
								? ((t = e.substr(1, 2)),
								  (n = e.substr(3, 2)),
								  (r = e.substr(5, 2)),
								  (a = e.substr(7, 2)))
								: ((t = e.substr(1, 1)),
								  (n = e.substr(2, 1)),
								  (r = e.substr(3, 1)),
								  (a = e.substr(4, 1)),
								  (t += t),
								  (n += n),
								  (r += r),
								  (a += a)),
							{
								red: parseInt(t, 16),
								green: parseInt(n, 16),
								blue: parseInt(r, 16),
								alpha: a ? parseInt(a, 16) / 255 : 1,
							}
						);
					},
					transform: Xr.transform,
				},
				Yr = {
					test: Hr("hsl", "hue"),
					parse: Wr("hue", "saturation", "lightness"),
					transform: function (e) {
						var t = e.hue,
							n = e.saturation,
							r = e.lightness,
							a = e.alpha,
							o = void 0 === a ? 1 : a;
						return (
							"hsla(" +
							Math.round(t) +
							", " +
							Jt.transform(Qt(n)) +
							", " +
							Jt.transform(Qt(r)) +
							", " +
							Qt(on.transform(o)) +
							")"
						);
					},
				};
			function Gr(e, t, n) {
				return (
					n < 0 && (n += 1),
					n > 1 && (n -= 1),
					n < 1 / 6
						? e + 6 * (t - e) * n
						: n < 0.5
						? t
						: n < 2 / 3
						? e + (t - e) * (2 / 3 - n) * 6
						: e
				);
			}
			function Kr(e) {
				var t = e.hue,
					n = e.saturation,
					r = e.lightness,
					a = e.alpha;
				(t /= 360), (r /= 100);
				var o = 0,
					i = 0,
					l = 0;
				if ((n /= 100)) {
					var u = r < 0.5 ? r * (1 + n) : r + n - r * n,
						s = 2 * r - u;
					(o = Gr(s, u, t + 1 / 3)),
						(i = Gr(s, u, t)),
						(l = Gr(s, u, t - 1 / 3));
				} else o = i = l = r;
				return {
					red: Math.round(255 * o),
					green: Math.round(255 * i),
					blue: Math.round(255 * l),
					alpha: a,
				};
			}
			var Zr = function (e, t, n) {
					var r = e * e,
						a = t * t;
					return Math.sqrt(Math.max(0, n * (a - r) + r));
				},
				Jr = [qr, Xr, Yr],
				ea = function (e) {
					return Jr.find(function (t) {
						return t.test(e);
					});
				},
				ta = function (e) {
					return "'".concat(
						e,
						"' is not an animatable color. Use the equivalent color code instead."
					);
				},
				na = function (e, t) {
					var n = ea(e),
						r = ea(t);
					ta(e), ta(t);
					var a = n.parse(e),
						o = r.parse(t);
					n === Yr && ((a = Kr(a)), (n = Xr)),
						r === Yr && ((o = Kr(o)), (r = Xr));
					var i = Object.assign({}, a);
					return function (e) {
						for (var t in i) "alpha" !== t && (i[t] = Zr(a[t], o[t], e));
						return (i.alpha = Br(a.alpha, o.alpha, e)), n.transform(i);
					};
				},
				ra = {
					test: function (e) {
						return Xr.test(e) || qr.test(e) || Yr.test(e);
					},
					parse: function (e) {
						return Xr.test(e)
							? Xr.parse(e)
							: Yr.test(e)
							? Yr.parse(e)
							: qr.parse(e);
					},
					transform: function (e) {
						return Gt(e)
							? e
							: e.hasOwnProperty("red")
							? Xr.transform(e)
							: Yr.transform(e);
					},
				},
				aa = "${c}",
				oa = "${n}";
			function ia(e) {
				"number" === typeof e && (e = "".concat(e));
				var t = [],
					n = 0,
					r = e.match(qt);
				r &&
					((n = r.length),
					(e = e.replace(qt, aa)),
					t.push.apply(t, l(r.map(ra.parse))));
				var a = e.match(Xt);
				return (
					a && ((e = e.replace(Xt, oa)), t.push.apply(t, l(a.map(an.parse)))),
					{ values: t, numColors: n, tokenised: e }
				);
			}
			function la(e) {
				return ia(e).values;
			}
			function ua(e) {
				var t = ia(e),
					n = t.values,
					r = t.numColors,
					a = t.tokenised,
					o = n.length;
				return function (e) {
					for (var t = a, n = 0; n < o; n++)
						t = t.replace(
							n < r ? aa : oa,
							n < r ? ra.transform(e[n]) : Qt(e[n])
						);
					return t;
				};
			}
			var sa = function (e) {
				return "number" === typeof e ? 0 : e;
			};
			var ca = {
					test: function (e) {
						var t, n, r, a;
						return (
							isNaN(e) &&
							Gt(e) &&
							(null !==
								(n =
									null === (t = e.match(Xt)) || void 0 === t
										? void 0
										: t.length) && void 0 !== n
								? n
								: 0) +
								(null !==
									(a =
										null === (r = e.match(qt)) || void 0 === r
											? void 0
											: r.length) && void 0 !== a
									? a
									: 0) >
								0
						);
					},
					parse: la,
					createTransformer: ua,
					getAnimatableNone: function (e) {
						var t = la(e);
						return ua(e)(t.map(sa));
					},
				},
				fa = function (e) {
					return "number" === typeof e;
				};
			function da(e, t) {
				return fa(e)
					? function (n) {
							return Br(e, t, n);
					  }
					: ra.test(e)
					? na(e, t)
					: ma(e, t);
			}
			var pa = function (e, t) {
					var n = l(e),
						r = n.length,
						a = e.map(function (e, n) {
							return da(e, t[n]);
						});
					return function (e) {
						for (var t = 0; t < r; t++) n[t] = a[t](e);
						return n;
					};
				},
				ha = function (e, t) {
					var n = Object.assign(Object.assign({}, e), t),
						r = {};
					for (var a in n)
						void 0 !== e[a] && void 0 !== t[a] && (r[a] = da(e[a], t[a]));
					return function (e) {
						for (var t in r) n[t] = r[t](e);
						return n;
					};
				};
			function va(e) {
				for (
					var t = ca.parse(e), n = t.length, r = 0, a = 0, o = 0, i = 0;
					i < n;
					i++
				)
					r || "number" === typeof t[i] ? r++ : void 0 !== t[i].hue ? o++ : a++;
				return { parsed: t, numNumbers: r, numRGB: a, numHSL: o };
			}
			var ma = function (e, t) {
					var n = ca.createTransformer(t),
						r = va(e),
						a = va(t);
					return r.numHSL === a.numHSL &&
						r.numRGB === a.numRGB &&
						r.numNumbers >= a.numNumbers
						? vr(pa(r.parsed, a.parsed), n)
						: ("Complex values '"
								.concat(e, "' and '")
								.concat(
									t,
									"' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
								),
						  function (n) {
								return "".concat(n > 0 ? t : e);
						  });
				},
				ya = function (e, t) {
					return function (n) {
						return Br(e, t, n);
					};
				};
			function ga(e, t, n) {
				for (
					var r,
						a = [],
						o =
							n ||
							("number" === typeof (r = e[0])
								? ya
								: "string" === typeof r
								? ra.test(r)
									? na
									: ma
								: Array.isArray(r)
								? pa
								: "object" === typeof r
								? ha
								: void 0),
						i = e.length - 1,
						l = 0;
					l < i;
					l++
				) {
					var u = o(e[l], e[l + 1]);
					if (t) {
						var s = Array.isArray(t) ? t[l] : t;
						u = vr(s, u);
					}
					a.push(u);
				}
				return a;
			}
			function ba(e, t) {
				var n = g(e, 2),
					r = n[0],
					a = n[1],
					o = g(t, 1)[0];
				return function (e) {
					return o(Ur(r, a, e));
				};
			}
			function xa(e, t) {
				var n = e.length,
					r = n - 1;
				return function (a) {
					var o = 0,
						i = !1;
					if (
						(a <= e[0] ? (i = !0) : a >= e[r] && ((o = r - 1), (i = !0)), !i)
					) {
						for (var l = 1; l < n && !(e[l] > a || l === r); l++);
						o = l - 1;
					}
					var u = Ur(e[o], e[o + 1], a);
					return t[o](u);
				};
			}
			function wa(e, t) {
				var n =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					r = n.clamp,
					a = void 0 === r || r,
					o = n.ease,
					i = n.mixer,
					l = e.length;
				t.length,
					!o || !Array.isArray(o) || o.length,
					e[0] > e[l - 1] &&
						((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
				var u = ga(t, o, i),
					s = 2 === l ? ba(e, u) : xa(e, u);
				return a
					? function (t) {
							return s(Rr(e[0], e[l - 1], t));
					  }
					: s;
			}
			var ka,
				Sa = function (e) {
					return function (t) {
						return 1 - e(1 - t);
					};
				},
				Ea = function (e) {
					return function (t) {
						return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
					};
				},
				Ca = function (e) {
					return function (t) {
						return t * t * ((e + 1) * t - e);
					};
				},
				ja = function (e) {
					return e;
				},
				Pa =
					((ka = 2),
					function (e) {
						return Math.pow(e, ka);
					}),
				Ta = Sa(Pa),
				_a = Ea(Pa),
				Na = function (e) {
					return 1 - Math.sin(Math.acos(e));
				},
				Oa = Sa(Na),
				Ra = Ea(Oa),
				La = Ca(1.525),
				Aa = Sa(La),
				Ma = Ea(La),
				za = (function (e) {
					var t = Ca(e);
					return function (e) {
						return (e *= 2) < 1
							? 0.5 * t(e)
							: 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
					};
				})(1.525),
				Da = function (e) {
					if (1 === e || 0 === e) return e;
					var t = e * e;
					return e < 0.36363636363636365
						? 7.5625 * t
						: e < 0.7272727272727273
						? 9.075 * t - 9.9 * e + 3.4
						: e < 0.9
						? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255
						: 10.8 * e * e - 20.52 * e + 10.72;
				},
				Va = Sa(Da);
			function Fa(e, t) {
				return e
					.map(function () {
						return t || _a;
					})
					.splice(0, e.length - 1);
			}
			function Ia(e) {
				var t = e.from,
					n = void 0 === t ? 0 : t,
					r = e.to,
					a = void 0 === r ? 1 : r,
					o = e.ease,
					i = e.offset,
					l = e.duration,
					u = void 0 === l ? 300 : l,
					s = { done: !1, value: n },
					c = Array.isArray(a) ? a : [n, a],
					f = (function (e, t) {
						return e.map(function (e) {
							return e * t;
						});
					})(
						i && i.length === c.length
							? i
							: (function (e) {
									var t = e.length;
									return e.map(function (e, n) {
										return 0 !== n ? n / (t - 1) : 0;
									});
							  })(c),
						u
					);
				function d() {
					return wa(f, c, { ease: Array.isArray(o) ? o : Fa(c, o) });
				}
				var p = d();
				return {
					next: function (e) {
						return (s.value = p(e)), (s.done = e >= u), s;
					},
					flipTarget: function () {
						c.reverse(), (p = d());
					},
				};
			}
			var Ua = {
				keyframes: Ia,
				spring: Fr,
				decay: function (e) {
					var t = e.velocity,
						n = void 0 === t ? 0 : t,
						r = e.from,
						a = void 0 === r ? 0 : r,
						o = e.power,
						i = void 0 === o ? 0.8 : o,
						l = e.timeConstant,
						u = void 0 === l ? 350 : l,
						s = e.restDelta,
						c = void 0 === s ? 0.5 : s,
						f = e.modifyTarget,
						d = { done: !1, value: a },
						p = i * n,
						h = a + p,
						v = void 0 === f ? h : f(h);
					return (
						v !== h && (p = v - a),
						{
							next: function (e) {
								var t = -p * Math.exp(-e / u);
								return (
									(d.done = !(t > c || t < -c)),
									(d.value = d.done ? v : v + t),
									d
								);
							},
							flipTarget: function () {},
						}
					);
				},
			};
			var Ba = (1 / 60) * 1e3,
				Ha =
					"undefined" !== typeof performance
						? function () {
								return performance.now();
						  }
						: function () {
								return Date.now();
						  },
				Wa =
					"undefined" !== typeof window
						? function (e) {
								return window.requestAnimationFrame(e);
						  }
						: function (e) {
								return setTimeout(function () {
									return e(Ha());
								}, Ba);
						  };
			var $a = !0,
				Qa = !1,
				Xa = !1,
				qa = { delta: 0, timestamp: 0 },
				Ya = ["read", "update", "preRender", "render", "postRender"],
				Ga = Ya.reduce(function (e, t) {
					return (
						(e[t] = (function (e) {
							var t = [],
								n = [],
								r = 0,
								a = !1,
								o = !1,
								i = new WeakSet(),
								l = {
									schedule: function (e) {
										var o =
												arguments.length > 2 &&
												void 0 !== arguments[2] &&
												arguments[2] &&
												a,
											l = o ? t : n;
										return (
											arguments.length > 1 &&
												void 0 !== arguments[1] &&
												arguments[1] &&
												i.add(e),
											-1 === l.indexOf(e) &&
												(l.push(e), o && a && (r = t.length)),
											e
										);
									},
									cancel: function (e) {
										var t = n.indexOf(e);
										-1 !== t && n.splice(t, 1), i.delete(e);
									},
									process: function (u) {
										if (a) o = !0;
										else {
											a = !0;
											var s = [n, t];
											if (((t = s[0]), ((n = s[1]).length = 0), (r = t.length)))
												for (var c = 0; c < r; c++) {
													var f = t[c];
													f(u), i.has(f) && (l.schedule(f), e());
												}
											(a = !1), o && ((o = !1), l.process(u));
										}
									},
								};
							return l;
						})(function () {
							return (Qa = !0);
						})),
						e
					);
				}, {}),
				Ka = Ya.reduce(function (e, t) {
					var n = Ga[t];
					return (
						(e[t] = function (e) {
							var t =
									arguments.length > 1 &&
									void 0 !== arguments[1] &&
									arguments[1],
								r =
									arguments.length > 2 &&
									void 0 !== arguments[2] &&
									arguments[2];
							return Qa || no(), n.schedule(e, t, r);
						}),
						e
					);
				}, {}),
				Za = Ya.reduce(function (e, t) {
					return (e[t] = Ga[t].cancel), e;
				}, {}),
				Ja = Ya.reduce(function (e, t) {
					return (
						(e[t] = function () {
							return Ga[t].process(qa);
						}),
						e
					);
				}, {}),
				eo = function (e) {
					return Ga[e].process(qa);
				},
				to = function e(t) {
					(Qa = !1),
						(qa.delta = $a ? Ba : Math.max(Math.min(t - qa.timestamp, 40), 1)),
						(qa.timestamp = t),
						(Xa = !0),
						Ya.forEach(eo),
						(Xa = !1),
						Qa && (($a = !1), Wa(e));
				},
				no = function () {
					(Qa = !0), ($a = !0), Xa || Wa(to);
				},
				ro = function () {
					return qa;
				},
				ao = Ka;
			function oo(e, t) {
				var n =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
				return e - t - n;
			}
			var io = function (e) {
				var t = function (t) {
					var n = t.delta;
					return e(n);
				};
				return {
					start: function () {
						return ao.update(t, !0);
					},
					stop: function () {
						return Za.update(t);
					},
				};
			};
			function lo(e) {
				var t,
					n,
					r,
					a,
					o,
					i = e.from,
					l = e.autoplay,
					u = void 0 === l || l,
					s = e.driver,
					c = void 0 === s ? io : s,
					f = e.elapsed,
					d = void 0 === f ? 0 : f,
					p = e.repeat,
					h = void 0 === p ? 0 : p,
					v = e.repeatType,
					m = void 0 === v ? "loop" : v,
					y = e.repeatDelay,
					g = void 0 === y ? 0 : y,
					b = e.onPlay,
					x = e.onStop,
					w = e.onComplete,
					k = e.onRepeat,
					S = e.onUpdate,
					E = Or(e, [
						"from",
						"autoplay",
						"driver",
						"elapsed",
						"repeat",
						"repeatType",
						"repeatDelay",
						"onPlay",
						"onStop",
						"onComplete",
						"onRepeat",
						"onUpdate",
					]),
					C = E.to,
					j = 0,
					P = E.duration,
					T = !1,
					_ = !0,
					N = (function (e) {
						if (Array.isArray(e.to)) return Ia;
						if (Ua[e.type]) return Ua[e.type];
						var t = new Set(Object.keys(e));
						return t.has("ease") ||
							(t.has("duration") && !t.has("dampingRatio"))
							? Ia
							: t.has("dampingRatio") ||
							  t.has("stiffness") ||
							  t.has("mass") ||
							  t.has("damping") ||
							  t.has("restSpeed") ||
							  t.has("restDelta")
							? Fr
							: Ia;
					})(E);
				(null === (n = (t = N).needsInterpolation) || void 0 === n
					? void 0
					: n.call(t, i, C)) &&
					((o = wa([0, 100], [i, C], { clamp: !1 })), (i = 0), (C = 100));
				var O = N(Object.assign(Object.assign({}, E), { from: i, to: C }));
				function R() {
					j++,
						"reverse" === m
							? (d = (function (e, t) {
									var n =
										arguments.length > 2 && void 0 !== arguments[2]
											? arguments[2]
											: 0;
									return arguments.length > 3 &&
										void 0 !== arguments[3] &&
										!arguments[3]
										? t - (e - t) + n
										: oo(t + -e, t, n);
							  })(d, P, g, (_ = j % 2 === 0)))
							: ((d = oo(d, P, g)), "mirror" === m && O.flipTarget()),
						(T = !1),
						k && k();
				}
				function L(e) {
					if ((_ || (e = -e), (d += e), !T)) {
						var t = O.next(Math.max(0, d));
						(a = t.value), o && (a = o(a)), (T = _ ? t.done : d <= 0);
					}
					null === S || void 0 === S || S(a),
						T &&
							(0 === j && ((null !== P && void 0 !== P) || (P = d)),
							j < h
								? (function (e, t, n, r) {
										return r ? e >= t + n : e <= -n;
								  })(d, P, g, _) && R()
								: (r.stop(), w && w()));
				}
				return (
					u && (null === b || void 0 === b || b(), (r = c(L)).start()),
					{
						stop: function () {
							null === x || void 0 === x || x(), r.stop();
						},
					}
				);
			}
			function uo(e, t) {
				return t ? e * (1e3 / t) : 0;
			}
			var so = function (e) {
					return 1e3 * e;
				},
				co = function (e, t) {
					return 1 - 3 * t + 3 * e;
				},
				fo = function (e, t) {
					return 3 * t - 6 * e;
				},
				po = function (e) {
					return 3 * e;
				},
				ho = function (e, t, n) {
					return ((co(t, n) * e + fo(t, n)) * e + po(t)) * e;
				},
				vo = function (e, t, n) {
					return 3 * co(t, n) * e * e + 2 * fo(t, n) * e + po(t);
				};
			var mo = 0.1;
			function yo(e, t, n, r) {
				if (e === t && n === r) return ja;
				for (var a = new Float32Array(11), o = 0; o < 11; ++o)
					a[o] = ho(o * mo, e, n);
				function i(t) {
					for (var r = 0, o = 1; 10 !== o && a[o] <= t; ++o) r += mo;
					--o;
					var i = r + ((t - a[o]) / (a[o + 1] - a[o])) * mo,
						l = vo(i, e, n);
					return l >= 0.001
						? (function (e, t, n, r) {
								for (var a = 0; a < 8; ++a) {
									var o = vo(t, n, r);
									if (0 === o) return t;
									t -= (ho(t, n, r) - e) / o;
								}
								return t;
						  })(t, i, e, n)
						: 0 === l
						? i
						: (function (e, t, n, r, a) {
								var o,
									i,
									l = 0;
								do {
									(o = ho((i = t + (n - t) / 2), r, a) - e) > 0
										? (n = i)
										: (t = i);
								} while (Math.abs(o) > 1e-7 && ++l < 10);
								return i;
						  })(t, r, r + mo, e, n);
				}
				return function (e) {
					return 0 === e || 1 === e ? e : ho(i(e), t, r);
				};
			}
			var go = {
					linear: ja,
					easeIn: Pa,
					easeInOut: _a,
					easeOut: Ta,
					circIn: Na,
					circInOut: Ra,
					circOut: Oa,
					backIn: La,
					backInOut: Ma,
					backOut: Aa,
					anticipate: za,
					bounceIn: Va,
					bounceInOut: function (e) {
						return e < 0.5
							? 0.5 * (1 - Da(1 - 2 * e))
							: 0.5 * Da(2 * e - 1) + 0.5;
					},
					bounceOut: Da,
				},
				bo = function (e) {
					if (Array.isArray(e)) {
						e.length;
						var t = g(e, 4);
						return yo(t[0], t[1], t[2], t[3]);
					}
					return "string" === typeof e
						? ("Invalid easing type '".concat(e, "'"), go[e])
						: e;
				},
				xo = function (e, t) {
					return (
						"zIndex" !== e &&
						(!("number" !== typeof t && !Array.isArray(t)) ||
							!("string" !== typeof t || !ca.test(t) || t.startsWith("url(")))
					);
				},
				wo = function () {
					return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
				},
				ko = function (e) {
					return {
						type: "spring",
						stiffness: 550,
						damping: 0 === e ? 2 * Math.sqrt(550) : 30,
						restSpeed: 10,
					};
				},
				So = function () {
					return { type: "keyframes", ease: "linear", duration: 0.3 };
				},
				Eo = function (e) {
					return { type: "keyframes", duration: 0.8, values: e };
				},
				Co = {
					x: wo,
					y: wo,
					z: wo,
					rotate: wo,
					rotateX: wo,
					rotateY: wo,
					rotateZ: wo,
					scaleX: ko,
					scaleY: ko,
					scale: ko,
					opacity: So,
					backgroundColor: So,
					color: So,
					default: ko,
				},
				jo = new Set(["brightness", "contrast", "saturate", "opacity"]);
			function Po(e) {
				var t = g(e.slice(0, -1).split("("), 2),
					n = t[0],
					r = t[1];
				if ("drop-shadow" === n) return e;
				var a = g(r.match(Xt) || [], 1)[0];
				if (!a) return e;
				var o = r.replace(a, ""),
					i = jo.has(n) ? 1 : 0;
				return a !== r && (i *= 100), n + "(" + i + o + ")";
			}
			var To = /([a-z-]*)\(.*?\)/g,
				_o = Object.assign(Object.assign({}, ca), {
					getAnimatableNone: function (e) {
						var t = e.match(To);
						return t ? t.map(Po).join(" ") : e;
					},
				}),
				No = ot(
					ot({}, sn),
					{},
					{
						color: ra,
						backgroundColor: ra,
						outlineColor: ra,
						fill: ra,
						stroke: ra,
						borderColor: ra,
						borderTopColor: ra,
						borderRightColor: ra,
						borderBottomColor: ra,
						borderLeftColor: ra,
						filter: _o,
						WebkitFilter: _o,
					}
				),
				Oo = function (e) {
					return No[e];
				};
			function Ro(e, t) {
				var n,
					r = Oo(e);
				return (
					r !== _o && (r = ca),
					null === (n = r.getAnimatableNone) || void 0 === n
						? void 0
						: n.call(r, t)
				);
			}
			var Lo = !1;
			function Ao(e, t) {
				var n = performance.now(),
					r = function r(a) {
						var o = a.timestamp - n;
						o >= t && (Za.read(r), e(o - t));
					};
				return (
					ao.read(r, !0),
					function () {
						return Za.read(r);
					}
				);
			}
			var Mo = [
					"when",
					"delay",
					"delayChildren",
					"staggerChildren",
					"staggerDirection",
					"repeat",
					"repeatType",
					"repeatDelay",
					"from",
				],
				zo = ["ease", "times", "yoyo", "flip", "loop"];
			function Do(e) {
				var t = e.ease,
					n = e.times,
					r = e.yoyo,
					a = e.flip,
					o = e.loop,
					i = xn(e, zo),
					l = ot({}, i);
				return (
					n && (l.offset = n),
					i.duration && (l.duration = so(i.duration)),
					i.repeatDelay && (l.repeatDelay = so(i.repeatDelay)),
					t &&
						(l.ease = (function (e) {
							return Array.isArray(e) && "number" !== typeof e[0];
						})(t)
							? t.map(bo)
							: bo(t)),
					"tween" === i.type && (l.type = "keyframes"),
					(r || o || a) &&
						(!0,
						r
							? (l.repeatType = "reverse")
							: o
							? (l.repeatType = "loop")
							: a && (l.repeatType = "mirror"),
						(l.repeat = o || r || a || i.repeat)),
					"spring" !== i.type && (l.type = "keyframes"),
					l
				);
			}
			function Vo(e, t) {
				var n, r;
				return null !==
					(r =
						null !== (n = (Ho(e, t) || {}).delay) && void 0 !== n
							? n
							: e.delay) && void 0 !== r
					? r
					: 0;
			}
			function Fo(e, t, n) {
				var r, a;
				return (
					Array.isArray(t.to) && void 0 === e.duration && (e.duration = 0.8),
					(function (e) {
						Array.isArray(e.to) &&
							null === e.to[0] &&
							((e.to = l(e.to)), (e.to[0] = e.from));
					})(t),
					(function (e) {
						e.when,
							e.delay,
							e.delayChildren,
							e.staggerChildren,
							e.staggerDirection,
							e.repeat,
							e.repeatType,
							e.repeatDelay,
							e.from;
						var t = xn(e, Mo);
						return !!Object.keys(t).length;
					})(e) ||
						(e = ot(
							ot({}, e),
							((r = n),
							ot({ to: (a = t.to) }, (zn(a) ? Eo : Co[r] || Co.default)(a)))
						)),
					ot(ot({}, t), Do(e))
				);
			}
			function Io(e, t, n, r, a) {
				var o = Ho(r, e) || {},
					i = void 0 !== o.from ? o.from : t.get(),
					l = xo(e, n);
				"none" === i && l && "string" === typeof n
					? (i = Ro(e, n))
					: Uo(i) && "string" === typeof n
					? (i = Bo(n))
					: !Array.isArray(n) && Uo(n) && "string" === typeof i && (n = Bo(i));
				var u = xo(e, i);
				return (
					"You are trying to animate "
						.concat(e, ' from "')
						.concat(i, '" to "')
						.concat(n, '". ')
						.concat(
							i,
							" is not an animatable value - to enable this animation set "
						)
						.concat(i, " to a value animatable to ")
						.concat(n, " via the `style` property."),
					u && l && !1 !== o.type
						? function () {
								var r = {
									from: i,
									to: n,
									velocity: t.getVelocity(),
									onComplete: a,
									onUpdate: function (e) {
										return t.set(e);
									},
								};
								return "inertia" === o.type || "decay" === o.type
									? (function (e) {
											var t,
												n = e.from,
												r = void 0 === n ? 0 : n,
												a = e.velocity,
												o = void 0 === a ? 0 : a,
												i = e.min,
												l = e.max,
												u = e.power,
												s = void 0 === u ? 0.8 : u,
												c = e.timeConstant,
												f = void 0 === c ? 750 : c,
												d = e.bounceStiffness,
												p = void 0 === d ? 500 : d,
												h = e.bounceDamping,
												v = void 0 === h ? 10 : h,
												m = e.restDelta,
												y = void 0 === m ? 1 : m,
												g = e.modifyTarget,
												b = e.driver,
												x = e.onUpdate,
												w = e.onComplete,
												k = e.onStop;
											function S(e) {
												return (
													(void 0 !== i && e < i) || (void 0 !== l && e > l)
												);
											}
											function E(e) {
												return void 0 === i
													? l
													: void 0 === l || Math.abs(i - e) < Math.abs(l - e)
													? i
													: l;
											}
											function C(e) {
												null === t || void 0 === t || t.stop(),
													(t = lo(
														Object.assign(Object.assign({}, e), {
															driver: b,
															onUpdate: function (t) {
																var n;
																null === x || void 0 === x || x(t),
																	null === (n = e.onUpdate) ||
																		void 0 === n ||
																		n.call(e, t);
															},
															onComplete: w,
															onStop: k,
														})
													));
											}
											function j(e) {
												C(
													Object.assign(
														{
															type: "spring",
															stiffness: p,
															damping: v,
															restDelta: y,
														},
														e
													)
												);
											}
											if (S(r)) j({ from: r, velocity: o, to: E(r) });
											else {
												var P = s * o + r;
												"undefined" !== typeof g && (P = g(P));
												var T,
													_,
													N = E(P),
													O = N === i ? -1 : 1;
												C({
													type: "decay",
													from: r,
													velocity: o,
													timeConstant: f,
													power: s,
													restDelta: y,
													modifyTarget: g,
													onUpdate: S(P)
														? function (e) {
																(T = _),
																	(_ = e),
																	(o = uo(e - T, ro().delta)),
																	((1 === O && e > N) || (-1 === O && e < N)) &&
																		j({ from: e, to: N, velocity: o });
														  }
														: void 0,
												});
											}
											return {
												stop: function () {
													return null === t || void 0 === t ? void 0 : t.stop();
												},
											};
									  })(ot(ot({}, r), o))
									: lo(
											ot(
												ot({}, Fo(o, r, e)),
												{},
												{
													onUpdate: function (e) {
														r.onUpdate(e), o.onUpdate && o.onUpdate(e);
													},
													onComplete: function () {
														r.onComplete(), o.onComplete && o.onComplete();
													},
												}
											)
									  );
						  }
						: function () {
								var e = Dn(n);
								return (
									t.set(e),
									a(),
									o.onUpdate && o.onUpdate(e),
									o.onComplete && o.onComplete(),
									{ stop: function () {} }
								);
						  }
				);
			}
			function Uo(e) {
				return (
					0 === e ||
					("string" === typeof e &&
						0 === parseFloat(e) &&
						-1 === e.indexOf(" "))
				);
			}
			function Bo(e) {
				return "number" === typeof e ? 0 : Ro("", e);
			}
			function Ho(e, t) {
				return e[t] || e.default || e;
			}
			function Wo(e, t, n) {
				var r =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				return (
					Lo && (r = { type: !1 }),
					t.start(function (a) {
						var o,
							i,
							l = Io(e, t, n, r, a),
							u = Vo(r, e),
							s = function () {
								return (o = l());
							};
						return (
							u ? (i = Ao(s, so(u))) : s(),
							function () {
								i && i(), o && o.stop();
							}
						);
					})
				);
			}
			var $o = function (e) {
				return /^0[^.\s]+$/.test(e);
			};
			function Qo(e, t) {
				-1 === e.indexOf(t) && e.push(t);
			}
			function Xo(e, t) {
				var n = e.indexOf(t);
				n > -1 && e.splice(n, 1);
			}
			var qo = (function () {
					function e() {
						u(this, e), (this.subscriptions = []);
					}
					return (
						c(e, [
							{
								key: "add",
								value: function (e) {
									var t = this;
									return (
										Qo(this.subscriptions, e),
										function () {
											return Xo(t.subscriptions, e);
										}
									);
								},
							},
							{
								key: "notify",
								value: function (e, t, n) {
									var r = this.subscriptions.length;
									if (r)
										if (1 === r) this.subscriptions[0](e, t, n);
										else
											for (var a = 0; a < r; a++) {
												var o = this.subscriptions[a];
												o && o(e, t, n);
											}
								},
							},
							{
								key: "getSize",
								value: function () {
									return this.subscriptions.length;
								},
							},
							{
								key: "clear",
								value: function () {
									this.subscriptions.length = 0;
								},
							},
						]),
						e
					);
				})(),
				Yo = (function () {
					function e(t) {
						var n,
							r = this;
						u(this, e),
							(this.version = "7.6.6"),
							(this.timeDelta = 0),
							(this.lastUpdated = 0),
							(this.updateSubscribers = new qo()),
							(this.velocityUpdateSubscribers = new qo()),
							(this.renderSubscribers = new qo()),
							(this.canTrackVelocity = !1),
							(this.updateAndNotify = function (e) {
								var t =
									!(arguments.length > 1 && void 0 !== arguments[1]) ||
									arguments[1];
								(r.prev = r.current), (r.current = e);
								var n = ro(),
									a = n.delta,
									o = n.timestamp;
								r.lastUpdated !== o &&
									((r.timeDelta = a),
									(r.lastUpdated = o),
									ao.postRender(r.scheduleVelocityCheck)),
									r.prev !== r.current && r.updateSubscribers.notify(r.current),
									r.velocityUpdateSubscribers.getSize() &&
										r.velocityUpdateSubscribers.notify(r.getVelocity()),
									t && r.renderSubscribers.notify(r.current);
							}),
							(this.scheduleVelocityCheck = function () {
								return ao.postRender(r.velocityCheck);
							}),
							(this.velocityCheck = function (e) {
								e.timestamp !== r.lastUpdated &&
									((r.prev = r.current),
									r.velocityUpdateSubscribers.notify(r.getVelocity()));
							}),
							(this.hasAnimated = !1),
							(this.prev = this.current = t),
							(this.canTrackVelocity =
								((n = this.current), !isNaN(parseFloat(n))));
					}
					return (
						c(e, [
							{
								key: "onChange",
								value: function (e) {
									return this.updateSubscribers.add(e);
								},
							},
							{
								key: "clearListeners",
								value: function () {
									this.updateSubscribers.clear();
								},
							},
							{
								key: "onRenderRequest",
								value: function (e) {
									return e(this.get()), this.renderSubscribers.add(e);
								},
							},
							{
								key: "attach",
								value: function (e) {
									this.passiveEffect = e;
								},
							},
							{
								key: "set",
								value: function (e) {
									var t =
										!(arguments.length > 1 && void 0 !== arguments[1]) ||
										arguments[1];
									t && this.passiveEffect
										? this.passiveEffect(e, this.updateAndNotify)
										: this.updateAndNotify(e, t);
								},
							},
							{
								key: "get",
								value: function () {
									return this.current;
								},
							},
							{
								key: "getPrevious",
								value: function () {
									return this.prev;
								},
							},
							{
								key: "getVelocity",
								value: function () {
									return this.canTrackVelocity
										? uo(
												parseFloat(this.current) - parseFloat(this.prev),
												this.timeDelta
										  )
										: 0;
								},
							},
							{
								key: "start",
								value: function (e) {
									var t = this;
									return (
										this.stop(),
										new Promise(function (n) {
											(t.hasAnimated = !0), (t.stopAnimation = e(n));
										}).then(function () {
											return t.clearAnimation();
										})
									);
								},
							},
							{
								key: "stop",
								value: function () {
									this.stopAnimation && this.stopAnimation(),
										this.clearAnimation();
								},
							},
							{
								key: "isAnimating",
								value: function () {
									return !!this.stopAnimation;
								},
							},
							{
								key: "clearAnimation",
								value: function () {
									this.stopAnimation = null;
								},
							},
							{
								key: "destroy",
								value: function () {
									this.updateSubscribers.clear(),
										this.renderSubscribers.clear(),
										this.stop();
								},
							},
						]),
						e
					);
				})();
			function Go(e) {
				return new Yo(e);
			}
			var Ko = function (e) {
					return function (t) {
						return t.test(e);
					};
				},
				Zo = [
					an,
					en,
					Jt,
					Zt,
					nn,
					tn,
					{
						test: function (e) {
							return "auto" === e;
						},
						parse: function (e) {
							return e;
						},
					},
				],
				Jo = function (e) {
					return Zo.find(Ko(e));
				},
				ei = [].concat(l(Zo), [ra, ca]),
				ti = function (e) {
					return ei.find(Ko(e));
				};
			function ni(e, t, n) {
				var r = e.getProps();
				return Mn(
					r,
					t,
					void 0 !== n ? n : r.custom,
					(function (e) {
						var t = {};
						return (
							e.values.forEach(function (e, n) {
								return (t[n] = e.get());
							}),
							t
						);
					})(e),
					(function (e) {
						var t = {};
						return (
							e.values.forEach(function (e, n) {
								return (t[n] = e.getVelocity());
							}),
							t
						);
					})(e)
				);
			}
			var ri = ["transitionEnd", "transition"];
			function ai(e, t, n) {
				e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Go(n));
			}
			function oi(e, t) {
				var n = ni(e, t),
					r = n ? e.makeTargetAnimatable(n, !1) : {},
					a = r.transitionEnd,
					o = void 0 === a ? {} : a,
					i = (r.transition, xn(r, ri));
				for (var l in (i = ot(ot({}, i), o))) {
					ai(e, l, Dn(i[l]));
				}
			}
			function ii(e, t) {
				if (t) return (t[e] || t.default || t).from;
			}
			function li(e) {
				return Boolean(Ft(e) && e.add);
			}
			var ui = ["transition", "transitionEnd"];
			function si(e, t) {
				var n,
					r =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					a = ni(e, t, r.custom),
					o = a || {},
					i = o.transition,
					l = void 0 === i ? e.getDefaultTransition() || {} : i;
				r.transitionOverride && (l = r.transitionOverride);
				var u = a
						? function () {
								return ci(e, a, r);
						  }
						: function () {
								return Promise.resolve();
						  },
					s = (
						null === (n = e.variantChildren) || void 0 === n ? void 0 : n.size
					)
						? function () {
								var n =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: 0,
									a = l,
									o = a.delayChildren,
									i = void 0 === o ? 0 : o,
									u = a.staggerChildren,
									s = a.staggerDirection;
								return fi(e, t, i + n, u, s, r);
						  }
						: function () {
								return Promise.resolve();
						  },
					c = l,
					f = c.when;
				if (f) {
					var d = "beforeChildren" === f ? [u, s] : [s, u],
						p = g(d, 2),
						h = p[0],
						v = p[1];
					return h().then(v);
				}
				return Promise.all([u(), s(r.delay)]);
			}
			function ci(e, t) {
				var n,
					r =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					a = r.delay,
					o = void 0 === a ? 0 : a,
					i = r.transitionOverride,
					l = r.type,
					u = e.makeTargetAnimatable(t),
					s = u.transition,
					c = void 0 === s ? e.getDefaultTransition() : s,
					f = u.transitionEnd,
					d = xn(u, ui),
					p = e.getValue("willChange");
				i && (c = i);
				var h = [],
					v =
						l &&
						(null === (n = e.animationState) || void 0 === n
							? void 0
							: n.getState()[l]),
					m = function (t) {
						var n = e.getValue(t),
							r = d[t];
						if (!n || void 0 === r || (v && pi(v, t))) return "continue";
						var a = ot({ delay: o }, c);
						e.shouldReduceMotion &&
							Dt.has(t) &&
							(a = ot(ot({}, a), {}, { type: !1, delay: 0 }));
						var i = Wo(t, n, r, a);
						li(p) &&
							(p.add(t),
							(i = i.then(function () {
								return p.remove(t);
							}))),
							h.push(i);
					};
				for (var y in d) m(y);
				return Promise.all(h).then(function () {
					f && oi(e, f);
				});
			}
			function fi(e, t) {
				var n =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
					r =
						arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
					a =
						arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
					o = arguments.length > 5 ? arguments[5] : void 0,
					i = [],
					l = (e.variantChildren.size - 1) * r,
					u =
						1 === a
							? function () {
									var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: 0;
									return e * r;
							  }
							: function () {
									var e =
										arguments.length > 0 && void 0 !== arguments[0]
											? arguments[0]
											: 0;
									return l - e * r;
							  };
				return (
					Array.from(e.variantChildren)
						.sort(di)
						.forEach(function (e, r) {
							i.push(
								si(e, t, ot(ot({}, o), {}, { delay: n + u(r) })).then(
									function () {
										return e.notify("AnimationComplete", t);
									}
								)
							);
						}),
					Promise.all(i)
				);
			}
			function di(e, t) {
				return e.sortNodePosition(t);
			}
			function pi(e, t) {
				var n = e.protectedKeys,
					r = e.needsAnimating,
					a = n.hasOwnProperty(t) && !0 !== r[t];
				return (r[t] = !1), a;
			}
			var hi = ["transition", "transitionEnd"],
				vi = [
					Bn.Animate,
					Bn.InView,
					Bn.Focus,
					Bn.Hover,
					Bn.Tap,
					Bn.Drag,
					Bn.Exit,
				],
				mi = [].concat(vi).reverse(),
				yi = vi.length;
			function gi(e) {
				return function (t) {
					return Promise.all(
						t.map(function (t) {
							var n = t.animation,
								r = t.options;
							return (function (e, t) {
								var n,
									r =
										arguments.length > 2 && void 0 !== arguments[2]
											? arguments[2]
											: {};
								if ((e.notify("AnimationStart", t), Array.isArray(t))) {
									var a = t.map(function (t) {
										return si(e, t, r);
									});
									n = Promise.all(a);
								} else if ("string" === typeof t) n = si(e, t, r);
								else {
									var o = "function" === typeof t ? ni(e, t, r.custom) : t;
									n = ci(e, o, r);
								}
								return n.then(function () {
									return e.notify("AnimationComplete", t);
								});
							})(e, n, r);
						})
					);
				};
			}
			function bi(e) {
				var t = gi(e),
					n = (function () {
						var e;
						return (
							rt((e = {}), Bn.Animate, xi(!0)),
							rt(e, Bn.InView, xi()),
							rt(e, Bn.Hover, xi()),
							rt(e, Bn.Tap, xi()),
							rt(e, Bn.Drag, xi()),
							rt(e, Bn.Focus, xi()),
							rt(e, Bn.Exit, xi()),
							e
						);
					})(),
					r = !0,
					a = function (t, n) {
						var r = ni(e, n);
						if (r) {
							r.transition;
							var a = r.transitionEnd,
								o = xn(r, hi);
							t = ot(ot(ot({}, t), o), a);
						}
						return t;
					};
				function o(o, i) {
					for (
						var u,
							s = e.getProps(),
							c = e.getVariantContext(!0) || {},
							f = [],
							d = new Set(),
							p = {},
							h = 1 / 0,
							v = function (t) {
								var v = mi[t],
									m = n[v],
									y = null !== (u = s[v]) && void 0 !== u ? u : c[v],
									g = ht(y),
									b = v === i ? m.isActive : null;
								!1 === b && (h = t);
								var x = y === c[v] && y !== s[v] && g;
								if (
									(x && r && e.manuallyAnimateOnMount && (x = !1),
									(m.protectedKeys = ot({}, p)),
									(!m.isActive && null === b) ||
										(!y && !m.prevProp) ||
										vt(y) ||
										"boolean" === typeof y)
								)
									return "continue";
								var w = (function (e, t) {
										if ("string" === typeof t) return t !== e;
										if (Array.isArray(t)) return !Nr(t, e);
										return !1;
									})(m.prevProp, y),
									k = w || (v === i && m.isActive && !x && g) || (t > h && g),
									S = Array.isArray(y) ? y : [y],
									E = S.reduce(a, {});
								!1 === b && (E = {});
								var C = m.prevResolvedValues,
									j = void 0 === C ? {} : C,
									P = ot(ot({}, j), E),
									T = function (e) {
										(k = !0), d.delete(e), (m.needsAnimating[e] = !0);
									};
								for (var _ in P) {
									var N = E[_],
										O = j[_];
									p.hasOwnProperty(_) ||
										(N !== O
											? zn(N) && zn(O)
												? !Nr(N, O) || w
													? T(_)
													: (m.protectedKeys[_] = !0)
												: void 0 !== N
												? T(_)
												: d.add(_)
											: void 0 !== N && d.has(_)
											? T(_)
											: (m.protectedKeys[_] = !0));
								}
								(m.prevProp = y),
									(m.prevResolvedValues = E),
									m.isActive && (p = ot(ot({}, p), E)),
									r && e.blockInitialAnimation && (k = !1),
									k &&
										!x &&
										f.push.apply(
											f,
											l(
												S.map(function (e) {
													return { animation: e, options: ot({ type: v }, o) };
												})
											)
										);
							},
							m = 0;
						m < yi;
						m++
					)
						v(m);
					if (d.size) {
						var y = {};
						d.forEach(function (t) {
							var n = e.getBaseTarget(t);
							void 0 !== n && (y[t] = n);
						}),
							f.push({ animation: y });
					}
					var g = Boolean(f.length);
					return (
						r && !1 === s.initial && !e.manuallyAnimateOnMount && (g = !1),
						(r = !1),
						g ? t(f) : Promise.resolve()
					);
				}
				return {
					animateChanges: o,
					setActive: function (t, r, a) {
						var i;
						if (n[t].isActive === r) return Promise.resolve();
						null === (i = e.variantChildren) ||
							void 0 === i ||
							i.forEach(function (e) {
								var n;
								return null === (n = e.animationState) || void 0 === n
									? void 0
									: n.setActive(t, r);
							}),
							(n[t].isActive = r);
						var l = o(a, t);
						for (var u in n) n[u].protectedKeys = {};
						return l;
					},
					setAnimateFunction: function (n) {
						t = n(e);
					},
					getState: function () {
						return n;
					},
				};
			}
			function xi() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				return {
					isActive: e,
					protectedKeys: {},
					needsAnimating: {},
					prevResolvedValues: {},
				};
			}
			var wi = {
					animation: Pr(function (e) {
						var n = e.visualElement,
							r = e.animate;
						n.animationState || (n.animationState = bi(n)),
							vt(r) &&
								(0, t.useEffect)(
									function () {
										return r.subscribe(n);
									},
									[r]
								);
					}),
					exit: Pr(function (e) {
						var n = e.custom,
							r = e.visualElement,
							a = g(_r(), 2),
							o = a[0],
							i = a[1],
							l = (0, t.useContext)(ut);
						(0, t.useEffect)(
							function () {
								r.isPresent = o;
								var e =
									r.animationState &&
									r.animationState.setActive(Bn.Exit, !o, {
										custom: (l && l.custom) || n,
									});
								e && !o && e.then(i);
							},
							[o]
						);
					}),
				},
				ki = function (e) {
					return e.hasOwnProperty("x") && e.hasOwnProperty("y");
				},
				Si = function (e) {
					return ki(e) && e.hasOwnProperty("z");
				},
				Ei = function (e, t) {
					return Math.abs(e - t);
				};
			function Ci(e, t) {
				if (fa(e) && fa(t)) return Ei(e, t);
				if (ki(e) && ki(t)) {
					var n = Ei(e.x, t.x),
						r = Ei(e.y, t.y),
						a = Si(e) && Si(t) ? Ei(e.z, t.z) : 0;
					return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(a, 2));
				}
			}
			var ji = (function () {
				function e(t, n) {
					var r = this,
						a =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: {},
						o = a.transformPagePoint;
					if (
						(u(this, e),
						(this.startEvent = null),
						(this.lastMoveEvent = null),
						(this.lastMoveEventInfo = null),
						(this.handlers = {}),
						(this.updatePoint = function () {
							if (r.lastMoveEvent && r.lastMoveEventInfo) {
								var e = _i(r.lastMoveEventInfo, r.history),
									t = null !== r.startEvent,
									n = Ci(e.offset, { x: 0, y: 0 }) >= 3;
								if (t || n) {
									var a = e.point,
										o = ro().timestamp;
									r.history.push(ot(ot({}, a), {}, { timestamp: o }));
									var i = r.handlers,
										l = i.onStart,
										u = i.onMove;
									t ||
										(l && l(r.lastMoveEvent, e),
										(r.startEvent = r.lastMoveEvent)),
										u && u(r.lastMoveEvent, e);
								}
							}
						}),
						(this.handlePointerMove = function (e, t) {
							(r.lastMoveEvent = e),
								(r.lastMoveEventInfo = Pi(t, r.transformPagePoint)),
								Xn(e) && 0 === e.buttons
									? r.handlePointerUp(e, t)
									: ao.update(r.updatePoint, !0);
						}),
						(this.handlePointerUp = function (e, t) {
							r.end();
							var n = r.handlers,
								a = n.onEnd,
								o = n.onSessionEnd,
								i = _i(Pi(t, r.transformPagePoint), r.history);
							r.startEvent && a && a(e, i), o && o(e, i);
						}),
						!(qn(t) && t.touches.length > 1))
					) {
						(this.handlers = n), (this.transformPagePoint = o);
						var i = Jn(t),
							l = Pi(i, this.transformPagePoint),
							s = l.point,
							c = ro(),
							f = c.timestamp;
						this.history = [ot(ot({}, s), {}, { timestamp: f })];
						var d = n.onSessionStart;
						d && d(t, _i(l, this.history)),
							(this.removeListeners = vr(
								ar(window, "pointermove", this.handlePointerMove),
								ar(window, "pointerup", this.handlePointerUp),
								ar(window, "pointercancel", this.handlePointerUp)
							));
					}
				}
				return (
					c(e, [
						{
							key: "updateHandlers",
							value: function (e) {
								this.handlers = e;
							},
						},
						{
							key: "end",
							value: function () {
								this.removeListeners && this.removeListeners(),
									Za.update(this.updatePoint);
							},
						},
					]),
					e
				);
			})();
			function Pi(e, t) {
				return t ? { point: t(e.point) } : e;
			}
			function Ti(e, t) {
				return { x: e.x - t.x, y: e.y - t.y };
			}
			function _i(e, t) {
				var n = e.point;
				return {
					point: n,
					delta: Ti(n, Oi(t)),
					offset: Ti(n, Ni(t)),
					velocity: Ri(t, 0.1),
				};
			}
			function Ni(e) {
				return e[0];
			}
			function Oi(e) {
				return e[e.length - 1];
			}
			function Ri(e, t) {
				if (e.length < 2) return { x: 0, y: 0 };
				for (
					var n = e.length - 1, r = null, a = Oi(e);
					n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > so(t)));

				)
					n--;
				if (!r) return { x: 0, y: 0 };
				var o = (a.timestamp - r.timestamp) / 1e3;
				if (0 === o) return { x: 0, y: 0 };
				var i = { x: (a.x - r.x) / o, y: (a.y - r.y) / o };
				return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
			}
			function Li(e) {
				return e.max - e.min;
			}
			function Ai(e) {
				var t =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: 0.01;
				return Ci(e, t) < n;
			}
			function Mi(e, t, n) {
				var r =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
				(e.origin = r),
					(e.originPoint = Br(t.min, t.max, e.origin)),
					(e.scale = Li(n) / Li(t)),
					(Ai(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
					(e.translate = Br(n.min, n.max, e.origin) - e.originPoint),
					(Ai(e.translate) || isNaN(e.translate)) && (e.translate = 0);
			}
			function zi(e, t, n, r) {
				Mi(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
					Mi(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
			}
			function Di(e, t, n) {
				(e.min = n.min + t.min), (e.max = e.min + Li(t));
			}
			function Vi(e, t, n) {
				(e.min = t.min - n.min), (e.max = e.min + Li(t));
			}
			function Fi(e, t, n) {
				Vi(e.x, t.x, n.x), Vi(e.y, t.y, n.y);
			}
			function Ii(e, t, n) {
				return {
					min: void 0 !== t ? e.min + t : void 0,
					max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
				};
			}
			function Ui(e, t) {
				var n = t.min - e.min,
					r = t.max - e.max;
				if (t.max - t.min < e.max - e.min) {
					var a = [r, n];
					(n = a[0]), (r = a[1]);
				}
				return { min: n, max: r };
			}
			var Bi = 0.35;
			function Hi(e, t, n) {
				return { min: Wi(e, t), max: Wi(e, n) };
			}
			function Wi(e, t) {
				var n;
				return "number" === typeof e
					? e
					: null !== (n = e[t]) && void 0 !== n
					? n
					: 0;
			}
			function $i(e) {
				return [e("x"), e("y")];
			}
			function Qi(e) {
				var t = e.top;
				return {
					x: { min: e.left, max: e.right },
					y: { min: t, max: e.bottom },
				};
			}
			function Xi(e) {
				return void 0 === e || 1 === e;
			}
			function qi(e) {
				var t = e.scale,
					n = e.scaleX,
					r = e.scaleY;
				return !Xi(t) || !Xi(n) || !Xi(r);
			}
			function Yi(e) {
				return qi(e) || Gi(e) || e.z || e.rotate || e.rotateX || e.rotateY;
			}
			function Gi(e) {
				return Ki(e.x) || Ki(e.y);
			}
			function Ki(e) {
				return e && "0%" !== e;
			}
			function Zi(e, t, n) {
				return n + t * (e - n);
			}
			function Ji(e, t, n, r, a) {
				return void 0 !== a && (e = Zi(e, a, r)), Zi(e, n, r) + t;
			}
			function el(e) {
				var t =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					n =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
					r = arguments.length > 3 ? arguments[3] : void 0,
					a = arguments.length > 4 ? arguments[4] : void 0;
				(e.min = Ji(e.min, t, n, r, a)), (e.max = Ji(e.max, t, n, r, a));
			}
			function tl(e, t) {
				var n = t.x,
					r = t.y;
				el(e.x, n.translate, n.scale, n.originPoint),
					el(e.y, r.translate, r.scale, r.originPoint);
			}
			function nl(e, t) {
				(e.min = e.min + t), (e.max = e.max + t);
			}
			function rl(e, t, n) {
				var r = g(n, 3),
					a = r[0],
					o = r[1],
					i = r[2],
					l = void 0 !== t[i] ? t[i] : 0.5,
					u = Br(e.min, e.max, l);
				el(e, t[a], t[o], u, t.scale);
			}
			var al = ["x", "scaleX", "originX"],
				ol = ["y", "scaleY", "originY"];
			function il(e, t) {
				rl(e.x, t, al), rl(e.y, t, ol);
			}
			function ll(e, t) {
				return Qi(
					(function (e, t) {
						if (!t) return e;
						var n = t({ x: e.left, y: e.top }),
							r = t({ x: e.right, y: e.bottom });
						return { top: n.y, left: n.x, bottom: r.y, right: r.x };
					})(e.getBoundingClientRect(), t)
				);
			}
			var ul = new WeakMap(),
				sl = (function () {
					function e(t) {
						u(this, e),
							(this.openGlobalLock = null),
							(this.isDragging = !1),
							(this.currentDirection = null),
							(this.originPoint = { x: 0, y: 0 }),
							(this.constraints = !1),
							(this.hasMutatedConstraints = !1),
							(this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
							(this.visualElement = t);
					}
					return (
						c(e, [
							{
								key: "start",
								value: function (e) {
									var t = this,
										n =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: {},
										r = n.snapToCursor,
										a = void 0 !== r && r;
									if (!1 !== this.visualElement.isPresent) {
										var o = function (e) {
												t.stopAnimation(),
													a && t.snapToCursor(Jn(e, "page").point);
											},
											i = function (e, n) {
												var r,
													a = t.getProps(),
													o = a.drag,
													i = a.dragPropagation,
													l = a.onDragStart;
												(!o ||
													i ||
													(t.openGlobalLock && t.openGlobalLock(),
													(t.openGlobalLock = sr(o)),
													t.openGlobalLock)) &&
													((t.isDragging = !0),
													(t.currentDirection = null),
													t.resolveConstraints(),
													t.visualElement.projection &&
														((t.visualElement.projection.isAnimationBlocked =
															!0),
														(t.visualElement.projection.target = void 0)),
													$i(function (e) {
														var n,
															r,
															a = t.getAxisMotionValue(e).get() || 0;
														if (Jt.test(a)) {
															var o =
																null ===
																	(r =
																		null === (n = t.visualElement.projection) ||
																		void 0 === n
																			? void 0
																			: n.layout) || void 0 === r
																	? void 0
																	: r.layoutBox[e];
															if (o) a = Li(o) * (parseFloat(a) / 100);
														}
														t.originPoint[e] = a;
													}),
													null === l || void 0 === l || l(e, n),
													null === (r = t.visualElement.animationState) ||
														void 0 === r ||
														r.setActive(Bn.Drag, !0));
											},
											l = function (e, n) {
												var r = t.getProps(),
													a = r.dragPropagation,
													o = r.dragDirectionLock,
													i = r.onDirectionLock,
													l = r.onDrag;
												if (a || t.openGlobalLock) {
													var u = n.offset;
													if (o && null === t.currentDirection)
														return (
															(t.currentDirection = fl(u)),
															void (
																null !== t.currentDirection &&
																(null === i ||
																	void 0 === i ||
																	i(t.currentDirection))
															)
														);
													t.updateAxis("x", n.point, u),
														t.updateAxis("y", n.point, u),
														t.visualElement.render(),
														null === l || void 0 === l || l(e, n);
												}
											},
											u = function (e, n) {
												return t.stop(e, n);
											};
										this.panSession = new ji(
											e,
											{
												onSessionStart: o,
												onStart: i,
												onMove: l,
												onSessionEnd: u,
											},
											{
												transformPagePoint:
													this.visualElement.getTransformPagePoint(),
											}
										);
									}
								},
							},
							{
								key: "stop",
								value: function (e, t) {
									var n = this.isDragging;
									if ((this.cancel(), n)) {
										var r = t.velocity;
										this.startAnimation(r);
										var a = this.getProps().onDragEnd;
										null === a || void 0 === a || a(e, t);
									}
								},
							},
							{
								key: "cancel",
								value: function () {
									var e, t;
									(this.isDragging = !1),
										this.visualElement.projection &&
											(this.visualElement.projection.isAnimationBlocked = !1),
										null === (e = this.panSession) || void 0 === e || e.end(),
										(this.panSession = void 0),
										!this.getProps().dragPropagation &&
											this.openGlobalLock &&
											(this.openGlobalLock(), (this.openGlobalLock = null)),
										null === (t = this.visualElement.animationState) ||
											void 0 === t ||
											t.setActive(Bn.Drag, !1);
								},
							},
							{
								key: "updateAxis",
								value: function (e, t, n) {
									var r = this.getProps().drag;
									if (n && cl(e, r, this.currentDirection)) {
										var a = this.getAxisMotionValue(e),
											o = this.originPoint[e] + n[e];
										this.constraints &&
											this.constraints[e] &&
											(o = (function (e, t, n) {
												var r = t.min,
													a = t.max;
												return (
													void 0 !== r && e < r
														? (e = n ? Br(r, e, n.min) : Math.max(e, r))
														: void 0 !== a &&
														  e > a &&
														  (e = n ? Br(a, e, n.max) : Math.min(e, a)),
													e
												);
											})(o, this.constraints[e], this.elastic[e])),
											a.set(o);
									}
								},
							},
							{
								key: "resolveConstraints",
								value: function () {
									var e = this,
										t = this.getProps(),
										n = t.dragConstraints,
										r = t.dragElastic,
										a = (this.visualElement.projection || {}).layout,
										o = this.constraints;
									n && pt(n)
										? this.constraints ||
										  (this.constraints = this.resolveRefConstraints())
										: (this.constraints =
												!(!n || !a) &&
												(function (e, t) {
													var n = t.top,
														r = t.left,
														a = t.bottom,
														o = t.right;
													return { x: Ii(e.x, r, o), y: Ii(e.y, n, a) };
												})(a.layoutBox, n)),
										(this.elastic = (function () {
											var e =
												arguments.length > 0 && void 0 !== arguments[0]
													? arguments[0]
													: Bi;
											return (
												!1 === e ? (e = 0) : !0 === e && (e = Bi),
												{ x: Hi(e, "left", "right"), y: Hi(e, "top", "bottom") }
											);
										})(r)),
										o !== this.constraints &&
											a &&
											this.constraints &&
											!this.hasMutatedConstraints &&
											$i(function (t) {
												e.getAxisMotionValue(t) &&
													(e.constraints[t] = (function (e, t) {
														var n = {};
														return (
															void 0 !== t.min && (n.min = t.min - e.min),
															void 0 !== t.max && (n.max = t.max - e.min),
															n
														);
													})(a.layoutBox[t], e.constraints[t]));
											});
								},
							},
							{
								key: "resolveRefConstraints",
								value: function () {
									var e = this.getProps(),
										t = e.dragConstraints,
										n = e.onMeasureDragConstraints;
									if (!t || !pt(t)) return !1;
									var r = t.current,
										a = this.visualElement.projection;
									if (!a || !a.layout) return !1;
									var o = (function (e, t, n) {
											var r = ll(e, n),
												a = t.scroll;
											return a && (nl(r.x, a.x), nl(r.y, a.y)), r;
										})(r, a.root, this.visualElement.getTransformPagePoint()),
										i = (function (e, t) {
											return { x: Ui(e.x, t.x), y: Ui(e.y, t.y) };
										})(a.layout.layoutBox, o);
									if (n) {
										var l = n(
											(function (e) {
												var t = e.x,
													n = e.y;
												return {
													top: n.min,
													right: t.max,
													bottom: n.max,
													left: t.min,
												};
											})(i)
										);
										(this.hasMutatedConstraints = !!l), l && (i = Qi(l));
									}
									return i;
								},
							},
							{
								key: "startAnimation",
								value: function (e) {
									var t = this,
										n = this.getProps(),
										r = n.drag,
										a = n.dragMomentum,
										o = n.dragElastic,
										i = n.dragTransition,
										l = n.dragSnapToOrigin,
										u = n.onDragTransitionEnd,
										s = this.constraints || {},
										c = $i(function (n) {
											var u;
											if (cl(n, r, t.currentDirection)) {
												var c =
													null !==
														(u = null === s || void 0 === s ? void 0 : s[n]) &&
													void 0 !== u
														? u
														: {};
												l && (c = { min: 0, max: 0 });
												var f = o ? 200 : 1e6,
													d = o ? 40 : 1e7,
													p = ot(
														ot(
															{
																type: "inertia",
																velocity: a ? e[n] : 0,
																bounceStiffness: f,
																bounceDamping: d,
																timeConstant: 750,
																restDelta: 1,
																restSpeed: 10,
															},
															i
														),
														c
													);
												return t.startAxisValueAnimation(n, p);
											}
										});
									return Promise.all(c).then(u);
								},
							},
							{
								key: "startAxisValueAnimation",
								value: function (e, t) {
									return Wo(e, this.getAxisMotionValue(e), 0, t);
								},
							},
							{
								key: "stopAnimation",
								value: function () {
									var e = this;
									$i(function (t) {
										return e.getAxisMotionValue(t).stop();
									});
								},
							},
							{
								key: "getAxisMotionValue",
								value: function (e) {
									var t,
										n,
										r = "_drag" + e.toUpperCase(),
										a = this.visualElement.getProps()[r];
									return (
										a ||
										this.visualElement.getValue(
											e,
											null !==
												(n =
													null ===
														(t = this.visualElement.getProps().initial) ||
													void 0 === t
														? void 0
														: t[e]) && void 0 !== n
												? n
												: 0
										)
									);
								},
							},
							{
								key: "snapToCursor",
								value: function (e) {
									var t = this;
									$i(function (n) {
										if (cl(n, t.getProps().drag, t.currentDirection)) {
											var r = t.visualElement.projection,
												a = t.getAxisMotionValue(n);
											if (r && r.layout) {
												var o = r.layout.layoutBox[n],
													i = o.min,
													l = o.max;
												a.set(e[n] - Br(i, l, 0.5));
											}
										}
									});
								},
							},
							{
								key: "scalePositionWithinConstraints",
								value: function () {
									var e,
										t = this;
									if (this.visualElement.current) {
										var n = this.getProps(),
											r = n.drag,
											a = n.dragConstraints,
											o = this.visualElement.projection;
										if (pt(a) && o && this.constraints) {
											this.stopAnimation();
											var i = { x: 0, y: 0 };
											$i(function (e) {
												var n = t.getAxisMotionValue(e);
												if (n) {
													var r = n.get();
													i[e] = (function (e, t) {
														var n = 0.5,
															r = Li(e),
															a = Li(t);
														return (
															a > r
																? (n = Ur(t.min, t.max - r, e.min))
																: r > a && (n = Ur(e.min, e.max - a, t.min)),
															Rr(0, 1, n)
														);
													})({ min: r, max: r }, t.constraints[e]);
												}
											});
											var l = this.visualElement.getProps().transformTemplate;
											(this.visualElement.current.style.transform = l
												? l({}, "")
												: "none"),
												null === (e = o.root) ||
													void 0 === e ||
													e.updateScroll(),
												o.updateLayout(),
												this.resolveConstraints(),
												$i(function (e) {
													if (cl(e, r, null)) {
														var n = t.getAxisMotionValue(e),
															a = t.constraints[e],
															o = a.min,
															l = a.max;
														n.set(Br(o, l, i[e]));
													}
												});
										}
									}
								},
							},
							{
								key: "addListeners",
								value: function () {
									var e,
										t = this;
									if (this.visualElement.current) {
										ul.set(this.visualElement, this);
										var n = ar(
												this.visualElement.current,
												"pointerdown",
												function (e) {
													var n = t.getProps(),
														r = n.drag,
														a = n.dragListener;
													r && (void 0 === a || a) && t.start(e);
												}
											),
											r = function () {
												pt(t.getProps().dragConstraints) &&
													(t.constraints = t.resolveRefConstraints());
											},
											a = this.visualElement.projection,
											o = a.addEventListener("measure", r);
										a &&
											!a.layout &&
											(null === (e = a.root) ||
												void 0 === e ||
												e.updateScroll(),
											a.updateLayout()),
											r();
										var i = $n(window, "resize", function () {
												return t.scalePositionWithinConstraints();
											}),
											l = a.addEventListener("didUpdate", function (e) {
												var n = e.delta,
													r = e.hasLayoutChanged;
												t.isDragging &&
													r &&
													($i(function (e) {
														var r = t.getAxisMotionValue(e);
														r &&
															((t.originPoint[e] += n[e].translate),
															r.set(r.get() + n[e].translate));
													}),
													t.visualElement.render());
											});
										return function () {
											i(), n(), o(), null === l || void 0 === l || l();
										};
									}
								},
							},
							{
								key: "getProps",
								value: function () {
									var e = this.visualElement.getProps(),
										t = e.drag,
										n = void 0 !== t && t,
										r = e.dragDirectionLock,
										a = void 0 !== r && r,
										o = e.dragPropagation,
										i = void 0 !== o && o,
										l = e.dragConstraints,
										u = void 0 !== l && l,
										s = e.dragElastic,
										c = void 0 === s ? Bi : s,
										f = e.dragMomentum,
										d = void 0 === f || f;
									return ot(
										ot({}, e),
										{},
										{
											drag: n,
											dragDirectionLock: a,
											dragPropagation: i,
											dragConstraints: u,
											dragElastic: c,
											dragMomentum: d,
										}
									);
								},
							},
						]),
						e
					);
				})();
			function cl(e, t, n) {
				return (!0 === t || t === e) && (null === n || n === e);
			}
			function fl(e) {
				var t =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
					n = null;
				return (
					Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n
				);
			}
			var dl = {
				pan: Pr(function (e) {
					var n = e.onPan,
						r = e.onPanStart,
						a = e.onPanEnd,
						o = e.onPanSessionStart,
						i = e.visualElement,
						l = n || r || a || o,
						u = (0, t.useRef)(null),
						s = (0, t.useContext)(it).transformPagePoint,
						c = {
							onSessionStart: o,
							onStart: r,
							onMove: n,
							onEnd: function (e, t) {
								(u.current = null), a && a(e, t);
							},
						};
					(0, t.useEffect)(function () {
						null !== u.current && u.current.updateHandlers(c);
					}),
						or(
							i,
							"pointerdown",
							l &&
								function (e) {
									u.current = new ji(e, c, { transformPagePoint: s });
								}
						),
						pr(function () {
							return u.current && u.current.end();
						});
				}),
				drag: Pr(function (e) {
					var n = e.dragControls,
						r = e.visualElement,
						a = St(function () {
							return new sl(r);
						});
					(0, t.useEffect)(
						function () {
							return n && n.subscribe(a);
						},
						[a, n]
					),
						(0, t.useEffect)(
							function () {
								return a.addListeners();
							},
							[a]
						);
				}),
			};
			function pl(e) {
				return "string" === typeof e && e.startsWith("var(--");
			}
			var hl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
			function vl(e) {
				var t = hl.exec(e);
				if (!t) return [,];
				var n = g(t, 3);
				return [n[1], n[2]];
			}
			function ml(e, t) {
				var n =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
				'Max CSS variable fallback depth detected in property "'.concat(
					e,
					'". This may indicate a circular fallback dependency.'
				);
				var r = vl(e),
					a = g(r, 2),
					o = a[0],
					i = a[1];
				if (o) {
					var l = window.getComputedStyle(t).getPropertyValue(o);
					return l ? l.trim() : pl(i) ? ml(i, t, n + 1) : i;
				}
			}
			function yl(e, t, n) {
				var r = Object.assign(
						{},
						((function (e) {
							if (null == e) throw new TypeError("Cannot destructure " + e);
						})(t),
						t)
					),
					a = e.current;
				if (!(a instanceof Element)) return { target: r, transitionEnd: n };
				for (var o in (n && (n = ot({}, n)),
				e.values.forEach(function (e) {
					var t = e.get();
					if (pl(t)) {
						var n = ml(t, a);
						n && e.set(n);
					}
				}),
				r)) {
					var i = r[o];
					if (pl(i)) {
						var l = ml(i, a);
						l && ((r[o] = l), n && void 0 === n[o] && (n[o] = i));
					}
				}
				return { target: r, transitionEnd: n };
			}
			var gl,
				bl = new Set([
					"width",
					"height",
					"top",
					"left",
					"right",
					"bottom",
					"x",
					"y",
				]),
				xl = function (e) {
					return bl.has(e);
				},
				wl = function (e, t) {
					e.set(t, !1), e.set(t);
				},
				kl = function (e) {
					return e === an || e === en;
				};
			!(function (e) {
				(e.width = "width"),
					(e.height = "height"),
					(e.left = "left"),
					(e.right = "right"),
					(e.top = "top"),
					(e.bottom = "bottom");
			})(gl || (gl = {}));
			var Sl = function (e, t) {
					return parseFloat(e.split(", ")[t]);
				},
				El = function (e, t) {
					return function (n, r) {
						var a = r.transform;
						if ("none" === a || !a) return 0;
						var o = a.match(/^matrix3d\((.+)\)$/);
						if (o) return Sl(o[1], t);
						var i = a.match(/^matrix\((.+)\)$/);
						return i ? Sl(i[1], e) : 0;
					};
				},
				Cl = new Set(["x", "y", "z"]),
				jl = zt.filter(function (e) {
					return !Cl.has(e);
				});
			function Pl(e) {
				var t = [];
				return (
					jl.forEach(function (n) {
						var r = e.getValue(n);
						void 0 !== r &&
							(t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
					}),
					t.length && e.render(),
					t
				);
			}
			var Tl = {
					width: function (e, t) {
						var n = e.x,
							r = t.paddingLeft,
							a = void 0 === r ? "0" : r,
							o = t.paddingRight,
							i = void 0 === o ? "0" : o;
						return n.max - n.min - parseFloat(a) - parseFloat(i);
					},
					height: function (e, t) {
						var n = e.y,
							r = t.paddingTop,
							a = void 0 === r ? "0" : r,
							o = t.paddingBottom,
							i = void 0 === o ? "0" : o;
						return n.max - n.min - parseFloat(a) - parseFloat(i);
					},
					top: function (e, t) {
						var n = t.top;
						return parseFloat(n);
					},
					left: function (e, t) {
						var n = t.left;
						return parseFloat(n);
					},
					bottom: function (e, t) {
						var n = e.y,
							r = t.top;
						return parseFloat(r) + (n.max - n.min);
					},
					right: function (e, t) {
						var n = e.x,
							r = t.left;
						return parseFloat(r) + (n.max - n.min);
					},
					x: El(4, 13),
					y: El(5, 14),
				},
				_l = function (e, t, n) {
					var r = t.measureViewportBox(),
						a = t.current,
						o = getComputedStyle(a),
						i = o.display,
						l = {};
					"none" === i && t.setStaticValue("display", e.display || "block"),
						n.forEach(function (e) {
							l[e] = Tl[e](r, o);
						}),
						t.render();
					var u = t.measureViewportBox();
					return (
						n.forEach(function (n) {
							var r = t.getValue(n);
							wl(r, l[n]), (e[n] = Tl[n](u, o));
						}),
						e
					);
				};
			function Nl(e, t, n, r) {
				return (function (e) {
					return Object.keys(e).some(xl);
				})(t)
					? (function (e, t) {
							var n =
									arguments.length > 2 && void 0 !== arguments[2]
										? arguments[2]
										: {},
								r =
									arguments.length > 3 && void 0 !== arguments[3]
										? arguments[3]
										: {};
							(t = ot({}, t)), (r = ot({}, r));
							var a = Object.keys(t).filter(xl),
								o = [],
								i = !1,
								l = [];
							if (
								(a.forEach(function (a) {
									var u = e.getValue(a);
									if (e.hasValue(a)) {
										var s,
											c = n[a],
											f = Jo(c),
											d = t[a];
										if (zn(d)) {
											var p = d.length,
												h = null === d[0] ? 1 : 0;
											(c = d[h]), (f = Jo(c));
											for (var v = h; v < p; v++)
												s ? Jo(d[v]) : (s = Jo(d[v])) === f || (kl(f) && kl(s));
										} else s = Jo(d);
										if (f !== s)
											if (kl(f) && kl(s)) {
												var m = u.get();
												"string" === typeof m && u.set(parseFloat(m)),
													"string" === typeof d
														? (t[a] = parseFloat(d))
														: Array.isArray(d) &&
														  s === en &&
														  (t[a] = d.map(parseFloat));
											} else
												(null === f || void 0 === f ? void 0 : f.transform) &&
												(null === s || void 0 === s ? void 0 : s.transform) &&
												(0 === c || 0 === d)
													? 0 === c
														? u.set(s.transform(c))
														: (t[a] = f.transform(d))
													: (i || ((o = Pl(e)), (i = !0)),
													  l.push(a),
													  (r[a] = void 0 !== r[a] ? r[a] : t[a]),
													  wl(u, d));
									}
								}),
								l.length)
							) {
								var u = l.indexOf("height") >= 0 ? window.pageYOffset : null,
									s = _l(t, e, l);
								return (
									o.length &&
										o.forEach(function (t) {
											var n = g(t, 2),
												r = n[0],
												a = n[1];
											e.getValue(r).set(a);
										}),
									e.render(),
									st && null !== u && window.scrollTo({ top: u }),
									{ target: s, transitionEnd: r }
								);
							}
							return { target: t, transitionEnd: r };
					  })(e, t, n, r)
					: { target: t, transitionEnd: r };
			}
			var Ol = { current: null },
				Rl = { current: !1 };
			var Ll = ["willChange"],
				Al = Object.keys(kt),
				Ml = Al.length,
				zl = [
					"AnimationStart",
					"AnimationComplete",
					"Update",
					"Unmount",
					"BeforeLayoutMeasure",
					"LayoutMeasure",
					"LayoutAnimationStart",
					"LayoutAnimationComplete",
				],
				Dl = (function () {
					function e(t) {
						var n = this,
							r = t.parent,
							a = t.props,
							o = t.reducedMotionConfig,
							i = t.visualState,
							l =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
						u(this, e),
							(this.current = null),
							(this.children = new Set()),
							(this.isVariantNode = !1),
							(this.isControllingVariants = !1),
							(this.shouldReduceMotion = null),
							(this.values = new Map()),
							(this.isPresent = !0),
							(this.valueSubscriptions = new Map()),
							(this.prevMotionValues = {}),
							(this.events = {}),
							(this.propEventSubscriptions = {}),
							(this.notifyUpdate = function () {
								return n.notify("Update", n.latestValues);
							}),
							(this.render = function () {
								n.current &&
									(n.triggerBuild(),
									n.renderInstance(
										n.current,
										n.renderState,
										n.props.style,
										n.projection
									));
							}),
							(this.scheduleRender = function () {
								return ao.render(n.render, !1, !0);
							});
						var s = i.latestValues,
							c = i.renderState;
						(this.latestValues = s),
							(this.baseTarget = ot({}, s)),
							(this.initialValues = a.initial ? ot({}, s) : {}),
							(this.renderState = c),
							(this.parent = r),
							(this.props = a),
							(this.depth = r ? r.depth + 1 : 0),
							(this.reducedMotionConfig = o),
							(this.options = l),
							(this.isControllingVariants = yt(a)),
							(this.isVariantNode = gt(a)),
							this.isVariantNode && (this.variantChildren = new Set()),
							(this.manuallyAnimateOnMount = Boolean(r && r.current));
						var f = this.scrapeMotionValuesFromProps(a),
							d = f.willChange,
							p = xn(f, Ll);
						for (var h in p) {
							var v = p[h];
							void 0 !== s[h] && Ft(v) && (v.set(s[h], !1), li(d) && d.add(h));
						}
						if (a.values)
							for (var m in a.values) {
								var y = a.values[m];
								void 0 !== s[m] && Ft(y) && y.set(s[m]);
							}
					}
					return (
						c(e, [
							{
								key: "scrapeMotionValuesFromProps",
								value: function (e) {
									return {};
								},
							},
							{
								key: "mount",
								value: function (e) {
									var t,
										n = this;
									(this.current = e),
										this.projection && this.projection.mount(e),
										this.parent &&
											this.isVariantNode &&
											!this.isControllingVariants &&
											(this.removeFromVariantTree =
												null === (t = this.parent) || void 0 === t
													? void 0
													: t.addVariantChild(this)),
										this.values.forEach(function (e, t) {
											return n.bindToMotionValue(t, e);
										}),
										Rl.current ||
											(function () {
												if (((Rl.current = !0), st))
													if (window.matchMedia) {
														var e = window.matchMedia(
																"(prefers-reduced-motion)"
															),
															t = function () {
																return (Ol.current = e.matches);
															};
														e.addListener(t), t();
													} else Ol.current = !1;
											})(),
										(this.shouldReduceMotion =
											"never" !== this.reducedMotionConfig &&
											("always" === this.reducedMotionConfig || Ol.current)),
										this.parent && this.parent.children.add(this),
										this.setProps(this.props);
								},
							},
							{
								key: "unmount",
								value: function () {
									var e, t, n;
									for (var r in (null === (e = this.projection) ||
										void 0 === e ||
										e.unmount(),
									Za.update(this.notifyUpdate),
									Za.render(this.render),
									this.valueSubscriptions.forEach(function (e) {
										return e();
									}),
									null === (t = this.removeFromVariantTree) ||
										void 0 === t ||
										t.call(this),
									null === (n = this.parent) ||
										void 0 === n ||
										n.children.delete(this),
									this.events))
										this.events[r].clear();
									this.current = null;
								},
							},
							{
								key: "bindToMotionValue",
								value: function (e, t) {
									var n = this,
										r = t.onChange(function (t) {
											(n.latestValues[e] = t),
												n.props.onUpdate && ao.update(n.notifyUpdate, !1, !0);
										}),
										a = t.onRenderRequest(this.scheduleRender);
									this.valueSubscriptions.set(e, function () {
										r(), a();
									});
								},
							},
							{
								key: "sortNodePosition",
								value: function (e) {
									return this.current &&
										this.sortInstanceNodePosition &&
										this.type === e.type
										? this.sortInstanceNodePosition(this.current, e.current)
										: 0;
								},
							},
							{
								key: "loadFeatures",
								value: function (e, n, r, a, o, i) {
									var l = this,
										u = [];
									for (var s = 0; s < Ml; s++) {
										var c = Al[s],
											f = kt[c],
											d = f.isEnabled,
											p = f.Component;
										d(e) &&
											p &&
											u.push(
												(0, t.createElement)(
													p,
													ot(ot({ key: c }, e), {}, { visualElement: this })
												)
											);
									}
									if (!this.projection && o) {
										this.projection = new o(
											a,
											this.latestValues,
											this.parent && this.parent.projection
										);
										var h = e.layoutId,
											v = e.layout,
											m = e.drag,
											y = e.dragConstraints,
											g = e.layoutScroll;
										this.projection.setOptions({
											layoutId: h,
											layout: v,
											alwaysMeasureLayout: Boolean(m) || (y && pt(y)),
											visualElement: this,
											scheduleRender: function () {
												return l.scheduleRender();
											},
											animationType: "string" === typeof v ? v : "both",
											initialPromotionConfig: i,
											layoutScroll: g,
										});
									}
									return u;
								},
							},
							{
								key: "triggerBuild",
								value: function () {
									this.build(
										this.renderState,
										this.latestValues,
										this.options,
										this.props
									);
								},
							},
							{
								key: "measureViewportBox",
								value: function () {
									return this.current
										? this.measureInstanceViewportBox(this.current, this.props)
										: { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
								},
							},
							{
								key: "getStaticValue",
								value: function (e) {
									return this.latestValues[e];
								},
							},
							{
								key: "setStaticValue",
								value: function (e, t) {
									this.latestValues[e] = t;
								},
							},
							{
								key: "makeTargetAnimatable",
								value: function (e) {
									var t =
										!(arguments.length > 1 && void 0 !== arguments[1]) ||
										arguments[1];
									return this.makeTargetAnimatableFromInstance(
										e,
										this.props,
										t
									);
								},
							},
							{
								key: "setProps",
								value: function (e) {
									(e.transformTemplate || this.props.transformTemplate) &&
										this.scheduleRender(),
										(this.props = e);
									for (var t = 0; t < zl.length; t++) {
										var n = zl[t];
										this.propEventSubscriptions[n] &&
											(this.propEventSubscriptions[n](),
											delete this.propEventSubscriptions[n]);
										var r = e["on" + n];
										r && (this.propEventSubscriptions[n] = this.on(n, r));
									}
									this.prevMotionValues = (function (e, t, n) {
										var r = t.willChange;
										for (var a in t) {
											var o = t[a],
												i = n[a];
											if (Ft(o)) e.addValue(a, o), li(r) && r.add(a);
											else if (Ft(i))
												e.addValue(a, Go(o)), li(r) && r.remove(a);
											else if (i !== o)
												if (e.hasValue(a)) {
													var l = e.getValue(a);
													!l.hasAnimated && l.set(o);
												} else {
													var u = e.getStaticValue(a);
													e.addValue(a, Go(void 0 !== u ? u : o));
												}
										}
										for (var s in n) void 0 === t[s] && e.removeValue(s);
										return t;
									})(
										this,
										this.scrapeMotionValuesFromProps(e),
										this.prevMotionValues
									);
								},
							},
							{
								key: "getProps",
								value: function () {
									return this.props;
								},
							},
							{
								key: "getVariant",
								value: function (e) {
									var t;
									return null === (t = this.props.variants) || void 0 === t
										? void 0
										: t[e];
								},
							},
							{
								key: "getDefaultTransition",
								value: function () {
									return this.props.transition;
								},
							},
							{
								key: "getTransformPagePoint",
								value: function () {
									return this.props.transformPagePoint;
								},
							},
							{
								key: "getClosestVariantNode",
								value: function () {
									var e;
									return this.isVariantNode
										? this
										: null === (e = this.parent) || void 0 === e
										? void 0
										: e.getClosestVariantNode();
								},
							},
							{
								key: "getVariantContext",
								value: function () {
									var e,
										t,
										n =
											arguments.length > 0 &&
											void 0 !== arguments[0] &&
											arguments[0];
									if (n)
										return null === (e = this.parent) || void 0 === e
											? void 0
											: e.getVariantContext();
									if (!this.isControllingVariants) {
										var r =
											(null === (t = this.parent) || void 0 === t
												? void 0
												: t.getVariantContext()) || {};
										return (
											void 0 !== this.props.initial &&
												(r.initial = this.props.initial),
											r
										);
									}
									for (var a = {}, o = 0; o < Fl; o++) {
										var i = Vl[o],
											l = this.props[i];
										(ht(l) || !1 === l) && (a[i] = l);
									}
									return a;
								},
							},
							{
								key: "addVariantChild",
								value: function (e) {
									var t,
										n = this.getClosestVariantNode();
									if (n)
										return (
											null === (t = n.variantChildren) ||
												void 0 === t ||
												t.add(e),
											function () {
												return n.variantChildren.delete(e);
											}
										);
								},
							},
							{
								key: "addValue",
								value: function (e, t) {
									this.hasValue(e) && this.removeValue(e),
										this.values.set(e, t),
										(this.latestValues[e] = t.get()),
										this.bindToMotionValue(e, t);
								},
							},
							{
								key: "removeValue",
								value: function (e) {
									var t;
									this.values.delete(e),
										null === (t = this.valueSubscriptions.get(e)) ||
											void 0 === t ||
											t(),
										this.valueSubscriptions.delete(e),
										delete this.latestValues[e],
										this.removeValueFromRenderState(e, this.renderState);
								},
							},
							{
								key: "hasValue",
								value: function (e) {
									return this.values.has(e);
								},
							},
							{
								key: "getValue",
								value: function (e, t) {
									if (this.props.values && this.props.values[e])
										return this.props.values[e];
									var n = this.values.get(e);
									return (
										void 0 === n &&
											void 0 !== t &&
											((n = Go(t)), this.addValue(e, n)),
										n
									);
								},
							},
							{
								key: "readValue",
								value: function (e) {
									return void 0 === this.latestValues[e] && this.current
										? this.readValueFromInstance(this.current, e, this.options)
										: this.latestValues[e];
								},
							},
							{
								key: "setBaseTarget",
								value: function (e, t) {
									this.baseTarget[e] = t;
								},
							},
							{
								key: "getBaseTarget",
								value: function (e) {
									var t,
										n = this.props.initial,
										r =
											"string" === typeof n || "object" === typeof n
												? null === (t = Mn(this.props, n)) || void 0 === t
													? void 0
													: t[e]
												: void 0;
									if (n && void 0 !== r) return r;
									var a = this.getBaseTargetFromProps(this.props, e);
									return void 0 === a || Ft(a)
										? void 0 !== this.initialValues[e] && void 0 === r
											? void 0
											: this.baseTarget[e]
										: a;
								},
							},
							{
								key: "on",
								value: function (e, t) {
									return (
										this.events[e] || (this.events[e] = new qo()),
										this.events[e].add(t)
									);
								},
							},
							{
								key: "notify",
								value: function (e) {
									for (
										var t,
											n,
											r = arguments.length,
											a = new Array(r > 1 ? r - 1 : 0),
											o = 1;
										o < r;
										o++
									)
										a[o - 1] = arguments[o];
									null === (n = this.events[e]) ||
										void 0 === n ||
										(t = n).notify.apply(t, a);
								},
							},
						]),
						e
					);
				})(),
				Vl = ["initial"].concat(l(vi)),
				Fl = Vl.length,
				Il = ["transition", "transitionEnd"],
				Ul = (function (e) {
					d(n, e);
					var t = y(n);
					function n() {
						return u(this, n), t.apply(this, arguments);
					}
					return (
						c(n, [
							{
								key: "sortInstanceNodePosition",
								value: function (e, t) {
									return 2 & e.compareDocumentPosition(t) ? 1 : -1;
								},
							},
							{
								key: "getBaseTargetFromProps",
								value: function (e, t) {
									var n;
									return null === (n = e.style) || void 0 === n ? void 0 : n[t];
								},
							},
							{
								key: "removeValueFromRenderState",
								value: function (e, t) {
									var n = t.vars,
										r = t.style;
									delete n[e], delete r[e];
								},
							},
							{
								key: "makeTargetAnimatableFromInstance",
								value: function (e, t, n) {
									var r = e.transition,
										a = e.transitionEnd,
										o = xn(e, Il),
										i = t.transformValues,
										l = (function (e, t, n) {
											var r,
												a = {};
											for (var o in e) {
												var i = ii(o, t);
												a[o] =
													void 0 !== i
														? i
														: null === (r = n.getValue(o)) || void 0 === r
														? void 0
														: r.get();
											}
											return a;
										})(o, r || {}, this);
									if (
										(i && (a && (a = i(a)), o && (o = i(o)), l && (l = i(l))),
										n)
									) {
										!(function (e, t, n) {
											var r,
												a,
												o = Object.keys(t).filter(function (t) {
													return !e.hasValue(t);
												}),
												i = o.length;
											if (i)
												for (var l = 0; l < i; l++) {
													var u = o[l],
														s = t[u],
														c = null;
													Array.isArray(s) && (c = s[0]),
														null === c &&
															(c =
																null !==
																	(a =
																		null !== (r = n[u]) && void 0 !== r
																			? r
																			: e.readValue(u)) && void 0 !== a
																	? a
																	: t[u]),
														void 0 !== c &&
															null !== c &&
															("string" === typeof c &&
															(/^\-?\d*\.?\d+$/.test(c) || $o(c))
																? (c = parseFloat(c))
																: !ti(c) && ca.test(s) && (c = Ro(u, s)),
															e.addValue(u, Go(c)),
															void 0 === n[u] && (n[u] = c),
															null !== c && e.setBaseTarget(u, c));
												}
										})(this, o, l);
										var u = (function (e, t, n, r) {
											var a = yl(e, t, r);
											return Nl(e, (t = a.target), n, (r = a.transitionEnd));
										})(this, o, l, a);
										(a = u.transitionEnd), (o = u.target);
									}
									return ot({ transition: r, transitionEnd: a }, o);
								},
							},
						]),
						n
					);
				})(Dl);
			var Bl = (function (e) {
					d(n, e);
					var t = y(n);
					function n() {
						return u(this, n), t.apply(this, arguments);
					}
					return (
						c(n, [
							{
								key: "readValueFromInstance",
								value: function (e, t) {
									if (Dt.has(t)) {
										var n = Oo(t);
										return (n && n.default) || 0;
									}
									var r,
										a = ((r = e), window.getComputedStyle(r)),
										o = (Ht(t) ? a.getPropertyValue(t) : a[t]) || 0;
									return "string" === typeof o ? o.trim() : o;
								},
							},
							{
								key: "measureInstanceViewportBox",
								value: function (e, t) {
									return ll(e, t.transformPagePoint);
								},
							},
							{
								key: "build",
								value: function (e, t, n, r) {
									cn(e, t, n, r.transformTemplate);
								},
							},
							{
								key: "scrapeMotionValuesFromProps",
								value: function (e) {
									return Ln(e);
								},
							},
							{
								key: "renderInstance",
								value: function (e, t, n, r) {
									Nn(e, t, n, r);
								},
							},
						]),
						n
					);
				})(Ul),
				Hl = (function (e) {
					d(n, e);
					var t = y(n);
					function n() {
						return u(this, n), t.apply(this, arguments);
					}
					return (
						c(n, [
							{
								key: "getBaseTargetFromProps",
								value: function (e, t) {
									return e[t];
								},
							},
							{
								key: "readValueFromInstance",
								value: function (e, t) {
									var n;
									return Dt.has(t)
										? (null === (n = Oo(t)) || void 0 === n
												? void 0
												: n.default) || 0
										: ((t = On.has(t) ? t : _n(t)), e.getAttribute(t));
								},
							},
							{
								key: "measureInstanceViewportBox",
								value: function () {
									return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
								},
							},
							{
								key: "scrapeMotionValuesFromProps",
								value: function (e) {
									return An(e);
								},
							},
							{
								key: "build",
								value: function (e, t, n, r) {
									Cn(e, t, n, r.transformTemplate);
								},
							},
							{
								key: "renderInstance",
								value: function (e, t, n, r) {
									Rn(e, t, 0, r);
								},
							},
						]),
						n
					);
				})(Ul),
				Wl = function (e, t) {
					return At(e)
						? new Hl(t, { enableHardwareAcceleration: !1 })
						: new Bl(t, { enableHardwareAcceleration: !0 });
				};
			function $l(e, t) {
				return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
			}
			var Ql = {
					correct: function (e, t) {
						if (!t.target) return e;
						if ("string" === typeof e) {
							if (!en.test(e)) return e;
							e = parseFloat(e);
						}
						var n = $l(e, t.target.x),
							r = $l(e, t.target.y);
						return "".concat(n, "% ").concat(r, "%");
					},
				},
				Xl = "_$css",
				ql = {
					correct: function (e, t) {
						var n = t.treeScale,
							r = t.projectionDelta,
							a = e,
							o = e.includes("var("),
							i = [];
						o &&
							(e = e.replace(hl, function (e) {
								return i.push(e), Xl;
							}));
						var l = ca.parse(e);
						if (l.length > 5) return a;
						var u = ca.createTransformer(e),
							s = "number" !== typeof l[0] ? 1 : 0,
							c = r.x.scale * n.x,
							f = r.y.scale * n.y;
						(l[0 + s] /= c), (l[1 + s] /= f);
						var d = Br(c, f, 0.5);
						"number" === typeof l[2 + s] && (l[2 + s] /= d),
							"number" === typeof l[3 + s] && (l[3 + s] /= d);
						var p = u(l);
						if (o) {
							var h = 0;
							p = p.replace(Xl, function () {
								var e = i[h];
								return h++, e;
							});
						}
						return p;
					},
				},
				Yl = (function (e) {
					d(n, e);
					var t = y(n);
					function n() {
						return u(this, n), t.apply(this, arguments);
					}
					return (
						c(n, [
							{
								key: "componentDidMount",
								value: function () {
									var e,
										t = this,
										n = this.props,
										r = n.visualElement,
										a = n.layoutGroup,
										o = n.switchLayoutGroup,
										i = n.layoutId,
										l = r.projection;
									(e = Gl),
										Object.assign(Mt, e),
										l &&
											(a.group && a.group.add(l),
											o && o.register && i && o.register(l),
											l.root.didUpdate(),
											l.addEventListener("animationComplete", function () {
												t.safeToRemove();
											}),
											l.setOptions(
												ot(
													ot({}, l.options),
													{},
													{
														onExitComplete: function () {
															return t.safeToRemove();
														},
													}
												)
											)),
										(Et.hasEverUpdated = !0);
								},
							},
							{
								key: "getSnapshotBeforeUpdate",
								value: function (e) {
									var t = this,
										n = this.props,
										r = n.layoutDependency,
										a = n.visualElement,
										o = n.drag,
										i = n.isPresent,
										l = a.projection;
									return l
										? ((l.isPresent = i),
										  o || e.layoutDependency !== r || void 0 === r
												? l.willUpdate()
												: this.safeToRemove(),
										  e.isPresent !== i &&
												(i
													? l.promote()
													: l.relegate() ||
													  ao.postRender(function () {
															var e;
															(null === (e = l.getStack()) || void 0 === e
																? void 0
																: e.members.length) || t.safeToRemove();
													  })),
										  null)
										: null;
								},
							},
							{
								key: "componentDidUpdate",
								value: function () {
									var e = this.props.visualElement.projection;
									e &&
										(e.root.didUpdate(),
										!e.currentAnimation && e.isLead() && this.safeToRemove());
								},
							},
							{
								key: "componentWillUnmount",
								value: function () {
									var e = this.props,
										t = e.visualElement,
										n = e.layoutGroup,
										r = e.switchLayoutGroup,
										a = t.projection;
									a &&
										(a.scheduleCheckAfterUnmount(),
										(null === n || void 0 === n ? void 0 : n.group) &&
											n.group.remove(a),
										(null === r || void 0 === r ? void 0 : r.deregister) &&
											r.deregister(a));
								},
							},
							{
								key: "safeToRemove",
								value: function () {
									var e = this.props.safeToRemove;
									null === e || void 0 === e || e();
								},
							},
							{
								key: "render",
								value: function () {
									return null;
								},
							},
						]),
						n
					);
				})(t.Component);
			var Gl = {
					borderRadius: ot(
						ot({}, Ql),
						{},
						{
							applyTo: [
								"borderTopLeftRadius",
								"borderTopRightRadius",
								"borderBottomLeftRadius",
								"borderBottomRightRadius",
							],
						}
					),
					borderTopLeftRadius: Ql,
					borderTopRightRadius: Ql,
					borderBottomLeftRadius: Ql,
					borderBottomRightRadius: Ql,
					boxShadow: ql,
				},
				Kl = {
					measureLayout: function (e) {
						var n = g(_r(), 2),
							r = n[0],
							a = n[1],
							o = (0, t.useContext)(jt);
						return t.createElement(
							Yl,
							ot(
								ot({}, e),
								{},
								{
									layoutGroup: o,
									switchLayoutGroup: (0, t.useContext)(Tt),
									isPresent: r,
									safeToRemove: a,
								}
							)
						);
					},
				};
			function Zl(e, t) {
				var n =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					r = Ft(e) ? e : Go(e);
				return (
					Wo("", r, t, n),
					{
						stop: function () {
							return r.stop();
						},
						isAnimating: function () {
							return r.isAnimating();
						},
					}
				);
			}
			var Jl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
				eu = Jl.length,
				tu = function (e) {
					return "string" === typeof e ? parseFloat(e) : e;
				},
				nu = function (e) {
					return "number" === typeof e || en.test(e);
				};
			function ru(e, t, n, r, a, o) {
				var i, l, u, s;
				a
					? ((e.opacity = Br(
							0,
							null !== (i = n.opacity) && void 0 !== i ? i : 1,
							ou(r)
					  )),
					  (e.opacityExit = Br(
							null !== (l = t.opacity) && void 0 !== l ? l : 1,
							0,
							iu(r)
					  )))
					: o &&
					  (e.opacity = Br(
							null !== (u = t.opacity) && void 0 !== u ? u : 1,
							null !== (s = n.opacity) && void 0 !== s ? s : 1,
							r
					  ));
				for (var c = 0; c < eu; c++) {
					var f = "border".concat(Jl[c], "Radius"),
						d = au(t, f),
						p = au(n, f);
					if (void 0 !== d || void 0 !== p)
						d || (d = 0),
							p || (p = 0),
							0 === d || 0 === p || nu(d) === nu(p)
								? ((e[f] = Math.max(Br(tu(d), tu(p), r), 0)),
								  (Jt.test(p) || Jt.test(d)) && (e[f] += "%"))
								: (e[f] = p);
				}
				(t.rotate || n.rotate) &&
					(e.rotate = Br(t.rotate || 0, n.rotate || 0, r));
			}
			function au(e, t) {
				var n;
				return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius;
			}
			var ou = lu(0, 0.5, Oa),
				iu = lu(0.5, 0.95, ja);
			function lu(e, t, n) {
				return function (r) {
					return r < e ? 0 : r > t ? 1 : n(Ur(e, t, r));
				};
			}
			function uu(e, t) {
				(e.min = t.min), (e.max = t.max);
			}
			function su(e, t) {
				uu(e.x, t.x), uu(e.y, t.y);
			}
			function cu(e, t, n, r, a) {
				return (
					(e = Zi((e -= t), 1 / n, r)), void 0 !== a && (e = Zi(e, 1 / a, r)), e
				);
			}
			function fu(e, t, n, r, a) {
				var o = g(n, 3),
					i = o[0],
					l = o[1],
					u = o[2];
				!(function (e) {
					var t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: 0,
						n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: 1,
						r =
							arguments.length > 3 && void 0 !== arguments[3]
								? arguments[3]
								: 0.5,
						a = arguments.length > 4 ? arguments[4] : void 0,
						o =
							arguments.length > 5 && void 0 !== arguments[5]
								? arguments[5]
								: e,
						i =
							arguments.length > 6 && void 0 !== arguments[6]
								? arguments[6]
								: e;
					if (Jt.test(t)) {
						(t = parseFloat(t)), (t = Br(i.min, i.max, t / 100) - i.min);
					}
					if ("number" === typeof t) {
						var l = Br(o.min, o.max, r);
						e === o && (l -= t),
							(e.min = cu(e.min, t, n, l, a)),
							(e.max = cu(e.max, t, n, l, a));
					}
				})(e, t[i], t[l], t[u], t.scale, r, a);
			}
			var du = ["x", "scaleX", "originX"],
				pu = ["y", "scaleY", "originY"];
			function hu(e, t, n, r) {
				fu(
					e.x,
					t,
					du,
					null === n || void 0 === n ? void 0 : n.x,
					null === r || void 0 === r ? void 0 : r.x
				),
					fu(
						e.y,
						t,
						pu,
						null === n || void 0 === n ? void 0 : n.y,
						null === r || void 0 === r ? void 0 : r.y
					);
			}
			function vu(e) {
				return 0 === e.translate && 1 === e.scale;
			}
			function mu(e) {
				return vu(e.x) && vu(e.y);
			}
			function yu(e, t) {
				return (
					e.x.min === t.x.min &&
					e.x.max === t.x.max &&
					e.y.min === t.y.min &&
					e.y.max === t.y.max
				);
			}
			function gu(e) {
				return Li(e.x) / Li(e.y);
			}
			var bu = (function () {
				function e() {
					u(this, e), (this.members = []);
				}
				return (
					c(e, [
						{
							key: "add",
							value: function (e) {
								Qo(this.members, e), e.scheduleRender();
							},
						},
						{
							key: "remove",
							value: function (e) {
								if (
									(Xo(this.members, e),
									e === this.prevLead && (this.prevLead = void 0),
									e === this.lead)
								) {
									var t = this.members[this.members.length - 1];
									t && this.promote(t);
								}
							},
						},
						{
							key: "relegate",
							value: function (e) {
								var t,
									n = this.members.findIndex(function (t) {
										return e === t;
									});
								if (0 === n) return !1;
								for (var r = n; r >= 0; r--) {
									var a = this.members[r];
									if (!1 !== a.isPresent) {
										t = a;
										break;
									}
								}
								return !!t && (this.promote(t), !0);
							},
						},
						{
							key: "promote",
							value: function (e, t) {
								var n,
									r = this.lead;
								e !== r &&
									((this.prevLead = r),
									(this.lead = e),
									e.show(),
									r &&
										(r.instance && r.scheduleRender(),
										e.scheduleRender(),
										(e.resumeFrom = r),
										t && (e.resumeFrom.preserveOpacity = !0),
										r.snapshot &&
											((e.snapshot = r.snapshot),
											(e.snapshot.latestValues =
												r.animationValues || r.latestValues),
											(e.snapshot.isShared = !0)),
										(null === (n = e.root) || void 0 === n
											? void 0
											: n.isUpdating) && (e.isLayoutDirty = !0),
										!1 === e.options.crossfade && r.hide()));
							},
						},
						{
							key: "exitAnimationComplete",
							value: function () {
								this.members.forEach(function (e) {
									var t, n, r, a, o;
									null === (n = (t = e.options).onExitComplete) ||
										void 0 === n ||
										n.call(t),
										null ===
											(o =
												null === (r = e.resumingFrom) || void 0 === r
													? void 0
													: (a = r.options).onExitComplete) ||
											void 0 === o ||
											o.call(a);
								});
							},
						},
						{
							key: "scheduleRender",
							value: function () {
								this.members.forEach(function (e) {
									e.instance && e.scheduleRender(!1);
								});
							},
						},
						{
							key: "removeLeadSnapshot",
							value: function () {
								this.lead &&
									this.lead.snapshot &&
									(this.lead.snapshot = void 0);
							},
						},
					]),
					e
				);
			})();
			function xu(e, t, n) {
				var r = e.x.translate / t.x,
					a = e.y.translate / t.y,
					o = "translate3d(".concat(r, "px, ").concat(a, "px, 0) ");
				if (((o += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")), n)) {
					var i = n.rotate,
						l = n.rotateX,
						u = n.rotateY;
					i && (o += "rotate(".concat(i, "deg) ")),
						l && (o += "rotateX(".concat(l, "deg) ")),
						u && (o += "rotateY(".concat(u, "deg) "));
				}
				var s = e.x.scale * t.x,
					c = e.y.scale * t.y;
				return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ===
					(o += "scale(".concat(s, ", ").concat(c, ")"))
					? "none"
					: o;
			}
			var wu = function (e, t) {
					return e.depth - t.depth;
				},
				ku = (function () {
					function e() {
						u(this, e), (this.children = []), (this.isDirty = !1);
					}
					return (
						c(e, [
							{
								key: "add",
								value: function (e) {
									Qo(this.children, e), (this.isDirty = !0);
								},
							},
							{
								key: "remove",
								value: function (e) {
									Xo(this.children, e), (this.isDirty = !0);
								},
							},
							{
								key: "forEach",
								value: function (e) {
									this.isDirty && this.children.sort(wu),
										(this.isDirty = !1),
										this.children.forEach(e);
								},
							},
						]),
						e
					);
				})(),
				Su = ["", "X", "Y", "Z"];
			function Eu(e) {
				var t = e.attachResizeListener,
					n = e.defaultParent,
					r = e.measureScroll,
					a = e.checkIsScrollRoot,
					o = e.resetTransform;
				return (function () {
					function e(t) {
						var r = this,
							a =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {},
							o =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: null === n || void 0 === n
									? void 0
									: n();
						u(this, e),
							(this.children = new Set()),
							(this.options = {}),
							(this.isTreeAnimating = !1),
							(this.isAnimationBlocked = !1),
							(this.isLayoutDirty = !1),
							(this.updateManuallyBlocked = !1),
							(this.updateBlockedByResize = !1),
							(this.isUpdating = !1),
							(this.isSVG = !1),
							(this.needsReset = !1),
							(this.shouldResetTransform = !1),
							(this.treeScale = { x: 1, y: 1 }),
							(this.eventHandlers = new Map()),
							(this.potentialNodes = new Map()),
							(this.checkUpdateFailed = function () {
								r.isUpdating && ((r.isUpdating = !1), r.clearAllSnapshots());
							}),
							(this.updateProjection = function () {
								r.nodes.forEach(Ou), r.nodes.forEach(Ru);
							}),
							(this.hasProjected = !1),
							(this.isVisible = !0),
							(this.animationProgress = 0),
							(this.sharedNodes = new Map()),
							(this.elementId = t),
							(this.latestValues = a),
							(this.root = o ? o.root || o : this),
							(this.path = o ? [].concat(l(o.path), [o]) : []),
							(this.parent = o),
							(this.depth = o ? o.depth + 1 : 0),
							t && this.root.registerPotentialNode(t, this);
						for (var i = 0; i < this.path.length; i++)
							this.path[i].shouldResetTransform = !0;
						this.root === this && (this.nodes = new ku());
					}
					return (
						c(e, [
							{
								key: "addEventListener",
								value: function (e, t) {
									return (
										this.eventHandlers.has(e) ||
											this.eventHandlers.set(e, new qo()),
										this.eventHandlers.get(e).add(t)
									);
								},
							},
							{
								key: "notifyListeners",
								value: function (e) {
									for (
										var t = this.eventHandlers.get(e),
											n = arguments.length,
											r = new Array(n > 1 ? n - 1 : 0),
											a = 1;
										a < n;
										a++
									)
										r[a - 1] = arguments[a];
									null === t || void 0 === t || t.notify.apply(t, r);
								},
							},
							{
								key: "hasListeners",
								value: function (e) {
									return this.eventHandlers.has(e);
								},
							},
							{
								key: "registerPotentialNode",
								value: function (e, t) {
									this.potentialNodes.set(e, t);
								},
							},
							{
								key: "mount",
								value: function (e) {
									var n,
										r = this,
										a =
											arguments.length > 1 &&
											void 0 !== arguments[1] &&
											arguments[1];
									if (!this.instance) {
										(this.isSVG =
											e instanceof SVGElement && "svg" !== e.tagName),
											(this.instance = e);
										var o = this.options,
											i = o.layoutId,
											l = o.layout,
											u = o.visualElement;
										if (
											(u && !u.current && u.mount(e),
											this.root.nodes.add(this),
											null === (n = this.parent) ||
												void 0 === n ||
												n.children.add(this),
											this.elementId &&
												this.root.potentialNodes.delete(this.elementId),
											a && (l || i) && (this.isLayoutDirty = !0),
											t)
										) {
											var s,
												c = function () {
													return (r.root.updateBlockedByResize = !1);
												};
											t(e, function () {
												(r.root.updateBlockedByResize = !0),
													s && s(),
													(s = Ao(c, 250)),
													Et.hasAnimatedSinceResize &&
														((Et.hasAnimatedSinceResize = !1),
														r.nodes.forEach(Nu));
											});
										}
										i && this.root.registerSharedNode(i, this),
											!1 !== this.options.animate &&
												u &&
												(i || l) &&
												this.addEventListener("didUpdate", function (e) {
													var t,
														n,
														a,
														o,
														i,
														l = e.delta,
														s = e.hasLayoutChanged,
														c = e.hasRelativeTargetChanged,
														f = e.layout;
													if (r.isTreeAnimationBlocked())
														return (
															(r.target = void 0),
															void (r.relativeTarget = void 0)
														);
													var d =
															null !==
																(n =
																	null !== (t = r.options.transition) &&
																	void 0 !== t
																		? t
																		: u.getDefaultTransition()) && void 0 !== n
																? n
																: Fu,
														p = u.getProps(),
														h = p.onLayoutAnimationStart,
														v = p.onLayoutAnimationComplete,
														m = !r.targetLayout || !yu(r.targetLayout, f) || c,
														y = !s && c;
													if (
														(null === (a = r.resumeFrom) || void 0 === a
															? void 0
															: a.instance) ||
														y ||
														(s && (m || !r.currentAnimation))
													) {
														r.resumeFrom &&
															((r.resumingFrom = r.resumeFrom),
															(r.resumingFrom.resumingFrom = void 0)),
															r.setAnimationOrigin(l, y);
														var g = ot(
															ot({}, Ho(d, "layout")),
															{},
															{ onPlay: h, onComplete: v }
														);
														u.shouldReduceMotion &&
															((g.delay = 0), (g.type = !1)),
															r.startAnimation(g);
													} else s || 0 !== r.animationProgress || Nu(r), r.isLead() && (null === (i = (o = r.options).onExitComplete) || void 0 === i || i.call(o));
													r.targetLayout = f;
												});
									}
								},
							},
							{
								key: "unmount",
								value: function () {
									var e, t;
									this.options.layoutId && this.willUpdate(),
										this.root.nodes.remove(this),
										null === (e = this.getStack()) ||
											void 0 === e ||
											e.remove(this),
										null === (t = this.parent) ||
											void 0 === t ||
											t.children.delete(this),
										(this.instance = void 0),
										Za.preRender(this.updateProjection);
								},
							},
							{
								key: "blockUpdate",
								value: function () {
									this.updateManuallyBlocked = !0;
								},
							},
							{
								key: "unblockUpdate",
								value: function () {
									this.updateManuallyBlocked = !1;
								},
							},
							{
								key: "isUpdateBlocked",
								value: function () {
									return (
										this.updateManuallyBlocked || this.updateBlockedByResize
									);
								},
							},
							{
								key: "isTreeAnimationBlocked",
								value: function () {
									var e;
									return (
										this.isAnimationBlocked ||
										(null === (e = this.parent) || void 0 === e
											? void 0
											: e.isTreeAnimationBlocked()) ||
										!1
									);
								},
							},
							{
								key: "startUpdate",
								value: function () {
									var e;
									this.isUpdateBlocked() ||
										((this.isUpdating = !0),
										null === (e = this.nodes) || void 0 === e || e.forEach(Lu));
								},
							},
							{
								key: "willUpdate",
								value: function () {
									var e,
										t,
										n,
										r =
											!(arguments.length > 0 && void 0 !== arguments[0]) ||
											arguments[0];
									if (this.root.isUpdateBlocked())
										null === (t = (e = this.options).onExitComplete) ||
											void 0 === t ||
											t.call(e);
									else if (
										(!this.root.isUpdating && this.root.startUpdate(),
										!this.isLayoutDirty)
									) {
										this.isLayoutDirty = !0;
										for (var a = 0; a < this.path.length; a++) {
											var o = this.path[a];
											(o.shouldResetTransform = !0), o.updateScroll();
										}
										var i = this.options,
											l = i.layoutId,
											u = i.layout;
										if (void 0 !== l || u) {
											var s =
												null === (n = this.options.visualElement) ||
												void 0 === n
													? void 0
													: n.getProps().transformTemplate;
											(this.prevTransformTemplateValue =
												null === s || void 0 === s
													? void 0
													: s(this.latestValues, "")),
												this.updateSnapshot(),
												r && this.notifyListeners("willUpdate");
										}
									}
								},
							},
							{
								key: "didUpdate",
								value: function () {
									if (this.isUpdateBlocked())
										return (
											this.unblockUpdate(),
											this.clearAllSnapshots(),
											void this.nodes.forEach(Tu)
										);
									this.isUpdating &&
										((this.isUpdating = !1),
										this.potentialNodes.size &&
											(this.potentialNodes.forEach(Iu),
											this.potentialNodes.clear()),
										this.nodes.forEach(_u),
										this.nodes.forEach(Cu),
										this.nodes.forEach(ju),
										this.clearAllSnapshots(),
										Ja.update(),
										Ja.preRender(),
										Ja.render());
								},
							},
							{
								key: "clearAllSnapshots",
								value: function () {
									this.nodes.forEach(Pu), this.sharedNodes.forEach(Au);
								},
							},
							{
								key: "scheduleUpdateProjection",
								value: function () {
									ao.preRender(this.updateProjection, !1, !0);
								},
							},
							{
								key: "scheduleCheckAfterUnmount",
								value: function () {
									var e = this;
									ao.postRender(function () {
										e.isLayoutDirty
											? e.root.didUpdate()
											: e.root.checkUpdateFailed();
									});
								},
							},
							{
								key: "updateSnapshot",
								value: function () {
									!this.snapshot &&
										this.instance &&
										(this.snapshot = this.measure());
								},
							},
							{
								key: "updateLayout",
								value: function () {
									var e;
									if (
										this.instance &&
										(this.updateScroll(),
										(this.options.alwaysMeasureLayout && this.isLead()) ||
											this.isLayoutDirty)
									) {
										if (this.resumeFrom && !this.resumeFrom.instance)
											for (var t = 0; t < this.path.length; t++) {
												this.path[t].updateScroll();
											}
										var n = this.layout;
										(this.layout = this.measure(!1)),
											(this.layoutCorrected = {
												x: { min: 0, max: 0 },
												y: { min: 0, max: 0 },
											}),
											(this.isLayoutDirty = !1),
											(this.projectionDelta = void 0),
											this.notifyListeners("measure", this.layout.layoutBox),
											null === (e = this.options.visualElement) ||
												void 0 === e ||
												e.notify(
													"LayoutMeasure",
													this.layout.layoutBox,
													null === n || void 0 === n ? void 0 : n.layoutBox
												);
									}
								},
							},
							{
								key: "updateScroll",
								value: function () {
									this.options.layoutScroll &&
										this.instance &&
										((this.isScrollRoot = a(this.instance)),
										(this.scroll = r(this.instance)));
								},
							},
							{
								key: "resetTransform",
								value: function () {
									var e;
									if (o) {
										var t = this.isLayoutDirty || this.shouldResetTransform,
											n = this.projectionDelta && !mu(this.projectionDelta),
											r =
												null === (e = this.options.visualElement) ||
												void 0 === e
													? void 0
													: e.getProps().transformTemplate,
											a =
												null === r || void 0 === r
													? void 0
													: r(this.latestValues, ""),
											i = a !== this.prevTransformTemplateValue;
										t &&
											(n || Yi(this.latestValues) || i) &&
											(o(this.instance, a),
											(this.shouldResetTransform = !1),
											this.scheduleRender());
									}
								},
							},
							{
								key: "measure",
								value: function () {
									var e =
											!(arguments.length > 0 && void 0 !== arguments[0]) ||
											arguments[0],
										t = this.measurePageBox(),
										n = this.removeElementScroll(t);
									return (
										e && (n = this.removeTransform(n)),
										Bu(n),
										{ measuredBox: t, layoutBox: n, latestValues: {} }
									);
								},
							},
							{
								key: "measurePageBox",
								value: function () {
									var e = this.options.visualElement;
									if (!e)
										return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
									var t = e.measureViewportBox(),
										n = this.root.scroll;
									return n && (nl(t.x, n.x), nl(t.y, n.y)), t;
								},
							},
							{
								key: "removeElementScroll",
								value: function (e) {
									var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
									su(t, e);
									for (var n = 0; n < this.path.length; n++) {
										var r = this.path[n],
											a = r.scroll,
											o = r.options,
											i = r.isScrollRoot;
										if (r !== this.root && a && o.layoutScroll) {
											if (i) {
												su(t, e);
												var l = this.root.scroll;
												l && (nl(t.x, -l.x), nl(t.y, -l.y));
											}
											nl(t.x, a.x), nl(t.y, a.y);
										}
									}
									return t;
								},
							},
							{
								key: "applyTransform",
								value: function (e) {
									var t =
											arguments.length > 1 &&
											void 0 !== arguments[1] &&
											arguments[1],
										n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
									su(n, e);
									for (var r = 0; r < this.path.length; r++) {
										var a = this.path[r];
										!t &&
											a.options.layoutScroll &&
											a.scroll &&
											a !== a.root &&
											il(n, { x: -a.scroll.x, y: -a.scroll.y }),
											Yi(a.latestValues) && il(n, a.latestValues);
									}
									return Yi(this.latestValues) && il(n, this.latestValues), n;
								},
							},
							{
								key: "removeTransform",
								value: function (e) {
									var t,
										n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
									su(n, e);
									for (var r = 0; r < this.path.length; r++) {
										var a = this.path[r];
										if (a.instance && Yi(a.latestValues)) {
											qi(a.latestValues) && a.updateSnapshot();
											var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
											su(o, a.measurePageBox()),
												hu(
													n,
													a.latestValues,
													null === (t = a.snapshot) || void 0 === t
														? void 0
														: t.layoutBox,
													o
												);
										}
									}
									return Yi(this.latestValues) && hu(n, this.latestValues), n;
								},
							},
							{
								key: "setTargetDelta",
								value: function (e) {
									(this.targetDelta = e), this.root.scheduleUpdateProjection();
								},
							},
							{
								key: "setOptions",
								value: function (e) {
									this.options = ot(
										ot(ot({}, this.options), e),
										{},
										{ crossfade: void 0 === e.crossfade || e.crossfade }
									);
								},
							},
							{
								key: "clearMeasurements",
								value: function () {
									(this.scroll = void 0),
										(this.layout = void 0),
										(this.snapshot = void 0),
										(this.prevTransformTemplateValue = void 0),
										(this.targetDelta = void 0),
										(this.target = void 0),
										(this.isLayoutDirty = !1);
								},
							},
							{
								key: "resolveTargetDelta",
								value: function () {
									var e,
										t = this.options,
										n = t.layout,
										r = t.layoutId;
									if (this.layout && (n || r)) {
										if (!this.targetDelta && !this.relativeTarget) {
											var a = this.getClosestProjectingParent();
											a && a.layout
												? ((this.relativeParent = a),
												  (this.relativeTarget = {
														x: { min: 0, max: 0 },
														y: { min: 0, max: 0 },
												  }),
												  (this.relativeTargetOrigin = {
														x: { min: 0, max: 0 },
														y: { min: 0, max: 0 },
												  }),
												  Fi(
														this.relativeTargetOrigin,
														this.layout.layoutBox,
														a.layout.layoutBox
												  ),
												  su(this.relativeTarget, this.relativeTargetOrigin))
												: (this.relativeParent = this.relativeTarget = void 0);
										}
										var o, i, l;
										if (this.relativeTarget || this.targetDelta)
											if (
												(this.target ||
													((this.target = {
														x: { min: 0, max: 0 },
														y: { min: 0, max: 0 },
													}),
													(this.targetWithTransforms = {
														x: { min: 0, max: 0 },
														y: { min: 0, max: 0 },
													})),
												this.relativeTarget &&
												this.relativeTargetOrigin &&
												(null === (e = this.relativeParent) || void 0 === e
													? void 0
													: e.target)
													? ((o = this.target),
													  (i = this.relativeTarget),
													  (l = this.relativeParent.target),
													  Di(o.x, i.x, l.x),
													  Di(o.y, i.y, l.y))
													: this.targetDelta
													? (Boolean(this.resumingFrom)
															? (this.target = this.applyTransform(
																	this.layout.layoutBox
															  ))
															: su(this.target, this.layout.layoutBox),
													  tl(this.target, this.targetDelta))
													: su(this.target, this.layout.layoutBox),
												this.attemptToResolveRelativeTarget)
											) {
												this.attemptToResolveRelativeTarget = !1;
												var u = this.getClosestProjectingParent();
												u &&
												Boolean(u.resumingFrom) ===
													Boolean(this.resumingFrom) &&
												!u.options.layoutScroll &&
												u.target
													? ((this.relativeParent = u),
													  (this.relativeTarget = {
															x: { min: 0, max: 0 },
															y: { min: 0, max: 0 },
													  }),
													  (this.relativeTargetOrigin = {
															x: { min: 0, max: 0 },
															y: { min: 0, max: 0 },
													  }),
													  Fi(
															this.relativeTargetOrigin,
															this.target,
															u.target
													  ),
													  su(this.relativeTarget, this.relativeTargetOrigin))
													: (this.relativeParent = this.relativeTarget =
															void 0);
											}
									}
								},
							},
							{
								key: "getClosestProjectingParent",
								value: function () {
									if (
										this.parent &&
										!qi(this.parent.latestValues) &&
										!Gi(this.parent.latestValues)
									)
										return (this.parent.relativeTarget ||
											this.parent.targetDelta) &&
											this.parent.layout
											? this.parent
											: this.parent.getClosestProjectingParent();
								},
							},
							{
								key: "calcProjection",
								value: function () {
									var e,
										t = this.options,
										n = t.layout,
										r = t.layoutId;
									if (
										((this.isTreeAnimating = Boolean(
											(null === (e = this.parent) || void 0 === e
												? void 0
												: e.isTreeAnimating) ||
												this.currentAnimation ||
												this.pendingAnimation
										)),
										this.isTreeAnimating ||
											(this.targetDelta = this.relativeTarget = void 0),
										this.layout && (n || r))
									) {
										var a = this.getLead();
										su(this.layoutCorrected, this.layout.layoutBox),
											(function (e, t, n) {
												var r,
													a,
													o =
														arguments.length > 3 &&
														void 0 !== arguments[3] &&
														arguments[3],
													i = n.length;
												if (i) {
													var l, u;
													t.x = t.y = 1;
													for (var s = 0; s < i; s++)
														(u = (l = n[s]).projectionDelta),
															"contents" !==
																(null ===
																	(a =
																		null === (r = l.instance) || void 0 === r
																			? void 0
																			: r.style) || void 0 === a
																	? void 0
																	: a.display) &&
																(o &&
																	l.options.layoutScroll &&
																	l.scroll &&
																	l !== l.root &&
																	il(e, { x: -l.scroll.x, y: -l.scroll.y }),
																u &&
																	((t.x *= u.x.scale),
																	(t.y *= u.y.scale),
																	tl(e, u)),
																o &&
																	Yi(l.latestValues) &&
																	il(e, l.latestValues));
												}
											})(
												this.layoutCorrected,
												this.treeScale,
												this.path,
												Boolean(this.resumingFrom) || this !== a
											);
										var o = a.target;
										if (o) {
											this.projectionDelta ||
												((this.projectionDelta = {
													x: {
														translate: 0,
														scale: 1,
														origin: 0,
														originPoint: 0,
													},
													y: {
														translate: 0,
														scale: 1,
														origin: 0,
														originPoint: 0,
													},
												}),
												(this.projectionDeltaWithTransform = {
													x: {
														translate: 0,
														scale: 1,
														origin: 0,
														originPoint: 0,
													},
													y: {
														translate: 0,
														scale: 1,
														origin: 0,
														originPoint: 0,
													},
												}));
											var i = this.treeScale.x,
												l = this.treeScale.y,
												u = this.projectionTransform;
											zi(
												this.projectionDelta,
												this.layoutCorrected,
												o,
												this.latestValues
											),
												(this.projectionTransform = xu(
													this.projectionDelta,
													this.treeScale
												)),
												(this.projectionTransform === u &&
													this.treeScale.x === i &&
													this.treeScale.y === l) ||
													((this.hasProjected = !0),
													this.scheduleRender(),
													this.notifyListeners("projectionUpdate", o));
										}
									}
								},
							},
							{
								key: "hide",
								value: function () {
									this.isVisible = !1;
								},
							},
							{
								key: "show",
								value: function () {
									this.isVisible = !0;
								},
							},
							{
								key: "scheduleRender",
								value: function () {
									var e,
										t,
										n,
										r =
											!(arguments.length > 0 && void 0 !== arguments[0]) ||
											arguments[0];
									null === (t = (e = this.options).scheduleRender) ||
										void 0 === t ||
										t.call(e),
										r &&
											(null === (n = this.getStack()) ||
												void 0 === n ||
												n.scheduleRender()),
										this.resumingFrom &&
											!this.resumingFrom.instance &&
											(this.resumingFrom = void 0);
								},
							},
							{
								key: "setAnimationOrigin",
								value: function (e) {
									var t,
										n = this,
										r =
											arguments.length > 1 &&
											void 0 !== arguments[1] &&
											arguments[1],
										a = this.snapshot,
										o =
											(null === a || void 0 === a ? void 0 : a.latestValues) ||
											{},
										i = ot({}, this.latestValues),
										l = {
											x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
											y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
										};
									(this.relativeTarget = this.relativeTargetOrigin = void 0),
										(this.attemptToResolveRelativeTarget = !r);
									var u = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
										s = null === a || void 0 === a ? void 0 : a.isShared,
										c =
											((null === (t = this.getStack()) || void 0 === t
												? void 0
												: t.members.length) || 0) <= 1,
										f = Boolean(
											s &&
												!c &&
												!0 === this.options.crossfade &&
												!this.path.some(Vu)
										);
									(this.animationProgress = 0),
										(this.mixTargetDelta = function (t) {
											var r,
												a = t / 1e3;
											Mu(l.x, e.x, a),
												Mu(l.y, e.y, a),
												n.setTargetDelta(l),
												n.relativeTarget &&
													n.relativeTargetOrigin &&
													n.layout &&
													(null === (r = n.relativeParent) || void 0 === r
														? void 0
														: r.layout) &&
													(Fi(
														u,
														n.layout.layoutBox,
														n.relativeParent.layout.layoutBox
													),
													Du(n.relativeTarget, n.relativeTargetOrigin, u, a)),
												s &&
													((n.animationValues = i),
													ru(i, o, n.latestValues, a, f, c)),
												n.root.scheduleUpdateProjection(),
												n.scheduleRender(),
												(n.animationProgress = a);
										}),
										this.mixTargetDelta(0);
								},
							},
							{
								key: "startAnimation",
								value: function (e) {
									var t,
										n,
										r = this;
									this.notifyListeners("animationStart"),
										null === (t = this.currentAnimation) ||
											void 0 === t ||
											t.stop(),
										this.resumingFrom &&
											(null === (n = this.resumingFrom.currentAnimation) ||
												void 0 === n ||
												n.stop()),
										this.pendingAnimation &&
											(Za.update(this.pendingAnimation),
											(this.pendingAnimation = void 0)),
										(this.pendingAnimation = ao.update(function () {
											(Et.hasAnimatedSinceResize = !0),
												(r.currentAnimation = Zl(
													0,
													1e3,
													ot(
														ot({}, e),
														{},
														{
															onUpdate: function (t) {
																var n;
																r.mixTargetDelta(t),
																	null === (n = e.onUpdate) ||
																		void 0 === n ||
																		n.call(e, t);
															},
															onComplete: function () {
																var t;
																null === (t = e.onComplete) ||
																	void 0 === t ||
																	t.call(e),
																	r.completeAnimation();
															},
														}
													)
												)),
												r.resumingFrom &&
													(r.resumingFrom.currentAnimation =
														r.currentAnimation),
												(r.pendingAnimation = void 0);
										}));
								},
							},
							{
								key: "completeAnimation",
								value: function () {
									var e;
									this.resumingFrom &&
										((this.resumingFrom.currentAnimation = void 0),
										(this.resumingFrom.preserveOpacity = void 0)),
										null === (e = this.getStack()) ||
											void 0 === e ||
											e.exitAnimationComplete(),
										(this.resumingFrom =
											this.currentAnimation =
											this.animationValues =
												void 0),
										this.notifyListeners("animationComplete");
								},
							},
							{
								key: "finishAnimation",
								value: function () {
									var e;
									this.currentAnimation &&
										(null === (e = this.mixTargetDelta) ||
											void 0 === e ||
											e.call(this, 1e3),
										this.currentAnimation.stop()),
										this.completeAnimation();
								},
							},
							{
								key: "applyTransformsToTarget",
								value: function () {
									var e = this.getLead(),
										t = e.targetWithTransforms,
										n = e.target,
										r = e.layout,
										a = e.latestValues;
									if (t && n && r) {
										if (
											this !== e &&
											this.layout &&
											r &&
											Hu(
												this.options.animationType,
												this.layout.layoutBox,
												r.layoutBox
											)
										) {
											n = this.target || {
												x: { min: 0, max: 0 },
												y: { min: 0, max: 0 },
											};
											var o = Li(this.layout.layoutBox.x);
											(n.x.min = e.target.x.min), (n.x.max = n.x.min + o);
											var i = Li(this.layout.layoutBox.y);
											(n.y.min = e.target.y.min), (n.y.max = n.y.min + i);
										}
										su(t, n),
											il(t, a),
											zi(
												this.projectionDeltaWithTransform,
												this.layoutCorrected,
												t,
												a
											);
									}
								},
							},
							{
								key: "registerSharedNode",
								value: function (e, t) {
									var n, r, a;
									this.sharedNodes.has(e) || this.sharedNodes.set(e, new bu()),
										this.sharedNodes.get(e).add(t),
										t.promote({
											transition:
												null === (n = t.options.initialPromotionConfig) ||
												void 0 === n
													? void 0
													: n.transition,
											preserveFollowOpacity:
												null ===
													(a =
														null === (r = t.options.initialPromotionConfig) ||
														void 0 === r
															? void 0
															: r.shouldPreserveFollowOpacity) || void 0 === a
													? void 0
													: a.call(r, t),
										});
								},
							},
							{
								key: "isLead",
								value: function () {
									var e = this.getStack();
									return !e || e.lead === this;
								},
							},
							{
								key: "getLead",
								value: function () {
									var e;
									return (
										(this.options.layoutId &&
											(null === (e = this.getStack()) || void 0 === e
												? void 0
												: e.lead)) ||
										this
									);
								},
							},
							{
								key: "getPrevLead",
								value: function () {
									var e;
									return this.options.layoutId
										? null === (e = this.getStack()) || void 0 === e
											? void 0
											: e.prevLead
										: void 0;
								},
							},
							{
								key: "getStack",
								value: function () {
									var e = this.options.layoutId;
									if (e) return this.root.sharedNodes.get(e);
								},
							},
							{
								key: "promote",
								value: function () {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: {},
										t = e.needsReset,
										n = e.transition,
										r = e.preserveFollowOpacity,
										a = this.getStack();
									a && a.promote(this, r),
										t &&
											((this.projectionDelta = void 0), (this.needsReset = !0)),
										n && this.setOptions({ transition: n });
								},
							},
							{
								key: "relegate",
								value: function () {
									var e = this.getStack();
									return !!e && e.relegate(this);
								},
							},
							{
								key: "resetRotation",
								value: function () {
									var e = this.options.visualElement;
									if (e) {
										for (var t = !1, n = {}, r = 0; r < Su.length; r++) {
											var a = "rotate" + Su[r];
											e.getStaticValue(a) &&
												((t = !0),
												(n[a] = e.getStaticValue(a)),
												e.setStaticValue(a, 0));
										}
										if (t) {
											for (var o in (null === e || void 0 === e || e.render(),
											n))
												e.setStaticValue(o, n[o]);
											e.scheduleRender();
										}
									}
								},
							},
							{
								key: "getProjectionStyles",
								value: function () {
									var e,
										t,
										n,
										r =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: {},
										a = {};
									if (!this.instance || this.isSVG) return a;
									if (!this.isVisible) return { visibility: "hidden" };
									a.visibility = "";
									var o =
										null === (e = this.options.visualElement) || void 0 === e
											? void 0
											: e.getProps().transformTemplate;
									if (this.needsReset)
										return (
											(this.needsReset = !1),
											(a.opacity = ""),
											(a.pointerEvents = Vn(r.pointerEvents) || ""),
											(a.transform = o ? o(this.latestValues, "") : "none"),
											a
										);
									var i = this.getLead();
									if (!this.projectionDelta || !this.layout || !i.target) {
										var l = {};
										return (
											this.options.layoutId &&
												((l.opacity =
													void 0 !== this.latestValues.opacity
														? this.latestValues.opacity
														: 1),
												(l.pointerEvents = Vn(r.pointerEvents) || "")),
											this.hasProjected &&
												!Yi(this.latestValues) &&
												((l.transform = o ? o({}, "") : "none"),
												(this.hasProjected = !1)),
											l
										);
									}
									var u = i.animationValues || i.latestValues;
									this.applyTransformsToTarget(),
										(a.transform = xu(
											this.projectionDeltaWithTransform,
											this.treeScale,
											u
										)),
										o && (a.transform = o(u, a.transform));
									var s = this.projectionDelta,
										c = s.x,
										f = s.y;
									for (var d in ((a.transformOrigin = ""
										.concat(100 * c.origin, "% ")
										.concat(100 * f.origin, "% 0")),
									i.animationValues
										? (a.opacity =
												i === this
													? null !==
															(n =
																null !== (t = u.opacity) && void 0 !== t
																	? t
																	: this.latestValues.opacity) && void 0 !== n
														? n
														: 1
													: this.preserveOpacity
													? this.latestValues.opacity
													: u.opacityExit)
										: (a.opacity =
												i === this
													? void 0 !== u.opacity
														? u.opacity
														: ""
													: void 0 !== u.opacityExit
													? u.opacityExit
													: 0),
									Mt))
										if (void 0 !== u[d]) {
											var p = Mt[d],
												h = p.correct,
												v = p.applyTo,
												m = h(u[d], i);
											if (v)
												for (var y = v.length, g = 0; g < y; g++) a[v[g]] = m;
											else a[d] = m;
										}
									return (
										this.options.layoutId &&
											(a.pointerEvents =
												i === this ? Vn(r.pointerEvents) || "" : "none"),
										a
									);
								},
							},
							{
								key: "clearSnapshot",
								value: function () {
									this.resumeFrom = this.snapshot = void 0;
								},
							},
							{
								key: "resetTree",
								value: function () {
									this.root.nodes.forEach(function (e) {
										var t;
										return null === (t = e.currentAnimation) || void 0 === t
											? void 0
											: t.stop();
									}),
										this.root.nodes.forEach(Tu),
										this.root.sharedNodes.clear();
								},
							},
						]),
						e
					);
				})();
			}
			function Cu(e) {
				e.updateLayout();
			}
			function ju(e) {
				var t,
					n,
					r,
					a =
						(null === (t = e.resumeFrom) || void 0 === t
							? void 0
							: t.snapshot) || e.snapshot;
				if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
					var o = e.layout,
						i = o.layoutBox,
						l = o.measuredBox,
						u = e.options.animationType;
					"size" === u
						? $i(function (e) {
								var t = a.isShared ? a.measuredBox[e] : a.layoutBox[e],
									n = Li(t);
								(t.min = i[e].min), (t.max = t.min + n);
						  })
						: Hu(u, a.layoutBox, i) &&
						  $i(function (e) {
								var t = a.isShared ? a.measuredBox[e] : a.layoutBox[e],
									n = Li(i[e]);
								t.max = t.min + n;
						  });
					var s = {
						x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
						y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
					};
					zi(s, i, a.layoutBox);
					var c = {
						x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
						y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
					};
					a.isShared
						? zi(c, e.applyTransform(l, !0), a.measuredBox)
						: zi(c, i, a.layoutBox);
					var f = !mu(s),
						d = !1;
					if (!e.resumeFrom) {
						var p = e.getClosestProjectingParent();
						if (p && !p.resumeFrom) {
							var h = p.snapshot,
								v = p.layout;
							if (h && v) {
								var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
								Fi(m, a.layoutBox, h.layoutBox);
								var y = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
								Fi(y, i, v.layoutBox), yu(m, y) || (d = !0);
							}
						}
					}
					e.notifyListeners("didUpdate", {
						layout: i,
						snapshot: a,
						delta: c,
						layoutDelta: s,
						hasLayoutChanged: f,
						hasRelativeTargetChanged: d,
					});
				} else
					e.isLead() &&
						(null === (r = (n = e.options).onExitComplete) ||
							void 0 === r ||
							r.call(n));
				e.options.transition = void 0;
			}
			function Pu(e) {
				e.clearSnapshot();
			}
			function Tu(e) {
				e.clearMeasurements();
			}
			function _u(e) {
				var t = e.options.visualElement;
				(null === t || void 0 === t
					? void 0
					: t.getProps().onBeforeLayoutMeasure) &&
					t.notify("BeforeLayoutMeasure"),
					e.resetTransform();
			}
			function Nu(e) {
				e.finishAnimation(),
					(e.targetDelta = e.relativeTarget = e.target = void 0);
			}
			function Ou(e) {
				e.resolveTargetDelta();
			}
			function Ru(e) {
				e.calcProjection();
			}
			function Lu(e) {
				e.resetRotation();
			}
			function Au(e) {
				e.removeLeadSnapshot();
			}
			function Mu(e, t, n) {
				(e.translate = Br(t.translate, 0, n)),
					(e.scale = Br(t.scale, 1, n)),
					(e.origin = t.origin),
					(e.originPoint = t.originPoint);
			}
			function zu(e, t, n, r) {
				(e.min = Br(t.min, n.min, r)), (e.max = Br(t.max, n.max, r));
			}
			function Du(e, t, n, r) {
				zu(e.x, t.x, n.x, r), zu(e.y, t.y, n.y, r);
			}
			function Vu(e) {
				return e.animationValues && void 0 !== e.animationValues.opacityExit;
			}
			var Fu = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
			function Iu(e, t) {
				for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
					if (Boolean(e.path[r].instance)) {
						n = e.path[r];
						break;
					}
				var a = (n && n !== e.root ? n.instance : document).querySelector(
					'[data-projection-id="'.concat(t, '"]')
				);
				a && e.mount(a, !0);
			}
			function Uu(e) {
				(e.min = Math.round(e.min)), (e.max = Math.round(e.max));
			}
			function Bu(e) {
				Uu(e.x), Uu(e.y);
			}
			function Hu(e, t, n) {
				return (
					"position" === e ||
					("preserve-aspect" === e &&
						!(function (e, t) {
							var n =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: 0.1;
							return Ci(e, t) <= n;
						})(gu(t), gu(n), 0.2))
				);
			}
			var Wu = Eu({
					attachResizeListener: function (e, t) {
						return $n(e, "resize", t);
					},
					measureScroll: function () {
						return {
							x:
								document.documentElement.scrollLeft || document.body.scrollLeft,
							y: document.documentElement.scrollTop || document.body.scrollTop,
						};
					},
					checkIsScrollRoot: function () {
						return !0;
					},
				}),
				$u = { current: void 0 },
				Qu = Eu({
					measureScroll: function (e) {
						return { x: e.scrollLeft, y: e.scrollTop };
					},
					defaultParent: function () {
						if (!$u.current) {
							var e = new Wu(0, {});
							e.mount(window),
								e.setOptions({ layoutScroll: !0 }),
								($u.current = e);
						}
						return $u.current;
					},
					resetTransform: function (e, t) {
						e.style.transform = void 0 !== t ? t : "none";
					},
					checkIsScrollRoot: function (e) {
						return Boolean("fixed" === window.getComputedStyle(e).position);
					},
				}),
				Xu = ot(ot(ot(ot({}, wi), Tr), dl), Kl),
				qu = Rt(function (e, t) {
					return (function (e, t, n, r, a) {
						var o = t.forwardMotionProps,
							i = void 0 !== o && o;
						return ot(
							ot({}, At(e) ? Hn : Wn),
							{},
							{
								preloadedFeatures: n,
								useRender: Tn(i),
								createVisualElement: r,
								projectionNodeConstructor: a,
								Component: e,
							}
						);
					})(e, t, Xu, Wl, Qu);
				});
			var Yu = function () {
					return (0, Ye.jsx)(qu.div, {
						name: "contact",
						className:
							"flex flex-col justify-center align-center w-full h-screen",
						initial: { scaleX: 0.5 },
						animate: { scaleX: 1 },
						exit: { scaleX: 0 },
						transition: { duration: 0.5 },
						children: (0, Ye.jsxs)("form", {
							method: "POST",
							action:
								"https://getform.io/f/b647f9b9-5752-4f82-a5c5-7e42ed277826",
							target: "_blank",
							className: "flex flex-col max-w-[600px] w-full mx-auto px-2",
							children: [
								(0, Ye.jsxs)("div", {
									className: "pb-8",
									children: [
										(0, Ye.jsx)("p", {
											className:
												"text-4xl font-bold inline border-b-4 border-[#07ed66] text-gray-300",
											children: "Me contacter",
										}),
										(0, Ye.jsx)("p", {
											className: "text-gray-300 py-4",
											children:
												"Afin de me contacter, remplissez le formulaire ci-dessous ou envoyez moi directement un e-mail \xe0 l'adresse suivante: raimond.thibaut@gmail.com",
										}),
									],
								}),
								(0, Ye.jsx)("input", {
									className: "bg-[#ccd6f6]",
									type: "text",
									placeholder: "Nom",
									name: "name",
								}),
								(0, Ye.jsx)("input", {
									className: "my-4 p-2 bg-[#ccd6f6]",
									type: "email",
									placeholder: "Email",
									name: "email",
								}),
								(0, Ye.jsx)("textarea", {
									name: "message",
									className: "bg-[#ccd6f6]",
									rows: "10",
									placeholder: "Message",
								}),
								(0, Ye.jsx)("div", {
									className: "flex justify-center",
									children: (0, Ye.jsx)("button", {
										className:
											"bg-green-500 text-white active:bg-green-600 font-bold text-xs py-4 w-64 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mt-14 ease-linear transition-all duration-300 hover:text-lg hover:w-80 mb-2",
										type: "submit",
										children: "Collaborons ensemble",
									}),
								}),
							],
						}),
					});
				},
				Gu = n(165),
				Ku = n.n(Gu),
				Zu = function () {
					return (0, Ye.jsx)(qu.div, {
						name: "home",
						className:
							"flex flex-col justify-center align-center w-screen h-screen",
						initial: { scaleX: 0.5 },
						animate: { scaleX: 1 },
						exit: { scaleX: 0 },
						transition: { duration: 0.5 },
						children: (0, Ye.jsxs)("div", {
							className: "max-w-[750px] mx-auto flex flex-col justify-center",
							children: [
								(0, Ye.jsx)("p", {
									className: "text-3xl text-[#07ed66] title",
									children: "Bonjours je suis",
								}),
								(0, Ye.jsx)("h1", {
									className:
										"text-4xl sm:text-7xl font-bold text-[#ccd6f6] title2",
									children: "Thibaut Raimond",
								}),
								(0, Ye.jsx)("h2", {
									className:
										"text-4xl sm:text-7xl font-bold text-[#656a79] py-4 title3",
									children: (0, Ye.jsx)(Ku(), {
										options: {
											autoStart: !0,
											loop: !0,
											delay: 50,
											strings: [
												"Dev full stack JS",
												"Web & Mobile",
												"AGILE teamwork",
											],
										},
									}),
								}),
								(0, Ye.jsx)("div", {
									children: (0, Ye.jsx)("button", {
										children: (0, Ye.jsxs)(Qe, {
											to: "/portfolio/profil",
											mooth: !0,
											duration: 500,
											className:
												"text-white group items-center hover:text-black hover:bg-[#07ed66] hover:border-[#07ed66] hover:text-#0e1111] flex border-2 px-6 py-3 my-2",
											children: [
												"Voir mon profil ",
												(0, Ye.jsx)(Ze, { className: "ml-3" }),
												" ",
											],
										}),
									}),
								}),
							],
						}),
					});
				},
				Ju = n.p + "static/media/css.69a82c2d9e45c933a9cb.png",
				es = n.p + "static/media/html.2ba4fabc69a89a8f71e6.png",
				ts = n.p + "static/media/javascript.1ccd6ef9bb1f9c84ef00.png",
				ns = n.p + "static/media/react.0cf951a69d8e58f83f9d.png",
				rs = n.p + "static/media/node.952a9ea986dcfa5229ad.png",
				as = n.p + "static/media/sequelize.e7adaa25f39264c50149.png",
				os = n.p + "static/media/psql.fb6daab42b2587df2f49.png",
				is = n.p + "static/media/github.3b9e32903aa89111875d.png",
				ls = function () {
					return (0, Ye.jsx)(qu.div, {
						name: "skills",
						className:
							"w-full h-screen bg-gradient-to-r from[#0e1111] to-transparentbg text-gray-300",
						initial: { scaleX: 0.5 },
						animate: { scaleX: 1 },
						exit: { scaleX: 0 },
						transition: { duration: 0.5 },
						children: (0, Ye.jsxs)("div", {
							className: "max-w-[1000px] mx-auto flex flex-col pt-4 lg:pt-52",
							children: [
								(0, Ye.jsxs)("div", {
									className: "text-center",
									children: [
										(0, Ye.jsx)("p", {
											className:
												"text-4xl font-bold inline border-b-4 border-[#07ed66]",
											children: "Comp\xe9tences",
										}),
										(0, Ye.jsx)("p", {
											className: "py-4",
											children:
												"Voici les technologies que j'ai d\xe9j\xe0 utlis\xe9es",
										}),
									],
								}),
								(0, Ye.jsxs)("div", {
									className:
										"w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-12",
									children: [
										(0, Ye.jsxs)("div", {
											className:
												"shadow-md shadow-[#040c16] hover:scale-110 duration-500",
											children: [
												(0, Ye.jsx)("img", {
													className: "w-20 mx-auto",
													src: es,
													alt: "HTML icon",
												}),
												(0, Ye.jsx)("p", {
													className: "my-4",
													children: "HTML",
												}),
											],
										}),
										(0, Ye.jsxs)("div", {
											className:
												"shadow-md shadow-[#040c16] hover:scale-110 duration-500",
											children: [
												(0, Ye.jsx)("img", {
													className: "w-20 mx-auto",
													src: Ju,
													alt: "CSS icon",
												}),
												(0, Ye.jsx)("p", {
													className: "my-4",
													children: "CSS",
												}),
											],
										}),
										(0, Ye.jsxs)("div", {
											className:
												"shadow-md shadow-[#040c16] hover:scale-110 duration-500",
											children: [
												(0, Ye.jsx)("img", {
													className: "w-20 mx-auto",
													src: ts,
													alt: "JavaScript icon",
												}),
												(0, Ye.jsx)("p", {
													className: "my-4",
													children: "JavaScript",
												}),
											],
										}),
										(0, Ye.jsxs)("div", {
											className:
												"shadow-md shadow-[#040c16] hover:scale-110 duration-500",
											children: [
												(0, Ye.jsx)("img", {
													className: "w-20 mx-auto",
													src: ns,
													alt: "React icon",
												}),
												(0, Ye.jsx)("p", {
													className: "my-4",
													children: "React",
												}),
											],
										}),
										(0, Ye.jsxs)("div", {
											className:
												"shadow-md shadow-[#040c16] hover:scale-110 duration-500",
											children: [
												(0, Ye.jsx)("img", {
													className: "w-20 mx-auto",
													src: rs,
													alt: "Node icon",
												}),
												(0, Ye.jsx)("p", {
													className: "my-4",
													children: "Node JS",
												}),
											],
										}),
										(0, Ye.jsxs)("div", {
											className:
												"shadow-md shadow-[#040c16] hover:scale-110 duration-500",
											children: [
												(0, Ye.jsx)("img", {
													className: "w-20 mx-auto",
													src: as,
													alt: "Sequelize icon",
												}),
												(0, Ye.jsx)("p", {
													className: "my-4",
													children: "Sequelize",
												}),
											],
										}),
										(0, Ye.jsxs)("div", {
											className:
												"shadow-md shadow-[#040c16] hover:scale-110 duration-500",
											children: [
												(0, Ye.jsx)("img", {
													className: "w-20 mx-auto",
													src: os,
													alt: "PSQL icon",
												}),
												(0, Ye.jsx)("p", {
													className: "my-4",
													children: "PSQL",
												}),
											],
										}),
										(0, Ye.jsxs)("div", {
											className:
												"shadow-md shadow-[#040c16] hover:scale-110 duration-500",
											children: [
												(0, Ye.jsx)("img", {
													className: "w-20 mx-auto",
													src: is,
													alt: "Github icon",
												}),
												(0, Ye.jsx)("p", {
													className: "my-4",
													children: "Github",
												}),
											],
										}),
									],
								}),
								(0, Ye.jsxs)("div", {
									className: "flex justify-center",
									children: [
										(0, Ye.jsx)("button", {
											className: "mt-10 profil-bot-button",
											children: (0, Ye.jsxs)(Qe, {
												to: "/portfolio/profil",
												mooth: !0,
												duration: 500,
												className:
													"text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white",
												children: [
													(0, Ye.jsx)(Ke, { className: "mr-3" }),
													" Retour au profil",
												],
											}),
										}),
										(0, Ye.jsx)("button", {
											className: "mt-10 profil-bot-button",
											children: (0, Ye.jsxs)(Qe, {
												to: "/portfolio/work",
												mooth: !0,
												duration: 500,
												className:
													"text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white",
												children: [
													"Voir mes projets ",
													(0, Ye.jsx)(Ze, { className: "ml-3" }),
													" ",
												],
											}),
										}),
									],
								}),
							],
						}),
					});
				},
				us = n.p + "static/media/CodeDuDev.a11fd53b7b07de435994.jpg",
				ss = function () {
					return (0, Ye.jsx)(qu.div, {
						name: "work",
						className:
							"text-gray-300 flex flex-col justify-center align-center w-full h-screen",
						initial: { scaleX: 0.5 },
						animate: { scaleX: 1 },
						exit: { scaleX: 0 },
						transition: { duration: 0.5 },
						children: (0, Ye.jsxs)("div", {
							className:
								"max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full",
							children: [
								(0, Ye.jsxs)("div", {
									className: "pb-8 flex flex-col items-center ",
									children: [
										(0, Ye.jsx)("p", {
											className:
												"text-4xl font-bold inline border-b-4 text-gray-300 border-[#07ed66] mt-6",
											children: "Mes projets",
										}),
										(0, Ye.jsx)("p", {
											className: "py-6",
											children: " Pr\xe9sentation de mes derniers projets",
										}),
									],
								}),
								(0, Ye.jsx)("div", {
									className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4",
									children: (0, Ye.jsx)("div", {
										style: { backgroundImage: "url(".concat(us, ")") },
										className:
											"shadow-lg shadow-[#0e1111] group container rounded-md flex justify-center items-center mx-auto projet-div",
										children: (0, Ye.jsxs)("div", {
											className:
												"text-center opacity-0 group-hover:opacity-100",
											children: [
												(0, Ye.jsx)("p", {
													className:
														"text-2xl font-bold text-white tracking-wider",
													children: "Le code du dev'",
												}),
												(0, Ye.jsx)("span", {
													className: "mt-10",
													children: "HTML/CSS/JS/SQL",
												}),
												(0, Ye.jsx)("p", {
													className: "m-1 text-[#132513]",
													children: "Projet de groupe",
												}),
												(0, Ye.jsx)("div", {
													className: "pt-8 text-center",
													children: (0, Ye.jsx)("a", {
														href: "https://yannou.philoucorp.fr/",
														target: "_blank",
														rel: "noreferrer",
														children: (0, Ye.jsx)("button", {
															className:
																"text-center rounded-lg px-8 py-3 bg-[#23232785] text-white ",
															children: "URL",
														}),
													}),
												}),
											],
										}),
									}),
								}),
								(0, Ye.jsxs)("div", {
									className: "flex justify-center align-center",
									children: [
										(0, Ye.jsx)("button", {
											className: "mt-12 profil-bot-button",
											children: (0, Ye.jsxs)(Qe, {
												to: "/portfolio/skills",
												mooth: !0,
												duration: 500,
												className:
													"text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white",
												children: [
													(0, Ye.jsx)(Ke, { className: "mr-3" }),
													" Retour aux comp\xe9tences",
												],
											}),
										}),
										(0, Ye.jsx)("button", {
											className: "mt-12 profil-bot-button ",
											children: (0, Ye.jsxs)(Qe, {
												to: "/portfolio/contact",
												mooth: !0,
												duration: 500,
												className:
													"text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white",
												children: [
													"\xc9changeons par mail ",
													(0, Ye.jsx)(Ze, { className: "ml-3" }),
													" ",
												],
											}),
										}),
									],
								}),
							],
						}),
					});
				},
				cs = n.p + "static/media/thib.4fa78691c46cf9164d58.png",
				fs = n.p + "static/media/CV-thibaut-raimond.1b6a396a61d8668b645a.pdf";
			function ds(e) {
				return De({
					tag: "svg",
					attr: { viewBox: "0 0 24 24" },
					child: [
						{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
						{
							tag: "path",
							attr: { d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" },
						},
					],
				})(e);
			}
			var ps = function () {
				return (0, Ye.jsx)(qu.div, {
					name: "profil",
					className:
						"bg-gradient-to-r from[#0e1111] to-transparentbg pt-4 flex justify-center items-center lg:pt-40 text-gray-300",
					initial: { scaleX: 0.5 },
					animate: { scaleX: 1 },
					exit: { scaleX: 0 },
					transition: { duration: 0.5 },
					children: (0, Ye.jsxs)("div", {
						className:
							"bg-[#0e1111] text-gray-300 items-center flex flex-col justify-center",
						children: [
							(0, Ye.jsx)("h1", {
								className:
									"text-4xl font-bold inline border-b-4 mb-10 border-[#07ed66]",
								children: "Profil",
							}),
							(0, Ye.jsxs)("div", {
								className:
									"flex items-center shadow-md shadow-[#040c16] pt-4 px-2",
								children: [
									(0, Ye.jsxs)("div", {
										className:
											"profil-left-container flex flex-col items-center mr-2",
										children: [
											(0, Ye.jsx)("img", {
												src: cs,
												alt: "Picture",
												className: "thib",
											}),
											(0, Ye.jsx)("button", {
												className:
													"bg-green-600 opacity-90 text-white active:bg-green-400 font-bold text-xs py-4 w-48 rounded outline-none mr-1 mt-6 ease-linear transition-all duration-300 hover:opacity-100 shadow hover:shadow-md hover:shadow-[#179244bb] ",
												type: "button",
												children: (0, Ye.jsxs)("a", {
													href: fs,
													download: !0,
													className:
														"flex justify-center align-center leading-0 text-sm",
													children: [
														"T\xe9l\xe9charger mon CV ",
														(0, Ye.jsx)(ds, { className: "w-[20px] h-[20px]" }),
													],
												}),
											}),
										],
									}),
									(0, Ye.jsxs)("div", {
										className: "profil-textSection",
										children: [
											(0, Ye.jsxs)("p", {
												className: "text-xl text-center max-w-lg ",
												children: [
													"Enchant\xe9 je m'appelle Thibaut et j'ai r\xe9cemment d\xe9couvert une passion pour le d\xe9veloppement web. J'ai donc choisi de suivre la formation FullStack JavaScript chez",
													" ",
													(0, Ye.jsx)("a", {
														className: "hover:text-[#07ed66]",
														href: "https://oclock.io/",
														target: "_blank",
														rel: "noreferrer",
														children: "O'Clock",
													}),
													". Cette formation m'a permis d'acqu\xe9rir de nombreuses comp\xe9tences de d\xe9veloppeur ainsi que de prendre part \xe0 un projet d'\xe9quipe en utilisant les m\xe9thodes AGILE et SCRUM pour la conception web.",
												],
											}),
											(0, Ye.jsx)("p", {
												className: "py-4 text-xl text-center max-w-lg",
												children:
													"Suite \xe0 cela j'ai pu obtenir mon dipl\xf4me de D\xe9veloppeur FullStack Web & Mobile de niveau RNCP 5 (BAC +2).",
											}),
											(0, Ye.jsx)("p", {
												className: "py-4 text-xl text-center max-w-lg mt-3",
												children:
													"D\xe9sormais je souhaite consolider et approfondir mes connaissances en travaillant avec une \xe9quipe professionnelle au sein d'une entreprise.",
											}),
										],
									}),
								],
							}),
							(0, Ye.jsx)("button", {
								className:
									"profil-mobile-button bg-green-500 text-white active:bg-green-600 font-bold text-xs py-4 w-48 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mt-6 ease-linear",
								type: "button",
								href: fs,
								download: !0,
								children: (0, Ye.jsxs)("a", {
									href: fs,
									download: !0,
									className:
										"flex justify-center align-center leading-0 text-sm",
									children: [
										"T\xe9l\xe9charger mon CV ",
										(0, Ye.jsx)(ds, { className: "w-[20px] h-[20px]" }),
									],
								}),
							}),
							(0, Ye.jsxs)("div", {
								className: "flex justify-center align-center",
								children: [
									(0, Ye.jsx)("button", {
										className: "mt-10 profil-bot-button",
										children: (0, Ye.jsxs)(Qe, {
											to: "/portfolio",
											mooth: !0,
											duration: 500,
											className:
												"text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 border-[#999b99] border-opacity-25 hover:text-white hover:border-white",
											children: [
												(0, Ye.jsx)(Ke, { className: "mr-3" }),
												" Retour \xe0 l'accueil",
											],
										}),
									}),
									(0, Ye.jsx)("button", {
										className: "mt-10 profil-bot-button",
										children: (0, Ye.jsxs)(Qe, {
											to: "/portfolio/skills",
											mooth: !0,
											duration: 500,
											className:
												"text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 border-[#999b99] border-opacity-25 hover:text-white hover:border-white",
											children: [
												"Mes comp\xe9tences ",
												(0, Ye.jsx)(Ze, { className: "ml-3" }),
												" ",
											],
										}),
									}),
								],
							}),
						],
					}),
				});
			};
			function hs() {
				var e = (0, t.useRef)(!1);
				return (
					ct(function () {
						return (
							(e.current = !0),
							function () {
								e.current = !1;
							}
						);
					}, []),
					e
				);
			}
			var vs = (function (e) {
				d(n, e);
				var t = y(n);
				function n() {
					return u(this, n), t.apply(this, arguments);
				}
				return (
					c(n, [
						{
							key: "getSnapshotBeforeUpdate",
							value: function (e) {
								var t = this.props.childRef.current;
								if (t && e.isPresent && !this.props.isPresent) {
									var n = this.props.sizeRef.current;
									(n.height = t.offsetHeight || 0),
										(n.width = t.offsetWidth || 0),
										(n.top = t.offsetTop),
										(n.left = t.offsetLeft);
								}
								return null;
							},
						},
						{ key: "componentDidUpdate", value: function () {} },
						{
							key: "render",
							value: function () {
								return this.props.children;
							},
						},
					]),
					n
				);
			})(t.Component);
			function ms(e) {
				var n = e.children,
					r = e.isPresent,
					a = (0, t.useId)(),
					o = (0, t.useRef)(null),
					i = (0, t.useRef)({ width: 0, height: 0, top: 0, left: 0 });
				return (
					(0, t.useInsertionEffect)(
						function () {
							var e = i.current,
								t = e.width,
								n = e.height,
								l = e.top,
								u = e.left;
							if (!r && o.current && t && n) {
								o.current.dataset.motionPopId = a;
								var s = document.createElement("style");
								return (
									document.head.appendChild(s),
									s.sheet &&
										s.sheet.insertRule(
											'\n          [data-motion-pop-id="'
												.concat(
													a,
													'"] {\n            position: absolute !important;\n            width: '
												)
												.concat(t, "px !important;\n            height: ")
												.concat(n, "px !important;\n            top: ")
												.concat(l, "px !important;\n            left: ")
												.concat(u, "px !important;\n          }\n        ")
										),
									function () {
										document.head.removeChild(s);
									}
								);
							}
						},
						[r]
					),
					t.createElement(
						vs,
						{ isPresent: r, childRef: o, sizeRef: i },
						t.cloneElement(n, { ref: o })
					)
				);
			}
			var ys = function (e) {
				var n = e.children,
					r = e.initial,
					a = e.isPresent,
					o = e.onExitComplete,
					i = e.custom,
					l = e.presenceAffectsLayout,
					u = e.mode,
					s = St(gs),
					c = (0, t.useId)(),
					f = (0, t.useMemo)(
						function () {
							return {
								id: c,
								initial: r,
								isPresent: a,
								custom: i,
								onExitComplete: function (e) {
									s.set(e, !0);
									var t,
										n = It(s.values());
									try {
										for (n.s(); !(t = n.n()).done; ) {
											if (!t.value) return;
										}
									} catch (r) {
										n.e(r);
									} finally {
										n.f();
									}
									o && o();
								},
								register: function (e) {
									return (
										s.set(e, !1),
										function () {
											return s.delete(e);
										}
									);
								},
							};
						},
						l ? void 0 : [a]
					);
				return (
					(0, t.useMemo)(
						function () {
							s.forEach(function (e, t) {
								return s.set(t, !1);
							});
						},
						[a]
					),
					t.useEffect(
						function () {
							!a && !s.size && o && o();
						},
						[a]
					),
					"popLayout" === u && (n = t.createElement(ms, { isPresent: a }, n)),
					t.createElement(ut.Provider, { value: f }, n)
				);
			};
			function gs() {
				return new Map();
			}
			var bs = function (e) {
				return e.key || "";
			};
			var xs = function (e) {
					var n = e.children,
						r = e.custom,
						a = e.initial,
						o = void 0 === a || a,
						i = e.onExitComplete,
						u = e.exitBeforeEnter,
						s = e.presenceAffectsLayout,
						c = void 0 === s || s,
						f = e.mode,
						d = void 0 === f ? "sync" : f;
					u &&
						((d = "wait"), yr(!1, "Replace exitBeforeEnter with mode='wait'"));
					var p = (function () {
							var e = hs(),
								n = g((0, t.useState)(0), 2),
								r = n[0],
								a = n[1],
								o = (0, t.useCallback)(
									function () {
										e.current && a(r + 1);
									},
									[r]
								);
							return [
								(0, t.useCallback)(
									function () {
										return ao.postRender(o);
									},
									[o]
								),
								r,
							];
						})(),
						h = g(p, 1)[0],
						v = (0, t.useContext)(jt).forceRender;
					v && (h = v);
					var m = hs(),
						y = (function (e) {
							var n = [];
							return (
								t.Children.forEach(e, function (e) {
									(0, t.isValidElement)(e) && n.push(e);
								}),
								n
							);
						})(n),
						b = y,
						x = new Set(),
						w = (0, t.useRef)(b),
						k = (0, t.useRef)(new Map()).current,
						S = (0, t.useRef)(!0);
					if (
						(ct(function () {
							(S.current = !1),
								(function (e, t) {
									e.forEach(function (e) {
										var n = bs(e);
										t.set(n, e);
									});
								})(y, k),
								(w.current = b);
						}),
						pr(function () {
							(S.current = !0), k.clear(), x.clear();
						}),
						S.current)
					)
						return t.createElement(
							t.Fragment,
							null,
							b.map(function (e) {
								return t.createElement(
									ys,
									{
										key: bs(e),
										isPresent: !0,
										initial: !!o && void 0,
										presenceAffectsLayout: c,
										mode: d,
									},
									e
								);
							})
						);
					b = l(b);
					for (
						var E = w.current.map(bs), C = y.map(bs), j = E.length, P = 0;
						P < j;
						P++
					) {
						var T = E[P];
						-1 === C.indexOf(T) && x.add(T);
					}
					return (
						"wait" === d && x.size && (b = []),
						x.forEach(function (e) {
							if (-1 === C.indexOf(e)) {
								var n = k.get(e);
								if (n) {
									var a = E.indexOf(e);
									b.splice(
										a,
										0,
										t.createElement(
											ys,
											{
												key: bs(n),
												isPresent: !1,
												onExitComplete: function () {
													k.delete(e), x.delete(e);
													var t = w.current.findIndex(function (t) {
														return t.key === e;
													});
													if ((w.current.splice(t, 1), !x.size)) {
														if (((w.current = y), !1 === m.current)) return;
														h(), i && i();
													}
												},
												custom: r,
												presenceAffectsLayout: c,
												mode: d,
											},
											n
										)
									);
								}
							}
						}),
						(b = b.map(function (e) {
							var n = e.key;
							return x.has(n)
								? e
								: t.createElement(
										ys,
										{
											key: bs(e),
											isPresent: !0,
											presenceAffectsLayout: c,
											mode: d,
										},
										e
								  );
						})),
						t.createElement(
							t.Fragment,
							null,
							x.size
								? b
								: b.map(function (e) {
										return (0, t.cloneElement)(e);
								  })
						)
					);
				},
				ws = function () {
					var e = g((0, t.useState)(!1), 2),
						n = e[0],
						r = e[1],
						a = function () {
							return r(!n);
						};
					return (0, Ye.jsx)("div", {
						children: (0, Ye.jsxs)("ul", {
							className:
								"bg-gradient-to-r from[#0e1111] to-transparentbg flex flex-col justify-center items-center text-white pt-4",
							children: [
								(0, Ye.jsxs)("li", {
									className: "py-6 text-4xl",
									children: [
										(0, Ye.jsxs)(Qe, {
											onClick: a,
											to: "/portfolio",
											mooth: !0,
											duration: 500,
											children: [" ", "Accueil", " "],
										}),
										" ",
									],
								}),
								(0, Ye.jsxs)("li", {
									className: "py-6 text-4xl",
									children: [
										(0, Ye.jsxs)(Qe, {
											onClick: a,
											to: "/portfolio/profil",
											mooth: !0,
											duration: 500,
											children: [" ", "Profil", " "],
										}),
										" ",
									],
								}),
								(0, Ye.jsxs)("li", {
									className: "py-6 text-4xl",
									children: [
										(0, Ye.jsxs)(Qe, {
											onClick: a,
											to: "/portfolio/skills",
											mooth: !0,
											duration: 500,
											children: [" ", "Comp\xe9tences", " "],
										}),
										" ",
									],
								}),
								(0, Ye.jsxs)("li", {
									className: "py-6 text-4xl",
									children: [
										(0, Ye.jsxs)(Qe, {
											onClick: a,
											to: "/portfolio/work",
											mooth: !0,
											duration: 500,
											children: [" ", "Projets", " "],
										}),
										" ",
									],
								}),
								(0, Ye.jsxs)("li", {
									className: "py-6 text-4xl",
									children: [
										(0, Ye.jsxs)(Qe, {
											onClick: a,
											to: "/portfolio/contact",
											mooth: !0,
											duration: 500,
											children: [" ", "Contact", " "],
										}),
										" ",
									],
								}),
								(0, Ye.jsxs)("div", {
									className: " flex justify-between mt-4",
									children: [
										(0, Ye.jsx)("li", {
											className:
												"w-[60px] h-[60px] flex justify-between bg-[#0A66C2]  ",
											children: (0, Ye.jsx)("a", {
												className:
													"flex justify-between items-center w-full text-gray-300",
												href: "https://www.linkedin.com/in/thibaut-raimond-0a46791ab/",
												target: "_blank",
												rel: "noreferrer",
												children: (0, Ye.jsx)(Ie, { size: 30 }),
											}),
										}),
										(0, Ye.jsx)("li", {
											className:
												"w-[60px] h-[60px] flex justify-between bg-[#2d333b]",
											children: (0, Ye.jsx)("a", {
												className:
													"flex justify-between items-center w-full text-gray-300",
												href: "https://github.com/ThibautRaimond",
												target: "_blank",
												rel: "noreferrer",
												children: (0, Ye.jsx)(Fe, { size: 30 }),
											}),
										}),
										(0, Ye.jsx)("li", {
											className:
												"w-[60px] h-[60px] flex justify-between bg-[#347d39] ",
											children: (0, Ye.jsx)("a", {
												className:
													"flex justify-between items-center w-full text-gray-300",
												href: "https://cvthibautraimond.netlify.app/",
												target: "_blank",
												rel: "noreferrer",
												children: (0, Ye.jsx)(et, { size: 30 }),
											}),
										}),
									],
								}),
							],
						}),
					});
				},
				ks = function () {
					var e = he();
					return (0, Ye.jsx)(xs, {
						children: (0, Ye.jsxs)(
							Pe,
							{
								location: e.pathname,
								children: [
									(0, Ye.jsx)(Ce, {
										path: "/portfolio",
										element: (0, Ye.jsx)(Zu, {}),
									}),
									(0, Ye.jsx)(Ce, {
										path: "/portfolio/profil",
										element: (0, Ye.jsx)(ps, {}),
									}),
									(0, Ye.jsx)(Ce, {
										path: "/portfolio/skills",
										element: (0, Ye.jsx)(ls, {}),
									}),
									(0, Ye.jsx)(Ce, {
										path: "/portfolio/work",
										element: (0, Ye.jsx)(ss, {}),
									}),
									(0, Ye.jsx)(Ce, {
										path: "/portfolio/contact",
										element: (0, Ye.jsx)(Yu, {}),
									}),
									(0, Ye.jsx)(Ce, {
										path: "/portfolio/menu",
										element: (0, Ye.jsx)(ws, {}),
									}),
								],
							},
							e.pathname
						),
					});
				};
			var Ss = function () {
				return (0, Ye.jsxs)(nt, {
					children: [(0, Ye.jsx)(Ne, {}), (0, Ye.jsx)(ks, {})],
				});
			};
			a.createRoot(document.getElementById("root")).render(
				(0, Ye.jsx)(t.StrictMode, {
					children: (0, Ye.jsx)($e, { children: (0, Ye.jsx)(Ss, {}) }),
				})
			);
		})();
})();
//# sourceMappingURL=main.3c3ef11a.js.map
