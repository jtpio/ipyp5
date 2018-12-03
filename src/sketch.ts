import p5 from 'p5';

type SketchFunction = (...args: any[]) => any;

export class Sketch extends p5 {
  constructor(value: string, element: HTMLElement) {
    const sketch: SketchFunction = new Function('p', value) as SketchFunction;
    super(sketch, element);
  }
}