#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { ServerlessStack } from './ServerlessStack/ServerlessStack';

const app = new cdk.App();

export const serverlessStack = new ServerlessStack(app, 'ServerlessStackStack');
