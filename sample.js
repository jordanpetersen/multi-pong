{
  nsp:
   Namespace {
     name: '/',
     server:
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Circular],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     sockets: { '/#UvPRD7Z05I7_PEn2AAAA': [Circular] },
     connected: { '/#UvPRD7Z05I7_PEn2AAAA': [Circular] },
     fns: [],
     ids: 0,
     adapter:
      Adapter {
        nsp: [Circular],
        rooms: [Object],
        sids: [Object],
        encoder: Encoder {} },
     _events: { connection: [Function] },
     _eventsCount: 1 },
  server:
   Server {
     nsps: { '/': [Object] },
     _path: '/socket.io',
     _serveClient: true,
     _adapter: [Function: Adapter],
     _origins: '*:*',
     sockets:
      Namespace {
        name: '/',
        server: [Circular],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        adapter: [Object],
        _events: [Object],
        _eventsCount: 1 },
     eio:
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     httpServer:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 5,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     engine:
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 } },
  adapter:
   Adapter {
     nsp:
      Namespace {
        name: '/',
        server: [Object],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        adapter: [Circular],
        _events: [Object],
        _eventsCount: 1 },
     rooms: { '/#UvPRD7Z05I7_PEn2AAAA': [Object] },
     sids: { '/#UvPRD7Z05I7_PEn2AAAA': [Object] },
     encoder: Encoder {} },
  id: '/#UvPRD7Z05I7_PEn2AAAA',
  client:
   Client {
     server:
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Object],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     conn:
      Socket {
        id: 'UvPRD7Z05I7_PEn2AAAA',
        server: [Object],
        upgrading: false,
        upgraded: false,
        readyState: 'open',
        writeBuffer: [Object],
        packetsFn: [Object],
        sentCallbackFn: [],
        cleanupFn: [Object],
        request: [Object],
        remoteAddress: '::1',
        checkIntervalTimer: null,
        upgradeTimeoutTimer: null,
        pingTimeoutTimer: [Object],
        transport: [Object],
        _events: [Object],
        _eventsCount: 3 },
     encoder: Encoder {},
     decoder: Decoder { reconstructor: null, _callbacks: [Object] },
     id: 'UvPRD7Z05I7_PEn2AAAA',
     request:
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/?EIO=3&transport=polling&t=LMKqjAX',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     onclose: [Function: bound ],
     ondata: [Function: bound ],
     onerror: [Function: bound ],
     ondecoded: [Function: bound ],
     sockets: { '/#UvPRD7Z05I7_PEn2AAAA': [Circular] },
     nsps: { '/': [Circular] },
     connectBuffer: [] },
  conn:
   Socket {
     id: 'UvPRD7Z05I7_PEn2AAAA',
     server:
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     upgrading: false,
     upgraded: false,
     readyState: 'open',
     writeBuffer: [ [Object] ],
     packetsFn: [ undefined ],
     sentCallbackFn: [],
     cleanupFn: [ [Function], [Function] ],
     request:
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/?EIO=3&transport=polling&t=LMKqjAX',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     remoteAddress: '::1',
     checkIntervalTimer: null,
     upgradeTimeoutTimer: null,
     pingTimeoutTimer:
      { _called: false,
        _idleTimeout: 85000,
        _idlePrev: [Object],
        _idleNext: [Object],
        _idleStart: 2937,
        _onTimeout: [Function],
        _repeat: null },
     transport:
      XHR {
        readyState: 'open',
        discarded: false,
        closeTimeout: 30000,
        maxHttpBufferSize: 100000000,
        httpCompression: [Object],
        supportsBinary: true,
        _events: [Object],
        _eventsCount: 5,
        sid: 'UvPRD7Z05I7_PEn2AAAA',
        req: null,
        res: null,
        writable: false },
     _events:
      { close: [Object],
        data: [Function: bound ],
        error: [Function: bound ] },
     _eventsCount: 3 },
  rooms: {},
  acks: {},
  connected: true,
  disconnected: false,
  handshake:
   { headers:
      { host: 'localhost:3000',
        connection: 'keep-alive',
        pragma: 'no-cache',
        'cache-control': 'no-cache',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        accept: '*/*',
        referer: 'http://localhost:3000/',
        'accept-encoding': 'gzip, deflate, sdch',
        'accept-language': 'en-US,en;q=0.8',
        cookie: 'io=Tit_XRL0KPWkNtJyAAAA' },
     time: 'Mon Jun 27 2016 20:24:52 GMT-0600 (MDT)',
     address: '::1',
     xdomain: false,
     secure: false,
     issued: 1467080692397,
     url: '/socket.io/?EIO=3&transport=polling&t=LMKqjAX',
     query: { EIO: '3', transport: 'polling', t: 'LMKqjAX' } } }