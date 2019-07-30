const { Chirp, toAscii } = ChirpSDK;

Chirp({
    key: 'f298EfBA9cB17E785fD0AB58c',
    onReceived: data => {
        if (data.length > 0) {
            console.log(toAscii(data))
            alert(toAscii(data));
        } else {
            console.error('Decode failed')
        }
    }
}).then(sdk => {
    let rc = sdk.start()
    if (rc !== 0) console.warn(sdk.errorToString(rc))
}).catch(console.error)

