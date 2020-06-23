import os
import sys
from colorama import *
init()

def gitAddAll():
    print(Fore.YELLOW + "staging...")
    os.system("git add .")
    print(Fore.RED + "staged!")

def gitAddFile(file):
    print(Fore.YELLOW + "staging specified file...")
    os.system("git add " + file)
    print(Fore.RED + "staged!" + Style.RESET_ALL)

def gitAddOption():
    print("Select an otion\nStage all files or only a specific file? (all/'filename')")
    cmd = input("> ")
    if cmd.lower() == "all":
        gitAddAll()
    else:
        gitAddFile(cmd)

def gitAdd():
    gitAddOption()


def gitCommit():
    commitMsg = input("Type your commit message (if you don't want to commit leave it clear)\n> ")
    if commitMsg == "":
        sys.exit()
    else:
        os.system("git commit -m {}".format(commitMsg))