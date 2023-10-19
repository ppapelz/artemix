import { getSequelizeInstance, promptService } from '@promptus/db';
import { createApolloServer } from '@promptus/graphql';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';

import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

const server = createApolloServer();
server.start().then(() => {
  app.use('/graphql', cors<cors.CorsRequest>(), json(), expressMiddleware(server));
});

const sequelizeInstance = getSequelizeInstance();
sequelizeInstance.authenticate()
  .then(async () => {
    try {
      const prompts = await promptService.getAllPrompts();
      console.log(prompts);
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