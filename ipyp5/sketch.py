#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Jeremy Tuloup.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode
from ._version import EXTENSION_SPEC_VERSION

module_name = "jupyter-p5"


class Sketch(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('SketchModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(EXTENSION_SPEC_VERSION).tag(sync=True)
    _view_name = Unicode('SketchView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(EXTENSION_SPEC_VERSION).tag(sync=True)

    value = Unicode('').tag(sync=True)
