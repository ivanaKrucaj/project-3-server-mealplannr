(this.webpackJsonpmealpannr=this.webpackJsonpmealpannr||[]).push([[0],{30:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/plate-img.08ec29f7.png"},35:function(e,t,a){e.exports=a(72)},40:function(e,t,a){},43:function(e,t,a){},61:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),i=(a(40),a(19)),s=a(5),o=a(6),m=a(8),p=a(7),d=a(3),u=(a(41),a(42),a(43),a(2)),g=a.n(u),h={API_URL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL||"https://mealplannr.herokuapp.com/api"},E=a(1),f=(a(61),a(9)),v=a.n(f);function b(e){return l.a.createElement("div",{className:"intro-div fixed-top"},l.a.createElement("div",{className:"my-nav"},l.a.createElement("nav",{class:"navbar navbar-expand my-navbar"},l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("ul",{class:"navbar-nav nav-list"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(E.b,{to:"/home",class:"nav-link"},l.a.createElement(v.a,{class:"fa fa-home",name:"home"}))),l.a.createElement("li",{class:"nav-item"},l.a.createElement(E.b,{to:"/mealplan-basket",class:"nav-link"},l.a.createElement(v.a,{class:"fa fa-shopping-basket",name:"shopping-basket"}))),l.a.createElement("li",null,l.a.createElement("h1",{className:"navbar-title"},"Mealplannr")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(E.b,{to:"/create-recipe",class:"nav-link"},l.a.createElement(v.a,{class:"fa fa-plus-circle",name:"plus-circle"}))),l.a.createElement("li",{class:"nav-item dropdown"},l.a.createElement(E.b,{class:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement(v.a,{class:"fa fa-user",name:"user"})),l.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},l.a.createElement(E.b,{to:"/mealplans",class:"dropdown-item"},"My Mealplans"),l.a.createElement(E.b,{to:"/my-recipes",class:"dropdown-item"},"My Recipes"),l.a.createElement("hr",null),l.a.createElement(E.b,{class:"dropdown-item",onClick:e.onLogout},"Logout"))))))))}a(67);function y(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"home-recipes"},e.filteredRecipes.map((function(t,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"card recipe-card",style:{width:"18rem"},key:a},l.a.createElement(E.b,{to:"/recipe/".concat(t._id)},l.a.createElement("img",{src:t.image,class:"card-img-top",alt:"recipe-img"})),l.a.createElement("div",{class:"card-body"},l.a.createElement(E.b,{to:"/recipe/".concat(t._id),className:"recipe-title"},l.a.createElement("h5",{class:"card-title"},t.title)),l.a.createElement("button",{class:"btn btn-primary",onClick:function(a){return e.onAddToMealplan(a,t)}},"Add to Mealplan"))))}))))}function N(e){return e.loggedInUser?l.a.createElement("div",{className:"mealplan-basket-div container"},l.a.createElement("h1",{className:"mealplan-basket-title"},"Mealplan Basket"),l.a.createElement("form",{onSubmit:e.onSaveMealplan,className:"mealplan-name-form"},l.a.createElement("input",{type:"text",className:"mealplan-input",name:"mealplanName",placeholder:"Mealplan name"}),l.a.createElement("button",{type:"submit",className:"btn save-mealplan-btn"},"Save mealplan")),l.a.createElement("div",{className:"home-recipes"},e.mealplanBasket.map((function(t,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"card basket-card",style:{width:"18rem"},key:a},l.a.createElement(E.b,{to:"/recipe/".concat(t._id)},l.a.createElement("img",{src:t.image,class:"card-img-top",alt:"..."}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},t.title))),l.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e.onDelete(t)}},"Delete")))})))):l.a.createElement("p",null,"Please login")}a(68);var S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleCreateRecipe=function(t){t.preventDefault();var a=t.target.title.value,n=t.target.steps.value,l=t.target.ingredients.value,r=t.target.type.value,c=t.target.portions.value,i=t.target.image.files[0],s=new FormData;s.append("imageUrl",i),g.a.post("".concat(h.API_URL,"/upload"),s).then((function(t){g.a.post("".concat(h.API_URL,"/recipe"),{title:a,steps:n,ingredients:l,type:r,image:t.data.secure_url,number_of_portions:c,user:e.props.loggedInUser},{withCredentials:!0}).then((function(t){e.props.onRecipeCreated(t.data)}))}))},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.loggedInUser?l.a.createElement("div",{className:"create-recipe-div"},l.a.createElement("h1",{className:"create-title"},"Create recipe"),l.a.createElement("div",{className:"recipe-form"},l.a.createElement("form",{onSubmit:this.handleCreateRecipe},l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"text",name:"title",class:"form-control create-form-input",placeholder:"Title"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"file",name:"image",class:"form-control create-file-input"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("textarea",{class:"form-control create-steps-input",name:"steps",rows:"5",placeholder:"Steps"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"text",name:"ingredients",class:"form-control create-ingredient-input",placeholder:"Ingredients"})),l.a.createElement("div",{className:"form-group type-portion-div"},l.a.createElement("select",{name:"type",className:"select-type"},l.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Meal type"),l.a.createElement("option",null,"Breakfast"),l.a.createElement("option",null,"Lunch"),l.a.createElement("option",null,"Dinner"),l.a.createElement("option",null,"Snack")),l.a.createElement("input",{type:"number",min:"0",name:"portions",class:"form-control portions-input",placeholder:"Portions"})),l.a.createElement("div",{className:"submit-form-bnt-div"},l.a.createElement("button",{type:"submit",class:"btn btn-success submit-btn"},"Submit recipe"))))):l.a.createElement("div",{className:"text-center"},l.a.createElement("p",null,"Please sign in."))}}]),a}(l.a.Component);function k(){var e=(new Date).getFullYear();return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{textAlign:"center"}},"Created by the Mealplannr \xa9 ",e))}a(30);function w(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{class:"form-signin",onSubmit:e.onLogin},l.a.createElement("div",{class:"text-center mb-4"},l.a.createElement("h1",{class:"h3 mb-3 font-weight-normal"},"Welcome back!")),l.a.createElement("div",{class:"form-label-group"},l.a.createElement("input",{type:"email",name:"email",class:"form-control form-input",placeholder:"Email"})),l.a.createElement("div",{class:"form-label-group"},l.a.createElement("input",{type:"password",name:"password",class:"form-control form-input",placeholder:"Password"})),l.a.createElement("div",{class:"checkbox mb-3"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me")),l.a.createElement("div",null,l.a.createElement("button",{class:"btn btn-lg btn-login btn-trans",type:"submit"},"Sign in"))))}function _(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{class:"form-signin",onSubmit:e.onSignup},l.a.createElement("div",{class:"text-center mb-4"},l.a.createElement("h1",{class:"h3 mb-3 font-weight-normal"},"Not a member yet?")),l.a.createElement("div",{class:"form-label-group"},l.a.createElement("input",{type:"text",name:"username",class:"form-control form-input",placeholder:"Username"})),l.a.createElement("div",{class:"form-label-group"},l.a.createElement("input",{type:"email",name:"email",class:"form-control form-input",placeholder:"Email"})),l.a.createElement("div",{class:"form-label-group"},l.a.createElement("input",{type:"password",name:"password",class:"form-control form-input",placeholder:"Password",required:""})),l.a.createElement("div",{class:"checkbox mb-3"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me")),l.a.createElement("div",null,l.a.createElement("button",{class:"btn btn-lg btn-signup btn-trans",type:"submit"},"Create an account"))))}a(69);var C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={loading:!0},e.calculateRecipeNutrition=function(e){return e.ingredients.reduce((function(t,a){return{calories:t.calories+a.calories/e.number_of_portions,fat:t.fat+a.fat/e.number_of_portions,protein:t.protein+a.protein/e.number_of_portions,carbs:t.carbs+a.carbs/e.number_of_portions}}),{calories:0,fat:0,protein:0,carbs:0})},e.sanitizeIngredient=function(e){return e.quantity_unit.includes(e.title)?"".concat(e.quantity," ").concat(e.title):" ".concat(e.quantity," ").concat(e.quantity_unit,"  ").concat(e.title)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.recipe_id;g.a.get("".concat(h.API_URL,"/recipe/").concat(t),{withCredentials:!0}).then((function(t){e.setState({recipe:t.data,loading:!1})})).catch((function(e){}))}},{key:"render",value:function(){var e=this;if(this.state.loading)return l.a.createElement("div",null,l.a.createElement("p",null,"Loading"));var t=this.state.recipe,a=t.title,n=t.image,r=t.steps,c=t.ingredients,i=t.number_of_portions,s=t.type,o=this.calculateRecipeNutrition(this.state.recipe),m=o.calories,p=o.fat,d=o.protein,u=o.carbs;return console.log(this.calculateRecipeNutrition(this.state.recipe)),l.a.createElement("div",{className:"recipe-detail-div"},l.a.createElement("div",{className:"row recipe-detail-teaser"},l.a.createElement("div",{className:"col-6 img-div"},l.a.createElement("img",{src:n,alt:"recipe-img",className:"recipe-detail-img"})),l.a.createElement("div",{className:"col-6 title-div"},l.a.createElement("h1",{className:"recipe-title"},a),l.a.createElement("p",null,s),l.a.createElement("p",null,"Serves  ",l.a.createElement("b",null,i)))),l.a.createElement("div",{className:"col-12 recipe-detail-tabs"},l.a.createElement("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},l.a.createElement("li",{class:"nav-item",role:"presentation"},l.a.createElement("a",{class:"nav-link active recipe-detail-nav",id:"method-tab","data-toggle":"tab",href:"#method",role:"tab","aria-controls":"method","aria-selected":"true"},"Method")),l.a.createElement("li",{class:"nav-item",role:"presentation"},l.a.createElement("a",{class:"nav-link recipe-detail-nav",id:"nutrition-tab","data-toggle":"tab",href:"#nutrition",role:"tab","aria-controls":"nutrition","aria-selected":"false"},"Nutrition")),l.a.createElement("li",{class:"nav-item",role:"presentation"},l.a.createElement("a",{class:"nav-link recipe-detail-nav",id:"ingredients-tab","data-toggle":"tab",href:"#ingredients",role:"tab","aria-controls":"ingredients","aria-selected":"false"},"Ingredients"))),l.a.createElement("div",{class:"tab-content",id:"myTabContent"},l.a.createElement("div",{class:"tab-pane active tab-method",id:"method",role:"tabpanel","aria-labelledby":"method-tab"},l.a.createElement("p",{className:"method-par"},r)),l.a.createElement("div",{class:"tab-pane tab-nutrition",id:"nutrition",role:"tabpanel","aria-labelledby":"nutrition-tab"},l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"nutrition-tab-title"},"Nutrition Facts"),l.a.createElement("table",{class:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Nutrients"),l.a.createElement("th",{scope:"col"},"Amount Per Serving"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Calories"),l.a.createElement("td",null,m.toFixed(2)," kcal")),l.a.createElement("tr",null,l.a.createElement("td",null,"Fat"),l.a.createElement("td",null,p.toFixed(2)," g")),l.a.createElement("tr",null,l.a.createElement("td",null,"Protein"),l.a.createElement("td",null,d.toFixed(2)," g")),l.a.createElement("tr",null,l.a.createElement("td",null,"Carbs"),l.a.createElement("td",null,u.toFixed(2)," g")))))),l.a.createElement("div",{class:"tab-pane tab-ingredients",id:"ingredients",role:"tabpanel","aria-labelledby":"ingredients-tab"},l.a.createElement("h3",{className:"nutrition-tab-title"},"Recipe ingredients"),l.a.createElement("ul",{className:"ingredients-container"},c.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement(v.a,{class:"fa fa-apple",name:"apple",style:{color:"lightgray",fontSize:"13px"}}),e.sanitizeIngredient(t))})))))))}}]),a}(l.a.Component),O=a(33),R=a.n(O);function I(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header-teaser row"},l.a.createElement("div",{className:"text-teaser-div col-4"},l.a.createElement("h1",{className:"teaser-title"},"Quick and Easy Way ",l.a.createElement("br",null)," to Healthier Life"),l.a.createElement("p",{className:"teaser-par"},"Use our Meal Planning Tool ",l.a.createElement("br",null)," to Add Recipes to Your Meal Plan."),l.a.createElement(E.b,{to:"/login"},l.a.createElement("button",{className:"login-btn btn btn-lg"},"Join us"))),l.a.createElement("div",{className:"header-img-div col-3"},l.a.createElement("img",{src:R.a,alt:"background-img",className:"header-img"}))))}var x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={mealplans:[],filteredMealplans:[],loading:!0},e.loadMealplans=function(){g.a.get("".concat(h.API_URL,"/mealplans"),{withCredentials:!0}).then((function(t){console.log(t.data),e.setState({mealplans:t.data,loading:!1,filteredMealplans:t.data})})).catch((function(e){console.log(e)}))},e.deleteMealplan=function(t){g.a.delete("".concat(h.API_URL,"/mealplan/").concat(t),{withCredentials:!0}).then((function(t){e.loadMealplans()}))},e.filterMealplan=function(t){var a=t.target.value,n=e.state.mealplans.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));e.setState({filteredMealplans:n})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadMealplans()}},{key:"render",value:function(){var e=this;return this.state.loading?l.a.createElement("div",{class:"spinner-border text-warning",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")):l.a.createElement("div",{className:"mealplans-page-div"},l.a.createElement("div",{className:"mealplan-header"},l.a.createElement("h1",{className:"mealplan-basket-title"},"My Mealplans"),l.a.createElement("div",{class:"field"},l.a.createElement("div",{class:"control has-icons-left has-icons-right"},l.a.createElement("input",{class:"input is-rounded",name:"recipe",type:"text",onChange:this.filterMealplan,placeholder:"Search"}),l.a.createElement("span",{class:"icon is-left"},l.a.createElement(v.a,{class:"fa fa-search",name:"search",size:"1x",style:{color:"lightgrey"}}))))),l.a.createElement("div",{className:"all-mealplans-div"},this.state.filteredMealplans.map((function(t,a){return l.a.createElement("div",{key:a,class:"card recipe-card",style:{width:"18rem"}},l.a.createElement(E.b,{to:"/mealplan/".concat(t._id)},l.a.createElement("img",{src:t.recipes[0].image,class:"card-img-top",alt:"recipe-img"})),l.a.createElement("div",{class:"card-body"},l.a.createElement(E.b,{to:"/mealplan/".concat(t._id)},l.a.createElement("h5",{class:"card-title"},t.title))),l.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e.deleteMealplan(t._id)}},"Delete"))}))))}}]),a}(l.a.Component),U=a(34),L=(a(70),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={loading:!0},e.loadMealplan=function(t){g.a.get("".concat(h.API_URL,"/mealplan/").concat(t),{withCredentials:!0}).then((function(t){e.setState({mealplan:t.data,loading:!1})})).catch((function(e){console.log("Something went wrong",e)}))},e.updateShoppingList=function(t){var a=e.state.mealplan.shoppingList.map((function(e){if(e._id===t){var a=Object(U.a)({},e);return a.bought=!a.bought,a}return e}));g.a.put("".concat(h.API_URL,"/mealplan/").concat(e.state.mealplan._id,"/shopping_list"),{shoppingList:a},{withCredentials:!0}).then((function(t){e.setState({mealplan:t.data})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadMealplan(this.props.match.params.mealplan_id)}},{key:"render",value:function(){var e=this;return this.state.loading?l.a.createElement("div",{class:"spinner-border text-warning",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")):(console.log(this.state.mealplan),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,this.state.mealplan.title),l.a.createElement("div",{class:"row mealplan-tab"},l.a.createElement("div",{class:"col-3"},l.a.createElement("div",{class:"nav flex-column nav-pills",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},l.a.createElement("a",{class:"nav-link active mealplan-nav-link",id:"v-pills-home-tab","data-toggle":"pill",href:"#v-pills-home",role:"tab","aria-controls":"v-pills-home","aria-selected":"true"},"Shopping List"),l.a.createElement("a",{class:"nav-link mealplan-nav-link",id:"v-pills-profile-tab","data-toggle":"pill",href:"#v-pills-profile",role:"tab","aria-controls":"v-pills-profile","aria-selected":"false"},"Recipes"))),l.a.createElement("div",{class:"col-9"},l.a.createElement("div",{class:"tab-content",id:"v-pills-tabContent"},l.a.createElement("div",{class:"tab-pane fade show active",id:"v-pills-home",role:"tabpanel","aria-labelledby":"v-pills-home-tab"},l.a.createElement("ul",{className:"shoppinglist-container"},this.state.mealplan.shoppingList.map((function(t,a){return l.a.createElement("li",{key:a},l.a.createElement("input",{type:"checkbox",checked:t.bought,onChange:function(){e.updateShoppingList(t._id)}}),l.a.createElement("p",null,t.quantity,"g  ",t.title))})))),l.a.createElement("div",{class:"tab-pane fade",id:"v-pills-profile",role:"tabpanel","aria-labelledby":"v-pills-profile-tab"},l.a.createElement("div",{className:"recipes-tab"},this.state.mealplan.recipes.map((function(e,t){return l.a.createElement(E.b,{to:"/recipe/".concat(e._id),className:"mealplan-recipe-link"},l.a.createElement("div",{class:"card mealplan-tab-recipe",style:{width:"18rem"},key:t},l.a.createElement("img",{src:e.image,class:"card-img-top",alt:"recipe-img"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},e.title))))})))))))))}}]),a}(l.a.Component));function M(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"field"},l.a.createElement("div",{class:"control has-icons-left has-icons-right"},l.a.createElement("input",{class:"input is-rounded",name:"recipe",type:"text",onChange:e.onFilter,value:e.filter,placeholder:"Search"}),l.a.createElement("span",{class:"icon is-left"},l.a.createElement(v.a,{class:"fa fa-search",name:"search",size:"1x",style:{color:"lightgrey"}})))))}var j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={recipe:""},e.handleRecipeUpdate=function(t){t.preventDefault();var a=e.props.match.params.recipe_id;if(e.state.imageSource!==e.state.recipe.image){var n=t.target.image.files[0],l=new FormData;l.append("imageUrl",n),g.a.post("".concat(h.API_URL,"/upload"),l).then((function(t){e.updateRecipe(a,t.data.secure_url)}))}else e.updateRecipe(a,e.state.recipe.image)},e.updateRecipe=function(t,a){g.a.put("".concat(h.API_URL,"/recipe/").concat(t),{title:e.state.recipe.title,description:e.state.recipe.description,image:a,steps:e.state.recipe.steps,ingredients:e.state.recipe.ingredientText,number_of_portions:e.state.recipe.number_of_portions,type:e.state.recipe.type},{withCredentials:!0}).then((function(){e.props.onUpdate()})).then((function(){e.props.history.push("/home")}))},e.handleTitleChange=function(t){var a=JSON.parse(JSON.stringify(e.state.recipe));a.title=t.target.value,e.setState({recipe:a})},e.handleDescriptionChange=function(t){var a=JSON.parse(JSON.stringify(e.state.recipe));a.description=t.target.value,e.setState({recipe:a})},e.handleImageChange=function(t){var a=new FileReader;a.readAsDataURL(t.target.files[0]),a.onloadend=function(){e.setState({imageSource:a.result})}},e.handleStepsChange=function(t){var a=JSON.parse(JSON.stringify(e.state.recipe));a.steps=t.target.value,e.setState({recipe:a})},e.handleIngredientsChange=function(t){var a=JSON.parse(JSON.stringify(e.state.recipe));a.ingredientText=t.target.value,e.setState({recipe:a})},e.handlePortionsChange=function(t){var a=JSON.parse(JSON.stringify(e.state.recipe));a.number_of_portions=t.target.value,e.setState({recipe:a})},e.handleTypeChange=function(t){var a=JSON.parse(JSON.stringify(e.state.recipe));a.type=t.target.value,e.setState({recipe:a})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.recipe_id;g.a.get("".concat(h.API_URL,"/recipe/").concat(t),{withCredentials:!0}).then((function(t){e.setState({recipe:t.data,imageSource:t.data.image})}))}},{key:"render",value:function(){if(!this.state.recipe)return l.a.createElement("div",{class:"spinner-border text-warning",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading..."));if(!this.props.loggedInUser)return l.a.createElement("div",{className:"text-center"},l.a.createElement("p",null,"Please sign in."));var e=this.state.recipe,t=e.title,a=e.description,n=e.steps,r=e.type,c=e.number_of_portions,i=e.ingredientText;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"recipe-form"},l.a.createElement("form",{onSubmit:this.handleRecipeUpdate},l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"text",name:"title",class:"form-control",onChange:this.handleTitleChange,value:t})),l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"text",name:"description",class:"form-control",onChange:this.handleDescriptionChange,value:a})),l.a.createElement("div",{class:"form-group"},l.a.createElement("img",{src:this.state.imageSource,alt:"recipe-img"}),l.a.createElement("input",{type:"file",name:"image",class:"form-control",onChange:this.handleImageChange})),l.a.createElement("div",{class:"form-group"},l.a.createElement("textarea",{class:"form-control",name:"steps",rows:"5",onChange:this.handleStepsChange,value:n})),l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"text",name:"ingredients",class:"form-control",onChange:this.handleIngredientsChange,value:i})),l.a.createElement("div",{className:"type-portion-div"},l.a.createElement("select",{name:"type",className:"select-type",value:r,onChange:this.handleTypeChange},l.a.createElement("option",{disabled:!0,selected:!0,hidden:!0},"Meal type"),l.a.createElement("option",null,"Breakfast"),l.a.createElement("option",null,"Lunch"),l.a.createElement("option",null,"Dinner"),l.a.createElement("option",null,"Snack")),l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{type:"number",min:"0",name:"portions",class:"form-control",onChange:this.handlePortionsChange,value:c}))),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",class:"btn btn-success"},"Submit")))))}}]),a}(l.a.Component),A=(a(71),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={recipes:[],loading:!0},e.getRecipes=function(){g.a.get("".concat(h.API_URL,"/my-recipes"),{withCredentials:!0}).then((function(t){e.setState({recipes:t.data,loading:!1})})).catch((function(t){console.log(t),401===t.response.status&&e.props.history.push("/login")}))},e.deleteRecipe=function(t){g.a.delete("".concat(h.API_URL,"/recipe/").concat(t),{withCredentials:!0}).then((function(t){e.getRecipes()}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getRecipes()}},{key:"render",value:function(){var e=this;return this.state.loading?l.a.createElement("div",{class:"spinner-border text-warning",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")):this.props.loggedInUser?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-recipes-header"},l.a.createElement("h1",{className:"mealplan-basket-title"},"My recipes")),l.a.createElement("div",{className:"my-recipes-div"},this.state.recipes.map((function(t,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"card my-recipes-card",style:{width:"18rem"},key:a},l.a.createElement(E.b,{to:"/recipe/".concat(t._id),className:"my-recipes-recipe-title"},l.a.createElement("img",{src:t.image,class:"card-img-top",alt:"recipe-img"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},t.title))),l.a.createElement("button",{class:"btn recipe-btn",type:"submit"},l.a.createElement(E.b,{to:"/edit-recipe/".concat(t._id),style:{color:"white"}},l.a.createElement(v.a,{class:"fa fa-edit",name:"edit",style:{color:"white"}}))),l.a.createElement("button",{class:"btn recipe-btn",type:"submit",onClick:function(){e.deleteRecipe(t._id)}},l.a.createElement(v.a,{class:"fa fa-trash",name:"trash",style:{color:"white"}}))))})))):l.a.createElement("div",{className:"text-center"},l.a.createElement("p",null,"Please sign in."))}}]),a}(l.a.Component)),P=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={recipes:[],loggedInUser:null,filterText:"",mealplanBasket:[]},e.getRecipes=function(){g.a.get("".concat(h.API_URL,"/recipes")).then((function(t){e.setState({recipes:t.data,filteredRecipes:t.data})})).catch((function(t){401===t.response.status&&e.props.history.push("/login")}))},e.getUser=function(){g.a.get("".concat(h.API_URL,"/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})})).catch((function(t){401===t.response.status&&e.props.history.push("/login")}))},e.handleSignup=function(t){t.preventDefault();var a=t.target.username.value,n=t.target.email.value,l=t.target.password.value;g.a.post("".concat(h.API_URL,"/signup"),{username:a,email:n,password:l},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/home")}))}))},e.handleLogin=function(t){t.preventDefault();var a=t.target.email.value,n=t.target.password.value;g.a.post("".concat(h.API_URL,"/signin"),{email:a,password:n},{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/home")}))}))},e.handleLogout=function(){console.log(document.cookie),g.a.post("".concat(h.API_URL,"/logout"),{withCredentials:!0}).then((function(t){console.log(t),e.setState({loggedInUser:null},(function(){e.props.history.push("/login")}))}))},e.recipeCreated=function(t){e.setState({recipes:[].concat(Object(i.a)(e.state.recipes),[t])},(function(){e.props.history.push("/home")}))},e.handleAddToMealplan=function(t,a){t.preventDefault();var n=Object(i.a)(e.state.mealplanBasket);n.push(a),localStorage.setItem("currentMealplanBasket",JSON.stringify(n)),e.setState({mealplanBasket:n})},e.handleSaveMealplan=function(t){t.preventDefault();var a=t.target.mealplanName.value;g.a.post("".concat(h.API_URL,"/mealplan"),{title:a,recipes:e.state.mealplanBasket},{withCredentials:!0}).then((function(t){e.setState({mealplanBasket:[]}),localStorage.setItem("currentMealplanBasket",JSON.stringify([])),e.props.history.push("/mealplans")}))},e.handleFilterRecipes=function(t){var a=t.target.value;e.setState({filterText:a})},e.filterRecipes=function(){return e.state.recipes.filter((function(t){return t.title.toLowerCase().includes(e.state.filterText.toLowerCase())}))},e.handleDeleteRecipeFromMealplanBasket=function(t){var a=JSON.parse(localStorage.getItem("currentMealplanBasket")).filter((function(e){return e._id!==t._id}));localStorage.setItem("currentMealplanBasket",JSON.stringify(a)),e.setState({mealplanBasket:a})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({mealplanBasket:JSON.parse(localStorage.getItem("currentMealplanBasket"))||[]}),this.getRecipes(),this.state.loggedInUser||this.getUser()}},{key:"render",value:function(){var e=this,t=this.state.loggedInUser;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement(b,{loggedInUser:this.state.loggedInUser,onLogout:this.handleLogout})),l.a.createElement("div",{className:"home-div"},l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/"},l.a.createElement(d.a,{to:"/home"})),l.a.createElement(d.b,{exact:!0,path:"/home",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"filter-div"},l.a.createElement("h1",{className:"recipes-title"},"Recipes"),l.a.createElement(M,{filter:e.state.filterText,onFilter:e.handleFilterRecipes})),l.a.createElement(y,Object.assign({filteredRecipes:e.filterRecipes(),onAddToMealplan:e.handleAddToMealplan,showAddButton:!1},t))))}}),l.a.createElement(d.b,{path:"/mealplans",render:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(x,{loggedInUser:t}))}}),l.a.createElement(d.b,{path:"/create-recipe",render:function(a){return l.a.createElement("div",{className:"container"},l.a.createElement(S,Object.assign({loggedInUser:t,onRecipeCreated:e.recipeCreated},a)))}}),l.a.createElement(d.b,{path:"/recipe/:recipe_id",render:function(e){return l.a.createElement("div",{className:"container"},l.a.createElement(C,e))}}),l.a.createElement(d.b,{path:"/login",render:function(t){return l.a.createElement("div",{className:"forms container"},l.a.createElement(w,Object.assign({onLogin:e.handleLogin},t)),l.a.createElement(_,Object.assign({onSignup:e.handleSignup},t)))}}),l.a.createElement(d.b,{exact:!0,path:"/mealplan-basket",render:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{loggedInUser:t,mealplanBasket:e.state.mealplanBasket,onSaveMealplan:e.handleSaveMealplan,onDelete:e.handleDeleteRecipeFromMealplanBasket}))}}),l.a.createElement(d.b,{exact:!0,path:"/mealplan/:mealplan_id",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,Object.assign({loggedInUser:t},e)))}}),l.a.createElement(d.b,{exact:!0,path:"/edit-recipe/:recipe_id",render:function(a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,Object.assign({loggedInUser:t},a,{onUpdate:e.getRecipes})))}}),l.a.createElement(d.b,{path:"/my-recipes",render:function(e){return console.log(t),l.a.createElement("div",{className:"container"},l.a.createElement(A,Object.assign({loggedInUser:t},e)))}}))),l.a.createElement(k,null))}}]),a}(l.a.Component),D=Object(d.g)(P);c.a.render(l.a.createElement(E.a,null,l.a.createElement(D,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.58752cd6.chunk.js.map