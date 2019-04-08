// Type definitions for openshift-rest-client 1.6.4
// Project: https://github.com/nodeshift/openshift-rest-client
// Definitions by: Adam Williams <https://github.com/aiwilliams/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

export = openshiftRestClient;

declare function openshiftRestClient(): openshiftRestClient.Client;
declare function openshiftRestClient(
  settings: openshiftRestClient.Settings,
): openshiftRestClient.Client;

declare namespace openshiftRestClient {
  interface Context {
    cluster: string;
    namespace: string;
    user: string;
  }

  interface TokenUser {
    token: string;
  }

  interface Config {
    apiVersion: string;
    context: Context;
    user: TokenUser;
    cluster: string;
  }

  interface Settings {
    config: Config;
  }

  interface EndpointFunction<T> {
    (): Promise<T>;
  }

  interface Group {
    id: string;
    manufacturer: string;
    uid: string;
    namespace: string;
    generation: number;
    resourceVersion: string;
  }

  interface Project {
    firstName: string,
    lastName: string,
    uid: string,
    groups: Group[],
  }

  interface ListResponse<T> {
    items: T[];
  }

  interface ListEndpoint<T> {
    findAll: EndpointFunction<ListResponse<T>>;
  }

  export interface Client {
    groups: ListEndpoint<Group>;
    projects: ListEndpoint<Project>;
  }
}
