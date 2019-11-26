#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { TestStack } from './lib/test-stack';

const app = new cdk.App();
// tslint:disable-next-line:no-unused-expression
new TestStack(app, 'TestStack');
