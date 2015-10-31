import Hapi from 'hapi';
import Inert from 'inert';

const server = new Hapi.Server();

server.register(Inert, () => {

  server.connection({

    host: 'localhost',
    port: 8000

  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {

      reply('Hello world!');

    }
  });

  server.start(() => {

    console.log('Server running at:', server.info.uri); // eslint-disable-line no-console

  });

});
