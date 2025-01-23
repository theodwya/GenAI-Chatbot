# 🚀 Mistral 7B AI Chatbot

This project is a locally hosted AI chatbot using **Mistral 7B**, FastAPI, and Next.js.

## 🔹 Setup Instructions

### **1️⃣ Clone This Repository**
```bash
git clone https://github.com/theodwya/GenAI-Chatbot.git
cd GenAI-Chatbot
```
### **2️⃣ Download the Mistral 7B Model Manually**

Since GitHub does not support large files, you must manually download the Mistral 7B model before running the chatbot.

Run the following command to download it:

```bash
cd llama.cpp/models
curl -L -o mistral-7b-instruct-v0.1.Q4_K_M.gguf \
https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.1-GGUF/resolve/main/mistral-7b-instruct-v0.1.Q4_K_M.gguf
```

📌 Note: This model file is ~4.5GB and may take time to download.

### **3️⃣ Set Up the Backend (FastAPI)**

```bash
cd ~/GenAI-Chatbot/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

    This will start the FastAPI backend on http://127.0.0.1:8000.

### **4️⃣ Set Up the Frontend (Next.js)**

```bash
cd ~/GenAI-Chatbot/frontend
npm install
npm run dev
```

    This will start the Next.js frontend on http://localhost:3000.

### **5️⃣ Open the Chatbot in Your Browser**

```bash
http://localhost:3000
```

## Start chatting with Mistral 7B locally!
### **🛠 Development Notes**

    The Mistral 7B model file (.gguf) is NOT included in GitHub because it's too large.
    You must manually download the model before running the chatbot.
    The .gitignore file ensures that unnecessary files (node_modules, venv, large models) are NOT pushed to GitHub.

### **🚀 Future Improvements**

    Enable streaming responses (like ChatGPT)
    Save chat history to a local database
    Deploy to a free cloud server (VPS or Docker)

### **📌 Need Help?**

If you run into issues, feel free to open an issue on GitHub or contact me.

Happy coding! 🎉