
export default class Page {
  constructor(page: Page);
  constructor(total: number, size: number, current?: number);
  constructor(total: number | Page, size: number = 10, current: number = 1) {
    if (total instanceof Page) {
      const page = total;
      this.size = page.size;
      this.total = page.total;
      this.current = page.current;
    } else {
      this.size = size;
      this.total = total;
      this.current = current;
    }
  }

  // Starting from 1
  public size: number;

  // Starting from 1
  public total: number;

  // Starting from 1
  private _current: number;
  public set current(value: number) {
    if (value > this.last || value < this.first) throw new Error(`${value} is not in the interval [${this.first}, ${this.last}]`);
    this._current = value;
  }
  public get current() {
    return this._current;
  }

  // Starting from 1
  public get start(): number {
    return this.size * (this.current - 1) + 1;
  }

  public get end(): number {
    return Math.min(this.size * this.current, this.total);
  }

  public get first(): number {
    return 1;
  }

  public get last(): number {
    return Math.ceil(this.total / this.size);
  }
  public next() {
    return this.current < this.last ? this.current += 1 : this.toLast();
  }

  public prev() {
    if (this.current > 1) this.current -= 1;
    return this.current;
  }

  public toFirst() {
    return this.current = this.first;
  }

  public toLast() {
    return this.current = this.last;
  }
}