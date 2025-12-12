# ConfigMaps + Secrets

Demonstrates common patterns:
- envFrom ConfigMap/Secret
- volume-mounted Secret file
- app reads configuration

## Steps (recommended)
1. Import the app from Git:
   - Context dir: `config-secrets/app`
2. Apply YAML in this folder:
   oc apply -f configmap.yaml
   oc apply -f secret.yaml
   oc apply -f deployment.yaml
3. Open the Route and hit:
   - /env to see injected env vars
   - /secret to confirm file-mounted secret

## Notes
- In Sandbox, Secrets are base64 encoded in YAML.
- Never commit real secrets. Use placeholders for demo.
