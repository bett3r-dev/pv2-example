import * as AppUtils from './app-utils';

import { ServerComponents, ServiceParams } from '@bett3r-dev/server-core';

import {MongoDatabaseProvider} from '@bett3r-dev/database-mongo';

export interface AppServerComponents extends ServerComponents {
  database: {
    mongo?: MongoDatabaseProvider,
  },
}

export type AppServiceParams = Partial<ServiceParams> & {
  serverComponents?: Partial<AppServerComponents>,
  u?: typeof AppUtils
}
