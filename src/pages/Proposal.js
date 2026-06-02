import React from 'react';
import styles from './Proposal.module.css';

export default function Proposal() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.pageHeader}>
          <p className={styles.sectionTag}>AUT BCIS</p>
          <h1 className={styles.pageTitle}>Exploring Energy Usage of AI in Practical Scenarios</h1>
        </div>

        {/* ── Executive Summary ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <p className={styles.body}>
            This report investigates the energy consumption of AI inference systems across practical
            cybersecurity scenarios, comparing three cloud-hosted models, GPT-3.5-turbo (OpenAI),
            Gemini Pro (Google), and Mistral Small (Mistral), against a locally-deployed Meta LLaMA
            2 7B Chat model. Twenty-three structured cybersecurity prompts spanning seven categories
            (Email Security, Threat Detection, Vulnerability Assessment, Compliance, Incident Response,
            SOC Operations, and Threat Intelligence) were executed across both deployment types, with
            energy usage, execution time, hardware resource utilisation, and estimated cost recorded
            for each.
          </p>
          <p className={styles.body}>
            The central finding is that output token length, not prompt complexity, is the dominant
            driver of energy consumption in both deployment types. Cloud inference demonstrated stable,
            linear scaling at approximately 0.0000936 kWh per request regardless of workload size, at
            a total cost of NZD $0.026 for 200 requests. The local LLaMA 2 7B model averaged 0.163 kWh
            per scenario and response times 7.8× slower than cloud alternatives, but provided full
            hardware visibility and on-premises data handling. These findings have practical implications
            for organisations integrating AI into security operations workflows.
          </p>
        </section>

        <div className={styles.divider} />

        {/* ── Introduction ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.body}>
            Artificial Intelligence systems are increasingly integrated into modern cybersecurity
            operations, with cloud-hosted large language models (LLMs) such as ChatGPT, Gemini, and
            Claude enabling advanced threat analysis, phishing detection, and incident response support
            without requiring high-performance local hardware. While these systems offer significant
            analytical capability, they consume computational resources and electrical energy, costs
            that are often invisible to end users operating through API interfaces.
          </p>
          <p className={styles.body}>
            Understanding the energy footprint of AI inference is important as adoption scales globally.
            Individual requests appear negligible (approximately 0.0000936 kWh per cloud query), but
            at one million requests this accumulates to 93.6 kWh, equivalent to running a household
            appliance for days. For organisations deploying AI across Security Operations Centres (SOCs),
            these costs compound quickly and carry both financial and environmental weight.
          </p>
          <p className={styles.body}>
            This project evaluates AI energy consumption in practical cybersecurity scenarios across two
            deployment models: cloud-based API inference and local hardware inference. The goals are to
            quantify per-task energy usage, identify the factors that drive consumption, compare
            cloud and local deployment trade-offs, and provide actionable findings for organisations
            considering AI-assisted security operations.
          </p>
        </section>

        <div className={styles.divider} />

        {/* ── Methodology ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Methodology</h2>
          <p className={styles.body}>
            Twenty-three cybersecurity prompts were designed across seven categories and three
            difficulty levels (Easy, Medium, Hard). Each prompt followed a consistent four-part
            response structure: classification, key indicators, immediate actions, and prevention
            — enabling fair comparison of response length and quality across models.
          </p>

          <div className={styles.callout}>
            <p className={styles.calloutLabel}>Models Tested</p>
            <p className={styles.calloutText}>
              Cloud: GPT-3.5-turbo (OpenAI) · Gemini Pro (Google) · Mistral Small (Mistral)<br />
              Local: Meta LLaMA 2 7B Chat via Hugging Face Transformers
            </p>
          </div>

          <p className={styles.body}>
            Cloud inference was measured across four workload sizes, 10, 50, 100, and 200 runs,
            recording power draw (Watts), execution time, token counts, and estimated cost per
            request. Local inference was measured using CodeCarbon, which estimates energy consumption
            based on hardware utilisation and runtime duration during each inference task. Local metrics
            also included CPU utilisation, RAM usage, and network activity per scenario.
          </p>
          <p className={styles.body}>
            All prompts were executed against each model under identical conditions. Cloud response
            times were consistent at 3.0 seconds per request across all models and scenarios. Local
            response times varied by scenario, ranging from 13.7 to 40.6 seconds depending on output
            length and prompt complexity.
          </p>
        </section>

        <div className={styles.divider} />

        {/* ── Results ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results</h2>
          <p className={styles.body}>
            Both deployment types showed that output token length is the primary driver of energy
            consumption. Scenarios generating maximum-length responses (500 tokens) consistently
            consumed the most energy, while shorter-output scenarios such as phishing prompts used
            significantly less. The correlation between output token count and energy usage was
            near-perfect for cloud models (r ≈ 1.00).
          </p>

          <h3 className={styles.subsectionTitle}>Local AI Performance</h3>
          <p className={styles.body}>
            The LLaMA 2 7B model was tested across all 23 scenarios, averaging 23.5 seconds per
            response, 0.163 kWh per scenario, 11.4% CPU utilisation, and 2,772 MB RAM usage.
            Compliance scenarios were the most energy-intensive (avg 0.193 kWh), while Vulnerability
            Assessment prompts were the most efficient (avg 0.141 kWh). Email Security prompts had
            the longest average response time (40.4 seconds) due to consistently long outputs.
            Harder difficulty scenarios consumed more energy on average despite shorter response times,
            suggesting more computationally intensive token generation rather than simply longer outputs.
          </p>

          <h3 className={styles.subsectionTitle}>Cloud AI Performance</h3>
          <p className={styles.body}>
            Cloud inference demonstrated consistent and predictable energy usage across all four
            workload sizes. Average energy per request remained stable at 0.0000936 kWh whether
            processing 10 or 200 prompts, confirming linear rather than exponential scaling.
            Gemini Pro was the most energy-efficient cloud model at an average of 270 J per request,
            compared to 338 J for Mistral Small and 383 J for GPT-3.5-turbo. Total cost for all
            360 cloud runs across the scalability test was NZD $0.047 — demonstrating that
            cloud-based AI inference is extremely cost-efficient at moderate operational scale.
          </p>
        </section>

        <div className={styles.divider} />

        {/* ── Discussion ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Discussion</h2>
          <p className={styles.body}>
            The most practically significant finding is the scale of the energy difference between
            local and cloud inference. The LLaMA 2 7B model used approximately 1,780 times more
            energy per scenario than the average cloud model, while responding 7.8× more slowly.
            For high-volume SOC environments where analysts need rapid responses, cloud inference
            is the clear winner on both speed and energy efficiency.
          </p>
          <p className={styles.body}>
            However, the local model's advantage is data control. Cloud inference requires sending
            potentially sensitive security data — internal logs, credentials, patient records — to a
            third-party API. In regulated or classified environments this may be unacceptable, making
            local deployment the only viable option regardless of energy cost. Future work could
            investigate whether smaller quantised models (e.g. LLaMA 2 7B Q4) or GPU-accelerated
            local inference could close the performance and energy gap.
          </p>
          <p className={styles.body}>
            The finding that output length (not prompt complexity) drives energy consumption has
            direct implications for prompt engineering. Constraining response length through explicit
            token limits or structured output formats could reduce cloud inference costs and local
            energy usage without significantly affecting analytical quality.
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Avg. Response Time</th>
                  <th>Avg. Energy / Request</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GPT-3.5-turbo</td>
                  <td>Cloud</td>
                  <td>3.0 s</td>
                  <td>383 J (0.000106 kWh)</td>
                </tr>
                <tr>
                  <td>Gemini Pro</td>
                  <td>Cloud</td>
                  <td>3.0 s</td>
                  <td>270 J (0.000075 kWh)</td>
                </tr>
                <tr>
                  <td>Mistral Small</td>
                  <td>Cloud</td>
                  <td>3.0 s</td>
                  <td>338 J (0.000094 kWh)</td>
                </tr>
                <tr>
                  <td>LLaMA 2 7B</td>
                  <td>Local</td>
                  <td>23.5 s</td>
                  <td>0.163 kWh (588,000 J)</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.tableCaption}>
              Table 1: Average response time and energy consumption per request across all models
            </p>
          </div>
        </section>

        <div className={styles.divider} />

        {/* ── Conclusion ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conclusion</h2>
          <p className={styles.body}>
            This project demonstrated that cloud-based AI inference is significantly more
            energy-efficient and faster than local deployment for cybersecurity inference tasks,
            with cloud models using approximately 1,780 times less energy per scenario and responding
            7.8× faster. Cloud energy usage scaled linearly and predictably, remaining stable at
            0.0000936 kWh per request across all tested workload sizes.
          </p>
          <p className={styles.body}>
            The dominant driver of energy consumption in both deployment types was output token length,
            not prompt complexity, a finding that points to prompt engineering as the most practical
            lever for reducing AI operational costs. Organisations deploying AI in security workflows
            should consider explicit response-length constraints and prefer cloud providers with
            strong renewable energy commitments where data privacy regulations permit.
          </p>
          <p className={styles.body}>
            Local deployment remains relevant where on-premises data handling is required, though
            the energy and latency trade-offs are substantial. Future research should examine
            GPU-accelerated local inference, smaller quantised models, and hybrid cloud-local
            architectures as potential paths to closing this gap.
          </p>
        </section>

        <div className={styles.divider} />

        {/* ── References ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>References</h2>
          <ol className={styles.referenceList}>
            <li className={styles.reference}>
              Lottick, K., Susai, S., Friedler, S. A., &amp; Wilson, J. P. (2019). Energy usage
              reports: Environmental awareness as part of algorithmic accountability.
              <em>NeurIPS Workshop on Tackling Climate Change with Machine Learning</em>.
            </li>
            <li className={styles.reference}>
              Lacoste, A., Lottick, K., Shepheard, M., Tazi, N., Courty, V., Luccioni, A., Goyal-Kamal,
              Maharaj, T., &amp; Schmidt, V. (2019). CodeCarbon: Estimate and track carbon emissions
              from machine learning computing. <em>arXiv preprint arXiv:1910.09700</em>.
            </li>
            <li className={styles.reference}>
              Meta AI. (2023). <em>LLaMA 2: Open foundation and fine-tuned chat models</em>.
              Meta Platforms. https://ai.meta.com/llama/
            </li>
            <li className={styles.reference}>
              OpenAI. (2023). <em>GPT-3.5 turbo model card</em>. OpenAI.
              https://platform.openai.com/docs/models/gpt-3-5-turbo
            </li>
            <li className={styles.reference}>
              Google DeepMind. (2023). <em>Gemini: A family of highly capable multimodal models</em>.
              Google. https://deepmind.google/technologies/gemini/
            </li>
          </ol>
        </section>

      </div>
    </div>
  );
}