# Contributing to ipyp5

## Developer Install

The base project was generated from the [TypeScript Cookiecutter Template](https://github.com/jupyter-widgets/widget-ts-cookiecutter).

### Setup

```bash
# Create a new environment
conda create -n ipyp5 -c conda-forge jupyterlab notebook nodejs python

# After the environment is created, activate it
conda activate ipyp5

# Install the widget in editable mode
python -m pip install -e .
```

To install and enable the notebook extension:

```bash
jupyter nbextension install --py --sys-prefix ipyp5
jupyter nbextension enable --py --sys-prefix ipyp5
```

To install the JupyterLab extension:

```
jupyter labextension install .
```

The `ipyp5` widget can be test in both the classic notebook and JupyterLab.

When testing in JupyterLab you can activate the watch mode:

```bash
jupyter lab --watch
```

## Pre-commit hooks

[Black](https://github.com/ambv/black) is used to format the Python code.

To have the code automatically formatted before each commit:

1. Install [pre-commit](https://pre-commit.com/#install)
2. Run `pre-commit run`

## Development Workflow

1. In one terminal window, run: `jupyter lab --watch --no-browser`
2. In a second terminal window, run: `yarn run watch`.
3. Open JupyterLab using the link return in step 1
4. When making changes to the Python code, restart the kernel

## Tests

TODO
