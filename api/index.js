var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/app.css
var app_default = "/build/_assets/app-V6INVMU4.css";

// app/root.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [{ rel: "stylesheet", href: app_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader
});
var import_node2 = require("@remix-run/node");

// app/utils/auth.server.ts
var import_bcryptjs2 = __toESM(require("bcryptjs"));

// app/utils/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/auth.server.ts
var import_node = require("@remix-run/node");

// app/utils/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var createUser = async (user) => {
  let passwordHash = await import_bcryptjs.default.hash(user.password, 10);
  return { id: (await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      profile: {
        firstName: user.firstName,
        lastName: user.lastName
      }
    }
  })).id, email: user.email };
}, getAllSnippetsCategories = async () => prisma.snippet.findMany({
  where: {},
  distinct: ["category"]
}), getSnippetById = async (snippetId) => await prisma.snippet.findUnique({
  where: {
    snippetId
  }
}), getAllSnippets = async () => prisma.snippet.findMany({
  select: {
    title: !0,
    content: !0,
    category: !0
  },
  where: {}
});

// app/utils/auth.server.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "kudos-session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function register(user) {
  if (await prisma.user.count({ where: { email: user.email } }))
    return (0, import_node.json)(
      { error: "User already exists with that email" },
      { status: 400 }
    );
  let newUser = await createUser(user);
  return newUser ? createUserSession(newUser.id, "/") : (0, import_node.json)(
    {
      error: "Something went wrong trying to create a new user.",
      fields: { email: user.email, password: user.password }
    },
    { status: 400 }
  );
}
async function login({ email, password }) {
  let user = await prisma.user.findUnique({
    where: { email }
  });
  return !user || !await import_bcryptjs2.default.compare(password, user.password) ? (0, import_node.json)({ error: "Incorrect login" }, { status: 400 }) : createUserSession(user.id, "/");
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/routes/logout.ts
var action = async ({ request }) => logout(request), loader = async () => (0, import_node2.redirect)("/");

// app/routes/index.ts
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var loader2 = async ({ request }) => (await requireUserId(request), (0, import_node3.redirect)("/home"));

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login
});
var import_react4 = require("react");

// app/components/layout.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "h-screen w-full font-mono",
    children
  }, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// app/components/form-field.tsx
var import_react3 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {
  },
  error = ""
}) {
  let [errorText, setErrorText] = (0, import_react3.useState)(error);
  return (0, import_react3.useEffect)(() => {
    setErrorText(error);
  }, [error]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        htmlFor,
        className: "text-blue-600 font-semibold",
        children: label
      }, void 0, !1, {
        fileName: "app/components/form-field.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        onChange: (e) => {
          onChange(e), setErrorText("");
        },
        type,
        id: htmlFor,
        name: htmlFor,
        className: "w-full p-2 rounded-xl my-2",
        value
      }, void 0, !1, {
        fileName: "app/components/form-field.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full",
        children: errorText || ""
      }, void 0, !1, {
        fileName: "app/components/form-field.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/form-field.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var import_node4 = require("@remix-run/node");

// app/utils/validators.server.ts
var validateEmail = (email) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.length || !validRegex.test(email))
    return "Please enter a valid email address";
}, validatePassword = (password) => {
  if (password.length < 5)
    return "Please enter a password that is at least 5 characters long";
}, validateName = (name) => {
  if (!name.length)
    return "Please enter a value";
};

// app/routes/login.tsx
var import_react5 = require("@remix-run/react"), import_react6 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let form = await request.formData(), action3 = form.get("_action"), email = form.get("email"), password = form.get("password"), firstName = form.get("firstName"), lastName = form.get("lastName");
  if (typeof action3 != "string" || typeof email != "string" || typeof password != "string")
    return (0, import_node4.json)({ error: "Invalid Form Data", form: action3 }, { status: 400 });
  if (action3 === "register" && (typeof firstName != "string" || typeof lastName != "string"))
    return (0, import_node4.json)({ error: "Invalid Form Data", form: action3 }, { status: 400 });
  let errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...action3 === "register" ? {
      firstName: validateName(firstName || ""),
      lastName: validateName(lastName || "")
    } : {}
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node4.json)({ errors, fields: { email, password, firstName, lastName }, form: action3 }, { status: 400 });
  switch (action3) {
    case "login":
      return await login({ email, password });
    case "register":
      return firstName = firstName, lastName = lastName, await register({ email, password, firstName, lastName });
    default:
      return (0, import_node4.json)({ error: "Invalid Form Data" }, { status: 400 });
  }
};
function Login() {
  var _a, _b, _c, _d;
  let [action3, setAction] = (0, import_react4.useState)("login"), actionData = (0, import_react5.useActionData)(), firstLoad = (0, import_react6.useRef)(!0), [errors, setErrors] = (0, import_react4.useState)((actionData == null ? void 0 : actionData.errors) || {}), [formError, setFormError] = (0, import_react4.useState)((actionData == null ? void 0 : actionData.error) || ""), [formData, setFormData] = (0, import_react4.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    firstName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || "",
    lastName: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.firstName) || ""
  }), handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "h-full justify-center items-center flex flex-col gap-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          onClick: () => setAction(action3 == "login" ? "register" : "login"),
          className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",
          children: action3 === "login" ? "Sign Up" : "Sign In"
        }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          className: "rounded-2xl bg-gray-200 p-6 w-96",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
              htmlFor: "email",
              label: "Email",
              value: formData.email,
              onChange: (e) => handleInputChange(e, "email")
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 98,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
              htmlFor: "password",
              type: "password",
              label: "Password",
              value: formData.password,
              onChange: (e) => handleInputChange(e, "password")
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 104,
              columnNumber: 11
            }, this),
            action3 === "register" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                  htmlFor: "firstName",
                  label: "First Name",
                  onChange: (e) => handleInputChange(e, "firstName"),
                  value: formData.firstName
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 113,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                  htmlFor: "lastName",
                  label: "Last Name",
                  onChange: (e) => handleInputChange(e, "lastName"),
                  value: formData.lastName
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 119,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/login.tsx",
              lineNumber: 112,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full text-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                name: "_action",
                value: action3,
                className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",
                children: action3 === "login" ? "Sign In" : "Sign Up"
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 128,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 127,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");

