(this.webpackJsonplibrarywithreact=this.webpackJsonplibrarywithreact||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/menu-icon.b4ea3d62.svg"},26:function(e,t,a){e.exports=a(35)},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),l=a.n(r),i=a(13),s=a(2),d=a(5),c=a(1),h=a(4),u=a(3);var m=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"My Book Library"))};var b=function(e){return o.a.createElement("div",{className:"newBookContainer"},o.a.createElement("button",{id:"newBookBtn",onClick:function(){e.handleForm(!0,!0)}},"New Book"))};function p(e){localStorage.setItem("REACTBK".concat(e.indexForStorage),JSON.stringify(e))}function g(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,a,n){return t+t+a+a+n+n}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}var k=a(22),E=a.n(k),v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={menuExpanded:!1},n.handleMenu=n.handleMenu.bind(Object(c.a)(n)),n.handleMouseLeave=n.handleMouseLeave.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"handleMenu",value:function(e){this.props.sortMode||(clearTimeout(this.closeMenu),"mouseenter"!==e.type?this.setState((function(e){return{menuExpanded:!e.menuExpanded}})):this.setState((function(){return{menuExpanded:!0}})))}},{key:"handleMouseLeave",value:function(){var e=this;this.closeMenu=setTimeout((function(){e.setState({menuExpanded:!1})}),300)}},{key:"render",value:function(){var e=this.props,t=e.book,a=e.showMenuIcon,n=e.onEditClick,r=e.handleDelete,l=e.sortMode,i=t.bookColor,s=function(e,t){var a=g(e),n=g(t),o=function(e){return Object.keys(e).forEach((function(t){e[t]/=255,e[t]=e[t]>0?Math.pow((e[t]+.055)/1.055,2.4):e[t]/12.92})),e};return a=o(a),n=o(n),(.2126*a.r+.7152*a.g+.0722*a.b+.05)/(.2126*n.r+.7152*n.g+.0722*n.b+.05)<4.5}(i,"#000000")?"antiquewhite":"black";return o.a.createElement("div",{className:"bookDetails",style:{backgroundColor:i,color:s},onMouseLeave:this.handleMouseLeave},o.a.createElement("h2",null,t.title.toUpperCase()),o.a.createElement("br",null),o.a.createElement("h4",null,o.a.createElement("span",{className:"prefixValues"},"by  "),t.author),o.a.createElement("h5",null,t.numPages," ",o.a.createElement("span",null,"pages")),o.a.createElement("h5",null,o.a.createElement("span",{className:"prefixValues"},"Published in "),t.yearPub),a&&o.a.createElement("div",{className:"book-menu-container"},o.a.createElement("div",{className:"menu-icon-container"+(this.state.menuExpanded?" active":"")},o.a.createElement("img",{draggable:!1,src:E.a,alt:"Menu Icon",className:"menu-icon",onClick:this.handleMenu,style:{cursor:l?"inherit":"pointer"}})),o.a.createElement("div",{className:"menu-list-container "+(this.state.menuExpanded&&"active"),id:"menu-list-container",onMouseEnter:this.handleMenu},o.a.createElement("button",{type:"button",className:"menu-button menu-edit",onClick:n},"Edit"),o.a.createElement("button",{type:"button",className:"menu-button menu-delete",onClick:r},"Delete"))))}}]),a}(o.a.Component),f=a(9);function y(){var e=[];if(localStorage.getItem("storageIndexReact"))if(e.indexForStorage=localStorage.getItem("storageIndexReact"),localStorage.getItem("ReactBookSort"))for(var t=JSON.parse(localStorage.getItem("ReactBookSort")),a=t.length,n=0;n<a;n++)e.push(JSON.parse(localStorage.getItem("REACTBK"+t[n])));else for(var o=0;o<localStorage.length;o++){var r=localStorage.key(o);if(r.includes("REACTBK")){var l=JSON.parse(localStorage.getItem(r));e.push(l)}}else e.indexForStorage=0,function(e){var t=C("Flowers for Algernon","Daniel Keyes",234,1958,"#008b8b",e),a=C("If I stay","Gayle Forman",360,2009,"#b8860b",e);e.push(t,a),p(t),p(a)}(e);return localStorage.getItem("ReactBookSort")||e.sort((function(e,t){return e.indexForStorage-t.indexForStorage})),e}function C(e,t,a,n,o,r){return r.indexForStorage++,localStorage.setItem("storageIndexReact",r.indexForStorage),{title:e,author:t,numPages:a,yearPub:n,bookColor:o,read:!1,indexForStorage:r.indexForStorage}}function D(e,t){var a,n=e.findIndex((function(e){return Number(e.indexForStorage)===Number(t)}));a=e[n],localStorage.removeItem("REACTBK".concat(a.indexForStorage)),e.splice(n,1)}function N(e,t,a,n,o){this.title=e,this.author=t,this.numPages=a,this.yearPub=n,this.bookColor=o,p(this)}function O(e){var t=Object(f.a)(document.getElementsByClassName("bookContainer")).reduce((function(e,t){return[].concat(Object(f.a)(e),[t.id.slice(4)])}),[]);e&&t.splice(t.indexOf(e.toString()),1),localStorage.setItem("ReactBookSort",JSON.stringify(t))}var S=a(11);function B(e){var t=e.confirmDeleteNeeded,a=e.handleCancelDelete,n=e.handleConfirmDelete,r=e.book;return Object(S.b)(t,null,{from:{opacity:0,marginLeft:window.innerWidth},enter:{opacity:1,transform:"scale(1)",width:window.innerWidth,marginLeft:0},leave:{opacity:0,width:0},config:{mass:1,tension:250,friction:50}}).map((function(e){var t=e.item,l=e.key,i=e.props;return t&&o.a.createElement(S.a.div,{key:l,style:i,className:"confirmDeleteContainer"},o.a.createElement("div",{className:"confirmDeleteWrapper"},o.a.createElement("div",{className:"formTitle"},o.a.createElement("h2",null,"Are you sure you want to delete this book?")),o.a.createElement(v,{book:r}),o.a.createElement("div",{className:"confirmDeleteButtonContainer"},o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement("button",{type:"button",id:"dontDelete",className:"dontDelete",onClick:a},"No, Go Back")),o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement("button",{type:"button",id:"yesDelete",className:"yesDelete",onClick:n},"Yes, Delete")))))}))}var F=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onEditClick=n.onEditClick.bind(Object(c.a)(n)),n.handleDelete=n.handleDelete.bind(Object(c.a)(n)),n.handleDragStart=n.handleDragStart.bind(Object(c.a)(n)),n.handleDragEnter=n.handleDragEnter.bind(Object(c.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(c.a)(n)),n.handleDragEnd=n.handleDragEnd.bind(Object(c.a)(n)),n.handleDrop=n.handleDrop.bind(Object(c.a)(n)),n.handleConfirmDelete=n.handleConfirmDelete.bind(Object(c.a)(n)),n.handleCancelDelete=n.handleCancelDelete.bind(Object(c.a)(n)),n.state={confirmDeleteNeeded:!1},n}return Object(d.a)(a,[{key:"onEditClick",value:function(){this.props.handleFormOnEdit(this.props.book),this.props.handleForm(!0,!1)}},{key:"handleDelete",value:function(){this.setState({confirmDeleteNeeded:!0})}},{key:"handleConfirmDelete",value:function(){this.props.handleDelete(this.props.book.indexForStorage),this.props.handleDeletedBook(),this.setState({confirmDeleteNeeded:!1})}},{key:"handleCancelDelete",value:function(){this.setState({confirmDeleteNeeded:!1})}},{key:"handleDragStart",value:function(e){this.props.sortMode&&(this.state.confirmDeleteNeeded||"IMG"===e.target.tagName||(e.target.style.opacity="0.2",this.props.setDragElement(e.target.id),e.dataTransfer.setData("text",e.target.firstElementChild.firstChild.textContent)))}},{key:"handleDragEnd",value:function(e){this.props.sortMode&&(e.preventDefault(),e.target.style.opacity="1")}},{key:"handleDragEnter",value:function(e){e.preventDefault(),this.props.sortMode&&(!function(e,t){for(var a=e.target,n=document.getElementById(t),o=0;o<4&&(!a.draggable||"IMG"===a.tagName);o++)a=a.parentElement;n.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING?a.parentElement.insertBefore(n,a.nextSibling):a.parentElement.insertBefore(n,a)}(e,this.props.draggedElementId),O())}},{key:"handleDragOver",value:function(e){e.preventDefault(),this.props.sortMode}},{key:"handleDrop",value:function(e){e.preventDefault(),this.props.sortMode}},{key:"componentDidMount",value:function(){O()}},{key:"render",value:function(){var e=this.props,t=e.book,a=e.isFormNeeded,n=e.sortMode;return o.a.createElement("div",{id:"book"+t.indexForStorage,className:"bookContainer",onDragStart:this.handleDragStart,draggable:n&&!this.state.confirmDeleteNeeded&&"true",onDragEnd:this.handleDragEnd,onDragOver:this.handleDragOver,onDrop:this.handleDrop,onDragEnter:this.handleDragEnter},o.a.createElement(v,{book:t,showMenuIcon:!0,onEditClick:this.onEditClick,isFormNeeded:a,handleDelete:this.handleDelete,sortMode:n}),o.a.createElement(B,{confirmDeleteNeeded:this.state.confirmDeleteNeeded,handleConfirmDelete:this.handleConfirmDelete,handleCancelDelete:this.handleCancelDelete,book:t}))}}]),a}(o.a.Component),j=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleDeletedBook=n.handleDeletedBook.bind(Object(c.a)(n)),n.setDragElement=n.setDragElement.bind(Object(c.a)(n)),n.state={numberOfBooks:n.props.booksArray.length,draggedElementId:""},n}return Object(d.a)(a,[{key:"handleDeletedBook",value:function(){this.setState({numberOfBooks:this.props.booksArray.length})}},{key:"setDragElement",value:function(e){this.setState({draggedElementId:e})}},{key:"render",value:function(){var e=this,t=this.props.booksArray,a=this.props.sortMode;if(t.length<1)return null;var n=this.props,r=n.handleForm,l=n.handleFormOnEdit,i=n.handleDelete,s=n.isFormNeeded;return o.a.createElement("div",{className:"cabinet"},t.map((function(t){return o.a.createElement(F,Object.assign({key:t.indexForStorage},{handleForm:r,handleFormOnEdit:l,handleDelete:i,isFormNeeded:s},{book:t,handleDeletedBook:e.handleDeletedBook,setDragElement:e.setDragElement,draggedElementId:e.state.draggedElementId,sortMode:a}))})))}}]),a}(o.a.Component),M=a(25),w=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.titleError,a=e.authorError,n=e.numPagesError,r=e.yearPubError,l=e.touched;return o.a.createElement("div",{className:"formLabelAndFields formWrapper"},o.a.createElement("label",{htmlFor:"title"},"Title:"),o.a.createElement("input",{type:"text",id:"title",name:"title",onChange:this.props.handleChange,value:this.props.values.title,onBlur:this.props.handleBlur,className:t&&l.title?"invalid":""}),o.a.createElement("br",null),t&&l.title?o.a.createElement("div",{className:"errorDiv"},t):null,o.a.createElement("label",{htmlFor:"author"},"Author:"),o.a.createElement("input",{type:"text",id:"author",name:"author",onChange:this.props.handleChange,value:this.props.values.author,onBlur:this.props.handleBlur,className:a&&l.author?"invalid":""}),o.a.createElement("br",null),a&&l.author?o.a.createElement("div",{className:"errorDiv"},a):null,o.a.createElement("label",{htmlFor:"numPages"},"Pages:"),o.a.createElement("input",{type:"number",min:"1",max:"999999",id:"numPages",name:"numPages",onChange:this.props.handleChange,value:this.props.values.numPages,onBlur:this.props.handleBlur,className:n&&l.numPages?"invalid":""}),o.a.createElement("br",null),n&&l.numPages?o.a.createElement("div",{className:"errorDiv"},n):null,o.a.createElement("label",{htmlFor:"yearPub"},"Year Published:"),o.a.createElement("input",{type:"number",id:"yearPub",name:"yearPub",onChange:this.props.handleChange,value:this.props.values.yearPub,onBlur:this.props.handleBlur,className:r&&l.yearPub?"invalid":""}),o.a.createElement("br",null),r&&l.yearPub?o.a.createElement("div",{className:"errorDiv"},r):null,o.a.createElement("label",{htmlFor:"bookColor"},"Book Color"),o.a.createElement("input",{type:"color",id:"bookColor",name:"bookColor",value:this.props.values.bookColor,onChange:this.props.handleChange}),o.a.createElement("br",null))}}]),a}(o.a.Component),T=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cancel,a=e.handleSubmit;return o.a.createElement("div",{className:"newBookContainer saveCancelContainer"},o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement("button",{type:"button",id:"cancelBtn",className:"cancelBtn",onClick:t},"Cancel")),o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement("button",{type:"submit",id:"saveBtn",className:"saveBtn",onClick:a},"Save")))}}]),a}(o.a.Component);function x(e){var t=e.bookToEditClone,a=e.isCreating,n=e.handleSave,r=e.handleForm,l=e.isFormNeeded;return Object(S.b)(l,null,{from:{opacity:0,marginLeft:window.innerWidth},enter:{opacity:1,transform:"scale(1)",width:window.innerWidth,marginLeft:0},leave:{opacity:0,width:0},config:{mass:1,tension:250,friction:50}}).map((function(e){var i=e.item,s=e.key,d=e.props;return i&&o.a.createElement(S.a.div,{key:s,style:d,className:"formContainer"},o.a.createElement(P,{bookToEditClone:t,isCreating:a,handleSave:n,handleForm:r,isFormNeeded:l}))}))}var P=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onCancel=n.onCancel.bind(Object(c.a)(n)),n.cachedBookToEdit=Object(i.a)({},n.props.bookToEditClone),n.editingBookDetails=o.a.createElement("div",null,o.a.createElement("h2",null,"Editing"),o.a.createElement(v,{book:n.cachedBookToEdit})),n.cachedBookExists=0!==Object.keys(n.cachedBookToEdit).length,n.isCreating=n.props.isCreating,n}return Object(d.a)(a,[{key:"onCancel",value:function(){this.props.handleForm(!1,this.props.isCreating)}},{key:"render",value:function(){var e=this,t=this.props,a=t.handleSave,n=t.handleForm;return o.a.createElement(M.a,{initialValues:{title:this.cachedBookExists?this.cachedBookToEdit.title:"",author:this.cachedBookExists?this.cachedBookToEdit.author:"",numPages:this.cachedBookExists?this.cachedBookToEdit.numPages:"",yearPub:this.cachedBookExists?this.cachedBookToEdit.yearPub:"",bookColor:this.cachedBookExists?this.cachedBookToEdit.bookColor:"#FBF2E3"},onSubmit:function(t){a(t.title,t.author,t.numPages,t.yearPub,t.bookColor),n(!1,e.isCreating)},validate:function(e){var t,a,n,o={},r=(t=e.title)?t.length>30?"Title must 30 characters or less. (Currently ".concat(t.length,")"):t.length<3?"Title must have 3 or more characters":void 0:"Title is required",l=(a=e.author)?a.length>25?"The author's name must have 25 characters or less. (Currently ".concat(a.length):a.length<3?"The author's name must have 3 or more characters":void 0:"Author is required",i=(n=e.numPages,n=Number(n),isNaN(n)?"Your input for number of pages is not a number":/[\D]{1,7}/g.test(n.toString())?"Number of pages should only contain numbers":n<1?"The number of pages cannot be 0 and must contain only numbers":n>1e5?"That's a lie! No book has more than 100,000 pages":void 0),s=function(e){e=Number(e);var t=(new Date).getFullYear();return isNaN(e)?"Your input for year published is not a number":4!==e.toString().length||e<1500||e>t?"The year published must be between 1500 and "+t:void 0}(e.yearPub);return r&&(o.title=r),l&&(o.author=l),i&&(o.numPages=i),s&&(o.yearPub=s),o}},(function(t){var a=t.handleBlur,n=t.errors,r=t.values,l=t.handleSubmit,i=t.handleChange,s=t.touched;return o.a.createElement("form",{className:"formA"},o.a.createElement("div",{className:"formTitle"},e.isCreating?o.a.createElement("h2",null,"Creating New Book"):e.editingBookDetails),o.a.createElement(w,Object.assign({handleChange:i,values:r,handleBlur:a,touched:s},{titleError:n.title,authorError:n.author,numPagesError:n.numPages,yearPubError:n.yearPub})),o.a.createElement(T,{cancel:e.onCancel,handleSubmit:l}))}))}}]),a}(o.a.Component),I=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).booksArray=y(),n.handleSaveBook=n.handleSaveBook.bind(Object(c.a)(n)),n.handleNewBook=n.handleNewBook.bind(Object(c.a)(n)),n.handleEditBook=n.handleEditBook.bind(Object(c.a)(n)),n.handleDeleteBook=n.handleDeleteBook.bind(Object(c.a)(n)),n.handleFormNeeded=n.handleFormNeeded.bind(Object(c.a)(n)),n.handleFormOnEdit=n.handleFormOnEdit.bind(Object(c.a)(n)),n.handleThemeToggle=n.handleThemeToggle.bind(Object(c.a)(n)),n.handleUpdatedTheme=n.handleUpdatedTheme.bind(Object(c.a)(n)),n.handleSortMode=n.handleSortMode.bind(Object(c.a)(n)),n.state={isCreating:!1,isFormNeeded:!1,windowHeight:window.innerHeight,windowWidth:window.innerWidth,darkMode:JSON.parse(localStorage.getItem("darkMode"))||!1,themeToggleClicked:!1,sortMode:!1},n}return Object(d.a)(a,[{key:"handleSaveBook",value:function(e,t,a,n,o){this.state.isCreating?this.handleNewBook.apply(this,arguments):this.handleEditBook.apply(this,arguments)}},{key:"handleNewBook",value:function(e,t,a,n,o){var r,l,i=C(e,t,a,n,o,this.booksArray);r=this.booksArray,l=i,r.push(l),p(l)}},{key:"handleFormOnEdit",value:function(e){this.state.isFormNeeded||(this.bookToEdit=e,this.bookToEditClone=Object(i.a)({},e))}},{key:"handleEditBook",value:function(e,t,a,n,o){N.apply(this.bookToEdit,Array.prototype.slice.call(arguments))}},{key:"handleDeleteBook",value:function(e){D(this.booksArray,e),O(e)}},{key:"handleFormNeeded",value:function(e,t){t&&(this.bookToEditClone={}),this.setState({isFormNeeded:e,isCreating:t}),e||(this.bookToEdit={})}},{key:"handleWindowResizing",value:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||this.setState({windowHeight:window.innerHeight,windowWidth:window.innerWidth})}},{key:"handleThemeToggle",value:function(){this.state.themeToggleClicked||(document.querySelector(".darkModeCircle").style.animationDuration="300ms",this.setState({themeToggleClicked:!0})),this.setState((function(e){return{darkMode:!e.darkMode}}),this.handleUpdatedTheme)}},{key:"handleUpdatedTheme",value:function(){var e;e=this.state.darkMode,localStorage.setItem("darkMode",JSON.stringify(e));var t=document.querySelector("body"),a=document.querySelector(".header"),n=document.querySelector(".darkModeCircle");this.state.darkMode?(t.style.backgroundColor="darkslategray",a.style.color="antiquewhite",n.classList.add("darkOn")):(t.style.backgroundColor="antiquewhite",a.style.color="darkslategray",n.classList.remove("darkOn"))}},{key:"handleSortMode",value:function(){this.setState((function(e){return{sortMode:!e.sortMode}}))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResizing.bind(this)),this.handleUpdatedTheme()}},{key:"render",value:function(){var e=this.booksArray,t=this.handleFormNeeded,a=this.handleSaveBook,n=this.handleFormOnEdit,r=this.handleDeleteBook,l=this.bookToEditClone,i=this.state,s=i.isCreating,d=i.isFormNeeded,c=i.sortMode;return o.a.createElement("div",{className:"App",style:{width:window.innerWidth}},o.a.createElement("div",{className:"darkModeToggle"},o.a.createElement("div",{className:"darkModeItemWrapper"},o.a.createElement("div",{className:"darkModeLine",onClick:this.handleThemeToggle},null),o.a.createElement("div",{className:"darkModeCircle",onClick:this.handleThemeToggle},null)),o.a.createElement("div",{className:"sort-mode-toggle"+(c?" active":"")},o.a.createElement("button",{type:"button",className:"sort-mode-btn",onClick:this.handleSortMode},this.state.sortMode?"Turn Off Sort Mode":"Sort Books"))),o.a.createElement(m,null),o.a.createElement(b,{handleForm:t,isFormNeeded:d}),o.a.createElement(x,{handleForm:t,handleSave:a,isFormNeeded:d,isCreating:s,bookToEditClone:l}),o.a.createElement(j,{booksArray:e,handleForm:t,handleFormOnEdit:n,isFormNeeded:d,handleDelete:r,sortMode:c}))}}]),a}(o.a.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.b4f47fe3.chunk.js.map