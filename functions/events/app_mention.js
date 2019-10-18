const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* app_mention event
*
*   All events use this template, simply create additional files with different
*   names to add event responses
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {

  // Only send a response to certain messages
  if (text.match(/casual women/i)) {
    callback(null, {
      text: `<@${user}> Here are some stores that have sustainable casual clothes for women:
      • Everlane (https://www.everlane.com/)
      • Reformation (https://www.thereformation.com/)
      • Ace & Jig (https://aceandjig.com/)
      • Christy Dawn (https://christydawn.com/)
      • People Tree (https://www.peopletree.co.uk/)
      • Klow (https://www.klow.co.uk/)
      • Rent the Runway (https://www.renttherunway.com/)
      • Thought Clothing (https://www.wearethought.com/)`,
    });
  } else if (text.match(/casual men/i)) {
    callback(null, {
      text: `<@${user}> Here are some stores that have sustainable casual clothes for men:
      • Everlane (https://www.everlane.com/)
      • People Tree (https://www.peopletree.co.uk/)
      • Klow (https://www.klow.co.uk/)
      • Thought Clothing (https://www.wearethought.com/)
      • Tact & Stone (https://tactandstone.com/)
      • Kotn (https://kotn.com/)
      • Older Brother (https://olderbrother.us/)
      • Jungmaven (https://jungmaven.com/)`,
    });
  } else if (text.match(/formal women|formal men|athleisure women|athleisure men|shoes|home goods/i)) {
    callback(null, {
      text: `Sorry <@${user}> that is not a command I support, but it is coming soon!!`,
    });
  } else if (text.match(/ you're the best/i)){
    callback(null, {
      text: `No you're the best <@${user}>! You're so trendy and sustainable!\n`,
    });
  } else if (text.match(/hey|hello|hi|sup/i)){
    callback(null, {
      text: `Hey there! <@${user}> here are the sustainable products you can ask me for: \nCasual Women\nCasual Men\n _Coming soon: Formal Women, Formal Men, Athleisure Women, Athleisure Men, Shoes, and Home Goods_`,
    });
  } else {
    callback(null, {
      text: `Sorry <@${user}> that is not a command I support.`,
    });
  }
};
