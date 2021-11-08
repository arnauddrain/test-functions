import { Handler } from "aws-lambda";

export const updateCSV: Handler = (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless v1.0! Your function executed successfully!" +
          event.body,
        input: event,
      },
      null,
      2
    ),
  };

  return new Promise((resolve) => {
    resolve(response);
  });
};
