(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(54)},30:function(e,t,a){},31:function(e,t,a){},32:function(e){e.exports={questionsList:[{question:"What does this CSS do and why is it useful in responsive design? * {box-sizing: border-box;}",categories:["CSS","RESPONSIVE"],answer:"It includes the padding and border in width and height of all elements.  If we set a width on an element, for instance 25%, we can add border or padding while ensuring it remains constant at 25%."},{question:"What is the basic idea behind CSS? (one sentence)",categories:["CSS"],answer:"In CSS you can use a selector to target an HTML element in the DOM (Document Object Model) and then apply a variety of attributes to that element to change the way it is displayed on the page."},{question:"What are the three components of a hexadecimal color?  What is the lowest hexadecimal value and what color does it represent?",categories:["CSS"],answer:"A hexadecimal color has three components - red, green, and blue.  Two hexadecimal digits represent each component from 00 - FF.  #000000 is the lowest value and represents black."},{question:"Explain CSS variable cascading and why it is useful.",categories:["CSS"],answer:"In CSS a variable is available for use in any elements nested within the element it was created in.  This effect is known as cascading.  CSS variables are often created in the :root element so they are available throughout the page."},{question:"Explain the difference between a browser fallback and a variable fallback.",categories:["CSS"],answer:"You can attach fallback values to CSS variables that they revert to if the initial value is invalid.  For instance: {background-color: var(--background-color, black)}.  When a browser parses your CSS it ignores any properties it does not support.  IE does not support variables.  A browser fallback is providing a more supported value immediately before your declaration, {background-color: black}, so the browser can fall back on it."},{question:"Explain the difference between margin and padding.",categories:["CSS"],answer:"Padding is the distance between an element's content and its border.  Margin is the distance between an element's border and other content."},{question:"Explain the float property.",categories:["CSS"],answer:"Floating elements are removed from the normal flow of a document. They are pushed to the left or right of their parent element."},{question:"What does {font-size: 2em} mean?",categories:["CSS"],answer:"em are relative size units.  If the default size on the page is 12px then 2em corresponds to 24px."},{question:"What is a psuedo-class?",categories:["CSS"],answer:"A psuedo-class is a specific keyword that can be added to a selector in order to select a specific state of an element.  For example we can apply the hover psuedo-class to change the CSS rules when the mouse hovers over an element."},{question:"Explain the differences between relative, absolute, and fixed positioning",categories:["CSS"],answer:"UNANSWERED"},{question:"Explain how keyframes animations work.",categories:["CSS"],answer:"A keyframes animation takes one or more properties and transitions it from a starting to end value over a set period of time.  For example we can change the background from yellow to blue in 3s.  Multiple properties "},{question:"Explain how cubic-bezier curves and the cubic bezier function work.",categories:["CSS"],answer:""},{question:"What is the difference between the container and container-fluid classes in Bootstrap?",categories:["CSS","BOOTSTRAP"],answer:"The container class is intentionally not 100% width. It is different fixed widths depending on the width of the viewport. Container-fluid adjusts itself to the full width of the screen."},{question:"In a responsive navigation bar give an example of how you might set margin and font-size for <li> elements.",categories:["CSS","RESPONSIVE"],answer:"{margin: 0 2vw; font-size: 3vh;} is a clean responsive design."},{question:"How do you overwrite default CSS properties in React bootstrap classes?",categories:["REACT"],answer:"You can use inline CSS in the element itself.  Applying a default class will not work as the React Bootstrap class takes precedence."},{question:"",categories:[],answer:""},{question:"",categories:[],answer:""},{question:"",categories:[],answer:""},{question:"",categories:[],answer:""},{question:"PLACEHOLDER",categories:["=============================== JAVASCRIPT QUESTIONS ==============================================="],answer:""},{question:"How do you return the nth character in a string variable?",categories:["JAVASCRIPT"],answer:"With bracket notation.  For instance varName[0] would return the first character."},{question:"Explain string immutability in JavaScript.",categories:["JAVASCRIPT"],answer:"Individual characters in a string literal cannot be altered.  For instance the first character in a string can't be re-assigned.  However you can re-assign the value of a string variable by assigning it to a new string."},{question:"What 4 array methods add / remove values from the beginning and end of arrays? Do these methods manipulate the original object or return a new object?",categories:["JAVASCRIPT"],answer:".push adds a value to the end, .pop removes a value from the end, .shift removes a value from the beginning, and .unshift adds a value to the beginning.  All of these methods manipulate the original array."},{question:"Explain the concept of scope.",categories:["JAVASCRIPT"],answer:"Scope refers to the visibility of variables - or the scope of a variable is where you can access it. Variables which are defined outside of a function block have Global scope."},{question:"In a function body what takes precedence - local or global scope?",categories:["JAVASCRIPT"],answer:"Local scope takes precedence. If two variables share the same name the function will call the local one."},{question:"What is the difference between the comparison operator and the strict comparison operator?",categories:["JAVASCRIPT"],answer:"The comparison operator (==) uses type coercion to attempt to convert values to a common type before comparison.  The strict comparison operator (===) doesn't do this and returns false if the compared values have different types."},{question:"Name 3 ways you can access an object's property.  Let's say obj = {'dog': 'golden retriever'};",categories:["JAVASCRIPT"],answer:"You can use dot notation: obj.dog, bracket notation: obj['dog'], and finally using a variable: var animal = 'dog'; obj[animal];"},{question:"How do you do delete a property from an object?  Lets use obj = {'dog': 'golden retriever'};",categories:["JAVASCRIPT"],answer:"delete obj.dog;"},{question:"What method can you call to test if an object has a specific property?",categories:["JAVASCRIPT"],answer:"obj.hasOwnProperty(propname)"},{question:"What is the for loop syntax in JS?",categories:["JAVASCRIPT"],answer:"for (var i=0; i<5, i++) {\n   console.log(i);\n}"},{question:"Explain how the ternary operator works",categories:["JAVASCRIPT"],answer:"The ternary operator evaluates a conditional, then performs one action if it's true and another if it's false.  It's shorthand syntax for a simple if-else block.  You can also chain them together to evaluate multiple conditions."},{question:"What are the differences in scope between var and let?",categories:["JAVASCRIPT"],answer:"Var has global scope is declared outside a function - or locally if inside a function.  Let's scope is limited to the block, expression, or statement it's declared in.  "},{question:"Can you mutate variables declared with const?",categories:["JAVASCRIPT"],answer:"Yes, for instance you can mutate individual values in an array declared with const.  You cannot, however, reassign a variable declared with const."},{question:"Write an arrow function with no function body",categories:["JAVASCRIPT"],answer:"const myFunc = () => 'value'"},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"",categories:["JAVASCRIPT"],answer:""},{question:"PLACEHOLDER",categories:["=============================== REACT QUESTIONS ==============================================="],answer:""},{question:"How do you pass an event handler from a class component to a stateless component?",categories:["REACT"],answer:"Pass it in as props to the stateless component, then "},{question:"How do you add a package to a create-react app?",categories:["REACT"],answer:"1. npm install --save font-awesome 2. Add import 'font-awesome/css/font-awesome.min.css' to the index.js file"},{question:"Name the 3 basic exports from react-bootstrap.",categories:["REACT"],answer:"<Container>, <Row>, <Col> are exported as stateless componenets. "},{question:"How do you create a fluid Container in react-bootstrap?  What about an xs column that spans 6/12 possible columns?",categories:["REACT"],answer:"<Container fluid={true}></Container>.  <Col xs={6}></Col>"},{question:"What is a higher order component in React?",categories:["REACT"],answer:"A higher-order component is a function that takes a component and returns a new component."},{question:"What attribute do you add to a react <Col> element to make it auto-size to fit the size of its content?",categories:["REACT"],answer:"<Col xs='auto'></Col>"},{question:"What are the three steps to deploying a react-app with GH pages? ",categories:["REACT"],answer:"Add a homepage URL to the package.json file, install the gh-pages packag with npm, and add predeploy: npm run build and deploy: gh-pages-d build to the scripts object in the package.json file."},{question:"",categories:[],answer:""},{question:"",categories:[],answer:""},{question:"",categories:[],answer:""},{question:"",categories:[],answer:""},{question:"",categories:[],answer:""},{question:"",categories:[],answer:""},{question:"PLACEHOLDER",categories:["=============================== Node.js QUESTIONS =============================================="],answer:""},{question:"What is node.js in one sentence?",categories:["NODE.JS"],answer:"Node.js is a JavaScript tool that allows developers to write backend (server-side) programs in JavaScript"},{question:"What is Express (hint: module)",categories:["NODE.JS"],answer:"Express is a module often used with node. Express runs between the server created by Node.js and the frontend pages of a web application. Express also handles an application's routing. Routing directs users to the correct page based on their interaction with the application"},{question:"What does the following Express method do? app.listen(port)",categories:["NODE.JS","EXPRESS"],answer:"It tells your server to listen on a given port, putting it in running state."},{question:"Explain each part of this working Express server app.get('/', (req, res) => {res.send('Hello Express');});",categories:["NODE.JS","EXPRESS"],answer:"get is an HTTP method. The arguments to get are a relative file path on the server, and a handler function that takes the form: function(req, res). When a user makes a GET request to root, the handler function will be called and serve the response string: Hello Express."},{question:"What response method should we use to serve an HTML file in response to an HTTP GET request?  What global variable might be helpful as an argument?",categories:["NODE.JS","EXPRESS"],answer:"The res.sendFile() method in the handler.  Using a global variable like __dirname is helpful in constructing an absolute file path. Example:     app.get('/', (req, res) => {res.sendFile(__dirname + '/views/index.html');});"},{question:"What are some examples of static assets?",categories:["NODE.JS","EXPRESS"],answer:"Images, scripts and styles are static assets.  Middleware functions can add static assets to route handlers."},{question:"What does the following middleware do?  What does the absence of the first argument (path) imply? \n app.use(express.static(__dirname + '/public'));",categories:["NODE.JS","EXPRESS"],answer:"The middleware function express.static loads the static asses in the __dirname + '/public' folder on a request.  The absence of path as the first argument in app.use means it will executer for every request - not just for one API endpoint."},{question:"What does REST API stand for?  How does it transfer data?",categories:["NODE.JS","EXPRESS"],answer:"Rest stands for REpresentational State Transfer.  They're useful because the client doesn't need any details about the server.  To transfer data the client needs to know the endpoint (url) and the action it wants to perform (get, req, etc.)"},{question:"How would you write a REST API using Express to serve the object: {'message': 'I love these flashcards!'} at the endpoint /json?",categories:["NODE.JS","EXPRESS"],answer:"app.get('/json', (req, res) {\n   res.json({'message': 'I love these flashcards!'})\n});"},{question:"Is it safe to store private data in the .env file? How do you access a variable from this file in the app?  It's a shell file - what does this mean for variable declarations?",categories:["NODE.JS","EXPRESS"],answer:"Yes - the .env file is hidden and  only accessbile to you - it's useful for API keys and config options.  You access a variable with this syntax: process.env.VAR_NAME.  Shell files don't allow spaces in variable declarations: MY_VAR=5"},{question:"What are the three parameters to a middleware function?",categories:["NODE.JS","EXPRESS"],answer:"the request object, the response object, and the next function in the application\u2019s request-response cycle"},{question:"What happens when a middleware function doesn't call next()?",categories:["NODE.JS","EXPRESS"],answer:"If the middleware function doesn't end the request-response cycle it must call next() otherwise it will be left hanging.  A middleware function that ends the cycle does not need to call next."},{question:"What happens when you mount the following middleware function on a route? function(req, res, next) {\n   console.log(I'm a middleware...');\n   next();\n}",categories:["NODE.JS","EXPRESS"],answer:"When a request matches the route, it displays the string \u201cI\u2019m a middleware\u2026\u201d. Then it executes the next function in the stack."},{question:"What's the advantage of chaining middleware?",categories:["NODE.JS","EXPRESS"],answer:"Chaining middleware splits operations into smaller chunks which creates more reusable code and better app structure.  You can also perform data validation steps and if neceessary block the execution of the current chain and pass control to functions specifically designed to handle errors."},{question:"What are API route parameters?  Where can you access their values in a middleware function?  Write a route parameter that accepts a userID parameter.",categories:["NODE.JS","EXPRESS"],answer:"Route parameters are named segments of the URL, delimited by slashes (/). Each segment captures the value of the part of the URL which matches its position. The captured values can be found in the req.params object. path: /user/:userID/ request: /user/546, response: {userId: '546'}"},{question:"What does chaining multiple verb handlers on a route path mean?",categories:["NODE.JS","EXPRESS"],answer:"We can chain multiple handlers to one route using the following syntax: app.route(path).get(handler).post(handler).  This creates more concise code by attaching a GET and POST handler to one path, rather than two separate route + get and route + post functions."},{question:"What syntax does an API endpoint use to receive query parameter input?",categories:["NODE.JS","EXPRESS"],answer:"The query string, after the endpoint, is delimited by a question mark (?), and includes field=value couples. Each couple is separated by an ampersand (&)."},{question:"What is the POST method?",categories:["NODE.JS","EXPRESS"],answer:"POST is the default method used to send client data with HTML forms. In the REST convention POST is used to send data to create new items in the database (a new user, or a new blog post)"},{question:"",categories:["NODE.JS","EXPRESS"],answer:""},{question:"",categories:["NODE.JS","EXPRESS"],answer:""},{question:"",categories:["NODE.JS","EXPRESS"],answer:""},{question:"",categories:["NODE.JS","EXPRESS"],answer:""},{question:"",categories:["NODE.JS","EXPRESS"],answer:""},{question:"",categories:["NODE.JS","EXPRESS"],answer:""}]}},54:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(15),i=a.n(o),r=(a(30),a(16)),c=a(17),l=a(23),u=a(18),h=a(4),d=a(22),p=a(21),w=(a(31),a(19)),g=a.n(w),m=a(8),f=a.n(m),S=a(6),b=a.n(S),E=a(20),v=a.n(E),q=a(32);q.questionsList=q.questionsList.filter(function(e){return""!==e.question&&"PLACEHOLDER"!==e.question});var y=Object(p.a)(new Set(function e(t){return t.reduce(function(t,a){return t.concat(Array.isArray(a)?e(a):a)},[])}(q.questionsList.map(function(e){return e.categories})))),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={question:"Welcome to my flashcards application!  Happy learning \ud83d\ude43",answer:"No answer this time!",selectedTopics:y,questionsList:q.questionsList},a.nextQuestion=a.nextQuestion.bind(Object(h.a)(a)),a.removeTopic=a.removeTopic.bind(Object(h.a)(a)),a.reset=a.reset.bind(Object(h.a)(a)),a.selectSingleTopic=a.selectSingleTopic.bind(Object(h.a)(a)),a.showAnswer=a.showAnswer.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"nextQuestion",value:function(){if(0!==this.state.questionsList.length){var e=Math.floor(Math.random()*this.state.questionsList.length);this.setState({question:this.state.questionsList[e].question,answer:this.state.questionsList[e].answer})}else this.setState({question:"No topics are selected.  Please choose one or hit reset \ud83d\ude0e"})}},{key:"showAnswer",value:function(e){this.setState({question:this.state.answer}),e.stopPropagation()}},{key:"removeTopic",value:function(e){var t=e.target.id,a=this.state.selectedTopics.filter(function(e){return e!==t}),s=this.state.questionsList.filter(function(e){return!e.categories.includes(t)});this.setState({selectedTopics:a,questionsList:s}),e.stopPropagation()}},{key:"reset",value:function(){this.setState({question:"Welcome to my flashcards application!  Happy learning \ud83d\ude43",answer:"No answer this time!",selectedTopics:y,questionsList:q.questionsList})}},{key:"selectSingleTopic",value:function(e){var t=e.target.innerText,a=this.state.questionsList.filter(function(e){return e.categories.includes(t)});this.setState({selectedTopics:[t],questionsList:a})}},{key:"render",value:function(){return n.a.createElement(g.a,{className:"App",fluid:!0},n.a.createElement(v.a,null),n.a.createElement(A,{className:"topics",selectedTopics:this.state.selectedTopics,removeTopic:this.removeTopic,selectSingleTopic:this.selectSingleTopic}),n.a.createElement(f.a,{className:"row2"},n.a.createElement(C,{className:"flashCard",question:this.state.question,nextQuestion:this.nextQuestion})),n.a.createElement(f.a,{className:"row3"},n.a.createElement(b.a,{xs:"auto",className:"button-sml"},"Choose topics"),n.a.createElement(b.a,{xs:"auto",className:"button-sml",onClick:this.nextQuestion},"Next question"),n.a.createElement(b.a,{xs:"auto",className:"button-sml",onClick:this.showAnswer},"Show answer")),n.a.createElement(f.a,{className:"row4"},n.a.createElement(b.a,{xs:"auto",className:"button-lg",style:{paddingLeft:"25px",paddingRight:"25px"},onClick:this.reset},"Reset")))}}]),t}(n.a.Component),A=function(e){var t=e.selectedTopics.map(function(t){return n.a.createElement(b.a,{xs:"auto",className:"btn-topics",onClick:e.selectSingleTopic},t,n.a.createElement("i",{className:"fa fa-times",id:t,onClick:e.removeTopic}))});return n.a.createElement(f.a,{className:"row1"},t)},C=function(e){return n.a.createElement(b.a,{xs:"auto",style:{maxWidth:"70vw"},className:"flashCard",onClick:e.nextQuestion},e.question)},R=T;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52),a(53);i.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.3eb12b54.chunk.js.map