# App Deployment (Git Import)

A simple Node.js (Express) app meant to be imported into OpenShift using:
- Developer Console: "+Add" -> "Import from Git"
- Build strategy: S2I (Node.js)

## What this demonstrates
- OpenShift Git import workflow
- Build + deploy from source
- Route exposure
- Basic observability (pods/logs)

## Steps (OpenShift Console)
1. In your project (ex: project-name), go to Developer perspective (if available).
   If you only see Administrator, use Administrator -> Workloads instead.
2. Add -> Import from Git
3. Git Repo URL: your fork of this repo
4. Context dir: `app-deployment/src`
5. Builder image: Node.js (OpenShift detects it)
6. Create Route: enabled
7. Create

## Validate
- Workloads -> Deployments -> your app -> Pods -> View logs
- Networking -> Routes -> open URL
- Verify endpoints:
  - GET /         -> "OK"
  - GET /healthz  -> liveness style endpoint
  - GET /readyz   -> readiness style endpoint

## Optional (oc CLI)
oc project project-name
oc get pods
oc logs deploy/app-deployment
oc get route
