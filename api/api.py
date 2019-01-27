from flask import Flask, request, url_for
import httplib
import urllib
import base64
import json

app = Flask(__name__)


@app.route('/xax')
def api_root():
    return 'Welcome'


@app.route("/face", methods=['GET', 'POST'])
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
                return outputJson+"\n"
            except Exception as e:
                print(e)

    # request.method == 'GET'
    return "get Got\n"


if __name__ == "__main__":
    app.run(debug=True)
