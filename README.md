# EH Innenarchitektur

## Deployment

Deployments are powered by [Deployer](https://deployer.org/). The following main tasks are executed:

- Check out repository
- Upload `./web/dist`
- Set folder permissions
- Install composer packages
- Clear craft cache

Deploys are zero-downtime on file level. The DB, however, may still temporarily be down until DB updates are applied, i.e. by syncing `project.yaml`.
Files modified by Craft (uploaded photos & files, storage etc.) are shared between releases.

Relevant tasks:

```bash
# Build assets (equivalent to `npm run build`)
dep build

# Deploy project
dep deploy

# Build assets & deploy project
dep go

# ... plus all built-in tasks, such as `dep rollback` etc.
```

This deploys to Staging by default. In order to deploy to Production, append `production` to the tasks, i.e. `dep go production`.
