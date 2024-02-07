# Chemistry Web App
**Backend Stack**: 
**Frontend Stack**: Svelte, TailwindCSS, Preline UI
## Instruction 
 - Make sure you have `Docker` installed!
 - Make sure Docker Desktop is running!

```bash
# How to run frontend container
make up-frontend

# How to run backend container
make up-backend

# How to run both front and back end containers
make up

# How to shut down all container
make down
```

### Dealing with errors
#### `make` is not working!
```
make : The term 'make' is not recognized as the name of a cmdlet, function, script file, or operable program.
```
If you encounter the error above, please make sure you have installed `make`.

For Windows, follow the steps below:
1. Install [MSYS2](https://www.msys2.org/) and [Chocolatey](https://docs.chocolatey.org/en-us/choco/setup)
2. Run your Command Prompt as Administrator
3. Run `choco install make`
4. Restart your computer and you're all set!