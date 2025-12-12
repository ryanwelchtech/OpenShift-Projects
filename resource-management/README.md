# Resource Management (Quotas + Limits)

Applies namespace controls commonly used in enterprise OpenShift:
- ResourceQuota: cap total CPU/memory/pods
- LimitRange: enforce default requests/limits

## Apply
oc apply -f quotas.yaml
oc apply -f limits.yaml

## Validate
oc describe resourcequota namespace-quota
oc describe limitrange namespace-limits

## Notes
If the sandbox already enforces quotas, you may see constraints or conflicts. In that case:
- Keep the YAML in Git for portfolio
- Mention "validated quota/limit behavior against sandbox constraints"
