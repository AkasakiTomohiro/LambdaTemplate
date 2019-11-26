import { ServicePrincipal, Role } from '@aws-cdk/aws-iam';
import { serverlessStack } from '../../cfn';
import { Stack } from '@aws-cdk/core';

export function ServerlessFunctionRole(stack: Stack) {
  return new Role(stack, 'ServerlessFunctionRole', {
    assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
    managedPolicies: [
      { managedPolicyArn: 'arn:aws:iam::aws:policy/CloudWatchFullAccess' },
      { managedPolicyArn: 'arn:aws:iam::aws:policy/CloudWatchLogsFullAccess' },
      { managedPolicyArn: 'arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess' }
    ]
  });
}
