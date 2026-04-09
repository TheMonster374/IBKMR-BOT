const baileys = await import('@whiskeysockets/baileys');

const { 
  default: _makeWaSocket,
  makeWALegacySocket,
  proto,
  downloadContentFromMessage,
  jidDecode,
  areJidsSameUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  WAMessageStubType,
  extractMessageContent 
} = baileys;

//...rest of the existing code remains unchanged
