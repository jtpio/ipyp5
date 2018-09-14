# Contributing to ipyp5

## Developer Install

The base project was generated from the [TypeScript Cookiecutter Template](https://github.com/jupyter-widgets/widget-ts-cookiecutter).

As the types for p5 are not yet available on npm (soon!), the type definitions were manually copied from https://github.com/p5-types/p5.ts/blob/releases/index.d.ts to `./src/@types/p5/index.d.ts`. Later on we can add `@types/p5.js` to the `package.json`.

### Setup

```bash
# Use the `environment.yml` file used for Binder as a local development environment
conda env create -f ./binder/environment.yml

# After the environment is created, activate it
conda activate ipyp5

# If conda returns an error, try the following
# source activate ipyp5

# Run the `postBuild` script, which is also used for the Binder setup
# This will install the Python package as well as the JupyterLab extensions
chmod +x ./binder/postBuild
./binder/postBuild
```

Finally start JupyterLab:

`jupyter lab --watch`

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
