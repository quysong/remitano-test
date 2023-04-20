/// <reference types="cypress" />

declare namespace Cypress {
  interface CustomWindow extends Window {
    authService: any;
    createTransactionService: any;
    publicTransactionService: any;
    contactTransactionService: any;
    personalTransactionService: any;
  }

  type dbQueryArg = {
    entity: string;
    query: object | [object];
  };

  type LoginOptions = {
    rememberUser: boolean;
  };

  interface Chainable {
    /**
     *  Window object with additional properties used during test.
     */
    window(options?: Partial<Loggable & Timeoutable>): Chainable<CustomWindow>;

    /**
     * Custom command to make taking Percy snapshots with full name formed from the test title + suffix easier
     */
    visualSnapshot(maybeName?): Chainable<any>;

    getBySel(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>;
    getBySelLike(
      dataTestPrefixAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>;

    /**
     *  Cypress task for directly querying to the database within tests
     */
    task(
      event: "filter:database",
      arg: dbQueryArg,
      options?: Partial<Loggable & Timeoutable>
    ): Chainable<any[]>;

    /**
     *  Cypress task for directly querying to the database within tests
     */
    task(
      event: "find:database",
      arg?: any,
      options?: Partial<Loggable & Timeoutable>
    ): Chainable<any>;

    /**
     * Find a single entity via database query
     */
    database(
      operation: "find",
      entity: string,
      query?: object,
      log?: boolean
    ): Chainable<any>;

    /**
     * Filter for data entities via database query
     */
    database(
      operation: "filter",
      entity: string,
      query?: object,
      log?: boolean
    ): Chainable<any>;

    /**
     * Fetch React component instance associated with received element subject
     */
    reactComponent(): Chainable<any>;

    /**
     * Select data range within date range picker component
     */
    pickDateRange(startDate: Date, endDate: Date): Chainable<void>;

    /**
     * Select transaction amount range
     */
    setTransactionAmountRange(min: number, max: number): Chainable<any>;

    /**
     * Paginate to the next page in transaction infinite-scroll pagination view
     */
    nextTransactionFeedPage(service: string, page: number): Chainable<any>;

    /**
     * Logs in via Auth0 login page
     */
    loginToAuth0(): Chainable<any>;
  }
}
