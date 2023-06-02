import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerLoader = YAML.load(`src/docs/swaggerDocs.yaml`);

export { swaggerUI, swaggerLoader };
