import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { ServerlessFunctionRole } from './Role/ServerlessFunctionRole';
import { ServerlessFunction } from './Lambda/ServerlessFunction';

export class ServerlessStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const serverlessFunctionRole = ServerlessFunctionRole(this);

    ServerlessFunction(this, serverlessFunctionRole);
  }
}
