function FindProxyForURL(url, host) {
    // YouTubeのドメインをブロック（youtube.com、youtu.beおよびそのサブドメイン）
    if (dnsDomainIs(host, "youtube.com") ||
        shExpMatch(host, "*.youtube.com") ||
        dnsDomainIs(host, "youtu.be") ||
        shExpMatch(host, "*.youtu.be")) {
        // 存在しないプロキシを指定 → アクセスをブロック
        return "PROXY 127.0.0.1:8080";
    }
    // それ以外は直接アクセス
    return "DIRECT";
}
