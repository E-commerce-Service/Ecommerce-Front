import { MentionHighlighterPipe } from './mention-highlighter.pipe';

describe('MentionHighlighterPipe', () => {
   it('create an instance', () => {
      const pipe = new MentionHighlighterPipe();
      expect(pipe).toBeTruthy();
   });
});
