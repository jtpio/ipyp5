#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Jeremy Tuloup.
# Distributed under the terms of the Modified BSD License.

import pytest

from ..sketch import Sketch


def test_example_creation_blank():
    w = Sketch()
    assert w.value == ''
