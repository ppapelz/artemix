import "reflect-metadata";
import { OpenAIApi } from '@promptus/openai';
import { createApolloServer } from '@promptus/graphql';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
import { aiModelService, dataSource, promptService, variableService } from '@promptus/server/database';

import express from 'express';
import { runSeeders } from "typeorm-extension";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;


OpenAIApi.initialize();
const app = express();

const server = createApolloServer();
server.start().then(() => {
  app.use('/graphql', cors<cors.CorsRequest>(), json(), expressMiddleware(server));
});

dataSource.initialize()
  .then(async () => {
    try {
      await runSeeders(dataSource);
      const variables = await variableService.getVariableById(1);
      const prompt = await promptService.getPromptById(1);
      const aimodel = await aiModelService.getAIModelByPromptId(1);

      console.log(variables);
      console.log(prompt);
      console.log(aimodel);

    } catch (error) {
      console.error("Error fetching prompts:", error);
    }

    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen({ host, port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  console.log(`🚀 REST API ready at http://localhost:${port}`);
});