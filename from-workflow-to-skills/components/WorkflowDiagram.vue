<template>
  <div
    class="workflow-diagram"
    role="img"
    aria-label="Animated workflow connecting a request, routing step, AI draft, human review, and published output"
  >
    <svg viewBox="0 0 760 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path id="flow-a" class="workflow-wire" d="M145 200 H190" />
      <path id="flow-b" class="workflow-wire" d="M320 200 C355 200 345 90 380 90" />
      <path id="flow-c" class="workflow-wire" d="M320 200 C355 200 345 310 380 310" />
      <path id="flow-d" class="workflow-wire" d="M520 90 C560 90 550 200 590 200" />
      <path id="flow-e" class="workflow-wire" d="M520 310 C560 310 550 200 590 200" />

      <g class="workflow-node workflow-node--1">
        <rect class="node-shadow" x="21" y="171" width="130" height="70" />
        <rect class="node-body" x="15" y="165" width="130" height="70" />
        <rect class="node-icon node-icon--yellow" x="28" y="181" width="38" height="38" />
        <text class="node-icon-text" x="47" y="205">IN</text>
        <text class="node-kicker" x="77" y="191">TRIGGER</text>
        <text class="node-label" x="77" y="216">Request</text>
        <circle class="node-handle" cx="145" cy="200" r="6" />
      </g>

      <g class="workflow-node workflow-node--2">
        <rect class="node-shadow" x="196" y="171" width="130" height="70" />
        <rect class="node-body" x="190" y="165" width="130" height="70" />
        <rect class="node-icon node-icon--magenta" x="203" y="181" width="38" height="38" />
        <text class="node-icon-text" x="222" y="205">IF</text>
        <text class="node-kicker" x="252" y="191">LOGIC</text>
        <text class="node-label" x="252" y="216">Route</text>
        <circle class="node-handle" cx="190" cy="200" r="6" />
        <circle class="node-handle" cx="320" cy="200" r="6" />
      </g>

      <g class="workflow-node workflow-node--3">
        <rect class="node-shadow" x="386" y="61" width="140" height="70" />
        <rect class="node-body" x="380" y="55" width="140" height="70" />
        <rect class="node-icon node-icon--lime" x="393" y="71" width="38" height="38" />
        <text class="node-icon-text" x="412" y="95">AI</text>
        <text class="node-kicker" x="442" y="81">AGENT</text>
        <text class="node-label" x="442" y="106">Draft</text>
        <circle class="node-handle" cx="380" cy="90" r="6" />
        <circle class="node-handle" cx="520" cy="90" r="6" />
      </g>

      <g class="workflow-node workflow-node--4">
        <rect class="node-shadow" x="386" y="281" width="140" height="70" />
        <rect class="node-body" x="380" y="275" width="140" height="70" />
        <rect class="node-icon node-icon--soft" x="393" y="291" width="38" height="38" />
        <text class="node-icon-text" x="412" y="315">OK</text>
        <text class="node-kicker" x="442" y="301">HUMAN</text>
        <text class="node-label" x="442" y="326">Review</text>
        <circle class="node-handle" cx="380" cy="310" r="6" />
        <circle class="node-handle" cx="520" cy="310" r="6" />
      </g>

      <g class="workflow-node workflow-node--5">
        <rect class="node-shadow" x="596" y="171" width="140" height="70" />
        <rect class="node-body" x="590" y="165" width="140" height="70" />
        <rect class="node-icon node-icon--yellow" x="603" y="181" width="38" height="38" />
        <text class="node-icon-text node-icon-text--small" x="622" y="205">OUT</text>
        <text class="node-kicker" x="652" y="191">OUTPUT</text>
        <text class="node-label" x="652" y="216">Publish</text>
        <circle class="node-handle" cx="590" cy="200" r="6" />
      </g>

      <circle class="flow-dot flow-dot--yellow" r="6">
        <animate attributeName="r" values="4;7;4" dur="1.4s" repeatCount="indefinite" />
        <animateMotion dur="1.4s" repeatCount="indefinite"><mpath href="#flow-a" /></animateMotion>
      </circle>
      <circle class="flow-dot flow-dot--magenta" r="6">
        <animate attributeName="r" values="4;7;4" dur="2.2s" repeatCount="indefinite" />
        <animateMotion dur="2.2s" begin="0.25s" repeatCount="indefinite"><mpath href="#flow-b" /></animateMotion>
      </circle>
      <circle class="flow-dot flow-dot--yellow" r="6">
        <animate attributeName="r" values="4;7;4" dur="2.2s" repeatCount="indefinite" />
        <animateMotion dur="2.2s" begin="1.05s" repeatCount="indefinite"><mpath href="#flow-c" /></animateMotion>
      </circle>
      <circle class="flow-dot flow-dot--lime" r="6">
        <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
        <animateMotion dur="2s" begin="0.6s" repeatCount="indefinite"><mpath href="#flow-d" /></animateMotion>
      </circle>
      <circle class="flow-dot flow-dot--magenta" r="6">
        <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
        <animateMotion dur="2s" begin="1.35s" repeatCount="indefinite"><mpath href="#flow-e" /></animateMotion>
      </circle>
    </svg>
  </div>
</template>

<style scoped>
.workflow-diagram {
  width: 100%;
  height: 350px;
}

.workflow-diagram svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.workflow-wire {
  fill: none;
  stroke: rgba(251, 248, 247, 0.5);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 8 9;
}

.node-shadow { fill: #fbe566; }
.node-body { fill: #ffffff; stroke: #15120d; stroke-width: 3; }
.node-icon { stroke: #15120d; stroke-width: 2; }
.node-icon--yellow { fill: #fbe566; }
.node-icon--magenta { fill: #ff00ff; }
.node-icon--lime { fill: #aeee00; }
.node-icon--soft { fill: #fff2a8; }
.node-handle { fill: #77736c; stroke: #ffffff; stroke-width: 2; }

.node-icon-text,
.node-kicker,
.node-label {
  dominant-baseline: middle;
  fill: #15120d;
}

.node-icon-text {
  font-family: "DM Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  text-anchor: middle;
}

.node-icon-text--small { font-size: 8px; }
.node-kicker { fill: #77736c; font-family: "DM Mono", monospace; font-size: 9px; letter-spacing: 1px; }
.node-label { font-family: "Space Grotesk Variable", sans-serif; font-size: 17px; font-weight: 800; }

.flow-dot--yellow { fill: #fbe566; }
.flow-dot--magenta { fill: #ff00ff; }
.flow-dot--lime { fill: #aeee00; }

.workflow-node {
  transform-box: fill-box;
  transform-origin: center;
  animation: node-pulse 5.5s ease-in-out infinite;
}

.workflow-node--1 { animation-delay: 0s; }
.workflow-node--2 { animation-delay: 0.9s; }
.workflow-node--3 { animation-delay: 1.8s; }
.workflow-node--4 { animation-delay: 2.8s; }
.workflow-node--5 { animation-delay: 3.8s; }

@keyframes node-pulse {
  0%, 12%, 100% { transform: translateY(0); opacity: 1; }
  5% { transform: translateY(-4px); opacity: 0.9; }
}

@media (prefers-reduced-motion: reduce) {
  .workflow-node { animation: none; }
  .flow-dot { display: none; }
}
</style>
