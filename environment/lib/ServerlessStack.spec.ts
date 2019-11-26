import { expect as expectCDK, matchTemplate, MatchStyle, SynthUtils } from '@aws-cdk/assert';
import { ServerlessStack } from './ServerlessStack';
import { App } from '@aws-cdk/core';

test('Stack', () => {
  const app = new App();
  const stack = new ServerlessStack(app, 'ServerlessStack');

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
