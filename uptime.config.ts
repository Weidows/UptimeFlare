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

    // ========================================================================
    // weidows.tech
    // ========================================================================
    {
      id: 'weidows.tech',
      name: 'weidows.tech | 主页 - 网址导航',
      method: 'GET',
      target: 'https://weidows.tech',
      statusPageLink: 'https://weidows.tech',
    },
    {
      id: 'blog.weidows.tech',
      name: 'blog.weidows.tech | 博客',
      method: 'GET',
      target: 'https://blog.weidows.tech',
      statusPageLink: 'https://blog.weidows.tech',
    },
    {
      id: 'vaultwarden.weidows.tech',
      name: 'vaultwarden | 自建密码管理平台',
      method: 'GET',
      target: 'https://vaultwarden.weidows.tech',
      statusPageLink: 'https://vaultwarden.weidows.tech',
    },
    {
      id: 'pan.weidows.tech',
      name: 'alist | 个人网盘',
      method: 'GET',
      target: 'https://pan.weidows.tech',
      statusPageLink: 'https://pan.weidows.tech',
    },
    {
      id: 'shop.weidows.tech',
      name: 'shop | 商店',
      method: 'GET',
      target: 'https://shop.weidows.tech',
      statusPageLink: 'https://shop.weidows.tech',
    },
    {
      id: 'sink.weidows.tech',
      name: 'sink | 短连接平台',
      method: 'GET',
      target: 'https://sink.weidows.tech',
      statusPageLink: 'https://sink.weidows.tech',
    },
    {
      id: 'paperkite.bt.weidows.tech',
      name: 'paperkite | BT搜索',
      method: 'GET',
      target: 'https://paperkite.bt.weidows.tech',
      statusPageLink: 'https://paperkite.bt.weidows.tech',
    },
    {
      id: 'psub.px.weidows.tech',
      name: 'psub.px.weidows.tech | 加密订阅转换',
      method: 'GET',
      target: 'https://psub.px.weidows.tech',
      statusPageLink: 'https://psub.px.weidows.tech',
    },

    // API
    // ========================================================================
    {
      id: 'apprise.weidows.tech',
      name: 'apprise | Message 聚合推送',
      method: 'GET',
      target: 'https://apprise.weidows.tech',
      expectedCodes: [200, 404],
    },
    {
      id: 'referer.counter.weidows.tech',
      name: 'referer.counter | SVG 访问计数',
      method: 'GET',
      target: 'https://referer.counter.weidows.tech/@Weidows/Cloudflare/UptimeFlare',
    },
    {
      id: 'moe.counter.weidows.tech',
      name: 'moe.counter | Anime-SVG 访问计数',
      method: 'GET',
      target: 'https://moe.counter.weidows.tech/@Weidows-Cloudflare-UptimeFlare?theme=rule34',
    },
    {
      id: 'cors.px.weidows.tech',
      name: 'CORS-proxy',
      method: 'GET',
      target: 'https://cors.px.weidows.tech',
    },

    // 自用代理
    // ========================================================================
    {
      id: 'bili.px.weidows.tech',
      name: 'bili-server',
      method: 'GET',
      target: 'https://bili.px.weidows.tech',
      // statusPageLink: 'https://bili.px.weidows.tech',
    },
    {
      id: 'sub.px.weidows.tech',
      name: '订阅聚合',
      method: 'GET',
      target: 'https://sub.px.weidows.tech',
      // statusPageLink: 'https://sub.px.weidows.tech',
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

    // server
    // ========================================================================
    {
      id: 'serv00.monitor.weidows.tech',
      name: '服务监控',
      method: 'GET',
      target: 'https://serv00.monitor.weidows.tech',
      // statusPageLink: 'https://serv00.monitor.weidows.tech',
    },
    // {
    //   id: 'weidows@serv00',
    //   name: 'serv00',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'TCP_PING',
    //   // `target` should be `host:port` for tcp monitors
    //   target: 'web4.serv00.com:80',
    //   timeout: 5000,
    // },
    {
      id: 'weidows@serv00',
      name: 'serv1',
      method: 'GET',
      target: 'https://web4.serv00.com',
      expectedCodes: [200, 404, 526, 530],
    },
    {
      id: 'Gresham@serv00',
      name: 'serv2-px',
      method: 'GET',
      target: 'https://gresham.serv00.net/info',
      // statusPageLink: 'https://gresham.serv00.net/status',
    },
    {
      id: 'Barnhart@serv00',
      name: 'serv3-px',
      method: 'GET',
      target: 'https://barnhart.serv00.net/info',
      // statusPageLink: 'https://barnhart.serv00.net/status',
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
    // gracePeriod: 1,
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
