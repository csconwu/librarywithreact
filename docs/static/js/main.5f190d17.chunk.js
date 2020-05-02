(this.webpackJsonplibrarywithreact=this.webpackJsonplibrarywithreact||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/trash.a5caf731.svg"},23:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),i=a.n(r),l=a(10),s=a(1),c=a(5),d=a(4),u=a(3),h=a(2);var m=function(){return o.a.createElement("h1",null,"My Book Library")};var b=function(e){return o.a.createElement("div",{className:"newBookContainer"},o.a.createElement("button",{id:"newBookBtn",onClick:function(){e.handleForm(!0,!0)}},"New Book"))};function p(e){localStorage.setItem("REACTBK".concat(e.indexForStorage),JSON.stringify(e))}function k(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,a,n){return t+t+a+a+n+n}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}var E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.book,t=e.bookColor,a=function(e,t){var a=k(e),n=k(t),o=function(e){return Object.keys(e).forEach((function(t){e[t]/=255,e[t]=e[t]>0?Math.pow((e[t]+.055)/1.055,2.4):e[t]/12.92})),e};return a=o(a),n=o(n),(.2126*a.r+.7152*a.g+.0722*a.b+.05)/(.2126*n.r+.7152*n.g+.0722*n.b+.05)<4.5}(t,"#000000")?"antiquewhite":"black";return o.a.createElement("div",{className:"bookDetails",style:{backgroundColor:t,color:a},onClick:function(e){for(var t=e.target;!t.classList.contains("bookDetails");)t=t.parentElement;t.style.transform="scale(1.5)"===t.style.transform?"scale(1)":"scale(1.5)",e.preventDefault()}},o.a.createElement("h2",null,e.title.toUpperCase()),o.a.createElement("br",null),o.a.createElement("h4",null,o.a.createElement("span",{className:"prefixValues"},"by  "),e.author),o.a.createElement("h5",null,e.numPages," ",o.a.createElement("span",null,"pages")),o.a.createElement("h5",null,o.a.createElement("span",{className:"prefixValues"},"Published in "),e.yearPub))}}]),a}(o.a.Component),v=a(19),g=a.n(v),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={read:n.props.book.read},n.handleToggleRead=n.handleToggleRead.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"handleToggleRead",value:function(){var e=this.props.book;e.read=!1===e.read,this.setState({read:e.read}),p(e)}},{key:"render",value:function(){var e=this.state.read,t=this.props,a=t.onEditClick,n=t.isFormNeeded,r=t.handleDelete;return o.a.createElement("div",{className:"bookActionContainer"},o.a.createElement("button",{className:"editBtn modifyBook",disabled:n,onClick:a,type:"button"},o.a.createElement("span",{className:"buttonText"},"Edit")),e?o.a.createElement("button",{className:"readBtn modifyBook",disabled:n,onClick:this.handleToggleRead},o.a.createElement("span",{className:"buttonText"},"Read")):o.a.createElement("button",{className:"readBtn unread modifyBook",disabled:n,onClick:this.handleToggleRead},o.a.createElement("span",{className:"buttonText"},"Unread")),o.a.createElement("button",{className:"deleteBtn modifyBook",type:"button",disabled:n,onClick:r},o.a.createElement("img",{alt:"Trash Icon",src:g.a})))}}]),a}(o.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onEditClick=n.onEditClick.bind(Object(d.a)(n)),n.handleDelete=n.handleDelete.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"onEditClick",value:function(){this.props.handleFormOnEdit(this.props.book),this.props.handleForm(!0,!1)}},{key:"handleDelete",value:function(){window.confirm("Are you sure you want to delete this book?")&&(this.props.handleDelete(this.props.book.indexForStorage),this.props.handleDeletedBook())}},{key:"render",value:function(){var e=this.props,t=e.book,a=e.isFormNeeded;return o.a.createElement("div",{className:"bookContainer"},o.a.createElement(E,{book:t}),o.a.createElement(f,{book:t,onEditClick:this.onEditClick,isFormNeeded:a,handleDelete:this.handleDelete}))}}]),a}(o.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleDeletedBook=n.handleDeletedBook.bind(Object(d.a)(n)),n.state={numberOfBooks:n.props.booksArray.length},n}return Object(c.a)(a,[{key:"handleDeletedBook",value:function(){this.setState({numberOfBooks:this.props.booksArray.length})}},{key:"render",value:function(){var e=this,t=this.props.booksArray;if(t.length<1)return null;var a=this.props,n=a.handleForm,r=a.handleFormOnEdit,i=a.handleDelete,l=a.isFormNeeded;return o.a.createElement("div",{className:"cabinet"},t.map((function(t){return o.a.createElement(y,Object.assign({key:t.indexForStorage},{handleForm:n,handleFormOnEdit:r,handleDelete:i,isFormNeeded:l},{book:t,handleDeletedBook:e.handleDeletedBook}))})))}}]),a}(o.a.Component),B=a(22),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.titleError,a=e.authorError,n=e.numPagesError,r=e.yearPubError,i=e.touched;return o.a.createElement("div",{className:"formLabelAndFields formWrapper"},o.a.createElement("label",{htmlFor:"title"},"Title:"),o.a.createElement("input",{type:"text",id:"title",name:"title",onChange:this.props.handleChange,value:this.props.values.title,onBlur:this.props.handleBlur,className:t&&i.title?"invalid":""}),o.a.createElement("br",null),t&&i.title?o.a.createElement("div",{className:"errorDiv"},t):null,o.a.createElement("label",{htmlFor:"author"},"Author:"),o.a.createElement("input",{type:"text",id:"author",name:"author",onChange:this.props.handleChange,value:this.props.values.author,onBlur:this.props.handleBlur,className:a&&i.author?"invalid":""}),o.a.createElement("br",null),a&&i.author?o.a.createElement("div",{className:"errorDiv"},a):null,o.a.createElement("label",{htmlFor:"numPages"},"Pages:"),o.a.createElement("input",{type:"number",min:"1",max:"999999",id:"numPages",name:"numPages",onChange:this.props.handleChange,value:this.props.values.numPages,onBlur:this.props.handleBlur,className:n&&i.numPages?"invalid":""}),o.a.createElement("br",null),n&&i.numPages?o.a.createElement("div",{className:"errorDiv"},n):null,o.a.createElement("label",{htmlFor:"yearPub"},"Year Published:"),o.a.createElement("input",{type:"number",id:"yearPub",name:"yearPub",onChange:this.props.handleChange,value:this.props.values.yearPub,onBlur:this.props.handleBlur,className:r&&i.yearPub?"invalid":""}),o.a.createElement("br",null),r&&i.yearPub?o.a.createElement("div",{className:"errorDiv"},r):null,o.a.createElement("label",{htmlFor:"bookColor"},"Book Color"),o.a.createElement("input",{type:"color",id:"bookColor",name:"bookColor",value:this.props.values.bookColor,onChange:this.props.handleChange}),o.a.createElement("br",null))}}]),a}(o.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cancel,a=e.handleSubmit;return o.a.createElement("div",{className:"newBookContainer saveCancelContainer"},o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement("button",{type:"button",id:"cancelBtn",className:"cancelBtn",onClick:t},"Cancel")),o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement("button",{type:"submit",id:"saveBtn",className:"saveBtn",onClick:a},"Save")))}}]),a}(o.a.Component);var F=a(16);function w(e){var t=e.bookToEditClone,a=e.isCreating,n=e.handleSave,r=e.handleForm,i=e.isFormNeeded;return Object(F.b)(i,null,{from:{opacity:0,marginLeft:window.innerWidth},enter:{opacity:1,transform:"scale(1)",width:window.innerWidth,marginLeft:0},leave:{opacity:0,width:0},config:{mass:1,tension:250,friction:50}}).map((function(e){var l=e.item,s=e.key,c=e.props;return l&&o.a.createElement(F.a.div,{key:s,style:c,className:"formContainer"},o.a.createElement(j,{bookToEditClone:t,isCreating:a,handleSave:n,handleForm:r,isFormNeeded:i}))}))}var j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onCancel=n.onCancel.bind(Object(d.a)(n)),n.cachedBookToEdit=Object(l.a)({},n.props.bookToEditClone),n.editingBookDetails=o.a.createElement("div",null,o.a.createElement("h2",null,"Editing"),o.a.createElement(E,{book:n.cachedBookToEdit})),n.cachedBookExists=0!==Object.keys(n.cachedBookToEdit).length,n.isCreating=n.props.isCreating,n}return Object(c.a)(a,[{key:"onCancel",value:function(){this.props.handleForm(!1,this.props.isCreating)}},{key:"render",value:function(){var e=this,t=this.props,a=t.handleSave,n=t.handleForm;return o.a.createElement(B.a,{initialValues:{title:this.cachedBookExists?this.cachedBookToEdit.title:"",author:this.cachedBookExists?this.cachedBookToEdit.author:"",numPages:this.cachedBookExists?this.cachedBookToEdit.numPages:"",yearPub:this.cachedBookExists?this.cachedBookToEdit.yearPub:"",bookColor:this.cachedBookExists?this.cachedBookToEdit.bookColor:"#FBF2E3"},onSubmit:function(t){a(t.title,t.author,t.numPages,t.yearPub,t.bookColor),n(!1,e.isCreating)},validate:function(e){var t,a,n,o={},r=(t=e.title)?t.length>30?"Title must 30 characters or less. (Currently ".concat(t.length,")"):t.length<3?"Title must have 3 or more characters":void 0:"Title is required",i=(a=e.author)?a.length>25?"The author's name must have 25 characters or less. (Currently ".concat(a.length):a.length<3?"The author's name must have 3 or more characters":void 0:"Author is required",l=(n=e.numPages,n=Number(n),isNaN(n)?"Your input for number of pages is not a number":/[\D]{1,7}/g.test(n.toString())?"Number of pages should only contain numbers":n<1?"The number of pages cannot be 0 and must contain only numbers":n>1e5?"That's a lie! No book has more than 100,000 pages":void 0),s=function(e){e=Number(e);var t=(new Date).getFullYear();return isNaN(e)?"Your input for year published is not a number":4!==e.toString().length||e<1500||e>t?"The year published must be between 1500 and "+t:void 0}(e.yearPub);return r&&(o.title=r),i&&(o.author=i),l&&(o.numPages=l),s&&(o.yearPub=s),o}},(function(t){var a=t.handleBlur,n=t.errors,r=t.values,i=t.handleSubmit,l=t.handleChange,s=t.touched;return o.a.createElement("form",{className:"formA"},o.a.createElement("div",{className:"formTitle"},e.isCreating?o.a.createElement("h2",null,"Creating New Book"):e.editingBookDetails),o.a.createElement(N,Object.assign({handleChange:l,values:r,handleBlur:a,touched:s},{titleError:n.title,authorError:n.author,numPagesError:n.numPages,yearPubError:n.yearPub})),o.a.createElement(O,{cancel:e.onCancel,handleSubmit:i}))}))}}]),a}(o.a.Component);function S(e,t,a,n,o,r){return r.indexForStorage++,localStorage.setItem("storageIndexReact",r.indexForStorage),{title:e,author:t,numPages:a,yearPub:n,bookColor:o,read:!1,indexForStorage:r.indexForStorage}}function P(e,t){var a,n=e.findIndex((function(e){return Number(e.indexForStorage)===Number(t)}));a=e[n],localStorage.removeItem("REACTBK".concat(a.indexForStorage)),console.log(n),e.splice(n,1)}function T(e,t,a,n,o){this.title=e,this.author=t,this.numPages=a,this.yearPub=n,this.bookColor=o,p(this)}var x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).booksArray=function(){var e=[];if(localStorage.getItem("storageIndexReact")){e.indexForStorage=localStorage.getItem("storageIndexReact");for(var t=0;t<localStorage.length;t++){var a=localStorage.key(t);if(a.includes("REACTBK")){var n=JSON.parse(localStorage.getItem(a));e.push(n)}}}else{e.indexForStorage=0;var o=S("Flowers for Algernon","Daniel Keyes",234,1958,"#008b8b",e),r=S("If I stay","Gayle Forman",360,2009,"#b8860b",e);e.push(o,r),p(o),p(r)}return e.sort((function(e,t){return e.indexForStorage-t.indexForStorage})),e}(),n.handleSaveBook=n.handleSaveBook.bind(Object(d.a)(n)),n.handleNewBook=n.handleNewBook.bind(Object(d.a)(n)),n.handleEditBook=n.handleEditBook.bind(Object(d.a)(n)),n.handleDeleteBook=n.handleDeleteBook.bind(Object(d.a)(n)),n.handleFormNeeded=n.handleFormNeeded.bind(Object(d.a)(n)),n.handleFormOnEdit=n.handleFormOnEdit.bind(Object(d.a)(n)),n.state={isCreating:!1,isFormNeeded:!1,windowHeight:window.innerHeight,windowWidth:window.innerWidth},n}return Object(c.a)(a,[{key:"handleSaveBook",value:function(e,t,a,n,o){this.state.isCreating?this.handleNewBook.apply(this,arguments):this.handleEditBook.apply(this,arguments)}},{key:"handleNewBook",value:function(e,t,a,n,o){var r,i,l=S(e,t,a,n,o,this.booksArray);r=this.booksArray,i=l,r.push(i),p(i)}},{key:"handleFormOnEdit",value:function(e){this.state.isFormNeeded||(this.bookToEdit=e,this.bookToEditClone=Object(l.a)({},e))}},{key:"handleEditBook",value:function(e,t,a,n,o){T.apply(this.bookToEdit,Array.prototype.slice.call(arguments))}},{key:"handleDeleteBook",value:function(e){P(this.booksArray,e)}},{key:"handleFormNeeded",value:function(e,t){t&&(this.bookToEditClone={}),this.setState({isFormNeeded:e,isCreating:t}),e||(this.bookToEdit={})}},{key:"handleWindowResizing",value:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||this.setState({windowHeight:window.innerHeight,windowWidth:window.innerWidth})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResizing.bind(this))}},{key:"render",value:function(){var e=this.booksArray,t=this.handleFormNeeded,a=this.handleSaveBook,n=this.handleFormOnEdit,r=this.handleDeleteBook,i=this.bookToEditClone,l=this.state,s=l.isCreating,c=l.isFormNeeded;return o.a.createElement("div",{className:"App",style:{width:window.innerWidth-60}},o.a.createElement(m,null),o.a.createElement(b,{handleForm:t,isFormNeeded:c}),o.a.createElement(w,{handleForm:t,handleSave:a,isFormNeeded:c,isCreating:s,bookToEditClone:i}),o.a.createElement(C,{booksArray:e,handleForm:t,handleFormOnEdit:n,isFormNeeded:c,handleDelete:r}))}}]),a}(o.a.Component);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5f190d17.chunk.js.map