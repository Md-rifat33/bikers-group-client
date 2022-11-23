import React from 'react'

const Blogs = () => {
  return (
    <div className="flex flex-col w-full border-opacity-50 mt-8">
      <div className="w-3/4 mx-auto ">
        {/* Blog 1 */}
        <div className="grid p-20 card bg-base-300 rounded-box place-items-center mb-8">
          <h1 className="text-2xl font-semibold">
            Qus : What are the different ways to manage a state in a react
            application ?
          </h1>
          <p className="mt-6">
            <span className="font-bold">Ans: </span>
            The Four Kinds of React State to Manage Local state. Global state.
            Server state. URL state. State represents the value of a dynamic
            properties of a React component at a given instance. React provides
            a dynamic data store for each component. The internal data
            represents the state of a React component and can be accessed using
            this. state member variable of the component.
          </p>
        </div>
        {/* Blog 2 */}
        <div className="grid p-20 card bg-base-300 rounded-box place-items-center mb-8">
          <h1 className="text-2xl font-semibold">
            Qus : How does prototypical inheritance work?
          </h1>
          <p className="mt-6">
            <span className="font-bold">Ans: </span>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
        {/* Blog 3 */}
        <div className="grid p-20 card bg-base-300 rounded-box place-items-center mb-8">
          <h1 className="text-2xl font-semibold">
            Qus : What is a unit test? Why should we write unit tests?
          </h1>
          <p className="mt-6">
            <span className="font-bold">Ans: </span>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
        {/* Blog 4 */}
        <div className="grid p-20 card bg-base-300 rounded-box place-items-center mb-8">
          <h1 className="text-2xl font-semibold">
            Qus : React vs Angular vs Vue?
          </h1>
          <p className="mt-6">
            <span className="font-bold">Ans: </span>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blogs
