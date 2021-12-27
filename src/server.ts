import * as utils from './app-utils'

import { createServerComponents, createServices } from '@bett3r-dev/server-core';

import path from 'path';

declare global {
  namespace NodeJS {
      interface Global {
          appRoot: string;
      }
  }
}
global.appRoot = path.resolve(__dirname);

const configFolder = path.join( global.appRoot, 'config' );
const servicesFolder = path.join( global.appRoot, 'services' );

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export const start = (stubModules?: Record<string, any>) => 
  createServerComponents( configFolder, stubModules)
    .chain( createServices( servicesFolder,  utils))
