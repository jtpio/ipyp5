import * as p5 from 'p5';

export class Sketch extends p5 {
  constructor(value: string, element: HTMLElement) {
    const sketch = new Function('p', value);
    super(sketch, element);
  }
}