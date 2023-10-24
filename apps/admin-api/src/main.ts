import 'reflect-metadata';
import { OpenAIApi } from '@promptus/server/openai';
import { createApolloServer } from '@promptus/server/graphql';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
import {
  aiModelService,
  dataSource,
  promptService,
  variableService,
} from '@promptus/server/database';

import express from 'express';
import { runSeeders } from 'typeorm-extension';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

const startServer = async () => {
  await OpenAIApi.initialize();

  const gqlserver = await createApolloServer();
  await gqlserver.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(gqlserver)
  );

  try {
    await dataSource.initialize();
    await runSeeders(dataSource);

    const variables = await variableService.getVariableById(1);
    const prompt = await promptService.getPromptById(1);
    const aimodel = await aiModelService.getAIModelByPromptId(1);

    console.log(variables);
    console.log(prompt);
    console.log(aimodel);

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Error during server initialization:', error);
  }

  app.listen({ host, port }, () => {
    console.log(`🚀 Server ready at http://${host}:${port}/graphql`);
    console.log(`🚀 REST API ready at http://${host}:${port}`);
  });
};

startServer().catch((err) => {
  console.error('Error initializing the server:', err);
});
