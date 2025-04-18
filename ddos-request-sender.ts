const localhost = false;
const hostUrl: string = localhost ? "http://localhost:4000" : "https://bachelor.15263748.xyz";
const requestCount = 1000;

const options = {
  method: "POST",
  headers: {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,da;q=0.8",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "Referer": `${hostUrl}/index.html`,
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  body: JSON.stringify({
    sessionId: "41edc24a34b04db254dce62d033e5278",
    event: "buttonClicked",
    time: "2025-02-19T10:24:39.065Z",
    details: { Text: `Chapter 1  The Boy Who Lived Mr and Mrs Dursley of number four Privet Drive were proud to say that they were perfectly normal thank you very much Mr Dursley made drills He was a big beefy man with hardly any neck although he did have a very large moustache Mrs Dursley was thin and blonde and had twice the usual amount of neck which came in very useful as she spent so much of her time spying on the neighbours The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere Mrs Dursley had a sister called Lily Potter She and her husband James Potter had a son called Harry Potter They lived far from the Dursleys and did not speak to them much They did not get along One day a man appeared outside of the Dursleys house He was tall thin and very old judging by the silver of his hair and beard which were both long enough to tuck into his belt He was wearing long robes a purple cloak that swept the ground and highheeled buckled boots His blue eyes were light bright and sparkling behind halfmoon spectacles and his nose was very long and crooked as though it had been broken at least twice This mans name was Albus Dumbledore  He had come to meet his friend who had been watching over the Dursleys house His friend was called Professor McGonagall They had come to talk about some sad news Hello Professor Dumbledore said have you heard the news about the Potters They have tragically died Their son needs a place to stay I see you have found the only family that he has left Do you think they will be suitable Dumbledore questioned They are all he has got Professor McGonagall replied Just as they were talking about Harry Potters future a motorbike could be heard coming from behind them It was Hagrid soaring through the sky and crashing in front of them Hagrid had a special parcel he was delivering In his vast muscular arms he was holding a bundle of blankets Hagrid said Dumbledore sounding relieved At last where did you get that motorcycle I borrowed it Professor Dumbledore said the giant climbing carefully off the motorcycle as he spoke Dumbledore and Professor McGonagall bent forward over the bundle of blankets Inside just visible was to baby boy fast asleep Under to tuft of jetblack hair over his forehead they could see to curiously shaped cut like to bolt of lightning Dumbledore took the bundle of blankets stepped over the low garden wall and walked to the front door He laid Harry gently on the doorstep took to letter out  of his cloak and tucked it inside Harrys blankets and then came back to the other two For a minute the three of them stood and looked at the little bundle Hagrids shoulders shook Professor McGonagall blinked furiously and the twinkling Light that usually shone in Dumbledores eyes seemed to have gone out The next morning Mrs Dursley went out to collect her milk bottles from the front door and noticed a strange sight on the step of her door She screamed Inside the bundle of blankets she noticed the baby and picked ` }
  })
};

async function sendRequests(): Promise<void> {
  console.log(`\nSending ${requestCount} requests to ${hostUrl}...\n`);

  const endpointUrl = `${hostUrl}/api/event`;
  const startTime = Date.now();

  const requests = Array(requestCount).fill(null).map(() =>
    fetch(endpointUrl, options).catch(() => { })
  );

  await Promise.all(requests);
  const elapsedTime = Date.now() - startTime;
  console.log(`Sent ${requestCount} requests to ${endpointUrl} in ${elapsedTime}ms\n`);
  process.exit(0);
}

sendRequests().catch(console.error);