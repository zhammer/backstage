/*! For license information please see 885d80d1.31267b9e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[911612],{603905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),g=i,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});t(827378);var r=t(603905);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={id:"index",title:"Core Backend Service APIs",sidebar_label:"Overview",description:"Core backend service APIs"},l=void 0,c={unversionedId:"backend-system/core-services/index",id:"backend-system/core-services/index",title:"Core Backend Service APIs",description:"Core backend service APIs",source:"@site/../docs/backend-system/core-services/01-index.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/index",permalink:"/docs/backend-system/core-services/index",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/core-services/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Core Backend Service APIs",sidebar_label:"Overview",description:"Core backend service APIs"},sidebar:"docs",previous:{title:"Migration Guide",permalink:"/docs/backend-system/building-plugins-and-modules/migrating"}},u={},p=[{value:"HTTP Router Service",id:"http-router-service",level:2},{value:"Using the service",id:"using-the-service",level:3},{value:"Configuring the service",id:"configuring-the-service",level:3},{value:"Root HTTP Router",id:"root-http-router",level:2},{value:"Using the service",id:"using-the-service-1",level:3},{value:"Configuring the service",id:"configuring-the-service-1",level:3},{value:"Config",id:"config",level:2},{value:"Using the service",id:"using-the-service-2",level:3},{value:"Configuring the service",id:"configuring-the-service-2",level:3},{value:"Logging",id:"logging",level:2},{value:"Using the service",id:"using-the-service-3",level:3},{value:"Root Logger",id:"root-logger",level:3},{value:"Configuring the service",id:"configuring-the-service-3",level:3},{value:"Cache",id:"cache",level:2},{value:"Using the service",id:"using-the-service-4",level:3},{value:"Database",id:"database",level:2},{value:"Using the service",id:"using-the-service-5",level:3},{value:"Discovery",id:"discovery",level:2},{value:"Using the service",id:"using-the-service-6",level:3},{value:"Identity",id:"identity",level:2},{value:"Using the service",id:"using-the-service-7",level:3},{value:"Configuring the service",id:"configuring-the-service-4",level:3},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Using the service",id:"using-the-service-8",level:3},{value:"Root Lifecycle",id:"root-lifecycle",level:2},{value:"Configure the service",id:"configure-the-service",level:3},{value:"Permissions",id:"permissions",level:2},{value:"Using the service",id:"using-the-service-9",level:3},{value:"Scheduler",id:"scheduler",level:2},{value:"Using the service",id:"using-the-service-10",level:3},{value:"URL Readers",id:"url-readers",level:2},{value:"Using the service",id:"using-the-service-11",level:3}],d={toc:p};function g(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."))),(0,r.kt)("p",null,"The default backend provides several ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/packages/backend-plugin-api/src/services/definitions/coreServices.ts"},"core services")," out of the box which includes access to configuration, logging, URL Readers, databases and more."),(0,r.kt)("p",null,"All core services are available through the ",(0,r.kt)("inlineCode",{parentName:"p"},"coreServices")," namespace in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/backend-plugin-api")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { coreServices } from '@backstage/backend-plugin-api';\n")),(0,r.kt)("h2",{id:"http-router-service"},"HTTP Router Service"),(0,r.kt)("p",null,"One of the most common services is the HTTP router service which is used to expose HTTP endpoints for other plugins to consume."),(0,r.kt)("h3",{id:"using-the-service"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to register a HTTP router for the ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," plugin.\nThis single route will be available at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/example/hello")," path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: { http: coreServices.httpRouter },\n      async init({ http }) {\n        const router = Router();\n        router.get('/hello', (_req, res) => {\n          res.status(200).json({ hello: 'world' });\n        });\n        // Registers the router at the /api/example path\n        http.use(router);\n      },\n    });\n  },\n});\n")),(0,r.kt)("h3",{id:"configuring-the-service"},"Configuring the service"),(0,r.kt)("p",null,"There's additional configuration that you can optionally pass to setup the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpRouter")," core service."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getPath")," - Can be used to generate a path for each plugin. Currently defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/${pluginId}"))),(0,r.kt)("p",null,"You can configure these additional options by adding an override for the core service when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"createBackend")," like follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { httpRouterServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    httpRouterServiceFactory({\n      getPath: (pluginId: string) => `/plugins/${pluginId}`,\n    }),\n  ],\n});\n")),(0,r.kt)("h2",{id:"root-http-router"},"Root HTTP Router"),(0,r.kt)("p",null,"The root HTTP router is a service that allows you to register routes on the root of the backend service. This is useful for things like health checks, or other routes that you want to expose on the root of the backend service. It is used as the base router that backs the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpRouter")," service. Most likely you won't need to use this service directly, but rather use the ",(0,r.kt)("inlineCode",{parentName:"p"},"httpRouter")," service."),(0,r.kt)("h3",{id:"using-the-service-1"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get the root HTTP router service in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend plugin to register a health check route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        rootHttpRouter: coreServices.rootHttpRouter,\n      },\n      async init({ rootHttpRouter }) {\n        const router = Router();\n        router.get('/health', (request, response) => {\n          response.send('OK');\n        });\n\n        rootHttpRouter.use(router);\n      },\n    });\n  },\n});\n")),(0,r.kt)("h3",{id:"configuring-the-service-1"},"Configuring the service"),(0,r.kt)("p",null,"There's additional options that you can pass to configure the root HTTP Router service. These options are passed when you call ",(0,r.kt)("inlineCode",{parentName:"p"},"createBackend"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"indexPath")," - optional path to forward all unmatched requests to. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/app")," which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"app-backend")," plugin responsible for serving the frontend application through the backend.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"configure")," - this is an optional function that you can use to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," instance. This is useful if you want to add your own middleware to the root router, such as logging, or other things that you want to do before the request is handled by the backend. It's also useful to override the order in which middleware is applied."))),(0,r.kt)("p",null,"You can configure the root HTTP Router service by passing the options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"createBackend")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { rootHttpRouterServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    rootHttpRouterServiceFactory({\n      configure: ({ app, middleware, routes, config, logger, lifecycle }) => {\n        // the built in middleware is provided through an option in the configure function\n        app.use(middleware.helmet());\n        app.use(middleware.cors());\n        app.use(middleware.compression());\n\n        // you can add you your own middleware in here\n        app.use(custom.logging());\n\n        // here the routes that are registered by other plugins\n        app.use(routes);\n\n        // some other middleware that comes after the other routes\n        app.use(middleware.notFound());\n        app.use(middleware.error());\n      },\n    }),\n  ],\n});\n")),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("p",null,"This service allows you to read configuration values out of your ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config")," YAML files."),(0,r.kt)("h3",{id:"using-the-service-2"},"Using the service"),(0,r.kt)("p",null,"The following example shows how you can use the default config service to be able to get a config value, and then log it to the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        log: coreServices.logger,\n        config: coreServices.config,\n      },\n      async init({ log, config }) {\n        const baseUrl = config.getString('backend.baseUrl');\n        log.warn(`The backend is running at ${baseUrl}`);\n      },\n    });\n  },\n});\n")),(0,r.kt)("h3",{id:"configuring-the-service-2"},"Configuring the service"),(0,r.kt)("p",null,"There's additional configuration that you can optionally pass to setup the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," core service."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"argv")," - Override the arguments that are passed to the config loader, instead of using ",(0,r.kt)("inlineCode",{parentName:"li"},"process.argv")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remote")," - Configure remote configuration loading")),(0,r.kt)("p",null,"You can configure these additional options by adding an override for the core service when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"createBackend")," like follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { configServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    configServiceFactory({\n      argv: [\n        '--config',\n        '/backstage/app-config.development.yaml',\n        '--config',\n        '/backstage/app-config.yaml',\n      ],\n      remote: { reloadIntervalSeconds: 60 },\n    }),\n  ],\n});\n")),(0,r.kt)("h2",{id:"logging"},"Logging"),(0,r.kt)("p",null,"This service allows plugins to output logging information. There are actually two logger services: a root logger, and a plugin logger which is bound to individual plugins, so that you will get nice messages with the plugin ID referenced in the log lines."),(0,r.kt)("h3",{id:"using-the-service-3"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get the logger in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend plugin and create a warning message that will be printed nicely to the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        log: coreServices.logger,\n      },\n      async init({ log }) {\n        log.warn(\"Here's a nice log line that's a warning!\");\n      },\n    });\n  },\n});\n")),(0,r.kt)("h3",{id:"root-logger"},"Root Logger"),(0,r.kt)("p",null,"The root logger is the logger that is used by other root services. It's where the implementation lies for creating child loggers around the backstage ecosystem including child loggers for plugins with the correct metadata and annotations."),(0,r.kt)("p",null,"If you want to override the implementation for logging across all of the backend, this is the service that you should override."),(0,r.kt)("h3",{id:"configuring-the-service-3"},"Configuring the service"),(0,r.kt)("p",null,"The following example is how you can override the root logger service to add additional metadata to all log lines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { coreServices } from '@backstage/backend-plugin-api';\nimport { WinstonLogger } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    createServiceFactory({\n      service: coreServices.rootLogger,\n      deps: {\n        config: coreServices.config,\n      },\n      async factory({ config }) {\n        const logger = WinstonLogger.create({\n          meta: {\n            service: 'backstage',\n            // here's some additional information that is not part of the\n            // original implementation\n            podName: 'myk8spod',\n          },\n          level: process.env.LOG_LEVEL || 'info',\n          format:\n            process.env.NODE_ENV === 'production'\n              ? format.json()\n              : WinstonLogger.colorFormat(),\n          transports: [new transports.Console()],\n        });\n\n        return logger;\n      },\n    }),\n  ],\n});\n")),(0,r.kt)("h2",{id:"cache"},"Cache"),(0,r.kt)("p",null,"This service lets your plugin interact with a cache. It is bound to your plugin too, so that you will only set and get values in your plugin's private namespace."),(0,r.kt)("h3",{id:"using-the-service-4"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get a cache client in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend plugin and setting and getting values from the cache."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        cache: coreServices.cache,\n      },\n      async init({ cache }) {\n        const { key, value } = { key: 'test:key', value: 'bob' };\n        await cache.set(key, value, { ttl: 1000 });\n\n        // .. some other stuff.\n\n        await cache.get(key); // 'bob'\n      },\n    });\n  },\n});\n")),(0,r.kt)("h2",{id:"database"},"Database"),(0,r.kt)("p",null,"This service lets your plugins get a ",(0,r.kt)("inlineCode",{parentName:"p"},"knex")," client hooked up to a database which is configured in your ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config")," YAML files, for your persistence needs."),(0,r.kt)("p",null,"If there's no config provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"backend.database")," then you will automatically get a simple in-memory SQLite 3 database for your plugin whose contents will be lost when the service restarts."),(0,r.kt)("p",null,"This service is scoped per plugin too, so that table names do not conflict across plugins."),(0,r.kt)("h3",{id:"using-the-service-5"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get access to the database service in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend plugin and getting a client for interacting with the database. It also runs some migrations from a certain directory for your plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { resolvePackagePath } from '@backstage/backend-common';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        database: coreServices.database,\n      },\n      async init({ database }) {\n        const client = await database.getClient();\n        const migrationsDir = resolvePackagePath(\n          '@internal/my-plugin',\n          'migrations',\n        );\n        if (!database.migrations?.skip) {\n          await client.migrate.latest({\n            directory: migrationsDir,\n          });\n        }\n      },\n    });\n  },\n});\n")),(0,r.kt)("h2",{id:"discovery"},"Discovery"),(0,r.kt)("p",null,"When building plugins, you might find that you will need to look up another plugin's base URL to be able to communicate with it. This could be for example an HTTP route or some ",(0,r.kt)("inlineCode",{parentName:"p"},"ws")," protocol URL. For this we have a discovery service which can provide both internal and external base URLs for a given a plugin ID."),(0,r.kt)("h3",{id:"using-the-service-6"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get the discovery service in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend plugin and making a request to both the internal and external base URLs for the ",(0,r.kt)("inlineCode",{parentName:"p"},"derp")," plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { fetch } from 'node-fetch';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        discovery: coreServices.discovery,\n      },\n      async init({ discovery }) {\n        const url = await discoverty.getBaseUrl('derp'); // can also use discovery.getBaseUrl to retrieve external URL\n        const response = await fetch(`${url}/hello`);\n      },\n    });\n  },\n});\n")),(0,r.kt)("h2",{id:"identity"},"Identity"),(0,r.kt)("p",null,"When working with backend plugins, you might find that you will need to interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"auth-backend")," plugin to both authenticate backstage tokens, and to deconstruct them to get the user's entity ref and/or ownership claims out of them."),(0,r.kt)("h3",{id:"using-the-service-7"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get the identity service in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend plugin and retrieve the user's entity ref and ownership claims for the incoming request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        identity: coreServices.identity,\n        http: coreServices.httpRouter,\n      },\n      async init({ http, identity }) {\n        const router = Router();\n        router.get('/test-me', (request, response) => {\n          // use the identity service to pull out the header from the request and get the user\n          const {\n            identity: { userEntityRef, ownershipEntityRefs },\n          } = await identity.getIdentity({\n            request,\n          });\n\n          // send the decoded and validated things back to the user\n          response.json({\n            userEntityRef,\n            ownershipEntityRefs,\n          });\n        });\n\n        http.use(router);\n      },\n    });\n  },\n});\n")),(0,r.kt)("h3",{id:"configuring-the-service-4"},"Configuring the service"),(0,r.kt)("p",null,"There's additional configuration that you can optionally pass to setup the ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," core service."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"issuer")," - Set an optional issuer for validation of the JWT token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"algorithms")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"alg")," header for validation of the JWT token, defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"ES256"),". More info on supported algorithms can be found in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/panva/jose"},(0,r.kt)("inlineCode",{parentName:"a"},"jose")," library documentation"))),(0,r.kt)("p",null,"You can configure these additional options by adding an override for the core service when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"createBackend")," like follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { identityServiceFactory } from '@backstage/backend-app-api';\n\nconst backend = createBackend({\n  services: [\n    identityServiceFactory({\n      issuer: 'backstage',\n      algorithms: ['ES256', 'RS256'],\n    }),\n  ],\n});\n")),(0,r.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,r.kt)("p",null,"This service allows your plugins to register hooks for cleaning up resources as the service is shutting down (e.g. when a pod is being torn down, or when pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," during local development). Other core services also leverage this same mechanism internally to stop themselves cleanly."),(0,r.kt)("h3",{id:"using-the-service-8"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get the lifecycle service in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend plugin to clean up a long running interval when the service is shutting down."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        lifecycle: coreServices.lifecycle,\n        logger: coreServices.logger,\n      },\n      async init({ lifecycle, logger }) {\n        // some example work that we want to stop when shutting down\n        const interval = setInterval(async () => {\n          await fetch('http://google.com/keepalive').then(r => r.json());\n          // do some other stuff.\n        }, 1000);\n\n        lifecycle.addShutdownHook(() => clearInterval(interval));\n      },\n    });\n  },\n});\n")),(0,r.kt)("h2",{id:"root-lifecycle"},"Root Lifecycle"),(0,r.kt)("p",null,"This service is the same as the lifecycle service, but should only be used by the root services. This is also where the implementation for the actual lifecycle hooks are collected and executed, so if you want to override the implementation of how those are processed, you should override this service."),(0,r.kt)("h3",{id:"configure-the-service"},"Configure the service"),(0,r.kt)("p",null,"The following example shows how to override the default implementation of the lifecycle service with something that listens on different process events to the original."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class MyCustomLifecycleService implements RootLifecycleService {\n  constructor(private readonly logger: LoggerService) {}\n\n  #isCalled = false;\n  #shutdownTasks: Array<{\n    hook: LifecycleServiceShutdownHook;\n    options?: LifecycleServiceShutdownOptions;\n  }> = [];\n\n  addShutdownHook(\n    hook: LifecycleServiceShutdownHook,\n    options?: LifecycleServiceShutdownOptions,\n  ): void {\n    this.#shutdownTasks.push({ hook, options });\n  }\n\n  async shutdown(): Promise<void> {\n    if (this.#isCalled) {\n      return;\n    }\n    this.#isCalled = true;\n\n    this.logger.info(`Running ${this.#shutdownTasks.length} shutdown tasks...`);\n    await Promise.all(\n      this.#shutdownTasks.map(async ({ hook, options }) => {\n        const logger = options?.logger ?? this.logger;\n        try {\n          await hook();\n          logger.info(`Shutdown hook succeeded`);\n        } catch (error) {\n          logger.error(`Shutdown hook failed, ${error}`);\n        }\n      }),\n    );\n  }\n}\n\nconst backend = createBackend({\n  services: [\n    createServiceFactory({\n      service: coreServices.rootLifecycle,\n      deps: {\n        logger: coreServices.rootLogger,\n      },\n      async factory({ logger }) {\n        return new MyCustomLifecycleService(logger);\n      },\n    }),\n  ],\n});\n")),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"This service allows your plugins to ask ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/permissions/overview"},"the permissions framework")," for authorization of user actions."),(0,r.kt)("h3",{id:"using-the-service-9"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get the permissions service in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend to check to see if the user is allowed to perform a certain action with a custom permission rule."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { Router } from 'express';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        permissions: coreServices.permissions,\n        http: coreServices.httpRouter,\n      },\n      async init({ permissions, http }) {\n        const router = Router();\n        router.get('/test-me', (request, response) => {\n          // use the identity service to pull out the token from request headers\n          const { token } = await identity.getIdentity({\n            request,\n          });\n\n          // ask the permissions framework what the decision is for the permission\n          const permissionResponse = await permissions.authorize(\n            [\n              {\n                permission: myCustomPermission,\n              },\n            ],\n            { token },\n          );\n        });\n\n        http.use(router);\n      },\n    });\n  },\n});\n")),(0,r.kt)("h2",{id:"scheduler"},"Scheduler"),(0,r.kt)("p",null,"When writing plugins, you sometimes want to have things running on a schedule, or something similar to cron jobs that are distributed through instances that your backend plugin is running on. We supply a task scheduler for this purpose that is scoped per plugin so that you can create these tasks and orchestrate their execution."),(0,r.kt)("h3",{id:"using-the-service-10"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get the scheduler service in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend to issue a scheduled task that runs across your instances at a given interval."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { fetch } from 'node-fetch';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        scheduler: coreServices.scheduler,\n      },\n      async init({ scheduler }) {\n        await scheduler.scheduleTask({\n          frequency: { minutes: 10 },\n          timeout: { seconds: 30 },\n          id: 'ping-google',\n          fn: async () => {\n            await fetch('http://google.com/ping');\n          },\n        });\n      },\n    });\n  },\n});\n")),(0,r.kt)("h2",{id:"url-readers"},"URL Readers"),(0,r.kt)("p",null,"Plugins will require communication with certain integrations that users have configured. Popular integrations are things like Version Control Systems (VSC), such as GitHub, BitBucket GitLab etc. These integrations are configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"integrations")," section of the ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," file."),(0,r.kt)("p",null,"These URL readers are basically wrappers with authentication for files and folders that could be stored in these VCS repositories."),(0,r.kt)("h3",{id:"using-the-service-11"},"Using the service"),(0,r.kt)("p",null,"The following example shows how to get the URL Reader service in your ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," backend plugin to read a file and a directory from a GitHub repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport os from 'os';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        urlReader: coreServices.urlReader,\n      },\n      async init({ urlReader }) {\n        const buffer = await urlReader\n          .read('https://github.com/backstage/backstage/blob/master/README.md')\n          .then(r => r.buffer());\n\n        const tmpDir = os.tmpdir();\n        const directory = await urlReader\n          .readTree(\n            'https://github.com/backstage/backstage/tree/master/packages/backend',\n          )\n          .then(tree => tree.dir({ targetDir: tmpDir }));\n      },\n    });\n  },\n});\n")))}g.isMDXComponent=!0},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var a,s,l=i(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))t.call(a,u)&&(l[u]=a[u]);if(n){s=n(a);for(var p=0;p<s.length;p++)r.call(a,s[p])&&(l[s[p]]=a[s[p]])}}return l}},541535:(e,n,t)=>{var r=t(862525),i=60103,o=60106;var a=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function v(e,n,t){this.props=e,this.context=n,this.refs=f,this.updater=t||h}function m(){}function k(e,n,t){this.props=e,this.context=n,this.refs=f,this.updater=t||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var y=k.prototype=new m;y.constructor=k,r(y,v.prototype),y.isPureReactComponent=!0;var b={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,t){var r,o={},a=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)w.call(n,r)&&!N.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:b.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function T(e,n,t,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return a=a(l=e),e=""===r?"."+O(l,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),T(a,n,t,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),n.push(a)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+O(s=e[c],c);l+=T(s,n,t,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=T(s=s.value,n,t,u=r+O(s,c++),a);else if("object"===s)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return l}function x(e,n,t){if(null==e)return e;var r=[],i=0;return T(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function j(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function I(){var e=R.current;if(null===e)throw Error(g(321));return e}},827378:(e,n,t)=>{t(541535)}}]);