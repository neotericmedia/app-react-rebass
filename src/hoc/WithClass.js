import React from 'react';

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;




// const WithClass = (props) => {
//   return <div className={props.className}>{props.children}</div>;
// };

// export default WithClass;
