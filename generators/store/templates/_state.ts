export type <%= stateShortName %>Errable =
  | '__errable__' // Remove this. It's just a placeholder
  /* new-errable-goes-here */;

export type <%= stateShortName %>Booleanable =
  | '__booleanable__' // Remove this. It's just a placeholder
  /* new-booleanable-goes-here */;

export type <%= stateShortName %>Successible =
  | '__successible__' // Remove this. It's just a placeholder
  /* new-successible-goes-here */;

export interface <%= stateName %>{

  //#region Doables
  readonly errable?: { [key in <%= stateShortName %>Errable]?: string };
  readonly booleanable?: { [key in <%= stateShortName %>Booleanable]?: boolean };
  readonly successible?: { [key in <%= stateShortName %>Successible]?: string };
  //#endregion
}
