// Copyright (c) Jeremy Tuloup.
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel, DOMWidgetView, ISerializers
} from '@jupyter-widgets/base';

import {
  EXTENSION_SPEC_VERSION
} from './version';

import {
  Sketch
} from './sketch';

export
class SketchModel extends DOMWidgetModel {
  defaults() {
    return {...super.defaults(),
      _model_name: SketchModel.model_name,
      _model_module: SketchModel.model_module,
      _model_module_version: SketchModel.model_module_version,
      _view_name: SketchModel.view_name,
      _view_module: SketchModel.view_module,
      _view_module_version: SketchModel.view_module_version,
      value : ''
    };
  }

  static serializers: ISerializers = {
      ...DOMWidgetModel.serializers,
      // Add any extra serializers here
    }

  static model_name = 'SketchModel';
  static model_module = 'jupyter-p5';
  static model_module_version = EXTENSION_SPEC_VERSION;
  static view_name = 'SketchView';
  static view_module = 'jupyter-p5';
  static view_module_version = EXTENSION_SPEC_VERSION;
}


export
class SketchView extends DOMWidgetView {
  sketch : Sketch

  render() {
    setTimeout(() => {
      const value = this.model.get('value');
      this.sketch = new Sketch(value, this.el);
    }, 0);
  }

  remove() {
    if (this.sketch) {
      this.sketch.remove();
    }
  }
}
