---
theme: default
layout: cover
title: From workflows to skills
author: Manar Benkraouda and Nicolas Grenié
info: |
  A practical method for turning a workflow into a skill, plus five skills worth trying.
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1280
transition: fade
# PDFs are exported separately; enabling this triggers Chromium during Netlify builds.
download: false
exportFilename: from-workflows-to-skills
browserExporter: true
presenter: true
selectable: true
mdc: true
drawings:
  enabled: true
  persist: false
htmlAttrs:
  lang: en
defaults:
  layout: default
  transition: fade
---

<div class="deck-slide cover-slide">
  <div class="cover-grid">
    <section class="cover-main">
      <span class="eyebrow">Talk · 60 minutes</span>
      <div>
        <h1 class="hero-title">From workflows<br><span class="accent-block">to skills</span></h1>
        <p class="slide-lede">A practical method for making your expertise reusable by agents</p>
      </div>
      <div class="brand-lockup">
        <img src="/logo-slng.svg" alt="SLNG" />
        <span>+</span>
        <img src="/logo-ttn.svg" alt="The Tech Nation" />
      </div>
    </section>
    <aside class="cover-side">
      <div class="yellow-bar"></div>
      <div class="yellow-bar" style="width: 62%; background: var(--magenta);"></div>
    </aside>
  </div>
</div>

<!--
Timing: 1 minute
Open with the promise of the session. We will review useful skills, then show how to create one from a real workflow.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Your hosts</span>
  <h1 class="slide-title">Two practices, one method</h1>
  <div class="two-col" style="margin-top: 40px;">
    <article class="profile framed speaker-card">
      <div class="memoji-frame"><img src="./manar-memoji.png" alt="Manar Benkraouda" /></div>
      <div>
        <h2>Manar Benkraouda</h2>
        <p>CTO</p>
        <div class="meta-row"><span class="meta-tag">The Tech Nation</span></div>
      </div>
    </article>
    <article class="profile framed speaker-card">
      <div class="memoji-frame"><img src="./nico-memoji.png" alt="Nicolas Grenié" /></div>
      <div>
        <h2>Nicolas Grenié</h2>
        <p>Developer Advocate</p>
        <div class="meta-row"><span class="meta-tag">SLNG</span></div>
      </div>
    </article>
  </div>
</div>

<!--
Timing: 2 minutes
Frame the talk as a conversation. Manar leads the method. Nicolas brings product and field examples.
-->

---

<div class="deck-slide">
  <span class="eyebrow">The next 60 minutes</span>
  <h1 class="slide-title">From concept to practice</h1>
  <div class="timeline">
    <div class="timeline-step"><b>01</b><strong>Context</strong><span>Workflows, skills and agent-native products</span></div>
    <div class="timeline-step"><b>02</b><strong>Method</strong><span>Turn one real workflow into a skill</span></div>
    <div class="timeline-step"><b>03</b><strong>5 skills</strong><span>Use cases and before / after evidence</span></div>
    <div class="timeline-step"><b>04</b><strong>Risks</strong><span>Portability, context and security</span></div>
    <div class="timeline-step"><b>05</b><strong>Questions</strong><span>Cases from the room</span></div>
  </div>
</div>

<!--
Timing: 1 minute
Set the pace. Keep at least five minutes for questions, and more if the room engages during the examples.
-->

---

<div class="deck-slide yellow">
  <span class="eyebrow" style="background: var(--cream);">Why now</span>
  <div class="two-col wide-left" style="margin-top: 48px; align-items: center;">
    <div>
      <h1 class="massive">Products are becoming <span class="accent-block">agent-native</span></h1>
      <p class="slide-lede">A migration no longer ships only as a list of manual steps. It can ship as an instruction that an agent can execute.</p>
    </div>
    <div class="framed" style="padding: 30px; background: var(--cream);">
      <div style="font-size: 13px; color: var(--muted); margin-bottom: 20px;">BEFORE</div>
      <div style="font-family: 'Space Grotesk Variable'; font-size: 27px; font-weight: 800;">Documentation that a person follows</div>
      <div class="rule" style="height: 3px; margin: 28px 0;"></div>
      <div style="font-size: 13px; color: var(--muted); margin-bottom: 20px;">NOW</div>
      <div style="font-family: 'Space Grotesk Variable'; font-size: 27px; font-weight: 800;">A prompt or skill given to an agent</div>
    </div>
  </div>
</div>

<!--
Timing: 3 minutes
SLNG example: the product assumes the user works with an agent. Distributing operational knowledge becomes part of the product itself.
Present this as an observed shift in AI-native products, not as a universal rule.
-->

