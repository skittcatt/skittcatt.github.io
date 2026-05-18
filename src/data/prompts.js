export const CATEGORIES = [
  "All",
  "Baseline",
  "Email Security",
  "Threat Detection",
  "Vulnerability Assessment",
  "Compliance",
  "Incident Response",
  "SOC Operations",
  "Threat Intelligence",
];

export const PROMPTS = [
  // ── BASELINE ──────────────────────────────────────────────
  {
    id: 1,
    title: "DNS Resolution Process",
    category: "Baseline",
    difficulty: "Easy",
    fullPrompt: `[DIFFICULTY: EASY | BASELINE]
Answer this general knowledge question about computer networking:

Topic: How DNS resolution works
Question: A user types "www.example.com" into their browser. Describe the full sequence of steps that occurs from that moment until the browser receives the IP address it needs to connect to the server.

Context: The user is on a standard home network. Their router acts as a local DNS resolver. Assume no cached results exist anywhere in the chain. The domain is registered and has valid A records. The explanation is for a technical audience familiar with networking basics.

Respond with:
Summary: describe the DNS resolution process in 1 sentence
Key Steps: exactly 3 bullet points covering the main resolution stages
Components Involved: exactly 3 bullet points naming the systems queried
Optimisation: exactly 2 bullet points on how caching speeds up repeat lookups`,
    local: [
      {
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 2,
    title: "B-tree Index Performance",
    category: "Baseline",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM | BASELINE]
Answer this technical question about database indexing:

Topic: B-tree indexes in relational databases
Question: A development team notices that a SELECT query on a 10-million-row table takes 45 seconds without an index and 0.02 seconds with one. Explain why indexes produce this performance difference and what trade-offs they introduce.

Context: The database is PostgreSQL. The table has columns for user_id, email, created_at, and status. The slow query filters by email. The team is considering adding indexes to every column as a solution to all their slow queries.

Respond with:
Summary: explain the core reason for the speed difference in 1 sentence
2. Key Indicators: exactly 3 bullet points on how B-tree indexes work
3. Immediate Actions: exactly 3 bullet points advising the team on index strategy
4. Prevention: exactly 2 bullet points on index maintenance and over-indexing risks`,
    local: [
      {
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 3,
    title: "CAP Theorem Trade-offs",
    category: "Baseline",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD | BASELINE]
Answer this architecture question about distributed systems:

Topic: CAP theorem trade-offs in distributed database design
Question: An engineering team is designing a globally distributed database for an e-commerce platform. They need to choose between consistency, availability, and partition tolerance. The platform processes 50,000 orders per minute across five regions. Occasional duplicate orders are acceptable; failed checkouts are not.

Context: The current system is a single-region PostgreSQL instance approaching its write limits. The team is evaluating Apache Cassandra, CockroachDB, and Amazon DynamoDB. Regulatory requirements mandate that EU customer data stays in EU regions. The team has strong SQL expertise but no NoSQL experience.

Respond with:
Summary: recommended CAP trade-off for this use case in 1 sentence
2. Key Indicators: exactly 3 bullet points on why this trade-off fits the requirements
3. Immediate Actions: exactly 3 bullet points on database selection and migration approach
4. Prevention: exactly 2 bullet points on consistency pitfalls to design around`,
    local: [
      {
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },

  // ── EMAIL SECURITY ─────────────────────────────────────────
  {
    id: 4,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 5,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 6,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 7,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },

  // ── THREAT DETECTION ───────────────────────────────────────
  {
    id: 8,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 9,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 10,
    title: "Malware Process Behaviour",
    category: "Threat Detection",
    difficulty: "Medium",
    fullPrompt: `[DIFFICULTY: MEDIUM]
Analyse this process behaviour for malware indicators:

Process: svchost.exe (PID: 8472)
Location: C:\\Users\\John\\AppData\\Local\\Temp\\svchost.exe
Parent Process: outlook.exe
Network: Beacon to 23.95.67.142:443 every 30 seconds
File Activity:
  Created: C:\\Users\\John\\Documents.hidden\\keylog.txt
  Modified: HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run
  Accessed: Chrome password store, Firefox login database
CPU/RAM: 2% CPU, 45 MB (stable)

Context: Legitimate svchost.exe runs only from C:\\Windows\\System32\\ and is never spawned by outlook.exe. The destination IP has no business association. The registry key modified controls Windows startup persistence.

Respond with:
1. Assessment: malware type and risk level (1 sentence)
2. Key Indicators: exactly 3 bullet points identifying malicious behaviour
3. Immediate Actions: exactly 3 bullet points for containment
4. Prevention: exactly 2 bullet points on endpoint hardening`,
    local: [
      {
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 11,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },

  // ── VULNERABILITY ASSESSMENT ───────────────────────────────
  {
    id: 12,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.2" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.2" },
      },
    ],
  },
  {
    id: 13,
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
<ul>{''.join([f'<li>{result}</li>' for result in results])}</ul>
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.2" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.2" },
      },
    ],
  },
  {
    id: 14,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.2" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.2" },
      },
    ],
  },
  {
    id: 15,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.2" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.2" },
      },
    ],
  },

  // ── COMPLIANCE ─────────────────────────────────────────────
  {
    id: 16,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 17,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 18,
    title: "HIPAA Cloud Misconfiguration",
    category: "Compliance",
    difficulty: "Hard",
    fullPrompt: `[DIFFICULTY: HARD]
Identify critical misconfigurations in this HIPAA-regulated cloud environment:

AWS EC2: production-web-server (stores patient health records)
Security Group: 0.0.0.0/0 on port 22 (SSH open to internet)
Security Group: 0.0.0.0/0 on port 3306 (MySQL open to internet)
IAM Role: AdministratorAccess policy attached
OS: Ubuntu 18.04 (end-of-life, unpatched since April 2023)
SSH: root login enabled
MySQL: default credentials in use
EBS: unencrypted
CloudTrail: disabled
VPC Flow Logs: disabled
Backups: none configured

Context: This server is production, internet-facing, and holds PHI under HIPAA. AdministratorAccess on EC2 means a compromised instance owns the entire AWS account. Disabled logging means a breach may already be undetected.

Respond with:
1. Assessment: HIPAA compliance status and overall risk level (1 sentence)
2. Key Indicators: exactly 3 bullet points on the highest-severity misconfigurations
3. Immediate Actions: exactly 3 bullet points in order of urgency
4. Prevention: exactly 2 bullet points on cloud security posture management`,
    local: [
      {
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },

  // ── INCIDENT RESPONSE ──────────────────────────────────────
  {
    id: 19,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 20,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 21,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },

  // ── SOC OPERATIONS ─────────────────────────────────────────
  {
    id: 22,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 23,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
  {
    id: 24,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },

  // ── THREAT INTELLIGENCE ────────────────────────────────────
  {
    id: 25,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      }
    ],
  },
  {
    id: 26,
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
        model: "LOCALMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Good",
        explanation: "Add your quality assessment here.",
        custom: { 
          "Temperature": "0.7" ,
          "GPU" : "bleh",
          "hello" : "world",  
        }        
      },
    ],
    cloud: [
      {
        model: "CLOUDMODEL",
        responseTime: "Xs",
        tokens: 0,
        cost: "$0.00",
        rating: "Excellent",
        explanation: "Add your quality assessment here.",
        custom: { "Temperature": "0.7" },
      },
    ],
  },
];
