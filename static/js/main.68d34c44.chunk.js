(this.webpackJsonpshop_app=this.webpackJsonpshop_app||[]).push([[0],{22:function(e,t,a){e.exports={overlay:"ShoppingBag_overlay__2kVtT",overlayVisible:"ShoppingBag_overlayVisible__4Vgls",drawer:"ShoppingBag_drawer__2jJt9",items:"ShoppingBag_items__3a8pv",greenBtn:"ShoppingBag_greenBtn__3vf0C",arrowLeft:"ShoppingBag_arrowLeft__26a8w"}},23:function(e,t,a){e.exports={card:"Card_card__2rt1H",favorite:"Card_favorite__3t0k0",button:"Card_button__1dsEV"}},56:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(16),s=a.n(n),i=(a(56),a(57),a(15)),A=a(7),o=a.n(A),f=a(13),j=a(3),l=a.p+"static/media/button-delete.73a3ab4e.jpg",d=a.p+"static/media/arrow.400f1006.png",p=a.p+"static/media/shopping-cart.dbcc0d0c.jpg",b=a.p+"static/media/order-processing.1899ee25.jpg",x=a.p+"static/media/arrow_left_circle.c3465a7a.svg",u=a(1),h=function(e){var t=e.title,a=e.description,c=e.image,n=Object(r.useContext)($).setCartOpened;return Object(u.jsxs)("div",{className:"cartEmpty d-flex align-center  flex-column flex",children:[Object(u.jsx)("img",{className:"mb-20 top",width:"170px",src:c,alt:"empty-cart"}),Object(u.jsxs)("h2",{children:[t," "]}),Object(u.jsx)("p",{className:"opacity-6",children:a}),Object(u.jsxs)("button",{onClick:function(){return n(!1)},className:"greenBtn",children:[Object(u.jsx)("img",{src:x,alt:"arrow",className:"arrowLeft"}),"Back"]})]})},v=a(22),m=a.n(v),O=a(8),w=a.n(O),P=function(){var e=Object(r.useContext)($),t=e.cartItems,a=e.setCartItems,c=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:a,totalPrice:c}},g=function(e){return new Promise((function(t){return setTimeout(t,e)}))},B=function(e){var t=e.onClose,a=e.items,c=void 0===a?[]:a,n=e.onRemove,s=e.opened,i=P(),A=i.cartItems,x=i.setCartItems,v=i.totalPrice,O=Object(r.useState)(!1),B=Object(j.a)(O,2),H=B[0],N=B[1],C=Object(r.useState)(null),F=Object(j.a)(C,2),T=F[0],R=F[1],D=Object(r.useState)(!1),X=Object(j.a)(D,2),q=X[0],Q=X[1],S=function(){var e=Object(f.a)(o.a.mark((function e(){var t,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Q(!0),e.next=4,w.a.post("https://6138c162163b56001703a0b6.mockapi.io/orders",{items:A});case 4:t=e.sent,a=t.data,R(a.id),N(!0),x([]),r=0;case 10:if(!(r<A.length)){e.next=19;break}return c=A[r],e.next=14,w.a.delete("https://6138c162163b56001703a0b6.mockapi.io/cart/"+c.id);case 14:return e.next=16,g(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("Order was not created");case 24:Q(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"".concat(m.a.overlay," ").concat(s?m.a.overlayVisible:""),children:Object(u.jsxs)("div",{className:m.a.drawer,children:[Object(u.jsxs)("h2",{className:"mb-30 d-flex justify-between",children:["Shopping Bag",Object(u.jsx)("img",{src:l,alt:"Remove",width:30,className:"removeBtn cu-p",onClick:t})]}),c.length>0?Object(u.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(u.jsx)("div",{className:"items ",children:c.map((function(e,t){return Object(u.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(u.jsx)("img",{src:e.imageUrl,alt:"sneakers",width:70,height:70,className:"mr-20"}),Object(u.jsxs)("div",{className:"mr-20 flex",children:[Object(u.jsx)("p",{className:"mb-5",children:e.title}),Object(u.jsxs)("b",{children:[e.price,"$"]})]}),Object(u.jsx)("img",{onClick:function(){return n(e.id)},src:l,alt:"Remove",width:30,className:"removeBtn"})]},t)}))}),Object(u.jsxs)("div",{className:"downBlock",children:[Object(u.jsxs)("ul",{className:"cartTotalBlock",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"Total"}),Object(u.jsx)("div",{}),Object(u.jsxs)("b",{children:[v,"$"]})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"Tax (included in the price) 5%"}),Object(u.jsx)("div",{}),Object(u.jsxs)("b",{children:[v/100*5," $"]})]})]}),Object(u.jsxs)("button",{className:"greenBtn",onClick:S,disabled:q,children:["Place an order",Object(u.jsx)("img",{src:d,alt:"arrow",width:20,className:"arrow"})]}),Object(u.jsx)("div",{})]})]}):Object(u.jsx)(h,{title:H?"Order completed":"Empty cart",description:H?"The order \u2116 ".concat(T," will be transferred by courier delivery"):"Add at least 1 pair of sneakers to order",image:H?b:p})]})})},H=a.p+"static/media/logo-sneakers.5b8a26a5.png",N=a(14),C=a(45),F=a(46),T=a(44),R=a(43),D=a(42),X=function(e){var t=e.onClickedCart,a=P().totalPrice;return Object(u.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(u.jsx)(N.b,{to:"/",children:Object(u.jsxs)("div",{className:"d-flex align-center",children:[Object(u.jsx)("img",{src:H,className:"logo",alt:"logo"}),Object(u.jsxs)("div",{className:"descriptionShop",children:[Object(u.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(u.jsx)("p",{children:"Shop Sneakers"})]})]})}),Object(u.jsx)("div",{className:"headerRight",children:Object(u.jsxs)("ul",{className:"d-flex",children:[Object(u.jsx)(N.b,{to:"/",className:"mr-30 cu-p",children:Object(u.jsx)(D.FaHome,{size:30,color:"#66a6ff"})}),Object(u.jsx)(N.b,{to:"/about",className:"mr-30 cu-p",children:Object(u.jsx)(R.FcAbout,{size:30,color:"#66a6ff"})}),Object(u.jsx)(N.b,{to:"/orders",children:Object(u.jsx)(T.SiShopify,{className:"mr-20 cu-p",size:30,color:"#66a6ff"})}),Object(u.jsx)(N.b,{to:"/favorites",children:Object(u.jsx)(C.MdFavorite,{className:"mr-20 cu-p",size:30,color:"#66a6ff"})}),Object(u.jsxs)("li",{className:"mr-20 cu-p",onClick:t,children:[Object(u.jsx)(F.AiOutlineShoppingCart,{size:30,color:"#66a6ff"}),Object(u.jsxs)("span",{className:"pb-20",children:["  ",a," $"]})]})]})})]})},q=a(5),Q=a(4),S=a.p+"static/media/gray_heart.bbada9ba.png",U=a.p+"static/media/pink_heart.10dc5fae.png",W=a.p+"static/media/checkbox-green.44b56621.jpg",k=a(23),K=a.n(k),V=a(47),L=function(e){var t=e.id,a=e.imageUrl,c=e.title,n=e.price,s=e.onFavorite,i=e.onPlus,A=e.selected,o=void 0!==A&&A,f=e.loading,l=void 0!==f&&f,d=Object(r.useState)(o),p=Object(j.a)(d,2),b=p[0],x=p[1],h={id:t,parentId:t,title:c,imageUrl:a,price:n},v=Object(r.useState)(!1),m=Object(j.a)(v,2),O=m[0],w=m[1];return Object(u.jsx)("div",{className:K.a.card,children:l?Object(u.jsxs)(V.a,{speed:2,width:150,height:250,viewBox:"0 0 150 240",backgroundColor:"#e0e0e0",foregroundColor:"#ecebeb",children:[Object(u.jsx)("rect",{x:"0",y:"98",rx:"0",ry:"0",width:"150",height:"16"}),Object(u.jsx)("rect",{x:"4",y:"59",rx:"2",ry:"2",width:"142",height:"26"}),Object(u.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"90"}),Object(u.jsx)("rect",{x:"-6",y:"124",rx:"0",ry:"0",width:"100",height:"23"}),Object(u.jsx)("rect",{x:"1",y:"205",rx:"0",ry:"0",width:"80",height:"24"}),Object(u.jsx)("rect",{x:"113",y:"200",rx:"8",ry:"8",width:"32",height:"32"})]}):Object(u.jsxs)(u.Fragment,{children:[s&&Object(u.jsx)("div",{className:K.a.favorite,children:Object(u.jsx)("img",{onClick:function(){s(h),x(!b)},src:b?U:S,alt:"heartUnliked",width:20})}),Object(u.jsx)("img",{src:a,alt:"sneakers",width:133,height:112}),Object(u.jsx)("h5",{children:c}),Object(u.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(u.jsxs)("div",{className:"d-flex flex-column ",children:[Object(u.jsx)("span",{children:"Price: "}),Object(u.jsxs)("b",{children:[n,"$"]})]}),i&&Object(u.jsx)("img",{className:K.a.button,src:O?W:"data:image/jpeg;base64,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",alt:"plus",onClick:function(){i(h),w(!O),alert("Added to cart")}})]})]})})},y=a(51),z=a(86),Z=a.p+"static/media/1w.2fb44775.jpg",G=a.p+"static/media/2w.4d445122.jpg",I=a.p+"static/media/3w.01d3f6aa.jpg",E=function(){return Object(u.jsxs)(z.a,{children:[Object(u.jsx)(z.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:Z,alt:"First slide"})}),Object(u.jsx)(z.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:G,alt:"Third slide"})}),Object(u.jsx)(z.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100",src:I,alt:"Third slide"})})]})},M=function(e){var t=e.items,a=e.onAddToCart,r=e.onAddToFavorite,c=e.onChangeSearchInput,n=e.searchValue,s=e.setSearchValue,A=e.isLoading;return Object(u.jsxs)("div",{children:[Object(u.jsx)(E,{}),Object(u.jsxs)("div",{className:"content p-40",children:[Object(u.jsxs)("div",{className:"d-flex align-center mb-40 justify-between",children:[Object(u.jsx)("h1",{children:n?'Search by request: "'.concat(n,'"'):"All Sneakers"}),Object(u.jsxs)("div",{className:"search-block d-flex",children:[Object(u.jsx)(y.FcSearch,{size:33}),n&&Object(u.jsx)("img",{src:l,alt:"clear",width:30,className:"removeBtn cu-p clear",onClick:function(){return s("")}}),Object(u.jsx)("input",{type:"text",placeholder:"Search...",onChange:c,value:n,onKeyPress:function(e){"Enter"===e.key&&s("")}})]})]}),Object(u.jsx)("div",{className:"d-flex flex-wrap ",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));return(A?Object(i.a)(Array(16)):e).map((function(e,t){return Object(u.jsx)(L,Object(Q.a)({onFavorite:function(e){return r(e)},onPlus:function(e){return a(e)},loading:A},e),t)}))}()})]})]})},Y=function(){var e=Object(r.useContext)($),t=e.favorites,a=e.onAddToFavorite;return Object(u.jsxs)("div",{className:"content p-40",children:[Object(u.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(u.jsx)("h1",{children:"My bookmarks"})}),Object(u.jsx)("div",{className:"d-flex flex-wrap ",children:t.map((function(e,t){return Object(u.jsx)(L,Object(Q.a)({selected:!0,onFavorite:a},e),t)}))})]})},J=function(){var e=Object(r.useContext)($),t=(e.onAddToFavorite,e.onAddToCart,Object(r.useState)([])),a=Object(j.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(!0),A=Object(j.a)(s,2),l=A[0],d=A[1];return Object(r.useEffect)((function(){function e(){return(e=Object(f.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,w.a.get("https://6138c162163b56001703a0b6.mockapi.io/orders");case 4:t=e.sent,a=t.data,n(a.reduce((function(e,t){return[].concat(Object(i.a)(e),Object(i.a)(t.items))}),[])),d(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Sorry, ERROR");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsxs)("div",{className:"content p-40",children:[Object(u.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(u.jsx)("h1",{children:"History of popular products"})}),Object(u.jsx)("div",{className:"d-flex flex-wrap ",children:(l?Object(i.a)(Array(16)):c).map((function(e,t){return Object(u.jsx)(L,Object(Q.a)({isLoading:l},e),t)}))})]})},_=function(){return Object(u.jsxs)("div",{className:"content p-40",children:[Object(u.jsx)("h1",{children:"REACT Sneakers"}),Object(u.jsx)("span",{children:"ver.1.0.42"}),Object(u.jsx)("h2",{children:"This application is made using technologies such as:"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Hooks: useState, useEffect, useContext. Custom hook"}),Object(u.jsx)("li",{children:"React router. Page navigation. BrowserRouter, Route."}),Object(u.jsx)("li",{children:"Search. Filtration."}),Object(u.jsx)("li",{children:"Working with the server. Axios. Indication of loading data from the server."}),Object(u.jsx)("li",{children:'Using "Mock API" as BackEnd'}),Object(u.jsx)("li",{children:"Loader component.React Skeleton."}),Object(u.jsx)("li",{children:"SCSS. CSS Animations.Library React icons."}),Object(u.jsx)("li",{children:"React Bootstrap. Slider."})]})]})},$=Object(r.createContext)({});var ee=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)([]),s=Object(j.a)(n,2),A=s[0],l=s[1],d=Object(r.useState)([]),p=Object(j.a)(d,2),b=p[0],x=p[1],h=Object(r.useState)(""),v=Object(j.a)(h,2),m=v[0],O=v[1],P=Object(r.useState)([]),g=Object(j.a)(P,2),H=g[0],N=g[1],C=Object(r.useState)(!0),F=Object(j.a)(C,2),T=F[0],R=F[1];Object(r.useEffect)((function(){function e(){return(e=Object(f.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.prev=1,e.next=4,w.a.get("https://6138c162163b56001703a0b6.mockapi.io/cart");case 4:return t=e.sent,e.next=7,w.a.get("https://6138c162163b56001703a0b6.mockapi.io/favorites");case 7:return a=e.sent,e.next=10,w.a.get("https://6138c162163b56001703a0b6.mockapi.io/items");case 10:r=e.sent,R(!1),x(t.data),N(a.data),l(r.data),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert("ERROR");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(){var e=Object(f.a)(o.a.mark((function e(t){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=b.find((function(e){return+e.parentId===+t.id})))){e.next=8;break}return e.next=5,w.a.delete("https://6138c162163b56001703a0b6.mockapi.io/cart/".concat(a.id));case 5:x((function(e){return e.filter((function(e){return+e.parentId!==+t.id}))})),e.next=13;break;case 8:return e.next=10,w.a.post("https://6138c162163b56001703a0b6.mockapi.io/cart",t);case 10:r=e.sent,c=r.data,x((function(e){return[].concat(Object(i.a)(e),[c])}));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert("error");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.delete("https://6138c162163b56001703a0b6.mockapi.io/cart/".concat(t));case 3:x((function(e){return e.filter((function(e){return+e.id!==+t}))})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!H.find((function(e){return+e.id===+t.id}))){e.next=7;break}return e.next=4,w.a.delete("https://6138c162163b56001703a0b6.mockapi.io/favorites/".concat(t.id));case 4:N((function(e){return e.filter((function(e){return+e.id!==+t.id}))})),e.next=12;break;case 7:return e.next=9,w.a.post("https://6138c162163b56001703a0b6.mockapi.io/favorites",t);case 9:a=e.sent,r=a.data,N((function(e){return[].concat(Object(i.a)(e),[r])}));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert('Failed to add to "selected"');case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)($.Provider,{value:{cartItems:b,setCartItems:x,favorites:H,items:A,isItemAdded:function(e){return b.some((function(t){return+t.parentId===+e}))},onAddToFavorite:S,setCartOpened:c,onAddToCart:D,setSearchValue:O},children:Object(u.jsxs)("div",{className:"wrapper clear",children:[Object(u.jsx)(B,{items:b,onClose:function(){return c(!1)},onRemove:Q,opened:a}),Object(u.jsx)(X,{onClickedCart:function(){return c(!0)}}),Object(u.jsx)(q.a,{path:"",exact:!0,children:Object(u.jsx)(M,{items:A,cartItems:b,searchValue:m,setSearchValue:O,onChangeSearchInput:function(e){O(e.target.value)},onAddToFavorite:S,onAddToCart:D,isLoading:T})}),Object(u.jsx)(q.a,{path:"favorites",exact:!0,children:Object(u.jsx)(Y,{})}),Object(u.jsx)(q.a,{path:"orders",exact:!0,children:Object(u.jsx)(J,{})}),Object(u.jsx)(q.a,{path:"about",exact:!0,children:Object(u.jsx)(_,{})})]})})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N.a,{children:Object(u.jsx)(ee,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.68d34c44.chunk.js.map