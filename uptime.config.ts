// https://github.com/lyc8503/UptimeFlare/wiki/Configuration

import { env } from './env'

const pageConfig = {
  // Title for your status page
  title: "Weidow's Status-page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/Weidows', label: 'GitHub' },
    { link: 'https://home.weidows.tech', label: 'Home' },
    { link: 'mailto:ceo@weidows.tech', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // // Example HTTP Monitor
    // {
    //   // `id` should be unique, history will be kept if the `id` remains constant
    //   id: 'foo_monitor',
    //   // `name` is used at status page and callback message
    //   name: 'My API Monitor',
    //   // `method` should be a valid HTTP Method
    //   method: 'POST',
    //   // `target` is a valid URL
    //   target: 'https://example.com',
    //   // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
    //   tooltip: 'This is a tooltip for this monitor',
    //   // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
    //   statusPageLink: 'https://example.com',
    //   // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
    //   expectedCodes: [200],
    //   // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
    //   timeout: 10000,
    //   // [OPTIONAL] headers to be sent
    //   headers: {
    //     'User-Agent': 'Uptimeflare',
    //     Authorization: 'Bearer YOUR_TOKEN_HERE',
    //   },
    //   // [OPTIONAL] body to be sent
    //   body: 'Hello, world!',
    //   // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
    //   responseKeyword: 'success',
    //   // [OPTIONAL] if specified, the check will run in your specified region,
    //   // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
    //   checkLocationWorkerRoute: 'https://xxx.example.com',
    // },
    // // Example TCP Monitor
    // {
    //   id: 'test_tcp_monitor',
    //   name: 'Example TCP Monitor',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'TCP_PING',
    //   // `target` should be `host:port` for tcp monitors
    //   target: '1.2.3.4:22',
    //   tooltip: 'My production server SSH',
    //   statusPageLink: 'https://example.com',
    //   timeout: 5000,
    // },

    // weidows.tech
    // ========================================================================
    {
      id: 'home.weidows.tech',
      name: 'homepage',
      method: 'GET',
      target: 'https://home.weidows.tech',
      statusPageLink: 'https://home.weidows.tech',
    },
    {
      id: 'blog.weidows.tech',
      name: 'blog.weidows.tech',
      method: 'GET',
      target: 'https://blog.weidows.tech',
      statusPageLink: 'https://blog.weidows.tech',
    },
    {
      id: 'monitor.weidows.tech',
      name: 'monitor',
      method: 'GET',
      target: 'https://monitor.weidows.tech',
      statusPageLink: 'https://monitor.weidows.tech',
    },
    {
      id: 'nav.weidows.tech',
      name: 'nav',
      method: 'GET',
      target: 'https://nav.weidows.tech',
      statusPageLink: 'https://nav.weidows.tech',
    },
    {
      id: 'apprise.weidows.tech',
      name: 'apprise',
      method: 'GET',
      target: 'https://apprise.weidows.tech',
      expectedCodes: [200, 404],
    },

    // 自用代理
    {
      id: 'docker.hub.weidows.tech',
      name: 'docker mirror',
      method: 'GET',
      target: 'https://docker.hub.weidows.tech',
      statusPageLink: 'https://docker.hub.weidows.tech',
    },
    {
      id: 'bili.px.weidows.tech',
      name: 'bili server',
      method: 'GET',
      target: 'https://bili.px.weidows.tech',
      // statusPageLink: 'https://bili.px.weidows.tech',
    },

    // others
    // ========================================================================
    {
      id: 'weidows.github.io',
      name: 'weidows.github.io',
      method: 'GET',
      target: 'https://weidows.github.io',
      statusPageLink: 'https://weidows.github.io',
    },
    {
      id: 'weidows-projects.github.io/Keeper',
      name: 'Keeper-ssl-check',
      method: 'GET',
      target: 'https://weidows-projects.github.io/Keeper/',
      statusPageLink: 'https://weidows-projects.github.io/Keeper/',
    },

    // server
    // ========================================================================
    {
      id: 'weidows@serv00',
      name: 'serv00',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: 's4.serv00.com:22',
      timeout: 10000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: 'https://apprise.weidows.tech/notify',
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    // recipientUrl: "tgram://bottoken/ChatID",
    recipientUrl: env.recipientUrl,
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
