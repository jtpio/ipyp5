// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import expect = require('expect.js');

import {
  // Add any needed widget imports here (or from controls)
} from '@jupyter-widgets/base';

import {
  createTestModel
} from './utils.spec';

import {
  SketchModel, SketchView
} from '../../src/'


describe('Sketch', () => {

  describe('SketchModel', () => {

    it('should be createable', () => {
      let model = createTestModel(SketchModel);
      expect(model).to.be.an(SketchModel);
      expect(model.get('value')).to.be('');
    });

    it('should be createable with a value', () => {
      let state = { value: 'Foo Bar!' }
      let model = createTestModel(SketchModel, state);
      expect(model).to.be.an(SketchModel);
      expect(model.get('value')).to.be('Foo Bar!');
    });

  });

});
