### AI SKETCH CALCULATOR

**Deployment:**
To explore the live website, visit https://aicalculator.onrender.com

**Local Run:**
To run the project locally, follow these steps:

1. Clone the repository to your machine.

2. Install the required libraries:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the backend:
    ```bash
    python3 main.py
    ```
4. Navigate to the frontend directory:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

Access the app locally on your browser.


`LOADED SCREEN`
![Screenshot 2025-01-06 224241](https://github.com/user-attachments/assets/4b49f607-5109-4ea3-a36b-73b3529a9cbd)

`SKETCHED EQUATION TO SOLVE`
![Screenshot 2025-01-06 224607](https://github.com/user-attachments/assets/035b4561-144a-4965-a253-1ae8e1b8e7f3)

`GENERATED RESULT`
![Screenshot 2025-01-06 224914](https://github.com/user-attachments/assets/0b88d37f-286a-483d-9ba3-e09f59ad3244)


### Project: AI Sketch Calculator
**Objective:**
The primary goal of this project is to create an AI-powered calculator that allows users to sketch numbers and mathematical equations directly on the interface and receive accurate computations in real-time. This project leverages advanced machine learning models and APIs to provide a highly intuitive, non-traditional calculator experience.

**Technologies Used:**
- **FastAPI:** Used to build the backend for handling mathematical operations and integrating AI models.
- **Google Gemini:** Powers intelligent responses and computations based on user-inputted sketches.
- **ReactJS:** Provides a dynamic and responsive front-end framework for the application.
- **TailwindCSS:** Used for creating a modern, responsive, and user-friendly design.

**Components:**

1. **Sketch-based Input and Computation:**
   - **Sketch Recognition:** Users can handwrite numbers and equations directly on a canvas.
   - **Backend Processing:** FastAPI processes the input sketches, converts them into machine-readable formats, and computes results using the Google Gemini API.
   - **Result Display:** The solution is presented immediately with clear visualization for enhanced understanding.

2. **User-Friendly Interface:**
   - **Interactive Sketching Area:** Built with ReactJS and styled with TailwindCSS for a seamless user experience.
   - **Error Handling and Feedback:** Provides helpful feedback if input is unrecognizable, guiding users toward better sketches.
 
3. **Performance and Scalability:**
   - Optimized backend with FastAPI for fast response times.
   - Real-time AI computations powered by Google Gemini for immediate results.

**Benefits:**
- **Enhanced Usability:** Eliminates the need for traditional keyboard input, providing a more natural, interactive computing method.
- **Innovative Experience:** Combines AI, sketch recognition, and dynamic user interfaces to redefine calculator usage.
- **Increased Efficiency:** Quickly processes complex equations, saving time and reducing user effort.
