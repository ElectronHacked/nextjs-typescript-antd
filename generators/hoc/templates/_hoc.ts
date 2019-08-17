import React, { FC, ComponentType } from 'react';

/**
 *
 * @param Component - the component that is passed into the HOC can be either a function component or class component.
 *
 * @see https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
 */

const <%= hocName %> = <P extends object>(Component: ComponentType<P>): FC<P> => (props: P) => {
  // Your logic comes up in here

  return <Component {...props} />;
};

export default <%= hocName %>;
