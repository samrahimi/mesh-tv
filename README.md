# mesh-tv

A fully decentralized, serverless, and permanent webapp hosted on Arweave, a specialized Blockchain that deals in file storage, with massive replication making it impossible to take down content once posted.

The app lets you create an ad-hoc p2p chat room and TV lounge, handling peer discovery and exchange of webrtc signaling messages by seeding the data as tiny 1-piece torrents on webtorrent, and posting the hashes to Arweave.

Chat and player behavior are synchronized in realtime over a full mesh p2p connection using simple-peer (RTCDataChannel).

But chat by itself is boring. Room creators can specify a movie that the group will watch in sync (they provide the hash to a torrent, start downloading and seeding the torrent from their browser, and share the hash with all other clients in the room, causing their browsers to do the same. Once everyone has buffered for a few seconds, the host sends a signal that causes everyone's video player to start playing the movie at the same time (webtorrent supports streaming in-memory torrent downloads)

Torrent hashes and contents are posted to an Arweave feed the first time a torrent is streamed, creating a badly needed database of torrents with webrtc seeds (webtorrent in the browser cannot connect to ordinary bittorrent seeders, however, the webtorrent desktop app automatically seeds both ways. 

So, the easiest way to add content to this parallel browser-based torrent univers is to use such an app exactly as you otherwise would (remember, even if you don't have the content on your machine, you can start downloading it from ordinary BT network and it will automatically start seeding over both networks by default - and my research has found that a sizable % of popular torrents are already being seeded over webrtc, by random people using these newer torrent apps.

Then just sit back, relax, and enjoy some popcorn time with friends old and new...

... and if Arweave and btRTC are mature and performant enough to deal with the metadata, anyone with a decent internet connection now has access to a permanent, anonymous, and social way of easily streaming anything they could find on netflix and a whole lot more. For a fraction of a penny's worth of Arweave storage charges.

* did I mention that the app can never be shut down? Not that it will even be an issue, as I'm sure you're all law abiding citizens who will steer clear of copyrighted material and spend hours watching Big Buck Bunny. Have fun!
