# make a python program using regex to make every vaild type of version's, from 0.0.1 to 999.999.999, and add them to a file called validVer.json, each version should be on a new line.
# Include Alpha, Beta, Snap and Dev versions. under 1.0.0
# Run each 1000 versions, and print the time it took to make them. and stop for 1 second.
# Run the program for 10 seconds.
# Make sure to use the correct regex for the versions.

import re
import time
import json

def validVer():
    ver = []
    for i in range(1000):
        for x in range(1000):
            for y in range(1000):
                ver.append(f"{i}.{x}.{y}")
                ver.append(f"{i}.{x}.{y}-Alpha")
                ver.append(f"{i}.{x}.{y}-Beta")
                ver.append(f"{i}.{x}.{y}-Snap")
                ver.append(f"{i}.{x}.{y}-Dev")
    with open('validVer.json', 'w') as f:
        json.dump(ver, f, indent=4)
        
start = time.time()

while time.time() - start < 10:
    validVer()
    time.sleep(1)
    print(f"Time: {time.time() - start}")
    start = time.time()
    
print("Done")

# Time: 1.000000238418579
def main():
    validVer()
    
if __name__ == "__main__":
    main()