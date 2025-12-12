# OpenShift Virtualization (CNV/KubeVirt)

This folder provides example manifests for VM provisioning using OpenShift Virtualization.

## What this demonstrates
- VM definitions (VirtualMachine)
- Template-based VM workflows
- Hybrid VM + container operations in a Kubernetes-native environment

## Sandbox Notes
Permissions vary by sandbox. If you can create VMs via the UI templates, you can still:
- Export YAML from the UI and store it here
- Capture screenshots for the repo (screenshots/)

## Suggested workflow
1. Create a VM from a template in the OpenShift UI (Virtualization perspective)
2. Confirm boot + console access
3. Export YAML and place it in vm-templates/
4. Take screenshots of:
   - VM list
   - VM details
   - Console session
   - Volume/Storage view
