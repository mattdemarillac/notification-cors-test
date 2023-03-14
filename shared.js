// Best to keep the default setup configuration by leaving this in the root folder, we don't want webpack bundling service workers by mistake -
// this could cause some issues.

onconnect = (e) => {
    const port = e.ports[0]

    port.addEventListener("message", (e) => {
        port.postMessage(e.data)
    })

    port.start() // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
}
