import * as domain from '@bett3r-dev/pv2-example-domain';
import { start } from './server';

import * as databaseMongo from '@bett3r-dev/database-mongo';
import * as estoreEventstoredb from '@bett3r-dev/estore-eventstoredb';
import * as eventstoreMemory from '@bett3r-dev/eventstore-memory';
import * as eventstoreMongo from '@bett3r-dev/eventstore-mongo';
import * as messagingEventstoredb from '@bett3r-dev/messaging-eventstoredb';
import * as pubsubMemory from '@bett3r-dev/pubsub-memory';
import * as serverDomainViewer from '@bett3r-dev/server-domain-viewer';
import * as serverEndpoint from '@bett3r-dev/server-endpoint';
import * as serverEndpointsOpenApi from '@bett3r-dev/server-endpoints-open-api';
import * as serverEventsourcing from '@bett3r-dev/server-eventsourcing';
import * as serverHttp from '@bett3r-dev/server-http';
import * as serverLogger from '@bett3r-dev/server-logger';
import * as serverWebsocket from '@bett3r-dev/server-websocket';

start({ 
  providers:{
    database:{
      mongo: databaseMongo
    },
    eventstore:{
      eventstoredb: estoreEventstoredb,
      memory: eventstoreMemory,
      mongo: eventstoreMongo
    },
    pubsub: {
      eventstoredb: messagingEventstoredb,
      memory: pubsubMemory
    }
  },
  domainViewer: serverDomainViewer,
  endpoint: serverEndpoint,
  endpointsOpenApi: serverEndpointsOpenApi,
  eventsourcing: serverEventsourcing,
  http: serverHttp,
  logger: serverLogger,
  webSocket: serverWebsocket,
  domain, 
})
  .fork(console.error, x=>x)