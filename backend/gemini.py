import google.generativeai as genai
genai.configure(api_key="AIzaSyB2w46GV54BhAQaNUhtj392HVZP_Hn3pm0")

def input_image_setup(uploaded_file, type="image/jpeg"):
    if uploaded_file is not None:
        bytes_data = uploaded_file

        image_parts = [
            {
                "mime_type": type,
                "data": bytes_data
            }
        ]
        input_prompt="""
                You are an expert nutritionist where you need to see the food items from the image
               and calculate the total calories per 100g, also provide the details of the dishes that youare sure of with calories in the given format

               name: calories;
               name: calories;

               Don't provide any other information.
                """
        model=genai.GenerativeModel('gemini-pro-vision')
        response=model.generate_content([input_prompt,image_parts[0]])
        return response.text