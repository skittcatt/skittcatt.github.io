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
        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010200",
          "Avg Energy (J) — 1 run": "367.2000",
          "Avg Cost NZD — 1 run": "$0.000577",
          "Total Power (W)": "122.4000"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "3.0",
        inputTokens: 100,
        outputTokens: 200,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00007200",
          "Avg Energy (J) — 1 run": "259.2000",
          "Avg Cost NZD — 1 run": "$0.000062",
          "Total Power (W)": "86.4000"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "3.0",
        inputTokens: 100,
        outputTokens: 200,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00009000",
          "Avg Energy (J) — 1 run": "324.0000",
          "Avg Cost NZD — 1 run": "$0.000495",
          "Total Power (W)": "108.0000"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00015742",
          "Avg Energy (J) — 1 run": "566.7120",
          "Avg Cost NZD — 1 run": "$0.000959",
          "Total Power (W)": "141.6780"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 113,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00011112",
          "Avg Energy (J) — 1 run": "400.0320",
          "Avg Cost NZD — 1 run": "$0.000096",
          "Total Power (W)": "100.0080"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 113,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00013890",
          "Avg Energy (J) — 1 run": "500.0400",
          "Avg Cost NZD — 1 run": "$0.000764",
          "Total Power (W)": "125.0100"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00021250",
          "Avg Energy (J) — 1 run": "765.0000",
          "Avg Cost NZD — 1 run": "$0.001341",
          "Total Power (W)": "139.0909"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 125,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00015000",
          "Avg Energy (J) — 1 run": "540.0000",
          "Avg Cost NZD — 1 run": "$0.000129",
          "Total Power (W)": "98.1818"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 125,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018750",
          "Avg Energy (J) — 1 run": "675.0000",
          "Avg Cost NZD — 1 run": "$0.001031",
          "Total Power (W)": "122.7273"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00011900",
          "Avg Energy (J) — 1 run": "428.4000",
          "Avg Cost NZD — 1 run": "$0.000784",
          "Total Power (W)": "122.4000"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "3.5",
        inputTokens: 50,
        outputTokens: 300,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00008400",
          "Avg Energy (J) — 1 run": "302.4000",
          "Avg Cost NZD — 1 run": "$0.000072",
          "Total Power (W)": "86.4000"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "3.5",
        inputTokens: 50,
        outputTokens: 300,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010500",
          "Avg Energy (J) — 1 run": "378.0000",
          "Avg Cost NZD — 1 run": "$0.000577",
          "Total Power (W)": "108.0000"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00015130",
          "Avg Energy (J) — 1 run": "544.6800",
          "Avg Cost NZD — 1 run": "$0.000945",
          "Total Power (W)": "136.1700"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010680",
          "Avg Energy (J) — 1 run": "384.4800",
          "Avg Cost NZD — 1 run": "$0.000092",
          "Total Power (W)": "96.1200"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00013350",
          "Avg Energy (J) — 1 run": "480.6000",
          "Avg Cost NZD — 1 run": "$0.000734",
          "Total Power (W)": "120.1500"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00020060",
          "Avg Energy (J) — 1 run": "722.1600",
          "Avg Cost NZD — 1 run": "$0.001312",
          "Total Power (W)": "131.3018"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 90,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014160",
          "Avg Energy (J) — 1 run": "509.7600",
          "Avg Cost NZD — 1 run": "$0.000122",
          "Total Power (W)": "92.6836"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 90,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017700",
          "Avg Energy (J) — 1 run": "637.2000",
          "Avg Cost NZD — 1 run": "$0.000974",
          "Total Power (W)": "115.8545"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00020842",
          "Avg Energy (J) — 1 run": "750.3120",
          "Avg Cost NZD — 1 run": "$0.001331",
          "Total Power (W)": "125.0520"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "6.0",
        inputTokens: 113,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014712",
          "Avg Energy (J) — 1 run": "529.6320",
          "Avg Cost NZD — 1 run": "$0.000126",
          "Total Power (W)": "88.2720"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "6.0",
        inputTokens: 113,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018390",
          "Avg Energy (J) — 1 run": "662.0400",
          "Avg Cost NZD — 1 run": "$0.001012",
          "Total Power (W)": "110.3400"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00020672",
          "Avg Energy (J) — 1 run": "744.1920",
          "Avg Cost NZD — 1 run": "$0.001327",
          "Total Power (W)": "124.0320"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "6.0",
        inputTokens: 108,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014592",
          "Avg Energy (J) — 1 run": "525.3120",
          "Avg Cost NZD — 1 run": "$0.000125",
          "Total Power (W)": "87.5520"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "6.0",
        inputTokens: 108,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018240",
          "Avg Energy (J) — 1 run": "656.6400",
          "Avg Cost NZD — 1 run": "$0.001003",
          "Total Power (W)": "109.4400"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014280",
          "Avg Energy (J) — 1 run": "514.0800",
          "Avg Cost NZD — 1 run": "$0.000924",
          "Total Power (W)": "128.5200"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 70,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010080",
          "Avg Energy (J) — 1 run": "362.8800",
          "Avg Cost NZD — 1 run": "$0.000087",
          "Total Power (W)": "90.7200"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 70,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012600",
          "Avg Energy (J) — 1 run": "453.6000",
          "Avg Cost NZD — 1 run": "$0.000693",
          "Total Power (W)": "113.4000"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014620",
          "Avg Energy (J) — 1 run": "526.3200",
          "Avg Cost NZD — 1 run": "$0.000932",
          "Total Power (W)": "131.5800"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 80,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010320",
          "Avg Energy (J) — 1 run": "371.5200",
          "Avg Cost NZD — 1 run": "$0.000089",                
          "Total Power (W)": "92.8800"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 80,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012900",
          "Avg Energy (J) — 1 run": "464.4000",
          "Avg Cost NZD — 1 run": "$0.000709",
          "Total Power (W)": "116.1000"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00019992",
          "Avg Energy (J) — 1 run": "719.7120",
          "Avg Cost NZD — 1 run": "$0.001310",
          "Total Power (W)": "130.8567"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014112",
          "Avg Energy (J) — 1 run": "508.0320",
          "Avg Cost NZD — 1 run": "$0.000121",
          "Total Power (W)": "92.3695"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017640",
          "Avg Energy (J) — 1 run": "635.0400",
          "Avg Cost NZD — 1 run": "$0.000970",
          "Total Power (W)": "115.4618"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014382",
          "Avg Energy (J) — 1 run": "517.7520",
          "Avg Cost NZD — 1 run": "$0.000927",
          "Total Power (W)": "129.4380"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 73,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010152",
          "Avg Energy (J) — 1 run": "365.4720",
          "Avg Cost NZD — 1 run": "$0.000087", 
          "Total Power (W)": "91.3680"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 73,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012690",
          "Avg Energy (J) — 1 run": "456.8400",
          "Avg Cost NZD — 1 run": "$0.000698",
          "Total Power (W)": "114.2100"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00019720",
          "Avg Energy (J) — 1 run": "709.9200",
          "Avg Cost NZD — 1 run": "$0.001303",
          "Total Power (W)": "129.0764"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 80,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00013920",
          "Avg Energy (J) — 1 run": "501.1200",
          "Avg Cost NZD — 1 run": "$0.000120",
          "Total Power (W)": "91.1127"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 80,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017400",
          "Avg Energy (J) — 1 run": "626.4000",
          "Avg Cost NZD — 1 run": "$0.000957",
          "Total Power (W)": "113.8909"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012410",
          "Avg Energy (J) — 1 run": "446.7600",
          "Avg Cost NZD — 1 run": "$0.000796",
          "Total Power (W)": "111.6900"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 65,
        outputTokens: 300,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00008760",
          "Avg Energy (J) — 1 run": "315.3600",
          "Avg Cost NZD — 1 run": "$0.000075",
          "Total Power (W)": "78.8400"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 65,
        outputTokens: 300,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010950",
          "Avg Energy (J) — 1 run": "394.2000",
          "Avg Cost NZD — 1 run": "$0.000602",
          "Total Power (W)": "98.5500"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00019992",
          "Avg Energy (J) — 1 run": "719.7120",
          "Avg Cost NZD — 1 run": "$0.001310",
          "Total Power (W)": "130.8567"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014112",
          "Avg Energy (J) — 1 run": "508.0320",
          "Avg Cost NZD — 1 run": "$0.000121",
          "Total Power (W)": "92.3695"
        }
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "5.5",
        inputTokens: 88,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017640",
          "Avg Energy (J) — 1 run": "635.0400",
          "Avg Cost NZD — 1 run": "$0.000970",
          "Total Power (W)": "115.4618"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00027302",
          "Avg Energy (J) — 1 run": "982.8720",
          "Avg Cost NZD — 1 run": "$0.001818",
          "Total Power (W)": "122.8590"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "8.0",
        inputTokens: 103,
        outputTokens: 700,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00019272",
          "Avg Energy (J) — 1 run": "693.7920",
          "Avg Cost NZD — 1 run": "$0.000166",
          "Total Power (W)": "86.7240"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "8.0",
        inputTokens: 103,
        outputTokens: 700,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00024090",
          "Avg Energy (J) — 1 run": "867.2400",
          "Avg Cost NZD — 1 run": "$0.001325",
          "Total Power (W)": "108.4050"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00026520",
          "Avg Energy (J) — 1 run": "954.7200",
          "Avg Cost NZD — 1 run": "$0.001799",
          "Total Power (W)": "119.3400"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "8.0",
        inputTokens: 80,
        outputTokens: 700,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018720",
          "Avg Energy (J) — 1 run": "673.9200",
          "Avg Cost NZD — 1 run": "$0.000161",
          "Total Power (W)": "84.2400"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "8.0",
        inputTokens: 80,
        outputTokens: 700,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00023400",
          "Avg Energy (J) — 1 run": "842.4000",
          "Avg Cost NZD — 1 run": "$0.001287",
          "Total Power (W)": "105.3000"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00026690",
          "Avg Energy (J) — 1 run": "960.8400",
          "Avg Cost NZD — 1 run": "$0.001803",
          "Total Power (W)": "120.1050"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "8.0",
        inputTokens: 85,
        outputTokens: 700,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018840",
          "Avg Energy (J) — 1 run": "678.2400",
          "Avg Cost NZD — 1 run": "$0.000162",
          "Total Power (W)": "84.7800"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "8.0",
        inputTokens: 85,
        outputTokens: 700,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00023550",
          "Avg Energy (J) — 1 run": "847.8000",
          "Avg Cost NZD — 1 run": "$0.001295",
          "Total Power (W)": "105.9750"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00015130",
          "Avg Energy (J) — 1 run": "544.6800",
          "Avg Cost NZD — 1 run": "$0.000945",
          "Total Power (W)": "136.1700"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00010680",
          "Avg Energy (J) — 1 run": "384.4800",
          "Avg Cost NZD — 1 run": "$0.000092",
          "Total Power (W)": "96.1200"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "4.0",
        inputTokens: 95,
        outputTokens: 350,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00013350",
          "Avg Energy (J) — 1 run": "480.6000",
          "Avg Cost NZD — 1 run": "$0.000734",
          "Total Power (W)": "120.1500"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00012682",
          "Avg Energy (J) — 1 run": "456.5520",
          "Avg Cost NZD — 1 run": "$0.000803",
          "Total Power (W)": "130.4434"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "3.5",
        inputTokens: 73,
        outputTokens: 300,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00008952",
          "Avg Energy (J) — 1 run": "322.2720",
          "Avg Cost NZD — 1 run": "$0.000077",
          "Total Power (W)": "92.0777"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "3.5",
        inputTokens: 73,
        outputTokens: 300,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00011190",
          "Avg Energy (J) — 1 run": "402.8400",
          "Avg Cost NZD — 1 run": "$0.000615",
          "Total Power (W)": "115.0971"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00009282",
          "Avg Energy (J) — 1 run": "334.1520",
          "Avg Cost NZD — 1 run": "$0.000555",
          "Total Power (W)": "133.6608",
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "2.5",
        inputTokens: 73,
        outputTokens: 200,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00006552",
          "Avg Energy (J) — 1 run": "235.8720",
          "Avg Cost NZD — 1 run": "$0.000056",
          "Total Power (W)": "94.3488"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "2.5",
        inputTokens: 73,
        outputTokens: 200,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00008190",
          "Avg Energy (J) — 1 run": "294.8400",
          "Avg Cost NZD — 1 run": "$0.000451",
          "Total Power (W)": "117.9360"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00020060",
          "Avg Energy (J) — 1 run": "722.1600",
          "Avg Cost NZD — 1 run": "$0.001312",
          "Total Power (W)": "120.3600"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "6.0",
        inputTokens: 90,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00014160",
          "Avg Energy (J) — 1 run": "509.7600",
          "Avg Cost NZD — 1 run": "$0.000122",
          "Total Power (W)": "84.9600"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "6.0",
        inputTokens: 90,
        outputTokens: 500,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00017700",
          "Avg Energy (J) — 1 run": "637.2000",
          "Avg Cost NZD — 1 run": "$0.000974",
          "Total Power (W)": "106.2000"
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

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00026860",
          "Avg Energy (J) — 1 run": "966.9600",
          "Avg Cost NZD — 1 run": "$0.001807",
          "Total Power (W)": "120.8700"
        },
      },
      {
        model: "Gemini Pro by Google",
        responseTime: "8.0",
        inputTokens: 90,
        outputTokens: 700,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00018960",
          "Avg Energy (J) — 1 run": "682.5600",
          "Avg Cost NZD — 1 run": "$0.000163",
          "Total Power (W)": "85.3200"
        },
      },
      {
        model: "mistral-small by Mistral",
        responseTime: "8.0",
        inputTokens: 90,
        outputTokens: 700,

        custom: {
          "Avg Energy (kWh) — 1 run": "0.00023700",
          "Avg Energy (J) — 1 run": "853.2000",
          "Avg Cost NZD — 1 run": "$0.001303",
          "Total Power (W)": "106.6500"
        },
      },
    ],
  },
];