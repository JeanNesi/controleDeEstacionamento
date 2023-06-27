
import { Response, Request } from 'express';
import { findUsers } from '../../repositories/user';
import { ErrorMessage } from '../../utils/error';

class userController {
    async getUsers(res: Response, req: Request): Promise<void> {
        const user = await findUsers();
        console.log(user)
        
        if (!Array.isArray(user) || user.length === 0) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível localizar o usuário.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível localizar o usuário.'
            });
        }

        const formattedUsers = user.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            lastAccess: user.lastAccess,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            addressId: user.addressId
        }));

        res.status(200).json(formattedUsers);
    }
}

export default new userController();
