const uppercaseFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default (quests) => {
  if (! (quests.QuestMoussuPicchu && quests.QuestMoussuPicchu.elements)) {
    return '';
  }

  const quest = {
    rainPercent: quests?.QuestMoussuPicchu?.elements?.rain?.percent || 0,
    rainLevel: quests?.QuestMoussuPicchu?.elements?.rain?.level || null,
    stormPercent: quests?.QuestMoussuPicchu?.elements?.storm?.percent || 0,
    stormLevel: quests?.QuestMoussuPicchu?.elements?.storm?.level || null,
    windPercent: quests?.QuestMoussuPicchu?.elements?.wind?.percent || 0,
    windLevel: quests?.QuestMoussuPicchu?.elements?.wind?.level || null,
  };

  if ('none' !== quest.stormLevel) {
    return `${quest.stormLevel} storm`;
  }

  return `${uppercaseFirst(quest.windLevel)} Wind (${quest.windPercent}%), ${uppercaseFirst(quest.rainLevel)} Rain (${quest.rainPercent}%)`;
};
