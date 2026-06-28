import { Model } from 'sequelize-typescript';
import { Profile } from '../../profiles/models/profile.model';
export declare class Permission extends Model {
    id: number;
    name: string;
    slug: string;
    description: string;
    profiles: Profile[];
}
