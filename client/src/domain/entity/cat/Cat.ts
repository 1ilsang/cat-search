import { ICat } from 'store/_types/Cat';

export default class Cat implements ICat {
  readonly id: number;
  readonly name: string;
  readonly personality: string;
  readonly born: Date;

  constructor({ id, name, personality, born }: ICat) {
    this.id = id;
    this.name = name;
    this.personality = personality;
    this.born = born;
  }
}
