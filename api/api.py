from flask import Flask, request, url_for
import httplib
import urllib
import base64
import json
import math

app = Flask(__name__)

test1Output = 0
pupilSize1 = 1
pupilSize2 = 1


@app.route('/')
def api_root():
    return 'Welcome'


@app.route("/face", methods=['POST'])
def facialExpressionTest():

    if request.method == 'POST':
        if "image" in request.files:
            f = request.files["image"]
            headers = {
                # Request headers
                'Prediction-Key': '2079621641f84dbe8e725904f7fc589d',
                'Content-Type': 'application/octet-stream',
                'Prediction-key': '30cb8a9980be4d15a872065e773fc2af',
            }

            params = urllib.urlencode({
                # Request parameters
                'iterationId': 'b2dd0306-1695-4e37-8ab3-0837d3d4156a',
                'application': '{D.U.High}',
            })

            try:
                conn = httplib.HTTPSConnection(
                    'southcentralus.api.cognitive.microsoft.com')
                conn.request(
                    "POST", "/customvision/v2.0/Prediction/0d0340fd-8673-41cf-9689-b70b9d0a1ef9/image?%s" % params, open(f.filename, "rb"), headers)
                response = conn.getresponse()
                data = response.read()
                jsonData = json.loads(data)
                conn.close()
                output = {}
                output[jsonData["predictions"][0]["tagName"]
                       ] = jsonData["predictions"][0]["probability"]
                output[jsonData["predictions"][1]["tagName"]
                       ] = jsonData["predictions"][1]["probability"]
                outputJson = json.dumps(output)

                test1Output = outputJson["high"]
                return outputJson
            except Exception as e:
                print(e)

    # request.method == 'GET'
    return


@app.route("/pupil1", methods=['POST'])
def pupilSize1Test():

    if request.method == 'POST':
        if "image" in request.files:
            f = request.files["image"]
            headers = {
                # Request headers
                'Prediction-Key': '2079621641f84dbe8e725904f7fc589d',
                'Content-Type': 'application/octet-stream',
                'Prediction-key': '30cb8a9980be4d15a872065e773fc2af',
            }

            params = urllib.urlencode({
                # Request parameters
                'iterationId': 'b2dd0306-1695-4e37-8ab3-0837d3d4156a',
                'application': '{D.U.High}',
            })

            try:
                conn = httplib.HTTPSConnection(
                    'southcentralus.api.cognitive.microsoft.com')
                conn.request(
                    "POST", "/customvision/v2.0/Prediction/0d0340fd-8673-41cf-9689-b70b9d0a1ef9/image?%s" % params, open(f.filename, "rb"), headers)
                response = conn.getresponse()
                data = response.read()
                jsonData = json.loads(data)
                conn.close()
                output = {}
                # x1 coordinate
                x1 = jsonData["face"]["eyeLeft"][0]["x"]
                # x2 coordinate
                x2 = jsonData["face"]["eyeLeft"][1]["x"]
                # get radius of pupil for area
                r = (x2-x1)/2

                area = math.pi * r * r

                pupilSize1 = area
                return "Success"
            except Exception as e:
                print(e)
                return "error"

    return


@app.route("/pupil2", methods=['POST'])
def pupilSize2Test():

    if request.method == 'POST':
        if "image" in request.files:
            f = request.files["image"]
            headers = {
                # Request headers
                'Prediction-Key': '2079621641f84dbe8e725904f7fc589d',
                'Content-Type': 'application/octet-stream',
                'Prediction-key': '30cb8a9980be4d15a872065e773fc2af',
            }

            params = urllib.urlencode({
                # Request parameters
                'iterationId': 'b2dd0306-1695-4e37-8ab3-0837d3d4156a',
                'application': '{D.U.High}',
            })

            try:
                conn = httplib.HTTPSConnection(
                    'southcentralus.api.cognitive.microsoft.com')
                conn.request(
                    "POST", "/customvision/v2.0/Prediction/0d0340fd-8673-41cf-9689-b70b9d0a1ef9/image?%s" % params, open(f.filename, "rb"), headers)
                response = conn.getresponse()
                data = response.read()
                jsonData = json.loads(data)
                conn.close()
                output = {}
                # x1 coordinate
                x1 = jsonData["face"]["eyeLeft"][0]["x"]
                # x2 coordinate
                x2 = jsonData["face"]["eyeLeft"][1]["x"]
                # get radius of pupil for area
                r = (x2-x1)/2

                area = math.pi * r * r

                pupilSize1 = area
                return "Success"
            except Exception as e:
                print(e)
                return "error"

    # request.method == 'GET'
    return


@app.route("/results", methods=['GET'])
def results():
    test1 = test1Output
    test2 = calcPupilChange(pupilSize1, pupilSize2)

    # test 3 is gotten through node.js api
    return test1+test2


def calcPupilChange(p1, p2):
    # average pupil changes to 60% of its size instantly to direct light
    return p2/p1-0.6


if __name__ == "__main__":
    app.run(debug=True)
