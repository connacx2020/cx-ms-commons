import { applyDecorators, SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => {
    return applyDecorators(
        SetMetadata('roles', roles),
        // UseGuards(AuthGuard, RolesGuard),
        // ApiBearerAuth(),
        // ApiUnauthorizedResponse({ description: 'Unauthorized"' }),
    );
}

// https://docs.nestjs.com/custom-decorators