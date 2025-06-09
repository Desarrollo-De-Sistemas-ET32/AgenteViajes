// src/auth/auth.controller.ts
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('api')
export class AuthController {
  @Get('public')
  getPublic() {
    return {
      message: `Hello from a public endpoint! You don't need to be authenticated to see this.`,
    };
  }


  @Get('private')
  getPrivate() {
    return {
      message: `Hello from a private endpoint! You need to be authenticated to see this.`,
    };
  }

  @Get('private-scoped')
  getPrivateScoped() {
    return {
      message: `Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.`,
    };
  }
}

