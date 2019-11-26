import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent) {
  console.log('Hello World');

  const result: APIGatewayProxyResult = {
    statusCode: 200,
    body: 'Hello World'
  };

  return result;
}
