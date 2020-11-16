# this file is an automation file to speed up work. it's supposed to stage all files and commit them with the desired message and optionally pushing them.

from functions.main import gitAdd
from functions.main import gitCommit


if __name__ == "__main__":
    gitAdd()
    gitCommit()

    # Exit command 
    input("\nPress Enter To exit")