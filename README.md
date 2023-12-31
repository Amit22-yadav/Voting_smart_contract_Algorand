# Ctrl-Alt Voting Smart Contract.

This project has been generated using AlgoKit. See below for default getting started instructions.

# Setup

### Initial setup

1. Clone this repository locally
2. Install pre-requisites:
   - Install `AlgoKit` - [Link](https://github.com/algorandfoundation/algokit-cli#install): Ensure you can execute `algokit --version`.
   - Bootstrap your local environment; run `algokit bootstrap all` within this folder, which will:
     - Install `Poetry` - [Link](https://python-poetry.org/docs/#installation): The minimum required version is `1.2`. Ensure you can execute `poetry -V` and get `1.2`+
     - Run `poetry install` in the root directory, which will set up a `.venv` folder with a Python virtual environment and also install all Python dependencies
     - Copy `.env.template` to `.env`
     - Run `npm install` in `smart_contracts` to install NPM packages
3. Open the project and start debugging / developing via:
   - VS Code
     1. Open the repository root in VS Code
     2. Install recommended extensions
     3. Hit F5 (or whatever you have debug mapped to) and it should start running with breakpoint debugging.
        > **Note**
        > If using Windows: Before running for the first time you will need to select the Python Interpreter.
        1. Open the command palette (Ctrl/Cmd + Shift + P)
        2. Search for `Python: Select Interpreter`
        3. Select `./.venv/Scripts/python.exe`
   - IDEA (e.g. PyCharm)
     1. Open the repository root in the IDE
     2. It should automatically detect it's a Poetry project and set up a Python interpreter and virtual environment.
     3. Hit Shift+F9 (or whatever you have debug mapped to) and it should start running with breakpoint debugging.
   - Other
     1. Open the repository root in your text editor of choice
     2. In a terminal run `poetry shell`
     3. Run `python -m smart_contracts` through your debugger of choice


### Subsequently

1. If you update to the latest source code and there are new dependencies you will need to run `poetry install` again
2. Follow step 3 above

# Tools

This project makes use of Python to build Algorand smart contracts. The following tools are in use:

- [Poetry](https://python-poetry.org/): Python packaging and dependency management.
- [Black](https://github.com/psf/black): A Python code formatter.
- [Ruff](https://github.com/charliermarsh/ruff): An extremely fast Python linter.
- [mypy](https://mypy-lang.org/): Static type checker.

# To Deploy the Contract 
- Run command `npm rum deploy` within smart_contracts folder

# To Run the Test_cases 
- Run command `npm run test` (To run the Test cases Algorand Blockchain should be running Locally. )

It has also been configured to have a productive dev experience out of the box in VS Code, see the [.vscode](./.vscode) folder.
