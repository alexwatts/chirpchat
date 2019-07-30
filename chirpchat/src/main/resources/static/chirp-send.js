const { Chirp } = ChirpSDK;

Chirp({ key: 'f298EfBA9cB17E785fD0AB58c' }).then(sdk => {
    let rc = sdk.start()
    if (rc !== 0) console.warn(sdk.errorToString(rc))
    rc = sdk.send('EXAMPLE-TOKEN-CHAT-SESSION-17')
    if (rc !== 0) console.warn(sdk.errorToString(rc))
}).catch(console.error)


