export default class Cat {
  readonly id: string;
  readonly name: string;
  readonly personality: string;
  readonly born: Date;

  constructor(id: string, name: string, personality: string, born: Date) {
    this.id = id;
    this.name = name;
    this.personality = personality;
    this.born = born;
  }
}
