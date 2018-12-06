(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){},152:function(e,t,a){},154:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(43),s=a.n(r),i=a(158),l=(a(53),a(5)),c=a(6),u=a(8),d=a(7),f=a(9),m=a(159),h=a(13),p=a(16);a(55);function y(e){return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{backgroundImage:"url(".concat(e.book.imageLinks&&e.book.imageLinks.thumbnail,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"noRepeat"}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(t){return e.changeShelf(e.book,t.target.value)},defaultValue:e.book.shelf||"none"},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.book.title),o.a.createElement("div",{className:"book-authors"},e.book.authors))}var g=function(e){return o.a.createElement("ul",{className:"books-list"},e.books.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(y,{book:t,changeShelf:e.changeShelf}))}))};a(57);var b=function(e){var t;switch(e.name){case"currentlyReading":t="Currently Reading";break;case"wantToRead":t="Want To Read";break;case"read":t="Read";break;default:t=e.name}return o.a.createElement("div",{className:"compartment"},o.a.createElement("h2",null,t),o.a.createElement(g,{books:e.books,changeShelf:e.changeShelf}))},v=a(157);a(59);var w=function(e){var t=e.shelfs;return o.a.createElement("div",{className:"book-shelf"},o.a.createElement("header",null,o.a.createElement("h1",null,"My Reads")),o.a.createElement("div",{className:"compartments"},t.filter(function(t){return e[t].length>0}).map(function(t){return o.a.createElement(b,{key:t,name:t,books:e[t],changeShelf:e.changeShelf})})),o.a.createElement("div",{className:"open-search"},o.a.createElement(v.a,{to:"/map",className:"map-btn"},"MAP"),o.a.createElement(v.a,{to:"/search",className:"add-btn"},"Add a book")))},k=a(44),E=a.n(k),S=a(31),L="https://reactnd-books-api.udacity.com",T=localStorage.token;T||(T=localStorage.token=Math.random().toString(36).substr(-8));var j={Accept:"application/json",Authorization:T},O=function(e,t){return fetch("".concat(L,"/books/").concat(e.id),{method:"PUT",headers:Object(S.a)({},j,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},I=function(e){return fetch("".concat(L,"/search"),{method:"POST",headers:Object(S.a)({},j,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},N=(a(63),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",shelfBooks:[],newBooks:[]},a.onQueryChange=function(e){var t=e.target.value,n=[],o=[];a.setState({query:t}),I(E()(t.trim())).then(function(e){e&&!e.error?(n=e.filter(function(e){for(var t in a.props.booksID)if(a.props.booksID[t].includes(e.id))return e.shelf=t,e.inShelf=!0,o.push(e),!1;return e.inShelf=!1,!0}),a.setState({shelfBooks:o,newBooks:n})):a.setState({newBooks:[],shelfBooks:[]})})},a.changeShelf=function(e,t){if(!0===e.inShelf&&"none"===t){e.inShelf=!1;var n=a.state.shelfBooks.filter(function(t){return t.id!==e.id});a.setState({shelfBooks:n,newBooks:Object(h.a)(a.state.newBooks).concat([e])})}else if(!1===e.inShelf&&"none"!==t){e.inShelf=!0;var o=a.state.newBooks.filter(function(t){return t.id!==e.id});a.setState({shelfBooks:Object(h.a)(a.state.shelfBooks).concat([e]),newBooks:o})}a.props.changeShelf(e,t)},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"search-page"},o.a.createElement("div",{className:"search-bar"},o.a.createElement(v.a,{className:"close-search",to:"/"}),o.a.createElement("input",{value:this.state.query,onChange:this.onQueryChange,placeholder:"Search by Name or Author"})),this.state.query&&o.a.createElement("div",{className:"results"},o.a.createElement(b,{name:"Found ".concat(this.state.newBooks.length," new book(s)"),books:this.state.newBooks,changeShelf:this.changeShelf}),o.a.createElement(b,{name:"Found ".concat(this.state.shelfBooks.length," book(s) from shelf"),books:this.state.shelfBooks,changeShelf:this.changeShelf})))}}]),t}(n.Component)),C=(a(65),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={currentlyReading:[],wantToRead:[],read:[]},a.validShelfs=["currentlyReading","wantToRead","read"],a.changeShelf=function(e,t){if(e.shelf){var n=a.state[e.shelf].filter(function(t){return t.id!==e.id});a.setState(Object(p.a)({},e.shelf,n))}if("none"!==t){e.shelf=t;var o=Object(h.a)(a.state[t]).concat([e]);a.setState(Object(p.a)({},t,o))}O(e,t)},a.getBookIDs=function(){var e={};return a.validShelfs.forEach(function(t){e[t]=a.state[t].map(function(e){return e.id})}),e},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(L,"/books"),{headers:j}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){var a={currentlyReading:[],wantToRead:[],read:[]};for(var n in t.forEach(function(e){a[e.shelf].push(e)}),a)e.setState(Object(p.a)({},n,a[n]))})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(w,Object.assign({},t,{currentlyReading:e.state.currentlyReading,wantToRead:e.state.wantToRead,read:e.state.read,shelfs:e.validShelfs,changeShelf:e.changeShelf}))}}),o.a.createElement(m.a,{exact:!0,path:"/search",render:function(t){return o.a.createElement(N,Object.assign({},t,{changeShelf:e.changeShelf,bookIDs:e.getBookIDs()}))}}))}}]),t}(n.Component)),R=(a(68),a(32)),B=a.n(R),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).updateQuery=function(e){var t=e.target.value.trimLeft().toLowerCase();a.setState({query:t}),a.props.onFilterLibraries(t)},a.toggleShowList=function(){a.setState(function(e){return{showList:!e.showList}})},a.handleItemClick=function(e){window.innerWidth<600&&a.toggleShowList(),a.props.onSelectLibrary(e.id)},a.state={showList:!0,query:""},a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showList?"full-height":"min-height",a=this.state.showList?"show":"hide";return o.a.createElement("aside",{className:t},o.a.createElement("div",{className:a+" container"},o.a.createElement("input",{"aria-label":"filter libraries",role:"search",autoFocus:!0,placeholder:"Filter",value:this.state.query,onChange:this.updateQuery}),o.a.createElement("ul",{role:"listbox","aria-label":"libraries","aria-activedescendant":"0",tabIndex:"0"},this.props.libraries.map(function(t,a){return o.a.createElement("li",{key:t.id},o.a.createElement("span",{id:a,role:"listitem",tabIndex:"0",className:t.id===e.props.selectedID?"highlight":"none",onClick:function(){return e.handleItemClick(t)},onKeyPress:function(){return e.handleItemClick(t)}},t.name))}))),o.a.createElement("button",{className:"toggle",onClick:this.toggleShowList,"aria-label":"menu"},this.state.showList?o.a.createElement(B.a,{className:"icon"},"arrow_drop_down"):o.a.createElement(B.a,{className:"icon"},"arrow_drop_up")))}}]),t}(n.Component),M=(a(146),function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).displayInfo=function(){var e=a.props.library,t='\n    <div class="info-window"\n      <h1 id="name">\n        <Strong>'.concat(e.name,"</strong>\n      </h1>\n      ").concat(e.photos?'<img src="'.concat(e.photos[0].getUrl(),'" alt="restaurant ').concat(e.name,"'s image\">"):"","\n      <span>\n        Rating: ").concat(e.rating," / 5\n      </span>\n      <span>\n        Open now: <Strong>").concat(e.opening_hours?e.opening_hours.open_now:"N/A","</strong>\n      </span>\n      <span>\n        <small>").concat(e.formatted_address.slice(0,50)+"...","</small>\n      </span>\n      <span>\n        <small>Google Places</small>\n      </span>\n    </div>\n    ");a.marker.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout(function(){return a.marker.setAnimation(null)},1e3),a.props.onShowInfoWindow(a.marker,e,t)};var n=e.library,o=e.map,r=e.selectedID,s={lat:parseFloat(n.geometry.location.lat()),lng:parseFloat(n.geometry.location.lng())},i=new window.google.maps.Marker({position:s,map:o});return i.addListener("click",a.displayInfo),a.marker=i,r===n.id&&a.displayInfo(),a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.selectedID===this.props.library.id&&e.selectedID!==this.props.selectedID&&this.displayInfo(),!1}},{key:"componentWillUnmount",value:function(){this.marker.setMap(null)}},{key:"render",value:function(){return!1}}]),t}(n.Component)),x=(a(148),a(47)),W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).showInfoWindow=function(e,t,n){a.infoWindow.setContent(n),a.infoWindow.setAnchor(e),a.props.onSelectLibrary(t.id)},a.setExactLocation=function(e){var t=e.coords.latitude,n=e.coords.longitude,o=new window.google.maps.LatLng(t,n);a.map.setCenter(o),a.service.textSearch({query:"library",radius:"500",location:o},function(e){return a.props.onLoadLibraries(e)}),a.setState({location:o})},a.setDefaultLocation=function(){var e=new window.google.maps.LatLng(13.1057669,77.6055739);a.service.textSearch({query:"library",radius:"500",location:e},function(e){return a.props.onLoadLibraries(e)}),a.setState({location:e})},a.state={mapLoaded:!1,loaction:{}},a.map=null,a.infoWindow=null,a.service=null,a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.onDisplayGoogleMaps().then(function(t){var a={zoom:12,center:{lat:13.1057669,lng:77.6055739},styles:x},n=document.getElementById("map");e.map=new t.maps.Map(n,a),e.infoWindow=new t.maps.InfoWindow({maxWidth:200}),e.service=new t.maps.places.PlacesService(e.map),t.maps.event.addListener(e.infoWindow,"closeclick",function(){e.props.onSelectLibrary(null)}),e.setState({mapLoaded:!0}),"geolocation"in navigator?navigator.geolocation.getCurrentPosition(e.setExactLocation,e.setDefaultLocation):e.setDefaultLocation()})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"map","aria-label":"map location",role:"application"},!(!this.state.mapLoaded||!this.props.libraries.length)&&this.props.libraries.map(function(t){return o.a.createElement(M,{key:t.id,library:t,map:e.map,selectedID:e.props.selectedID,onShowInfoWindow:e.showInfoWindow})}))}}]),t}(n.Component);a(150);var A=function(e){return console.log("Error! ".concat(e.errorMessage)),o.a.createElement("div",{className:"modal",role:"dialog"},o.a.createElement("h3",{className:"err-head"},"Error Occoured"),o.a.createElement("h5",{className:"err-meg"},e.errorMessage.message||e.errorMessage),o.a.createElement("button",{className:"err-btn",onClick:function(){return window.location.reload(!0)}},"Reload"))},P=(a(152),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).gm_authFailure=function(){a.setState(function(e){return{err:Object(h.a)(e.err).concat(["Google Map Authorization Failed"])}})},a.getGoogleMaps=function(){return a.googleMapsPromise||(a.googleMapsPromise=new Promise(function(e){window.resolveGoogleMapsPromise=function(){e(window.google),delete window.resolveGoogleMapsPromise};var t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyDA9RLo-1ZBGb-eQRBPWUpIB-Z97cuiZTM","&libraries=places&callback=resolveGoogleMapsPromise"),t.async=!0,document.body.appendChild(t)})),a.googleMapsPromise},a.selectLibrary=function(e){a.state.selectedLibraryID!==e&&a.setState({selectedLibraryID:e})},a.filterLibraries=function(e){a.setState(function(t){return{filteredLibraries:t.libraries.filter(function(t){return t.name.toLowerCase().includes(e)})}})},a.loadLibraries=function(e){a.setState({libraries:e,filteredLibraries:e}),console.log(e)},a.state={libraries:[],filteredLibraries:[],selectedLibraryID:null,err:[]},a.getGoogleMaps(),window.gm_authFailure=a.gm_authFailure,a}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("main",null,!!this.state.err.length&&o.a.createElement(A,{errorMessage:this.state.err.join(", ")}),o.a.createElement(D,{libraries:this.state.filteredLibraries,selectedID:this.state.selectedLibraryID,onSelectLibrary:this.selectLibrary,onFilterLibraries:this.filterLibraries}),o.a.createElement(W,{libraries:this.state.filteredLibraries,selectedID:this.state.selectedLibraryID,onSelectLibrary:this.selectLibrary,onDisplayGoogleMaps:this.getGoogleMaps,onLoadLibraries:this.loadLibraries}))}}]),t}(n.Component)),_=(a(154),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,{path:"/",component:C}),o.a.createElement(m.a,{exact:!0,path:"/map",component:P}))}}]),t}(n.Component)),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(o.a.createElement(i.a,{basename:"/my-reads-map"},o.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-reads-map",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/my-reads-map","/service-worker.js");F?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):G(t,e)})}}()},47:function(e){e.exports=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}]},48:function(e,t,a){e.exports=a(156)},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){}},[[48,2,1]]]);
//# sourceMappingURL=main.4e105920.chunk.js.map