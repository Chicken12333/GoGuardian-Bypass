function generateIframe() {
    var url = document.getElementById('https://blocked.goguardian.com/?ctx=YWZpPTExODE3NzkmYXBpPTc2ODc5Jm9pPTE2MTE5NzQxMzE5Jm91PWh0dHBzJTNBJTJGJTJGd3d3LmRldmlhbnRhcnQuY29tJTJGdGlsNjclMkZmYXZvdXJpdGVzJTJGOTMzOTU4NzUlMkZvbmRpbmUtZXQtZmxvcmEmcnM9QURNSU5fU0lURV9DQVRFR09SWV9GSUxURVImc2NpPTUmc3Q9Y2hyb21pdW0tbSZ2PTE%3D&sum=7962f5fa').value;
    var iframe = document.createElement('iframe');
    iframe.src = url;
    document.body.appendChild(iframe);
}

document.getElementById('url').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        generateIframe();
    }
https://blocked.goguardian.com/?ctx=YWZpPTExODE3NzkmYXBpPTc2ODc5Jm9pPTE2MTE5NzQxMzE5Jm91PWh0dHBzJTNBJTJGJTJGd3d3LmRldmlhbnRhcnQuY29tJTJGdGlsNjclMkZmYXZvdXJpdGVzJTJGOTMzOTU4NzUlMkZvbmRpbmUtZXQtZmxvcmEmcnM9QURNSU5fU0lURV9DQVRFR09SWV9GSUxURVImc2NpPTUmc3Q9Y2hyb21pdW0tbSZ2PTE%3D&sum=7962f5fa