---
layout: section
---

<div class="deck-slide section-slide">
  <div>
    <div class="section-number">01 / UNDERSTAND</div>
    <h1>Workflow and skill</h1>
    <p>Two terms that often get mixed together, but describe different things</p>
  </div>
</div>

<!--
Short section transition.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Definition</span>
  <h1 class="slide-title">A workflow describes the work</h1>
  <div class="split-contrast">
    <div>
      <h2>The sequence</h2>
      <ul>
        <li>A clear starting point</li>
        <li>Decisions made along the way</li>
        <li>An outcome you know how to judge</li>
      </ul>
    </div>
    <div>
      <WorkflowDiagram />
    </div>
  </div>
</div>

<!--
Timing: 2 minutes
Ask the room to name a workflow they already repeat. Focus on decisions and success criteria, not only on clicks.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Definition</span>
  <h1 class="slide-title">A skill describes how to do it well</h1>
  <div class="two-col wide-left" style="margin-top: 40px; align-items: center;">
    <div>
      <p class="quote-block" style="margin-top: 0;">A skill turns instructions, examples and guardrails into reusable context.</p>
    </div>
    <div class="file-tree framed">
      <div class="folder">skill-name/</div>
      <div>&nbsp;&nbsp;SKILL.md</div>
      <div class="folder">&nbsp;&nbsp;references/</div>
      <div class="folder">&nbsp;&nbsp;examples/</div>
      <div class="folder">&nbsp;&nbsp;scripts/</div>
    </div>
  </div>
</div>

<!--
Timing: 2 minutes
A skill is not necessarily one file. It may include references, examples and scripts.
-->

---

<div class="deck-slide">
  <span class="eyebrow">The distinction</span>
  <h1 class="slide-title">The workflow remains the source</h1>
  <div class="process-lane" style="grid-template-columns: 1fr 1fr 1fr;">
    <div class="process-step"><b>01</b><strong>Workflow</strong><span>The real work, including decisions and exceptions</span></div>
    <div class="process-step"><b>02</b><strong>Conversation</strong><span>The agent attempts the work and receives corrections</span></div>
    <div class="process-step"><b>03</b><strong>Skill</strong><span>The reusable version of what you learned together</span></div>
  </div>
  <p class="slide-lede" style="margin-top: 34px;">The goal is not to document every move. Capture the decisions that change the outcome.</p>
</div>

<!--
Timing: 2 minutes
This relationship structures the rest of the talk. The conversation is the laboratory between workflow and skill.
-->

---
layout: section
---

<div class="deck-slide section-slide">
  <div>
    <div class="section-number">02 / TRANSFORM</div>
    <h1>From workflow to skill</h1>
    <p>A method built on observation, mistakes and the reasons behind each correction</p>
  </div>
</div>

<!--
Transition into the method.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Step 0</span>
  <h1 class="slide-title">Search before you write</h1>
  <div class="two-col wide-right" style="margin-top: 46px; align-items: center;">
    <div>
      <ol class="clean-list">
        <li><strong>Name the need</strong><br><span style="color: var(--muted);">Which outcome needs to become more reliable?</span></li>
        <li><strong>Explore directories</strong><br><span style="color: var(--muted);">Look for a credible starting point.</span></li>
        <li><strong>Read the skill</strong><br><span style="color: var(--muted);">Understand its instructions, scripts and permissions.</span></li>
        <li><strong>Adapt it</strong><br><span style="color: var(--muted);">Your examples matter more than a generic template.</span></li>
      </ol>
    </div>
    <div class="screenshot-frame">
      <img src="./skills-directory.png" alt="Skills.sh open agent skills directory" />
    </div>
  </div>
</div>

<!--
Timing: 2 minutes
Nicolas's point: the first step may be finding something that already exists. Never install before reading the contents.
Asset: screenshot and URL of the directory actually used.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Step 1</span>
  <h1 class="slide-title">Run the workflow with the agent</h1>
  <div class="two-col wide-left" style="margin-top: 38px;">
    <div class="placeholder" style="min-height: 400px;">
      <strong>FIRST ATTEMPT</strong>
    </div>
    <div class="framed yellow-frame" style="padding: 30px;">
      <h2 style="font-size: 32px; text-transform: uppercase;">What to observe</h2>
      <ul class="clean-list">
        <li>Missing information</li>
        <li>Decisions that remained implicit</li>
        <li>Parts the agent already handled well</li>
      </ul>
    </div>
  </div>
</div>

