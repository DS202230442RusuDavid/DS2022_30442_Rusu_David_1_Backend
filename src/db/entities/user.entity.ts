import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Role from "src/roles/role.enum";

@Entity()
class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true })
    public email: string;

    @Column()
    public password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.User,
    })
    public role: Role;
}

export default User;