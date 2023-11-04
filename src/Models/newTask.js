import { v4 as uuid } from "uuid";

export class Task {
  id;
  title;
  complete;

  constructor(title) {
    this.id = uuid();
    this.title = title;
    this.complete = false;
  }
}
