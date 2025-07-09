import { DataTypes } from "sequelize";
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
} from "sequelize-typescript";

@Table({
  tableName: "roles",
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Role extends Model<Role> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id?: number;

  @Column({ field: "name", type: DataTypes.STRING })
  public name!: string;

  @Column({ field: "description", type: DataTypes.TEXT })
  public description!: string;
}