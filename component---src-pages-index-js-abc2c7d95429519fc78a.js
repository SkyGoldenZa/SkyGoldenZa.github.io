(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{6162:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var n,i=r(a(6115)),o=r(a(7867)),l=r(a(7071)),s=r(a(434)),c=r(a(7294)),d=r(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),a=p(t);return h[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var P=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+c+o+l+a+r+t+i+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=c.default.createElement(L,(0,s.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?c.default.createElement("picture",null,n(r),l):l})),L=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,f=e.loading,m=e.draggable,p=e.ariaHidden,g=(0,l.default)(e,u);return c.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:r,src:n},g,{onLoad:o,onError:d,ref:t,loading:f,draggable:m,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=P(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,u=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,E=e.Tag,v=e.itemProp,w=e.loading,O=e.draggable,N=p||h;if(!N)return null;var P=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,s.default)({opacity:P?1:0,transition:R?"opacity "+y+"ms":"none"},l),C="boolean"==typeof b?"lightgray":b,z={transitionDelay:y+"ms"},T=(0,s.default)({opacity:this.state.imgLoaded?0:1},R&&z,l,u),V={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:v},H=this.state.isHydrated?g(N):N[0];if(p)return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&z)}),H.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:N,generateSources:j}),H.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:N,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,S(N),c.default.createElement(L,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,s.default)({alt:a,title:t,loading:w},H,{imageVariants:N}))}}));if(h){var W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete W.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},C&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},R&&z)}),H.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:N,generateSources:j}),H.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:N,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,S(N),c.default.createElement(L,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,s.default)({alt:a,title:t,loading:w},H,{imageVariants:N}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function z(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}R.propTypes={resolutions:I,sizes:C,fixed:z(d.default.oneOfType([I,d.default.arrayOf(I)])),fluid:z(d.default.oneOfType([C,d.default.arrayOf(C)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var T=R;t.Z=T},6364:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return q}});var r=a(7294),n=a(5414),i=a(2982),o=a(1082),l=a(3639),s=r.createContext(),c=s.Provider,d=(s.Consumer,s),u=function(){var e=(0,r.useContext)(d).hero,t=e.title,a=e.name,n=e.subtitle,i=e.cta,s=(0,r.useState)(!1),c=(s[0],s[1]),u=(0,r.useState)(!1),f=(u[0],u[1]);return(0,r.useEffect)((function(){window.innerWidth>769?(c(!0),f(!1)):(f(!0),c(!1))}),[]),r.createElement("section",{id:"hero",className:"jumbotron"},r.createElement(l.Z,null,r.createElement("h1",{className:"hero-title"},t||"Hi, my name is"," ",r.createElement("span",{className:"text-color-main"},a||"Your Name"),r.createElement("br",null),n||"I'm the Unknown Developer."),r.createElement("p",{className:"hero-cta"},r.createElement("span",{className:"cta-btn cta-btn--hero"},r.createElement(o.Link,{to:"#about"},i||"Know more")))))},f=a(4942),m=a(4925),p=a(5900),g=a.n(p),h=a(9541),b=a(5893),y=["bsPrefix","className","as"];function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){(0,f.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.as,i=void 0===n?"div":n,o=(0,m.Z)(e,y),l=(0,h.vE)(a,"row"),s=(0,h.pi)(),c=(0,h.zG)(),d="".concat(l,"-cols"),u=[];return s.forEach((function(e){var t,a=o[e];delete o[e],t=null!=a&&"object"==typeof a?a.cols:a;var r=e!==c?"-".concat(e):"";null!=t&&u.push("".concat(d).concat(r,"-").concat(t))})),(0,b.jsx)(i,v(v({ref:t},o),{},{className:g().apply(void 0,[r,l].concat(u))}))}));w.displayName="Row";var S=w;var O=a(181);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,i=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(s){l=!0,n=s}finally{try{o||null==a.return||a.return()}finally{if(l)throw n}}return i}}(e,t)||(0,O.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=["as","bsPrefix","className"],N=["className"];function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){(0,f.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=r.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,r=e.className,n=(0,m.Z)(e,j);a=(0,h.vE)(a,"col");var i=(0,h.pi)(),o=(0,h.zG)(),l=[],s=[];return i.forEach((function(e){var t,r,i,c=n[e];delete n[e],"object"==typeof c&&null!=c?(t=c.span,r=c.offset,i=c.order):t=c;var d=e!==o?"-".concat(e):"";t&&l.push(!0===t?"".concat(a).concat(d):"".concat(a).concat(d,"-").concat(t)),null!=i&&s.push("order".concat(d,"-").concat(i)),null!=r&&s.push("offset".concat(d,"-").concat(r))})),[_(_({},n),{},{className:g().apply(void 0,[r].concat(l,s))}),{as:t,bsPrefix:a,spans:l}]}(e),r=x(a,2),n=r[0],i=n.className,o=(0,m.Z)(n,N),l=r[1],s=l.as,c=void 0===s?"div":s,d=l.bsPrefix,u=l.spans;return(0,b.jsx)(c,_(_({},o),{},{ref:t,className:g()(i,!u.length&&d)}))}));k.displayName="Col";var L=k,R=function(e){var t=e.title;return r.createElement("h2",{className:"section-title"},t)},I=a(6162),C=function(e){var t=e.filename,a=e.alt;return r.createElement(o.StaticQuery,{query:"2271970031",render:function(e){var n=e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));if(!n)return null;var i=n.node.childImageSharp.fixed;return console.log("imageFixed",i),r.createElement(I.Z,{className:"rounded shadow-lg",alt:a,fixed:i})}})},z=function(){var e=(0,r.useContext)(d).about,t=e.img,a=e.paragraphOne,n=e.paragraphTwo,i=e.paragraphThree,s=e.paragraphFour,c=e.resume,u=(0,r.useState)(!1),f=(u[0],u[1]),m=(0,r.useState)(!1),p=(m[0],m[1]);return(0,r.useEffect)((function(){window.innerWidth>769?(f(!0),p(!1)):(p(!0),f(!1))}),[]),r.createElement("section",{id:"about"},r.createElement(l.Z,null,r.createElement(R,{title:"About Me"}),r.createElement(S,{className:"about-wrapper"},r.createElement(L,{md:6,sm:12},r.createElement("div",{className:"about-wrapper__image"},r.createElement(C,{alt:"profile picture",filename:t}))),r.createElement(L,{md:6,sm:12},r.createElement("div",{className:"about-wrapper__info"},r.createElement("p",{className:"about-wrapper__info-text"},a||""),r.createElement("p",{className:"about-wrapper__info-text"},n||""),r.createElement("p",{className:"about-wrapper__info-text"},i||""),r.createElement("p",{className:"about-wrapper__info-text"},s||""),c&&r.createElement("span",{className:"d-flex mt-3"},r.createElement(o.Link,{className:"cta-btn cta-btn--resume",to:"contact"},"Contact")))))))},T=function(e){var t=e.filename,a=e.alt;return r.createElement(o.StaticQuery,{query:"1807217303",render:function(e){var n=e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));if(!n)return null;var i=n.node.childImageSharp.fluid;return r.createElement(I.Z,{alt:a,fluid:i})}})},V=function(){var e=(0,r.useContext)(d).projects,t=(0,r.useState)(!1),a=(t[0],t[1]),n=(0,r.useState)(!1),i=(n[0],n[1]);return(0,r.useEffect)((function(){window.innerWidth>769?(a(!0),i(!1)):(i(!0),a(!1))}),[]),r.createElement("section",{id:"projects"},r.createElement(l.Z,null,r.createElement("div",{className:"project-wrapper"},r.createElement(R,{title:"Projects"}),e.map((function(e){var t=e.title,a=e.info,n=e.info2,i=e.url,o=e.buttonText,l=e.repo,s=e.img,c=e.id;return r.createElement(S,{key:c},r.createElement(L,{lg:4,sm:12},r.createElement("div",{className:"project-wrapper__text"},r.createElement("h3",{className:"project-wrapper__text-title"},t||"Project Title"),r.createElement("div",null,r.createElement("p",null,a||""),r.createElement("p",{className:"mb-4"},n||"")),r.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:i||"#!"},o),l&&r.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:l},"Source Code"))),r.createElement(L,{lg:8,sm:12},r.createElement("div",{className:"project-wrapper__image"},r.createElement("a",{href:i||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},r.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},r.createElement(T,{alt:t,filename:s}))))))})))))},H=function(){var e=(0,r.useContext)(d).contact,t=e.cta,a=e.btn,n=e.email;return r.createElement("section",{id:"contact"},r.createElement(l.Z,null,r.createElement(R,{title:"Contact"}),r.createElement("div",{className:"contact-wrapper"},r.createElement("p",{className:"contact-wrapper__text"},t||"Would you like to work with me? Awesome!"),r.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:n?"mailto:"+n:"https://github.com/cobidev/react-simplefolio"},a||"Let's Talk"))))},W=function(){var e=(0,r.useContext)(d).footer.networks;return r.createElement("footer",{className:"footer navbar-static-bottom"},r.createElement(l.Z,null,r.createElement("span",{className:"back-to-top"},r.createElement(o.Link,{to:"hero"},r.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"}))),r.createElement("div",{className:"social-links"},e&&e.map((function(e){var t=e.id,a=e.name,n=e.url;return r.createElement("a",{key:t,href:n||"https://github.com/cobidev/gatsby-simplefolio",rel:"noopener noreferrer",target:"_blank","aria-label":a},r.createElement("i",{className:"fa fa-"+(a||"refresh")+" fa-inverse"}))})))))},Z=a(1062);var M=function(){var e=(0,r.useState)({}),t=e[0],a=e[1],n=(0,r.useState)({}),o=n[0],l=n[1],s=(0,r.useState)([]),d=s[0],f=s[1],m=(0,r.useState)({}),p=m[0],g=m[1],h=(0,r.useState)({}),b=h[0],y=h[1];return(0,r.useEffect)((function(){a(Object.assign({},Z.oM)),l(Object.assign({},Z.QL)),f((0,i.Z)(Z.nD)),g(Object.assign({},Z.Yf)),y(Object.assign({},Z.a5))}),[]),r.createElement(c,{value:{hero:t,about:o,projects:d,contact:p,footer:b}},r.createElement(u,null),r.createElement(z,null),r.createElement(V,null),r.createElement(H,null),r.createElement(W,null))},q=function(){var e=Z.Al.title,t=Z.Al.lang,a=Z.Al.description;return console.log("description",a),r.createElement(r.Fragment,null,r.createElement(n.q,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("title",null,e||""),r.createElement("html",{lang:t||"en"}),r.createElement("meta",{name:"description",content:a||""}),r.createElement("meta",{property:"og:title",content:e}),r.createElement("meta",{property:"og:image",content:"/images/my-photo.jpg"}),r.createElement("meta",{property:"og:description",content:a}),r.createElement("meta",{property:"og:url",content:"https://skygoldenza.github.io/"}),r.createElement("meta",{property:"og:site_name",content:e}),r.createElement("meta",{name:"twitter:title",content:"Homepage | WARPAINT Media"}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:description",content:a||""}),r.createElement("meta",{name:"twitter:site",content:"Portfolio: Sky Golden"}),r.createElement("meta",{name:"twitter:creator",content:"Sky Golden"}),r.createElement("meta",{name:"twitter:image:src",content:"/images/my-photo.jpg"})),r.createElement(M,null))}},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-abc2c7d95429519fc78a.js.map