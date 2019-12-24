import { Component, OnInit } from '@angular/core';
import { ArweaveServiceService } from '../services/arweave-service.service'

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  room = {name: '', peers: [], movie: null}

  user = {
    loggedIn: false,
    displayName: '',
    wallet: {address: '', balance: 0, keystore: null, rawJson: null}
  }


  testRtcTorrentConnectivity() {
              
      var client = new window["WebTorrent"]()
      var torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

      client.add(torrentId, function (torrent) {
          // Torrents can contain many files. Let's use the .mp4 file
          var file = torrent.files.find(function (file) {
              return file.name.endsWith('.mp4')
          })

          // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
          file.renderTo('video#test-stream')
      })
  }
  
  getNames(arrayOfPeers) {
    return arrayOfPeers.map(p => p.name).join(',')
  }
  getTorrentInfo(movie) {
    return '' //todo: magnet link, infohash, download stats...
  }
  constructor(private ass: ArweaveServiceService) {
    
  }
  

  handleFileInput(files: FileList) {
    this.ass.loginWithWalletFile(files.item(0))
  }
  ngOnInit() {
    this.ass.currentWallet$.subscribe((newWallet) => {
      this.user.wallet = newWallet;
    })
  }

}