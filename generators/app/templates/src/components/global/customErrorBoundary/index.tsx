import React, { FC, ReactNode } from 'react';
import ErrorBoundary from 'react-error-boundary';
import CustomErrorBoundaryFallbackComponent from './fallbackComponent';
import './styles.scss';

interface IProps {
  children: ReactNode;
}

export const CustomErrorBoundary: FC<IProps> = ({ children }) => {
  return <ErrorBoundary FallbackComponent={CustomErrorBoundaryFallbackComponent}>{children}</ErrorBoundary>;
};

export default CustomErrorBoundary;
