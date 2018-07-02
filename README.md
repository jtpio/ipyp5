ipyp5
====

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


## Development

The base project was generated from the [TypeScript Cookiecutter Template](https://github.com/jupyter-widgets/widget-ts-cookiecutter).

As the types for p5 are not yet available on npm (soon!), the type definitions were manually copied from https://github.com/p5-types/p5.ts/blob/releases/index.d.ts to `./node_modules/p5/lib/p5.d.ts`. Later on we can add `@types/p5.js` to the `package.json`.

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