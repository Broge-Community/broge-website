// src/plugins/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faTelegram,
  faTwitter,
  faTiktok,
  faReddit,
  faTrello,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

library.add(faTelegram, faTwitter, faTiktok, faReddit, faTrello, faGithub, faCopy);

export { FontAwesomeIcon };
