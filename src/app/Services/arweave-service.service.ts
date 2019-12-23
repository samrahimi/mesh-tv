import { Injectable } from '@angular/core';

@Injectable()
export class ArweaveServiceService {
public 
  constructor() { }
/*
Previously shared: The Group Identifier

Peer peer1, peer2 are completely unaware of each other's 
online presence, or how to contact each other 

peer1 and peer2 visit  https://arweave_page_url#unique_group_id
* whoever gets there first becomes peer1

groupId=getGroupIdFromUrl()

p1.isinitiator

p1.on('signal', (signalData,groupId,MY_WALLET_ID) => {
  //the signal data gets seeded to bittorrent, and is seeded there until //picked up by the next peer to arrive in the room. 
  var torrentInfoHash = webtorrent.seed(signalData, expireAfter(1 hour))


  //because there is no way for peer 2 to know the "filename" of the 
  //signal data due to the distributed-hash-table nature of torrents, 
  //we associate the group_id: torrent_hash and upload to arweave  

  arweave.post({
    namespace: 'im.svnc.artv', 
    dest_group_id: groupId,
    time_sent: time,

  }, MY_WALLET_ID)

  saveTorrentHashToBrowserStorage() 

})


p2.every(10 seconds)
.getLatestSignalData(group_id, count = 1).then(signalDataFromPeer1() => {
  //start the STUNNING and negotiate a connection to peer 1. 
  //
  //say hi, peer 1 will send you an update with everyone else's signaling data
  //you are now a full grown Peer and are responsible for onboarding peer 3 
  //just like peer 2 introduced you to all his buddies :)


})

('on', getMessagesWithArql)*/

/* import $ from 'cash-dom';
import Arweave from 'arweave/web';
import {accounts} from "./accounts";
import {links} from "./links";
import {votes} from "./votes";

export const arweave = Arweave.init({});

export class App {
  static appName = 'arweaveapps';
  static appVersion = '0.1.6';

  constructor() {
    window.onhashchange = () => this.hashChanged();
  }

  init() {
    accounts.init();
    links.init();
    votes.init();

    this.hashChanged();
    this._events();
  }

  hashChanged() {
    let page = 'home';

    if(window.location.hash) {
      const newPage = window.location.hash.substring(1).split('?')[0];

      if(newPage === 'logout') {
        window.location.href = window.location.href.split('#')[0];
      } else if(newPage === 'publish' && !accounts.isLoggedIn) {
        page = 'home';
      } else if(newPage === 'home' || newPage === 'publish' || newPage === 'view') {
        page = newPage;
      } else if(newPage.indexOf('/') > 0) {
        const go = () => {
          if(!links.isContentLoaded) {
            return setTimeout(() => go(), 100);
          }

          const link = newPage.split('/');
          const $elem = $(`[data-repository="${links.toSlug(link[0])}/${links.toSlug(link[1])}"]`);
          if($elem.length) {
            window.location.href = $elem.find('.js-addy-link').attr('href');
          }
        };
        console.log(newPage.split('/'));
        go();
      }
    }

    $('[id^="page-"]').hide();
    $(`#page-${page}`).show();

    $('.js-page-active').removeClass('active');
    $(`.js-page-active[data-page=${page}]`).addClass('active');
  }

  _events() {
    M.FormSelect.init(document.querySelectorAll('select'));
  }
}
export const app = new App();
app.init(); */



}