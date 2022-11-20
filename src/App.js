import React from "react";
import "./app.css";

const App = () => {
  return (
    <div className="main-container">
      <h1 className="react-head">What Is React</h1>
      <h3>
        React is a javascript library developed by facebook in 2010, which helps
        to build beautiful user interfaces.
        <hr />
      </h3>
      <h1 className="react-head">SPA VS MPA</h1>

      <h2>
        SPA
        <hr />
      </h2>
      <h3>
        SPA stands for single page application. SPA is a web application that
        does not use the default method of loading new pages completely. If you
        clicked on services section your page will not change. your view of the
        application will change just like css property display none and display
        block.
      </h3>

      <h2>
        MPA
        <hr />
      </h2>
      <h3>
        MPA stands for multiple page application. It render each time for a new
        page from the server in the browser. They're perfect for applications
        larger than SPA, and due to the amount of content, they have different
        levels of UI. MPAs secures each page to its core. Therefore, it takes
        more time and effort to maintain the security; hence, page loading time
        is more. SPAs secure endpoints faster, but the security level is low.
      </h3>

      <h2>
        Framework vs Library
        <hr />
      </h2>
      <h3>
        Library: is a set of reusable functions used by computer programs.
      </h3>
      <h3>
        Framework: is a piece of code that dictates how the project should be
        structured and run
      </h3>
      <h3>
        Library: give you tool to work with your application. you can change it
        if you don't like For Example: Bootstrap is a css library you can also
        change it and can use materialize css.
      </h3>

      <h3>
        Framework: it's like the city. if you want to live in the city you have
        to work according to it's rules. Angular is a javascript framework.
      </h3>

      <h2>
        Angular vs React
        <hr />
      </h2>
      <h3>
        React is a javacsript library where as the angular is a frontend
        framwork.
      </h3>
      <h3>Angular</h3>
      <h3>
        Angular is a full framwork with all the tooling and best practices
        designd on top of it. Angular is hard to learn as compare to react and
        once you laern angular you should know everything associated to
        typescript, MVC...
      </h3>
      <h2>React</h2>
      <h3>
        React is just a small library that you would need while making an app.
        React is easy to learn but you have a little bit understanding in HTML
        CSS and JAVACSRIPT that how it works and how it flows.
      </h3>

      <h2>
        DOM vs VIRTUAL DOM
        <hr />
      </h2>
      <h3>DOM</h3>
      <h3>
        The Document Object Model (DOM) is a programming interface for
        HTML(HyperText Markup Language) and XML(Extensible markup language)
        documents. It defines the logical structure of documents and the way a
        document is accessed and manipulated.
      </h3>
      <h3>VIRTUAL DOM</h3>
      <h3>
        Virtual DOM is nothing but a strategy that React uses to optimize the
        performance of an application. A virtual DOM is a lightweight JavaScript
        that represents the Document Object Model (DOM) used in declarative
        web frameworks such as React, Vue. js. Updating the virtual DOM
        is comparatively faster than updating the actual DOM (via JavaScript).
      </h3>

      <h2>One way data binding vs two way data binding.</h2>
      <h3>In one-way data binding information flows in only one direction, and is when the information is displayed, but not updated. In two-way data binding information flows in both directions, and is used in situations where the information needs to be updated. They each have their uses, but most applications use both.</h3>




    </div>
  );
};

export default App;
