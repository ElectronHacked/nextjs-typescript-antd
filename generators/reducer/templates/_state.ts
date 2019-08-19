export type <%= stateShortName %>Errable =
  | 'initializingError'
  /* new-errable-goes-here */;

export type <%= stateShortName %>Booleanable =
  | 'isInitializing'
  /* new-booleanable-goes-here */;

export type <%= stateShortName %>Successible =
  | 'intiializeSuccess'
  /* new-successible-goes-here */;

export interface <%= stateName %>{

  //#region Doables
  readonly errable?: { [key in <%= stateShortName %>Errable]?: string };
  readonly booleanable?: { [key in <%= stateShortName %>Booleanable]?: boolean };
  readonly successible?: { [key in <%= stateShortName %>Successible]?: string };
  //#endregion
}
