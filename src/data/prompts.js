export const CATEGORIES = [
  "All",
  "Email Security",
  "Threat Detection",
  "Vulnerability Assessment",
  "Compliance",
  "Incident Response",
  "SOC Operations",
  "Threat Intelligence",
];

export const PROMPTS = [
  // ── EMAIL SECURITY ─────────────────────────────────────────
  {
    id: 1,
    title: "Obvious Phishing Email",
    category: "Email Security",
    difficulty: "Easy",
    fullPrompt: `[DIFFICULTY: EASY]
Analyse if this email is a phishing attempt:

From: support@amaz0n-security.com
Subject: URGENT: Your account has been suspended
Body: Dear Customer, your Amazon account has been locked due to suspicious activity. Click here immediately to verify your identity: http://amaz0n-verify.tk/login You have 24 hours or your account will be permanently deleted.
Sincerely, Amazon Security Team

Context: Recipient is a standard Amazon customer. No prior account issues reported.

Respond with:
1. Classification: phishing or legitimate (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying suspicious elements
3. Immediate Actions: exactly 3 bullet points for what the recipient should do
4. Prevention: exactly 2 bullet points on avoiding similar attacks`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "40.058",
        inputTokens: 219.7,
        cost: "$0.00",
        custom: {
          "CPU (%)": "9.122",
          "RAM (MB)": "3142.065",
          "Network (MB)": "0.218",
          "Energy (kWh)": "0.171295",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "3.0",
        inputTokens: 100,
        outputTokens: 200,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010200",
          "Avg Energy (J) — 1 run": "367.2000",
          "Avg Cost NZD — 1 run": "$0.000577",
          "Energy (kWh) — 10 runs": "0.00102000",
          "Energy (kWh) — 50 runs": "0.00510000",
          "Energy (kWh) — 100 runs": "0.01020000",
          "Energy (J) — 10 runs": "3,672.0000",
          "Energy (J) — 50 runs": "18,360.0000",
          "Energy (J) — 100 runs": "36,720.0000",
          "Total Power (W)": "122.4000",
          "Cost NZD — 10 runs": "$0.005775",
          "Cost NZD — 50 runs": "$0.028875",
          "Cost NZD — 100 runs": "$0.057750",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "3.0",
        inputTokens: 100,
        outputTokens: 200,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00007200",
          "Avg Energy (J) — 1 run": "259.2000",
          "Avg Cost NZD — 1 run": "$0.000062",
          "Energy (kWh) — 10 runs": "0.00072000",
          "Energy (kWh) — 50 runs": "0.00360000",
          "Energy (kWh) — 100 runs": "0.00720000",
          "Energy (J) — 10 runs": "2,592.0000",
          "Energy (J) — 50 runs": "12,960.0000",
          "Energy (J) — 100 runs": "25,920.0000",
          "Total Power (W)": "86.4000",
          "Cost NZD — 10 runs": "$0.000619",
          "Cost NZD — 50 runs": "$0.003094",
          "Cost NZD — 100 runs": "$0.006188",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "3.0",
        inputTokens: 100,
        outputTokens: 200,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00009000",
          "Avg Energy (J) — 1 run": "324.0000",
          "Avg Cost NZD — 1 run": "$0.000495",
          "Energy (kWh) — 10 runs": "0.00090000",
          "Energy (kWh) — 50 runs": "0.00450000",
          "Energy (kWh) — 100 runs": "0.00900000",
          "Energy (J) — 10 runs": "3,240.0000",
          "Energy (J) — 50 runs": "16,200.0000",
          "Energy (J) — 100 runs": "32,400.0000",
          "Total Power (W)": "108.0000",
          "Cost NZD — 10 runs": "$0.004950",
          "Cost NZD — 50 runs": "$0.024750",
          "Cost NZD — 100 runs": "$0.049500",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Sophisticated Internal Phishing",
    category: "Email Security",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Analyse this email for phishing indicators:

From: it-security@yourcompany.com
Subject: Mandatory Password Reset - Action Required
Body: Hi [Your Name], as part of our quarterly security audit, all employees must reset passwords by EOD Friday. Use the secure portal: https://yourcompany-sso.authportal.net/reset IT will not send further reminders. Contact helpdesk@yourcompany.com for issues.
- IT Security Team

Context: Company domain is yourcompany.com. The reset link uses authportal.net, not yourcompany.com. No companywide password reset was announced internally. The helpdesk email address matches the real domain.

Respond with:
1. Classification: phishing or legitimate (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying suspicious elements
3. Immediate Actions: exactly 3 bullet points for what the recipient should do
4. Prevention: exactly 2 bullet points on avoiding similar attacks`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "40.6",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "11.388",
          "RAM (MB)": "3142.216",
          "Network (MB)": "0.225",
          "Energy (kWh)": "0.173450",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "4.0",
        inputTokens: 113,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00015742",
          "Avg Energy (J) — 1 run": "566.7120",
          "Avg Cost NZD — 1 run": "$0.000959",
          "Energy (kWh) — 10 runs": "0.00157420",
          "Energy (kWh) — 50 runs": "0.00787100",
          "Energy (kWh) — 100 runs": "0.01574200",
          "Energy (J) — 10 runs": "5,667.1200",
          "Energy (J) — 50 runs": "28,335.6000",
          "Energy (J) — 100 runs": "56,671.2000",
          "Total Power (W)": "141.6780",
          "Cost NZD — 10 runs": "$0.009595",
          "Cost NZD — 50 runs": "$0.047974",
          "Cost NZD — 100 runs": "$0.095948",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 113,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00011112",
          "Avg Energy (J) — 1 run": "400.0320",
          "Avg Cost NZD — 1 run": "$0.000096",
          "Energy (kWh) — 10 runs": "0.00111120",
          "Energy (kWh) — 50 runs": "0.00555600",
          "Energy (kWh) — 100 runs": "0.01111200",
          "Energy (J) — 10 runs": "4,000.3200",
          "Energy (J) — 50 runs": "20,001.6000",
          "Energy (J) — 100 runs": "40,003.2000",
          "Total Power (W)": "100.0080",
          "Cost NZD — 10 runs": "$0.000955",
          "Cost NZD — 50 runs": "$0.004775",
          "Cost NZD — 100 runs": "$0.009549",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 113,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00013890",
          "Avg Energy (J) — 1 run": "500.0400",
          "Avg Cost NZD — 1 run": "$0.000764",
          "Energy (kWh) — 10 runs": "0.00138900",
          "Energy (kWh) — 50 runs": "0.00694500",
          "Energy (kWh) — 100 runs": "0.01389000",
          "Energy (J) — 10 runs": "5,000.4000",
          "Energy (J) — 50 runs": "25,002.0000",
          "Energy (J) — 100 runs": "50,004.0000",
          "Total Power (W)": "125.0100",
          "Cost NZD — 10 runs": "$0.007640",
          "Cost NZD — 50 runs": "$0.038198",
          "Cost NZD — 100 runs": "$0.076395",
        },
      },
    ],
  },
  {
    id: 3,
    title: "CEO Spear-Phishing / BEC",
    category: "Email Security",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD]
Detect social engineering in this targeted spear-phishing email:

From: ceo@executivepartners.com
Subject: Re: Q4 Budget Approval
Body: Hi Sarah, following up on our call yesterday about the vendor payment. Finance needs the wire transfer approved today for the $45,000 consulting fee. Updated bank details attached — account changed last week. Please confirm transfer by 3pm so we don't miss the deadline.
Best,
Michael (CEO)

Context: Company CFO is Sarah. CEO is Michael. No call occurred yesterday. The sender domain is executivepartners.com, not the company domain. Wire transfers require dual approval per internal policy.

Respond with:
1. Classification: phishing or legitimate (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying social engineering techniques
3. Immediate Actions: exactly 3 bullet points for what Sarah should do right now
4. Prevention: exactly 2 bullet points on process controls to prevent BEC fraud`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "40.607",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "9.748",
          "RAM (MB)": "3142.608",
          "Network (MB)": "0.216",
          "Energy (kWh)": "0.173539",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "5.5",
        inputTokens: 125,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00021250",
          "Avg Energy (J) — 1 run": "765.0000",
          "Avg Cost NZD — 1 run": "$0.001341",
          "Energy (kWh) — 10 runs": "0.00212500",
          "Energy (kWh) — 50 runs": "0.01062500",
          "Energy (kWh) — 100 runs": "0.02125000",
          "Energy (J) — 10 runs": "7,650.0000",
          "Energy (J) — 50 runs": "38,250.0000",
          "Energy (J) — 100 runs": "76,500.0000",
          "Total Power (W)": "139.0909",
          "Cost NZD — 10 runs": "$0.013406",
          "Cost NZD — 50 runs": "$0.067031",
          "Cost NZD — 100 runs": "$0.134063",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 125,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00015000",
          "Avg Energy (J) — 1 run": "540.0000",
          "Avg Cost NZD — 1 run": "$0.000129",
          "Energy (kWh) — 10 runs": "0.00150000",
          "Energy (kWh) — 50 runs": "0.00750000",
          "Energy (kWh) — 100 runs": "0.01500000",
          "Energy (J) — 10 runs": "5,400.0000",
          "Energy (J) — 50 runs": "27,000.0000",
          "Energy (J) — 100 runs": "54,000.0000",
          "Total Power (W)": "98.1818",
          "Cost NZD — 10 runs": "$0.001289",
          "Cost NZD — 50 runs": "$0.006445",
          "Cost NZD — 100 runs": "$0.012891",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 125,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018750",
          "Avg Energy (J) — 1 run": "675.0000",
          "Avg Cost NZD — 1 run": "$0.001031",
          "Energy (kWh) — 10 runs": "0.00187500",
          "Energy (kWh) — 50 runs": "0.00937500",
          "Energy (kWh) — 100 runs": "0.01875000",
          "Energy (J) — 10 runs": "6,750.0000",
          "Energy (J) — 50 runs": "33,750.0000",
          "Energy (J) — 100 runs": "67,500.0000",
          "Total Power (W)": "122.7273",
          "Cost NZD — 10 runs": "$0.010313",
          "Cost NZD — 50 runs": "$0.051563",
          "Cost NZD — 100 runs": "$0.103125",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Malware Attachment Detection",
    category: "Email Security",
    difficulty: "Easy",
    fullPrompt: `[DIFFICULTY: EASY]
Analyse this email for malware delivery risk:

From: invoices@suppliernetwork.com
Subject: Invoice #78234 - Payment Due
Body: Please find attached invoice for last month's shipment. Payment due within 15 days. Contact accounts@suppliernetwork.com with questions. Attachment: Invoice_78234.pdf.exe (2.3 MB)

Context: The recipient works in accounts payable and regularly receives supplier invoices. The supplier domain is unverified. The attachment uses a double extension (.pdf.exe). No prior correspondence from this sender exists.

Respond with:
1. Classification: malicious or legitimate (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying file and sender red flags
3. Immediate Actions: exactly 3 bullet points for safe handling procedure
4. Prevention: exactly 2 bullet points on email attachment policy controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "40.478",
        inputTokens: 219.45,
        cost: "$0.00",
        custom: {
          "CPU (%)": "16.019",
          "RAM (MB)": "3142.884",
          "Network (MB)": "0.227",
          "Energy (kWh)": "0.172856",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "3.5",
        inputTokens: 50,
        outputTokens: 300,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00011900",
          "Avg Energy (J) — 1 run": "428.4000",
          "Avg Cost NZD — 1 run": "$0.000784",
          "Energy (kWh) — 10 runs": "0.00119000",
          "Energy (kWh) — 50 runs": "0.00595000",
          "Energy (kWh) — 100 runs": "0.01190000",
          "Energy (J) — 10 runs": "4,284.0000",
          "Energy (J) — 50 runs": "21,420.0000",
          "Energy (J) — 100 runs": "42,840.0000",
          "Total Power (W)": "122.4000",
          "Cost NZD — 10 runs": "$0.007838",
          "Cost NZD — 50 runs": "$0.039188",
          "Cost NZD — 100 runs": "$0.078375",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "3.5",
        inputTokens: 50,
        outputTokens: 300,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00008400",
          "Avg Energy (J) — 1 run": "302.4000",
          "Avg Cost NZD — 1 run": "$0.000072",
          "Energy (kWh) — 10 runs": "0.00084000",
          "Energy (kWh) — 50 runs": "0.00420000",
          "Energy (kWh) — 100 runs": "0.00840000",
          "Energy (J) — 10 runs": "3,024.0000",
          "Energy (J) — 50 runs": "15,120.0000",
          "Energy (J) — 100 runs": "30,240.0000",
          "Total Power (W)": "86.4000",
          "Cost NZD — 10 runs": "$0.000722",
          "Cost NZD — 50 runs": "$0.003609",
          "Cost NZD — 100 runs": "$0.007219",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "3.5",
        inputTokens: 50,
        outputTokens: 300,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010500",
          "Avg Energy (J) — 1 run": "378.0000",
          "Avg Cost NZD — 1 run": "$0.000577",
          "Energy (kWh) — 10 runs": "0.00105000",
          "Energy (kWh) — 50 runs": "0.00525000",
          "Energy (kWh) — 100 runs": "0.01050000",
          "Energy (J) — 10 runs": "3,780.0000",
          "Energy (J) — 50 runs": "18,900.0000",
          "Energy (J) — 100 runs": "37,800.0000",
          "Total Power (W)": "108.0000",
          "Cost NZD — 10 runs": "$0.005775",
          "Cost NZD — 50 runs": "$0.028875",
          "Cost NZD — 100 runs": "$0.057750",
        },
      },
    ],
  },
  // ── THREAT DETECTION ───────────────────────────────────────
  {
    id: 5,
    title: "Brute Force Login Logs",
    category: "Threat Detection",
    difficulty: "Easy",
    fullPrompt: `[DIFFICULTY: EASY]
Analyse these authentication logs for security threats:

2025-02-11 03:15:22 | LOGIN_FAIL | user: admin | IP: 185.220.101.47 | Location: Russia
2025-02-11 03:15:24 | LOGIN_FAIL | user: admin | IP: 185.220.101.47 | Location: Russia
2025-02-11 03:15:26 | LOGIN_FAIL | user: root | IP: 185.220.101.47 | Location: Russia
2025-02-11 03:15:28 | LOGIN_FAIL | user: admin | IP: 185.220.101.47 | Location: Russia
2025-02-11 03:15:30 | LOGIN_FAIL | user: administrator | IP: 185.220.101.47 | Location: Russia
[... 47 more failed attempts across 2 minutes ...]
2025-02-11 03:17:45 | LOGIN_SUCCESS | user: admin | IP: 185.220.101.47 | Location: Russia

Context: The admin account is a privileged system account. The organisation is based in the USA. No travel or remote work is expected for this account.

Respond with:
1. Assessment: attack type and severity level (1 sentence)
2. Key Indicators: exactly 3 bullet points from the log data
3. Immediate Actions: exactly 3 bullet points to take right now
4. Prevention: exactly 2 bullet points on hardening authentication`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "21.298",
        inputTokens: 219.333,
        cost: "$0.00",
        custom: {
          "CPU (%)": "23.142",
          "RAM (MB)": "3483.484",
          "Network (MB)": "0.162",
          "Energy (kWh)": "0.09477",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00015130",
          "Avg Energy (J) — 1 run": "544.6800",
          "Avg Cost NZD — 1 run": "$0.000945",
          "Energy (kWh) — 10 runs": "0.00151300",
          "Energy (kWh) — 50 runs": "0.00756500",
          "Energy (kWh) — 100 runs": "0.01513000",
          "Energy (J) — 10 runs": "5,446.8000",
          "Energy (J) — 50 runs": "27,234.0000",
          "Energy (J) — 100 runs": "54,468.0000",
          "Total Power (W)": "136.1700",
          "Cost NZD — 10 runs": "$0.009446",
          "Cost NZD — 50 runs": "$0.047231",
          "Cost NZD — 100 runs": "$0.094463",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010680",
          "Avg Energy (J) — 1 run": "384.4800",
          "Avg Cost NZD — 1 run": "$0.000092",
          "Energy (kWh) — 10 runs": "0.00106800",
          "Energy (kWh) — 50 runs": "0.00534000",
          "Energy (kWh) — 100 runs": "0.01068000",
          "Energy (J) — 10 runs": "3,844.8000",
          "Energy (J) — 50 runs": "19,224.0000",
          "Energy (J) — 100 runs": "38,448.0000",
          "Total Power (W)": "96.1200",
          "Cost NZD — 10 runs": "$0.000918",
          "Cost NZD — 50 runs": "$0.004589",
          "Cost NZD — 100 runs": "$0.009178",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00013350",
          "Avg Energy (J) — 1 run": "480.6000",
          "Avg Cost NZD — 1 run": "$0.000734",
          "Energy (kWh) — 10 runs": "0.00133500",
          "Energy (kWh) — 50 runs": "0.00667500",
          "Energy (kWh) — 100 runs": "0.01335000",
          "Energy (J) — 10 runs": "4,806.0000",
          "Energy (J) — 50 runs": "24,030.0000",
          "Energy (J) — 100 runs": "48,060.0000",
          "Total Power (W)": "120.1500",
          "Cost NZD — 10 runs": "$0.007343",
          "Cost NZD — 50 runs": "$0.036713",
          "Cost NZD — 100 runs": "$0.073425",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Network Traffic Anomaly",
    category: "Threat Detection",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Detect anomalies in this network traffic snapshot:

Baseline (typical Wednesday 2pm-3pm):
- Outbound traffic: 2.3 GB/hour
- External IP connections: ~450/hour
- DNS queries: ~1,200/hour

Current (Wednesday 2:30pm, last 30 minutes):
- Outbound traffic: 47 GB (20x baseline)
- Connections to single IP in China: 3,500
- DNS queries to: nslookup-random-chars.tk (repeated, newly registered domain)
- File transfers: 200+ MB files to external server
- Source workstation: finance_dept_laptop_42

Context: The finance workstation handles payroll and customer payment data. The destination IP has no prior connection history. The DNS domain was registered 4 days ago. No scheduled data transfers are authorised for this workstation.

Respond with:
1. Assessment: likely attack type and data exfiltration risk (1 sentence)
2. Key Indicators: exactly 3 bullet points from the traffic data
3. Immediate Actions: exactly 3 bullet points for immediate response
4. Prevention: exactly 2 bullet points on network controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "33.719",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "9.188",
          "RAM (MB)": "3484.22",
          "Network (MB)": "0.201",
          "Energy (kWh)": "0.145772",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "5.5",
        inputTokens: 90,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00020060",
          "Avg Energy (J) — 1 run": "722.1600",
          "Avg Cost NZD — 1 run": "$0.001312",
          "Energy (kWh) — 10 runs": "0.00200600",
          "Energy (kWh) — 50 runs": "0.01003000",
          "Energy (kWh) — 100 runs": "0.02006000",
          "Energy (J) — 10 runs": "7,221.6000",
          "Energy (J) — 50 runs": "36,108.0000",
          "Energy (J) — 100 runs": "72,216.0000",
          "Total Power (W)": "131.3018",
          "Cost NZD — 10 runs": "$0.013118",
          "Cost NZD — 50 runs": "$0.065588",
          "Cost NZD — 100 runs": "$0.131175",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 90,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014160",
          "Avg Energy (J) — 1 run": "509.7600",
          "Avg Cost NZD — 1 run": "$0.000122",
          "Energy (kWh) — 10 runs": "0.00141600",
          "Energy (kWh) — 50 runs": "0.00708000",
          "Energy (kWh) — 100 runs": "0.01416000",
          "Energy (J) — 10 runs": "5,097.6000",
          "Energy (J) — 50 runs": "25,488.0000",
          "Energy (J) — 100 runs": "50,976.0000",
          "Total Power (W)": "92.6836",
          "Cost NZD — 10 runs": "$0.001217",
          "Cost NZD — 50 runs": "$0.006084",
          "Cost NZD — 100 runs": "$0.012169",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 90,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017700",
          "Avg Energy (J) — 1 run": "637.2000",
          "Avg Cost NZD — 1 run": "$0.000974",
          "Energy (kWh) — 10 runs": "0.00177000",
          "Energy (kWh) — 50 runs": "0.00885000",
          "Energy (kWh) — 100 runs": "0.01770000",
          "Energy (J) — 10 runs": "6,372.0000",
          "Energy (J) — 50 runs": "31,860.0000",
          "Energy (J) — 100 runs": "63,720.0000",
          "Total Power (W)": "115.8545",
          "Cost NZD — 10 runs": "$0.009735",
          "Cost NZD — 50 runs": "$0.048675",
          "Cost NZD — 100 runs": "$0.097350",
        },
      },
    ],
  },
  {
    id: 7,
    title: "Malware Process Behaviour",
    category: "Threat Detection",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Analyse this process behaviour for malware indicators:

Process: svchost.exe (PID: 8472)
Location: C:\Users\John\AppData\Local\Temp\svchost.exe
Parent Process: outlook.exe
Network: Beacon to 23.95.67.142:443 every 30 seconds
File Activity:
  Created: C:\Users\John\Documents.hidden\keylog.txt
  Modified: HKCU\Software\Microsoft\Windows\CurrentVersion\Run
  Accessed: Chrome password store, Firefox login database
CPU/RAM: 2% CPU, 45 MB (stable)

Context: Legitimate svchost.exe runs only from C:\Windows\System32\ and is never spawned by outlook.exe. The destination IP has no business association. The registry key modified controls Windows startup persistence.

Respond with:
1. Assessment: malware type and risk level (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying malicious behaviour
3. Immediate Actions: exactly 3 bullet points for containment
4. Prevention: exactly 2 bullet points on endpoint hardening`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "35.388",
        inputTokens: 218.13,
        cost: "$0.00",
        custom: {
          "CPU (%)": "3.278",
          "RAM (MB)": "3484.667",
          "Network (MB)": "0.21",
          "Energy (kWh)": "0.152336",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "6.0",
        inputTokens: 113,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00020842",
          "Avg Energy (J) — 1 run": "750.3120",
          "Avg Cost NZD — 1 run": "$0.001331",
          "Energy (kWh) — 10 runs": "0.00208420",
          "Energy (kWh) — 50 runs": "0.01042100",
          "Energy (kWh) — 100 runs": "0.02084200",
          "Energy (J) — 10 runs": "7,503.1200",
          "Energy (J) — 50 runs": "37,515.6000",
          "Energy (J) — 100 runs": "75,031.2000",
          "Total Power (W)": "125.0520",
          "Cost NZD — 10 runs": "$0.013307",
          "Cost NZD — 50 runs": "$0.066536",
          "Cost NZD — 100 runs": "$0.133073",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "6.0",
        inputTokens: 113,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014712",
          "Avg Energy (J) — 1 run": "529.6320",
          "Avg Cost NZD — 1 run": "$0.000126",
          "Energy (kWh) — 10 runs": "0.00147120",
          "Energy (kWh) — 50 runs": "0.00735600",
          "Energy (kWh) — 100 runs": "0.01471200",
          "Energy (J) — 10 runs": "5,296.3200",
          "Energy (J) — 50 runs": "26,481.6000",
          "Energy (J) — 100 runs": "52,963.2000",
          "Total Power (W)": "88.2720",
          "Cost NZD — 10 runs": "$0.001264",
          "Cost NZD — 50 runs": "$0.006322",
          "Cost NZD — 100 runs": "$0.012643",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "6.0",
        inputTokens: 113,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018390",
          "Avg Energy (J) — 1 run": "662.0400",
          "Avg Cost NZD — 1 run": "$0.001012",
          "Energy (kWh) — 10 runs": "0.00183900",
          "Energy (kWh) — 50 runs": "0.00919500",
          "Energy (kWh) — 100 runs": "0.01839000",
          "Energy (J) — 10 runs": "6,620.4000",
          "Energy (J) — 50 runs": "33,102.0000",
          "Energy (J) — 100 runs": "66,204.0000",
          "Total Power (W)": "110.3400",
          "Cost NZD — 10 runs": "$0.010115",
          "Cost NZD — 50 runs": "$0.050573",
          "Cost NZD — 100 runs": "$0.101145",
        },
      },
    ],
  },
  {
    id: 8,
    title: "Insider Threat — Departing Employee",
    category: "Threat Detection",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD]
Flag suspicious insider activity from these user behaviour logs:

User: emily.chen@company.com (Marketing Manager)
Time: Sunday 2:45 AM

Actions in session:
- Accessed HR database (outside her role permissions)
- Downloaded 2,500 employee records (names, emails, salaries)
- Exported files to USB drive
- Accessed competitor pricing documents (Sales department files)
- Sent 15 emails to personal Gmail with attachments
- Cleared browser history and deleted temp files
- VPN source: airport Wi-Fi

Context: Emily submitted her resignation on Friday. Her last day is next Friday. She has never logged in on weekends before. USB exports are policy violations. Access to HR and Sales data is outside her defined role.

Respond with:
1. Assessment: insider threat classification and severity (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying high-risk behaviours
3. Immediate Actions: exactly 3 bullet points for HR and IT response
4. Prevention: exactly 2 bullet points on offboarding access controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "24.819",
        inputTokens: 214.833,
        cost: "$0.00",
        custom: {
          "CPU (%)": "14.204",
          "RAM (MB)": "3073.366",
          "Network (MB)": "0.177",
          "Energy (kWh)": "0.212863",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "6.0",
        inputTokens: 108,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00020672",
          "Avg Energy (J) — 1 run": "744.1920",
          "Avg Cost NZD — 1 run": "$0.001327",
          "Energy (kWh) — 10 runs": "0.00206720",
          "Energy (kWh) — 50 runs": "0.01033600",
          "Energy (kWh) — 100 runs": "0.02067200",
          "Energy (J) — 10 runs": "7,441.9200",
          "Energy (J) — 50 runs": "37,209.6000",
          "Energy (J) — 100 runs": "74,419.2000",
          "Total Power (W)": "124.0320",
          "Cost NZD — 10 runs": "$0.013266",
          "Cost NZD — 50 runs": "$0.066330",
          "Cost NZD — 100 runs": "$0.132660",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "6.0",
        inputTokens: 108,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014592",
          "Avg Energy (J) — 1 run": "525.3120",
          "Avg Cost NZD — 1 run": "$0.000125",
          "Energy (kWh) — 10 runs": "0.00145920",
          "Energy (kWh) — 50 runs": "0.00729600",
          "Energy (kWh) — 100 runs": "0.01459200",
          "Energy (J) — 10 runs": "5,253.1200",
          "Energy (J) — 50 runs": "26,265.6000",
          "Energy (J) — 100 runs": "52,531.2000",
          "Total Power (W)": "87.5520",
          "Cost NZD — 10 runs": "$0.001254",
          "Cost NZD — 50 runs": "$0.006270",
          "Cost NZD — 100 runs": "$0.012540",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "6.0",
        inputTokens: 108,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018240",
          "Avg Energy (J) — 1 run": "656.6400",
          "Avg Cost NZD — 1 run": "$0.001003",
          "Energy (kWh) — 10 runs": "0.00182400",
          "Energy (kWh) — 50 runs": "0.00912000",
          "Energy (kWh) — 100 runs": "0.01824000",
          "Energy (J) — 10 runs": "6,566.4000",
          "Energy (J) — 50 runs": "32,832.0000",
          "Energy (J) — 100 runs": "65,664.0000",
          "Total Power (W)": "109.4400",
          "Cost NZD — 10 runs": "$0.010032",
          "Cost NZD — 50 runs": "$0.050160",
          "Cost NZD — 100 runs": "$0.100320",
        },
      },
    ],
  },
  // ── VULNERABILITY ASSESSMENT ───────────────────────────────
  {
    id: 9,
    title: "SQL Injection in User Lookup",
    category: "Vulnerability Assessment",
    difficulty: "Easy",
    fullPrompt: `[DIFFICULTY: EASY]
Identify the security vulnerability in this code:

def get_user_data(username):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    query = "SELECT * FROM users WHERE username = '" + username + "'"
    cursor.execute(query)
    return cursor.fetchone()

@app.route('/api/user/<username>')
def user_profile(username):
    data = get_user_data(username)
    return jsonify(data)

Context: This endpoint is publicly accessible. The username parameter comes directly from the URL with no sanitisation. The users table contains passwords, emails, and payment data. Input example: ' OR '1'='1

Respond with:
1. Assessment: vulnerability type and severity (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying the flaws
3. Immediate Actions: exactly 3 bullet points including a secure code fix
4. Prevention: exactly 2 bullet points on secure coding practices`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "15.539",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "18.165",
          "RAM (MB)": "2468.836",
          "Network (MB)": "0.142",
          "Energy (kWh)": "0.147024",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "4.0",
        inputTokens: 70,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014280",
          "Avg Energy (J) — 1 run": "514.0800",
          "Avg Cost NZD — 1 run": "$0.000924",
          "Energy (kWh) — 10 runs": "0.00142800",
          "Energy (kWh) — 50 runs": "0.00714000",
          "Energy (kWh) — 100 runs": "0.01428000",
          "Energy (J) — 10 runs": "5,140.8000",
          "Energy (J) — 50 runs": "25,704.0000",
          "Energy (J) — 100 runs": "51,408.0000",
          "Total Power (W)": "128.5200",
          "Cost NZD — 10 runs": "$0.009240",
          "Cost NZD — 50 runs": "$0.046200",
          "Cost NZD — 100 runs": "$0.092400",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 70,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010080",
          "Avg Energy (J) — 1 run": "362.8800",
          "Avg Cost NZD — 1 run": "$0.000087",
          "Energy (kWh) — 10 runs": "0.00100800",
          "Energy (kWh) — 50 runs": "0.00504000",
          "Energy (kWh) — 100 runs": "0.01008000",
          "Energy (J) — 10 runs": "3,628.8000",
          "Energy (J) — 50 runs": "18,144.0000",
          "Energy (J) — 100 runs": "36,288.0000",
          "Total Power (W)": "90.7200",
          "Cost NZD — 10 runs": "$0.000866",
          "Cost NZD — 50 runs": "$0.004331",
          "Cost NZD — 100 runs": "$0.008663",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 70,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012600",
          "Avg Energy (J) — 1 run": "453.6000",
          "Avg Cost NZD — 1 run": "$0.000693",
          "Energy (kWh) — 10 runs": "0.00126000",
          "Energy (kWh) — 50 runs": "0.00630000",
          "Energy (kWh) — 100 runs": "0.01260000",
          "Energy (J) — 10 runs": "4,536.0000",
          "Energy (J) — 50 runs": "22,680.0000",
          "Energy (J) — 100 runs": "45,360.0000",
          "Total Power (W)": "113.4000",
          "Cost NZD — 10 runs": "$0.006930",
          "Cost NZD — 50 runs": "$0.034650",
          "Cost NZD — 100 runs": "$0.069300",
        },
      },
    ],
  },
  {
    id: 10,
    title: "XSS in Flask Search Route",
    category: "Vulnerability Assessment",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Review this Flask code for XSS vulnerabilities:

@app.route('/search')
def search():
    query = request.args.get('q', '')
    results = perform_search(query)
    html = f'''
<h1>Search Results for: {query}</h1>
<div>Found {len(results)} results</div>
<ul>{'''join([f'<li>{result}</li>' for result in results])}</ul>
'''
    return render_template_string(html)

Context: The search page is public-facing. The query parameter is rendered directly into HTML without escaping. The application handles authenticated sessions with sensitive user data.

Respond with:
1. Assessment: XSS type and severity (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying the vulnerable lines
3. Immediate Actions: exactly 3 bullet points including a secure code fix
4. Prevention: exactly 2 bullet points on output encoding practices`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "13.928",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "8.656",
          "RAM (MB)": "2469.527",
          "Network (MB)": "0.138",
          "Energy (kWh)": "0.132364",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "4.0",
        inputTokens: 80,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014620",
          "Avg Energy (J) — 1 run": "526.3200",
          "Avg Cost NZD — 1 run": "$0.000932",
          "Energy (kWh) — 10 runs": "0.00146200",
          "Energy (kWh) — 50 runs": "0.00731000",
          "Energy (kWh) — 100 runs": "0.01462000",
          "Energy (J) — 10 runs": "5,263.2000",
          "Energy (J) — 50 runs": "26,316.0000",
          "Energy (J) — 100 runs": "52,632.0000",
          "Total Power (W)": "131.5800",
          "Cost NZD — 10 runs": "$0.009323",
          "Cost NZD — 50 runs": "$0.046613",
          "Cost NZD — 100 runs": "$0.093225",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 80,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010320",
          "Avg Energy (J) — 1 run": "371.5200",
          "Avg Cost NZD — 1 run": "$0.000089",
          "Energy (kWh) — 10 runs": "0.00103200",
          "Energy (kWh) — 50 runs": "0.00516000",
          "Energy (kWh) — 100 runs": "0.01032000",
          "Energy (J) — 10 runs": "3,715.2000",
          "Energy (J) — 50 runs": "18,576.0000",
          "Energy (J) — 100 runs": "37,152.0000",
          "Total Power (W)": "92.8800",
          "Cost NZD — 10 runs": "$0.000887",
          "Cost NZD — 50 runs": "$0.004434",
          "Cost NZD — 100 runs": "$0.008869",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 80,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012900",
          "Avg Energy (J) — 1 run": "464.4000",
          "Avg Cost NZD — 1 run": "$0.000709",
          "Energy (kWh) — 10 runs": "0.00129000",
          "Energy (kWh) — 50 runs": "0.00645000",
          "Energy (kWh) — 100 runs": "0.01290000",
          "Energy (J) — 10 runs": "4,644.0000",
          "Energy (J) — 50 runs": "23,220.0000",
          "Energy (J) — 100 runs": "46,440.0000",
          "Total Power (W)": "116.1000",
          "Cost NZD — 10 runs": "$0.007095",
          "Cost NZD — 50 runs": "$0.035475",
          "Cost NZD — 100 runs": "$0.070950",
        },
      },
    ],
  },
  {
    id: 11,
    title: "API Authentication Bypass",
    category: "Vulnerability Assessment",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Find the authentication flaw in this API endpoint:

@app.route('/api/admin/users', methods=['GET'])
def get_all_users():
    auth_header = request.headers.get('Authorization')
    if auth_header and 'admin' in auth_header:
        return jsonify(database.get_all_users())
    return jsonify({'error': 'Unauthorized'}), 401

Test results:
Authorization: Bearer user_token_12345 → Denied ✓
Authorization: Bearer admin_fake_token → Allowed ✗
Authorization: regular_user_admin_privileges → Allowed ✗

Context: This endpoint returns all user records including passwords and PII. The check uses substring matching on the header value rather than validating a cryptographic token.

Respond with:
1. Assessment: vulnerability type and severity (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying the logic flaws
3. Immediate Actions: exactly 3 bullet points including a secure code fix
4. Prevention: exactly 2 bullet points on API authentication best practices`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "15.429",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "28.518",
          "RAM (MB)": "2469.922",
          "Network (MB)": "0.151",
          "Energy (kWh)": "0.145386",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00019992",
          "Avg Energy (J) — 1 run": "719.7120",
          "Avg Cost NZD — 1 run": "$0.001310",
          "Energy (kWh) — 10 runs": "0.00199920",
          "Energy (kWh) — 50 runs": "0.00999600",
          "Energy (kWh) — 100 runs": "0.01999200",
          "Energy (J) — 10 runs": "7,197.1200",
          "Energy (J) — 50 runs": "35,985.6000",
          "Energy (J) — 100 runs": "71,971.2000",
          "Total Power (W)": "130.8567",
          "Cost NZD — 10 runs": "$0.013101",
          "Cost NZD — 50 runs": "$0.065505",
          "Cost NZD — 100 runs": "$0.131010",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014112",
          "Avg Energy (J) — 1 run": "508.0320",
          "Avg Cost NZD — 1 run": "$0.000121",
          "Energy (kWh) — 10 runs": "0.00141120",
          "Energy (kWh) — 50 runs": "0.00705600",
          "Energy (kWh) — 100 runs": "0.01411200",
          "Energy (J) — 10 runs": "5,080.3200",
          "Energy (J) — 50 runs": "25,401.6000",
          "Energy (J) — 100 runs": "50,803.2000",
          "Total Power (W)": "92.3695",
          "Cost NZD — 10 runs": "$0.001213",
          "Cost NZD — 50 runs": "$0.006064",
          "Cost NZD — 100 runs": "$0.012128",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017640",
          "Avg Energy (J) — 1 run": "635.0400",
          "Avg Cost NZD — 1 run": "$0.000970",
          "Energy (kWh) — 10 runs": "0.00176400",
          "Energy (kWh) — 50 runs": "0.00882000",
          "Energy (kWh) — 100 runs": "0.01764000",
          "Energy (J) — 10 runs": "6,350.4000",
          "Energy (J) — 50 runs": "31,752.0000",
          "Energy (J) — 100 runs": "63,504.0000",
          "Total Power (W)": "115.4618",
          "Cost NZD — 10 runs": "$0.009702",
          "Cost NZD — 50 runs": "$0.048510",
          "Cost NZD — 100 runs": "$0.097020",
        },
      },
    ],
  },
  {
    id: 12,
    title: "npm Dependency CVE Prioritisation",
    category: "Vulnerability Assessment",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD]
Prioritize remediation for these npm vulnerabilities in a payment processing module:

Package: lodash@4.17.15
CVE: CVE-2020-8203 | Severity: HIGH | CVSS: 7.4
Issue: Prototype pollution via _.defaultsDeep() — can lead to DoS or RCE
Fix: Upgrade to lodash >= 4.17.21

Package: axios@0.19.0
CVE: CVE-2021-3749 | Severity: MEDIUM | CVSS: 5.3
Issue: SSRF via malformed URL parsing
Fix: Upgrade to axios >= 0.21.2

Context: Both packages are used in the payment processing module which handles live customer card data and PII. A breaking API change exists between axios 0.19 and 0.21. Deployment requires a full regression test cycle (estimated 3 days).

Respond with:
1. Assessment: combined risk level and patch priority order (1 sentence)
2. Key Indicators: exactly 3 bullet points on exploitability and business impact
3. Immediate Actions: exactly 3 bullet points on patching and interim mitigations
4. Prevention: exactly 2 bullet points on dependency management process`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "14.773",
        inputTokens: 218.88,
        cost: "$0.00",
        custom: {
          "CPU (%)": "14.194",
          "RAM (MB)": "2470.18",
          "Network (MB)": "0.144",
          "Energy (kWh)": "0.14008",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "4.0",
        inputTokens: 73,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014382",
          "Avg Energy (J) — 1 run": "517.7520",
          "Avg Cost NZD — 1 run": "$0.000927",
          "Energy (kWh) — 10 runs": "0.00143820",
          "Energy (kWh) — 50 runs": "0.00719100",
          "Energy (kWh) — 100 runs": "0.01438200",
          "Energy (J) — 10 runs": "5,177.5200",
          "Energy (J) — 50 runs": "25,887.6000",
          "Energy (J) — 100 runs": "51,775.2000",
          "Total Power (W)": "129.4380",
          "Cost NZD — 10 runs": "$0.009265",
          "Cost NZD — 50 runs": "$0.046324",
          "Cost NZD — 100 runs": "$0.092648",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 73,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010152",
          "Avg Energy (J) — 1 run": "365.4720",
          "Avg Cost NZD — 1 run": "$0.000087",
          "Energy (kWh) — 10 runs": "0.00101520",
          "Energy (kWh) — 50 runs": "0.00507600",
          "Energy (kWh) — 100 runs": "0.01015200",
          "Energy (J) — 10 runs": "3,654.7200",
          "Energy (J) — 50 runs": "18,273.6000",
          "Energy (J) — 100 runs": "36,547.2000",
          "Total Power (W)": "91.3680",
          "Cost NZD — 10 runs": "$0.000872",
          "Cost NZD — 50 runs": "$0.004362",
          "Cost NZD — 100 runs": "$0.008724",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 73,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012690",
          "Avg Energy (J) — 1 run": "456.8400",
          "Avg Cost NZD — 1 run": "$0.000698",
          "Energy (kWh) — 10 runs": "0.00126900",
          "Energy (kWh) — 50 runs": "0.00634500",
          "Energy (kWh) — 100 runs": "0.01269000",
          "Energy (J) — 10 runs": "4,568.4000",
          "Energy (J) — 50 runs": "22,842.0000",
          "Energy (J) — 100 runs": "45,684.0000",
          "Total Power (W)": "114.2100",
          "Cost NZD — 10 runs": "$0.006980",
          "Cost NZD — 50 runs": "$0.034898",
          "Cost NZD — 100 runs": "$0.069795",
        },
      },
    ],
  },
  // ── COMPLIANCE ─────────────────────────────────────────────
  {
    id: 13,
    title: "Plaintext PII in Public S3 Bucket",
    category: "Compliance",
    difficulty: "Easy",
    fullPrompt: `[DIFFICULTY: EASY]
Classify this data storage configuration and flag compliance violations:

Database: customer_records | Table: users
Sample fields:
  SSN: 123-45-6789 (plaintext)
  Credit Card: 4532-1234-5678-9010 (plaintext)
  Medical History: diabetes, hypertension (plaintext)
  Email, IP address, last login (plaintext)

Storage: AWS S3 bucket "customer-data-backup"
Encryption: None
Access: Public read enabled
Backup retention: 7 years
Region: us-east-1

Context: The company operates under GDPR, HIPAA, and PCI-DSS. No encryption is applied at rest or in transit. The S3 bucket is publicly accessible on the internet.

Respond with:
1. Assessment: regulatory breach severity and frameworks violated (1 sentence)
2. Key Indicators: exactly 3 bullet points on the most critical violations
3. Immediate Actions: exactly 3 bullet points in remediation priority order
4. Prevention: exactly 2 bullet points on data classification policy controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "20.577",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "8.819",
          "RAM (MB)": "2470.567",
          "Network (MB)": "0.171",
          "Energy (kWh)": "0.191698",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "5.5",
        inputTokens: 80,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00019720",
          "Avg Energy (J) — 1 run": "709.9200",
          "Avg Cost NZD — 1 run": "$0.001303",
          "Energy (kWh) — 10 runs": "0.00197200",
          "Energy (kWh) — 50 runs": "0.00986000",
          "Energy (kWh) — 100 runs": "0.01972000",
          "Energy (J) — 10 runs": "7,099.2000",
          "Energy (J) — 50 runs": "35,496.0000",
          "Energy (J) — 100 runs": "70,992.0000",
          "Total Power (W)": "129.0764",
          "Cost NZD — 10 runs": "$0.013035",
          "Cost NZD — 50 runs": "$0.065175",
          "Cost NZD — 100 runs": "$0.130350",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 80,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00013920",
          "Avg Energy (J) — 1 run": "501.1200",
          "Avg Cost NZD — 1 run": "$0.000120",
          "Energy (kWh) — 10 runs": "0.00139200",
          "Energy (kWh) — 50 runs": "0.00696000",
          "Energy (kWh) — 100 runs": "0.01392000",
          "Energy (J) — 10 runs": "5,011.2000",
          "Energy (J) — 50 runs": "25,056.0000",
          "Energy (J) — 100 runs": "50,112.0000",
          "Total Power (W)": "91.1127",
          "Cost NZD — 10 runs": "$0.001196",
          "Cost NZD — 50 runs": "$0.005981",
          "Cost NZD — 100 runs": "$0.011963",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 80,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017400",
          "Avg Energy (J) — 1 run": "626.4000",
          "Avg Cost NZD — 1 run": "$0.000957",
          "Energy (kWh) — 10 runs": "0.00174000",
          "Energy (kWh) — 50 runs": "0.00870000",
          "Energy (kWh) — 100 runs": "0.01740000",
          "Energy (J) — 10 runs": "6,264.0000",
          "Energy (J) — 50 runs": "31,320.0000",
          "Energy (J) — 100 runs": "62,640.0000",
          "Total Power (W)": "113.8909",
          "Cost NZD — 10 runs": "$0.009570",
          "Cost NZD — 50 runs": "$0.047850",
          "Cost NZD — 100 runs": "$0.095700",
        },
      },
    ],
  },
  {
    id: 14,
    title: "Over-Privileged AWS IAM User",
    category: "Compliance",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Audit these AWS IAM permissions for least privilege violations:

User: junior_developer@company.com
Assigned permissions:
  s3:* (full access to all buckets)
  ec2:* (full EC2 control)
  rds:* (full RDS access including delete)
  iam:CreateUser, iam:AttachUserPolicy
  logs:DeleteLogGroup

Actual role: Frontend developer — needs S3 read access for static assets only.

Context: The company is SOC 2 Type II certified. Least privilege is a certification requirement. This misconfiguration has existed for 8 months. The developer's account was compromised in a phishing attempt last quarter.

Respond with:
1. Assessment: risk level and compliance impact (1 sentence)
2. Key Indicators: exactly 3 bullet points on the most dangerous permissions
3. Immediate Actions: exactly 3 bullet points including corrected IAM policy scope
4. Prevention: exactly 2 bullet points on IAM governance process`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "21.455",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "6.276",
          "RAM (MB)": "2470.97",
          "Network (MB)": "0.175",
          "Energy (kWh)": "0.199045",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "4.0",
        inputTokens: 65,
        outputTokens: 300,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012410",
          "Avg Energy (J) — 1 run": "446.7600",
          "Avg Cost NZD — 1 run": "$0.000796",
          "Energy (kWh) — 10 runs": "0.00124100",
          "Energy (kWh) — 50 runs": "0.00620500",
          "Energy (kWh) — 100 runs": "0.01241000",
          "Energy (J) — 10 runs": "4,467.6000",
          "Energy (J) — 50 runs": "22,338.0000",
          "Energy (J) — 100 runs": "44,676.0000",
          "Total Power (W)": "111.6900",
          "Cost NZD — 10 runs": "$0.007961",
          "Cost NZD — 50 runs": "$0.039806",
          "Cost NZD — 100 runs": "$0.079613",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 65,
        outputTokens: 300,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00008760",
          "Avg Energy (J) — 1 run": "315.3600",
          "Avg Cost NZD — 1 run": "$0.000075",
          "Energy (kWh) — 10 runs": "0.00087600",
          "Energy (kWh) — 50 runs": "0.00438000",
          "Energy (kWh) — 100 runs": "0.00876000",
          "Energy (J) — 10 runs": "3,153.6000",
          "Energy (J) — 50 runs": "15,768.0000",
          "Energy (J) — 100 runs": "31,536.0000",
          "Total Power (W)": "78.8400",
          "Cost NZD — 10 runs": "$0.000753",
          "Cost NZD — 50 runs": "$0.003764",
          "Cost NZD — 100 runs": "$0.007528",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 65,
        outputTokens: 300,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010950",
          "Avg Energy (J) — 1 run": "394.2000",
          "Avg Cost NZD — 1 run": "$0.000602",
          "Energy (kWh) — 10 runs": "0.00109500",
          "Energy (kWh) — 50 runs": "0.00547500",
          "Energy (kWh) — 100 runs": "0.01095000",
          "Energy (J) — 10 runs": "3,942.0000",
          "Energy (J) — 50 runs": "19,710.0000",
          "Energy (J) — 100 runs": "39,420.0000",
          "Total Power (W)": "98.5500",
          "Cost NZD — 10 runs": "$0.006023",
          "Cost NZD — 50 runs": "$0.030113",
          "Cost NZD — 100 runs": "$0.060225",
        },
      },
    ],
  },
  {
    id: 15,
    title: "HIPAA Cloud Misconfiguration",
    category: "Compliance",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD]
Identify critical misconfigurations in this HIPAA-regulated cloud environment:

AWS EC2: production-web-server (stores patient health records)
- Security Group: 0.0.0.0/0 on port 22 (SSH open to internet)
- Security Group: 0.0.0.0/0 on port 3306 (MySQL open to internet)
- IAM Role: AdministratorAccess policy attached
- OS: Ubuntu 18.04 (end-of-life, unpatched since April 2023)
- SSH: root login enabled
- MySQL: default credentials in use
- EBS: unencrypted
- CloudTrail: disabled
- VPC Flow Logs: disabled
- Backups: none configured

Context: This server is production, internet-facing, and holds PHI under HIPAA. AdministratorAccess on EC2 means a compromised instance owns the entire AWS account. Disabled logging means a breach may already be undetected.

Respond with:
1. Assessment: HIPAA compliance status and overall risk level (1 sentence)
2. Key Indicators: exactly 3 bullet points on the highest-severity misconfigurations
3. Immediate Actions: exactly 3 bullet points in order of urgency
4. Prevention: exactly 2 bullet points on cloud security posture management`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "20.225",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "5.624",
          "RAM (MB)": "2471.326",
          "Network (MB)": "0.173",
          "Energy (kWh)": "0.188778",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00019992",
          "Avg Energy (J) — 1 run": "719.7120",
          "Avg Cost NZD — 1 run": "$0.001310",
          "Energy (kWh) — 10 runs": "0.00199920",
          "Energy (kWh) — 50 runs": "0.00999600",
          "Energy (kWh) — 100 runs": "0.01999200",
          "Energy (J) — 10 runs": "7,197.1200",
          "Energy (J) — 50 runs": "35,985.6000",
          "Energy (J) — 100 runs": "71,971.2000",
          "Total Power (W)": "130.8567",
          "Cost NZD — 10 runs": "$0.013101",
          "Cost NZD — 50 runs": "$0.065505",
          "Cost NZD — 100 runs": "$0.131010",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014112",
          "Avg Energy (J) — 1 run": "508.0320",
          "Avg Cost NZD — 1 run": "$0.000121",
          "Energy (kWh) — 10 runs": "0.00141120",
          "Energy (kWh) — 50 runs": "0.00705600",
          "Energy (kWh) — 100 runs": "0.01411200",
          "Energy (J) — 10 runs": "5,080.3200",
          "Energy (J) — 50 runs": "25,401.6000",
          "Energy (J) — 100 runs": "50,803.2000",
          "Total Power (W)": "92.3695",
          "Cost NZD — 10 runs": "$0.001213",
          "Cost NZD — 50 runs": "$0.006064",
          "Cost NZD — 100 runs": "$0.012128",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017640",
          "Avg Energy (J) — 1 run": "635.0400",
          "Avg Cost NZD — 1 run": "$0.000970",
          "Energy (kWh) — 10 runs": "0.00176400",
          "Energy (kWh) — 50 runs": "0.00882000",
          "Energy (kWh) — 100 runs": "0.01764000",
          "Energy (J) — 10 runs": "6,350.4000",
          "Energy (J) — 50 runs": "31,752.0000",
          "Energy (J) — 100 runs": "63,504.0000",
          "Total Power (W)": "115.4618",
          "Cost NZD — 10 runs": "$0.009702",
          "Cost NZD — 50 runs": "$0.048510",
          "Cost NZD — 100 runs": "$0.097020",
        },
      },
    ],
  },
  // ── INCIDENT RESPONSE ──────────────────────────────────────
  {
    id: 16,
    title: "Ransomware Outbreak Timeline",
    category: "Incident Response",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Analyse this ransomware incident and produce a response plan:

Timeline:
06:45: User opened "Invoice.pdf.exe" from email attachment
06:47: cipher.exe spawned, file encryption begins
06:50: 2,500 files encrypted on user laptop (.locked extension)
06:55: Encryption spreads to mapped network drives (10,000+ files affected)
07:00: Ransom note displayed — 5 BTC demanded, 72-hour deadline
07:05: User reports inability to open files, alerts IT

Current status: 1 laptop and 3 file servers affected. 50+ users report access loss. Last backup was 48 hours ago. Lateral spread status unknown.

Respond with:
1. Assessment: ransomware family likelihood and containment urgency (1 sentence)
2. Key Indicators: exactly 3 bullet points on infection vectors and spread
3. Immediate Actions: exactly 3 bullet points for containment in priority order
4. Prevention: exactly 2 bullet points on backup and email gateway controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "19.889",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "7.559",
          "RAM (MB)": "2471.627",
          "Network (MB)": "0.168",
          "Energy (kWh)": "0.185877",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "8.0",
        inputTokens: 103,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00027302",
          "Avg Energy (J) — 1 run": "982.8720",
          "Avg Cost NZD — 1 run": "$0.001818",
          "Energy (kWh) — 10 runs": "0.00273020",
          "Energy (kWh) — 50 runs": "0.01365100",
          "Energy (kWh) — 100 runs": "0.02730200",
          "Energy (J) — 10 runs": "9,828.7200",
          "Energy (J) — 50 runs": "49,143.6000",
          "Energy (J) — 100 runs": "98,287.2000",
          "Total Power (W)": "122.8590",
          "Cost NZD — 10 runs": "$0.018175",
          "Cost NZD — 50 runs": "$0.090874",
          "Cost NZD — 100 runs": "$0.181748",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "8.0",
        inputTokens: 103,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00019272",
          "Avg Energy (J) — 1 run": "693.7920",
          "Avg Cost NZD — 1 run": "$0.000166",
          "Energy (kWh) — 10 runs": "0.00192720",
          "Energy (kWh) — 50 runs": "0.00963600",
          "Energy (kWh) — 100 runs": "0.01927200",
          "Energy (J) — 10 runs": "6,937.9200",
          "Energy (J) — 50 runs": "34,689.6000",
          "Energy (J) — 100 runs": "69,379.2000",
          "Total Power (W)": "86.7240",
          "Cost NZD — 10 runs": "$0.001656",
          "Cost NZD — 50 runs": "$0.008281",
          "Cost NZD — 100 runs": "$0.016562",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "8.0",
        inputTokens: 103,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00024090",
          "Avg Energy (J) — 1 run": "867.2400",
          "Avg Cost NZD — 1 run": "$0.001325",
          "Energy (kWh) — 10 runs": "0.00240900",
          "Energy (kWh) — 50 runs": "0.01204500",
          "Energy (kWh) — 100 runs": "0.02409000",
          "Energy (J) — 10 runs": "8,672.4000",
          "Energy (J) — 50 runs": "43,362.0000",
          "Energy (J) — 100 runs": "86,724.0000",
          "Total Power (W)": "108.4050",
          "Cost NZD — 10 runs": "$0.013250",
          "Cost NZD — 50 runs": "$0.066248",
          "Cost NZD — 100 runs": "$0.132495",
        },
      },
    ],
  },
  {
    id: 17,
    title: "AWS GuardDuty S3 Exfiltration Alert",
    category: "Incident Response",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD]
Triage this AWS GuardDuty data breach alert:

Alert: Data exfiltration — S3 bucket accessed from Tor exit node
Bucket: customer-database-exports (500K customer records)
Window: 2:30 AM – 4:15 AM (off-hours)
Data downloaded: 12 GB (~300K customer records)
Source IP: 185.220.102.18 (Tor exit node, Germany)
Access key: belongs to "backup_script" service account
Key last rotated: 2 years ago | Key scope: s3:GetObject on all buckets

Context: The company operates under GDPR (72-hour breach notification rule). The access key was likely leaked via a public GitHub commit 6 months ago. The bucket contains names, emails, hashed passwords, and partial card numbers.

Respond with:
1. Assessment: confirmed breach or suspected breach, and severity (1 sentence)
2. Key Indicators: exactly 3 bullet points on access method and exposure scope
3. Immediate Actions: exactly 3 bullet points covering technical and legal steps
4. Prevention: exactly 2 bullet points on secrets management and bucket controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "21.287",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "8.798",
          "RAM (MB)": "2471.921",
          "Network (MB)": "0.173",
          "Energy (kWh)": "0.198463",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "8.0",
        inputTokens: 80,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00026520",
          "Avg Energy (J) — 1 run": "954.7200",
          "Avg Cost NZD — 1 run": "$0.001799",
          "Energy (kWh) — 10 runs": "0.00265200",
          "Energy (kWh) — 50 runs": "0.01326000",
          "Energy (kWh) — 100 runs": "0.02652000",
          "Energy (J) — 10 runs": "9,547.2000",
          "Energy (J) — 50 runs": "47,736.0000",
          "Energy (J) — 100 runs": "95,472.0000",
          "Total Power (W)": "119.3400",
          "Cost NZD — 10 runs": "$0.017985",
          "Cost NZD — 50 runs": "$0.089925",
          "Cost NZD — 100 runs": "$0.179850",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "8.0",
        inputTokens: 80,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018720",
          "Avg Energy (J) — 1 run": "673.9200",
          "Avg Cost NZD — 1 run": "$0.000161",
          "Energy (kWh) — 10 runs": "0.00187200",
          "Energy (kWh) — 50 runs": "0.00936000",
          "Energy (kWh) — 100 runs": "0.01872000",
          "Energy (J) — 10 runs": "6,739.2000",
          "Energy (J) — 50 runs": "33,696.0000",
          "Energy (J) — 100 runs": "67,392.0000",
          "Total Power (W)": "84.2400",
          "Cost NZD — 10 runs": "$0.001609",
          "Cost NZD — 50 runs": "$0.008044",
          "Cost NZD — 100 runs": "$0.016088",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "8.0",
        inputTokens: 80,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00023400",
          "Avg Energy (J) — 1 run": "842.4000",
          "Avg Cost NZD — 1 run": "$0.001287",
          "Energy (kWh) — 10 runs": "0.00234000",
          "Energy (kWh) — 50 runs": "0.01170000",
          "Energy (kWh) — 100 runs": "0.02340000",
          "Energy (J) — 10 runs": "8,424.0000",
          "Energy (J) — 50 runs": "42,120.0000",
          "Energy (J) — 100 runs": "84,240.0000",
          "Total Power (W)": "105.3000",
          "Cost NZD — 10 runs": "$0.012870",
          "Cost NZD — 50 runs": "$0.064350",
          "Cost NZD — 100 runs": "$0.128700",
        },
      },
    ],
  },
  {
    id: 18,
    title: "30-Day APT Campaign",
    category: "Incident Response",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD]
Identify Advanced Persistent Threat indicators across this 30-day timeline:

Week 1: Spear-phishing to finance team (CEO impersonation); 3 users entered credentials on a fake SSO portal.
Week 2: Compromised account login at 3 AM; lateral movement to IT admin workstation via RDP.
Week 3: Privilege escalation via unpatched Windows CVE; new domain admin account created ("svc_backup_admin"); persistent backdoor via scheduled task.
Week 4: Sensitive files staged to hidden network share; slow exfiltration at 500 MB/day to blend with normal traffic; logs cleared, encrypted channels used.

Context: The attacker has maintained access for 30 days undetected. Exfiltration totals ~14 GB. The organisation has no threat hunting programme currently in place.

Respond with:
1. Assessment: APT confidence level and estimated campaign stage (1 sentence)
2. Key Indicators: exactly 3 MITRE ATT&CK tactics observed with technique IDs
3. Immediate Actions: exactly 3 bullet points for containment without tipping off the attacker
4. Prevention: exactly 2 bullet points on detection and hunting controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "19.221",
        inputTokens: 219.467,
        cost: "$0.00",
        custom: {
          "CPU (%)": "9.677",
          "RAM (MB)": "2472.139",
          "Network (MB)": "0.169",
          "Energy (kWh)": "0.179831",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "8.0",
        inputTokens: 85,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00026690",
          "Avg Energy (J) — 1 run": "960.8400",
          "Avg Cost NZD — 1 run": "$0.001803",
          "Energy (kWh) — 10 runs": "0.00266900",
          "Energy (kWh) — 50 runs": "0.01334500",
          "Energy (kWh) — 100 runs": "0.02669000",
          "Energy (J) — 10 runs": "9,608.4000",
          "Energy (J) — 50 runs": "48,042.0000",
          "Energy (J) — 100 runs": "96,084.0000",
          "Total Power (W)": "120.1050",
          "Cost NZD — 10 runs": "$0.018026",
          "Cost NZD — 50 runs": "$0.090131",
          "Cost NZD — 100 runs": "$0.180263",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "8.0",
        inputTokens: 85,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018840",
          "Avg Energy (J) — 1 run": "678.2400",
          "Avg Cost NZD — 1 run": "$0.000162",
          "Energy (kWh) — 10 runs": "0.00188400",
          "Energy (kWh) — 50 runs": "0.00942000",
          "Energy (kWh) — 100 runs": "0.01884000",
          "Energy (J) — 10 runs": "6,782.4000",
          "Energy (J) — 50 runs": "33,912.0000",
          "Energy (J) — 100 runs": "67,824.0000",
          "Total Power (W)": "84.7800",
          "Cost NZD — 10 runs": "$0.001619",
          "Cost NZD — 50 runs": "$0.008095",
          "Cost NZD — 100 runs": "$0.016191",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "8.0",
        inputTokens: 85,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00023550",
          "Avg Energy (J) — 1 run": "847.8000",
          "Avg Cost NZD — 1 run": "$0.001295",
          "Energy (kWh) — 10 runs": "0.00235500",
          "Energy (kWh) — 50 runs": "0.01177500",
          "Energy (kWh) — 100 runs": "0.02355000",
          "Energy (J) — 10 runs": "8,478.0000",
          "Energy (J) — 50 runs": "42,390.0000",
          "Energy (J) — 100 runs": "84,780.0000",
          "Total Power (W)": "105.9750",
          "Cost NZD — 10 runs": "$0.012953",
          "Cost NZD — 50 runs": "$0.064763",
          "Cost NZD — 100 runs": "$0.129525",
        },
      },
    ],
  },
  // ── SOC OPERATIONS ─────────────────────────────────────────
  {
    id: 19,
    title: "Account Takeover SIEM Alert",
    category: "SOC Operations",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Triage this SIEM alert:

Alert: Multiple failed logins followed by success
User: admin@company.com
Normal location: USA
Source IP: 203.0.113.45 (Singapore)
Failed attempts: 47 in 5 minutes → Success on attempt 48 at 04:23 UTC
Post-login actions:
  Password changed
  New user created: "temp_admin"
  Employee database downloaded
  2FA disabled on account

Context: Last legitimate login was yesterday at 5 PM from a US IP. The admin account has access to all HR, finance, and infrastructure systems. No travel or VPN use was scheduled.

Respond with:
1. Classification: true positive or false positive, and severity (1 sentence)
2. Key Indicators: exactly 3 bullet points confirming or ruling out compromise
3. Immediate Actions: exactly 3 bullet points including escalation decision
4. Prevention: exactly 2 bullet points on account takeover controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "19.374",
        inputTokens: 217.78,
        cost: "$0.00",
        custom: {
          "CPU (%)": "7.988",
          "RAM (MB)": "2472.512",
          "Network (MB)": "0.717",
          "Energy (kWh)": "0.181198",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00015130",
          "Avg Energy (J) — 1 run": "544.6800",
          "Avg Cost NZD — 1 run": "$0.000945",
          "Energy (kWh) — 10 runs": "0.00151300",
          "Energy (kWh) — 50 runs": "0.00756500",
          "Energy (kWh) — 100 runs": "0.01513000",
          "Energy (J) — 10 runs": "5,446.8000",
          "Energy (J) — 50 runs": "27,234.0000",
          "Energy (J) — 100 runs": "54,468.0000",
          "Total Power (W)": "136.1700",
          "Cost NZD — 10 runs": "$0.009446",
          "Cost NZD — 50 runs": "$0.047231",
          "Cost NZD — 100 runs": "$0.094463",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010680",
          "Avg Energy (J) — 1 run": "384.4800",
          "Avg Cost NZD — 1 run": "$0.000092",
          "Energy (kWh) — 10 runs": "0.00106800",
          "Energy (kWh) — 50 runs": "0.00534000",
          "Energy (kWh) — 100 runs": "0.01068000",
          "Energy (J) — 10 runs": "3,844.8000",
          "Energy (J) — 50 runs": "19,224.0000",
          "Energy (J) — 100 runs": "38,448.0000",
          "Total Power (W)": "96.1200",
          "Cost NZD — 10 runs": "$0.000918",
          "Cost NZD — 50 runs": "$0.004589",
          "Cost NZD — 100 runs": "$0.009178",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00013350",
          "Avg Energy (J) — 1 run": "480.6000",
          "Avg Cost NZD — 1 run": "$0.000734",
          "Energy (kWh) — 10 runs": "0.00133500",
          "Energy (kWh) — 50 runs": "0.00667500",
          "Energy (kWh) — 100 runs": "0.01335000",
          "Energy (J) — 10 runs": "4,806.0000",
          "Energy (J) — 50 runs": "24,030.0000",
          "Energy (J) — 100 runs": "48,060.0000",
          "Total Power (W)": "120.1500",
          "Cost NZD — 10 runs": "$0.007343",
          "Cost NZD — 50 runs": "$0.036713",
          "Cost NZD — 100 runs": "$0.073425",
        },
      },
    ],
  },
  {
    id: 20,
    title: "Unusual Outbound Upload Volume",
    category: "SOC Operations",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Triage this security alert:

Alert: Unusual outbound traffic volume
Source: workstation_finance_12
User: sarah.johnson@company.com
Destination: 45.33.32.156:443 (Netherlands hosting provider)
Domain: cloudbackup-secure.net (registered 5 days ago)
Traffic: 2.5 GB HTTPS upload in 20 minutes
User's typical daily upload: ~50 MB | Today: 2,500 MB (50x baseline)
Time: 2:15 PM (normal work hours)
Location: office (not remote)

Context: Sarah is a Finance Analyst with access to payroll and customer payment records. The destination domain was registered recently. No cloud backup tool is authorised for finance workstations per policy.

Respond with:
1. Classification: likely cause and priority level (1 sentence)
2. Key Indicators: exactly 3 bullet points distinguishing exfiltration vs legitimate use
3. Immediate Actions: exactly 3 bullet points — investigate, block, or escalate
4. Prevention: exactly 2 bullet points on DLP and egress filtering controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "13.749",
        inputTokens: 211.707,
        cost: "$0.00",
        custom: {
          "CPU (%)": "7.773",
          "RAM (MB)": "2472.87",
          "Network (MB)": "0.142",
          "Energy (kWh)": "0.132996",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "3.5",
        inputTokens: 73,
        outputTokens: 300,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012682",
          "Avg Energy (J) — 1 run": "456.5520",
          "Avg Cost NZD — 1 run": "$0.000803",
          "Energy (kWh) — 10 runs": "0.00126820",
          "Energy (kWh) — 50 runs": "0.00634100",
          "Energy (kWh) — 100 runs": "0.01268200",
          "Energy (J) — 10 runs": "4,565.5200",
          "Energy (J) — 50 runs": "22,827.6000",
          "Energy (J) — 100 runs": "45,655.2000",
          "Total Power (W)": "130.4434",
          "Cost NZD — 10 runs": "$0.008027",
          "Cost NZD — 50 runs": "$0.040136",
          "Cost NZD — 100 runs": "$0.080273",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "3.5",
        inputTokens: 73,
        outputTokens: 300,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00008952",
          "Avg Energy (J) — 1 run": "322.2720",
          "Avg Cost NZD — 1 run": "$0.000077",
          "Energy (kWh) — 10 runs": "0.00089520",
          "Energy (kWh) — 50 runs": "0.00447600",
          "Energy (kWh) — 100 runs": "0.00895200",
          "Energy (J) — 10 runs": "3,222.7200",
          "Energy (J) — 50 runs": "16,113.6000",
          "Energy (J) — 100 runs": "32,227.2000",
          "Total Power (W)": "92.0777",
          "Cost NZD — 10 runs": "$0.000769",
          "Cost NZD — 50 runs": "$0.003847",
          "Cost NZD — 100 runs": "$0.007693",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "3.5",
        inputTokens: 73,
        outputTokens: 300,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00011190",
          "Avg Energy (J) — 1 run": "402.8400",
          "Avg Cost NZD — 1 run": "$0.000615",
          "Energy (kWh) — 10 runs": "0.00111900",
          "Energy (kWh) — 50 runs": "0.00559500",
          "Energy (kWh) — 100 runs": "0.01119000",
          "Energy (J) — 10 runs": "4,028.4000",
          "Energy (J) — 50 runs": "20,142.0000",
          "Energy (J) — 100 runs": "40,284.0000",
          "Total Power (W)": "115.0971",
          "Cost NZD — 10 runs": "$0.006155",
          "Cost NZD — 50 runs": "$0.030773",
          "Cost NZD — 100 runs": "$0.061545",
        },
      },
    ],
  },
  {
    id: 21,
    title: "WAF False Positive — QA Testing",
    category: "SOC Operations",
    difficulty: "Easy",
    fullPrompt: `[DIFFICULTY: EASY]
Determine if this WAF alert is a true or false positive:

Alert: SQL injection attempt detected (WAF Rule: SQL_INJECTION_UNION)
URL: /search?q=union%20select%20*%20from%20users
Source IP: 198.51.100.23
Blocked: Yes
Time: 10:45 AM

Investigation findings:
- IP belongs to company HQ network range
- User: qa-team@company.com (internal QA tester)
- QA team calendar: "Security testing — Feb 11, 10:00–12:00" (confirmed)
- 3 prior similar alerts from same IP range during previous QA test cycles

Context: The QA team runs authorised penetration tests monthly. All prior alerts from this IP during testing windows were confirmed false positives.

Respond with:
1. Classification: true positive or false positive, with confidence level (1 sentence)
2. Key Indicators: exactly 3 bullet points supporting your classification
3. Immediate Actions: exactly 3 bullet points including WAF rule adjustment
4. Prevention: exactly 2 bullet points on reducing false positives from authorised testing`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "13.788",
        inputTokens: 215.8,
        cost: "$0.00",
        custom: {
          "CPU (%)": "13.93",
          "RAM (MB)": "2473.1",
          "Network (MB)": "0.142",
          "Energy (kWh)": "0.131109",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "2.5",
        inputTokens: 73,
        outputTokens: 200,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00009282",
          "Avg Energy (J) — 1 run": "334.1520",
          "Avg Cost NZD — 1 run": "$0.000555",
          "Energy (kWh) — 10 runs": "0.00092820",
          "Energy (kWh) — 50 runs": "0.00464100",
          "Energy (kWh) — 100 runs": "0.00928200",
          "Energy (J) — 10 runs": "3,341.5200",
          "Energy (J) — 50 runs": "16,707.6000",
          "Energy (J) — 100 runs": "33,415.2000",
          "Total Power (W)": "133.6608",
          "Cost NZD — 10 runs": "$0.005552",
          "Cost NZD — 50 runs": "$0.027761",
          "Cost NZD — 100 runs": "$0.055523",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "2.5",
        inputTokens: 73,
        outputTokens: 200,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00006552",
          "Avg Energy (J) — 1 run": "235.8720",
          "Avg Cost NZD — 1 run": "$0.000056",
          "Energy (kWh) — 10 runs": "0.00065520",
          "Energy (kWh) — 50 runs": "0.00327600",
          "Energy (kWh) — 100 runs": "0.00655200",
          "Energy (J) — 10 runs": "2,358.7200",
          "Energy (J) — 50 runs": "11,793.6000",
          "Energy (J) — 100 runs": "23,587.2000",
          "Total Power (W)": "94.3488",
          "Cost NZD — 10 runs": "$0.000563",
          "Cost NZD — 50 runs": "$0.002815",
          "Cost NZD — 100 runs": "$0.005631",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "2.5",
        inputTokens: 73,
        outputTokens: 200,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00008190",
          "Avg Energy (J) — 1 run": "294.8400",
          "Avg Cost NZD — 1 run": "$0.000451",
          "Energy (kWh) — 10 runs": "0.00081900",
          "Energy (kWh) — 50 runs": "0.00409500",
          "Energy (kWh) — 100 runs": "0.00819000",
          "Energy (J) — 10 runs": "2,948.4000",
          "Energy (J) — 50 runs": "14,742.0000",
          "Energy (J) — 100 runs": "29,484.0000",
          "Total Power (W)": "117.9360",
          "Cost NZD — 10 runs": "$0.004505",
          "Cost NZD — 50 runs": "$0.022523",
          "Cost NZD — 100 runs": "$0.045045",
        },
      },
    ],
  },
  // ── THREAT INTELLIGENCE ────────────────────────────────────
  {
    id: 22,
    title: "APT29 SolarWinds IOC Match",
    category: "Threat Intelligence",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD]
Assess compromise likelihood using these APT29 IOCs against your environment:

IOCs (SolarWinds supply chain campaign):
Domain: avsvmcloud.com (C2 server)
IP: 13.59.205.66
File hash: ce77d116a074dab7a22a0fd4f2c1ab48
DLL: SolarWinds.Orion.Core.BusinessLayer.dll (trojanized)

Environment findings:
- SolarWinds Orion 2020.2.1 installed (known vulnerable version)
- DNS logs: 3 lookups to avsvmcloud.com (occurred 2 months ago)
- Firewall logs: outbound connection to 13.59.205.66 on port 443
- File scan: hash match found on 2 internal servers

Context: APT29 used this campaign for long-term espionage with months of dwell time. SolarWinds Orion runs with high-privilege service accounts.

Respond with:
1. Assessment: compromise likelihood and investigation urgency (1 sentence)
2. Key Indicators: exactly 3 bullet points from matched IOCs and their significance
3. Immediate Actions: exactly 3 bullet points for containment and forensic scope
4. Prevention: exactly 2 bullet points on supply chain and IOC monitoring controls`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "14.125",
        inputTokens: 220,
        cost: "$0.00",
        custom: {
          "CPU (%)": "9.888",
          "RAM (MB)": "2473.369",
          "Network (MB)": "0.137",
          "Energy (kWh)": "0.134109",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "6.0",
        inputTokens: 90,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00020060",
          "Avg Energy (J) — 1 run": "722.1600",
          "Avg Cost NZD — 1 run": "$0.001312",
          "Energy (kWh) — 10 runs": "0.00200600",
          "Energy (kWh) — 50 runs": "0.01003000",
          "Energy (kWh) — 100 runs": "0.02006000",
          "Energy (J) — 10 runs": "7,221.6000",
          "Energy (J) — 50 runs": "36,108.0000",
          "Energy (J) — 100 runs": "72,216.0000",
          "Total Power (W)": "120.3600",
          "Cost NZD — 10 runs": "$0.013118",
          "Cost NZD — 50 runs": "$0.065588",
          "Cost NZD — 100 runs": "$0.131175",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "6.0",
        inputTokens: 90,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014160",
          "Avg Energy (J) — 1 run": "509.7600",
          "Avg Cost NZD — 1 run": "$0.000122",
          "Energy (kWh) — 10 runs": "0.00141600",
          "Energy (kWh) — 50 runs": "0.00708000",
          "Energy (kWh) — 100 runs": "0.01416000",
          "Energy (J) — 10 runs": "5,097.6000",
          "Energy (J) — 50 runs": "25,488.0000",
          "Energy (J) — 100 runs": "50,976.0000",
          "Total Power (W)": "84.9600",
          "Cost NZD — 10 runs": "$0.001217",
          "Cost NZD — 50 runs": "$0.006084",
          "Cost NZD — 100 runs": "$0.012169",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "6.0",
        inputTokens: 90,
        outputTokens: 500,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017700",
          "Avg Energy (J) — 1 run": "637.2000",
          "Avg Cost NZD — 1 run": "$0.000974",
          "Energy (kWh) — 10 runs": "0.00177000",
          "Energy (kWh) — 50 runs": "0.00885000",
          "Energy (kWh) — 100 runs": "0.01770000",
          "Energy (J) — 10 runs": "6,372.0000",
          "Energy (J) — 50 runs": "31,860.0000",
          "Energy (J) — 100 runs": "63,720.0000",
          "Total Power (W)": "106.2000",
          "Cost NZD — 10 runs": "$0.009735",
          "Cost NZD — 50 runs": "$0.048675",
          "Cost NZD — 100 runs": "$0.097350",
        },
      },
    ],
  },
  {
    id: 23,
    title: "Dark Web Credential Listing",
    category: "Threat Intelligence",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD]
Assess this dark web intelligence finding for your organisation:

Source: Russian-language dark web forum
Listing: "Premium corporate database — US tech company"
Seller: DataBroker_RU (verified, 156 prior transactions)
Contents:
  50,000 customer records (names, emails, passwords)
  5,000 employee credentials including VPN access
  Internal network documentation
  Source code repository access tokens
Price: $15,000 BTC
Data claimed: "freshly harvested — January 2025"
Verification: 100-record sample confirmed real company email addresses

Context: VPN credentials would allow direct network access. Source code tokens could expose unreleased products. The data was allegedly harvested last month — an active breach may still be in progress.

Respond with:
1. Assessment: breach confirmation status and severity (1 sentence)
2. Key Indicators: exactly 3 bullet points on highest-risk data categories
3. Immediate Actions: exactly 3 bullet points covering credential reset, legal, and customer notification
4. Prevention: exactly 2 bullet points on credential exposure monitoring`,
    local: [
      {
        model: "LLaMA2-7B chat by Meta",
        responseTime: "19.869",
        inputTokens: 219.84,
        cost: "$0.00",
        custom: {
          "CPU (%)": "10.954",
          "RAM (MB)": "3072.692",
          "Network (MB)": "0.155",
          "Energy (kWh)": "0.173521",
        },
      },
    ],
    cloud: [
      {
        model: "gpt-3.5-turbo by OpenAI",
        responseTime: "8.0",
        inputTokens: 90,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00026860",
          "Avg Energy (J) — 1 run": "966.9600",
          "Avg Cost NZD — 1 run": "$0.001807",
          "Energy (kWh) — 10 runs": "0.00268600",
          "Energy (kWh) — 50 runs": "0.01343000",
          "Energy (kWh) — 100 runs": "0.02686000",
          "Energy (J) — 10 runs": "9,669.6000",
          "Energy (J) — 50 runs": "48,348.0000",
          "Energy (J) — 100 runs": "96,696.0000",
          "Total Power (W)": "120.8700",
          "Cost NZD — 10 runs": "$0.018068",
          "Cost NZD — 50 runs": "$0.090338",
          "Cost NZD — 100 runs": "$0.180675",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "8.0",
        inputTokens: 90,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018960",
          "Avg Energy (J) — 1 run": "682.5600",
          "Avg Cost NZD — 1 run": "$0.000163",
          "Energy (kWh) — 10 runs": "0.00189600",
          "Energy (kWh) — 50 runs": "0.00948000",
          "Energy (kWh) — 100 runs": "0.01896000",
          "Energy (J) — 10 runs": "6,825.6000",
          "Energy (J) — 50 runs": "34,128.0000",
          "Energy (J) — 100 runs": "68,256.0000",
          "Total Power (W)": "85.3200",
          "Cost NZD — 10 runs": "$0.001629",
          "Cost NZD — 50 runs": "$0.008147",
          "Cost NZD — 100 runs": "$0.016294",
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "8.0",
        inputTokens: 90,
        outputTokens: 700,
        cost: "$0.00",
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00023700",
          "Avg Energy (J) — 1 run": "853.2000",
          "Avg Cost NZD — 1 run": "$0.001303",
          "Energy (kWh) — 10 runs": "0.00237000",
          "Energy (kWh) — 50 runs": "0.01185000",
          "Energy (kWh) — 100 runs": "0.02370000",
          "Energy (J) — 10 runs": "8,532.0000",
          "Energy (J) — 50 runs": "42,660.0000",
          "Energy (J) — 100 runs": "85,320.0000",
          "Total Power (W)": "106.6500",
          "Cost NZD — 10 runs": "$0.013035",
          "Cost NZD — 50 runs": "$0.065175",
          "Cost NZD — 100 runs": "$0.130350",
        },
      },
    ],
  },
];