<!--
Timing: 3 minutes
Avoid a live run. Use a prepared conversation to control timing and select an example that teaches something.
Asset: a screenshot that remains readable on a projector.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Step 2</span>
  <h1 class="slide-title">Mistakes reveal the real rules</h1>
  <div class="two-col" style="margin-top: 38px;">
    <div class="placeholder" style="min-height: 390px;">
      <strong>AGENT MISTAKE</strong>
    </div>
    <div class="placeholder" style="min-height: 390px; border-color: var(--lime);">
      <strong>CORRECTION + WHY</strong>
    </div>
  </div>
</div>

<!--
Timing: 3 minutes
Manar's central point: it is useful when the agent gets something wrong. Each mistake exposes a rule that was previously implicit.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Step 3</span>
  <h1 class="slide-title">Separate the rule from its support</h1>
  <div class="process-lane">
    <div class="process-step"><b>01</b><strong>Instruction</strong><span>What the agent should do or avoid</span></div>
    <div class="process-step"><b>02</b><strong>Reason</strong><span>Why this rule protects the outcome</span></div>
    <div class="process-step"><b>03</b><strong>Example</strong><span>An output that makes the standard visible</span></div>
    <div class="process-step"><b>04</b><strong>Resource</strong><span>The template, reference or script that helps</span></div>
  </div>
</div>

<!--
Timing: 2 minutes
Keep SKILL.md readable and route to supporting material. Examples and scripts do not need to crowd the main instruction file.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Step 4</span>
  <h1 class="slide-title">Anatomy of a skill</h1>
  <div class="two-col" style="margin-top: 38px; align-items: stretch;">
    <div class="file-tree framed">
      <div class="folder">pr-writer/</div>
      <div>&nbsp;&nbsp;SKILL.md</div>
      <div class="folder">&nbsp;&nbsp;examples/</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;good-pr.md</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;bad-pr.md</div>
      <div class="folder">&nbsp;&nbsp;templates/</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;pull-request.md</div>
    </div>
    <div class="code-note">
      <div>&#45;&#45;&#45;</div>
      <div>name: pr-writer</div>
      <div>description: Writes a PR in the company format.</div>
      <div>&#45;&#45;&#45;</div>
      <br>
      <div><strong># Expected result</strong></div>
      <div>A short, readable and verifiable PR.</div>
      <br>
      <div><strong># Method</strong></div>
      <div>1. Read the template.</div>
      <div>2. Identify the actual changes.</div>
      <div>3. Compare with good examples.</div>
      <div>4. Flag missing information.</div>
    </div>
  </div>
</div>

<!--
Timing: 3 minutes
This is deliberately simplified. Replace it with the real structure of Nicolas's skill if it can be shared.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Step 5</span>
  <h1 class="slide-title">Test repeatability</h1>
  <table class="test-table">
    <thead><tr><th>Case</th><th>What changes</th><th>Observable criterion</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Nominal case</td><td>Complete input</td><td>Format passes without correction</td><td class="status todo">To test</td></tr>
      <tr><td>Incomplete context</td><td>One key fact is missing</td><td>The agent asks the right question</td><td class="status todo">To test</td></tr>
      <tr><td>Edge case</td><td>The template no longer fits</td><td>The agent states the limitation</td><td class="status todo">To test</td></tr>
    </tbody>
  </table>
  <p class="slide-lede" style="margin-top: 30px;">A useful test does more than ask whether the output feels better. It checks a specific behavior.</p>
</div>

<!--
Timing: 2 minutes
Complete this after running the tests. Keep at least one real edge case in the final deck.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Case study</span>
  <h1 class="slide-title">A PR the team actually wants to read</h1>
  <div class="two-col" style="margin-top: 34px;">
    <div>
      <div style="font-family: 'Space Grotesk Variable'; font-size: 26px; font-weight: 800; margin-bottom: 14px;">Without the skill</div>
      <div class="placeholder" style="min-height: 340px;">
        <strong>GENERIC PR</strong>
      </div>
    </div>
    <div>
      <div style="font-family: 'Space Grotesk Variable'; font-size: 26px; font-weight: 800; margin-bottom: 14px;">With the skill</div>
      <div class="placeholder" style="min-height: 340px; border-color: var(--lime);">
        <strong>TEAM FORMAT</strong>
      </div>
    </div>
  </div>
</div>

<!--
Timing: 4 minutes
This is the visual before / after requested in the meeting. Use the same code change on both sides.
Alternative: use a Linear ticket if the difference is clearer.
-->

---
layout: section
---

<div class="deck-slide section-slide">
  <div>
    <div class="section-number">03 / DISCOVER</div>
    <h1>Five skills to try</h1>
  </div>
</div>

