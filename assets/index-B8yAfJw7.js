(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))_(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&_(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function _(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();var W,u,Q,k,V,X,$,B,j,H,I={},Z=[],ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,R=Array.isArray;function w(t,e){for(var n in e)t[n]=e[n];return t}function ee(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function _e(t,e,n){var _,r,l,a={};for(l in e)l=="key"?_=e[l]:l=="ref"?r=e[l]:a[l]=e[l];if(arguments.length>2&&(a.children=arguments.length>3?W.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(l in t.defaultProps)a[l]===void 0&&(a[l]=t.defaultProps[l]);return E(t,a,_,r,null)}function E(t,e,n,_,r){var l={type:t,props:e,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Q,__i:-1,__u:0};return r==null&&u.vnode!=null&&u.vnode(l),l}function L(t){return t.children}function U(t,e){this.props=t,this.context=e}function S(t,e){if(e==null)return t.__?S(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?S(t):null}function te(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return te(t)}}function Y(t){(!t.__d&&(t.__d=!0)&&k.push(t)&&!F.__r++||V!==u.debounceRendering)&&((V=u.debounceRendering)||X)(F)}function F(){var t,e,n,_,r,l,a,c;for(k.sort($);t=k.shift();)t.__d&&(e=k.length,_=void 0,l=(r=(n=t).__v).__e,a=[],c=[],n.__P&&((_=w({},r)).__v=r.__v+1,u.vnode&&u.vnode(_),q(n.__P,_,r,n.__n,n.__P.namespaceURI,32&r.__u?[l]:null,a,l??S(r),!!(32&r.__u),c),_.__v=r.__v,_.__.__k[_.__i]=_,oe(a,_,c),_.__e!=l&&te(_)),k.length>e&&k.sort($));F.__r=0}function ne(t,e,n,_,r,l,a,c,h,s,f){var o,y,d,g,x,v=_&&_.__k||Z,p=e.length;for(n.__d=h,ae(n,e,v),h=n.__d,o=0;o<p;o++)(d=n.__k[o])!=null&&(y=d.__i===-1?I:v[d.__i]||I,d.__i=o,q(t,d,y,r,l,a,c,h,s,f),g=d.__e,d.ref&&y.ref!=d.ref&&(y.ref&&z(y.ref,null,d),f.push(d.ref,d.__c||g,d)),x==null&&g!=null&&(x=g),65536&d.__u||y.__k===d.__k?h=re(d,h,t):typeof d.type=="function"&&d.__d!==void 0?h=d.__d:g&&(h=g.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=h,n.__e=x}function ae(t,e,n){var _,r,l,a,c,h=e.length,s=n.length,f=s,o=0;for(t.__k=[],_=0;_<h;_++)(r=e[_])!=null&&typeof r!="boolean"&&typeof r!="function"?(a=_+o,(r=t.__k[_]=typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?E(null,r,null,null,null):R(r)?E(L,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?E(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r).__=t,r.__b=t.__b+1,l=null,(c=r.__i=se(r,n,a,f))!==-1&&(f--,(l=n[c])&&(l.__u|=131072)),l==null||l.__v===null?(c==-1&&o--,typeof r.type!="function"&&(r.__u|=65536)):c!==a&&(c==a-1?o--:c==a+1?o++:(c>a?o--:o++,r.__u|=65536))):r=t.__k[_]=null;if(f)for(_=0;_<s;_++)(l=n[_])!=null&&!(131072&l.__u)&&(l.__e==t.__d&&(t.__d=S(l)),le(l,l))}function re(t,e,n){var _,r;if(typeof t.type=="function"){for(_=t.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=t,e=re(_[r],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=S(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function se(t,e,n,_){var r=t.key,l=t.type,a=n-1,c=n+1,h=e[n];if(h===null||h&&r==h.key&&l===h.type&&!(131072&h.__u))return n;if(_>(h!=null&&!(131072&h.__u)?1:0))for(;a>=0||c<e.length;){if(a>=0){if((h=e[a])&&!(131072&h.__u)&&r==h.key&&l===h.type)return a;a--}if(c<e.length){if((h=e[c])&&!(131072&h.__u)&&r==h.key&&l===h.type)return c;c++}}return-1}function K(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||ie.test(e)?n:n+"px"}function D(t,e,n,_,r){var l;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)n&&e in n||K(t.style,e,"");if(n)for(e in n)_&&n[e]===_[e]||K(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")l=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+l]=n,n?_?n.u=_.u:(n.u=B,t.addEventListener(e,l?H:j,l)):t.removeEventListener(e,l?H:j,l);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function J(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=B++;else if(e.t<n.u)return;return n(u.event?u.event(e):e)}}}function q(t,e,n,_,r,l,a,c,h,s){var f,o,y,d,g,x,v,p,m,P,b,A,C,G,T,O,N=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(h=!!(32&n.__u),l=[c=e.__e=n.__e]),(f=u.__b)&&f(e);e:if(typeof N=="function")try{if(p=e.props,m="prototype"in N&&N.prototype.render,P=(f=N.contextType)&&_[f.__c],b=f?P?P.props.value:f.__:_,n.__c?v=(o=e.__c=n.__c).__=o.__E:(m?e.__c=o=new N(p,b):(e.__c=o=new U(p,b),o.constructor=N,o.render=de),P&&P.sub(o),o.props=p,o.state||(o.state={}),o.context=b,o.__n=_,y=o.__d=!0,o.__h=[],o._sb=[]),m&&o.__s==null&&(o.__s=o.state),m&&N.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=w({},o.__s)),w(o.__s,N.getDerivedStateFromProps(p,o.__s))),d=o.props,g=o.state,o.__v=e,y)m&&N.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),m&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(m&&N.getDerivedStateFromProps==null&&p!==d&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(p,b),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(p,o.__s,b)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(o.props=p,o.state=o.__s,o.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(M){M&&(M.__=e)}),A=0;A<o._sb.length;A++)o.__h.push(o._sb[A]);o._sb=[],o.__h.length&&a.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(p,o.__s,b),m&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(d,g,x)})}if(o.context=b,o.props=p,o.__P=t,o.__e=!1,C=u.__r,G=0,m){for(o.state=o.__s,o.__d=!1,C&&C(e),f=o.render(o.props,o.state,o.context),T=0;T<o._sb.length;T++)o.__h.push(o._sb[T]);o._sb=[]}else do o.__d=!1,C&&C(e),f=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++G<25);o.state=o.__s,o.getChildContext!=null&&(_=w(w({},_),o.getChildContext())),m&&!y&&o.getSnapshotBeforeUpdate!=null&&(x=o.getSnapshotBeforeUpdate(d,g)),ne(t,R(O=f!=null&&f.type===L&&f.key==null?f.props.children:f)?O:[O],e,n,_,r,l,a,c,h,s),o.base=e.__e,e.__u&=-161,o.__h.length&&a.push(o),v&&(o.__E=o.__=null)}catch(M){if(e.__v=null,h||l!=null){for(e.__u|=h?160:128;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;l[l.indexOf(c)]=null,e.__e=c}else e.__e=n.__e,e.__k=n.__k;u.__e(M,e,n)}else l==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ce(n.__e,e,n,_,r,l,a,h,s);(f=u.diffed)&&f(e)}function oe(t,e,n){e.__d=void 0;for(var _=0;_<n.length;_++)z(n[_],n[++_],n[++_]);u.__c&&u.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(l){l.call(r)})}catch(l){u.__e(l,r.__v)}})}function ce(t,e,n,_,r,l,a,c,h){var s,f,o,y,d,g,x,v=n.props,p=e.props,m=e.type;if(m==="svg"?r="http://www.w3.org/2000/svg":m==="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),l!=null){for(s=0;s<l.length;s++)if((d=l[s])&&"setAttribute"in d==!!m&&(m?d.localName===m:d.nodeType===3)){t=d,l[s]=null;break}}if(t==null){if(m===null)return document.createTextNode(p);t=document.createElementNS(r,m,p.is&&p),c&&(u.__m&&u.__m(e,l),c=!1),l=null}if(m===null)v===p||c&&t.data===p||(t.data=p);else{if(l=l&&W.call(t.childNodes),v=n.props||I,!c&&l!=null)for(v={},s=0;s<t.attributes.length;s++)v[(d=t.attributes[s]).name]=d.value;for(s in v)if(d=v[s],s!="children"){if(s=="dangerouslySetInnerHTML")o=d;else if(!(s in p)){if(s=="value"&&"defaultValue"in p||s=="checked"&&"defaultChecked"in p)continue;D(t,s,null,d,r)}}for(s in p)d=p[s],s=="children"?y=d:s=="dangerouslySetInnerHTML"?f=d:s=="value"?g=d:s=="checked"?x=d:c&&typeof d!="function"||v[s]===d||D(t,s,d,v[s],r);if(f)c||o&&(f.__html===o.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(o&&(t.innerHTML=""),ne(t,R(y)?y:[y],e,n,_,m==="foreignObject"?"http://www.w3.org/1999/xhtml":r,l,a,l?l[0]:n.__k&&S(n,0),c,h),l!=null)for(s=l.length;s--;)ee(l[s]);c||(s="value",m==="progress"&&g==null?t.removeAttribute("value"):g!==void 0&&(g!==t[s]||m==="progress"&&!g||m==="option"&&g!==v[s])&&D(t,s,g,v[s],r),s="checked",x!==void 0&&x!==t[s]&&D(t,s,x,v[s],r))}return t}function z(t,e,n){try{if(typeof t=="function"){var _=typeof t.__u=="function";_&&t.__u(),_&&e==null||(t.__u=t(e))}else t.current=e}catch(r){u.__e(r,n)}}function le(t,e,n){var _,r;if(u.unmount&&u.unmount(t),(_=t.ref)&&(_.current&&_.current!==t.__e||z(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(l){u.__e(l,e)}_.base=_.__P=null}if(_=t.__k)for(r=0;r<_.length;r++)_[r]&&le(_[r],e,n||typeof t.type!="function");n||ee(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function de(t,e,n){return this.constructor(t,n)}function he(t,e,n){var _,r,l,a;u.__&&u.__(t,e),r=(_=typeof n=="function")?null:e.__k,l=[],a=[],q(e,t=(!_&&n||e).__k=_e(L,null,[t]),r||I,I,e.namespaceURI,!_&&n?[n]:r?null:e.firstChild?W.call(e.childNodes):null,l,!_&&n?n:r?r.__e:e.firstChild,_,a),oe(l,t,a)}W=Z.slice,u={__e:function(t,e,n,_){for(var r,l,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((l=r.constructor)&&l.getDerivedStateFromError!=null&&(r.setState(l.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,_||{}),a=r.__d),a)return r.__E=r}catch(c){t=c}throw t}},Q=0,U.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof t=="function"&&(t=t(w({},n),this.props)),t&&w(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Y(this))},U.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Y(this))},U.prototype.render=L,k=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$=function(t,e){return t.__v.__b-e.__v.__b},F.__r=0,B=0,j=J(!1),H=J(!0);var fe=0;function i(t,e,n,_,r,l){e||(e={});var a,c,h=e;"ref"in e&&(a=e.ref,delete e.ref);var s={type:t,props:h,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--fe,__i:-1,__u:0,__source:r,__self:l};if(typeof t=="function"&&(a=t.defaultProps))for(c in a)h[c]===void 0&&(h[c]=a[c]);return u.vnode&&u.vnode(s),s}const ue="/adakrei.svg";function pe(){const t=new Date().getFullYear();return i(L,{children:[i("header",{className:"bg-gray-900 text-white",children:i("div",{className:"container mx-auto flex justify-between items-center py-4 px-6",children:[i("div",{className:"flex items-center text-lg font-bold",children:[i("img",{src:ue,className:"logo",alt:"Adakrei logo"}),i("span",{className:"pl-2",children:"Adakrei"})]}),i("nav",{className:"space-x-4 hidden",children:[i("a",{href:"#",className:"hover:text-orange-500",children:"Products"}),i("a",{href:"#",className:"hover:text-orange-500",children:"Solutions"}),i("a",{href:"#",className:"hover:text-orange-500",children:"News"}),i("a",{href:"#",className:"hover:text-orange-500",children:"Events"}),i("a",{href:"#",className:"hover:text-orange-500",children:"Blog"}),i("a",{href:"#",className:"hover:text-orange-500",children:"Contact"})]})]})}),i("section",{className:"relative bg-gray-800 text-white",children:[i("img",{src:"https://placehold.co/1920x600",alt:"Hero Image",className:"w-full h-96 object-cover opacity-50"}),i("div",{className:"absolute inset-0 flex flex-col justify-center items-center",children:[i("h1",{className:"text-4xl font-bold",children:"Adakrei. We change everything."}),i("p",{className:"mt-4",children:"Stunning technology that moves the world."}),i("button",{className:"mt-6 bg-orange-500 text-white py-2 px-4 rounded",children:"Learn More"})]})]}),i("section",{className:"bg-gray-700 text-white py-4",children:i("div",{className:"container mx-auto flex justify-around",children:[i("a",{href:"#",className:"hover:text-orange-500",children:"Products"}),i("a",{href:"#",className:"hover:text-orange-500",children:"Solutions"}),i("a",{href:"#",className:"hover:text-orange-500",children:"News"}),i("a",{href:"#",className:"hover:text-orange-500",children:"Events"}),i("a",{href:"#",className:"hover:text-orange-500 hidden",children:"Blog"}),i("a",{href:"#",className:"hover:text-orange-500 hidden",children:"Contact"})]})}),i("section",{className:"bg-orange-500 text-white py-12 hidden",children:i("div",{className:"container mx-auto text-center",children:[i("h2",{className:"text-3xl font-bold",children:"Welcome to Adakrei"}),i("p",{className:"mt-4"})]})}),i("section",{className:"bg-gray-100 py-12",children:i("div",{className:"container mx-auto",children:[i("h2",{className:"text-2xl font-bold text-center",children:"Where innovation begins"}),i("p",{className:"text-center mt-2",children:"Discover the latest in technology and innovation from Adakrei."}),i("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[i("div",{className:"bg-white p-4 rounded shadow",children:[i("img",{src:"https://placehold.co/400x300",alt:"Innovation Image",className:"w-full h-48 object-cover rounded"}),i("h3",{className:"mt-4 text-lg font-bold",children:"AI Technology"}),i("p",{className:"mt-2",children:"Leading the way in AI technology and innovation."})]}),i("div",{className:"bg-white p-4 rounded shadow",children:[i("img",{src:"https://placehold.co/400x300",alt:"Innovation Image",className:"w-full h-48 object-cover rounded"}),i("h3",{className:"mt-4 text-lg font-bold",children:"5G Connectivity"}),i("p",{className:"mt-2",children:"Pioneering the future of connectivity with 5G technology."})]}),i("div",{className:"bg-white p-4 rounded shadow",children:[i("img",{src:"https://placehold.co/400x300",alt:"Innovation Image",className:"w-full h-48 object-cover rounded"}),i("h3",{className:"mt-4 text-lg font-bold",children:"Smart Home"}),i("p",{className:"mt-2",children:"Innovative solutions for a smarter home."})]})]})]})}),i("footer",{className:"bg-gray-900 text-white py-12",children:[i("div",{className:"container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8",children:[i("div",{children:[i("h3",{className:"text-lg font-bold",children:"About Us"}),i("ul",{className:"mt-4 space-y-2",children:[i("li",{children:i("a",{href:"#",className:"hover:text-orange-500",children:"Company"})}),i("li",{children:i("a",{href:"#",className:"hover:text-orange-500",children:"Careers"})}),i("li",{children:i("a",{href:"#",className:"hover:text-orange-500",children:"Contact"})})]})]}),i("div",{children:[i("h3",{className:"text-lg font-bold",children:"Technology"}),i("ul",{className:"mt-4 space-y-2",children:[i("li",{children:i("a",{href:"#",className:"hover:text-orange-500",children:"Products"})}),i("li",{children:i("a",{href:"#",className:"hover:text-orange-500",children:"Solutions"})}),i("li",{children:i("a",{href:"#",className:"hover:text-orange-500",children:"News"})})]})]}),i("div",{children:[i("h3",{className:"text-lg font-bold",children:"Connect"}),i("ul",{className:"mt-4 space-y-2",children:[i("li",{children:i("a",{href:"#",className:"hover:text-orange-500",children:"Blog"})}),i("li",{children:i("a",{href:"#",className:"hover:text-orange-500",children:"Events"})}),i("li",{children:i("a",{href:"#",className:"hover:text-orange-500",children:"Contact"})})]})]})]}),i("div",{className:"container mx-auto text-center mt-8 hidden",children:[i("p",{children:"Subscribe to our newsletter"}),i("form",{className:"mt-4",children:[i("input",{type:"email",placeholder:"Enter your email",className:"p-2 rounded-l bg-gray-800 text-white"}),i("button",{className:"bg-orange-500 text-white py-2 px-4 rounded-r",children:"Subscribe"})]})]}),i("div",{className:"container mx-auto text-center mt-8",children:[i("p",{children:["© ",t," Adakrei. All rights reserved."]}),i("div",{className:"mt-4 space-x-4",children:[i("a",{href:"#",className:"hover:text-orange-500",children:i("i",{className:"fab fa-facebook-f"})}),i("a",{href:"#",className:"hover:text-orange-500",children:i("i",{className:"fab fa-twitter"})}),i("a",{href:"#",className:"hover:text-orange-500",children:i("i",{className:"fab fa-linkedin-in"})}),i("a",{href:"#",className:"hover:text-orange-500",children:i("i",{className:"fab fa-instagram"})}),i("a",{href:"#",className:"hover:text-orange-500",children:i("i",{className:"fab fa-youtube"})})]})]})]})]})}he(i(pe,{}),document.getElementById("app"));