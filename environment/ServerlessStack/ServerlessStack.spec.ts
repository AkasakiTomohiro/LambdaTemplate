import { expect as expectCDK, matchTemplate, MatchStyle, SynthUtils } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import { ServerlessStack } from './ServerlessStack';

test('Stack', () => {
  const app = new App();
  const stack = new ServerlessStack(app, 'ServerlessStack');

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
