import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { config } from './config';

async function startServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // Health check
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'api-gateway' });
  });

  try {
    const gateway = new ApolloGateway({
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: 'user', url: config.services.user },
          { name: 'wardrobe', url: config.services.wardrobe },
          { name: 'social', url: config.services.social },
        ],
      }),
    });

    const server = new ApolloServer({ gateway });
    await server.start();

    app.use('/graphql', expressMiddleware(server));

    console.log(`GraphQL endpoint: http://localhost:${config.port}/graphql`);
  } catch (error) {
    console.warn('Gateway federation not available, starting in standalone mode');
    console.warn('Downstream services may not be running yet.');
  }

  app.listen(config.port, () => {
    console.log(`API Gateway running on http://localhost:${config.port}`);
    console.log(`Health check: http://localhost:${config.port}/health`);
  });
}

startServer().catch(console.error);
