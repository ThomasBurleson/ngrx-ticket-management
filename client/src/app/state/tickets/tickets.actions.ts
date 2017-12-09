import {Action} from '@ngrx/store';
import {Ticket} from '../../models/ticket';

  export type TicketAction = {
    type : string,
    data?: any
  };

  export const enum TicketActionTypes {
    FILTER   = '[tickets] filter',
    LOADED   = '[tickets] loaded',
    SAVED    = '[ticket] saved',
    SELECTED = '[ticket] selected',

    LOADALL  = '[tickets] load',
    SAVE     = '[ticket] save',
    COMPLETE = '[ticket] complete',
    ASSIGN   = '[ticket] assign',
    CREATE   = '[ticket] create'
  }

  export class TicketsFilter {
    constructor (public filterBy : string, public showAll = true){ }
  }

  // ***************************************************************
  // Request 'Actions'
  // ***************************************************************

  export class LoadAllTicketsAction implements Action {
    readonly type = TicketActionTypes.LOADALL;
  }

  export class FilterTicketsAction implements Action {
    readonly type = TicketActionTypes.FILTER;
    constructor(public data: TicketsFilter) { }
  }

  export class CompleteTicketAction implements Action {
    readonly type = TicketActionTypes.COMPLETE;
    constructor(public data: Ticket) { }
  }

  export class SaveTicketAction implements Action {
    readonly type = TicketActionTypes.SAVE;
    constructor(public data: Ticket) { }
  }

  export class AssignUserAction implements Action {
    readonly type = TicketActionTypes.ASSIGN;
    constructor(public data: Ticket) { }
  }

  // ***************************************************************
  // Document 'Action'
  // ***************************************************************

  export class TicketsLoadedAction implements Action {
    readonly type = TicketActionTypes.LOADED;
    constructor(public data: Array<Ticket>) { }
  }

  export class TicketSavedAction implements Action {
    readonly type = TicketActionTypes.SAVED;
    constructor(public data: Ticket) { }
  }

  export class TicketSelectedAction implements Action {
    readonly type = TicketActionTypes.SELECTED;
    constructor(public data: string) { }
  }
