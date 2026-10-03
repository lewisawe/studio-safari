import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '62hh3v9t',
    dataset: 'production'
  },
  deployment: {
    // Registered as an external Studio application (points at the local dev
    // Studio) so Sanity Context accepts this project/dataset in GROQ mode.
    appId: 'a18tmsyuqe9immdws7furuqu',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
