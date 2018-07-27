ipyp5
====

[![Build Status](https://travis-ci.org/jtpio/ipyp5.svg?branch=master)](https://travis-ci.org/jtpio/ipyp5)
[![Documentation](https://readthedocs.org/projects/ipyp5/badge/?version=latest)](http://ipyp5.readthedocs.org)

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


## Development

The base project was generated from the [TypeScript Cookiecutter Template](https://github.com/jupyter-widgets/widget-ts-cookiecutter).

As the types for p5 are not yet available on npm (soon!), the type definitions were manually copied from https://github.com/p5-types/p5.ts/blob/releases/index.d.ts to `./src/@types/p5/index.d.ts`. Later on we can add `@types/p5.js` to the `package.json`.

Create a new environment:

`conda create -n ipyp5 python=3.6`

`conda activate ipyp5`

Install the Python package:

`pip install -e .`

Link the Jupyter Labextension to the current working directory (top-level):

`jupyter labextension install .`

Install the widget manager for JupyterLab:

`jupyter labextension install @jupyter-widgets/jupyterlab-manager`

Start JupyterLab:

`jupyter lab --watch`


## Contributing

TODO