"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use('/file/upload', (req, res, next) => {
        req.setTimeout(300000);
        next();
    });
    console.log('Server running on http://localhost:3000');
    console.log('Upload endpoint: http://localhost:3000/file/upload');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map