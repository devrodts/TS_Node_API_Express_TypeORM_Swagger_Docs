import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('personality')
export class Personality {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @CreateDateColumn()
  createdAt: Date

  @Column()
  personality: []

  @Column()
  traits: []

  @Column()
  subtraits: []

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
