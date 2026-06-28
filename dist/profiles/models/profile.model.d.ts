import { Model } from 'sequelize-typescript';
import { Permission } from '../../permissions/models/permission.model';
export declare class Profile extends Model {
    id: number;
    name: string;
    description: string;
    permissions: Permission[];
}
