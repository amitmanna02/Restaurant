import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Menu extends Model {  
  @Column
  name: string;

  @Column
  description: string;
  
  @Column
  price: string;

  @Column
  available: boolean;
}
