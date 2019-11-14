const { markdownToHtml } = require('./markdown');
const { getLabelColor: getlabelColor } = require('./utils');

const queryPages = /* GraphQL */ `
  query($conferenceTitle: ConferenceTitle, $eventYear: EventYear) {
    conf: conferenceBrand(where: { title: $conferenceTitle }) {
      id
      status
      year: conferenceEvents(where: { year: $eventYear }) {
        id
        status
        openForTalks
        speakers: pieceOfSpeakerInfoes {
          status
          id
          label
          speaker {
            id
            name
            company
            country
            bio
            githubUrl
            twitterUrl
            avatar {
              url
            }
          }
        }
      }
    }
  }
`;

const getSocials = speaker => {
  const ICONS = {
    githubUrl: 'gh',
    twitterUrl: 'tw',
    mediumUrl: 'med',
    ownSite: 'site',
  };
  const { githubUrl, twitterUrl, mediumUrl, ownSite, companySite } = speaker;
  const socials = Object.entries({ githubUrl, twitterUrl, mediumUrl, ownSite, companySite })
    .map(([key, val]) => (val && { link: val, icon: ICONS[key] }))
    .filter(Boolean);
  return socials;
};

const fetchData = async (client, vars) => {
  const data = await client
    .request(queryPages, vars)
    .then(res => ({ speakers: res.conf.year[0].speakers, openForTalks: res.conf.year[0].openForTalks }));

  const { openForTalks } = data;

  const speakers = data.speakers
    .map(item => ({
      ...item.speaker,
      ...item,
      avatar: item.speaker.avatar || {},
    }))
    .map(
      async ({
        bio,
        speaker,
        avatar,
        ...item
      }) => ({
        ...item,
        company: `${item.company}, ${item.country}`,
        avatar: avatar.url,
        bio: await markdownToHtml(bio),
        socials: getSocials(item),
        ...getlabelColor(item.label),
      })
    );

  return {
    speakers: await Promise.all(speakers),
    speakersBtn: openForTalks ? 'CALL FOR SPEAKERS' : false,
  };
};

module.exports = {
  fetchData,
};
