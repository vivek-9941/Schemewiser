from gtts import gTTS
import os

# Define the text to convert to audio
text = '''
    Coaching Schemes For SC/ST/OBC (non-creamy Layer) & Minority Students For Universities

Details: Coaching schemes for students belonging to SC, ST, OBC (non-creamy layer), and minority communities aimed at providing equal opportunities and support in pursuing higher education.
Objectives:
Remedial Coaching for SC/ST/OBC & Minority Community Students
Coaching Classes for Entry Into Services for SC/ST/OBC & Minority Community Students
Coaching for National Eligibility Test or State Eligibility Test for SC/ST/OBC & Minority Community Students
Benefits: Financial assistance available for various items including books, journals, audio-visual aids, computers, printers, remuneration to teachers, and more.
Eligibility: Financial assistance under the scheme is available to universities and colleges within the purview of Section 2(f) and receiving central assistance under Section 12(B) of the UGC Act, 1956.
Application Process: Offline application process involving submission of the prescribed format application form to the concerned department.
Documents Required: Aadhaar card, Caste/Community Certificate, Academic Transcripts or Mark Sheets, Bank Account Details
'''

def text_to_audio(text, output_file="output.mp3", lang="en"):
    """
    Convert text to audio and save it to a file.

    Args:
        text (str): The text to convert to audio.
        output_file (str): The name of the output audio file.
        lang (str): The language code (e.g., "en" for English, "es" for Spanish).

    Returns:
        None
    """
    # Initialize gTTS with the text and language
    tts = gTTS(text=text, lang=lang)

    # Save the audio to a file
    tts.save(output_file)

    # Play the audio
    os.system("start " + output_file)  # For Windows
    # For Linux/MacOS, you can use the following command:
    # os.system("xdg-open " + output_file)

# Call the function to convert the text to audio
text_to_audio(text)
