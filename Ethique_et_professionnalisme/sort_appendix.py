#! /usr/bin/python3
import re
import sys

system_input = ""
for line in sys.stdin:
    system_input += line

file_content = sorted(system_input.split("\n\n"))

system_input = ""

for line in file_content:
    system_input += "\n\n" + line

print(system_input[4:])

