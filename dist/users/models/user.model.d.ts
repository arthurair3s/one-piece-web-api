import { Model } from 'sequelize-typescript';
import { Profile } from '../../profiles/models/profile.model';
export declare class User extends Model {
    id: number;
    username: string;
    email: string;
    password_hash: string;
    profile_id: number;
    profile: Profile;
}