<!--
Transition into the recommendations.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Skill 01</span>
  <div class="skill-layout">
    <div class="skill-number">1</div>
    <div class="skill-copy">
      <h2>Humanizer</h2>
      <p>Turns generic AI copy into writing with a clearer, more natural voice.</p>
      <div class="meta-row"><span class="meta-tag">Writing</span><span class="meta-tag">Editing</span></div>
      <div class="placeholder" style="min-height: 150px; margin-top: 28px;"><strong>BEFORE / AFTER</strong></div>
    </div>
  </div>
</div>

<!--
Timing: 3 minutes
Confirm the exact skill name, source and activation command. Use a real text sample that can be shared publicly.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Skill 02</span>
  <div class="skill-layout">
    <div class="skill-number">2</div>
    <div class="skill-copy">
      <h2>Technical writer</h2>
      <p>Turns raw product knowledge into documentation that answers real questions.</p>
      <div class="meta-row"><span class="meta-tag">Documentation</span><span class="meta-tag">Structure</span></div>
      <div class="placeholder" style="min-height: 150px; margin-top: 28px;"><strong>DOCUMENT SAMPLE</strong></div>
    </div>
  </div>
</div>

<!--
Timing: 3 minutes
Confirm the exact skill name and source. Show one short section before and after the skill.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Skill 03</span>
  <div class="skill-layout">
    <div class="skill-number">3</div>
    <div class="skill-copy">
      <h2>Impeccable</h2>
      <p>Makes UI and design-system feedback specific enough to act on.</p>
      <div class="meta-row"><span class="meta-tag">UI critique</span><span class="meta-tag">Design systems</span></div>
      <div class="placeholder" style="min-height: 150px; margin-top: 28px;"><strong>UI CRITIQUE</strong></div>
    </div>
  </div>
</div>

<!--
Timing: 3 minutes
Add the exact command and one observation produced on a real interface.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Skill 04</span>
  <div class="skill-layout">
    <div class="skill-number" style="color: var(--cream);">4</div>
    <div class="skill-copy">
      <h2>[SKILL NAME]</h2>
      <p>[ONE-LINE USE CASE]</p>
      <div class="placeholder" style="min-height: 190px; margin-top: 28px;"><strong>DEMO</strong></div>
    </div>
  </div>
</div>

<!--
Timing: 3 minutes
Choose a broadly understandable skill with a visible improvement.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Skill 05</span>
  <div class="skill-layout">
    <div class="skill-number" style="color: var(--cream);">5</div>
    <div class="skill-copy">
      <h2>[SKILL NAME]</h2>
      <p>[ONE-LINE USE CASE]</p>
      <div class="placeholder" style="min-height: 190px; margin-top: 28px;"><strong>DEMO</strong></div>
    </div>
  </div>
</div>

<!--
Timing: 3 minutes
Choose a different domain from the first four skills. Keep the Cursor skill pack as the technical backup option.
-->

---
layout: section
---

<div class="deck-slide section-slide">
  <div>
    <div class="section-number">04 / RISKS</div>
    <h1>Portability, context and security</h1>
  </div>
</div>

<!--
Transition into the risks and constraints of using skills across tools.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Portability</span>
  <h1 class="slide-title">The expertise travels better than the format</h1>
  <div class="process-lane">
    <div class="process-step"><b>01</b><strong>Claude</strong><span>Instructions, references and tools</span></div>
    <div class="process-step"><b>02</b><strong>Codex</strong><span>Local skills and project rules</span></div>
    <div class="process-step"><b>03</b><strong>Cursor</strong><span>Rules, commands and resources</span></div>
    <div class="process-step"><b>04</b><strong>OpenCode</strong><span>Skills and project instructions</span></div>
  </div>
  <p class="slide-lede" style="margin-top: 34px;">The wrapper changes. The decisions, examples and quality bar can stay.</p>
</div>

<!--
Timing: 3 minutes
Nuance the claim. A skill is not always copied unchanged. The knowledge transfers, then the packaging adapts to each agent.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Directories</span>
  <h1 class="slide-title">A directory is a starting point</h1>
  <div class="three-col" style="margin-top: 48px;">
    <div class="framed" style="padding: 30px;"><h2 style="font-size: 34px; text-transform: uppercase;">Discover</h2><p class="slide-lede" style="font-size: 16px;">Find a credible starting point.</p></div>
    <div class="framed yellow-frame" style="padding: 30px;"><h2 style="font-size: 34px; text-transform: uppercase;">Inspect</h2><p class="slide-lede" style="font-size: 16px;">Read instructions, scripts and access.</p></div>
    <div class="framed" style="padding: 30px;"><h2 style="font-size: 34px; text-transform: uppercase;">Adapt</h2><p class="slide-lede" style="font-size: 16px;">Replace generic examples with yours.</p></div>
  </div>
