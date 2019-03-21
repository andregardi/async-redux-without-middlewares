
# Asynchronous Redux Without Middlewares Middlewares Using ES2017



It is possible to handle asynchronous redux actions without middlewares and, with ES2017 async/await, we can do it in even more clear way.

### Should I do it?

I am not here to say that you shouldn't use thunk or saga. If you prefer, you can think of it as an exercise to help us to deepen our knowledge of redux and functional programming. Also,  we are going to do it all in a testable way.

### The project

We are going to create a simple React project to consume the GitHub API to search repositories by username. If you want to see how the final product looks like, visit the link below: 

[https://async-redux-without-middleware.herokuapp.com](https://async-redux-without-middleware.herokuapp.com)

## Let's code

We are going to use create-react-app CLI:

    npx create-react-app async-redux-without-middlewares
    cd async-redux-without-middlewares

Let's also install the dependencies

    npm install -s redux react-redux axios

### The http service

Services are created to separate the http requests from the business logic. On top of that, we are going to add an abstraction layer, exporting not the service object, but a function that generates the service object. This allows us to isolate the axios dependency helping us to test the service without having to actually call the http request.

**services/repos.js**

<iframe src="https://medium.com/media/4f0f3edc728178feb564cfe260dfb57d" frameborder=0></iframe>

### The action

**actions/repos.js**

<iframe src="https://medium.com/media/ae9f15da6ed6bc26574a6116c62d8d19" frameborder=0></iframe>

The exported function getReposByUsernameInjector is the one that is going to be used to connect() our main container. It will not be referenced, but executed, and its result will become a property of the component.

Receiving all dependencies of getReposByUsernameas parameters, isolates the function, allowing us to write tests without having to import the store or actually calling our service.

### Connecting 

In react, containers are components that connects to the redux state. For didactic reasons we are going to separate the connection from the component itself.

**components/Main.js**

<iframe src="https://medium.com/media/99a0b4cca184eb4ec3432ad44b4e7ddd" frameborder=0></iframe>

**containers/ConnectedMain.js**

<iframe src="https://medium.com/media/e10d08fcac9ceebf80af8bd438e97740" frameborder=0></iframe>

The second parameter of connect() is a function called mapDispatchToProps, which lets you create functions that dispatch when called, and pass the resulting object properties as props to your component.

If you want to learn more about actions dispatching, I really recommend reading this page from the redux documentation.
[**Connect: Dispatching Actions with mapDispatchToProps - React Redux**](https://react-redux.js.org/using-react-redux/connect-mapdispatch)

After connecting it all, the flow look like this:

![Click to expand](https://cdn-images-1.medium.com/max/2000/1*xuWBS5MA15mPe3jcU6ttKw.png)*Click to expand*

## How do I test it?

### The service

To test our service, we just need to call a custom object as the axios and expect that the get() function is called with the repos url.

**services/repos.test.js**

<iframe src="https://medium.com/media/a227bb8424fd664471e342e7b4b72cee" frameborder=0></iframe>

### The action

To test our action, we will setup a custom dispatch() and service to simulate the four possibilities: success, empty repos, username not found and connection error.

**actions/repos.test.js**

<iframe src="https://medium.com/media/bb253f32bf6d7e269243a2cde017f319" frameborder=0></iframe>

### The container

Because we separate our connection container from the component, it is easier to test it separately. 

<iframe src="https://medium.com/media/961be7f7aac358b88cccd50f858831fe" frameborder=0></iframe>

## The other components

There are more code files to cover all the project. But those are simple implementation of basic React. Comment it now would be out of context, besides making this article too long. If you want to explore more details, here is the GitHub repository:
[**andregardi/async-redux-without-middlewares**
*Contribute to andregardi/async-redux-without-middlewares development by creating an account on GitHub.*github.com](https://github.com/andregardi/async-redux-without-middlewares)

**Note**: I added, to the final project,@material-ui/core and @material-ui/icons for visual components and expressto host static servers on Heroku.
