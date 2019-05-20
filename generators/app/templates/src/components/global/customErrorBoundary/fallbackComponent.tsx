import React, { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Icon, Button } from 'antd';
import Router from 'next/router';
import './styles.scss';

const errorBoundaryErrorHandler = ({ error, componentStack }: FallbackProps) => {
  // Do something with the error
  // E.g. log to an error logging client here
  console.log('CustomErrorBoundary error :', error.message);
  console.log('CustomErrorBoundary componentStack :', componentStack);
};

const CustomErrorBoundaryFallbackComponent: FC<FallbackProps> = props => {
  errorBoundaryErrorHandler(props);

  return (
    <div className="custom-error-boundary">
      <h2 className="oops">Oops!</h2>
      <Icon type="frown" theme="twoTone" twoToneColor="#ffa800" className="error-icon" />
      <h3 className="primary-message">Aaaah! Something went wrong!</h3>
      <p className="secondary-message">
        Brace yourself till we get the error fixed. You may also refresh the page or try again later
      </p>

      <Button type="primary" onClick={() => Router.push('/')} className="take-me-home">
        TAKE ME HOME
      </Button>
    </div>
  );
};

export default CustomErrorBoundaryFallbackComponent;