</div>

<!--
Timing: 2 minutes
Add the directory Nicolas uses and any other validated source. Verify names, URLs and adoption figures before the talk.
-->

---

<div class="deck-slide yellow">
  <span class="eyebrow" style="background: var(--cream);">Context window</span>
  <div class="two-col wide-left" style="margin-top: 48px; align-items: center;">
    <div>
      <h1 class="massive">Every loaded skill spends context</h1>
      <p class="slide-lede">More instructions can make the useful instructions harder to find.</p>
    </div>
    <div class="framed" style="padding: 32px; background: var(--cream);">
      <ul class="clean-list" style="margin-top: 0;">
        <li>Activate narrowly</li>
        <li>Load references only when needed</li>
        <li>Remove duplicates and stale variants</li>
      </ul>
    </div>
  </div>
</div>

<!--
Timing: 2 minutes
Connect this to context limits and instruction retrieval. Avoid claiming a universal maximum number of skills.
-->

---

<div class="deck-slide dark">
  <span class="eyebrow">Security</span>
  <div class="two-col wide-left" style="margin-top: 46px; align-items: center;">
    <div>
      <h1 class="massive">A skill can run code</h1>
      <p class="slide-lede">It may read files, execute scripts or call an API.</p>
    </div>
    <div class="warning-mark">!</div>
  </div>
  <div class="framed" style="margin-top: 40px; padding: 26px 30px;">
    <strong style="font-family: 'Space Grotesk Variable'; font-size: 24px;">Carapace case</strong>
    <div style="margin-top: 8px; color: rgba(251,248,247,.72); font-size: 16px;">A skill makes an API call. Agent behavior around confirmation varies.</div>
  </div>
</div>

<!--
Timing: 3 minutes
Verify the current behavior at joincarapace.com before the talk. Present it as an illustration of execution risk, not an allegation of malicious intent.
-->

---

<div class="deck-slide">
  <span class="eyebrow">Before installing</span>
  <h1 class="slide-title">The minimum checklist</h1>
  <div class="process-lane" style="grid-template-columns: repeat(5, 1fr);">
    <div class="process-step"><b>01</b><strong>Source</strong><span>Author, repository, history</span></div>
    <div class="process-step"><b>02</b><strong>Instructions</strong><span>Read SKILL.md in full</span></div>
    <div class="process-step"><b>03</b><strong>Scripts</strong><span>Inspect commands and dependencies</span></div>
    <div class="process-step"><b>04</b><strong>Access</strong><span>Files, network, credentials</span></div>
    <div class="process-step"><b>05</b><strong>Test</strong><span>Start with a limited scope</span></div>
  </div>
</div>

<!--
Timing: 2 minutes
Built-in agent checks help, but human review remains necessary.
-->

---

<div class="deck-slide yellow">
  <span class="eyebrow" style="background: var(--cream);">Try it tomorrow</span>
  <h1 class="slide-title" style="max-width: 1100px;">Your first skill in 45 minutes</h1>
  <div class="process-lane" style="margin-top: 44px;">
    <div class="process-step"><b>10'</b><strong>Choose</strong><span>One repeated workflow</span></div>
    <div class="process-step"><b>15'</b><strong>Run</strong><span>Work with the agent and correct it</span></div>
    <div class="process-step"><b>10'</b><strong>Ask Claude</strong><span>Create a skill from what we learned in the session</span></div>
    <div class="process-step"><b>10'</b><strong>Test</strong><span>Use one normal case and one edge case</span></div>
  </div>
  <p class="slide-lede" style="margin-top: 32px;">Start with work you already know how to judge.</p>
</div>

<!--
Timing: 2 minutes
Offer this as the immediate next step. Ask participants to write down one workflow they would choose.
-->

---
layout: end
---

<div class="deck-slide end-slide dark" style="display: grid; place-items: center; text-align: center;">
  <div>
    <span class="eyebrow">Questions</span>
    <h1 class="massive" style="margin-top: 38px;">Which workflow should become your next skill?</h1>
    <div class="brand-lockup" style="justify-content: center; margin-top: 58px; background: var(--cream); padding: 16px 24px; width: fit-content; margin-left: auto; margin-right: auto;">
      <img src="/logo-slng.svg" alt="SLNG" />
      <span style="color: var(--ink);">+</span>
      <img src="/logo-ttn.svg" alt="The Tech Nation" />
    </div>
  </div>
</div>

<!--
Timing: at least 5 minutes
If the room hesitates, ask for a task that is frequent, tedious or dependent on an internal format.
-->
