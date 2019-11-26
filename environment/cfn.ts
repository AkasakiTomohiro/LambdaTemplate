#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { ServerlessStack } from './lib/ServerlessStack';

const app = new cdk.App();
// tslint:disable-next-line:no-unused-expression
new ServerlessStack(app, 'ServerlessStackStack');
