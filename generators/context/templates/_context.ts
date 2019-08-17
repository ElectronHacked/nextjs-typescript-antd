import { createContext } from 'react';

interface I<%= contextName %> {}

export const default<%= contextName %>: I<%= contextName %> = {

};

export const <%= contextName %> = createContext<I<%= contextName %>>(default<%= contextName %>);