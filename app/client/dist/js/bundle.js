!function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};n.m=e,n.c=r,n.i=function(e){return e},n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=5)}([function(e,n){e.exports=GraphQLTag},function(e,n){e.exports=ReactApollo},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.config=n.query=void 0;var t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\nquery ReadHistoryViewerMyVersionedObject ($id: ID!, $limit: Int!, $offset: Int!) {\n    readOneMyVersionedObject(\n      versioning: {\n        mode: LATEST\n      },\n      filter: {\n          id: {\n          eq: $id\n        }\n      }\n    ) {\n      id\n      versions (limit: $limit, offset: $offset) {\n        pageInfo {\n          totalCount\n        }\n        nodes {\n            version\n            author {\n              firstName\n              surname\n            }\n            publisher {\n              firstName\n              surname\n            }\n            published\n            liveVersion\n            latestDraftVersion\n            lastEdited\n          }\n      }\n    }\n  }\n"],["\nquery ReadHistoryViewerMyVersionedObject ($id: ID!, $limit: Int!, $offset: Int!) {\n    readOneMyVersionedObject(\n      versioning: {\n        mode: LATEST\n      },\n      filter: {\n          id: {\n          eq: $id\n        }\n      }\n    ) {\n      id\n      versions (limit: $limit, offset: $offset) {\n        pageInfo {\n          totalCount\n        }\n        nodes {\n            version\n            author {\n              firstName\n              surname\n            }\n            publisher {\n              firstName\n              surname\n            }\n            published\n            liveVersion\n            latestDraftVersion\n            lastEdited\n          }\n      }\n    }\n  }\n"]),i=r(1),s=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(s),u=(0,a.default)(o),f={options:function(e){var n=e.recordId,r=e.limit;return{variables:{limit:r,offset:((e.page||1)-1)*r,id:n}}},props:function(e){var n=e.data,r=n.error,o=n.refetch,i=n.readOneMyVersionedObject,s=n.loading,a=e.ownProps,u=a.actions,f=void 0===u?{versions:{}}:u,d=a.limit,c=a.recordId,l=i||null,p=r&&r.graphQLErrors&&r.graphQLErrors.map(function(e){return e.message});return{loading:s||!l,versions:l,graphQLErrors:p,actions:t({},f,{versions:t({},l,{goToPage:function(e){o({offset:((e||1)-1)*d,limit:d,id:c})}})})}}};n.query=u,n.config=f,n.default=(0,i.graphql)(u,f)},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.config=n.mutation=void 0;var t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\nmutation revertMyVersionedObjectToVersion($id:ID!, $toVersion:Int!) {\n  rollbackMyVersionedObject(\n    ID: $id\n    ToVersion: $toVersion\n  ) {\n    ID\n  }\n}\n"],["\nmutation revertMyVersionedObjectToVersion($id:ID!, $toVersion:Int!) {\n  rollbackMyVersionedObject(\n    ID: $id\n    ToVersion: $toVersion\n  ) {\n    ID\n  }\n}\n"]),i=r(1),s=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(s),u=(0,a.default)(o),f={props:function(e){var n=e.mutate,r=e.ownProps.actions;return{actions:t({},r,{revertToVersion:function(e,r){return n({variables:{id:e,toVersion:r}})}})}},options:{refetchQueries:["ReadHistoryViewerMyVersionedObject"]}};n.mutation=u,n.config=f,n.default=(0,i.graphql)(u,f)},function(e,n){e.exports=Injector},function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var o=r(4),i=t(o),s=r(2),a=t(s),u=r(3),f=t(u);window.document.addEventListener("DOMContentLoaded",function(){i.default.transform("myversionedobject-history",function(e){e.component("HistoryViewer.Form_ItemEditForm",a.default,"ElementHistoryViewer")}),i.default.transform("myversionedobject-history-revert",function(e){e.component("HistoryViewerToolbar.VersionedAdmin.HistoryViewer.MyVersionedObject.HistoryViewerVersionDetail",f.default,"MyVersionedObjectRevertMutation")})})}]);