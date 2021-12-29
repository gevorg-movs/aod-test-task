import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "users",
})
class User extends Model {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;
}

export default User;