// app/components/snippets-panel.tsx
var import_react7 = require("@remix-run/react"), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function SnippetsPanel({ snipp }) {
  let navigate = (0, import_react8.useNavigate)(), { snippets } = (0, import_react7.useLoaderData)(), submit = (0, import_react7.useSubmit)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-1/6 bg-gray-200 flex flex-col",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
          "aria-label": "Main navigation",
          className: "remix-app__header-nav",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col justify-between mt-6",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              className: "",
              children: snipp.map((sn) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                className: "cursor-pointer",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  onClick: () => navigate(`snippet/${sn.snippetId}`),
                  className: "flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md",
                  children: sn.category
                }, void 0, !1, {
                  fileName: "app/components/snippets-panel.tsx",
                  lineNumber: 20,
                  columnNumber: 19
                }, this)
              }, sn.snippetId, !1, {
                fileName: "app/components/snippets-panel.tsx",
                lineNumber: 19,
                columnNumber: 17
              }, this))
            }, void 0, !1, {
              fileName: "app/components/snippets-panel.tsx",
              lineNumber: 17,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/snippets-panel.tsx",
            lineNumber: 16,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/snippets-panel.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/snippets-panel.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-center p-6 bg-gray-300",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          action: "/logout",
          method: "post",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "submit",
            className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",
            children: "Sign Out"
          }, void 0, !1, {
            fileName: "app/components/snippets-panel.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/snippets-panel.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/snippets-panel.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/snippets-panel.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let snippets = await getAllSnippetsCategories(), all = await getAllSnippets();
  return (0, import_node5.json)({ all, snippets });
};
function Home() {
  let { all, snippets } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-full flex",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SnippetsPanel, {
            snipp: snippets
          }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-1 flex flex-col",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex-1 flex",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "w-full p-10 flex flex-col gap-y-4",
                children: all.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      children: x.category
                    }, x.category, !1, {
                      fileName: "app/routes/home.tsx",
                      lineNumber: 29,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "underline",
                      children: [
                        " ",
                        x.title
                      ]
                    }, x.snippetId, !0, {
                      fileName: "app/routes/home.tsx",
                      lineNumber: 30,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: x.content
                    }, x.snippetId, !1, {
                      fileName: "app/routes/home.tsx",
                      lineNumber: 31,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/home.tsx",
                  lineNumber: 28,
                  columnNumber: 17
                }, this))
              }, void 0, !1, {
                fileName: "app/routes/home.tsx",
                lineNumber: 26,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/home.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/home.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/home.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/home.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/home/snippet.$snippetId.tsx
var snippet_snippetId_exports = {};
__export(snippet_snippetId_exports, {
  default: () => SnippetModal,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = async ({ request, params }) => {
  let { snippetId } = params;
  if (typeof snippetId != "string")
    return (0, import_node6.redirect)("/home");
  let snipp = await getSnippetById(snippetId);
  return (0, import_node6.json)({ snipp });
};
function SnippetModal() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
    children: [
      " Snippets: ",
      data.snipp.category
    ]
  }, void 0, !0, {
    fileName: "app/routes/home/snippet.$snippetId.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "428b3095", entry: { module: "/build/entry.client-JB7KPLNF.js", imports: ["/build/_shared/chunk-MSQAS745.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NAHMZOWA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-KG344DPP.js", imports: ["/build/_shared/chunk-WHSOEZU6.js", "/build/_shared/chunk-COVU6HTZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home/snippet.$snippetId": { id: "routes/home/snippet.$snippetId", parentId: "routes/home", path: "snippet/:snippetId", index: void 0, caseSensitive: void 0, module: "/build/routes/home/snippet.$snippetId-UYJ6VEIW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DLVDBO2F.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-E6OD7YVV.js", imports: ["/build/_shared/chunk-WHSOEZU6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-54GW2W2K.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-428B3095.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/home/snippet.$snippetId": {
    id: "routes/home/snippet.$snippetId",
    parentId: "routes/home",
    path: "snippet/:snippetId",
    index: void 0,
    caseSensitive: void 0,
    module: snippet_snippetId_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
