import { Role, ServicePrincipal } from '@aws-cdk/aws-iam';
import { CfnFunction } from '@aws-cdk/aws-sam';
import { Stack, Construct, StackProps } from '@aws-cdk/core';

export class ServerlessStack extends Stack {
  /**
   * Serverless Function
   */
  public serverlessFunction: CfnFunction;

  /**
   * Serverless FunctionのRole
   */
  public serverlessFunctionRole: Role;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    this.serverlessFunctionRole = new Role(this, 'ServerlessFunctionRole', {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        { managedPolicyArn: 'arn:aws:iam::aws:policy/CloudWatchFullAccess' },
        { managedPolicyArn: 'arn:aws:iam::aws:policy/CloudWatchLogsFullAccess' },
        { managedPolicyArn: 'arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess' }
      ]
    });

    this.serverlessFunction = new CfnFunction(this, 'ServerlessFunction', {
      runtime: 'nodejs10.x',
      codeUri: './dist',
      handler: 'index.handler',
      memorySize: 128,
      timeout: 8,
      role: this.serverlessFunctionRole.roleArn,
      events: { GetResource: { type: 'Api', properties: { method: 'any', path: '/{proxy+}' } } }
    });
  }
}
