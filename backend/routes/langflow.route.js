import express from "express";

class LangflowClient {
    constructor(baseURL, applicationToken) {
        this.baseURL = baseURL;
        this.applicationToken = applicationToken;
    }

    async post(endpoint, body, headers = { "Content-Type": "application/json" }) {
        headers["Authorization"] = `Bearer ${this.applicationToken}`;
        const url = `${this.baseURL}${endpoint}`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            });

            const responseMessage = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
            }
            return responseMessage;
        } catch (error) {
            console.error("Request Error:", error.message);
            throw error;
        }
    }

    async runFlow(flowIdOrName, langflowId, inputValue, inputType = "chat", outputType = "chat", stream = false, tweaks = {}) {
        try {
            const endpoint = `/lf/${langflowId}/api/v1/run/${flowIdOrName}?stream=${stream}`;
            return await this.post(endpoint, { input_value: inputValue, input_type: inputType, output_type: outputType, tweaks: tweaks });
        } catch (error) {
            console.error("Error running flow:", error);
            throw error;
        }
    }
}

// Initialize Langflow client
const langflowClient = new LangflowClient("https://api.langflow.astra.datastax.com", 'AstraCS:IEvPwvbjHtRMdRURrZpTDiLq:c7d5f88035b5cadab6f47ce59c112b23f414ed3ed51fd1d7dc695e44dbe40504');

const router = express.Router();

router.post("/run-flow", async (req, res) => {
    try {
        const { parts } = req.body; // Only extracting `parts` from req.body

        // Convert array of parts to required JSON string format
        const formattedParts = {};
        parts.forEach(part => {
            formattedParts[part.category] = part.title; // Using category as key
        });

        console.log(formattedParts);
        // Construct the request payload
        const requestBody = {
            input_value: JSON.stringify(formattedParts), // Convert to JSON string
            input_type: "chat",
            output_type: "chat",
            tweaks: {
                "TextInput-AfT95": {},
                "ChatOutput-oULmo": {},
                "GoogleGenerativeAIModel-ab5UM": {}
            }
        };

        // Send request to Langflow API
        const response = await langflowClient.runFlow(
            "da5205ba-29d4-493f-94a9-741db66721af",
            "147ee7b2-a885-492e-9918-6f2be297dda0",
            requestBody.input_value,
            requestBody.input_type,
            requestBody.output_type,
            false // stream is set to false
        );
        console.log(response.outputs[0].outputs[0].artifacts.message);
        res.json(response.outputs[0].outputs[0].artifacts.message);
    } catch (error) {
        res.status(500).json({ error: error.message || error });
    }
});


export default router;
