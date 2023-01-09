import { NestFactory } from '@nestjs/core';
import { initializeTransactionalContext } from 'typeorm-transactional/dist/common';
import { AppModule } from './module/app.module';

// Comment this to remove HMR
declare const module: any;
// Comment this to remove HMR

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log('Listening on port 3000'));

  // Comment this to remove HMR
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  // Comment this to remove HMR
}

bootstrap();
