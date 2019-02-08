declare module 'next/router' {
  export interface INextRouter {
    route: string;
    asPath: string;
    pathname: string;
    query: Object;
    onRouteChangeStart?: (url: string) => void;
    onRouteChangeComplete?: (url: string) => void;
    onRouteChangeError?: (err: Error & {cancelled: boolean}, url: string) => void;
    push(url: string, as?: string): Promise<boolean>;
    replace(url: string, as?: string): Promise<boolean>;
  }
}
