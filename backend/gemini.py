import google.generativeai as genai
genai.configure(api_key="AIzaSyB2w46GV54BhAQaNUhtj392HVZP_Hn3pm0")
import json


def preprocess(text):
    start,end= 0,-1
    l = len(text)
    ctr = 0
    for x in range(l):
        if text[x] == '{' and ctr==0:
            ctr = 1
            start = x
        if text[x] == '}':
            end = x
    
    json_data = json.loads(text[start:end+1])
    return json_data

def input_image_setup(uploaded_file,type='image/jpeg'):
    # Check if a file has been uploaded
    if uploaded_file is not None:
        # Read the file into bytes
        bytes_data = uploaded_file

        image_parts = [
            {
                "mime_type": type,  # Get the mime type of the uploaded file
                "data": bytes_data
            }
        ]
        input_prompt="""
You are an expert in nutritionist where you need to see the food items from the image
               and calculate the total calories, also provide the details of every food items with calories intake
               is below format in the form of given below format of json format. Only show the most probable one and check for the number of items also , if a photo has certain similar matches show only one result for that food no duplicates / similar food items for only one food item.
               Format should not be changed anyhow.
               {
    "1": {
        "Name": name of item 1,
        "Calories": number of calories
    },
    "2": {
        "Name": name of item 2,
        "Calories": number of calories
    }
}              
----
----
            """

        generation_config = {
  "temperature": 0.1,
  "top_p": 1,
  "top_k": 1,
  "max_output_tokens": 2048,
    }
        model=genai.GenerativeModel('gemini-pro-vision',generation_config=generation_config)
        response=model.generate_content([input_prompt,image_parts[0]])
        json_data = preprocess(response.text)
        print(json_data)
        return json_data