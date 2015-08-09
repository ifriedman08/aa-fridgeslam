# Fridgeslam, making poetry cool again


## Minimum Viable Product
Fridgeslam: inspired by the wordsmiths at Urban Dictionary, Fridgeslam is a place to express and show off your poetic side. If you are feeling like a solo artist, pick from randomly generated words as they come to compose your poetic slam. Or if, you are feeling more social, create a slam one-word-at-a-time with friends.

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Root = Slam index
- [ ] Create sessions (log in)
- [ ] Create solo slams
- [ ] Post solo slams
- [ ] View slams
- [ ] Add friends
- [ ] Create group slams with friends
- [ ] Like finished slams
- [ ] Slam rankings page
- [ ] Newest slams page

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Public Home Page (All Slam Index) User Authentication (~1 day)
Firstly, I will make a public root index page showing all slams and 'likes' but the user will have to sign in to contribute. I will also implement basic user auth/signin capability, leading a user to an index of slams to which they have contributed.

[Details][phase-one]

### Phase 2: Creating and posting solo slams (~2 days)
Once a user has created an account, they can start with solo slams. The user will select on word at a time from groups of randomly generated words, with optional punctuation, and, once done, can post the finished slam to their profile for others to read.

[Details][phase-two]

### Phase 3: Adding Friends (~2 days)
By the end of this phase, a user will be able to search for friends by username, send a 'friend request', and, if, accepted, see a link to the friend's profile on their landing-page dashboard.

[Details][phase-three]

### Phase 4: Creating and posting group slams
Once a user has friends, they can invite or be invited by others to form group slams in which each user contributes to the growing poem, in turn, one word at a time. The user will be able to track pending slams on their dashboard.

[Details][phase-four]

### Phase 5: Searching for Blogs and Posts (~2 days)
Lastly, I will implement a 'like'-based ranking system. Users (only those registered) can 'like' group or solo slams by others, adding to that slam's ranking. I will also implement a feed for users to view the newest slams and start 'liking' them.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] 'Slam'-offs
- [ ] Follow your favorite slammers
- [ ] Pagination/infinite scroll
- [ ] User ranking page
- [ ] Share via Facebook/Twitter/email
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
