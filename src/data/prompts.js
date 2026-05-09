export const PROMPTS = [
  {
    id: 1,
    prompt: "Explain how a transformer neural network works",
    local: [
      {
        model: "Llama 3 8B",
        responseTime: "4.2s",
        tokens: 412,
        cost: "$0.00",
        rating: "Good",
        explanation:
          "Gave a solid high-level overview of attention mechanisms. Missed positional encoding detail and struggled with multi-head attention.",
        custom: { "Ran on": "RTX 3080", "Temperature": "0.7"},
      },
      {
        model: "Mistral 7B",
        responseTime: "5.8s",
        tokens: 380,
        cost: "$0.00",
        rating: "Okay",
        explanation:
          "Covered the basics but the explanation was shallow. Analogies were unclear and it skipped the feed-forward layer entirely.",
        custom: { "Ran on": "RTX 3080", "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "GPT-4o",
        responseTime: "2.1s",
        tokens: 680,
        cost: "$0.014",
        rating: "Excellent",
        explanation:
          "Comprehensive breakdown with clear analogies. Covered self-attention, positional encoding, and multi-head attention thoroughly.",
        custom: { "API version": "2024-08", "Temperature": "0.7" },
      },
      {
        model: "Claude 3.5 Sonnet",
        responseTime: "2.4s",
        tokens: 710,
        cost: "$0.011",
        rating: "Excellent",
        explanation:
          "Very strong explanation with good structure. Used a step-by-step approach that built understanding progressively.",
        custom: { "API version": "20241022", "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 2,
    prompt: "Write a Python function to parse a CSV and return summary statistics",
    local: [
      {
        model: "Llama 3 8B",
        responseTime: "6.1s",
        tokens: 520,
        cost: "$0.00",
        rating: "Okay",
        explanation:
          "Produced working code but used manual parsing instead of pandas. Lacked error handling for missing values.",
        custom: { "Ran on": "RTX 3080", "Temperature": "0.2" },
      },
      {
        model: "Mistral 7B",
        responseTime: "7.3s",
        tokens: 490,
        cost: "$0.00",
        rating: "Poor",
        explanation:
          "Code had a syntax error and the summary statistics were incomplete. Required significant manual fixing.",
        custom: { "Ran on": "RTX 3080", "Temperature": "0.2" },
      },
    ],
    cloud: [
      {
        model: "GPT-4o",
        responseTime: "1.8s",
        tokens: 890,
        cost: "$0.018",
        rating: "Excellent",
        explanation:
          "Used pandas correctly, handled missing values, included type inference, and added docstrings. Production-ready.",
        custom: { "API version": "2024-08", "Temperature": "0.2" },
      },
      {
        model: "Gemini 1.5 Pro",
        responseTime: "2.6s",
        tokens: 760,
        cost: "$0.009",
        rating: "Good",
        explanation:
          "Solid pandas implementation with error handling. Missing some edge cases but overall clean and readable code.",
        custom: { "API version": "001", "Temperature": "0.2" },
      },
    ],
  },
  // ── ADD MORE PROMPTS BELOW THIS LINE ──────────────────────
  // {
  //   id: 3,
  //   prompt: "Your prompt here",
  //   local: [
  //     {
  //       model: "Model name",
  //       responseTime: "Xs",
  //       tokens: 000,
  //       cost: "$0.00",
  //       rating: "Good",
  //       explanation: "Your quality notes here.",
  //       custom: { "Key": "Value" },
  //     },
  //     // add more local models here...
  //   ],
  //   cloud: [
  //     {
  //       model: "Model name",
  //       responseTime: "Xs",
  //       tokens: 000,
  //       cost: "$0.000",
  //       rating: "Excellent",
  //       explanation: "Your quality notes here.",
  //       custom: { "Key": "Value" },
  //     },
  //     // add more cloud models here...
  //   ],
  // },
];
