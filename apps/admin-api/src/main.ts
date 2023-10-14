import { getSequelizeInstance, promptService, variableService, aiModelService } from '@promptus/db';

import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
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

app.get('/', async (req, res) => {
  const prompts = await promptService.getAllPrompts();
  console.log(prompts);
  res.send({ message: 'test' });

});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
