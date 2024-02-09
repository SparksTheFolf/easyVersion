#Make each line in regexPCRE.txt a json object and add it to regexPCRE.json, make sure to add the comma at the end of each line except the last one, and add opening and closing square brackets at the beginning and end of the file.

import json

def txttojson():
    with open('regexPCRE.txt', 'r') as f:
        lines = f.readlines()
        with open('regexPCRE.json', 'w') as f:
            f.write('[')
            for line in lines:
                f.write(json.dumps({'regex': line.strip()}) + ',\n')
            f.write(']')
            
txttojson()


    