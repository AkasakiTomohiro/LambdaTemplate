import { CfnFunction } from '@aws-cdk/aws-sam';
import { Stack } from '@aws-cdk/core';
import { Role } from '@aws-cdk/aws-iam';

export function ServerlessFunction(stack: Stack, serverlessFunctionRole: Role) {
  return new CfnFunction(stack, 'ServerlessFunction', {
    runtime: 'nodejs10.x',
    codeUri: './dist',
    handler: 'index.handler',
    memorySize: 128,
    timeout: 8,
    role: serverlessFunctionRole.roleArn,
    events: { GetResource: { type: 'Api', properties: { method: 'any', path: '/{proxy+}' } } }
  });
}
