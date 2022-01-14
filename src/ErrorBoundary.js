import React from "react";
import { error } from "next/dist/build/output/log";

function MyElement() {
  return <div>MyElement here </div>;
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error?.message, status: error?.status };
  }

  render() {
    function addExtraProps(Component, extraProps) {
      return <Component.type {...Component.props} {...extraProps} />;
    }

    if (this.state.hasError) {
      return addExtraProps(this.props.fallback, {
        errorMessage: this.state.message,
        errorStatus: this.state.status,
      });
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

// https://codesandbox.io/s/zk469wp6jp

//

// import React from "react";
//
// function MyElement() {
//   return <div>MyElement here </div>;
// }
//
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//
//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true, message: error?.message, status: error?.status };
//   }
//
//   render() {
//     if (this.state.hasError) {
//       const myElement = this.props.fallback;
//       return (
//         <>
//           <div>myElement:</div>
//           <br />
//           {myElement}
//           <MyElement />
//           {MyElement()}
//         </>
//       );
//       return (
//         <h1>
//           Something went wrong. {this.state?.message} : {this.state?.status}
//         </h1>
//       );
//     }
//     return this.props.children;
//   }
// }
//
// export default ErrorBoundary;
