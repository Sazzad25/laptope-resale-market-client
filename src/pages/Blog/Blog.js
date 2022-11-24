import React from "react";

const Blog = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
      <div className="border-4 ">
        <h2 className="text-2xl">
          Q.1 What are the different ways to manage a state in a React
          application?
        </h2>
        <p>
          State represents
          the value of a dynamic properties of a React component at a given
          instance. React provides a dynamic data store for each component. The
          internal data represents the state of a React component and can be
          accessed using this. state member variable of the component.Therefore,
          this article will clearly discuss the types of states such as Logical,
          Server, Form, Navigation, and Browser and the main ways to handle
          them. Also, it will help 25.12% of the developers who would like to
          learn React in the future.
        </p>
      </div>
      <div className="border-4 ">
        <h2 className="text-2xl">Q.2 How does prototypical inheritance work?</h2>
        <p>
          Prototypical inheritance allows us to reuse the properties or methods
          from one JavaScript object to another through a reference pointer
          function. All JavaScript objects inherit properties and methods from a
          prototype: Date objects inherit from Date. The Prototypal Inheritance
          is a feature in javascript used to add methods and properties in
          objects. It is a method by which an object can inherit the properties
          and methods of another object. Traditionally, in order to get and set
          the (Prototype) of an object, we use Object. getPrototypeOf and
          Object.
        </p>
      </div>
      <div className="border-4 ">
        <h2 className="text-2xl">Q.3 What is a unit test? Why should we write unit tests?</h2>
        <p>
          A unit test is a way of testing a unit - the smallest piece of code
          that can be logically isolated in a system. In most programming
          languages, that is a function, a subroutine, a method or property. The
          isolated part of the definition is important.
        </p>
        <p>
          They enable you to catch bugs early in the development process.
          Automated unit tests help a great deal with regression testing. They
          detect code smells in your codebase. For example, if you're having a
          hard time writing unit tests for a piece of code, it might be a sign
          that your function is too complex.
        </p>
      </div>
      <div className="border-4 ">
        <h2 className="text-2xl">Q.4 React vs. Angular vs. Vue?</h2>
        <p>
          
          <h3 className="text-2xl"> React </h3> React, interestingly, combines the UI and behavior of
          components. For instance, here is the code to create a hello world
          component in React. In React, the same part of the code is responsible
          for creating a UI element and dictating its behavior.
        </p>
        <p>
        
          <h3 className="text-2xl">Angular </h3>In Angular, components are referred to as directives.
          Directives are just markers on DOM elements, which Angular can track
          and attach specific behavior too. Therefore, Angular separates the UI
          part of components as attributes of HTML tags, and their behaviors in
          the form of JavaScript code. This is what sets it apart when looking
          at Angular vs React.
        </p>
        <p>
          <h3 className="text-2xl"> Vue </h3>When looking into Vue vs React, in Vue, UI and behavior are also
          a part of components, which makes things more intuitive. Also, Vue is
          highly customizable, which allows you to combine the UI and behavior
          of components from within a script. Further, you can also use
          pre-processors in Vue rather than CSS, which is a great functionality.
          Vue is great when it comes to integration with other libraries, like
          Bootstrap.
        </p>
      </div>
    </div>
  );
};

export default Blog;
