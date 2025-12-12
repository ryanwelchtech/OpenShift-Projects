# Health Checks + Scaling

Includes a simple Node.js app plus a Deployment with:
- livenessProbe (/healthz)
- readinessProbe (/readyz)
- resource requests/limits
- HorizontalPodAutoscaler (HPA)

## What this demonstrates
- Probes + rollout behavior
- HPA autoscaling (CPU-based)
- Resource requests/limits

## Steps
1. Deploy the app:
   - Option A (Git import): Import from Git with context `health-checks-scaling/app`
   - Option B (YAML): apply `deployment.yaml` (requires an image; Git import is easiest)

2. If using Git import:
   - After app is created, edit the Deployment to add probes OR replace with the included deployment.yaml
   - Apply HPA section (included in deployment.yaml)

## Generate load (simple)
- Use console -> Pod -> Terminal:
  curl -s http://localhost:8080/ > /dev/null
- Or run a loop from a debug pod (if allowed).

## Expected outcome
- Probes show green in Pod details
- HPA increases replicas when CPU crosses target (depending on sandbox quotas)
