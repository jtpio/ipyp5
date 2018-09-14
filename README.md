ipyp5
====

[![Build Status](https://travis-ci.org/jtpio/ipyp5.svg?branch=master)](https://travis-ci.org/jtpio/ipyp5)
[![Documentation Status](https://readthedocs.org/projects/ipyp5/badge/?version=latest)](http://ipyp5.readthedocs.io/en/latest)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)
[![pypi](https://img.shields.io/pypi/v/ipyp5.svg)](https://pypi.python.org/pypi/ipyp5)
[![Python Versions](https://img.shields.io/pypi/pyversions/ipyp5.svg)](https://pypi.python.org/pypi/ipyp5)
[![License](https://img.shields.io/pypi/l/ipyp5.svg)](https://pypi.python.org/pypi/ipyp5)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jtpio/ipyp5/6fceed521298a2d990694357ecf98208bd0f7b01?urlpath=lab%2Ftree%2Fexamples%2Fintroduction.ipynb)

:warning: **Disclaimer: this is a work in progress!** :warning:

[p5.js](https://p5js.org) in the Jupyter Notebook using the Jupyter Widgets.

This project aims to be a follow-up of [p5-jupyter-notebook](https://github.com/jtpio/p5-jupyter-notebook), so that p5 can be used in JupyterLab (and in the classic Notebook) as a proper package.

## Current Status

![screencast](./docs/screencast.gif)

- Define a sketch using the [instance mode of p5](https://github.com/processing/p5.js/wiki/Global-and-instance-mode). This explains the use of `p` in the sample sketch.
- The sketch is synced to the widget as a raw string and evaluated on the frontend.

## TODO

- Figure out how to expose a Python wrapper to the p5 API
- How to avoid round trips to the server (syncing of values) when making animations (updating values at every frame)?
- Proper testing, packaging and documentation once the problems above are solved


### Goal

The **ideal goal** (disclaimer: not implemented yet) would be to write code like this in a notebook cell:

```python
class MySketch(BaseSketch):
    W, H = 400, 400

    def setup(s):
        s.createCanvas(s.W, s.H)
        s.rectMode(s.CENTER)

    def draw(s):
        s.background('#ddd')
        s.translate(200, 200)
        for i in range(4):
            s.push()
            s.rotate(s.frameCount / 200 * (i + 1))
            s.fill(i * 5, i * 100, i * 150)
            s.rect(0, 0, 200, 200)
            s.pop()

sketch = MySketch()
sketch
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
