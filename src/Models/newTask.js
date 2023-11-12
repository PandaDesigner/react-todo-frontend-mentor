import { v4 as uuid } from "uuid";

export class Task {
  id;
  title;
  complete;

  constructor(title, complete = false) {
    this.id = uuid();
    this.title = title.trim();
    this.complete = complete;
  }
}
